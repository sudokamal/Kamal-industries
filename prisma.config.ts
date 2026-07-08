import path from "node:path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

import { defineConfig, env } from "prisma/config";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

export default defineConfig({
  schema: "./prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),
  },
  migrate: {
    adapter: () => {
      const dbUrl = process.env.DATABASE_URL || `file:${path.join(process.cwd(), "prisma", "enquiries.db").replace(/\\/g, "/")}`;
      const client = createClient({ url: dbUrl });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return new PrismaLibSql(client as any);
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any);
