"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Ruler, Layers } from "lucide-react";

export interface ProductSpec {
  label: string;
  value: string;
}

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  imageSrc: string;
  imageAlt?: string;
  specs?: ProductSpec[];
  description?: string;
  href: string;
}

export default function ProductCard({
  name,
  category,
  imageSrc,
  imageAlt = "Natural Stone",
  specs = [],
  description,
  href,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group bg-white border border-gray-100 hover:border-gray-200 rounded-sm overflow-hidden flex flex-col justify-between h-full shadow-sm hover:shadow-lg transition-all duration-500"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-neutral-light">
        {/* Stone Image */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-w-7xl) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle category tag */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3.5 py-1 text-[9px] font-sans tracking-[0.2em] uppercase font-bold text-primary shadow-sm border border-marble">
          {category}
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-serif text-xl md:text-2xl font-light text-neutral-dark group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <Link
              href={href}
              className="w-8 h-8 rounded-full border border-gray-100 group-hover:border-primary flex items-center justify-center text-gray-400 group-hover:text-primary transition-all duration-300"
              aria-label={`View details of ${name}`}
            >
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {description && (
            <p className="text-gray-500 text-xs font-light leading-relaxed mb-6">
              {description}
            </p>
          )}

          {/* Specifications list */}
          {specs.length > 0 && (
            <div className="grid grid-cols-1 gap-3 py-4 border-t border-b border-gray-50 mb-6">
              {specs.map((spec, index) => (
                <div key={index} className="flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-light flex items-center gap-1.5">
                    {index === 0 && <Layers size={13} className="text-stone-gold" />}
                    {index === 1 && <Ruler size={13} className="text-stone-gold" />}
                    {index === 2 && <ShieldCheck size={13} className="text-stone-gold" />}
                    {spec.label}
                  </span>
                  <span className="text-gray-700 font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <Link
            href={href}
            className="flex-1 text-center py-3 border border-gray-100 hover:border-primary text-[10px] font-semibold tracking-widest uppercase transition-colors duration-300 text-gray-500 hover:text-primary rounded-sm"
          >
            Technical Details
          </Link>
          <Link
            href={`/contact?inquiry=${encodeURIComponent(name)}`}
            className="flex-1 text-center py-3 bg-primary text-white text-[10px] font-semibold tracking-widest uppercase hover:bg-primary-dark transition-all duration-300 rounded-sm shadow-sm"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
