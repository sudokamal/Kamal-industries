"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Layers, Ruler, Sparkles } from "lucide-react";
import { type Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured }: ProductCardProps) {
  return (
    <div
      className={`group bg-white rounded-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg hover:border-gray-200 transition-all duration-300 p-6 ${
        featured ? "md:col-span-2 md:flex-row gap-6" : ""
      }`}
    >
      <div className="flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-stone-gold font-sans block">
              {product.category}
            </span>
            {product.inStock && (
              <span className="bg-primary/10 text-primary text-[9px] tracking-widest font-bold uppercase px-2.5 py-1 rounded-full border border-primary/20 font-sans">
                In Stock
              </span>
            )}
          </div>
          <h3 className="font-serif text-2xl font-medium text-neutral-dark leading-snug mb-1">
            {product.name}
          </h3>
          <p className="text-gray-400 text-xs font-light italic mb-3">{product.tagline}</p>
          <p className="text-gray-600 text-xs font-light leading-relaxed mb-6">
            {product.description}
          </p>
        </div>

        {/* Spec Pills */}
        <div className="space-y-3 mb-6">
          <div className="flex gap-2 flex-wrap items-center">
            <Sparkles size={14} className="text-stone-gold shrink-0" />
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
          <div className="flex gap-2 items-center">
            <Ruler size={14} className="text-stone-gold shrink-0" />
            <span className="text-[11px] text-gray-500 font-sans">
              {product.thickness.join(" · ")}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-3 pt-4 border-t border-gray-100">
          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            className="flex-1 text-center bg-primary text-white text-[11px] font-semibold tracking-widest uppercase py-3 px-4 rounded hover:bg-primary/90 transition-colors font-sans"
          >
            Enquire Now
          </Link>
          <Link
            href={`/products/${product.id}`}
            className="flex items-center gap-1 border border-gray-200 text-gray-600 text-[11px] font-semibold tracking-widest uppercase py-3 px-4 rounded hover:border-gray-300 transition-colors font-sans whitespace-nowrap"
          >
            Details <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
