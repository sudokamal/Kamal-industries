"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroSlider() {
  return (
    <div
      className="relative w-full overflow-hidden bg-charcoal select-none flex items-center justify-center"
      style={{ height: "calc(100vh - 72px)", minHeight: 600 }}
    >
      {/* ── BACKGROUND IMAGE with Ken Burns animation ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            animation: "kenburns-zoom-in 20s ease-out infinite alternate",
          }}
        >
          <Image
            src="/03.jpeg"
            alt="Kamal Industries Kota Stone Manufacturing Factory Yard"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      {/* ── DARK OVERLAY LAYERS for maximum text readability ── */}
      {/* Primary vignette overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 20%, rgba(15,17,23,0.7) 100%)",
        }}
      />
      {/* Dynamic linear overlay gradient */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(15,17,23,0.95) 0%, rgba(15,17,23,0.55) 45%, rgba(15,17,23,0.3) 70%, rgba(15,17,23,0.6) 100%)",
        }}
      />

      {/* ── HERO CONTENT ── */}
      <div className="relative z-20 max-w-4xl w-full text-center text-white px-4 sm:px-8 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.15em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-[10px] md:text-xs font-sans font-bold uppercase text-stone-gold mb-6 block"
          >
            Kamal Industries · Ramganjmandi, Rajasthan
          </motion.span>

          {/* Headline */}
          <h1
            className="font-serif font-extralight tracking-tight leading-[1.1] mb-6 text-white"
            style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.2rem)" }}
          >
            Premium Kota Stone<br />
            <span className="italic font-normal text-stone-gold">Manufacturer</span>
          </h1>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-stone-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-stone-gold" />
            <div className="h-[1px] w-12 bg-stone-gold/40" />
          </div>

          {/* Subheading */}
          <p className="font-sans text-white/80 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Manufacturing High Quality Kota Blue Stone, Kota Brown Stone, Mandana Stone, Wall Cladding and Custom Cut Stone since 1985.
          </p>

          {/* Factory Credentials */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {[
              { text: "15-Acre Factory Yard" },
              { text: "10,000+ Tons Annual Capacity" },
              { text: "Pan-India & Export Supply" },
            ].map((badge) => (
              <span
                key={badge.text}
                className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest px-4 py-2 rounded-full font-sans"
              >
                <span className="text-stone-gold">✓</span>
                {badge.text}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-stone-gold text-neutral-dark text-[11px] font-bold tracking-widest uppercase px-8 py-4 rounded-xl hover:bg-stone-gold/90 transition-all duration-200 font-sans shadow-lg shadow-black/30"
            >
              Request Quote <ArrowRight size={14} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-glass border border-white/25 text-white text-[11px] font-bold tracking-widest uppercase px-8 py-4 rounded-xl hover:bg-white/15 transition-all duration-200 font-sans"
            >
              Explore Products
            </Link>
            <a
              href="https://wa.me/919214830464?text=Hello%2C%20I%20am%20interested%20in%20a%20quote%20for%20premium%20Kota%20Stone%20from%20Kamal%20Industries."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-[11px] font-bold tracking-widest uppercase px-8 py-4 rounded-xl hover:bg-[#1ebe57] transition-all duration-200 font-sans shadow-lg shadow-black/30"
            >
              <MessageCircle size={14} /> WhatsApp Chat
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── SCROLL DOWN INDICATOR ── */}
      <div className="absolute bottom-8 right-6 md:right-12 z-20 flex flex-col items-center gap-2">
        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 w-full bg-stone-gold rounded-full"
            style={{ height: "40%" }}
            animate={{ y: ["0%", "160%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span
          className="text-white/30 text-[8px] font-sans uppercase tracking-[0.3em]"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
      </div>

      {/* Inline styles for custom Ken Burns keyframes */}
      <style>{`
        @keyframes kenburns-zoom-in {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
}
