import type { Metadata } from "next";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import type { ProductDetailData } from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
  title: "Kota Blue Stone Slabs — Jumbo Format & Factory Direct | Kamal Industries",
  description:
    "Buy large format Kota Blue Stone slabs direct from Kamal Industries, Ramganjmandi. Zero lamination jumbo slabs up to 4x8 ft for commercial lobbies, hotel interiors, feature walls, and landscape projects.",
  alternates: {
    canonical: "https://kamalindustries.in/products/kota-blue-slabs",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/products/kota-blue-slabs",
    siteName: "Kamal Industries & Enterprises",
    title: "Kota Blue Stone Slabs — Jumbo Format & Factory Direct | Kamal Industries",
    description:
      "Buy large format Kota Blue Stone slabs direct from Kamal Industries, Ramganjmandi. Zero lamination jumbo slabs for lobbies and architectural projects.",
    images: [
      {
        url: "/Large Format Slabs.jpeg",
        width: 1200,
        height: 630,
        alt: "Large format Kota Blue Stone slabs in factory yard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kota Blue Stone Slabs — Jumbo Format & Factory Direct | Kamal Industries",
    description:
      "Buy large format Kota Blue Stone slabs direct from Kamal Industries, Ramganjmandi.",
    images: ["/Large Format Slabs.jpeg"],
  },
};

const data: ProductDetailData = {
  badge: "Jumbo Format · Zero Lamination",
  title: "Kota Blue Stone",
  titleAccent: "Large Format Slabs",
  subtitle:
    "Uninterrupted natural limestone surfaces in formats up to 4ft × 8ft. Machine-calibrated from choice quarry blocks for high-end lobbies, feature walls, and architectural cladding.",
  heroImage: "/Large Format Slabs.jpeg",
  breadcrumb: "Kota Blue Stone Slabs",
  whatsappText:
    "Hello, I am interested in Large Format Kota Blue Stone Slabs. Please share slab availability and pricing.",
  contactParam: "Kota+Blue+Stone+Slabs",

  gallery: [
    { src: "/Large Format Slabs.jpeg", alt: "Large format Kota Blue stone slabs stacked at factory yard" },
    { src: "/Gallery1.jpeg", alt: "Kota Stone slab stock yard view" },
    { src: "/Gallery12.jpeg", alt: "Jumbo format Kota Blue stone slab" },
    { src: "/Gallery20.jpeg", alt: "Limestone quarry block and slab yard" },
    { src: "/cutting-machine-1.jpeg", alt: "Gang saw machine slicing jumbo Kota stone slabs" },
  ],

  description:
    "Our large-format Kota Blue Stone slabs are sliced from choice quarry blocks selected for exceptional density, color uniformity, and freedom from lamination. Available in jumbo dimensions up to 4 feet × 8 feet, these slabs are favoured by leading architects for hotel lobbies, corporate headquarters, and high-end residential interiors where seamless continuity is required.",

  sizes: [
    "2×2 feet", "2×3 feet", "2×4 feet",
    "3×3 feet", "3×4 feet", "4×4 feet", "4×8 feet jumbo",
  ],
  thickness: ["20mm", "25mm", "30mm", "40mm", "50mm"],
  finishes: ["Natural Split", "Honed", "Polished", "Leather / Brushed"],

  features: [
    "Jumbo format up to 4ft × 8ft — minimal grout lines",
    "Zero lamination guaranteed — tested block selection",
    "Machine-calibrated thickness for precise installation",
    "High flexural strength — resistant to heavy point loads",
    "Available in honed, polished, and natural split finishes",
    "Direct factory block selection for project color matching",
    "Packed in heavy-duty export wooden crates",
  ],

  specs: [
    { label: "Stone Type", value: "Limestone (Jumbo Slabs)" },
    { label: "Colour", value: "Uniform Blue-grey" },
    { label: "Max Dimensions", value: "Up to 4 × 8 feet (1200 × 2400 mm)" },
    { label: "Thickness Options", value: "20mm, 25mm, 30mm, 40mm, 50mm" },
    { label: "Thickness Tolerance", value: "±1mm (calibrated)" },
    { label: "Density", value: "2.68 g/cm³" },
    { label: "Flexural Strength", value: "22 – 26 MPa" },
    { label: "Compressive Strength", value: "140 – 175 MPa" },
  ],

  applications: [
    "Hotel Lobby Flooring", "Corporate Office Foyers", "Feature Wall Cladding",
    "Luxury Villa Flooring", "Airport Terminal Floors", "Reception Counters",
  ],

  related: [
    {
      name: "Kota Blue Stone Flooring",
      tagline: "Classic blue-grey limestone tiles for standard installation",
      href: "/products/kota-blue-flooring",
      image: "/Kota Blue Stone.jpeg",
    },
    {
      name: "Kota Stone Wall Cladding",
      tagline: "Split-face and sawn panels for vertical surfaces",
      href: "/products/wall-cladding",
      image: "/Wall Cladding.jpeg",
    },
  ],
};

export default function KotaBlueSlabsPage() {
  return <ProductDetailPage data={data} />;
}
