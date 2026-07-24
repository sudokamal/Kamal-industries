import type { Metadata } from "next";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import type { ProductDetailData } from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
  title: "Kota Blue Stone Flooring — Factory Direct | Kamal Industries",
  description:
    "Buy Kota Blue Stone flooring tiles direct from the manufacturer — Kamal Industries, Ramganjmandi. Dense blue-grey limestone for interior flooring, exterior paving, terraces, and commercial lobbies. Custom sizes available.",
  alternates: {
    canonical: "https://kamalindustries.in/products/kota-blue-flooring",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/products/kota-blue-flooring",
    siteName: "Kamal Industries & Enterprises",
    title: "Kota Blue Stone Flooring — Factory Direct | Kamal Industries",
    description:
      "Buy Kota Blue Stone flooring tiles direct from the manufacturer — Kamal Industries, Ramganjmandi. Dense blue-grey limestone for interior flooring, exterior paving, terraces, and commercial lobbies. Custom sizes available.",
    images: [
      {
        url: "/Kota Blue Stone.jpeg",
        width: 1200,
        height: 630,
        alt: "Kota Blue Stone Flooring tiles stacked at factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kota Blue Stone Flooring — Factory Direct | Kamal Industries",
    description:
      "Buy Kota Blue Stone flooring tiles direct from the manufacturer — Kamal Industries, Ramganjmandi.",
    images: ["/Kota Blue Stone.jpeg"],
  },
};

const data: ProductDetailData = {
  badge: "Premium Limestone · Factory Direct",
  title: "Kota Blue Stone",
  titleAccent: "Flooring Tiles",
  subtitle:
    "Dense, naturally slip-resistant blue-grey limestone tiles. Machine-calibrated to ±1mm for seamless installation — the benchmark choice for Indian commercial and residential flooring.",
  heroImage: "/Kota Blue Stone.jpeg",
  breadcrumb: "Kota Blue Stone Flooring",
  whatsappText:
    "Hello, I am interested in Kota Blue Stone Flooring. Please share your price list and available sizes.",
  contactParam: "Kota+Blue+Stone+Flooring",

  gallery: [
    { src: "/Kota Blue Stone.jpeg", alt: "Kota Blue Stone flooring tiles — classic blue-grey limestone" },
    { src: "/Gallery2.jpeg", alt: "Calibrated Kota Blue Stone tiles lot" },
    { src: "/Gallery3.jpeg", alt: "Polished Kota Blue limestone flooring" },
    { src: "/Gallery21.jpeg", alt: "Honed surface finish Kota Blue stone" },
    { src: "/Gallery22.jpeg", alt: "Natural split texture Kota Blue slab" },
    { src: "/Quality.jpeg", alt: "Quality inspection of Kota Blue Stone" },
  ],

  description:
    "Kota Blue Stone is the signature product of Kamal Industries. Quarried from the limestone belt of Ramganjmandi, this dense blue-grey stone is naturally slip-resistant, moisture-proof, and exceptionally durable. It requires no sealing and performs equally well indoors and outdoors. Each slab is machine-calibrated to ±1mm thickness tolerance for seamless installation. With a service life exceeding 50 years under heavy foot traffic, it is the definitive benchmark for Indian commercial and residential flooring.",

  sizes: [
    "12×12 inches", "12×18 inches", "18×18 inches",
    "18×24 inches", "24×24 inches", "Custom cut to size",
  ],
  thickness: ["18mm", "20mm", "25mm", "30mm", "Custom"],
  finishes: ["Natural Split", "Honed", "Polished", "Leather / Brushed", "Sandblasted"],

  features: [
    "Naturally slip-resistant — safe for all ages and weather conditions",
    "Extremely dense — virtually zero water penetration",
    "Weather-proof — performs in all Indian climates year-round",
    "Low maintenance — sweep and mop only, no sealing required",
    "Consistent colour across large batches — ideal for big projects",
    "Machine-calibrated to ±1mm thickness tolerance",
    "Factory-direct pricing — no middlemen markup",
    "50+ year service life with basic care",
  ],

  specs: [
    { label: "Stone Type",           value: "Fine-grained Limestone" },
    { label: "Colour",               value: "Blue-grey, Greenish-grey" },
    { label: "Standard Sizes",       value: "12×12, 12×18, 18×18, 18×24, 24×24 inches" },
    { label: "Standard Thickness",   value: "18mm, 20mm, 25mm, 30mm" },
    { label: "Custom Thickness",     value: "Up to 60mm on request" },
    { label: "Density",              value: "2.65 – 2.72 g/cm³" },
    { label: "Water Absorption",     value: "< 0.5%" },
    { label: "Compressive Strength", value: "130 – 180 MPa" },
    { label: "Slip Resistance",      value: "High (natural finish)" },
    { label: "Frost Resistance",     value: "Excellent" },
    { label: "Mohs Hardness",        value: "3 – 4" },
    { label: "Service Life",         value: "50+ years" },
  ],

  applications: [
    "Interior Flooring", "Exterior Paving", "Terrace & Rooftop",
    "Commercial Lobbies", "Corridor Flooring", "Pathway Paving",
    "Hospital & School Floors", "Parking Areas", "Garden Landscaping",
    "Driveway Paving", "Swimming Pool Decks", "Industrial Flooring",
  ],

  related: [
    {
      name: "Kota Blue Stone Slabs",
      tagline: "Large format slabs for premium architectural projects",
      href: "/products/kota-blue-slabs",
      image: "/Large Format Slabs.jpeg",
    },
    {
      name: "Kota Brown Stone Flooring",
      tagline: "Warm earthy tones — the premium brown variant",
      href: "/products/kota-brown-flooring",
      image: "/Kota Brown Stone.jpeg",
    },
    {
      name: "Kota Stone Steps & Stair Treads",
      tagline: "Calibrated step stone with natural slip resistance",
      href: "/products/stone-steps",
      image: "/Stairs.jpeg",
    },
  ],
};

export default function KotaBlueFlooringPage() {
  return <ProductDetailPage data={data} />;
}
