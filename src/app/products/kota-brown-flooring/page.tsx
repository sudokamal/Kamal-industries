import type { Metadata } from "next";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import type { ProductDetailData } from "@/components/products/ProductDetailPage";

export const metadata: Metadata = {
  title: "Kota Brown Stone Flooring — Warm Limestone | Kamal Industries",
  description:
    "Buy Kota Brown Stone flooring direct from the manufacturer — Kamal Industries, Ramganjmandi. Rich warm-brown limestone for residential flooring, villa exteriors, courtyards, and garden paving.",
  alternates: {
    canonical: "https://kamalindustries.in/products/kota-brown-flooring",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/products/kota-brown-flooring",
    siteName: "Kamal Industries & Enterprises",
    title: "Kota Brown Stone Flooring — Warm Limestone | Kamal Industries",
    description:
      "Buy Kota Brown Stone flooring direct from the manufacturer — Kamal Industries, Ramganjmandi. Rich warm-brown limestone for residential flooring, villa exteriors, courtyards, and garden paving.",
    images: [
      {
        url: "/kota-stone-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Kota Brown Stone flooring slabs ready at factory yard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kota Brown Stone Flooring — Warm Limestone | Kamal Industries",
    description:
      "Buy Kota Brown Stone flooring direct from the manufacturer — Kamal Industries, Ramganjmandi. Rich warm-brown limestone.",
    images: ["/kota-stone-1.jpeg"],
  },
};

const data: ProductDetailData = {
  badge: "Warm Limestone Flooring · Factory Direct",
  title: "Kota Brown Stone",
  titleAccent: "Flooring Tiles",
  subtitle:
    "Rich warm-brown Kota limestone tiles — the preferred choice for residential villas, farmhouses, courtyard paving, and rustic interior designs. Timeless, durable, and low-maintenance.",
  heroImage: "/kota-stone-1.jpeg",
  breadcrumb: "Kota Brown Stone Flooring",
  whatsappText:
    "Hello, I am interested in Kota Brown Stone Flooring tiles. Please share your price list and available sizes.",
  contactParam: "Kota+Brown+Stone+Flooring",

  gallery: [
    { src: "/kota-stone-1.jpeg",  alt: "Kota Stone flooring tiles — overhead view at factory" },
    { src: "/kota-stone-2.jpeg",  alt: "Large Kota Stone slabs in factory yard" },
    { src: "/kota-stone-3.jpeg",  alt: "Kota Stone production at Kamal Industries" },
    { src: "/stock-yard-2.jpeg",  alt: "Kota Stone stock yard inventory" },
    { src: "/55.jpeg",            alt: "Top-down view of Kota Stone flooring tiles" },
    { src: "/cutting-machine-2.jpeg", alt: "Stone cutting machine at factory" },
    { src: "/factory-yard-2.jpeg",alt: "Factory yard overview at Kamal Industries" },
    { src: "/workers-loading-1.jpeg", alt: "Workers handling stone at factory" },
  ],

  description:
    "Kota Brown Stone carries all the structural and performance attributes of Kota Blue Stone while offering a distinctly warmer, earthy colour palette — ranging from warm beige to soft chocolate brown. It is a premium choice for architects who want the durability of Kota Stone with a softer, more organic interior aesthetic. Naturally slip-resistant and virtually maintenance-free, Kota Brown Stone excels in both traditional Rajasthani-style residences and contemporary villa projects.",

  sizes: [
    "12×12 inches", "12×18 inches", "18×18 inches",
    "18×24 inches", "24×24 inches", "Custom cut to size",
  ],
  thickness: ["18mm", "20mm", "25mm", "30mm"],
  finishes: ["Natural Split", "Honed", "Polished", "Sandblasted", "Flamed"],

  features: [
    "Warm earthy tones — suits rustic and contemporary heritage aesthetics",
    "Naturally slip-resistant — safe for outdoor and wet areas",
    "Dense and durable — extremely low maintenance requirements",
    "Excellent thermal insulation — stays cool in Indian summer",
    "Weather-proof — performs in all climates without degradation",
    "Consistent colour in bulk batches for large project continuity",
    "Custom sizes available directly from the factory cutting unit",
    "50+ year service life with minimal upkeep",
  ],

  specs: [
    { label: "Stone Type",           value: "Fine-grained Limestone" },
    { label: "Colour",               value: "Brown, Earthy-tan, Warm Ochre" },
    { label: "Standard Sizes",       value: "12×12, 12×18, 18×18, 18×24, 24×24 inches" },
    { label: "Standard Thickness",   value: "18mm, 20mm, 25mm, 30mm" },
    { label: "Custom Thickness",     value: "Up to 60mm on request" },
    { label: "Density",              value: "2.60 – 2.68 g/cm³" },
    { label: "Water Absorption",     value: "< 0.6%" },
    { label: "Compressive Strength", value: "120 – 160 MPa" },
    { label: "Slip Resistance",      value: "High (natural finish)" },
    { label: "Frost Resistance",     value: "Very Good" },
    { label: "Mohs Hardness",        value: "3 – 4" },
    { label: "Service Life",         value: "50+ years" },
  ],

  applications: [
    "Residential Villa Flooring", "Farmhouse & Courtyard Paving", "Heritage Restoration",
    "Hotel Garden Areas", "Outdoor Terrace Paving", "Driveway & Parking",
    "Garden Pathways", "Rustic Interior Flooring", "Stair Treads",
    "Wall Cladding — Rustic Look", "Swimming Pool Surrounds", "Commercial Corridors",
  ],

  related: [
    {
      name: "Kota Blue Stone Flooring",
      tagline: "Classic blue-grey — the benchmark Indian flooring stone",
      href: "/products/kota-blue-flooring",
      image: "/kota-blue-1.jpeg",
    },
    {
      name: "Mandana Red Stone",
      tagline: "The royal red stone of Rajasthan",
      href: "/products/mandana-stone",
      image: "/stock-yard-1.jpeg",
    },
    {
      name: "Kota Stone Steps & Stair Treads",
      tagline: "Calibrated step stone with natural slip resistance",
      href: "/products/stone-steps",
      image: "/steps-1.jpeg",
    },
  ],
};

export default function KotaBrownFlooringPage() {
  return <ProductDetailPage data={data} />;
}
