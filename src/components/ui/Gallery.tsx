"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  location?: string;
  finish?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  categories: string[];
}

export default function Gallery({ items, categories }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter(
          (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const openLightbox = (id: string) => {
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      setActiveImageIndex(index);
    }
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % items.length);
    }
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === 0 ? items.length - 1 : activeImageIndex - 1
      );
    }
  };

  return (
    <div className="font-sans w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 border rounded-sm cursor-pointer ${
              selectedCategory === category
                ? "bg-primary border-primary text-white"
                : "bg-white border-gray-100 hover:border-gray-300 text-gray-500 hover:text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="group relative aspect-4/3 overflow-hidden rounded-sm bg-neutral-light cursor-pointer shadow-sm hover:shadow-md border border-gray-50"
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                sizes="(max-w-7xl) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-neutral-dark/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center border border-white/20">
                    <Maximize2 size={16} />
                  </div>
                </div>

                <div className="text-white transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] tracking-widest text-stone-gold uppercase font-bold">
                    {item.finish || item.category}
                  </span>
                  <h3 className="font-serif text-xl font-light mt-1">
                    {item.title}
                  </h3>
                  {item.location && (
                    <p className="text-gray-300 text-xs font-light mt-1">
                      {item.location}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white focus:outline-none p-1 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            <button
              onClick={showPrevImage}
              className="absolute left-6 text-white/50 hover:text-white focus:outline-none p-2 cursor-pointer bg-white/5 rounded-full hover:bg-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={showNextImage}
              className="absolute right-6 text-white/50 hover:text-white focus:outline-none p-2 cursor-pointer bg-white/5 rounded-full hover:bg-white/10"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            <div
              className="relative max-w-5xl w-full h-[75vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-h-[85%]">
                <Image
                  src={items[activeImageIndex].imageSrc}
                  alt={items[activeImageIndex].title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Lightbox Caption */}
              <div className="text-center mt-6 text-white space-y-1">
                <span className="text-[10px] tracking-widest text-stone-gold uppercase font-bold">
                  {items[activeImageIndex].finish || items[activeImageIndex].category}
                </span>
                <h4 className="font-serif text-2xl font-light">
                  {items[activeImageIndex].title}
                </h4>
                {items[activeImageIndex].location && (
                  <p className="text-gray-400 text-xs font-light">
                    {items[activeImageIndex].location}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
