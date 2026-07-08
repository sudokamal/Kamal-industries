import type { Metadata } from "next";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import type { ProductDetailData } from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
  title: "Custom Cut Stone — Bespoke Sizes for Architects | Kamal Industries",
  description:
    "Custom cut Kota Stone to your exact specifications — Kamal Industries, Ramganjmandi. CNC and diamond-blade cutting for any dimension. Window sills, thresholds, pool copings, countertops, and export orders.",
  alternates: {
    canonical: "https://kamalindustries.in/products/custom-cut",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/products/custom-cut",
    siteName: "Kamal Industries & Enterprises",
    title: "Custom Cut Stone — Bespoke Sizes for Architects | Kamal Industries",
    description:
      "Custom cut Kota Stone to your exact specifications — Kamal Industries, Ramganjmandi. CNC and diamond-blade cutting for any dimension. Window sills, thresholds, pool copings, countertops, and export orders.",
    images: [
      {
        url: "/cutting-machine-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Precision stone cutting machine at Kamal Industries factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Cut Stone — Bespoke Sizes for Architects | Kamal Industries",
    description:
      "Custom cut Kota Stone to your exact specifications — Kamal Industries, Ramganjmandi.",
    images: ["/cutting-machine-1.jpeg"],
  },
};

const data: ProductDetailData = {
  badge: "Bespoke Fabrication · CNC Precision Cutting",
  title: "Custom Cut",
  titleAccent: "Stone",
  subtitle:
    "Precision CNC and diamond-blade cutting equipment — any custom dimension from architectural drawings. From non-standard tiles to bespoke countertops, sills, copings, and full export packing orders.",
  heroImage: "/cutting-machine-1.jpeg",
  breadcrumb: "Custom Cut Stone",
  whatsappText:
    "Hello, I need Custom Cut Stone to specific dimensions. Please advise on how to share my drawings.",
  contactParam: "Custom+Cut+Stone",

  gallery: [
    { src: "/cutting-machine-1.jpeg", alt: "CNC cutting machine at Kamal Industries factory" },
    { src: "/cutting-machine-2.jpeg", alt: "Diamond-blade gang saw precision cutting stone" },
    { src: "/cutting-machine-3.jpeg", alt: "Stone cutting machine operation at factory" },
    { src: "/99.jpeg",            alt: "Diamond blade cutting machine close-up" },
    { src: "/88.jpeg",            alt: "Wet cutting machine processing stone slab" },
    { src: "/kota-slab-2.jpeg",   alt: "Custom cut stone slabs ready for dispatch" },
    { src: "/factory-yard-1.jpeg",alt: "Factory yard — custom cut stone inventory" },
    { src: "/workers-loading-2.jpeg", alt: "Workers handling custom cut stone orders" },
  ],

  description:
    "Kamal Industries operates precision CNC and diamond-blade cutting equipment capable of producing stone to any custom dimension provided in architectural drawings. From non-standard tile formats to bespoke countertop slabs, sill stones, rebated thresholds, and bullnosed pool copings — our custom cutting service handles every specification. We accept drawings in PDF, DWG, DXF formats or simple hand sketches. Minimum order quantities apply. All custom-cut stone is available in Kota Blue, Kota Brown, or Mandana Red varieties.",

  sizes: [
    "Any dimension as per drawing",
    "Minimum 6 inches on shortest side",
    "Up to 2400mm (8ft) on longest side",
  ],
  thickness: ["15mm minimum", "Up to 150mm maximum", "As per specification"],
  finishes: ["Natural Split", "Honed", "Polished", "Leather / Brushed", "Sandblasted", "Flamed", "Custom"],

  features: [
    "CNC and diamond-blade cutting — any custom dimension from drawings",
    "±1mm precision tolerance — perfect for fitted architectural elements",
    "Handles non-standard tile formats to bespoke countertop slabs",
    "All edge profiles — bullnose, chamfered, beveled, square, custom",
    "Available in Kota Blue, Kota Brown, and Mandana Red stone types",
    "Accepts PDF, DWG, DXF drawings or hand sketches",
    "Export packaging available for international shipments",
    "Factory-direct pricing — no middlemen on custom orders",
  ],

  specs: [
    { label: "Stone Types Available",   value: "Kota Blue, Kota Brown, Mandana Red" },
    { label: "Min Dimension",           value: "6 inches on shortest side" },
    { label: "Max Slab Length",         value: "Up to 2400 mm (8 feet)" },
    { label: "Thickness Range",         value: "15mm minimum to 150mm maximum" },
    { label: "Precision Tolerance",     value: "Within ±1mm margin" },
    { label: "Edge Profiles",           value: "Bullnose, Half-Bullnose, Beveled, Chamfered, Square" },
    { label: "Cutting Technology",      value: "CNC & Diamond-blade gang saws" },
    { label: "Drawing Formats Accepted",value: "PDF, DWG, DXF, hand sketches" },
    { label: "Lead Time",               value: "7–14 working days (quantity dependent)" },
    { label: "Surface Finishes",        value: "All finishes available" },
    { label: "Export Packaging",        value: "Available on request" },
    { label: "Min Order Quantity",      value: "Contact us for MOQ details" },
  ],

  applications: [
    "Architectural Projects", "Swimming Pool Copings", "Window Sills & Thresholds",
    "Countertops & Worktops", "Landscape Features", "Export Packing Orders",
    "Rebated Thresholds", "Bullnosed Pool Edges", "Custom Paving Layouts",
    "Hotel Lobby Features", "Heritage Restoration", "Retail Fit-Outs",
  ],

  related: [
    {
      name: "Kota Blue Stone Flooring",
      tagline: "Standard tiles cut from the same blue limestone",
      href: "/products/kota-blue-flooring",
      image: "/kota-blue-1.jpeg",
    },
    {
      name: "Kota Blue Stone Slabs",
      tagline: "Large format slabs — ideal for custom cutting",
      href: "/products/kota-blue-slabs",
      image: "/kota-slab-2.jpeg",
    },
    {
      name: "Kota Stone Steps & Stair Treads",
      tagline: "Standard and custom step sizes",
      href: "/products/stone-steps",
      image: "/steps-1.jpeg",
    },
  ],
};

export default function CustomCutPage() {
  return <ProductDetailPage data={data} />;
}
