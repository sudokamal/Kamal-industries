import type { Metadata } from "next";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import type { ProductDetailData } from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
  title: "Kota Stone Wall Cladding Panels | Kamal Industries",
  description:
    "Buy Kota Stone wall cladding panels direct from Kamal Industries, Ramganjmandi. Split-face, sawn, and honed stone cladding panels for building facades and interior feature walls.",
  alternates: {
    canonical: "https://kamalindustries.in/products/wall-cladding",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/products/wall-cladding",
    siteName: "Kamal Industries & Enterprises",
    title: "Kota Stone Wall Cladding Panels | Kamal Industries",
    description:
      "Buy Kota Stone wall cladding panels direct from Kamal Industries, Ramganjmandi.",
    images: [
      {
        url: "/Wall Cladding.jpeg",
        width: 1200,
        height: 630,
        alt: "Kota Stone wall cladding panels at factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kota Stone Wall Cladding Panels | Kamal Industries",
    description:
      "Buy Kota Stone wall cladding panels direct from Kamal Industries, Ramganjmandi.",
    images: ["/Wall Cladding.jpeg"],
  },
};

const data: ProductDetailData = {
  badge: "Architectural Facades · Split-Face",
  title: "Kota Stone",
  titleAccent: "Wall Cladding",
  subtitle:
    "Split-face and sawn wall cladding panels for building facades, feature walls, and interior accent surfaces. Adds natural texture and depth to vertical architectural surfaces.",
  heroImage: "/Wall Cladding.jpeg",
  breadcrumb: "Wall Cladding",
  whatsappText:
    "Hello, I am interested in Kota Stone Wall Cladding. Please share panel sizes and prices.",
  contactParam: "Kota+Stone+Wall+Cladding",

  gallery: [
    { src: "/Wall Cladding.jpeg", alt: "Kota Stone wall cladding panels — split-face finish" },
    { src: "/Gallery13.jpeg", alt: "Split-face Kota Blue wall cladding ledger panels" },
    { src: "/Gallery22.jpeg", alt: "Natural split texture stone facade panel" },
  ],

  description:
    "Our Kota Stone wall cladding panels are precision-cut and surface-treated for direct installation on both interior and exterior wall surfaces. Available in split-face, sawn, and honed finishes, these panels bring the natural texture and depth of authentic Kota Stone to vertical applications — feature walls, building facades, boundary walls, and more.",

  sizes: [
    "6×12 inches", "6×18 inches", "9×18 inches",
    "12×24 inches", "Ledger panels", "Random lengths",
  ],
  thickness: ["15mm", "20mm", "25mm", "30mm"],
  finishes: ["Natural Split", "Honed", "Leather", "Sandblasted"],

  features: [
    "Adds organic texture and industrial luxury to walls",
    "Weather-proof exterior facade protection",
    "Precision edge calibration for tight dry-stack or grouted installation",
    "Lightweight calibrated options for interior wall mounting",
    "Direct manufacturer supply from Ramganjmandi",
  ],

  specs: [
    { label: "Stone Type",           value: "Limestone Cladding Panels" },
    { label: "Standard Sizes",       value: "6×12, 6×18, 12×24 inches" },
    { label: "Thickness Range",      value: "15mm to 30mm" },
    { label: "Density",              value: "2.68 g/cm³" },
    { label: "Water Absorption",     value: "< 0.5%" },
  ],

  applications: [
    "Exterior Building Facades", "Interior Feature Walls", "Boundary Wall Cladding",
    "Fireplace Surrounds", "Garden Retaining Walls", "Commercial Foyers",
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

export default function WallCladdingPage() {
  return <ProductDetailPage data={data} />;
}
