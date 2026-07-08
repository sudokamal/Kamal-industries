import nodemailer, { Transporter } from "nodemailer";

export interface EnquiryEmailData {
  id: string;
  fullName: string;
  companyName?: string | null;
  phone: string;
  whatsapp?: string | null;
  email?: string | null;
  state?: string | null;
  city?: string | null;
  productRequired?: string | null;
  stoneType: string;
  requiredSize?: string | null;
  thickness?: string | null;
  quantity: string | number;
  deliveryLocation?: string | null;
  deliveryDate?: string | null;
  projectType?: string | null;
  additionalRequirements?: string | null;
  createdAt: Date;
}

function isResendActive(): boolean {
  const key = process.env.RESEND_API_KEY;
  return !!key && !key.includes("your_resend_api_key");
}

function createTransporter(): Transporter {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user) {
    console.error("[SMTP Library Error] Missing GMAIL_USER in environment.");
    throw new Error("SMTP configuration is incomplete: GMAIL_USER environment variable is missing.");
  }

  if (!pass) {
    console.error("[SMTP Library Error] Missing GMAIL_APP_PASSWORD in environment.");
    throw new Error("SMTP configuration is incomplete: GMAIL_APP_PASSWORD environment variable is missing.");
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for port 587 (STARTTLS)
    auth: { user, pass },
  });
}

async function verifyAndSendMail(transporter: Transporter, mailOptions: nodemailer.SendMailOptions): Promise<nodemailer.SentMessageInfo> {
  try {
    console.log("[SMTP Library] Verifying SMTP connection...");
    await transporter.verify();
    console.log("[SMTP Library] SMTP handshake verified successfully.");
  } catch (verifyErr: unknown) {
    const err = verifyErr as Error;
    console.error("[SMTP Library] SMTP verification failed:", err);
    throw new Error(`Gmail SMTP authentication failed: ${err.message || String(err)}`);
  }

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("[SMTP Library] Email dispatched successfully. Message ID:", info.messageId);
    return info;
  } catch (sendErr: unknown) {
    const err = sendErr as Error;
    console.error("[SMTP Library] Failed to send email:", err);
    throw err;
  }
}

async function sendViaResend(mailOptions: nodemailer.SendMailOptions): Promise<nodemailer.SentMessageInfo> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = "onboarding@resend.dev";
  const toEmail = Array.isArray(mailOptions.to) ? mailOptions.to.join(", ") : String(mailOptions.to);

  console.log(`[SMTP Library] RESEND_API_KEY loaded. Attempting delivery via Resend API to: ${toEmail}...`);

  let finalFrom = `Kamal Industries <${fromEmail}>`;
  if (mailOptions.from) {
    const fromStr = String(mailOptions.from);
    const nameMatch = fromStr.match(/^"([^"]+)"|([a-zA-Z0-9_ ]+)/);
    const displayName = nameMatch ? (nameMatch[1] || nameMatch[2]).trim() : "Kamal Industries";
    finalFrom = `"${displayName}" <${fromEmail}>`;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: finalFrom,
        to: toEmail,
        subject: mailOptions.subject,
        html: mailOptions.html,
        reply_to: mailOptions.replyTo || undefined,
      }),
    });

    const resData = await response.json();
    if (!response.ok) {
      console.error("[SMTP Library] Resend API failed:", resData);
      throw new Error(`Resend email delivery failed: ${resData.message || response.statusText}`);
    }

    console.log("[SMTP Library] Email sent successfully via Resend API. Message ID:", resData.id);
    return { messageId: resData.id } as nodemailer.SentMessageInfo;
  } catch (err: unknown) {
    const error = err as Error;
    console.error("[SMTP Library] Resend API exception:", error);
    throw error;
  }
}

/** Send enquiry details to the factory owner */
export async function sendOwnerNotification(data: EnquiryEmailData): Promise<void> {
  const mailOptions = {
    from: `"Kamal Industries" <kamalindustriesfactory@gmail.com>`,
    replyTo: data.email || undefined,
    to: "kamalindustriesfactory@gmail.com",
    subject: `🏭 New Quote Request — ${data.fullName} — ${data.stoneType}`,
    html: buildOwnerEmailHtml(data),
  };

  if (isResendActive()) {
    await sendViaResend(mailOptions);
  } else {
    const transporter = createTransporter();
    await verifyAndSendMail(transporter, mailOptions);
  }
}

/** Send auto-confirmation email to the customer */
export async function sendCustomerConfirmation(data: EnquiryEmailData): Promise<void> {
  if (!data.email) return;
  const mailOptions = {
    from: `"Kamal Industries" <${process.env.GMAIL_USER || "onboarding@resend.dev"}>`,
    to: data.email,
    subject: "Your enquiry has been received — Kamal Industries",
    html: buildCustomerEmailHtml(data),
  };

  if (isResendActive()) {
    await sendViaResend(mailOptions);
  } else {
    const transporter = createTransporter();
    await verifyAndSendMail(transporter, mailOptions);
  }
}

