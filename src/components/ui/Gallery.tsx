"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

export default function Gallery() {
  return (
    <div className="py-12 text-center bg-surface rounded-xl border border-gray-100 p-8">
      <Layers size={36} className="text-stone-gold mx-auto mb-4" />
      <h3 className="font-serif text-2xl text-neutral-dark font-light mb-2">Technical Specification Directory</h3>
      <p className="text-gray-500 text-xs font-light max-w-md mx-auto mb-6">
        All physical product photos have been removed per your selection. View comprehensive stone specifications and material data sheets.
      </p>
      <Link
        href="/specifications"
        className="inline-flex items-center gap-2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-lg font-sans"
      >
        View Stone Specifications <ArrowRight size={14} />
      </Link>
    </div>
  );
}
