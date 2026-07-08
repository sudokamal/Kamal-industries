import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const enquiries = await prisma.enquiry.findMany({
      orderBy: { createdAt: "desc" },
    });

    // Build worksheet data
    const rows = enquiries.map((e) => ({
      "Date & Time": e.createdAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      "Full Name": e.fullName,
      "Company Name": e.companyName ?? "",
      "Phone": e.phone,
      "WhatsApp": e.whatsapp ?? "",
      "Email": e.email ?? "",
      "State": e.state ?? "",
      "City": e.city ?? "",
      "Product Required": e.productRequired ?? "",
      "Stone Type": e.stoneType,
      "Required Size": e.requiredSize ?? "",
      "Thickness": e.thickness ?? "",
      "Quantity": e.quantity,
      "Delivery Location": e.deliveryLocation ?? "",
      "Expected Delivery Date": e.deliveryDate ?? "",
      "Project Type": e.projectType ?? "",
      "Additional Requirements": e.additionalRequirements ?? "",
      "Status": e.status,
    }));

    const worksheet = XLSX.utils.json_to_sheet(rows);

    // Column widths
    worksheet["!cols"] = [
      { wch: 22 }, { wch: 20 }, { wch: 20 }, { wch: 15 }, { wch: 15 },
      { wch: 28 }, { wch: 15 }, { wch: 15 }, { wch: 20 }, { wch: 18 },
      { wch: 14 }, { wch: 12 }, { wch: 14 }, { wch: 22 }, { wch: 22 },
      { wch: 18 }, { wch: 30 }, { wch: 12 },
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");

    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
    const date = new Date().toISOString().slice(0, 10);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="kamal-industries-enquiries-${date}.xlsx"`,
      },
    });
  } catch (error) {
    console.error("[GET /api/enquiries/export]", error);
    return NextResponse.json({ error: "Export failed." }, { status: 500 });
  }
}
