"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2, ArrowRight, MessageCircle, Phone, Download,
  X, ChevronLeft, ChevronRight, Layers, Ruler, Sparkles, ExternalLink,
} from "lucide-react";

/* ─────────────────── Types ─────────────────── */
export interface RelatedProduct {
  name: string;
  tagline: string;
  href: string;
  image: string;
}

export interface ProductDetailData {
  /* Hero */
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  heroImage: string;
  whatsappText: string;
  contactParam: string;

  /* Gallery */
  gallery: { src: string; alt: string }[];

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

/* ─────────────────── Lightbox ─────────────────── */
function Lightbox({
  images, index, onClose, onPrev, onNext,
}: {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
      >
        <X size={28} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 text-white/60 hover:text-white transition-colors p-2"
      >
        <ChevronLeft size={36} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 text-white/60 hover:text-white transition-colors p-2"
      >
        <ChevronRight size={36} />
      </button>
      <div
        className="relative w-full max-w-4xl mx-8 aspect-[4/3]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index].src}
          alt={images[index].alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute bottom-5 text-white/40 text-xs font-sans tracking-widest">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

/* ─────────────────── Main Component ─────────────────── */
export default function ProductDetailPage({ data }: { data: ProductDetailData }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + data.gallery.length) % data.gallery.length));
  const nextImage = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % data.gallery.length));

  const waHref = `https://wa.me/919214830464?text=${encodeURIComponent(data.whatsappText)}`;

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative bg-charcoal text-white py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={`${data.title} ${data.titleAccent} — Kamal Industries`}
            fill priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/98 via-charcoal/80 to-charcoal/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest mb-10 font-sans flex-wrap">
            <Link href="/" className="hover:text-stone-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-stone-gold transition-colors">Products</Link>
            <span>/</span>
            <span className="text-stone-gold">{data.breadcrumb}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
                {data.badge}
              </span>
              <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-extralight tracking-tight mb-6 leading-[1.08]">
                {data.title}<br />
                <span className="italic font-normal text-stone-gold">{data.titleAccent}</span>
              </h1>
              <p className="text-white/65 text-sm md:text-base font-light max-w-md leading-relaxed mb-8">
                {data.subtitle}
              </p>

              {/* Quick Pills */}
              <div className="flex flex-wrap gap-5 mb-10 text-xs font-sans">
                <div className="flex items-center gap-2 text-white/50">
                  <Sparkles size={12} className="text-stone-gold" />
                  <span>{data.finishes.slice(0, 3).join(" · ")}{data.finishes.length > 3 ? " +" : ""}</span>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <Ruler size={12} className="text-stone-gold" />
                  <span>{data.thickness.slice(0, 3).join(" · ")}</span>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <Layers size={12} className="text-stone-gold" />
                  <span>{data.applications.slice(0, 2).join(", ")}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a href={waHref} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white text-[11px] font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl hover:bg-[#1ebe57] transition-colors font-sans">
                  <MessageCircle size={14} /> WhatsApp Price
                </a>
                <Link href={`/contact?product=${data.contactParam}`}
                  className="inline-flex items-center gap-2 bg-stone-gold text-neutral-dark text-[11px] font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl hover:bg-stone-gold/90 transition-colors font-sans">
                  Request Quote <ArrowRight size={14} />
                </Link>
                <Link href="/downloads"
                  className="inline-flex items-center gap-2 border border-white/25 text-white/70 text-[11px] font-bold tracking-widest uppercase px-5 py-3.5 rounded-xl hover:border-white/50 hover:text-white transition-colors font-sans">
                  <Download size={13} /> Brochure
                </Link>
              </div>
            </div>

            {/* Right — Hero image card */}
            <div className="hidden lg:block relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src={data.gallery[0].src}
                alt={data.gallery[0].alt}
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <button
                onClick={() => openLightbox(0)}
                className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors font-sans"
              >
                <ExternalLink size={11} /> View Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ IMAGE GALLERY ══════════════ */}
      <section className="py-12 md:py-16 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-light text-neutral-dark">
              Factory <span className="italic text-stone-gold">Gallery</span>
            </h2>
            <span className="text-[10px] text-gray-400 font-sans tracking-widest uppercase">
              {data.gallery.length} photos · Kamal Industries, Ramganjmandi
            </span>
          </div>

          {/* Main grid — first is large, rest are smaller */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
            {data.gallery.slice(0, 1).map((img, i) => (
              <div
                key={img.src + i}
                className="col-span-2 row-span-2 relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(0)}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="50vw" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end justify-end p-3">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-sm text-white text-[9px] tracking-widest uppercase px-2 py-1 rounded font-sans font-bold">
                    Open
                  </span>
                </div>
              </div>
            ))}
            {data.gallery.slice(1, 5).map((img, i) => (
              <div
                key={img.src + i}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(i + 1)}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="25vw" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors" />
                {i === 3 && data.gallery.length > 5 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-serif text-2xl font-light">+{data.gallery.length - 5}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ PRODUCT OVERVIEW ══════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Description */}
            <div className="lg:col-span-2">
              <span className="text-[10px] tracking-widest font-bold uppercase text-stone-gold font-sans block mb-3">Product Overview</span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-dark mb-4 leading-tight">
                {data.title} <span className="italic text-stone-gold">{data.titleAccent}</span>
              </h2>
              <div className="w-12 h-[1.5px] bg-stone-gold mb-6" />
              <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed mb-8">
                {data.description}
              </p>

              {/* Features */}
              <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-dark mb-4">Key Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 bg-[#f7f7f5] rounded-lg px-4 py-3">
                    <CheckCircle2 size={14} className="text-stone-gold shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-600 font-light leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar — Sizes / Thickness / Finishes */}
            <div className="space-y-6">
              {/* Available Sizes */}
              <div className="border border-gray-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Ruler size={13} className="text-stone-gold" />
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-gray-500">Available Sizes</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.sizes.map((s) => (
                    <span key={s} className="text-[10px] font-sans bg-primary/8 text-primary border border-primary/15 px-3 py-1.5 rounded-full font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Thickness */}
              <div className="border border-gray-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Layers size={13} className="text-stone-gold" />
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-gray-500">Thickness Options</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.thickness.map((t) => (
                    <span key={t} className="text-[10px] font-sans bg-neutral-light text-gray-600 border border-gray-100 px-3 py-1.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Finishes */}
              <div className="border border-gray-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={13} className="text-stone-gold" />
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-gray-500">Surface Finishes</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.finishes.map((f) => (
                    <span key={f} className="text-[10px] font-sans bg-charcoal text-white/70 px-3 py-1.5 rounded-full font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-primary rounded-xl p-5 text-white">
                <p className="font-serif text-lg font-light mb-1">Factory-Direct Pricing</p>
                <p className="text-xs text-white/60 font-light mb-4">Response within 24 hours</p>
                <Link href={`/contact?product=${data.contactParam}`}
                  className="block text-center bg-white text-primary text-[11px] font-bold tracking-widest uppercase py-3 rounded-lg hover:bg-stone-gold hover:text-neutral-dark transition-colors font-sans">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ SPECIFICATIONS TABLE ══════════════ */}
      <section className="py-16 md:py-20 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left — Label */}
            <div className="lg:col-span-2">
              <span className="text-[10px] tracking-widest font-bold uppercase text-stone-gold font-sans block mb-3">Specifications</span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-dark mb-4">
                Technical<br /><span className="italic text-stone-gold">Data Sheet</span>
              </h2>
              <div className="w-12 h-[1.5px] bg-stone-gold mb-6" />
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
                All measurements are factory-certified and verified against batch production standards. Custom specifications available on request.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/downloads"
                  className="inline-flex items-center gap-2 bg-primary text-white text-[11px] font-bold tracking-widest uppercase px-5 py-3 rounded-lg hover:bg-primary-dark transition-colors font-sans w-fit">
                  <Download size={13} /> Download Brochure
                </Link>
                <Link href="/specifications"
                  className="inline-flex items-center gap-2 text-primary text-[11px] font-bold tracking-widest uppercase hover:underline font-sans w-fit">
                  Full Spec Sheet <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Right — Table */}
            <div className="lg:col-span-3">
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                {data.specs.map((s, i) => (
                  <div key={s.label} className={`flex justify-between items-center px-5 py-3.5 text-xs border-b border-gray-100 last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-[#f7f7f5]"}`}>
                    <span className="text-gray-400 font-light font-sans">{s.label}</span>
                    <span className="text-neutral-dark font-semibold text-right max-w-[58%] font-sans">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ APPLICATIONS ══════════════ */}
      <section className="py-16 md:py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[10px] tracking-widest font-bold uppercase text-stone-gold font-sans block mb-3">Where It&apos;s Used</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-white">Applications</h2>
            <div className="w-12 h-[1.5px] bg-stone-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {data.applications.map((app) => (
              <div key={app} className="group bg-white/5 border border-white/8 rounded-xl px-4 py-4 text-center hover:bg-white/10 hover:border-stone-gold/30 transition-all duration-300 cursor-default">
                <span className="text-xs text-white/65 font-sans font-light group-hover:text-white/90 transition-colors">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ RELATED PRODUCTS ══════════════ */}
      {data.related.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-[10px] tracking-widest font-bold uppercase text-stone-gold font-sans block mb-2">You May Also Like</span>
                <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-dark">
                  Related <span className="italic text-stone-gold">Products</span>
                </h2>
              </div>
              <Link href="/products" className="hidden sm:inline-flex items-center gap-1.5 text-primary text-[10px] font-bold uppercase tracking-widest hover:underline font-sans">
                All Products <ArrowRight size={12} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.related.map((p) => (
                <Link key={p.href} href={p.href} className="group block border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-medium text-neutral-dark mb-1 group-hover:text-primary transition-colors">{p.name}</h3>
                    <p className="text-gray-400 text-xs font-light italic mb-3">{p.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-[10px] font-bold uppercase tracking-widest font-sans group-hover:gap-2 transition-all">
                      View Details <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════ BOTTOM CTA ══════════════ */}
      <section className="py-16 bg-[#f7f7f5] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-dark mb-3">
            Ready to Order? <span className="italic text-stone-gold">Get in Touch.</span>
          </h2>
          <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Share your quantity, size, finish, and delivery location. Our team responds with
            factory-direct pricing within 24 hours. Bulk orders and export supply available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={waHref} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-[11px] font-bold tracking-widest uppercase px-7 py-4 rounded-xl hover:bg-[#1ebe57] transition-colors font-sans shadow-lg shadow-green-500/20">
              <MessageCircle size={15} /> WhatsApp Us
            </a>
            <Link href={`/contact?product=${data.contactParam}`}
              className="inline-flex items-center gap-2 bg-primary text-white text-[11px] font-bold tracking-widest uppercase px-7 py-4 rounded-xl hover:bg-primary-dark transition-colors font-sans shadow-lg shadow-primary/20">
              Request Quote <ArrowRight size={14} />
            </Link>
            <Link href="/downloads"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-600 text-[11px] font-bold tracking-widest uppercase px-7 py-4 rounded-xl hover:border-primary hover:text-primary transition-colors font-sans">
              <Download size={14} /> Download Brochure
            </Link>
            <a href="tel:+919214830464"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-500 text-[11px] font-bold tracking-widest uppercase px-6 py-4 rounded-xl hover:border-gray-300 transition-colors font-sans">
              <Phone size={14} /> Call Factory
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={data.gallery}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
