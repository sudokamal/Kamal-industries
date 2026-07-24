"use client";

import React from "react";
import { Award, Clock, Gem, Map, Package, Truck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Icon3D from "@/components/ui/Icon3D";

interface TrustItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badgeText?: string;
  variant: "gold" | "emerald" | "blue" | "amber" | "charcoal" | "white";
}

const trustItems: TrustItem[] = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Manufacturer Since 1985",
    desc: "Legacy of direct stone extraction and processing from our state-of-the-art Ramganjmandi factory yard.",
    badgeText: "ESTD 1985",
    variant: "gold",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "40+ Years Experience",
    desc: "Four decades of refined workmanship, serving structural engineers, architects, and major developers.",
    badgeText: "4 DECADES",
    variant: "amber",
  },
  {
    icon: <Gem className="w-6 h-6" />,
    title: "Premium Quality Stone",
    desc: "Sourced strictly from premium quarry layers. Calibrated to ±1mm tolerance and verified by multi-stage inspection.",
    badgeText: "PREMIUM GRADE",
    variant: "blue",
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Trusted Across India",
    desc: "Preferred direct manufacturer for residential, commercial, and heritage landmark projects nationwide.",
    badgeText: "PAN-INDIA",
    variant: "emerald",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Safe Packaging",
    desc: "Reinforced wooden pallets, heavy-duty strapping, and shockproof padding guarantee zero-breakage transport.",
    badgeText: "SECURE SHIP",
    variant: "gold",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Fast Delivery",
    desc: "Efficient fleet logistics and prompt dispatch protocols ensuring project timelines are met consistently.",
    badgeText: "ON-TIME",
    variant: "amber",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-3 block font-sans">
            Uncompromising Standards
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight mb-6">
            The Pillars of Kamal Industries
          </h2>
          <div className="w-16 h-[2px] bg-stone-gold mx-auto mb-6" />
          <p className="text-stone-300 font-light text-sm md:text-base leading-relaxed">
            Built on a legacy of excellence, precision calibration, and unwavering dedication to project success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 100}>
              <div className="group relative bg-dark/60 rounded-3xl p-8 border border-white/10 hover:border-stone-gold/40 shadow-xl transition-all duration-300 h-full flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-stone-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Icon3D variant={item.variant} size="md">
                      {item.icon}
                    </Icon3D>
                    {item.badgeText && (
                      <span className="text-[9px] font-sans font-bold tracking-widest uppercase bg-white/5 text-stone-gold border border-stone-gold/20 px-3 py-1 rounded-full">
                        {item.badgeText}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-medium text-white mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-stone-400 text-xs font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-sans text-stone-gold font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  Verified Capability &rarr;
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
