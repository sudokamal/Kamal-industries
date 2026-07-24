"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

interface SlideData {
  id: string;
  image: string;
  tagline: string;
  titleLine1: string;
  titleLine2: string;
  desc: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const slides: SlideData[] = [
  {
    id: "slide-1",
    image: "/HomePage.jpeg",
    tagline: "Kamal Industries · Ramganjmandi, Kota, Rajasthan",
    titleLine1: "Direct Manufacturer of",
    titleLine2: "Kota Blue & Brown Stone",
    desc: "Supplying premium-grade Kota Stone tiles, jumbo slabs, wall cladding, and custom-cut stone directly from our quarrying and processing facility in Ramganjmandi.",
    primaryCtaText: "Explore Products",
    primaryCtaLink: "/products",
    secondaryCtaText: "Contact Sales",
    secondaryCtaLink: "/contact",
  },
  {
    id: "slide-2",
    image: "/HomePage1.jpeg",
    tagline: "Pan-India Supply & International Export",
    titleLine1: "Precision Calibrated Slabs &",
    titleLine2: "Custom Cut Sizing",
    desc: "Machine-calibrated to ±1mm thickness tolerance. Zero lamination, anti-slip natural split, honed, and polished surface finishes for commercial and residential projects.",
    primaryCtaText: "Explore Products",
    primaryCtaLink: "/products",
    secondaryCtaText: "Call Factory",
    secondaryCtaLink: "tel:+919214830464",
  },
  {
    id: "slide-3",
    image: "/HomePage2.jpeg",
    tagline: "35+ Years of Stone Manufacturing Excellence",
    titleLine1: "Mandana Red Stone &",
    titleLine2: "Architectural Cladding",
    desc: "Acid-resistant Mandana Red quartzite and split-face Kota stone cladding panels for building facades, heritage restoration, and landscape paving.",
    primaryCtaText: "Request Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Download Catalogue",
    secondaryCtaLink: "/Kamal_Industries_Kota_Stone_Catalogue.pdf",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[current];

  return (
    <section className="relative bg-neutral-dark text-white min-h-[85vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image Slider */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <Image
            src={s.image}
            alt={s.titleLine2}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark/90 via-neutral-dark/75 to-neutral-dark/90" />
        </div>
      ))}

      {/* Slide Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-stone-gold/20 text-stone-gold border border-stone-gold/40 text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
          {slide.tagline}
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-tight leading-[1.1] mb-6 drop-shadow-md">
          {slide.titleLine1} <br />
          <span className="italic font-normal text-stone-gold">{slide.titleLine2}</span>
        </h1>

        <p className="font-sans text-gray-200 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
          {slide.desc}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={slide.primaryCtaLink}
            className="bg-stone-gold text-neutral-dark text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-stone-gold/90 transition-all font-sans shadow-lg shadow-black/40"
          >
            {slide.primaryCtaText}
          </Link>
          <a
            href={slide.secondaryCtaLink}
            className="border border-white/40 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:border-white/70 transition-all font-sans"
          >
            {slide.secondaryCtaText}
          </a>
        </div>

        {/* Direct Download Catalogue Button */}
        <div className="mt-8">
          <a
            href="/Kamal_Industries_Kota_Stone_Catalogue.pdf"
            download="Kamal_Industries_Kota_Stone_Catalogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-stone-gold text-xs font-bold uppercase tracking-widest hover:underline font-sans"
          >
            <Download size={14} /> Download Official Company Catalogue (PDF)
          </a>
        </div>
      </div>

      {/* Nav Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-stone-gold scale-125 shadow-md" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
