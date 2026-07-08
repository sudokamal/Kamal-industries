import type { Metadata } from "next";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import type { ProductDetailData } from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
  title: "Kota Blue Stone Slabs — Large Format | Kamal Industries",
  description:
    "Buy large-format Kota Blue Stone slabs directly from the manufacturer — Kamal Industries, Ramganjmandi. Premium jumbo slabs up to 4×8 ft for hotel lobbies, feature walls, and architectural projects.",
  alternates: {
    canonical: "https://kamalindustries.in/products/kota-blue-slabs",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/products/kota-blue-slabs",
    siteName: "Kamal Industries & Enterprises",
    title: "Kota Blue Stone Slabs — Large Format | Kamal Industries",
    description:
      "Buy large-format Kota Blue Stone slabs directly from the manufacturer — Kamal Industries, Ramganjmandi. Premium jumbo slabs up to 4×8 ft for hotel lobbies, feature walls, and architectural projects.",
    images: [
      {
        url: "/kota-blue-2.jpeg",
        width: 1200,
        height: 630,
        alt: "Large format Kota Blue Stone slabs ready for dispatch at factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kota Blue Stone Slabs — Large Format | Kamal Industries",
    description:
      "Buy large-format Kota Blue Stone slabs directly from the manufacturer — Kamal Industries, Ramganjmandi.",
    images: ["/kota-blue-2.jpeg"],
  },
};

const data: ProductDetailData = {
  badge: "Large Format Limestone · Premium Architectural",
  title: "Kota Blue Stone",
  titleAccent: "Large Slabs",
  subtitle:
    "Jumbo format Kota Blue Stone slabs — selected for colour uniformity and freedom from lamination. Ideal for premium hotel lobbies, architectural feature walls, and large-format flooring.",
  heroImage: "/kota-slab-2.jpeg",
  breadcrumb: "Kota Blue Stone Slabs",
  whatsappText:
    "Hello, I am interested in Kota Blue Stone large slabs. Please share your price list and available slab sizes.",
  contactParam: "Kota+Blue+Stone+Slabs",

  gallery: [
    { src: "/kota-slab-2.jpeg",   alt: "Large format Kota Blue Stone slabs at Kamal Industries factory" },
    { src: "/kota-slab-1.jpeg",   alt: "Kota Stone slab selection — premium quality" },
    { src: "/kota-slab-3.jpeg",   alt: "Kota Blue Stone slabs stacked in factory yard" },
    { src: "/kota-blue-1.jpeg",   alt: "Kota Blue Stone stacks ready for dispatch" },
    { src: "/33.jpeg",            alt: "Mixed slab sizes stacked at factory" },
    { src: "/cutting-machine-1.jpeg", alt: "Kota Stone being precision cut into slabs" },
    { src: "/factory-yard-1.jpeg",alt: "Factory yard with large slab stock" },
    { src: "/kota-blue-2.jpeg",   alt: "Kota Blue Stone quality batch" },
  ],

  description:
    "Our large-format Kota Blue Stone slabs are cut from the finest quarry blocks selected for colour uniformity and freedom from lamination. Available in jumbo formats up to 4 feet × 8 feet, these slabs are ideal for premium lobbies, feature walls, and architectural cladding applications where an uninterrupted stone surface is required. Each slab is hand-inspected for colour consistency before dispatch, ensuring uniform aesthetics across large installations.",

  sizes: [
    "2×2 feet", "2×3 feet", "2×4 feet",
    "3×3 feet", "3×4 feet", "4×4 feet", "Random slabs",
  ],
  thickness: ["20mm", "25mm", "30mm", "40mm", "50mm"],
  finishes: ["Natural Split", "Honed", "Polished", "Leather / Brushed"],

  features: [
    "Jumbo format slabs — uninterrupted stone surface for premium spaces",
    "Selected from finest quarry blocks for colour uniformity",
    "Freedom from lamination — guaranteed structural integrity",
    "Ideal for high-footfall commercial and hospitality settings",
    "Hand-inspected for colour consistency before dispatch",
    "Available in formats up to 4ft × 8ft",
    "Factory-direct supply — no middlemen markup",
    "50+ year service life with basic care",
  ],

  specs: [
    { label: "Stone Type",           value: "Fine-grained Limestone" },
    { label: "Colour",               value: "Blue-grey, Greenish-grey" },
    { label: "Slab Sizes",           value: "2×2 ft to 4×4 ft, Random" },
    { label: "Max Slab Size",        value: "Up to 4 ft × 8 ft" },
    { label: "Standard Thickness",   value: "20mm, 25mm, 30mm, 40mm, 50mm" },
    { label: "Density",              value: "2.65 – 2.72 g/cm³" },
    { label: "Water Absorption",     value: "< 0.5%" },
    { label: "Compressive Strength", value: "130 – 180 MPa" },
    { label: "Colour Uniformity",    value: "Hand-selected matching batches" },
    { label: "Lamination",           value: "Freedom from lamination guaranteed" },
    { label: "Mohs Hardness",        value: "3 – 4" },
    { label: "Service Life",         value: "50+ years" },
  ],

  applications: [
    "Architectural Feature Walls", "Hotel & Resort Lobbies", "Large-Format Flooring",
    "Reception Counters", "Landscape Slabs", "Exterior Facades",
    "Swimming Pool Surrounds", "Retail Showrooms", "Airport Terminals",
    "Commercial Corridors", "Garden Feature Paving", "Rooftop Decks",
  ],

  related: [
    {
      name: "Kota Blue Stone Flooring",
      tagline: "Standard tiles — the benchmark Indian flooring stone",
      href: "/products/kota-blue-flooring",
      image: "/kota-blue-1.jpeg",
    },
    {
      name: "Kota Stone Wall Cladding",
      tagline: "Split-face panels for premium facades",
      href: "/products/wall-cladding",
      image: "/kota-slab-1.jpeg",
    },
    {
      name: "Custom Cut Stone",
      tagline: "Bespoke sizing for architects and contractors",
      href: "/products/custom-cut",
      image: "/cutting-machine-1.jpeg",
    },
  ],
};

export default function KotaBlueSlabsPage() {
  return <ProductDetailPage data={data} />;
}
