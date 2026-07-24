import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentic Factory Gallery — 100% Real Pictures | Kamal Industries",
  description:
    "Browse our portfolio of 60+ real factory, office, worker, stone cutting, packing, and loading pictures at Kamal Industries, Amarpura, Ramganjmandi. No AI or stock photos.",
  alternates: {
    canonical: "https://kamalindustries.in/gallery",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/gallery",
    siteName: "Kamal Industries & Enterprises",
    title: "Authentic Factory Gallery — 100% Real Pictures | Kamal Industries",
    description:
      "Browse our portfolio of 60+ real factory, office, worker, stone cutting, packing, and loading pictures at Kamal Industries, Amarpura, Ramganjmandi. No AI or stock photos.",
    images: [
      {
        url: "/HomePage1.jpeg",
        width: 1200,
        height: 630,
        alt: "Kamal Industries Kota Stone factory yard in Ramganjmandi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Factory Gallery — Kota Stone Yard & Machinery | Kamal Industries",
    description:
      "Explore 25+ authentic factory photographs of Kamal Industries. Amarpura, Ramganjmandi, Kota, Rajasthan.",
    images: ["/HomePage1.jpeg"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
