"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: "Factory" | "Office" | "Products" | "Workers" | "Stone Cutting" | "Packing" | "Loading";
  label: string;
}

// ─── ALL 62+ REAL FACTORY PHOTOS CATEGORIZED ACCORDING TO USER GROUPS ───
const allImages: GalleryImage[] = [
  // Factory
  { src: "/hero-1.jpeg",         alt: "Kamal Industries stone processing yard — Amarpura, Ramganjmandi", category: "Factory", label: "Stone Processing Yard" },
  { src: "/hero-2.jpeg",         alt: "Large stone yard at Kamal Industries factory campus", category: "Factory", label: "Factory Campus" },
  { src: "/hero-3.jpeg",         alt: "Overhead view of Kamal Industries factory yard", category: "Factory", label: "Overhead Factory View" },
  { src: "/factory-yard-1.jpeg", alt: "Kamal Industries 15-acre factory yard — Amarpura", category: "Factory", label: "15-Acre Factory Yard" },
  { src: "/factory-yard-2.jpeg", alt: "Wide angle view of Kamal Industries factory campus", category: "Factory", label: "Factory Campus Wide" },
  { src: "/factory-yard-3.jpeg", alt: "Stone stock yard ready for dispatch at Kamal Industries", category: "Factory", label: "Dispatch Ready Stock" },
  { src: "/ke-signage.jpeg",     alt: "Kamal Enterprises export division signboard", category: "Factory", label: "Export Division Signboard" },
  { src: "/00.jpeg",             alt: "Factory exterior view at Kamal Industries", category: "Factory", label: "Factory Exterior" },
  { src: "/000.jpeg",            alt: "Stone yard overview at Kamal Industries", category: "Factory", label: "Stone Yard Overview" },
  { src: "/stock-yard-1.jpeg",  alt: "Organised stone inventory at Kamal Industries stock yard", category: "Factory", label: "Organised Inventory" },
  { src: "/stock-yard-2.jpeg",  alt: "Large stone stock at Kamal Industries warehouse", category: "Factory", label: "Stone Stock Area" },
  { src: "/1111.jpeg",          alt: "Warehouse storage of Kota Stone at Kamal Industries", category: "Factory", label: "Warehouse Storage" },
  { src: "/11111.jpeg",         alt: "Stock yard view at Kamal Industries", category: "Factory", label: "Stock Yard View" },
  { src: "/1111111.jpeg",       alt: "Stone inventory management at Kamal Industries", category: "Factory", label: "Inventory Management" },
  { src: "/8.jpeg",             alt: "Stone storage area at Kamal Industries", category: "Factory", label: "Storage Area" },
  { src: "/9.jpeg",             alt: "Warehouse operations at Kamal Industries", category: "Factory", label: "Warehouse Operations" },

  // Office
  { src: "/02.jpeg",             alt: "Kamal Industries main office building facade", category: "Office", label: "Main Office Facade" },
  { src: "/ki-signage.jpeg",     alt: "Kamal Industries company signboard at factory entrance", category: "Office", label: "Company Signboard" },

  // Products
  { src: "/kota-blue-1.jpeg",  alt: "Premium Kota Blue Stone slabs stacked at Kamal Industries", category: "Products", label: "Kota Blue Stone Slabs" },
  { src: "/kota-blue-2.jpeg",  alt: "Kota Blue Stone quality batch inspection", category: "Products", label: "Kota Blue Quality Batch" },
  { src: "/kota-blue-3.jpeg",  alt: "Close-up of Kota Blue Stone texture and colour", category: "Products", label: "Kota Blue Texture" },
  { src: "/kota-stone-1.jpeg", alt: "Kota Brown Stone flooring slabs at factory", category: "Products", label: "Kota Brown Flooring" },
  { src: "/kota-stone-2.jpeg", alt: "Large Kota Stone slabs for outdoor paving", category: "Products", label: "Large Format Slabs" },
  { src: "/kota-stone-3.jpeg", alt: "Calibrated Kota Stone ready for dispatch", category: "Products", label: "Calibrated Stone" },
  { src: "/kota-slab-1.jpeg",  alt: "Kota Stone wall cladding panels at Kamal Industries", category: "Products", label: "Wall Cladding Panels" },
  { src: "/kota-slab-2.jpeg",  alt: "Export-ready large format Kota Stone slabs", category: "Products", label: "Export Ready Slabs" },
  { src: "/kota-slab-3.jpeg",  alt: "Premium grade Kota Stone slabs stack", category: "Products", label: "Premium Grade Slabs" },
  { src: "/444.jpeg",          alt: "Kota Stone varieties at Kamal Industries", category: "Products", label: "Stone Varieties" },
  { src: "/555.jpeg",          alt: "Natural stone textures from Kamal Industries", category: "Products", label: "Natural Stone Textures" },
  { src: "/666.jpeg",          alt: "Finished stone slabs ready for delivery", category: "Products", label: "Finished Slabs" },

  // Workers
  { src: "/workers-loading-1.jpeg", alt: "Skilled workers loading Kota Stone at Kamal Industries", category: "Workers", label: "Loading Operation Team" },
  { src: "/workers-loading-2.jpeg", alt: "Workers handling Kota Stone slabs at factory", category: "Workers", label: "Stone Handling" },
  { src: "/workers-loading-3.jpeg", alt: "Team of workers at Kamal Industries factory", category: "Workers", label: "Factory Workforce" },
  { src: "/231.jpeg",               alt: "Workers at Kamal Industries stone factory", category: "Workers", label: "Workers at Factory" },
  { src: "/45263.jpeg",             alt: "Stone processing team at Kamal Industries", category: "Workers", label: "Processing Team" },

  // Stone Cutting
  { src: "/cutting-machine-1.jpeg", alt: "Diamond-blade gang saw cutting Kota Stone at Kamal Industries", category: "Stone Cutting", label: "Diamond-Blade Gang Saw" },
  { src: "/cutting-machine-2.jpeg", alt: "Stone finishing and calibration machine at Kamal Industries", category: "Stone Cutting", label: "Calibration Machine" },
  { src: "/cutting-machine-3.jpeg", alt: "Worker operating CNC stone cutting machine", category: "Stone Cutting", label: "CNC Cutting Machine" },
  { src: "/1.jpeg",                 alt: "Stone cutting equipment at Kamal Industries", category: "Stone Cutting", label: "Cutting Equipment" },
  { src: "/22.jpeg",                alt: "Processing machinery at Kamal Industries factory", category: "Stone Cutting", label: "Processing Machinery" },
  { src: "/33.jpeg",                alt: "Stone slab cutting machine in operation", category: "Stone Cutting", label: "Slab Cutting Machine" },
  { src: "/44.jpeg",                alt: "Industrial stone processing at Kamal Industries", category: "Stone Cutting", label: "Industrial Processing" },
  { src: "/55.jpeg",                alt: "Factory floor with cutting equipment", category: "Stone Cutting", label: "Factory Floor" },
  { src: "/66.jpeg",   alt: "Stone production area at Kamal Industries", category: "Stone Cutting", label: "Production Area" },
  { src: "/77.jpeg",   alt: "Kota Stone being processed at factory", category: "Stone Cutting", label: "Stone Processing" },
  { src: "/88.jpeg",   alt: "Production line at Kamal Industries factory", category: "Stone Cutting", label: "Production Line" },
  { src: "/99.jpeg",   alt: "Active production at Kamal Industries", category: "Stone Cutting", label: "Active Production" },
  { src: "/111.jpeg",  alt: "Stone slab production at Kamal Industries", category: "Stone Cutting", label: "Slab Production" },
  { src: "/222.jpeg",  alt: "Processing yard during active production", category: "Stone Cutting", label: "Processing Yard" },
  { src: "/333.jpeg",  alt: "Factory production overview at Kamal Industries", category: "Stone Cutting", label: "Production Overview" },
  { src: "/4.jpeg",    alt: "Stone cutting in progress at Kamal Industries", category: "Stone Cutting", label: "Cutting in Progress" },
  { src: "/5.jpeg",    alt: "Raw block processing at Kamal Industries", category: "Stone Cutting", label: "Block Processing" },
  { src: "/6.jpeg",    alt: "Stone manufacturing at Kamal Industries factory", category: "Stone Cutting", label: "Manufacturing" },
  { src: "/7.jpeg",    alt: "Production details at Kamal Industries", category: "Stone Cutting", label: "Production Detail" },

  // Packing
  { src: "/34324.jpeg",         alt: "Stone packing operations at Kamal Industries", category: "Packing", label: "Packing Operations" },
  { src: "/888.jpeg",           alt: "Stone packing for export at Kamal Industries", category: "Packing", label: "Export Packing" },
  { src: "/8888.jpeg",          alt: "Wooden crate packing for international export", category: "Packing", label: "Wooden Crate Packing" },

  // Loading
  { src: "/steps-1.jpeg",       alt: "Kota Stone step treads stacked at factory", category: "Loading", label: "Step Stone Stock" },
  { src: "/steps-2.jpeg",       alt: "Stone steps ready for delivery at Kamal Industries", category: "Loading", label: "Steps Ready for Delivery" },
  { src: "/steps-3.jpeg",       alt: "Customised stone steps at Kamal Industries", category: "Loading", label: "Custom Step Stone" },
  { src: "/steps-4.jpeg",       alt: "Stair treads being packed at Kamal Industries", category: "Loading", label: "Stair Treads Packing" },
  { src: "/WhatsApp Image 2026-07-04 at 8.42.56 PM.jpeg", alt: "Factory operations at Kamal Industries", category: "Loading", label: "Factory Operations" },
  { src: "/WhatsApp Image 2026-07-04 at 8.42.57 PM.jpeg", alt: "Stone dispatch operations at Kamal Industries", category: "Loading", label: "Dispatch Operations" },
];

