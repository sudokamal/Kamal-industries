"use client";

import React from "react";
import { Award, Clock, Gem, Map, Package, Truck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface TrustItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badgeText?: string;
}

const trustItems: TrustItem[] = [
  {
    icon: <Award className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />,
    title: "Manufacturer Since 1985",
    desc: "Legacy of direct stone extraction and processing from our state-of-the-art Ramganjmandi factory yard.",
    badgeText: "ESTD 1985",
  },
  {
    icon: <Clock className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />,
    title: "40+ Years Experience",
    desc: "Four decades of refined workmanship, serving structural engineers, architects, and major developers.",
    badgeText: "4 DECADES",
  },
  {
    icon: <Gem className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />,
    title: "Premium Quality Stone",
    desc: "Sourced strictly from premium quarry layers. Calibrated to ±1mm tolerance and verified by multi-stage inspection.",
    badgeText: "PREMIUM GRADE",
  },
  {
    icon: <Map className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />,
    title: "Trusted Across India",
    desc: "Preferred direct manufacturer for residential, commercial, and heritage landmark projects nationwide.",
    badgeText: "PAN-INDIA",
  },
  {
    icon: <Package className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />,
    title: "Safe Packaging",
    desc: "Reinforced wooden pallets, heavy-duty strapping, and shockproof padding guarantee zero-breakage transport.",
    badgeText: "SECURE SHIP",
  },
  {
    icon: <Truck className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />,
    title: "Fast Delivery",
    desc: "Efficient fleet logistics and prompt dispatch protocols ensuring project timelines are met consistently.",
    badgeText: "ON-TIME",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 md:py-36 bg-charcoal text-white relative overflow-hidden border-y border-white/5">
      {/* Background Decorative Elements */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none filter blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(197, 168, 128, 0.15) 0%, transparent 70%)"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <ScrollReveal delay={50}>
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
              Kamal Industries Standards
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={150}>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-tight">
              A Legacy of Trust &amp; Excellence
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={250}>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-6" />
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p className="text-white/60 text-sm font-light max-w-xl mx-auto mt-5 leading-relaxed">
              For over forty years, Kamal Industries has been synonymous with premium quality Rajasthan stone, 
              direct-factory integrity, and logistical reliability.
            </p>
          </ScrollReveal>
        </div>

        {/* Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={100 + index * 50} className="h-full">
              <div 
                className="group relative h-full bg-dark/40 border border-white/5 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:border-stone-gold/30 hover:bg-dark/60 hover:-translate-y-1 overflow-hidden"
              >
                {/* Radial Glow Highlight */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 10%, rgba(197, 168, 128, 0.08) 0%, transparent 60%)"
                  }}
                />

                {/* Top Badge */}
                {item.badgeText && (
                  <span className="absolute top-6 right-6 text-[8px] tracking-[0.2em] font-bold uppercase text-stone-gold/60 border border-stone-gold/20 px-2 py-0.5 rounded bg-stone-gold/5 font-sans group-hover:text-stone-gold group-hover:border-stone-gold/40 transition-colors duration-300">
                    {item.badgeText}
                  </span>
                )}

                {/* Icon Container */}
                <div className="w-14 h-14 rounded-full bg-stone-gold/10 flex items-center justify-center text-stone-gold border border-stone-gold/20 mb-8 group-hover:bg-stone-gold group-hover:text-neutral-dark group-hover:border-stone-gold transition-all duration-500 shadow-[0_0_20px_rgba(197,168,128,0.05)] group-hover:shadow-[0_0_25px_rgba(197,168,128,0.2)]">
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-light text-white mb-4 tracking-wide group-hover:text-stone-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/50 text-xs font-light leading-relaxed font-sans group-hover:text-white/70 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
