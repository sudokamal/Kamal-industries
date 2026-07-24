import { NextRequest, NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

function isResendActive(): boolean {
  const key = process.env.RESEND_API_KEY;
  return !!key && !key.includes("your_resend_api_key");
}

async function sendSupportViaResend(toEmail: string, subject: string, html: string): Promise<unknown> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = "onboarding@resend.dev";

  console.log(`[Support API] Dispatching email via Resend API to: ${toEmail}...`);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Kamal Industries Support <${fromEmail}>`,
      to: toEmail,
      subject,
      html,
    }),
  });

  const resData = await response.json();
  if (!response.ok) {
    console.error("[Support API] Resend API failed:", resData);
    throw new Error(`Resend email delivery failed: ${resData.message || response.statusText}`);
  }

  console.log("[Support API] Email sent successfully via Resend API. Message ID:", resData.id);
  return resData;
}

// Helper to create the SMTP transporter
function createTransporter(): Transporter {
  const user = process.env.GMAIL_USER;
  const rawPass = process.env.GMAIL_APP_PASSWORD || "";
  const pass = rawPass.replace(/\s+/g, "");

  console.log("[Support API] Checking SMTP environment variables...");
  console.log(`[Support API] GMAIL_USER: ${user ? "LOADED" : "MISSING"}`);
  console.log(`[Support API] GMAIL_APP_PASSWORD: ${pass ? (pass.includes("your-16-char-app-password") ? "PLACEHOLDER" : "LOADED") : "MISSING"}`);

  if (!user) {
    throw new Error("SMTP configuration is incomplete: GMAIL_USER environment variable is missing in .env.local.");
  }

  if (!pass) {
    throw new Error("SMTP configuration is incomplete: GMAIL_APP_PASSWORD environment variable is missing in .env.local.");
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // TLS port 587
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

interface LeadInfo {
  name: string;
  companyName?: string;
  country: string;
  email: string;
  phone: string;
  requirement: string;
}

interface ChatMessage {
  role: string;
  text: string;
}

export async function POST(request: NextRequest) {
  let actionType = "unknown";
  let lead: LeadInfo | null = null;
  let message = "";
  let chatHistory: ChatMessage[] | null = null;

  try {
    const body = await request.json();
    actionType = body.actionType;
    lead = body.lead as LeadInfo;
    message = body.message;
    chatHistory = body.chatHistory as ChatMessage[];

    // 1. Form data received logging
    console.log("[Support API] Form data received:", {
      actionType,
      lead,
      message,
      chatHistory,
    });

    if (!lead || !lead.name || !lead.phone || !lead.email) {
      return NextResponse.json({ error: "Missing required customer details." }, { status: 400 });
    }

    // Transporter initialization deferred to sending block

    // Formulate clean tabular rows for the email layout
    const leadRows = [
      ["Customer Name", lead.name],
      ["Company Name", lead.companyName || "Not Specified"],
      ["Country", lead.country || "Not Specified"],
      ["Email Address", lead.email],
      ["Phone Number", lead.phone],
      ["Initial Requirement", lead.requirement || "Not Specified"],
    ];

    let emailSubject = "";
    let emailTitle = "";
    let additionalHtml = "";

    if (actionType === "lead") {
      emailSubject = `📞 Support Lead Registered — ${lead.name}`;
      emailTitle = "NEW SUPPORT SYSTEM LEAD";
      additionalHtml = `
        <div style="margin-top:20px;padding:16px;background:#f0fdf4;border-left:4px solid #16a34a;border-radius:4px;">
          <p style="margin:0;font-size:13px;color:#16a34a;font-weight:600;">Lead Unlocked Support channels</p>
          <p style="margin:6px 0 0;font-size:12px;color:#555;">This customer entered their details and is currently navigating support options (Call, AI, or Email).</p>
        </div>
      `;
    } else if (actionType === "call") {
      emailSubject = `☎️ Helpline Call Request — ${lead.name}`;
      emailTitle = "HELPLINE DIALER TRIGGERED";
      additionalHtml = `
        <div style="margin-top:20px;padding:16px;background:#fef3c7;border-left:4px solid #d97706;border-radius:4px;">
          <p style="margin:0;font-size:13px;color:#d97706;font-weight:600;">Call Support Selected</p>
          <p style="margin:6px 0 0;font-size:12px;color:#555;">Customer clicked the "Call Support" button to dial your helpline 7878492517. Expect a phone call shortly.</p>
        </div>
      `;
    } else if (actionType === "email_ticket") {
      emailSubject = `✉️ Direct Support Message — ${lead.name}`;
      emailTitle = "DIRECT EMAIL SUPPORT TICKET";
      additionalHtml = `
        <div style="margin-top:20px;">
          <h3 style="font-size:14px;color:#244B7A;text-transform:uppercase;margin:0 0 10px;border-bottom:1px solid #e2e8f0;padding-bottom:6px;">Message Sent</h3>
          <div style="background:#f8fafc;padding:16px;border:1px dashed #cbd5e1;border-radius:6px;font-size:13px;color:#334155;line-height:1.6;font-style:italic;">
            "${message || "No message body was entered."}"
          </div>
        </div>
      `;
    } else if (actionType === "unanswered_ai") {
      emailSubject = `🤖 Chatbot Escaped Query — ${lead.name}`;
      emailTitle = "AI CHAT ESCALATED TO EMAIL";
      
      let chatHistoryHtml = "No messages recorded.";
      if (Array.isArray(chatHistory) && chatHistory.length > 0) {
        chatHistoryHtml = chatHistory
          .map(
            (msg: { role: string; text: string }) => `
            <div style="margin-bottom:10px;">
              <span style="font-weight:bold;font-size:11px;color:${msg.role === "user" ? "#244B7A" : "#a3855c"};text-transform:uppercase;">${
              msg.role === "user" ? "Customer" : "AI Assistant"
            }:</span>
              <p style="margin:2px 0 0;font-size:13px;color:#334155;line-height:1.5;">${msg.text}</p>
            </div>`
          )
          .join("");
      }

      additionalHtml = `
        <div style="margin-top:20px;">
          <h3 style="font-size:14px;color:#b91c1c;text-transform:uppercase;margin:0 0 10px;border-bottom:1px solid #e2e8f0;padding-bottom:6px;">AI Chatbot Conversation Transcript</h3>
          <div style="background:#fff5f5;padding:16px;border:1px solid #fee2e2;border-radius:6px;max-height:300px;overflow-y:auto;">
            ${chatHistoryHtml}
          </div>
        </div>
      `;
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;color:#334155;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:650px;margin:30px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 4px 15px rgba(0,0,0,0.06);">
          <tr>
            <td style="background:#1e293b;padding:26px 30px;text-align:center;">
              <h1 style="color:#C5A880;margin:0;font-size:20px;letter-spacing:3px;font-weight:700;">KAMAL INDUSTRIES</h1>
              <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;font-size:10px;letter-spacing:2px;text-transform:uppercase;">${emailTitle}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;">
              <h2 style="font-size:15px;color:#1e293b;margin:0 0 16px;font-weight:600;">Customer Lead Details</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e2e8f0;">
                ${leadRows
                  .map(
                    ([label, val], i) => `
                  <tr style="background:${i % 2 === 0 ? "#f8fafc" : "#ffffff"}; border-bottom: 1px solid #e2e8f0;">
                    <td style="padding:10px 14px;font-size:10px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:0.5px;width:35%;border-right:1px solid #e2e8f0;">${label}</td>
                    <td style="padding:10px 14px;font-size:13px;color:#0f172a;">${val}</td>
                  </tr>`
                  )
                  .join("")}
              </table>
              
              ${additionalHtml}
              
              <div style="margin-top:30px;padding-top:20px;border-top:1px solid #e2e8f0;text-align:center;font-size:11px;color:#94a3b8;">
                Sent automatically via Support Portal Desk · Kamal Industries & Enterprises
              </div>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const adminEmail = process.env.GMAIL_USER || "kamalindustriesfactory@gmail.com";

    // ─── RESEND API EMAIL ROUTE ───
    if (isResendActive()) {
      if (actionType === "lead" || actionType === "call") {
        try {
          await sendSupportViaResend(adminEmail, emailSubject, emailHtml);
        } catch (emailErr) {
          console.error(`[Support API] Resend background notification failed but proceeding:`, emailErr);
        }
        return NextResponse.json({ success: true, message: "Proceeding with support session." });
      }

      await sendSupportViaResend(adminEmail, emailSubject, emailHtml);
      return NextResponse.json({ success: true, message: "Support ticket submitted successfully." });
    }

    // ─── GMAIL SMTP EMAIL ROUTE ───
    let transporter: Transporter;
    try {
      transporter = createTransporter();
    } catch (transporterErr) {
      if (actionType === "lead" || actionType === "call") {
        console.warn("[Support API] Skipping background email notification due to incomplete SMTP setup:", transporterErr);
        return NextResponse.json({ success: true, message: "Proceeding with support session (SMTP not configured)." });
      }
      throw transporterErr;
    }

    // Validate SMTP connection handshake before attempting to send direct emails
    if (actionType === "email_ticket" || actionType === "unanswered_ai") {
      try {
        console.log("[Support API] Verifying SMTP connection handshake...");
        await transporter.verify();
        console.log("[Support API] SMTP connection handshake successful.");
      } catch (verifyErr: unknown) {
        const err = verifyErr as Error;
        console.error("[Support API] SMTP handshake verification failed:", err);
        throw new Error(`Gmail SMTP authentication failed (Invalid login/BadCredentials): ${err.message || String(err)}`);
      }
    }

    if (actionType === "lead" || actionType === "call") {
      try {
        const info = await transporter.sendMail({
          from: `"Kamal Industries Support" <${process.env.GMAIL_USER}>`,
          to: adminEmail,
          subject: emailSubject,
          html: emailHtml,
        });
        console.log(`[Support API] Background email sent successfully. Message ID:`, info.messageId);
      } catch (emailErr) {
        console.error(`[Support API] Background email notification failed but proceeding:`, emailErr);
      }
      return NextResponse.json({ success: true, message: "Proceeding with support session." });
    }

    // Direct blocking emails for direct ticket/escalation submissions
    const info = await transporter.sendMail({
      from: `"Kamal Industries Support" <${process.env.GMAIL_USER}>`,
      to: adminEmail,
      subject: emailSubject,
      html: emailHtml,
    });

    // 2. Email sent successfully logging
    console.log("[Support API] Email sent successfully. Message ID:", info.messageId);

    return NextResponse.json({ success: true, message: "Support ticket submitted successfully." });
  } catch (error: unknown) {
    const err = error as Error & { code?: string };
    // 3. Exact error if sending fails logging
    console.error("[Support API] Exact error if sending fails:", err);
    
    let errorMsg = "Failed to dispatch support request notification.";
    if (err.message && err.message.includes("Invalid login")) {
      errorMsg = "Email delivery failed: Gmail SMTP authentication failed (Invalid login/BadCredentials). Please verify GMAIL_USER and GMAIL_APP_PASSWORD app settings in .env.local.";
    } else if (err.code === "EENVELOPE") {
      errorMsg = "Email delivery failed: Invalid email envelopes configured.";
    } else if (err.message) {
      errorMsg = `Email delivery failed: ${err.message}`;
    }

    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
