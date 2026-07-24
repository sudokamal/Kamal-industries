"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

export default function MasonryGallery() {
  return (
    <div className="py-16 text-center bg-charcoal text-white rounded-xl border border-white/10 p-8">
      <Layers size={40} className="text-stone-gold mx-auto mb-4" />
      <h3 className="font-serif text-3xl font-light mb-3">Product Specification Directory</h3>
      <p className="text-white/60 text-xs font-light max-w-lg mx-auto mb-8">
        Full directory of Kota Blue Stone, Kota Brown Stone, and Mandana Red Stone specifications, thickness tolerances, and finish grades.
      </p>
      <Link
        href="/products"
        className="inline-flex items-center gap-2 bg-stone-gold text-neutral-dark text-[10px] font-bold uppercase tracking-widest px-8 py-4 rounded-lg font-sans"
      >
        Explore Product Specs <ArrowRight size={14} />
      </Link>
    </div>
  );
}
