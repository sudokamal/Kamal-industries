import { createClient } from "@libsql/client";
import path from "path";

const dbPath = path.join(process.cwd(), "prisma", "enquiries.db");
const client = createClient({ url: `file:${dbPath}` });

export interface Enquiry {
  id: string;
  fullName: string;
  companyName: string | null;
  phone: string;
  whatsapp: string | null;
  email: string | null;
  state: string | null;
  city: string | null;
  productRequired: string | null;
  stoneType: string;
  requiredSize: string | null;
  thickness: string | null;
  quantity: number;
  deliveryLocation: string | null;
  deliveryDate: string | null;
  projectType: string | null;
  additionalRequirements: string | null;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface EnquiryCreateInput {
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
  quantity: number;
  deliveryLocation?: string | null;
  deliveryDate?: string | null;
  projectType?: string | null;
  additionalRequirements?: string | null;
  status?: string;
}

interface PrismaMock {
  enquiry: {
    create: (args: { data: EnquiryCreateInput }) => Promise<Enquiry>;
    findMany: (options?: { orderBy?: { createdAt?: 'desc' | 'asc' } }) => Promise<Enquiry[]>;
    update: (args: { where: { id: string }; data: { status: string } }) => Promise<Enquiry | null>;
    delete: (args: { where: { id: string } }) => Promise<Enquiry | null>;
  };
}

function mapRowToEnquiry(row: unknown): Enquiry {
  const r = row as Record<string, unknown>;
  return {
    id:                     String(r.id),
    fullName:               String(r.fullName),
    companyName:            r.companyName ? String(r.companyName) : null,
    phone:                  String(r.phone),
    whatsapp:               r.whatsapp ? String(r.whatsapp) : null,
    email:                  r.email ? String(r.email) : null,
    state:                  r.state ? String(r.state) : null,
    city:                   r.city ? String(r.city) : null,
    productRequired:        r.productRequired ? String(r.productRequired) : null,
    stoneType:              String(r.stoneType),
    requiredSize:           r.requiredSize ? String(r.requiredSize) : null,
    thickness:              r.thickness ? String(r.thickness) : null,
    quantity:               Number(r.quantity),
    deliveryLocation:       r.deliveryLocation ? String(r.deliveryLocation) : null,
    deliveryDate:           r.deliveryDate ? String(r.deliveryDate) : null,
    projectType:            r.projectType ? String(r.projectType) : null,
    additionalRequirements: r.additionalRequirements ? String(r.additionalRequirements) : null,
    status:                 String(r.status),
    createdAt:              new Date(String(r.createdAt)),
    updatedAt:              new Date(String(r.updatedAt)),
  };
}

// Mock prisma object mapping Prisma API syntax to direct LibSql SQL executions.
// Bypasses the compiled Prisma 7 WASM engine environmental resolution issues under Next.js Turbopack.
export const prisma: PrismaMock = {
  enquiry: {
    create: async ({ data }: { data: EnquiryCreateInput }): Promise<Enquiry> => {
      const id = "c" + Math.random().toString(36).substring(2, 11) + Math.random().toString(36).substring(2, 11);
      const now = new Date();
      const record: Enquiry = {
        id,
        fullName:               data.fullName,
        companyName:            data.companyName || null,
        phone:                  data.phone,
        whatsapp:               data.whatsapp || null,
        email:                  data.email || null,
        state:                  data.state || null,
        city:                   data.city || null,
        productRequired:        data.productRequired || null,
        stoneType:              data.stoneType,
        requiredSize:           data.requiredSize || null,
        thickness:              data.thickness || null,
        quantity:               data.quantity,
        deliveryLocation:       data.deliveryLocation || null,
        deliveryDate:           data.deliveryDate || null,
        projectType:            data.projectType || null,
        additionalRequirements: data.additionalRequirements || null,
        status:                 data.status || "New",
        createdAt:              now,
        updatedAt:              now,
      };

      await client.execute({
        sql: `INSERT INTO Enquiry (
          id, fullName, companyName, phone, whatsapp, email, state, city,
          productRequired, stoneType, requiredSize, thickness, quantity,
          deliveryLocation, deliveryDate, projectType, additionalRequirements,
          status, createdAt, updatedAt
        ) VALUES (
          ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
        )`,
        args: [
          record.id, record.fullName, record.companyName, record.phone, record.whatsapp,
          record.email, record.state, record.city, record.productRequired, record.stoneType,
          record.requiredSize, record.thickness, record.quantity, record.deliveryLocation,
          record.deliveryDate, record.projectType, record.additionalRequirements, record.status,
          record.createdAt.toISOString(), record.updatedAt.toISOString()
        ]
      });

      return record;
    },

    findMany: async (options?: { orderBy?: { createdAt?: 'desc' | 'asc' } }): Promise<Enquiry[]> => {
      const isDesc = options?.orderBy?.createdAt === 'desc';
      const res = await client.execute({
        sql: `SELECT * FROM Enquiry ORDER BY createdAt ${isDesc ? 'DESC' : 'ASC'}`
      });

      return res.rows.map(mapRowToEnquiry);
    },

    update: async ({ where, data }: { where: { id: string }; data: { status: string } }): Promise<Enquiry | null> => {
      const now = new Date();
      await client.execute({
        sql: `UPDATE Enquiry SET status = ?, updatedAt = ? WHERE id = ?`,
        args: [data.status, now.toISOString(), where.id]
      });

      const res = await client.execute({
        sql: `SELECT * FROM Enquiry WHERE id = ?`,
        args: [where.id]
      });

      if (res.rows.length === 0) return null;
      return mapRowToEnquiry(res.rows[0]);
    },

    delete: async ({ where }: { where: { id: string } }): Promise<Enquiry | null> => {
      const res = await client.execute({
        sql: `SELECT * FROM Enquiry WHERE id = ?`,
        args: [where.id]
      });

      await client.execute({
        sql: `DELETE FROM Enquiry WHERE id = ?`,
        args: [where.id]
      });

      if (res.rows.length === 0) return null;
      return mapRowToEnquiry(res.rows[0]);
    }
  }
};
