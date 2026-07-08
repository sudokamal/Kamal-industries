import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Ruler, ShieldCheck, Ship, Factory, Package,
  Truck, Phone, Mail, MapPin, ArrowRight,
  Award, Users, Clock, CheckCircle2, MessageCircle,
  Download, Coins,
} from "lucide-react";
import HeroSlider from "@/components/home/HeroSlider";
import CompanyProfile from "@/components/home/CompanyProfile";
import FactoryOverview from "@/components/home/FactoryOverview";
import StatsCounter from "@/components/home/StatsCounter";
import TechSpecsTable from "@/components/home/TechSpecsTable";
import ApplicationCards from "@/components/home/ApplicationCards";
import TrustSection from "@/components/home/TrustSection";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import FAQAccordion from "@/components/home/FAQAccordion";

import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Premium Kota Stone Manufacturer & Exporter | Kamal Industries",
  description:
    "Direct manufacturer & supplier of Kota Blue Stone, Kota Brown Stone, Mandana Stone, floor tiles, slabs, wall cladding, and custom cut stone. Amarpura, Ramganjmandi, Kota, Rajasthan since 1985. Direct factory rates.",
  alternates: {
    canonical: "https://kamalindustries.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in",
    siteName: "Kamal Industries & Enterprises",
    title: "Premium Kota Stone Manufacturer & Exporter | Kamal Industries",
    description:
      "Direct manufacturer & supplier of Kota Blue Stone, Kota Brown Stone, Mandana Stone, floor tiles, slabs, wall cladding, and custom cut stone. Amarpura, Ramganjmandi, Kota, Rajasthan since 1985. Direct factory rates.",
    images: [
      {
        url: "/hero-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Kamal Industries Kota Stone processing facility and inventory yard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Kota Stone Manufacturer & Exporter | Kamal Industries",
    description:
      "Direct manufacturer & supplier of Kota Blue Stone, Kota Brown Stone, Mandana Stone, floor tiles, slabs, and wall cladding from Ramganjmandi, Kota, Rajasthan.",
    images: ["/hero-1.jpeg"],
  },
};

// ─── PRODUCTS DATA ─────────────────────────────────────────────────────────────
const products = [
  {
    id: "kota-blue",
    name: "Kota Blue Stone",
    tagline: "Premium blue-grey limestone",
    image: "/kota-blue-1.jpeg",
    alt: "Kota Blue Stone slabs stacked at Kamal Industries factory yard",
    desc: "Dense, naturally slip-resistant limestone in signature blue-grey tones. The benchmark stone for Indian commercial and residential flooring.",
    thickness: "18mm – 50mm",
    sizes: "12×12 to 4×4 ft",
    finishes: ["Natural", "Honed", "Polished", "Leather", "Sandblasted"],
    applications: ["Flooring", "Paving", "Exterior"],
    features: ["Non-porous", "Slip-resistant", "Durable"],
    tags: ["Flooring", "Paving", "Exterior"],
  },
  {
    id: "kota-brown",
    name: "Kota Brown Stone",
    tagline: "Warm earthy-tone limestone",
    image: "/kota-stone-1.jpeg",
    alt: "Kota Stone flooring slabs overhead view",
    desc: "Rich warm-brown Kota limestone — the preferred choice for villa exteriors, courtyard paving, farmhouse flooring, and rustic interior designs.",
    thickness: "18mm – 40mm",
    sizes: "12×12 to 4×4 ft",
    finishes: ["Natural", "Honed", "Leather"],
    applications: ["Residential", "Farmhouse", "Outdoor"],
    features: ["Weather resistant", "Low maintenance", "Natural beauty"],
    tags: ["Residential", "Farmhouse", "Outdoor"],
  },
  {
    id: "mandana",
    name: "Mandana Red Stone",
    tagline: "Heritage Rajasthani quartzite",
    image: "/stock-yard-1.jpeg",
    alt: "Stone stock yard at Kamal Industries",
    desc: "Acid-resistant red quartzite from Rajasthan's geological heritage. Non-slip, weather-proof, and ideal for temple flooring, garden paths, and heritage restoration.",
    thickness: "20mm – 35mm",
    sizes: "Custom & Standard",
    finishes: ["Natural Split", "Sandblasted"],
    applications: ["Heritage", "Temple", "Garden"],
    features: ["Acid resistant", "Non-slip", "Heritage aesthetic"],
    tags: ["Heritage", "Temple", "Garden"],
  },
  {
    id: "slabs",
    name: "Large Format Slabs",
    tagline: "Zero lamination premium slabs",
    image: "/kota-slab-2.jpeg",
    alt: "Large-format Kota Stone slabs at factory",
    desc: "Large-format Kota Stone slabs with uniform colour and zero laminations — ideal for hotel lobbies, airport terminals, and premium landscape paving.",
    thickness: "20mm – 50mm",
    sizes: "2×2 ft to 4×4 ft",
    finishes: ["Honed", "Polished", "Natural"],
    applications: ["Lobbies", "Hotels", "Airports"],
    features: ["Zero lamination", "Uniform colour", "Large format"],
    tags: ["Lobbies", "Hotels", "Airports"],
  },
  {
    id: "steps",
    name: "Steps & Stair Treads",
    tagline: "Naturally slip-resistant",
    image: "/steps-1.jpeg",
    alt: "Kota Stone step treads stacked in factory yard",
    desc: "Calibrated stair treads and risers — naturally slip-resistant, load-bearing, and available in all standard and custom dimensions for residential and commercial staircases.",
    thickness: "30mm – 60mm",
    sizes: "Custom per drawing",
    finishes: ["Natural", "Honed", "Sandblasted"],
    applications: ["Staircases", "Steps", "Outdoor"],
    features: ["Load bearing", "Anti-slip", "Custom cut"],
    tags: ["Staircases", "Steps", "Outdoor"],
  },
  {
    id: "cladding",
    name: "Wall Cladding",
    tagline: "Split-face & sawn facade panels",
    image: "/kota-slab-1.jpeg",
    alt: "Kota Stone wall cladding panels",
    desc: "Split-face and sawn wall cladding panels for building facades, feature walls, and interior accent surfaces. Adds raw industrial character to any architectural design.",
    thickness: "15mm – 30mm",
    sizes: "Custom panels",
    finishes: ["Split Face", "Sawn", "Natural"],
    applications: ["Facades", "Feature Walls", "Interiors"],
    features: ["Lightweight", "Easy to install", "Weather proof"],
    tags: ["Facades", "Feature Walls", "Interiors"],
  },
  {
    id: "garden",
    name: "Garden & Outdoor Stone",
    tagline: "Landscaping & paving",
    image: "/kota-stone-2.jpeg",
    alt: "Large Kota Stone slabs for outdoor paving",
    desc: "Robust Kota Stone cut for outdoor landscaping, garden pathways, pool surrounds, driveways, and farm terrace paving. Weather-resistant for all Indian climates.",
    thickness: "25mm – 50mm",
    sizes: "Standard & Custom",
    finishes: ["Natural", "Sandblasted", "Flamed"],
    applications: ["Gardens", "Driveways", "Pools"],
    features: ["All-weather", "Non-slip", "Low maintenance"],
    tags: ["Gardens", "Driveways", "Pools"],
  },
  {
    id: "custom",
    name: "Custom Cut Stone",
    tagline: "Any size, any specification",
    image: "/cutting-machine-3.jpeg",
    alt: "Worker operating stone cutting machine at Kamal Industries",
    desc: "CNC precision cutting to any custom dimension from your architectural drawings. Send your specifications — we manufacture and deliver within the agreed lead time.",
    thickness: "Custom",
    sizes: "Any dimension",
    finishes: ["All available"],
    applications: ["Bespoke", "Architects", "Projects"],
    features: ["CNC precision", "Any dimension", "Architect drawings"],
    tags: ["Bespoke", "Architects", "Projects"],
  },
];

const whyCards = [
  { icon: <Factory size={22} className="text-stone-gold" />, title: "Direct Manufacturer", desc: "Buy directly from our Ramganjmandi factory. No middlemen, no commissions, just pure wholesale pricing." },
  { icon: <Award size={22} className="text-stone-gold" />, title: "Premium Kota Stone", desc: "Sourced from choice quarry layers. Hand-selected for exceptional density, color consistency, and long-term durability." },
  { icon: <Ruler size={22} className="text-stone-gold" />, title: "Custom Sizes Available", desc: "CNC-precision cutting to fit your architectural specifications. ±1mm tolerance on calibrated items." },
  { icon: <Truck size={22} className="text-stone-gold" />, title: "Pan India Delivery", desc: "Coordinated road transport shipping directly to your site across all Indian states and Union Territories." },
  { icon: <Coins size={22} className="text-stone-gold" />, title: "Competitive Pricing", desc: "Honest, transparent factory-direct pricing that fits commercial and residential development budgets perfectly." },
  { icon: <ShieldCheck size={22} className="text-stone-gold" />, title: "Strict Quality Inspection", desc: "Every batch undergoes multi-stage inspection checks. If it doesn't meet the grading benchmark, it doesn't ship." },
  { icon: <Package size={22} className="text-stone-gold" />, title: "Safe Packaging", desc: "Slabs packed securely in strong wooden pallets wrapped in plastic with export-quality straps to prevent damage." },
  { icon: <Users size={22} className="text-stone-gold" />, title: "Experienced Team", desc: "Supported by quarrying, processing, loading, and logistics professionals serving clients since 1985." },
];

// ─── PROCESS STEPS ────────────────────────────────────────────────────────────
const processSteps = [
  {
    n: "01", title: "Raw Stone",
    desc: "Dense limestone blocks are extracted from the Ramganjmandi geological belt — the world's primary Kota Stone deposit.",
    image: "/step-1-quarry.png",
    alt: "Kamal Industries stone yard with raw block inventory",
  },
  {
    n: "02", title: "Precision Cutting",
    desc: "Diamond-blade gang saws and CNC equipment slice raw blocks to exact calibrated dimensions with ±1mm thickness tolerance.",
    image: "/cutting-machine-1.jpeg",
    alt: "Diamond saw cutting Kota Stone at Kamal Industries",
  },
  {
    n: "03", title: "Machine Finishing",
    desc: "Each slab is surface-treated to the required finish — natural, honed, polished, leather, sandblasted, or flamed.",
    image: "/cutting-machine-2.jpeg",
    alt: "Stone finishing machinery at Kamal Industries factory",
  },
  {
    n: "04", title: "Quality Inspection",
    desc: "Every piece is hand-inspected for colour consistency, structural integrity, and dimensional accuracy before approval.",
    image: "/Quality.jpeg",
    alt: "Kota Blue Stone quality inspection at factory",
  },
  {
    n: "05", title: "Packing",
    desc: "Approved stone is sorted by grade and packed in wooden pallets for domestic delivery or seaworthy crates for export.",
    image: "/Packing.jpeg",
    alt: "Stone inventory ready for packing at Kamal Industries",
  },
  {
    n: "06", title: "Loading",
    desc: "Our experienced team loads stone with care — zero breakage policy enforced on every dispatch from the factory yard.",
    image: "/workers-loading-1.jpeg",
    alt: "Workers loading Kota Stone onto transport vehicle",
  },
  {
    n: "07", title: "Delivery",
    desc: "Pan-India delivery by transport vehicle, or international export via Mundra and Kandla ports — coordinated end-to-end.",
    image: "/Delivery.jpeg",
    alt: "Stone stock yard with dispatch-ready inventory at Kamal Industries",
  },
];

// ─── INTERNATIONAL BUYERS ─────────────────────────────────────────────────────
const buyerTypes = [
  {
    type: "Architects & Designers",
    icon: "🏛️",
    desc: "Custom cuts, technical specifications, and sample provision for architectural projects. We work to your exact drawings.",
    image: "/cutting-machine-3.jpeg",
    alt: "CNC custom cut stone for architects at Kamal Industries",
  },
  {
    type: "Builders & Contractors",
    icon: "🏗️",
    desc: "Bulk supply with factory-direct pricing. Large project volumes fulfilled reliably with consistent quality batches.",
    image: "/factory-yard-1.jpeg",
    alt: "Kamal Industries factory for builders and contractors",
  },
  {
    type: "Wholesalers & Dealers",
    icon: "📦",
    desc: "Wholesale pricing for stone dealers. Regular supply agreements available with priority dispatch and competitive rates.",
    image: "/stock-yard-1.jpeg",
    alt: "Stone inventory for wholesalers at Kamal Industries",
  },
  {
    type: "Export & Import",
    icon: "🌍",
    desc: "Seaworthy wooden crate packing, fumigation, full shipping documentation, and Mundra/Kandla port coordination.",
    image: "/workers-loading-1.jpeg",
    alt: "Export ready stone dispatch at Kamal Industries",
  },
];

// ─── FAQ DATA ──────────────────────────────────────────────────────────────────
const qualityPoints = [
  "Premium raw material from source quarry",
  "Machine precision cutting — ±1mm tolerance",
  "Experienced workers with 35+ years expertise",
  "Extremely durable — outlasts concrete floors",
  "Weather & frost resistant for all climates",
  "Long service life — 50+ years with basic care",
  "Easy to clean and maintain",
  "Natural finish — no chemical treatment",
];

// ─── PAGE ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ════════════════════════════════════════════
          HERO — Full-screen cinematic slider
          ════════════════════════════════════════════ */}
      <HeroSlider />


      {/* ════════════════════════════════════════════
          COMPANY PROFILE — About, Mission, Vision, Journey, Core Values
          ════════════════════════════════════════════ */}
      <CompanyProfile />


      {/* ════════════════════════════════════════════
          FACTORY OVERVIEW — 8 real photo cards
          ════════════════════════════════════════════ */}
      <FactoryOverview />


      {/* ════════════════════════════════════════════
          MANUFACTURING CAPACITY — 6 animated counters
          ════════════════════════════════════════════ */}
      <section className="bg-charcoal border-y border-white/5">
        <StatsCounter />
      </section>


      {/* ════════════════════════════════════════════
          PRODUCT CATALOGUE — 8 products with full details
          ════════════════════════════════════════════ */}
      <section id="products" className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
              Our Products
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-dark">
              Kota Stone Product Catalogue
            </h2>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-6" />
            <p className="text-gray-500 text-sm font-light max-w-lg mx-auto mt-5 leading-relaxed">
              All products manufactured at our factory in Amarpura, Ramganjmandi.
              All images are from our actual facility — no stock photos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 80} className="flex flex-col">
                <div
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-stone-gold/30 hover:shadow-2xl transition-all duration-400 flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 img-zoom-container">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3">
                      <div className="flex flex-wrap gap-1">
                        {product.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-[8px] font-bold uppercase tracking-wider bg-white/90 text-primary px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-serif text-lg font-medium text-neutral-dark mb-0.5">{product.name}</h3>
                    <p className="text-gray-400 text-[10px] font-light italic mb-3">{product.tagline}</p>
                    <p className="text-gray-500 text-xs font-light leading-relaxed line-clamp-2 mb-4">{product.desc}</p>

                    {/* Quick specs */}
                    <div className="grid grid-cols-2 gap-2 mb-4 text-[9px] text-gray-400 font-sans border-t border-gray-50 pt-3">
                      <div>
                        <span className="font-bold text-neutral-dark block">Sizes</span>
                        {product.sizes}
                      </div>
                      <div>
                        <span className="font-bold text-neutral-dark block">Thickness</span>
                        {product.thickness}
                      </div>
                    </div>

                    {/* Finishes */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.finishes.slice(0, 3).map((f) => (
                        <span key={f} className="text-[8px] font-bold uppercase tracking-wider bg-surface text-gray-500 px-2 py-0.5 rounded-full">
                          {f}
                        </span>
                      ))}
                      {product.finishes.length > 3 && (
                        <span className="text-[8px] font-bold uppercase tracking-wider bg-surface text-stone-gold px-2 py-0.5 rounded-full">
                          +{product.finishes.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      <a
                        href={`https://wa.me/919214830464?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.%20Please%20share%20pricing%20and%20availability.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2.5 rounded-xl hover:bg-primary-dark transition-colors font-sans"
                      >
                        Request Quote <ArrowRight size={11} />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary text-white text-[11px] font-bold tracking-widest uppercase px-8 py-4 rounded-xl hover:bg-primary-dark transition-all duration-200 font-sans shadow-lg shadow-primary/20"
            >
              View Full Product Range <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          TECHNICAL SPECIFICATIONS — Professional table
          ════════════════════════════════════════════ */}
      <TechSpecsTable />


      {/* ════════════════════════════════════════════
          APPLICATIONS — 12 image cards
          ════════════════════════════════════════════ */}
      <ApplicationCards />


      {/* ════════════════════════════════════════════
          TRUST SECTION — 6 premium trust pillars
          ════════════════════════════════════════════ */}
      <TrustSection />


      {/* ════════════════════════════════════════════
          WHY CHOOSE US — 11 icon cards
          ════════════════════════════════════════════ */}
      <section id="why-us" className="py-24 md:py-36 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
              Why Builders & Architects Choose Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-dark">
              Why Choose Kamal Industries
            </h2>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-6" />
            <p className="text-gray-500 text-sm font-light max-w-xl mx-auto mt-5 leading-relaxed">
              When you order from Kamal Industries, you buy directly from the manufacturer —
              no middlemen, no commissions, pure factory pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-stone-gold/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-stone-gold/10 transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-serif text-lg font-medium text-neutral-dark mb-2">{card.title}</h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          MANUFACTURING PROCESS — 7-step timeline
          ════════════════════════════════════════════ */}
      <section id="process" className="py-24 md:py-36 bg-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
              From Quarry to Your Site
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
              Manufacturing Process
            </h2>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-6" />
          </div>

          {/* Desktop: alternating rows */}
          <div className="hidden md:block">
            {processSteps.map((step, i) => (
              <div
                key={step.n}
                className={`grid grid-cols-2 gap-0 border-b border-white/5 last:border-0 ${
                  i % 2 !== 0 ? "direction-rtl" : ""
                }`}
              >
                <div className={`relative aspect-[16/9] ${i % 2 !== 0 ? "order-2" : ""}`}>
                  <Image src={step.image} alt={step.alt} fill className="object-cover" sizes="50vw" />
                  <div className="absolute inset-0 bg-charcoal/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-[120px] font-extralight text-white/5 select-none leading-none">
                      {step.n}
                    </span>
                  </div>
                </div>
                <div className={`flex items-center px-12 py-14 bg-dark/80 ${i % 2 !== 0 ? "order-1" : ""}`}>
                  <div>
                    <span className="font-serif text-7xl font-extralight text-stone-gold/20 leading-none block mb-3">{step.n}</span>
                    <h3 className="font-serif text-3xl font-light text-white mb-4">{step.title}</h3>
                    <div className="w-10 h-[1.5px] bg-stone-gold mb-5" />
                    <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: vertical scroll */}
          <div className="md:hidden space-y-6">
            {processSteps.map((step) => (
              <div key={step.n} className="rounded-2xl overflow-hidden border border-white/5">
                <div className="relative aspect-[16/9]">
                  <Image src={step.image} alt={step.alt} fill className="object-cover" sizes="100vw" />
                  <div className="absolute inset-0 bg-black/40" />
                  <span className="absolute top-4 left-4 font-serif text-5xl font-extralight text-white/20 leading-none">{step.n}</span>
                </div>
                <div className="bg-dark p-6">
                  <h3 className="font-serif text-2xl font-light text-white mb-3">{step.title}</h3>
                  <div className="w-8 h-[1.5px] bg-stone-gold mb-4" />
                  <p className="text-white/60 text-sm font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          QUALITY COMMITMENT
          ════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-7">
              <div>
                <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
                  Our Quality Commitment
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-[1.15]">
                  Why Our Stone Lasts a<br />
                  <span className="italic text-stone-gold">Lifetime</span>
                </h2>
                <div className="w-14 h-[2px] bg-stone-gold mt-6" />
              </div>
              <p className="text-white/70 text-sm font-light leading-relaxed max-w-md">
                Every stone that leaves our factory in Amarpura passes through a strict multi-stage
                quality process. Our commitment is simple: if it doesn&apos;t pass inspection, it doesn&apos;t ship.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualityPoints.map((q) => (
                  <div key={q} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-stone-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80 font-light">{q}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-stone-gold text-neutral-dark text-[11px] font-bold tracking-widest uppercase px-7 py-4 rounded-xl hover:bg-stone-gold/90 transition-colors font-sans"
              >
                Request Quality Samples <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/kota-blue-1.jpeg", alt: "Kota Blue Stone quality batch" },
                { src: "/cutting-machine-1.jpeg", alt: "Precision cutting machine" },
                { src: "/kota-stone-3.jpeg", alt: "Calibrated stone production" },
                { src: "/workers-loading-2.jpeg", alt: "Stone handling quality" },
              ].map((img) => (
                <div key={img.src} className="relative aspect-square rounded-2xl overflow-hidden img-zoom-container">
                  <Image src={img.src} alt={img.alt} fill className="object-cover opacity-70 hover:opacity-90 transition-opacity" sizes="25vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          INTERNATIONAL BUYERS — Premium cards
          ════════════════════════════════════════════ */}
      <section id="international" className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
              For Builders · Architects · Exporters · Dealers
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-dark">
              Supplying India &amp; International Markets
            </h2>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-6" />
            <p className="text-gray-500 text-sm font-light max-w-lg mx-auto mt-5 leading-relaxed">
              Kamal Industries & Kamal Enterprises supply Kota Stone to builders, architects,
              wholesalers, dealers, and contractors across India and internationally via
              Mundra and Kandla ports.
            </p>
          </div>

          {/* Buyer type cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {buyerTypes.map((buyer) => (
              <div key={buyer.type} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400">
                <div className="absolute inset-0 img-zoom-container">
                  <Image
                    src={buyer.image}
                    alt={buyer.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-charcoal/20" />
                </div>
                <div className="relative p-6 pt-16">
                  <div className="text-3xl mb-3">{buyer.icon}</div>
                  <h3 className="font-serif text-lg font-light text-white mb-2">{buyer.type}</h3>
                  <p className="text-white/60 text-xs font-light leading-relaxed">{buyer.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Capability highlights */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Factory Direct Pricing", desc: "No middlemen" },
              { title: "Bulk Orders", desc: "10,000+ tons/year" },
              { title: "Custom Sizes", desc: "CNC precision" },
              { title: "Reliable Logistics", desc: "Pan-India & export" },
              { title: "High Production", desc: "300+ tons/day" },
              { title: "Export Ready", desc: "18+ countries" },
            ].map((item) => (
              <div key={item.title} className="bg-surface border border-gray-100 rounded-xl p-4 hover:border-stone-gold/20 hover:shadow-md transition-all text-center">
                <h3 className="font-sans text-xs font-bold text-neutral-dark mb-1">{item.title}</h3>
                <p className="text-gray-400 text-[10px] font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white text-[11px] font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl hover:bg-primary-dark transition-colors font-sans">
              Send Project Enquiry <ArrowRight size={14} />
            </Link>
            <Link href="/downloads" className="inline-flex items-center gap-2 border border-primary/30 text-primary text-[11px] font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl hover:bg-primary/5 transition-colors font-sans">
              <Download size={13} /> Download Catalogue
            </Link>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          GALLERY PREVIEW — Bento grid
          ════════════════════════════════════════════ */}
      <section id="gallery" className="py-24 md:py-36 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
              Our Factory in Ramganjmandi
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
              Factory Gallery
            </h2>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-6" />
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer img-zoom-container">
              <Image src="/hero-1.jpeg" alt="Kamal Industries stone yard — massive Kota Stone slab stock" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-5 left-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[9px] font-bold uppercase tracking-widest text-stone-gold font-sans block">Factory</span>
                <span className="font-serif text-lg text-white font-light">Stone Processing Yard</span>
              </div>
            </div>

            {[
              { src: "/cutting-machine-2.jpeg", label: "Cutting Machine", cat: "Machinery" },
              { src: "/kota-blue-1.jpeg", label: "Kota Blue Stone", cat: "Products" },
              { src: "/workers-loading-1.jpeg", label: "Loading & Dispatch", cat: "Workers" },
              { src: "/steps-2.jpeg", label: "Step Stone Stock", cat: "Products" },
            ].map((img) => (
              <div key={img.src} className="relative rounded-2xl overflow-hidden group cursor-pointer img-zoom-container">
                <Image src={img.src} alt={img.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-stone-gold font-sans block">{img.cat}</span>
                  <span className="font-serif text-sm text-white font-light">{img.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border border-white/20 text-white text-[11px] font-bold tracking-widest uppercase px-8 py-4 rounded-xl hover:border-stone-gold hover:text-stone-gold transition-all duration-200 font-sans"
            >
              View Full Gallery — 60+ Photos <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          TESTIMONIALS — 8 star-rating cards
          ════════════════════════════════════════════ */}
      <section id="testimonials" className="py-24 md:py-36 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
              Trusted by Customers Across India
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-dark">
              Client Testimonials
            </h2>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-6" />
          </div>
          <TestimonialSlider />
        </div>
      </section>


      {/* ════════════════════════════════════════════
          FAQ
          ════════════════════════════════════════════ */}
      <section id="faq" className="py-24 md:py-36 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
              Common Questions
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
              Frequently Asked Questions
            </h2>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-6" />
          </div>
          <FAQAccordion />
        </div>
      </section>


      {/* ════════════════════════════════════════════
          CONTACT / CTA — Split panel
          ════════════════════════════════════════════ */}
      <section id="contact" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">

          {/* Left: factory photo */}
          <div className="relative min-h-[320px] lg:min-h-auto">
            <Image
              src="/02.jpeg"
              alt="Kamal Industries office — Amarpura, Ramganjmandi, Kota, Rajasthan"
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-primary/70" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14">
              <div className="space-y-4">
                <h3 className="font-serif text-3xl font-light text-white">
                  Kamal Industries<br />
                  <span className="italic text-stone-gold">& Enterprises</span>
                </h3>
                <div className="space-y-3 pt-2">
                  {[
                    { icon: <MapPin size={15} />, text: "Amarpura, Ramganjmandi, Dist. Kota, Rajasthan – 326519, India" },
                    { icon: <Phone size={15} />, text: "+91 92148 30464 / +91 9414226966" },
                    { icon: <MessageCircle size={15} />, text: "WhatsApp: +91 92148 30464" },
                    { icon: <Mail size={15} />, text: "kamalindustriesfactory@gmail.com" },
                    { icon: <Clock size={15} />, text: "Mon – Sat: 9 AM – 7 PM IST" },
                  ].map((c) => (
                    <div key={c.text} className="flex items-start gap-3 text-white/80 text-sm font-light">
                      <span className="text-stone-gold shrink-0 mt-0.5">{c.icon}</span>
                      {c.text}
                    </div>
                  ))}
                  {/* Delivery text */}
                  <div className="pt-3 space-y-2">
                    <div className="flex items-start gap-3 text-white/70 text-xs font-light leading-relaxed">
                      <Truck size={14} className="text-stone-gold shrink-0 mt-0.5" />
                      We provide safe and timely delivery across all states of India. Bulk orders, dealer supplies, and project deliveries are available nationwide.
                    </div>
                    <div className="inline-flex items-center gap-2 bg-stone-gold/10 border border-stone-gold/20 rounded-lg px-3 py-1.5">
                      <span className="text-base">🚚</span>
                      <span className="text-stone-gold text-[9px] font-bold uppercase tracking-widest font-sans">Delivery Available Across India</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col justify-center p-8 md:p-14 bg-charcoal text-white">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-5 block font-sans">
              Get Factory-Direct Pricing
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-5 leading-tight">
              Request a Quote<br />
              <span className="italic text-stone-gold font-normal">Within 24 Hours</span>
            </h2>
            <div className="w-12 h-[2px] bg-stone-gold mb-8" />
            <p className="text-white/60 text-sm font-light leading-relaxed mb-10 max-w-sm">
              Tell us your product, size, finish, and quantity. We respond with
              manufacturer-direct pricing within 24 hours.
            </p>

            <div className="space-y-3">
              <a
                href="https://wa.me/919214830464?text=Hello%2C%20I%20am%20interested%20in%20Kota%20Stone.%20Please%20share%20your%20price%20list."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white text-[11px] font-bold tracking-widest uppercase px-6 py-4 rounded-xl hover:bg-[#1ebe57] transition-colors font-sans shadow-lg shadow-green-900/20"
              >
                <MessageCircle size={16} /> WhatsApp Chat — Quick Response
              </a>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-3 bg-stone-gold text-neutral-dark text-[11px] font-bold tracking-widest uppercase px-6 py-4 rounded-xl hover:bg-stone-gold/90 transition-colors font-sans"
              >
                <Mail size={15} /> Send Formal Enquiry
              </Link>
              <a
                href="tel:+919214830464"
                className="w-full flex items-center justify-center gap-3 border border-white/15 text-white text-[11px] font-bold tracking-widest uppercase px-6 py-4 rounded-xl hover:border-white/40 transition-colors font-sans"
              >
                <Phone size={15} /> Call: +91 92148 30464
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-white/8 grid grid-cols-2 gap-6">
              {[
                { icon: <Truck size={16} />, t: "Pan-India Delivery", s: "All states covered" },
                { icon: <Ship size={16} />, t: "International Export", s: "Mundra & Kandla ports" },
              ].map((d) => (
                <div key={d.t} className="flex items-start gap-3">
                  <span className="text-stone-gold mt-0.5 shrink-0">{d.icon}</span>
                  <div>
                    <span className="text-white text-xs font-semibold block font-sans">{d.t}</span>
                    <span className="text-white/40 text-[10px] font-sans">{d.s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          DOWNLOAD CENTER CTA
          ════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-charcoal border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
              Download Center
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
              Download Our Resources
            </h2>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { title: "Company Profile", desc: "Our story, factory capabilities, and product range.", href: "/downloads", badge: "PDF" },
              { title: "Product Catalogue", desc: "Full product range with specifications and finishes.", href: "/downloads", badge: "PDF", featured: true },
              { title: "Technical Brochure", desc: "Engineering data for architects and project managers.", href: "/specifications", badge: "PDF" },
              { title: "Price List", desc: "Factory-direct pricing — request via WhatsApp.", href: "/contact", badge: "On Request" },
            ].map((doc) => (
              <Link
                key={doc.title}
                href={doc.href}
                className={`flex items-center justify-between p-6 rounded-2xl border transition-all duration-200 group ${
                  doc.featured
                    ? "border-stone-gold/40 hover:border-stone-gold bg-stone-gold/5"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div>
                  <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block font-sans ${
                    doc.featured ? "bg-stone-gold text-neutral-dark" : "bg-white/10 text-white/50"
                  }`}>{doc.badge}</span>
                  <h3 className="font-serif text-lg font-light text-white mb-1">{doc.title}</h3>
                  <p className="text-white/40 text-xs font-light">{doc.desc}</p>
                </div>
                <Download size={18} className="text-stone-gold shrink-0 ml-3 group-hover:translate-y-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