const CATEGORIES = ["All", "Factory", "Office", "Products", "Workers", "Stone Cutting", "Packing", "Loading"];

// ─── LIGHTBOX ───
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
  onSelectIndex,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (i: number) => void;
}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [prevIndex, setPrevIndex] = useState(index);
  if (index !== prevIndex) {
    setPrevIndex(index);
    setIsZoomed(false);
  }
  const img = images[index];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="lightbox-overlay"
      onClick={onClose}
    >
      {/* Top Bar Actions */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
        <button
          onClick={(e) => { e.stopPropagation(); setIsZoomed(!isZoomed); }}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          title={isZoomed ? "Zoom Out" : "Zoom In"}
        >
          {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
        </button>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Close lightbox"
        >
          <X size={20} />
        </button>
      </div>

      {/* Counter */}
      <div className="absolute top-4 left-4 z-10 bg-white/10 px-3.5 py-1.5 rounded-full">
        <span className="text-white text-xs font-sans font-medium">
          {index + 1} / {images.length}
        </span>
      </div>

      {/* Image Wrap */}
      <div
        className="relative w-full max-w-5xl max-h-[75vh] mx-4 overflow-hidden flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`relative w-full transition-transform duration-300 ${
              isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
            }`}
            style={{ aspectRatio: "16/10" }}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/75 backdrop-blur-sm p-4 text-center z-20">
          <p className="text-white text-sm font-serif font-light">{img.label}</p>
          <p className="text-white/50 text-[10px] font-sans mt-0.5">{img.alt}</p>
        </div>
      </div>

      {/* Nav Controls */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-45"
        aria-label="Previous image"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-45"
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2">
          {images.map((thumb, ti) => {
            // Only show close neighborhood thumbnails for performance
            if (Math.abs(ti - index) > 4) return null;
            return (
              <button
                key={ti}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectIndex(ti);
                }}
                className={`relative w-14 h-10 rounded overflow-hidden flex-shrink-0 border-2 transition-all ${
                  ti === index ? "border-stone-gold scale-105" : "border-white/20"
                }`}
              >
                <Image src={thumb.src} alt={thumb.alt} fill className="object-cover" sizes="56px" />
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// ─── GALLERY CARD ───
function GalleryCard({
  img,
  index,
  onOpen,
}: {
  img: GalleryImage;
  index: number;
  onOpen: (i: number) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="masonry-item relative rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(index)}
    >
      <div className="relative w-full img-zoom-container">
        <Image
          src={img.src}
          alt={img.alt}
          width={500}
          height={350}
          loading="lazy"
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`} />

      {/* Category Tag */}
      <div className="absolute top-2 left-2">
        <span className="bg-stone-gold/90 text-neutral-dark text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full font-sans">
          {img.category}
        </span>
      </div>

      {/* Zoom indicator */}
      <div className={`absolute top-2 right-2 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
        <ZoomIn size={13} className="text-white" />
      </div>

      {/* Caption text */}
      <div className={`absolute bottom-0 left-0 right-0 p-3.5 transition-all duration-300 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
        <p className="text-white text-xs font-serif font-light">{img.label}</p>
      </div>
    </div>
  );
}

