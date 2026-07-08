import type { Metadata } from "next";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import type { ProductDetailData } from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
  title: "Mandana Red Stone — Heritage Rajasthani Quartzite | Kamal Industries",
  description:
    "Buy Mandana Red Stone directly from Kamal Industries, Ramganjmandi. Acid-resistant red quartzite for temple flooring, garden paths, heritage restoration, and outdoor landscaping.",
  alternates: {
    canonical: "https://kamalindustries.in/products/mandana-stone",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/products/mandana-stone",
    siteName: "Kamal Industries & Enterprises",
    title: "Mandana Red Stone — Heritage Rajasthani Quartzite | Kamal Industries",
    description:
      "Buy Mandana Red Stone directly from Kamal Industries, Ramganjmandi. Acid-resistant red quartzite for temple flooring, garden paths, heritage restoration, and outdoor landscaping.",
    images: [
      {
        url: "/mandana-red-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Mandana Red Quartzite slabs ready at Kamal Industries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandana Red Stone — Heritage Rajasthani Quartzite | Kamal Industries",
    description:
      "Buy Mandana Red Stone directly from Kamal Industries, Ramganjmandi. Acid-resistant red quartzite.",
    images: ["/mandana-red-1.jpeg"],
  },
};

const data: ProductDetailData = {
  badge: "Heritage Quartzite · Rajasthan",
  title: "Mandana",
  titleAccent: "Red Stone",
  subtitle:
    "Acid-resistant red quartzite from Rajasthan's geological heritage. Non-slip, weather-proof, and ideal for temple flooring, garden paths, heritage restoration, and landscape paving.",
  heroImage: "/stock-yard-1.jpeg",
  breadcrumb: "Mandana Red Stone",
  whatsappText:
    "Hello, I am interested in Mandana Red Stone. Please share your price list and available sizes.",
  contactParam: "Mandana+Red+Stone",

  gallery: [
    { src: "/stock-yard-1.jpeg",  alt: "Stone stock yard at Kamal Industries — overhead view" },
    { src: "/kota-stone-3.jpeg",  alt: "Stone production at Kamal Industries factory" },
    { src: "/stock-yard-2.jpeg",  alt: "Stone inventory yard at Kamal Industries" },
    { src: "/factory-yard-3.jpeg",alt: "Factory overview at Kamal Industries Ramganjmandi" },
    { src: "/cutting-machine-3.jpeg", alt: "Stone cutting machine operation at factory" },
    { src: "/workers-loading-2.jpeg", alt: "Workers loading stone for dispatch" },
    { src: "/kota-slab-1.jpeg",   alt: "Stone slabs in factory yard" },
    { src: "/factory-yard-1.jpeg",alt: "Kamal Industries factory yard" },
  ],

  description:
    "Mandana Stone is a distinctive red quartzite sourced from the Mandana region of Kota district. Prized for its deep terracotta red colour and characterful natural-split surface, it has been used in Rajasthani architecture for centuries. Unlike limestone, Mandana is a quartzite with Mohs hardness of 6–7 — making it one of the hardest and most durable flooring stones available. Kamal Industries supplies Mandana Stone in calibrated sizes for both traditional and contemporary applications.",

  sizes: [
    "12×12 inches", "12×18 inches",
    "18×18 inches", "Irregular shapes", "Custom cut",
  ],
  thickness: ["20mm", "25mm", "30mm", "35mm"],
  finishes: ["Natural Split", "Sandblasted", "Honed", "Flamed", "Custom"],

  features: [
    "Distinctive deep red heritage aesthetic — centuries of Rajasthani tradition",
    "Extremely hard quartzite — Mohs 6–7 hardness, far harder than limestone",
    "Acid-resistant — ideal for outdoor and chemically exposed areas",
    "Very high natural slip resistance — safe for all surface types",
    "Traditional Rajasthani stone with proven durability over centuries",
    "Weather and frost resistant — excellent for all Indian climates",
    "Near-zero water absorption — virtually impermeable structure",
    "50+ year lifespan — requires no special maintenance or sealing",
  ],

  specs: [
    { label: "Stone Type",           value: "Quartzite" },
    { label: "Colour",               value: "Deep Red, Rustic Red, Terracotta" },
    { label: "Standard Sizes",       value: "12×12 inches to 4×2 ft, Irregular" },
    { label: "Standard Thickness",   value: "20mm, 25mm, 30mm, 35mm" },
    { label: "Density",              value: "2.60 – 2.65 g/cm³" },
    { label: "Water Absorption",     value: "< 0.4%" },
    { label: "Compressive Strength", value: "150 – 200 MPa" },
    { label: "Acid Resistance",      value: "Very Good" },
    { label: "Slip Resistance",      value: "Very High (natural split)" },
    { label: "Frost Resistance",     value: "Excellent" },
    { label: "Mohs Hardness",        value: "6 – 7" },
    { label: "Service Life",         value: "50+ years" },
  ],

  applications: [
    "Temple Flooring", "Heritage Restoration", "Garden Pathways", "Outdoor Landscaping",
    "Farmhouse Flooring", "Rustic Interiors", "Courtyard Paving", "Walkways & Paths",
    "Steps & Stair Treads", "Swimming Pool Surrounds", "Boundary Walls", "Landscape Features",
  ],

  related: [
    {
      name: "Kota Brown Stone Flooring",
      tagline: "Warm earthy tones — the premium brown variant",
      href: "/products/kota-brown-flooring",
      image: "/kota-stone-1.jpeg",
    },
    {
      name: "Kota Blue Stone Flooring",
      tagline: "Classic blue-grey — the benchmark Indian flooring stone",
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

export default function MandanaStonePage() {
  return <ProductDetailPage data={data} />;
}
