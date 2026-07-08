import type { Metadata } from "next";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import type { ProductDetailData } from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
  title: "Kota Stone Steps & Stair Treads — Factory Direct | Kamal Industries",
  description:
    "Buy Kota Stone steps and stair treads directly from the manufacturer — Kamal Industries, Ramganjmandi. Calibrated step stone with natural slip resistance for all staircases. Custom sizes available.",
  alternates: {
    canonical: "https://kamalindustries.in/products/stone-steps",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/products/stone-steps",
    siteName: "Kamal Industries & Enterprises",
    title: "Kota Stone Steps & Stair Treads — Factory Direct | Kamal Industries",
    description:
      "Buy Kota Stone steps and stair treads directly from the manufacturer — Kamal Industries, Ramganjmandi. Calibrated step stone with natural slip resistance for all staircases. Custom sizes available.",
    images: [
      {
        url: "/steps-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Kota Stone step slabs loaded at Kamal Industries yard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kota Stone Steps & Stair Treads — Factory Direct | Kamal Industries",
    description:
      "Buy Kota Stone steps and stair treads directly from the manufacturer — Kamal Industries, Ramganjmandi.",
    images: ["/steps-1.jpeg"],
  },
};

const data: ProductDetailData = {
  badge: "Calibrated Step Stone · Factory Direct",
  title: "Kota Stone Steps",
  titleAccent: "& Stair Treads",
  subtitle:
    "Kota Stone is one of the finest natural materials for stair treads — inherently slip-resistant, extremely hard, and able to withstand decades of heavy foot traffic without abrasion.",
  heroImage: "/steps-1.jpeg",
  breadcrumb: "Stone Steps & Stair Treads",
  whatsappText:
    "Hello, I am interested in Kota Stone Steps and Stair Treads. Please share your price list and available sizes.",
  contactParam: "Kota+Stone+Steps",

  gallery: [
    { src: "/steps-1.jpeg",       alt: "Kota Stone stair treads at Kamal Industries factory" },
    { src: "/steps-2.jpeg",       alt: "Calibrated step stone ready for dispatch" },
    { src: "/steps-3.jpeg",       alt: "Kota Stone steps — quality batch at factory" },
    { src: "/steps-4.jpeg",       alt: "Kota Stone step stone stock yard" },
    { src: "/cutting-machine-2.jpeg", alt: "Precision stone step cutting at factory" },
    { src: "/kota-blue-1.jpeg",   alt: "Kota Blue Stone slabs used for steps" },
    { src: "/factory-yard-2.jpeg",alt: "Factory yard — step stone stock at Kamal Industries" },
    { src: "/88.jpeg",            alt: "Cutting machine producing step stone" },
  ],

  description:
    "Kota Stone is one of the finest natural materials for stair treads, owing to its inherent slip resistance, hardness, and ability to withstand decades of heavy foot traffic without abrasion. Our stair stone is supplied in full step sizes — riser and tread — cut to standard or custom dimensions, with a variety of edge profiles available on request. Both Kota Blue and Kota Brown varieties are available, allowing architects to match stair stone to the surrounding flooring.",

  sizes: [
    "4 inch × 12 inch (riser)",
    "12 inch × 36 inch (tread)",
    "12 inch × 48 inch (tread)",
    "Custom widths & lengths",
  ],
  thickness: ["30mm", "40mm", "50mm", "60mm", "Custom"],
  finishes: ["Natural Split", "Honed", "Sandblasted", "Flamed"],

  features: [
    "Inherent natural slip resistance — no anti-slip treatment needed",
    "Extremely hard and dense — withstands decades of heavy foot traffic",
    "Available in full step sizes — riser and tread cut to specification",
    "Multiple edge profiles — bullnose, chamfered, beveled, square",
    "Available in Kota Blue or Kota Brown to match surrounding flooring",
    "Consistent colour matching across large batches for uniform staircases",
    "Custom widths and lengths from our factory cutting facility",
    "50+ year service life with zero special maintenance",
  ],

  specs: [
    { label: "Stone Type",           value: "Fine-grained Kota Limestone" },
    { label: "Colour",               value: "Blue-grey (Kota Blue) or Brown-tan (Kota Brown)" },
    { label: "Riser Size",           value: "4 inch × 12 inch (standard), Custom" },
    { label: "Tread Sizes",          value: "12×36 in, 12×48 in, Custom widths & lengths" },
    { label: "Tread Thickness",      value: "30mm, 40mm, 50mm, 60mm, Custom" },
    { label: "Edge Profiles",        value: "Square, Bullnose, Half-Bullnose, Chamfered" },
    { label: "Slip Resistance",      value: "Excellent (natural split surface)" },
    { label: "Compressive Strength", value: "130 – 180 MPa" },
    { label: "Water Absorption",     value: "< 0.5%" },
    { label: "Frost Resistance",     value: "Excellent" },
    { label: "Mohs Hardness",        value: "3 – 4" },
    { label: "Service Life",         value: "50+ years under heavy traffic" },
  ],

  applications: [
    "Residential Staircases", "Commercial Staircases", "Public Buildings",
    "Outdoor Steps", "Garden Terracing", "Hotel Lobbies",
    "Hospital & School Stairs", "Heritage Buildings", "Entrance Steps",
    "Podium Steps", "Industrial Staircases", "Landscape Steps",
  ],

  related: [
    {
      name: "Kota Blue Stone Flooring",
      tagline: "Classic blue-grey — match with your flooring",
      href: "/products/kota-blue-flooring",
      image: "/kota-blue-1.jpeg",
    },
    {
      name: "Kota Brown Stone Flooring",
      tagline: "Warm earthy tones — match with brown flooring",
      href: "/products/kota-brown-flooring",
      image: "/kota-stone-1.jpeg",
    },
    {
      name: "Custom Cut Stone",
      tagline: "Bespoke sizing for architects and contractors",
      href: "/products/custom-cut",
      image: "/cutting-machine-1.jpeg",
    },
  ],
};

export default function StoneStepsPage() {
  return <ProductDetailPage data={data} />;
}
