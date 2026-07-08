import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, ArrowRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Specifications — Kota Blue, Brown & Mandana Stone | Kamal Industries",
  description:
    "Complete technical specifications for Kota Blue Stone, Kota Brown Stone, and Mandana Stone — sizes, thickness, density, water absorption, slip resistance, and surface finishes from Kamal Industries, Ramganjmandi.",
  alternates: {
    canonical: "https://kamalindustries.in/specifications",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/specifications",
    siteName: "Kamal Industries & Enterprises",
    title: "Technical Specifications — Kota Blue, Brown & Mandana Stone | Kamal Industries",
    description:
      "Complete technical specifications for Kota Blue Stone, Kota Brown Stone, and Mandana Stone — sizes, thickness, density, water absorption, slip resistance, and surface finishes from Kamal Industries, Ramganjmandi.",
    images: [
      {
        url: "/kota-blue-2.jpeg",
        width: 1200,
        height: 630,
        alt: "Kota Blue Stone quality control batch at Kamal Industries factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Specifications — Kota Blue, Brown & Mandana Stone | Kamal Industries",
    description:
      "Complete technical specifications for Kota Blue Stone, Kota Brown Stone, and Mandana Stone from Kamal Industries, Ramganjmandi.",
    images: ["/kota-blue-2.jpeg"],
  },
};

// ─── SPEC DATA ─────────────────────────────────────────────────────────────

const techSpecs = [
  { property: "Stone Type", kota_blue: "Fine-grained Limestone", kota_brown: "Fine-grained Limestone", mandana: "Quartzite" },
  { property: "Colour", kota_blue: "Blue-grey, Greenish-grey", kota_brown: "Brown, Earthy-tan", mandana: "Red, Rustic Red" },
  { property: "Standard Sizes", kota_blue: "12×12, 18×18, 24×24, 24×36, 24×48 inches", kota_brown: "12×12, 18×18, 24×24, 24×36, 24×48 inches", mandana: "Custom & Standard" },
  { property: "Custom Size", kota_blue: "Any (per drawing)", kota_brown: "Any (per drawing)", mandana: "Any (per drawing)" },
  { property: "Standard Thickness", kota_blue: "18mm, 20mm, 25mm, 30mm", kota_brown: "18mm, 20mm, 25mm, 30mm", mandana: "20mm, 25mm, 30mm" },
  { property: "Step Thickness", kota_blue: "30mm – 60mm", kota_brown: "30mm – 60mm", mandana: "30mm – 50mm" },
  { property: "Density", kota_blue: "2.65 – 2.72 g/cm³", kota_brown: "2.60 – 2.68 g/cm³", mandana: "2.60 – 2.65 g/cm³" },
  { property: "Water Absorption", kota_blue: "< 0.5%", kota_brown: "< 0.6%", mandana: "< 0.4%" },
  { property: "Compressive Strength", kota_blue: "130 – 180 MPa", kota_brown: "120 – 160 MPa", mandana: "150 – 200 MPa" },
  { property: "Flexural Strength", kota_blue: "18 – 25 MPa", kota_brown: "16 – 22 MPa", mandana: "20 – 28 MPa" },
  { property: "Slip Resistance", kota_blue: "High (natural finish)", kota_brown: "High (natural finish)", mandana: "Very High" },
  { property: "Frost Resistance", kota_blue: "Excellent", kota_brown: "Very Good", mandana: "Excellent" },
  { property: "Acid Resistance", kota_blue: "Good", kota_brown: "Good", mandana: "Very Good" },
  { property: "Mohs Hardness", kota_blue: "3 – 4", kota_brown: "3 – 4", mandana: "6 – 7" },
  { property: "Service Life", kota_blue: "50+ years", kota_brown: "50+ years", mandana: "50+ years" },
  { property: "Maintenance", kota_blue: "Low — sweep & mop", kota_brown: "Low — sweep & mop", mandana: "Very Low" },
];

const finishes = [
  { name: "Natural Split", desc: "As quarried — raw, textured, highly slip-resistant. Best for outdoor paving, garden paths, and rustic interiors.", best: "Outdoor · Garden · Heritage" },
  { name: "Honed", desc: "Smooth, flat, non-reflective matte finish. The most popular choice for residential and commercial interiors.", best: "Indoor Flooring · Offices · Corridors" },
  { name: "Polished", desc: "Mirror-gloss finish showing the full depth of the stone's colour. Requires periodic maintenance to retain shine.", best: "Lobbies · Hotels · Premium Interiors" },
  { name: "Leather / Brushed", desc: "Wire-brushed to create a soft, tactile textured surface. Contemporary aesthetic with improved grip.", best: "Feature Walls · Modern Interiors" },
  { name: "Sandblasted", desc: "High-pressure sand treatment that creates a rough, highly slip-resistant surface. Ideal for heavy-duty outdoor use.", best: "Driveways · Parking · Swimming Pools" },
  { name: "Flamed", desc: "High-heat thermal treatment that creates a rough, open-pored anti-slip surface. Permanent and weather-resistant.", best: "Exterior Paving · Public Spaces · Steps" },
];

const standardSizes = [
  { size: "12 × 12 inches", mm: "305 × 305 mm", use: "Corridor, pathway, bathroom" },
  { size: "18 × 18 inches", mm: "457 × 457 mm", use: "Residential flooring" },
  { size: "24 × 24 inches", mm: "610 × 610 mm", use: "Commercial flooring, most popular" },
  { size: "24 × 36 inches", mm: "610 × 914 mm", use: "Large space flooring" },
  { size: "24 × 48 inches", mm: "610 × 1219 mm", use: "Premium large format" },
  { size: "2 × 2 feet", mm: "610 × 610 mm", use: "Slab format" },
  { size: "3 × 2 feet", mm: "914 × 610 mm", use: "Large slab" },
  { size: "4 × 2 feet", mm: "1219 × 610 mm", use: "Extra-large slab, hotel lobbies" },
  { size: "4 × 4 feet", mm: "1219 × 1219 mm", use: "Maximum standard slab" },
  { size: "Custom", mm: "Any dimension", use: "Per architectural drawing" },
];

export default function SpecificationsPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── HEADER ── */}
      <section className="relative bg-charcoal text-white py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/kota-blue-2.jpeg" alt="Kota Blue Stone technical specifications — Kamal Industries" fill priority className="object-cover opacity-25" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 to-charcoal/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest mb-8 font-sans">
            <Link href="/" className="hover:text-stone-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stone-gold">Technical Specifications</span>
          </nav>
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-5 block font-sans">
            Kamal Industries · Engineering Data
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-extralight tracking-tight mb-6 leading-[1.1]">
            Technical<br />
            <span className="italic font-normal text-stone-gold">Specifications</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base font-light max-w-xl leading-relaxed">
            Complete engineering specifications for Kota Blue Stone, Kota Brown Stone, and Mandana Stone
            — tested to Indian Standard (IS) and international benchmarks.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/downloads" className="inline-flex items-center gap-2 bg-stone-gold text-neutral-dark text-[11px] font-bold tracking-widest uppercase px-6 py-3 rounded-xl hover:bg-stone-gold/90 transition-colors font-sans">
              <Download size={14} /> Download Brochure
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/20 text-white text-[11px] font-bold tracking-widest uppercase px-6 py-3 rounded-xl hover:border-stone-gold hover:text-stone-gold transition-colors font-sans">
              Request Samples <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">Engineering Properties</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-dark">Stone Comparison Table</h2>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-5" />
          </div>

          {/* Sticky header table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm font-sans">
              <thead>
                <tr className="bg-charcoal text-white">
                  <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-white/60 w-[28%]">Property</th>
                  <th className="text-center px-6 py-4">
                    <div className="text-[10px] text-stone-gold font-bold uppercase tracking-widest mb-0.5">KOTA BLUE</div>
                    <div className="text-[9px] text-white/50">Fine-grained Limestone</div>
                  </th>
                  <th className="text-center px-6 py-4">
                    <div className="text-[10px] text-stone-gold font-bold uppercase tracking-widest mb-0.5">KOTA BROWN</div>
                    <div className="text-[9px] text-white/50">Fine-grained Limestone</div>
                  </th>
                  <th className="text-center px-6 py-4">
                    <div className="text-[10px] text-stone-gold font-bold uppercase tracking-widest mb-0.5">MANDANA</div>
                    <div className="text-[9px] text-white/50">Quartzite</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {techSpecs.map((row, i) => (
                  <tr key={row.property} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-6 py-3.5 font-semibold text-neutral-dark text-xs">{row.property}</td>
                    <td className="px-6 py-3.5 text-center text-gray-600 text-xs font-light">{row.kota_blue}</td>
                    <td className="px-6 py-3.5 text-center text-gray-600 text-xs font-light">{row.kota_brown}</td>
                    <td className="px-6 py-3.5 text-center text-gray-600 text-xs font-light">{row.mandana}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── STANDARD SIZES ── */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">Sizes & Dimensions</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-dark">Available Standard Sizes</h2>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-5" />
            <p className="text-gray-500 text-sm font-light max-w-md mx-auto mt-5 leading-relaxed">
              All standard sizes below are available in stock. Custom sizes cut to your exact specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {standardSizes.map((s) => (
              <div key={s.size} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-stone-gold/30 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="font-serif text-2xl font-light text-neutral-dark">{s.size}</div>
                  {s.size === "Custom" && (
                    <span className="text-[8px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2 py-0.5 rounded-full">Custom</span>
                  )}
                </div>
                <div className="text-[10px] text-stone-gold font-bold font-sans mb-2">{s.mm}</div>
                <div className="text-xs text-gray-400 font-light">{s.use}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-primary/5 border border-primary/10 rounded-2xl p-6 text-center">
            <p className="text-sm text-gray-600 font-light">
              <strong className="text-neutral-dark">Need a different size?</strong> We manufacture Kota Stone to any custom dimension.
              <Link href="/contact" className="text-primary font-semibold hover:underline ml-2">Send us your drawing →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── SURFACE FINISHES ── */}
      <section className="py-20 md:py-28 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">Surface Treatment</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">Available Surface Finishes</h2>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {finishes.map((f, i) => (
              <div key={f.name} className="bg-glass rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-stone-gold/15 flex items-center justify-center shrink-0">
                    <span className="font-serif text-stone-gold font-light text-lg">0{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-xl font-light text-white mt-1">{f.name}</h3>
                </div>
                <p className="text-white/60 text-xs font-light leading-relaxed mb-3">{f.desc}</p>
                <div className="text-[9px] text-stone-gold font-bold uppercase tracking-widest font-sans">{f.best}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUALITY COMPLIANCE ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/kota-slab-3.jpeg" alt="Kota Stone slab quality inspection at Kamal Industries" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">Quality Standards</span>
                <h2 className="font-serif text-4xl font-light text-neutral-dark">Tested to International Standards</h2>
                <div className="w-12 h-[2px] bg-stone-gold mt-5" />
              </div>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Every batch of Kota Stone from our Ramganjmandi factory is tested against Bureau of Indian Standards (BIS)
                specifications. We maintain stringent quality checks at every stage of production.
              </p>
              <div className="space-y-3">
                {[
                  "IS 1130 — Marble (applicable dimensional standards)",
                  "IS 3622 — Sandstone",
                  "IS 3316 — Specifications for natural building stones",
                  "ASTM C119 — Standard Terminology relating to Dimension Stone",
                  "EN 12057 — Modular tiles for natural stone",
                  "Individual piece inspection — zero lamination policy",
                  "Colour grading — Grade A and Grade B sorted separately",
                  "Dimensional accuracy — ±1mm tolerance on calibrated sizes",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-stone-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 font-light">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white text-[11px] font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl hover:bg-primary-dark transition-colors font-sans">
                Request Test Reports <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-stone-gold/10 border-y border-stone-gold/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-dark mb-4">
            Ready to Order?
          </h2>
          <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">
            Contact our sales team for manufacturer-direct pricing, sample shipments, and custom cut quotations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-primary text-white text-[11px] font-bold tracking-widest uppercase px-8 py-4 rounded-xl hover:bg-primary-dark transition-colors font-sans">
              Request a Quote
            </Link>
            <a href="https://wa.me/919214830464" target="_blank" rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-[11px] font-bold tracking-widest uppercase px-8 py-4 rounded-xl hover:bg-[#1ebe57] transition-colors font-sans flex items-center gap-2">
              WhatsApp Us
            </a>
            <Link href="/downloads" className="border border-primary/30 text-primary text-[11px] font-bold tracking-widest uppercase px-8 py-4 rounded-xl hover:bg-primary/5 transition-colors font-sans flex items-center gap-2">
              <Download size={14} /> Download Brochure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
