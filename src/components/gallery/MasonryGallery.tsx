"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Camera,
} from "lucide-react";

// ─── TYPES ────────────────────────────────────────────────────────────────

export type GalleryCategory =
  | "All"
  | "Factory Overview"
  | "Stone Cutting"
  | "Workers"
  | "Production"
  | "Finished Products"
  | "Loading & Packing";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** "portrait" = tall image, "landscape" = wide, "square" = roughly square */
  orientation: "portrait" | "landscape" | "square";
}

interface Props {
  photos: GalleryPhoto[];
  categories: GalleryCategory[];
}

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────

function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: GalleryPhoto[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[index];

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-black/97 flex flex-col"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-6 py-4 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-stone-gold font-sans block">
            {photo.category}
          </span>
          <span className="text-white/70 text-xs font-light font-sans mt-0.5 block">
            {index + 1} / {photos.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all"
          aria-label="Close lightbox"
        >
          <X size={18} />
        </button>
      </div>

      {/* Image area */}
      <div className="flex-1 relative flex items-center justify-center px-16 overflow-hidden">
        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 z-10 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all"
          aria-label="Previous photo"
        >
          <ChevronLeft size={22} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="relative w-full h-full max-w-5xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 z-10 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all"
          aria-label="Next photo"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Caption */}
      <div
        className="shrink-0 text-center py-5 px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-white/80 text-sm font-light font-sans max-w-lg mx-auto">
          {photo.caption}
        </p>
        <p className="text-white/30 text-[10px] font-sans tracking-widest uppercase mt-1">
          Kamal Industries · Amarpura, Ramganjmandi
        </p>
      </div>

      {/* Thumbnail strip */}
      <div
        className="shrink-0 px-6 pb-5 overflow-x-auto scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2 justify-center min-w-max mx-auto">
          {photos.map((p, i) => (
            <button
              key={p.id}
              onClick={() => {
                /* handled by parent */ 
              }}
              className={`relative w-12 h-12 rounded overflow-hidden border-2 shrink-0 transition-all ${
                i === index
                  ? "border-stone-gold scale-110"
                  : "border-white/10 opacity-50 hover:opacity-80 hover:border-white/30"
              }`}
            >
              <Image src={p.src} alt="" fill className="object-cover" sizes="48px" />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── MASONRY GALLERY ───────────────────────────────────────────────────────

export default function MasonryGallery({ photos, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [columns, setColumns] = useState(3);

  // Responsive columns
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else setColumns(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const filtered = activeCategory === "All"
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  // Distribute into columns (top-down fill for masonry effect)
  const cols: GalleryPhoto[][] = Array.from({ length: columns }, () => []);
  filtered.forEach((photo, i) => {
    cols[i % columns].push(photo);
  });

  const openLightbox = (photo: GalleryPhoto) => {
    const idx = filtered.findIndex((p) => p.id === photo.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  };
  const goNext = () => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  };

  const categoryCounts = categories.reduce<Record<string, number>>((acc, cat) => {
    acc[cat] = photos.filter((p) => p.category === cat).length;
    return acc;
  }, {});

  return (
    <div>
      {/* ── Category Filter Bar ── */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 items-center justify-between">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("All")}
                className={`text-[10px] font-sans font-bold tracking-widest uppercase px-4 py-2 rounded-full border transition-all duration-200 whitespace-nowrap ${
                  activeCategory === "All"
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                }`}
              >
                All Photos
                <span className="ml-1.5 opacity-60">({photos.length})</span>
              </button>

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] font-sans font-bold tracking-widest uppercase px-4 py-2 rounded-full border transition-all duration-200 whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {cat}
                  <span className="ml-1.5 opacity-60">({categoryCounts[cat] ?? 0})</span>
                </button>
              ))}
            </div>

            {/* Count */}
            <div className="flex items-center gap-2 text-[10px] text-gray-400 font-sans">
              <Camera size={12} className="text-stone-gold" />
              <span>
                <strong className="text-primary">{filtered.length}</strong> photos
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Masonry Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-4"
          >
            {cols.map((col, colIdx) => (
              <div key={colIdx} className="flex-1 flex flex-col gap-4">
                {col.map((photo) => (
                  <motion.button
                    key={photo.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.04 * (colIdx) }}
                    onClick={() => openLightbox(photo)}
                    aria-label={`View larger version of ${photo.caption}`}
                    className="group relative overflow-hidden rounded-sm bg-gray-100 cursor-zoom-in block w-full border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                    style={{
                      aspectRatio:
                        photo.orientation === "portrait"
                          ? "3/4"
                          : photo.orientation === "square"
                          ? "1/1"
                          : "4/3",
                    }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Zoom icon */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                      <ZoomIn size={14} />
                    </div>

                    {/* Caption on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-[9px] tracking-[0.25em] font-bold uppercase text-stone-gold font-sans block">
                        {photo.category}
                      </span>
                      <span className="font-serif text-sm text-white font-light leading-snug block mt-0.5">
                        {photo.caption}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-32 text-center">
            <Camera size={40} className="text-gray-200 mx-auto mb-4" />
            <p className="font-serif text-2xl text-gray-300 font-light">No photos in this category</p>
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
