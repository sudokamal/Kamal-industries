import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ProductsClient from "@/components/products/ProductsClient";

export const metadata: Metadata = {
  title: "Our Kota Stone & Mandana Stone Product Range | Kamal Industries",
  description:
    "Browse the complete range of Kota Blue Stone, Kota Brown Stone, Mandana Stone, flooring slabs, wall cladding, stair stone, and custom cut stone products from Kamal Industries, Ramganjmandi, Kota, Rajasthan.",
  alternates: {
    canonical: "https://kamalindustries.in/products",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/products",
    siteName: "Kamal Industries & Enterprises",
    title: "Our Kota Stone & Mandana Stone Product Range | Kamal Industries",
    description:
      "Browse the complete range of Kota Blue Stone, Kota Brown Stone, Mandana Stone, flooring slabs, wall cladding, stair stone, and custom cut stone products from Kamal Industries, Ramganjmandi, Kota, Rajasthan.",
    images: [
      {
        url: "/HomePage.jpeg",
        width: 1200,
        height: 630,
        alt: "Kamal Industries Kota Stone product range showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Kota Stone & Mandana Stone Product Range | Kamal Industries",
    description:
      "Browse the complete range of Kota Blue Stone, Kota Brown Stone, Mandana Stone, flooring slabs, wall cladding, stair stone, and custom cut stone products from Kamal Industries.",
    images: ["/HomePage.jpeg"],
  },
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ─── PAGE HEADER ─── */}
      <section className="relative bg-neutral-dark text-white py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/HomePage.jpeg"
            alt="Kamal Industries Kota Stone product range"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark/80 via-neutral-dark/60 to-neutral-dark" />
        </div>
        <Container className="relative z-10 max-w-4xl">
          <span className="text-[10px] md:text-xs font-sans tracking-[0.35em] uppercase font-bold text-stone-gold mb-5 block">
            Kamal Industries · Ramganjmandi, Kota
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-extralight tracking-tight mb-6 leading-[1.1]">
            Our Stone<br />
            <span className="italic font-normal text-stone-gold">Product Range</span>
          </h1>
          <p className="font-sans text-gray-300 text-sm md:text-base font-light max-w-xl leading-relaxed mb-6">
            Directly manufactured and supplied from our factory in Amarpura, Ramganjmandi.
            Every product shown uses our actual factory photographs — no stock images.
          </p>
          <a
            href="/Kamal_Industries_Kota_Stone_Catalogue.pdf"
            download="Kamal_Industries_Kota_Stone_Catalogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-stone-gold hover:bg-stone-gold-dark text-slate-950 text-[11px] font-bold tracking-widest uppercase px-6 py-3 rounded-xl transition-all duration-200 font-sans shadow-md"
          >
            Download Product Catalogue (PDF)
          </a>

          {/* Quick stat bar */}
          <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              { v: "7+", l: "Product Types" },
              { v: "50+", l: "Standard Sizes" },
              { v: "5+", l: "Surface Finishes" },
              { v: "Custom", l: "Cut Available" },
            ].map((s) => (
              <div key={s.l}>
                <span className="font-serif text-2xl font-light text-stone-gold block">{s.v}</span>
                <span className="text-[9px] tracking-widest uppercase font-bold text-gray-400 font-sans">{s.l}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── FILTERABLE PRODUCT GRID ─── */}
      <div className="bg-neutral-light/20 flex-1">
        <ProductsClient />
      </div>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-20 bg-primary text-white">
        <Container className="max-w-3xl text-center">
          <span className="text-[10px] tracking-widest font-bold uppercase text-stone-gold mb-4 block font-sans">
            Need Something Different?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-6">
            We Manufacture to Your Exact Specifications
          </h2>
          <p className="text-gray-300 text-sm font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Send us your architectural drawings, size matrix, or project requirements.
            Our technical team will review your specifications and prepare a detailed quotation within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-stone-gold text-neutral-dark text-[11px] font-bold tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-stone-gold/90 transition-colors font-sans"
            >
              Request a Quote
            </a>
            <a
              href="tel:+919214830464"
              className="border border-white/30 text-white text-[11px] font-bold tracking-widest uppercase px-8 py-4 rounded-sm hover:border-white/60 transition-colors font-sans"
            >
              Call: +91 92148 30464
            </a>
          </div>
        </Container>
      </section>

    </div>
  );
}
