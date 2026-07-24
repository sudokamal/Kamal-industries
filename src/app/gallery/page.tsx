"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { allGalleryImages } from "@/data/images";
import { X, ZoomIn, ChevronLeft, ChevronRight, Layers, ArrowRight } from "lucide-react";

const CATEGORIES = ["All", "Factory Yard", "Products", "Machinery", "Packing", "Workers", "Office"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return allGalleryImages;
    return allGalleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-neutral-dark text-white">
      {/* ── HEADER ── */}
      <div className="pt-28 pb-16 text-center relative overflow-hidden bg-neutral-dark border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/HomePage1.jpeg"
            alt="Kamal Industries Factory Yard"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark/90 via-neutral-dark/80 to-neutral-dark" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
            Kamal Industries · Amarpura, Ramganjmandi
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-white mb-6">
            Official Factory Gallery
          </h1>
          <div className="w-14 h-[2px] bg-stone-gold mx-auto mb-6" />
          <p className="text-stone-300 text-sm font-light max-w-xl mx-auto leading-relaxed">
            Authentic photographs of our 15-acre stone processing campus, machinery, quarry stock yards, tile packing lines, and workers.
          </p>
        </div>
      </div>

      {/* ── FILTER TABS ── */}
      <div className="sticky top-[72px] z-30 bg-neutral-dark/95 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-sans font-bold tracking-widest uppercase px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-stone-gold text-neutral-dark border-stone-gold shadow-md"
                    : "bg-white/5 text-stone-300 border-white/10 hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-[10px] text-stone-400 font-sans">
            Showing <strong className="text-stone-gold">{filteredImages.length}</strong> photos
          </span>
        </div>
      </div>

      {/* ── GALLERY GRID ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.src}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal border border-white/10 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[9px] font-bold uppercase tracking-widest text-stone-gold font-sans block mb-1">
                  {img.category}
                </span>
                <h3 className="font-serif text-base font-light text-white leading-snug">{img.title}</h3>
                <div className="mt-3 flex items-center gap-1.5 text-stone-300 text-[10px] font-sans uppercase font-bold tracking-wider">
                  <ZoomIn size={12} className="text-stone-gold" /> Click to enlarge
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-3 rounded-full z-10"
          >
            <X size={24} />
          </button>
          <button
            onClick={() => setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length)}
            className="absolute left-6 text-white/70 hover:text-white bg-white/10 p-3 rounded-full z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredImages.length)}
            className="absolute right-6 text-white/70 hover:text-white bg-white/10 p-3 rounded-full z-10"
          >
            <ChevronRight size={24} />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-[75vh]">
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-gold font-sans block mb-1">
                {filteredImages[lightboxIndex].category}
              </span>
              <h4 className="font-serif text-lg text-white font-light">
                {filteredImages[lightboxIndex].title}
              </h4>
              <span className="text-stone-400 text-xs font-sans mt-1 block">
                Photo {lightboxIndex + 1} of {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
