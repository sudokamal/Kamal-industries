import type { Metadata } from "next";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import type { ProductDetailData } from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
  title: "Kota Brown Stone Flooring — Warm Earthy Limestone | Kamal Industries",
  description:
    "Buy Kota Brown Stone flooring tiles direct from Kamal Industries, Ramganjmandi. Warm earthy beige to chocolate brown limestone for villa interiors, verandas, courtyards, and rustic flooring.",
  alternates: {
    canonical: "https://kamalindustries.in/products/kota-brown-flooring",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/products/kota-brown-flooring",
    siteName: "Kamal Industries & Enterprises",
    title: "Kota Brown Stone Flooring — Warm Earthy Limestone | Kamal Industries",
    description:
      "Buy Kota Brown Stone flooring tiles direct from Kamal Industries, Ramganjmandi. Warm earthy beige to chocolate brown limestone.",
    images: [
      {
        url: "/Kota Brown Stone.jpeg",
        width: 1200,
        height: 630,
        alt: "Kota Brown Stone flooring tiles at Kamal Industries factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kota Brown Stone Flooring — Warm Earthy Limestone | Kamal Industries",
    description:
      "Buy Kota Brown Stone flooring tiles direct from Kamal Industries, Ramganjmandi.",
    images: ["/Kota Brown Stone.jpeg"],
  },
};

const data: ProductDetailData = {
  badge: "Warm Earthy Tones · Calibrated Tiles",
  title: "Kota Brown Stone",
  titleAccent: "Flooring Tiles",
  subtitle:
    "Warm beige to chocolate brown natural limestone. Combines the legendary durability of Kota stone with a softer, organic color palette for villa interiors and courtyards.",
  heroImage: "/Kota Brown Stone.jpeg",
  breadcrumb: "Kota Brown Stone Flooring",
  whatsappText:
    "Hello, I am interested in Kota Brown Stone Flooring. Please share sizes and pricing.",
  contactParam: "Kota+Brown+Stone+Flooring",

  gallery: [
    { src: "/Kota Brown Stone.jpeg", alt: "Kota Brown Stone flooring tiles — warm earthy tones" },
    { src: "/Gallery6.jpeg", alt: "Kota Brown stone slabs stacked in factory" },
    { src: "/Types.jpeg", alt: "Kota Brown stone texture & finish varieties" },
    { src: "/Card.jpeg", alt: "Calibrated Kota Brown tiles batch" },
  ],

  description:
    "Kota Brown Stone carries all the structural and performance attributes of Kota Blue Stone while offering a distinctly warmer, earthy colour palette — ranging from warm beige to soft chocolate brown. It is a premium choice for architects who want the durability of Kota Stone with a softer, more organic interior aesthetic.",

  sizes: [
    "12×12 inches", "12×18 inches", "18×18 inches",
    "18×24 inches", "24×24 inches", "Custom cut to size",
  ],
  thickness: ["18mm", "20mm", "25mm", "30mm"],
  finishes: ["Natural Split", "Honed", "Polished", "Sandblasted"],

  features: [
    "Warm earthy tones — ideal for organic and rustic interior designs",
    "High density — resistant to water stains and moisture penetration",
    "Slip-resistant natural surface finish for safe wet-area paving",
    "Calibrated thickness tolerance of ±1mm",
    "Factory direct supply from Ramganjmandi",
  ],

  specs: [
    { label: "Stone Type",           value: "Limestone" },
    { label: "Colour Range",         value: "Warm Beige, Brown, Chocolate" },
    { label: "Standard Sizes",       value: "12×12 to 24×24 inches" },
    { label: "Thickness",            value: "18mm, 20mm, 25mm, 30mm" },
    { label: "Density",              value: "2.62 g/cm³" },
    { label: "Water Absorption",     value: "< 0.6%" },
  ],

  applications: [
    "Villa Interior Flooring", "Verandas & Patios", "Courtyard Paving",
    "Farmhouse Pathways", "Boutique Hotel Flooring", "Heritage Restorations",
  ],

  related: [
    {
      name: "Kota Blue Stone Flooring",
      tagline: "Classic blue-grey limestone flooring",
      href: "/products/kota-blue-flooring",
      image: "/Kota Blue Stone.jpeg",
    },
    {
      name: "Mandana Red Stone",
      tagline: "Royal red quartzite for heritage architecture",
      href: "/products/mandana-stone",
      image: "/Mandana Red Stone.jpeg",
    },
  ],
};

export default function KotaBrownFlooringPage() {
  return <ProductDetailPage data={data} />;
}
