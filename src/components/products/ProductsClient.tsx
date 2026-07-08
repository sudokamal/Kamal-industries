"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronRight, Layers, Ruler, Sparkles } from "lucide-react";
import { PRODUCTS, CATEGORIES, type Product, type Category } from "@/data/products";

function ProductCard({ product }: { product: Product }) {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35 }}
      className="group bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col hover:shadow-lg hover:border-gray-200 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 flex-shrink-0">
        <Image
          src={product.images[imgIndex]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Thumbnail strip */}
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-3 flex gap-1.5">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className={`w-8 h-8 rounded-sm overflow-hidden border-2 transition-all ${
                  i === imgIndex ? "border-white scale-110" : "border-white/40 hover:border-white/80"
                }`}
              >
                <Image src={img} alt="" width={32} height={32} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        )}
        {/* In-stock badge */}
        {product.inStock && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[9px] tracking-widest font-bold uppercase text-primary px-2.5 py-1 rounded-full border border-primary/20">
            In Stock
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="mb-4">
          <span className="text-[9px] tracking-[0.3em] font-bold uppercase text-stone-gold font-sans block mb-1">
            {CATEGORIES.find((c) => c.id === product.category)?.label}
          </span>
          <h3 className="font-serif text-xl font-medium text-neutral-dark leading-snug mb-1">
            {product.name}
          </h3>
          <p className="text-gray-400 text-[11px] font-light italic">{product.tagline}</p>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-xs font-light leading-relaxed mb-5 line-clamp-3">
          {product.description}
        </p>

        {/* Spec Pills */}
        <div className="space-y-3 mb-6">
          {/* Finishes */}
          <div className="flex gap-2 flex-wrap items-center">
            <Sparkles size={12} className="text-stone-gold shrink-0" />
            <div className="flex flex-wrap gap-1.5">
              {product.finishes.map((f) => (
                <span
                  key={f}
                  className="text-[10px] bg-neutral-light text-gray-600 font-sans px-2.5 py-1 rounded-full border border-gray-100"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
          {/* Thickness */}
          <div className="flex gap-2 items-center">
            <Ruler size={12} className="text-stone-gold shrink-0" />
            <span className="text-[10px] text-gray-500 font-sans">
              {product.thickness.slice(0, 3).join(" · ")}
              {product.thickness.length > 3 ? " · ..." : ""}
            </span>
          </div>
          {/* Applications */}
          <div className="flex gap-2 items-start">
            <Layers size={12} className="text-stone-gold shrink-0 mt-0.5" />
            <span className="text-[10px] text-gray-500 font-sans leading-relaxed">
              {product.applications.slice(0, 3).join(", ")}
              {product.applications.length > 3 ? ` +${product.applications.length - 3} more` : ""}
            </span>
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-6 p-3 bg-neutral-light/50 rounded-sm border border-gray-100">
          <span className="text-[9px] tracking-widest font-bold uppercase text-gray-400 font-sans block mb-2">
            Available Sizes
          </span>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.slice(0, 4).map((s) => (
              <span
                key={s}
                className="text-[10px] font-sans text-primary bg-white border border-primary/20 px-2 py-0.5 rounded"
              >
                {s}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span className="text-[10px] font-sans text-gray-400 px-2 py-0.5">
                +{product.sizes.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto flex gap-3">
          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            className="flex-1 text-center bg-primary text-white text-[11px] font-semibold tracking-widest uppercase py-3 px-4 rounded-sm hover:bg-primary/90 transition-colors font-sans"
          >
            Enquire Now
          </Link>
          <Link
            href={`/products/${product.id}`}
            className="flex items-center gap-1 border border-gray-200 text-gray-600 text-[11px] font-semibold tracking-widest uppercase py-3 px-4 rounded-sm hover:border-gray-300 transition-colors font-sans whitespace-nowrap"
          >
            Details <ChevronRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory = activeCategory === "all" || p.categories.includes(activeCategory as Category);
      const q = search.toLowerCase().trim();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.applications.some((a) => a.toLowerCase().includes(q)) ||
        p.finishes.some((f) => f.toLowerCase().includes(q));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div>
      {/* ── Filter Bar ── */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as Category | "all")}
                  className={`text-[10px] font-sans font-bold tracking-widest uppercase px-4 py-2 rounded-full border transition-all duration-200 whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex-shrink-0 w-full sm:w-auto">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-56 pl-9 pr-8 py-2.5 text-xs font-sans border border-gray-200 rounded-full focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 text-gray-700 placeholder:text-gray-400 bg-white"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-[10px] text-gray-400 font-sans">
              Showing <strong className="text-primary">{filtered.length}</strong> of {PRODUCTS.length} products
            </span>
            {(search || activeCategory !== "all") && (
              <button
                onClick={() => { setSearch(""); setActiveCategory("all"); }}
                className="text-[10px] text-stone-gold font-bold uppercase tracking-widest hover:underline font-sans"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <Search size={40} className="text-gray-200 mx-auto mb-4" />
            <p className="font-serif text-2xl text-gray-300 font-light mb-2">No products found</p>
            <p className="text-gray-400 text-sm font-light">Try adjusting your filters or search term</p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
