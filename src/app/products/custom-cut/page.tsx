import type { Metadata } from "next";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import type { ProductDetailData } from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
  title: "Custom Cut Kota Stone — Bespoke Sizing | Kamal Industries",
  description:
    "Order custom cut Kota Stone manufactured to your architectural drawings. CNC cutting, waterjet profiles, custom thickness, and edge treatments from Kamal Industries, Ramganjmandi.",
  alternates: {
    canonical: "https://kamalindustries.in/products/custom-cut",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/products/custom-cut",
    siteName: "Kamal Industries & Enterprises",
    title: "Custom Cut Kota Stone — Bespoke Sizing | Kamal Industries",
    description:
      "Order custom cut Kota Stone manufactured to your architectural drawings.",
    images: [
      {
        url: "/cutting-machine-3.jpeg",
        width: 1200,
        height: 630,
        alt: "CNC custom cut stone at Kamal Industries factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Cut Kota Stone — Bespoke Sizing | Kamal Industries",
    description:
      "Order custom cut Kota Stone manufactured to your architectural drawings.",
    images: ["/cutting-machine-3.jpeg"],
  },
};

const data: ProductDetailData = {
  badge: "Bespoke Sizing · CNC Cutting",
  title: "Custom Cut",
  titleAccent: "Kota Stone",
  subtitle:
    "Bespoke sizing manufactured directly from your CAD or architectural drawings. CNC precision cutting, waterjet profiling, custom thickness, and specialised edge treatments.",
  heroImage: "/cutting-machine-3.jpeg",
  breadcrumb: "Custom Cut Stone",
  whatsappText:
    "Hello, I have custom stone cutting requirements. Please let me know how to send my architectural drawing.",
  contactParam: "Custom+Cut+Stone",

  gallery: [
    { src: "/cutting-machine-3.jpeg", alt: "Worker operating stone cutting machine at Kamal Industries" },
    { src: "/cutting-machine-1.jpeg", alt: "Gang saw machine slicing stone blocks" },
    { src: "/cutting-machine-2.jpeg", alt: "Automated tile calibrator machine in operation" },
    { src: "/Gallery16.jpeg", alt: "CNC waterjet stone cutting station" },
  ],

  description:
    "Kamal Industries operates precision CNC and diamond-blade cutting equipment capable of producing stone to any custom dimension provided in architectural drawings. From non-standard tile formats to bespoke countertop slabs, sill stones, rebated thresholds, and bullnosed pool copings — our custom cutting service handles every specification. Minimum order quantities apply.",

  sizes: ["Any dimension as per drawing", "Minimum 6 inches on shortest side"],
  thickness: ["15mm minimum to 150mm maximum", "As per specification"],
  finishes: ["Natural Split", "Honed", "Polished", "Leather", "Sandblasted", "Flamed", "Custom"],

  features: [
    "Precision cutting to ±1mm tolerance from CAD drawings",
    "Waterjet and CNC custom shapes and cutouts",
    "Specialised edge profiles — bullnose, bevelled, rebated, mitred",
    "Custom thickness up to 150mm for heavy load applications",
    "Factory direct processing with strict quality control",
  ],

  specs: [
    { label: "Machinery Used",       value: "Multi-blade Gang Saws, CNC, Waterjet" },
    { label: "Cutting Tolerance",    value: "±1mm" },
    { label: "Max Slab Dimension",   value: "4 × 8 feet" },
    { label: "Thickness Range",      value: "15mm to 150mm" },
    { label: "Supported Formats",    value: "CAD (.dwg, .dxf), PDF drawings" },
  ],

  applications: [
    "Architectural Custom Projects", "Window Sills & Door Thresholds",
    "Countertops & Vanity Tops", "Pool Edge Coping",
    "Custom Pavers & Stepping Stones", "CNC Carved Panels",
  ],

  related: [
    {
      name: "Kota Blue Stone Slabs",
      tagline: "Large format jumbo slabs",
      href: "/products/kota-blue-slabs",
      image: "/Large Format Slabs.jpeg",
    },
    {
      name: "Kota Stone Steps & Stair Treads",
      tagline: "Calibrated stair treads and risers",
      href: "/products/stone-steps",
      image: "/Stairs.jpeg",
    },
  ],
};

export default function CustomCutPage() {
  return <ProductDetailPage data={data} />;
}