// ─── MAIN GALLERY PAGE ───
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? allImages
    : allImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((i: number) => {
    setLightboxIdx(i);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIdx(null);
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIdx((i) => (i === null ? null : (i === 0 ? filtered.length - 1 : i - 1)));
  }, [filtered.length]);

  const nextImage = useCallback(() => {
    setLightboxIdx((i) => (i === null ? null : (i === filtered.length - 1 ? 0 : i + 1)));
  }, [filtered.length]);

  const selectIndex = useCallback((i: number) => {
    setLightboxIdx(i);
  }, []);

  // Compute counts
  const categoryCounts: Record<string, number> = { All: allImages.length };
  allImages.forEach((img) => {
    categoryCounts[img.category] = (categoryCounts[img.category] || 0) + 1;
  });

  return (
    <div className="min-h-screen bg-charcoal">

      {/* ── HEADER ── */}
      <div className="pt-20 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero-1.jpeg" alt="Kamal Industries factory gallery background" fill priority className="object-cover opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
            Kamal Industries · Amarpura, Ramganjmandi
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-white mb-6">
            Factory Gallery
          </h1>
          <div className="w-14 h-[2px] bg-stone-gold mx-auto mb-6" />
          <p className="text-white/60 text-sm font-light max-w-lg mx-auto leading-relaxed">
            Every photograph is from our actual factory at Amarpura, Ramganjmandi.
            No stock photos. No AI images. 100% authentic factory documentation.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/40 text-xs font-sans">{allImages.length} Real Factory Photos</span>
          </div>
        </div>
      </div>

      {/* ── STICKY TABS ── */}
      <div className="sticky top-[72px] md:top-[84px] z-30 bg-charcoal/95 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest font-sans transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-stone-gold text-neutral-dark animate-scale-in"
                    : "bg-white/8 text-white/60 hover:bg-white/15 hover:text-white"
                }`}
              >
                {cat}
                <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-sans ${
                  activeCategory === cat ? "bg-neutral-dark/20" : "bg-white/10"
                }`}>
                  {categoryCounts[cat] || 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MASONRY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="masonry-grid"
          >
            {filtered.map((img, i) => (
              <GalleryCard key={img.src + i} img={img} index={i} onOpen={openLightbox} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/30 font-sans">
            No photos in this category yet.
          </div>
        )}

        {/* Pagination indicator */}
        <div className="text-center mt-8 text-white/30 text-xs font-sans">
          Showing {filtered.length} of {allImages.length} photos
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox
            images={filtered}
            index={lightboxIdx}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
            onSelectIndex={selectIndex}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
