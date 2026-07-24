import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendOwnerNotification, sendCustomerConfirmation } from "@/lib/email";
import { getSession } from "@/lib/auth";

// ─── Simple in-memory rate limiter (1 submission per IP per 60 seconds) ──────
const rateMap = new Map<string, number>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const last = rateMap.get(ip) ?? 0;
  if (now - last < 60_000) return false;
  rateMap.set(ip, now);
  // Clean up old entries every 1000 requests
  if (rateMap.size > 1000) {
    for (const [k, v] of rateMap) {
      if (now - v > 120_000) rateMap.delete(k);
    }
  }
  return true;
}

// ─── POST /api/enquiries — Submit a new quote enquiry ─────────────────────────
export async function POST(request: NextRequest) {
  console.log("[POST] process.env.DATABASE_URL IS:", process.env.DATABASE_URL);
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait 1 minute before trying again." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Required field validation
    const required = ["fullName", "phone", "stoneType", "quantity"];
    const missing = required.filter((f) => !body[f]?.toString().trim());
    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // Email format validation if email is provided
    const emailTrimmed = body.email?.trim() || "";
    if (emailTrimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Save to database
    const enquiry = await prisma.enquiry.create({
      data: {
        fullName:               body.fullName?.trim(),
        companyName:            body.companyName?.trim() || null,
        phone:                  body.phone?.trim(),
        whatsapp:               body.whatsapp?.trim() || null,
        email:                  emailTrimmed || null,
        state:                  body.state?.trim() || null,
        city:                   body.city?.trim() || null,
        productRequired:        body.productRequired?.trim() || null,
        stoneType:              body.stoneType?.trim(),
        requiredSize:           body.requiredSize?.trim() || null,
        thickness:              body.thickness?.trim() || null,
        quantity:               body.quantity?.trim(),
        deliveryLocation:       body.deliveryLocation?.trim() || null,
        deliveryDate:           body.deliveryDate?.trim() || null,
        projectType:            body.projectType?.trim() || null,
        additionalRequirements: body.additionalRequirements?.trim() || null,
        status:                 "New",
      },
    });

    // Send emails reliably
    const emailData = { ...enquiry };
    let emailStatus = "delivered";
    try {
      await Promise.all([
        sendOwnerNotification(emailData),
        sendCustomerConfirmation(emailData).catch((e) => console.error("[email:customer]", e)),
      ]);
      console.log("[POST /api/enquiries] All email notifications dispatched successfully.");
    } catch (emailErr) {
      console.error("[POST /api/enquiries] Email dispatch warning:", emailErr);
      emailStatus = "saved_offline";
    }

    return NextResponse.json({
      success: true,
      id: enquiry.id,
      emailStatus,
      message: "Thank you! Your quote request has been received successfully. Our sales team will contact you shortly.",
    });
  } catch (error) {
    console.error("[POST /api/enquiries]", error);
    return NextResponse.json({ error: "Failed to save enquiry. Please try again." }, { status: 500 });
  }
}

// ─── GET /api/enquiries — List all enquiries (admin only) ────────────────────
export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const enquiries = await prisma.enquiry.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(enquiries);
  } catch (error) {
    console.error("[GET /api/enquiries]", error);
    return NextResponse.json({ error: "Failed to fetch enquiries." }, { status: 500 });
  }
}
