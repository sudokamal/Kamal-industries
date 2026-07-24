import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Quote & Direct Factory Supply | Kamal Industries",
  description:
    "Contact Kamal Industries and Kamal Enterprises. Call +91 9214830464 or +91 9414226966. Address: Amarpura, Ramganjmandi, Kota, Rajasthan. Pan-India delivery of premium Kota Stone and Mandana Stone.",
  alternates: {
    canonical: "https://kamalindustries.in/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/contact",
    siteName: "Kamal Industries & Enterprises",
    title: "Contact Us — Get a Quote & Direct Factory Supply | Kamal Industries",
    description:
      "Contact Kamal Industries and Kamal Enterprises. Call +91 9214830464 or +91 9414226966. Address: Amarpura, Ramganjmandi, Kota, Rajasthan. Pan-India delivery of premium Kota Stone and Mandana Stone.",
    images: [
      {
        url: "/Office.jpeg",
        width: 1200,
        height: 630,
        alt: "Kamal Industries office building in Ramganjmandi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Factory Location — Kamal Industries | Kota Stone Manufacturer",
    description:
      "Get direct factory rates for Kota Blue Stone, Kota Brown Stone & Mandana Stone. Call +91 92148 30464 or visit our factory in Ramganjmandi, Kota, Rajasthan.",
    images: ["/Office.jpeg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
