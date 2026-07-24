"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2, ArrowRight, MessageCircle, Phone, Download,
  Layers, Ruler, Sparkles, ExternalLink, X, ZoomIn, ChevronLeft, ChevronRight,
} from "lucide-react";

/* ─────────────────── Types ─────────────────── */
export interface RelatedProduct {
  name: string;
  tagline: string;
  href: string;
  image?: string;
}

export interface ProductDetailData {
  /* Hero */
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  heroImage?: string;
  whatsappText: string;
  contactParam: string;

  /* Gallery */
  gallery?: { src: string; alt: string }[];

  /* Overview */
  description: string;
  sizes: string[];
  thickness: string[];
  finishes: string[];

  /* Content */
  features: string[];
  specs: { label: string; value: string }[];
  applications: string[];

  /* Breadcrumb label */
  breadcrumb: string;

  /* Related */
  related: RelatedProduct[];
}

export default function ProductDetailPage({ data }: { data: ProductDetailData }) {
  const [activeImage, setActiveImage] = useState(data.heroImage || (data.gallery && data.gallery[0]?.src) || "/Kota Blue Stone.jpeg");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const whatsappUrl = `https://wa.me/919214830464?text=${encodeURIComponent(data.whatsappText)}`;
  const cataloguePdfPath = "/Kamal_Industries_Kota_Stone_Catalogue.pdf";

  const galleryItems = data.gallery || [
    { src: activeImage, alt: data.title },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ══════════════ 1. HERO HEADER ══════════════ */}
      <section className="relative bg-neutral-dark text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={activeImage}
            alt={data.title}
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-dark via-neutral-dark/90 to-neutral-dark/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[11px] font-sans text-stone-400 mb-8 uppercase tracking-widest">
            <Link href="/" className="hover:text-stone-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-stone-gold transition-colors">Products</Link>
            <span>/</span>
            <span className="text-stone-gold font-bold">{data.breadcrumb}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block bg-stone-gold/20 text-stone-gold border border-stone-gold/30 text-[10px] font-sans font-bold uppercase tracking-[0.25em] px-3 py-1 rounded-full mb-4">
                {data.badge}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1] mb-6">
                {data.title} <span className="text-stone-gold italic">{data.titleAccent}</span>
              </h1>
              <p className="text-stone-300 text-sm md:text-base font-light leading-relaxed mb-8">
                {data.subtitle}
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-sans font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-900/30"
                >
                  <MessageCircle size={16} /> WhatsApp Enquiry
                </a>
                <Link
                  href={`/contact?product=${encodeURIComponent(data.contactParam)}`}
                  className="inline-flex items-center gap-2.5 bg-stone-gold hover:bg-stone-gold/90 text-neutral-dark text-xs font-sans font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-black/20"
                >
                  Request Quotation <ArrowRight size={14} />
                </Link>
                <a
                  href={cataloguePdfPath}
                  download="Kamal_Industries_Kota_Stone_Catalogue.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white text-xs font-sans font-medium uppercase tracking-widest px-5 py-3.5 rounded-xl transition-all duration-200"
                >
                  <Download size={14} /> Catalogue (PDF)
                </a>
              </div>
            </div>

            {/* Featured Image Viewer */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group cursor-pointer" onClick={() => setLightboxIndex(0)}>
                <Image
                  src={activeImage}
                  alt={data.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ GALLERY GRID ══════════════ */}
      {galleryItems.length > 0 && (
        <section className="py-12 bg-neutral-dark/95 text-white border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-stone-gold mb-3 block font-sans">
              Product Photo Gallery ({galleryItems.length} Photos)
            </span>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {galleryItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveImage(item.src);
                    setLightboxIndex(idx);
                  }}
                  className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                    activeImage === item.src ? "border-stone-gold scale-95" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="150px" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════ 2. PRODUCT OVERVIEW & SPECS ══════════════ */}
      <section className="py-16 md:py-24 bg-neutral-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Col (2 cols): Overview & Features */}
            <div className="lg:col-span-2 space-y-12">
              {/* Product Overview */}
              <div>
                <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-2 block font-sans">
                  Comprehensive Overview
                </span>
                <h2 className="font-serif text-3xl font-light text-neutral-dark mb-4">
                  Product Description & Performance
                </h2>
                <div className="w-12 h-[2px] bg-stone-gold mb-6" />
                <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base whitespace-pre-line">
                  {data.description}
                </p>
              </div>

              {/* Key Features List */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-2 block font-sans">
                  Why Choose Our Material
                </span>
                <h3 className="font-serif text-2xl font-light text-neutral-dark mb-6">
                  Key Advantages & Performance Attributes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-stone-gold shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700 font-light leading-relaxed font-sans">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Finishes & Sizes Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Available Finishes */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={16} className="text-stone-gold" />
                    <h4 className="font-serif text-lg font-medium text-neutral-dark">Available Finishes</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.finishes.map((f) => (
                      <span key={f} className="text-xs bg-neutral-light text-neutral-dark px-3 py-1 rounded-full border border-gray-100 font-sans">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Available Sizes */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Ruler size={16} className="text-stone-gold" />
                    <h4 className="font-serif text-lg font-medium text-neutral-dark">Standard Sizes</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.sizes.map((s) => (
                      <span key={s} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 font-sans font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col (1 col): Technical Specs Card */}
            <div>
              <div className="bg-neutral-dark text-white p-8 rounded-2xl sticky top-28 shadow-xl border border-white/10">
                <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-2 block font-sans">
                  Technical Data Sheet
                </span>
                <h3 className="font-serif text-2xl font-light text-white mb-6">
                  Material Specifications
                </h3>
                <div className="w-10 h-[2px] bg-stone-gold mb-6" />

                <div className="space-y-4 text-xs font-sans">
                  {data.specs.map((sp, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-stone-400 font-light">{sp.label}</span>
                      <span className="text-stone-200 font-medium text-right">{sp.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest py-3.5 px-4 rounded-xl transition-colors font-sans"
                  >
                    <MessageCircle size={14} /> Quick WhatsApp Order
                  </a>
                  <a
                    href="tel:+919214830464"
                    className="w-full flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-stone-300 text-xs font-medium uppercase tracking-widest py-3.5 px-4 rounded-xl transition-colors font-sans"
                  >
                    <Phone size={14} /> Call: +91 92148 30464
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 3. APPLICATIONS SECTION ══════════════ */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-2 block font-sans">
              Recommended Usage
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-dark mb-4">
              Project Applications
            </h2>
            <div className="w-12 h-[2px] bg-stone-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {data.applications.map((app, idx) => (
              <div key={idx} className="bg-neutral-light/50 p-4 rounded-xl text-center border border-gray-100 hover:border-stone-gold/40 transition-colors">
                <Layers size={18} className="text-stone-gold mx-auto mb-2" />
                <span className="text-xs font-sans text-neutral-dark font-medium block">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 4. RELATED PRODUCTS ══════════════ */}
      {data.related && data.related.length > 0 && (
        <section className="py-16 bg-neutral-light/30 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-2 block font-sans text-center">
              Complete Stone Range
            </span>
            <h2 className="font-serif text-3xl font-light text-neutral-dark mb-10 text-center">
              Explore Related Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.related.map((rel, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                    <Image
                      src={rel.image || "/Kota Blue Stone.jpeg"}
                      alt={rel.name}
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-medium text-neutral-dark mb-2">{rel.name}</h3>
                    <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">{rel.tagline}</p>
                    <Link
                      href={rel.href}
                      className="inline-flex items-center gap-2 text-stone-gold hover:text-stone-gold/80 text-xs font-bold uppercase tracking-widest font-sans"
                    >
                      View Product Details <ExternalLink size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════ LIGHTBOX MODAL ══════════════ */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-3 rounded-full z-10"
          >
            <X size={24} />
          </button>
          <button
            onClick={() => setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length)}
            className="absolute left-6 text-white/70 hover:text-white bg-white/10 p-3 rounded-full z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => setLightboxIndex((lightboxIndex + 1) % galleryItems.length)}
            className="absolute right-6 text-white/70 hover:text-white bg-white/10 p-3 rounded-full z-10"
          >
            <ChevronRight size={24} />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-[75vh]">
              <Image
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <p className="text-white/80 text-xs font-sans mt-4 text-center">
              {galleryItems[lightboxIndex].alt} ({lightboxIndex + 1} of {galleryItems.length})
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
