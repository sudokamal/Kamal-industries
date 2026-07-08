import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Download, FileText, Phone, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Download Brochures & Catalogues | Kamal Industries",
  description:
    "Download the Kamal Industries company profile, Kota Stone product catalogue, and technical specifications brochure. Direct manufacturer of Kota Blue Stone, Kota Brown Stone, and Mandana Stone.",
  alternates: {
    canonical: "https://kamalindustries.in/downloads",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/downloads",
    siteName: "Kamal Industries & Enterprises",
    title: "Download Brochures & Catalogues | Kamal Industries",
    description:
      "Download the Kamal Industries company profile, Kota Stone product catalogue, and technical specifications brochure. Direct manufacturer of Kota Blue Stone, Kota Brown Stone, and Mandana Stone.",
    images: [
      {
        url: "/factory-yard-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Kamal Industries factory yard in Ramganjmandi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Brochures & Catalogues | Kamal Industries",
    description:
      "Download the Kamal Industries company profile, Kota Stone product catalogue, and technical specifications brochure.",
    images: ["/factory-yard-1.jpeg"],
  },
};

const downloads = [
  {
    title: "Company Profile",
    desc: "Full company profile including our story, manufacturing capabilities, product range, factory overview, and export services. Ideal for architects and project consultants.",
    pages: "12 pages",
    size: "2.4 MB",
    format: "PDF",
    icon: "/ki-signage.jpeg",
    alt: "Kamal Industries company profile cover",
    color: "from-primary/20 to-primary/5",
    accent: "text-primary",
    tag: "Company",
    href: "#",
  },
  {
    title: "Product Catalogue",
    desc: "Full product catalogue with high-resolution factory photos of Kota Blue Stone, Kota Brown Stone, Mandana Stone, wall cladding, steps, and custom stone with specifications.",
    pages: "24 pages",
    size: "5.8 MB",
    format: "PDF",
    icon: "/kota-blue-1.jpeg",
    alt: "Kota Stone product catalogue cover",
    color: "from-stone-gold/20 to-stone-gold/5",
    accent: "text-stone-gold-dark",
    tag: "Products",
    href: "#",
  },
  {
    title: "Technical Specifications",
    desc: "Engineering data sheet with density, water absorption, compressive strength, flexural strength, slip resistance, and dimensional tolerances for all stone types.",
    pages: "8 pages",
    size: "1.2 MB",
    format: "PDF",
    icon: "/kota-slab-2.jpeg",
    alt: "Kota Stone technical specifications brochure cover",
    color: "from-gray-100 to-white",
    accent: "text-gray-700",
    tag: "Technical",
    href: "#",
  },
  {
    title: "Export Packing Guide",
    desc: "Guide for international buyers — our seaworthy wooden crate packing specifications, fumigation certificates, port coordination (Mundra/Kandla), and shipping documentation.",
    pages: "6 pages",
    size: "0.9 MB",
    format: "PDF",
    icon: "/workers-loading-1.jpeg",
    alt: "Loading and export guide cover",
    color: "from-green-50 to-white",
    accent: "text-green-700",
    tag: "Export",
    href: "#",
  },
];

export default function DownloadsPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── HEADER ── */}
      <section className="relative bg-charcoal text-white py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/factory-yard-1.jpeg" alt="Kamal Industries factory overview" fill priority className="object-cover opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 to-charcoal/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest mb-8 font-sans">
            <Link href="/" className="hover:text-stone-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stone-gold">Downloads</span>
          </nav>
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-5 block font-sans">
            Kamal Industries · Resources
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-extralight tracking-tight mb-6 leading-[1.1]">
            Download<br />
            <span className="italic font-normal text-stone-gold">Centre</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base font-light max-w-xl leading-relaxed">
            Download our company profile, product catalogue, technical data sheets, and export guides.
            All documents are available free of charge.
          </p>
        </div>
      </section>

      {/* ── DOWNLOADS GRID ── */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
              Free Downloads
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-dark">
              Product & Company Resources
            </h2>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((doc) => (
              <div key={doc.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-stretch">
                  {/* Thumbnail */}
                  <div className="relative w-32 md:w-40 shrink-0">
                    <Image src={doc.icon} alt={doc.alt} fill className="object-cover" sizes="160px" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${doc.color} mix-blend-multiply`} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <FileText size={28} className={`${doc.accent} drop-shadow-sm`} />
                      <span className={`text-[8px] font-bold uppercase tracking-widest mt-1.5 ${doc.accent} font-sans`}>{doc.tag}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-serif text-xl font-medium text-neutral-dark">{doc.title}</h3>
                      <div className="flex gap-1.5 shrink-0 ml-2">
                        <span className="text-[8px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{doc.format}</span>
                        <span className="text-[8px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{doc.size}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs font-light leading-relaxed mb-4">{doc.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-gray-300 font-sans">{doc.pages}</span>
                      <a
                        href={doc.href}
                        className="inline-flex items-center gap-2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors font-sans group-hover:shadow-md"
                        aria-label={`Download ${doc.title}`}
                      >
                        <Download size={12} /> Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Request physical sample */}
          <div className="mt-10 bg-primary rounded-2xl p-8 md:p-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-3xl font-light text-white mb-3">
                  Request Physical Stone Samples
                </h3>
                <div className="w-10 h-[1.5px] bg-stone-gold mb-4" />
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  We ship physical stone samples (100×100mm pieces) to architects, builders,
                  and project consultants across India. Contact us with your delivery address.
                </p>
                <div className="mt-4 space-y-2">
                  {[
                    "Kota Blue Stone — honed & natural",
                    "Kota Brown Stone — honed & natural",
                    "Mandana Stone — natural split",
                    "Wall Cladding — split face",
                  ].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-stone-gold shrink-0" />
                      <span className="text-white/80 text-xs font-light">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://wa.me/919214830464?text=Hello%2C%20I%20would%20like%20to%20request%20physical%20stone%20samples%20from%20Kamal%20Industries."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white text-[11px] font-bold tracking-widest uppercase px-6 py-4 rounded-xl hover:bg-[#1ebe57] transition-colors font-sans">
                  <MessageCircle size={16} /> WhatsApp for Samples
                </a>
                <a href="tel:+919214830464"
                  className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-widest uppercase px-6 py-4 rounded-xl hover:bg-white/15 transition-colors font-sans">
                  <Phone size={16} /> Call: +91 92148 30464
                </a>
                <Link href="/contact"
                  className="flex items-center justify-center gap-3 border border-stone-gold/40 text-stone-gold text-[11px] font-bold tracking-widest uppercase px-6 py-4 rounded-xl hover:border-stone-gold hover:bg-stone-gold/10 transition-colors font-sans">
                  Fill Enquiry Form <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEED CUSTOM DOC ── */}
      <section className="py-16 bg-white border-t border-gray-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-light text-neutral-dark mb-4">
            Need a Custom Quote Document?
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
            We can prepare a custom project-specific quotation with our company letterhead, product specs,
            pricing, and delivery terms — suitable for tender submissions and project approvals.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white text-[11px] font-bold tracking-widest uppercase px-8 py-4 rounded-xl hover:bg-primary-dark transition-colors font-sans">
            Request Custom Document <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