function buildOwnerEmailHtml(data: EnquiryEmailData): string {
  const rows: [string, string][] = [
    ["Full Name", data.fullName],
    ["Company Name", data.companyName || "—"],
    ["Phone", data.phone],
    ["WhatsApp", data.whatsapp || "—"],
    ["Email", data.email || "—"],
    ["State", data.state || "—"],
    ["City", data.city || "—"],
    ["Product Required", data.productRequired || "—"],
    ["Stone Type", data.stoneType],
    ["Required Size", data.requiredSize || "—"],
    ["Thickness", data.thickness || "—"],
    ["Quantity", String(data.quantity)],
    ["Delivery Location", data.deliveryLocation || "—"],
    ["Expected Delivery Date", data.deliveryDate || "—"],
    ["Project Type", data.projectType || "—"],
    ["Additional Requirements", data.additionalRequirements || "—"],
    ["Submitted At", data.createdAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })],
  ];

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>New Quote Request</title></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:30px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
    <tr><td style="background:#244B7A;padding:30px 32px;text-align:center;">
      <h1 style="color:#C5A880;margin:0;font-size:22px;letter-spacing:3px;font-weight:700;">KAMAL INDUSTRIES</h1>
      <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:12px;letter-spacing:2px;text-transform:uppercase;">New Quote Enquiry Received</p>
    </td></tr>
    <tr><td style="padding:28px 32px;">
      <p style="margin:0 0 20px;font-size:14px;color:#555;line-height:1.6;">
        A new customer has submitted a quote request on the website. Full details are below.
      </p>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e8ecf0;border-radius:6px;overflow:hidden;">
        ${rows.map(([label, value], i) => `
        <tr style="background:${i % 2 === 0 ? "#f8fafc" : "#fff"};">
          <td style="padding:10px 16px;font-size:11px;font-weight:700;color:#244B7A;text-transform:uppercase;letter-spacing:0.5px;width:38%;border-right:1px solid #e8ecf0;">${label}</td>
          <td style="padding:10px 16px;font-size:13px;color:#374151;">${value}</td>
        </tr>`).join("")}
      </table>
      <div style="margin-top:24px;padding:16px;background:#f0f7ff;border-left:4px solid #244B7A;border-radius:4px;">
        <p style="margin:0;font-size:13px;color:#244B7A;font-weight:600;">Action Required</p>
        <p style="margin:6px 0 0;font-size:13px;color:#555;">Please contact this customer within 24 hours with factory-direct pricing.</p>
      </div>
    </td></tr>
    <tr><td style="background:#1a3352;padding:20px 32px;text-align:center;">
      <p style="color:rgba(255,255,255,0.6);font-size:11px;margin:0;">Enquiry ID: ${data.id} &nbsp;·&nbsp; Amarpura, Ramganjmandi, Kota, Rajasthan – 326519</p>
    </td></tr>
  </table>
</body></html>`;
}

function buildCustomerEmailHtml(data: EnquiryEmailData): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Enquiry Received — Kamal Industries</title></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:30px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
    <tr><td style="background:#244B7A;padding:36px 32px;text-align:center;">
      <h1 style="color:#C5A880;margin:0;font-size:22px;letter-spacing:3px;font-weight:700;">KAMAL INDUSTRIES</h1>
      <p style="color:rgba(255,255,255,0.65);margin:6px 0 0;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Manufacturer of Premium Kota Stone</p>
    </td></tr>
    <tr><td style="padding:36px 32px;text-align:center;">
      <div style="width:56px;height:56px;background:#dcfce7;border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;font-size:26px;line-height:56px;">✓</div>
      <h2 style="color:#244B7A;font-size:20px;font-weight:700;margin:0 0 12px;">Enquiry Received Successfully!</h2>
      <p style="color:#555;font-size:14px;line-height:1.8;margin:0 0 24px;text-align:left;">
        Dear <strong>${data.fullName}</strong>,<br><br>
        Thank you for your interest in Kamal Industries. Your enquiry has been received successfully.<br><br>
        Our sales team will review your requirements and contact you shortly with <strong>factory-direct pricing</strong> for <strong>${data.stoneType}</strong>.
      </p>
      <div style="background:#f8fafc;border:1px solid #e8ecf0;border-radius:6px;padding:16px 20px;text-align:left;margin:0 0 24px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td style="font-size:11px;font-weight:700;color:#244B7A;text-transform:uppercase;letter-spacing:0.5px;padding:4px 0;">Stone Type</td><td style="font-size:13px;color:#374151;padding:4px 0;">${data.stoneType}</td></tr>
          <tr><td style="font-size:11px;font-weight:700;color:#244B7A;text-transform:uppercase;letter-spacing:0.5px;padding:4px 0;">Quantity</td><td style="font-size:13px;color:#374151;padding:4px 0;">${data.quantity}</td></tr>
          ${data.deliveryDate ? `<tr><td style="font-size:11px;font-weight:700;color:#244B7A;text-transform:uppercase;letter-spacing:0.5px;padding:4px 0;">Expected Delivery</td><td style="font-size:13px;color:#374151;padding:4px 0;">${data.deliveryDate}</td></tr>` : ""}
        </table>
      </div>
      <p style="color:#777;font-size:12px;line-height:1.7;text-align:left;margin:0;">
        If you need immediate assistance, call us directly at <strong>+91 9214830464</strong> or reach us on WhatsApp.
      </p>
    </td></tr>
    <tr><td style="background:#244B7A;padding:22px 32px;text-align:center;">
      <p style="color:rgba(255,255,255,0.85);font-size:13px;margin:0 0 6px;font-weight:600;">Kamal Industries</p>
      <p style="color:rgba(255,255,255,0.6);font-size:11px;margin:0;">
        📍 Amarpura, Ramganjmandi, Kota, Rajasthan – 326519<br>
        📞 +91 9214830464 &nbsp;|&nbsp; 📱 +91 9414226966 &nbsp;|&nbsp; ✉ kamalindustriesfactory@gmail.com
      </p>
    </td></tr>
  </table>
</body></html>`;
}
