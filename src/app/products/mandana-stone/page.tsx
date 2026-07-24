import type { Metadata } from "next";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import type { ProductDetailData } from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
  title: "Mandana Red Stone — Royal Quartzite | Kamal Industries",
  description:
    "Buy authentic Mandana Red Quartzite stone direct from Kamal Industries, Ramganjmandi. Acid-resistant red quartzite for temple flooring, heritage architecture, garden pathways, and courtyards.",
  alternates: {
    canonical: "https://kamalindustries.in/products/mandana-stone",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/products/mandana-stone",
    siteName: "Kamal Industries & Enterprises",
    title: "Mandana Red Stone — Royal Quartzite | Kamal Industries",
    description:
      "Buy authentic Mandana Red Quartzite stone direct from Kamal Industries, Ramganjmandi. Acid-resistant red quartzite for temple flooring and heritage architecture.",
    images: [
      {
        url: "/Mandana Red Stone.jpeg",
        width: 1200,
        height: 630,
        alt: "Mandana Red Quartzite slabs at Kamal Industries factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandana Red Stone — Royal Quartzite | Kamal Industries",
    description:
      "Buy authentic Mandana Red Quartzite stone direct from Kamal Industries, Ramganjmandi.",
    images: ["/Mandana Red Stone.jpeg"],
  },
};

const data: ProductDetailData = {
  badge: "Heritage Quartzite · Acid Resistant",
  title: "Mandana Red",
  titleAccent: "Quartzite Stone",
  subtitle:
    "Acid-resistant, high-durability terracotta red quartzite. Celebrated in Rajasthani temple architecture for centuries for its non-slip texture and rich heritage color.",
  heroImage: "/Mandana Red Stone.jpeg",
  breadcrumb: "Mandana Red Stone",
  whatsappText:
    "Hello, I am interested in Mandana Red Stone. Please share available sizes and price details.",
  contactParam: "Mandana+Red+Stone",

  gallery: [
    { src: "/Mandana Red Stone.jpeg", alt: "Mandana Red Quartzite slabs at Kamal Industries" },
    { src: "/Gallery7.jpeg", alt: "Mandana Red stone stock in factory yard" },
    { src: "/Card1.jpeg", alt: "Mandana Red stone tile batch" },
  ],

  description:
    "Mandana Stone is a distinctive red quartzite sourced from the Mandana region of Kota district. Prized for its deep terracotta red colour and characterful natural-split surface, it has been used in Rajasthani architecture for centuries. Kamal Industries supplies Mandana Stone in calibrated sizes for both traditional and contemporary applications.",

  sizes: [
    "12×12 inches", "12×18 inches", "18×18 inches",
    "Irregular shapes", "Custom cut to drawing",
  ],
  thickness: ["20mm", "25mm", "30mm", "35mm"],
  finishes: ["Natural Split", "Sandblasted", "Flamed"],

  features: [
    "100% Acid Resistant — withstands harsh chemical spills and acidic rain",
    "Deep rich terracotta red color that never fades in sunlight",
    "Naturally anti-slip textured surface finish",
    "Extreme hardness — suitable for heavy foot traffic and temple flooring",
    "Direct manufacturer supply from Ramganjmandi",
  ],

  specs: [
    { label: "Stone Type",           value: "Quartzite" },
    { label: "Colour",               value: "Terracotta Red, Deep Rustic Red" },
    { label: "Acid Resistance",      value: "100% Acid Proof" },
    { label: "Compressive Strength", value: "150 – 200 MPa" },
    { label: "Water Absorption",     value: "< 0.4%" },
  ],

  applications: [
    "Temple Flooring", "Heritage Building Restorations", "Courtyard Paving",
    "Outdoor Landscaping", "Garden Pathways", "Rustic Interior Floors",
  ],

  related: [
    {
      name: "Kota Blue Stone Flooring",
      tagline: "Classic blue-grey limestone flooring",
      href: "/products/kota-blue-flooring",
      image: "/Kota Blue Stone.jpeg",
    },
    {
      name: "Kota Brown Stone Flooring",
      tagline: "Warm earthy tones limestone flooring",
      href: "/products/kota-brown-flooring",
      image: "/Kota Brown Stone.jpeg",
    },
  ],
};

export default function MandanaStonePage() {
  return <ProductDetailPage data={data} />;
}
