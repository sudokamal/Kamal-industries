import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import {
  ConditionalNavbar,
  ConditionalFooter,
  ConditionalGlobalUI,
} from "@/components/layout/ConditionalShell";
import { MainContent } from "@/components/layout/MainContent";
import "./globals.css";


const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kamalindustries.in"),
  title: {
    default: "Kamal Industries | Kota Stone Manufacturer — Ramganjmandi, Kota, Rajasthan",
    template: "%s | Kamal Industries & Enterprises",
  },
  description:
    "Direct manufacturer and supplier of Kota Blue Stone, Kota Brown Stone, Mandana Stone, stone flooring, wall cladding, steps, and custom cut stone. Factory at Amarpura, Ramganjmandi, Kota, Rajasthan – 326519. Pan-India supply and international export.",
  keywords: [
    "Kota Stone",
    "Kota Blue Stone",
    "Kota Brown Stone",
    "Mandana Stone",
    "Kota Stone Flooring",
    "Kota Stone Slabs",
    "Wall Cladding Stone",
    "Stair Stone",
    "Custom Cut Stone",
    "Stone Steps",
    "Kamal Industries",
    "Kamal Enterprises",
    "Ramganjmandi Stone Manufacturer",
    "Kota Rajasthan Stone",
    "Natural Stone India",
    "Limestone Manufacturer India",
    "Stone Supplier Rajasthan",
    "Kota Stone Supplier",
    "Natural Stone Exporter India",
    "Garden Stone India",
    "Industrial Flooring Stone",
  ],
  authors: [{ name: "Kamal Industries", url: "https://kamalindustries.in" }],
  creator: "Kamal Industries",
  publisher: "Kamal Industries",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Kamal Industries & Enterprises",
    title: "Kamal Industries | Kota Stone Manufacturer — Ramganjmandi, Kota, Rajasthan",
    description:
      "Direct manufacturer of Kota Blue Stone, Kota Brown Stone, Mandana Stone, flooring slabs, wall cladding, and custom stone. Amarpura, Ramganjmandi, Kota, Rajasthan.",
    images: [
      {
        url: "/hero-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Kamal Industries Kota Stone factory yard, Amarpura, Ramganjmandi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamal Industries | Kota Stone Manufacturer",
    description:
      "Direct Kota Stone manufacturer in Ramganjmandi, Kota, Rajasthan. Kota Blue, Brown, Mandana Stone, custom cut.",
    images: ["/hero-1.jpeg"],
  },
};

// ─── Schema.org JSON-LD ───────────────────────────────────────────────────
const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kamalindustries.in/#organization",
      name: "Kamal Industries",
      alternateName: "Kamal Enterprises",
      url: "https://kamalindustries.in",
      logo: {
        "@type": "ImageObject",
        url: "https://kamalindustries.in/ki-signage.jpeg",
        width: 400,
        height: 200,
      },
      description:
        "Direct manufacturer and supplier of Kota Blue Stone, Kota Brown Stone, Mandana Stone, wall cladding, steps, and custom cut stone. Located in Amarpura, Ramganjmandi, Kota, Rajasthan.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Amarpura",
        addressLocality: "Ramganjmandi",
        addressRegion: "Rajasthan",
        postalCode: "326519",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-92148-30464",
          contactType: "sales",
          availableLanguage: ["English", "Hindi"],
          areaServed: ["IN", "Worldwide"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-94142-26966",
          contactType: "customer service",
          availableLanguage: ["Hindi", "English"],
        },
      ],
      sameAs: [],
      foundingDate: "1985",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 20 },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://kamalindustries.in/#localbusiness",
      name: "Kamal Industries",
      image: "https://kamalindustries.in/hero-1.jpeg",
      "@context": "https://schema.org",
      priceRange: "₹₹",
      telephone: "+91-92148-30464",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Amarpura, Ramganjmandi",
        addressLocality: "Kota",
        addressRegion: "Rajasthan",
        postalCode: "326519",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 24.6345,
        longitude: 75.9684,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      hasMap: "https://maps.google.com/?q=Amarpura,Ramganjmandi,Kota,Rajasthan",
    },
    {
      "@type": "WebSite",
      "@id": "https://kamalindustries.in/#website",
      url: "https://kamalindustries.in",
      name: "Kamal Industries",
      description: "Kota Stone Manufacturer — Ramganjmandi, Kota, Rajasthan",
      publisher: { "@id": "https://kamalindustries.in/#organization" },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-neutral-dark selection:bg-primary selection:text-white">
        <ConditionalNavbar />
        <MainContent>{children}</MainContent>
        <ConditionalFooter />
        <ConditionalGlobalUI />
      </body>
    </html>
  );
}
