"use client";

import React from "react";
import Image from "next/image";
import { Factory, Truck, Ruler } from "lucide-react";
import Icon3D from "@/components/ui/Icon3D";

export default function FactoryOverview() {
  return (
    <section className="py-24 bg-neutral-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-3 block font-sans">
            Manufacturing Excellence
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6">
            15-Acre Stone Processing Campus <br />
            <span className="italic text-stone-gold">Ramganjmandi, Kota, Rajasthan</span>
          </h2>
          <div className="w-16 h-[2px] bg-stone-gold mx-auto mb-6" />
          <p className="text-stone-300 font-light text-sm md:text-base leading-relaxed">
            Equipped with multi-blade gang saws, automated tile calibrators, diamond edge profilers, and seaworthy container packing facilities.
          </p>
        </div>

        {/* Capability Cards with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-charcoal rounded-2xl overflow-hidden border border-white/10 flex flex-col group hover:border-stone-gold/40 transition-all duration-300">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/cutting-machine-1.jpeg"
                alt="Gang Saw & Machine Cutting"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <Icon3D variant="gold" size="md">
                    <Factory size={24} />
                  </Icon3D>
                </div>
                <h3 className="font-serif text-2xl font-light mb-3">Gang Saw & Machine Cutting</h3>
                <p className="text-stone-400 text-xs font-light leading-relaxed">
                  High-speed multi-blade diamond cutting lines producing up to 50,000 sq ft of calibrated Kota Stone per month to exact project specifications.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-charcoal rounded-2xl overflow-hidden border border-white/10 flex flex-col group hover:border-stone-gold/40 transition-all duration-300">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/Quality.jpeg"
                alt="Precision Calibration & Finishes"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <Icon3D variant="blue" size="md">
                    <Ruler size={24} />
                  </Icon3D>
                </div>
                <h3 className="font-serif text-2xl font-light mb-3">Precision Calibration & Finishes</h3>
                <p className="text-stone-400 text-xs font-light leading-relaxed">
                  Calibrated thickness tolerance within ±1mm. Offering natural split, honed, mirror polish, leather finish, and sandblasted slip-resistant surfaces.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-charcoal rounded-2xl overflow-hidden border border-white/10 flex flex-col group hover:border-stone-gold/40 transition-all duration-300">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/Packing.jpeg"
                alt="Seaworthy Crate Packing & Export"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <Icon3D variant="emerald" size="md">
                    <Truck size={24} />
                  </Icon3D>
                </div>
                <h3 className="font-serif text-2xl font-light mb-3">Seaworthy Crate Packing & Export</h3>
                <p className="text-stone-400 text-xs font-light leading-relaxed">
                  Tile-by-tile quality inspection before loading into fumigated wooden crates with plastic wrapping for zero-breakage transport pan-India and overseas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
