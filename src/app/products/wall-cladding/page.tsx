import type { Metadata } from "next";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import type { ProductDetailData } from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
  title: "Kota Stone Wall Cladding — Split-Face Panels | Kamal Industries",
  description:
    "Buy Kota Stone wall cladding panels direct from the manufacturer — Kamal Industries, Ramganjmandi. Split-face, sawn, and honed panels for building facades, feature walls, and boundary walls.",
  alternates: {
    canonical: "https://kamalindustries.in/products/wall-cladding",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/products/wall-cladding",
    siteName: "Kamal Industries & Enterprises",
    title: "Kota Stone Wall Cladding — Split-Face Panels | Kamal Industries",
    description:
      "Buy Kota Stone wall cladding panels direct from the manufacturer — Kamal Industries, Ramganjmandi. Split-face, sawn, and honed panels for building facades, feature walls, and boundary walls.",
    images: [
      {
        url: "/cladding-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Kota Stone wall cladding samples at Kamal Industries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kota Stone Wall Cladding — Split-Face Panels | Kamal Industries",
    description:
      "Buy Kota Stone wall cladding panels direct from the manufacturer — Kamal Industries, Ramganjmandi.",
    images: ["/cladding-1.jpeg"],
  },
};

const data: ProductDetailData = {
  badge: "Split-Face & Sawn Panels · Factory Direct",
  title: "Kota Stone",
  titleAccent: "Wall Cladding",
  subtitle:
    "Precision-cut wall cladding panels in split-face, sawn, and honed finishes. The natural texture and depth of authentic Kota Stone for building facades, feature walls, and exterior boundary walls.",
  heroImage: "/kota-slab-1.jpeg",
  breadcrumb: "Wall Cladding",
  whatsappText:
    "Hello, I am interested in Kota Stone Wall Cladding panels. Please share your price list and panel sizes.",
  contactParam: "Kota+Stone+Wall+Cladding",

  gallery: [
    { src: "/kota-slab-1.jpeg",   alt: "Kota Stone cladding panels at Kamal Industries factory" },
    { src: "/kota-slab-3.jpeg",   alt: "Wall cladding stone panels ready for dispatch" },
    { src: "/kota-slab-2.jpeg",   alt: "Large stone panels in factory yard" },
    { src: "/kota-blue-2.jpeg",   alt: "Kota Blue Stone panels — quality inspection" },
    { src: "/22.jpeg",            alt: "Close-up wall of stacked cladding panels" },
    { src: "/cutting-machine-1.jpeg", alt: "Precision cutting for wall cladding panels" },
    { src: "/factory-yard-3.jpeg",alt: "Factory yard with cladding stone stock" },
    { src: "/00.jpeg",            alt: "Mixed stone slabs — cladding and flooring stock" },
  ],

  description:
    "Our Kota Stone wall cladding panels are precision-cut and surface-treated for direct installation on both interior and exterior wall surfaces. Available in split-face, sawn, and honed finishes, these panels bring the natural texture and depth of authentic Kota Stone to vertical applications — feature walls, building facades, boundary walls, and more. The lightweight calibrated thickness ensures the panels remain within structural weight limits while maintaining maximum visual impact.",

  sizes: [
    "6×12 inches", "6×18 inches", "9×18 inches",
    "12×24 inches", "Ledger panels", "Random lengths",
  ],
  thickness: ["15mm", "20mm", "25mm", "30mm"],
  finishes: ["Natural Split", "Honed", "Leather / Brushed", "Sandblasted"],

  features: [
    "Precision-cut panels for direct installation on interior and exterior walls",
    "Available in split-face, sawn, and honed surface finishes",
    "Natural texture and depth of authentic Kota Stone for vertical applications",
    "Lightweight calibrated thickness — suitable for all wall load limits",
    "Weather-resistant — designed for outdoor cladding applications",
    "Consistent colour and size across large batches for seamless facades",
    "Available as ledger stone panels for contemporary aesthetics",
    "50+ year service life with basic care",
  ],

  specs: [
    { label: "Stone Type",           value: "Fine-grained Kota Limestone" },
    { label: "Colour",               value: "Blue-grey, Greenish-grey" },
    { label: "Panel Sizes",          value: "6×12, 6×18, 9×18, 12×24 inches, Random" },
    { label: "Ledger Panel Sizes",   value: "4×12, 4×18, 6×24 inches" },
    { label: "Standard Thickness",   value: "15mm, 20mm, 25mm, 30mm" },
    { label: "Installation Method",  value: "Stone adhesive or mechanical clamps" },
    { label: "Density",              value: "2.65 – 2.72 g/cm³" },
    { label: "Water Absorption",     value: "< 0.5%" },
    { label: "Compressive Strength", value: "130 – 180 MPa" },
    { label: "Frost Resistance",     value: "Excellent" },
    { label: "Mohs Hardness",        value: "3 – 4" },
    { label: "Service Life",         value: "50+ years" },
  ],

  applications: [
    "Building Façades", "Exterior Boundary Walls", "Interior Feature Walls",
    "Garden Retaining Walls", "Swimming Pool Surrounds", "Commercial Interiors",
    "Hotel Lobbies", "Reception Walls", "Landscape Stone Walls",
    "Fireplace Surrounds", "Accent Walls", "Outdoor Kitchen Walls",
  ],

  related: [
    {
      name: "Kota Blue Stone Slabs",
      tagline: "Large format slabs for premium architectural projects",
      href: "/products/kota-blue-slabs",
      image: "/kota-slab-2.jpeg",
    },
    {
      name: "Kota Blue Stone Flooring",
      tagline: "Classic blue-grey — the benchmark flooring stone",
      href: "/products/kota-blue-flooring",
      image: "/kota-blue-1.jpeg",
    },
    {
      name: "Custom Cut Stone",
      tagline: "Bespoke sizing for architects and contractors",
      href: "/products/custom-cut",
      image: "/cutting-machine-1.jpeg",
    },
  ],
};

export default function WallCladdingPage() {
  return <ProductDetailPage data={data} />;
}
