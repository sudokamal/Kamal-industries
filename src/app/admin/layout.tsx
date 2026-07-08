import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Kamal Industries",
  robots: "noindex, nofollow",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // Admin pages have their own layout — no main navbar or footer
  return <>{children}</>;
}
