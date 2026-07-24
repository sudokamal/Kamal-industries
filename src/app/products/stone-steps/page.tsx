import type { Metadata } from "next";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import type { ProductDetailData } from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
  title: "Kota Stone Steps & Stair Treads | Kamal Industries",
  description:
    "Buy calibrated Kota Stone step treads and risers direct from Kamal Industries, Ramganjmandi. Heavy load-bearing, anti-slip step stone in custom lengths for commercial and residential staircases.",
  alternates: {
    canonical: "https://kamalindustries.in/products/stone-steps",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/products/stone-steps",
    siteName: "Kamal Industries & Enterprises",
    title: "Kota Stone Steps & Stair Treads | Kamal Industries",
    description:
      "Buy calibrated Kota Stone step treads and risers direct from Kamal Industries, Ramganjmandi.",
    images: [
      {
        url: "/Stairs.jpeg",
        width: 1200,
        height: 630,
        alt: "Kota Stone steps and stair treads at factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kota Stone Steps & Stair Treads | Kamal Industries",
    description:
      "Buy calibrated Kota Stone step treads and risers direct from Kamal Industries, Ramganjmandi.",
    images: ["/Stairs.jpeg"],
  },
};

const data: ProductDetailData = {
  badge: "Anti-Slip · High Load Bearing",
  title: "Kota Stone Steps",
  titleAccent: "& Stair Treads",
  subtitle:
    "Calibrated stair treads and risers — naturally slip-resistant, load-bearing, and available in all standard and custom dimensions for residential and commercial staircases.",
  heroImage: "/Stairs.jpeg",
  breadcrumb: "Steps & Stair Treads",
  whatsappText:
    "Hello, I am interested in Kota Stone Steps & Stair Treads. Please share sizes and pricing.",
  contactParam: "Kota+Stone+Steps",

  gallery: [
    { src: "/Stairs.jpeg", alt: "Kota Stone steps and stair treads stacked in yard" },
    { src: "/Gallery14.jpeg", alt: "Calibrated Kota Stone stair tread slabs" },
    { src: "/Gallery10.jpeg", alt: "Master stone cutter profiling stair tread edges" },
  ],

  description:
    "Kota Stone is one of the finest natural materials for stair treads, owing to its inherent slip resistance, hardness, and ability to withstand decades of heavy foot traffic without abrasion. Our stair stone is supplied in full step sizes — riser and tread — cut to standard or custom dimensions, with a variety of edge profiles available on request.",

  sizes: [
    "4 inch × 12 inch (riser)",
    "12 inch × 36 inch (tread)",
    "12 inch × 48 inch (tread)",
    "Custom widths & lengths",
  ],
  thickness: ["30mm", "40mm", "50mm", "60mm", "Custom"],
  finishes: ["Natural Split", "Honed", "Sandblasted"],

  features: [
    "Inherent anti-slip surface — safe for wet & dry staircases",
    "Heavy load-bearing capacity — will not crack or chip under foot traffic",
    "Full-step single piece treads up to 5 feet long",
    "Choice of edge profiles — bullnose, bevelled, pencil edge",
    "Factory direct custom length cutting",
  ],

  specs: [
    { label: "Stone Type",           value: "Limestone Step Treads" },
    { label: "Standard Tread Size",  value: "12 × 36, 12 × 48, 12 × 60 inches" },
    { label: "Standard Riser Size",  value: "6 × 36, 6 × 48, 6 × 60 inches" },
    { label: "Thickness Range",      value: "30mm to 60mm" },
    { label: "Compressive Strength", value: "140 – 180 MPa" },
  ],

  applications: [
    "Indoor Staircases", "Outdoor Entrance Steps", "Commercial Building Stairs",
    "Public Transport Steps", "Garden Terracing Steps", "Villa Staircases",
  ],

  related: [
    {
      name: "Kota Blue Stone Flooring",
      tagline: "Classic blue-grey limestone flooring",
      href: "/products/kota-blue-flooring",
      image: "/Kota Blue Stone.jpeg",
    },
    {
      name: "Kota Blue Stone Slabs",
      tagline: "Large format slabs for architectural projects",
      href: "/products/kota-blue-slabs",
      image: "/Large Format Slabs.jpeg",
    },
  ],
};

export default function StoneStepsPage() {
  return <ProductDetailPage data={data} />;
}
