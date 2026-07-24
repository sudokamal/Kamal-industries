"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Factory, MapPin } from "lucide-react";
import Icon3D from "@/components/ui/Icon3D";

export default function CompanyProfile() {
  return (
    <section id="company-profile" className="overflow-hidden bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 1. ABOUT KAMAL INDUSTRIES ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold block font-sans">
              About Kamal Industries
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-dark leading-tight">
              Direct Manufacturer & Exporter of <br />
              <span className="italic text-stone-gold">Authentic Kota Stone Since 1985</span>
            </h2>
            <div className="w-16 h-[2px] bg-stone-gold" />
            <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
              Established over three decades ago in the heart of Rajasthan’s limestone belt,
              Kamal Industries (along with export wing Kamal Enterprises) is a leading manufacturer,
              wholesaler, and international exporter of Kota Blue Stone, Kota Brown Stone, Mandana Red Stone,
              and custom architectural stone elements.
            </p>
            <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
              Operating from our 15-acre production campus at Amarpura, Ramganjmandi, we combine state-of-the-art
              gang saw cutting machinery, diamond calibration lines, and multi-generational stone craftsman expertise
              to deliver precision stone products for commercial developments, residential villas, and infrastructure projects pan-India and globally.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-7 py-4 rounded-xl hover:bg-primary-dark transition-colors font-sans shadow-md"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image src="/Office.jpeg" alt="Kamal Industries Office" fill className="object-cover" sizes="300px" />
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image src="/workers-loading-1.jpeg" alt="Workers handling Kota Stone" fill className="object-cover" sizes="300px" />
              </div>
              <div className="bg-neutral-dark text-white p-6 rounded-2xl shadow-lg border border-white/10">
                <span className="font-serif text-3xl font-light text-stone-gold block">1985</span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-gray-400 font-sans block mt-1">Year Founded</span>
                <p className="text-gray-300 text-xs font-light mt-2">Ramganjmandi, Kota, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. CORE VALUES / STATS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-neutral-light/50 p-8 rounded-2xl border border-gray-100 text-center group hover:shadow-xl transition-all">
            <div className="mb-6 flex justify-center">
              <Icon3D variant="gold" size="lg">
                <Award size={28} />
              </Icon3D>
            </div>
            <span className="font-serif text-3xl font-light text-neutral-dark block mb-2">35+ Years</span>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-gold font-sans block mb-2">Manufacturing Heritage</span>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Established track record of quality, reliability, and precision natural stone processing since 1985.
            </p>
          </div>

          <div className="bg-neutral-light/50 p-8 rounded-2xl border border-gray-100 text-center group hover:shadow-xl transition-all">
            <div className="mb-6 flex justify-center">
              <Icon3D variant="emerald" size="lg">
                <Factory size={28} />
              </Icon3D>
            </div>
            <span className="font-serif text-3xl font-light text-neutral-dark block mb-2">15 Acres</span>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-gold font-sans block mb-2">Factory Campus</span>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Extensive processing yard equipped with CNC cutters, multi-blade saws, and automated calibration lines.
            </p>
          </div>

          <div className="bg-neutral-light/50 p-8 rounded-2xl border border-gray-100 text-center group hover:shadow-xl transition-all">
            <div className="mb-6 flex justify-center">
              <Icon3D variant="blue" size="lg">
                <ShieldCheck size={28} />
              </Icon3D>
            </div>
            <span className="font-serif text-3xl font-light text-neutral-dark block mb-2">±1mm</span>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-gold font-sans block mb-2">Calibration Tolerance</span>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Machine-calibrated tiles and slabs ensuring uniform thickness for seamless architectural installation.
            </p>
          </div>

          <div className="bg-neutral-light/50 p-8 rounded-2xl border border-gray-100 text-center group hover:shadow-xl transition-all">
            <div className="mb-6 flex justify-center">
              <Icon3D variant="amber" size="lg">
                <MapPin size={28} />
              </Icon3D>
            </div>
            <span className="font-serif text-3xl font-light text-neutral-dark block mb-2">Global</span>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-gold font-sans block mb-2">Pan-India & Export</span>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Direct factory supply to major Indian cities and international container shipments in seaworthy packing.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
