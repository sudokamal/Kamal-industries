"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Target, Eye, Users, ShieldCheck, Leaf,
  CheckCircle2, ArrowRight, Heart, Globe, Zap,
} from "lucide-react";

// ─── JOURNEY MILESTONES ──────────────────────────────────────────────────────
const journey = [
  { year: "1985", title: "Founded", desc: "Kamal Industries established in Amarpura, Ramganjmandi by a master stone cutter with 2 workers and a single cutting machine." },
  { year: "1995", title: "Factory Expansion", desc: "Expanded to a 5-acre factory site with gang saw lines, increasing capacity 10× over the founding year." },
  { year: "2002", title: "Kamal Enterprises Born", desc: "Launched sister export brand Kamal Enterprises to serve architects and wholesalers across India and internationally." },
  { year: "2010", title: "Modern Machinery", desc: "Invested in CNC edge profiling, automatic calibration conveyors, and continuous polishing lines for premium grade output." },
  { year: "2018", title: "International Export", desc: "Began regular export shipments to Europe, Middle East, and Southeast Asia via Mundra and Kandla ports." },
  { year: "2024", title: "35+ Years Strong", desc: "Today, 20+ skilled workers, 15-acre campus, 10,000+ tons annual capacity, serving 5,000+ satisfied customers globally." },
];

// ─── CORE VALUES ─────────────────────────────────────────────────────────────
const coreValues = [
  { icon: <ShieldCheck size={20} className="text-stone-gold" />, title: "Uncompromised Quality", desc: "Every slab passes multi-stage inspection before leaving our yard." },
  { icon: <Zap size={20} className="text-stone-gold" />, title: "Machine Precision", desc: "±1mm tolerance on all calibrated sizes — European standard, Indian price." },
  { icon: <Globe size={20} className="text-stone-gold" />, title: "Global Reliability", desc: "Export-ready packing, documentation, and on-time shipping — every order." },
  { icon: <Heart size={20} className="text-stone-gold" />, title: "Customer First", desc: "Your dedicated coordinator handles every enquiry through to delivery." },
  { icon: <Leaf size={20} className="text-stone-gold" />, title: "Sustainability", desc: "70% water recycling, land restoration, and eco-responsible quarrying." },
  { icon: <Users size={20} className="text-stone-gold" />, title: "Skilled Workforce", desc: "Multi-generational stone cutters with 35+ years of combined craft." },
];

// ─── TRUST POINTS ─────────────────────────────────────────────────────────────
const trustPoints = [
  "5,000+ satisfied customers across India and 18+ countries",
  "35+ years as Ramganjmandi's trusted stone manufacturer",
  "Direct factory pricing — no middlemen, no commissions",
  "10,000+ tons annual production with consistent quality",
  "Custom cut capability for any architectural drawing",
  "Zero-lamination policy on every batch shipped",
  "ISO-grade batch testing and colour grading standards",
  "24-hour response to every enquiry — WhatsApp or email",
];

// ─── USE IN-VIEW HOOK ────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── CARD ANIMATION WRAPPER ──────────────────────────────────────────────────
function FadeCard({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

// ─── SECTION EYEBROW ─────────────────────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
      {children}
    </span>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function CompanyProfile() {

  return (
    <section id="company-profile" className="overflow-hidden">

      {/* ── 1. ABOUT — Mission/Vision split ── */}
      <div className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image collage */}
            <FadeCard className="relative grid grid-cols-2 gap-4">
              <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl img-zoom-container">
                <Image
                  src="/01.jpeg"
                  alt="Kamal Industries office — Amarpura, Ramganjmandi, Kota, Rajasthan"
                  fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-glass px-3 py-1.5 rounded-lg">
                  <span className="text-white text-[9px] font-sans font-bold uppercase tracking-widest">
                    Amarpura, Ramganjmandi — Est. 1985
                  </span>
                </div>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg img-zoom-container">
                <Image src="/ki-signage.jpeg" alt="Kamal Industries company signboard" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg img-zoom-container">
                <Image src="/cutting-machine-1.jpeg" alt="Precision diamond-blade stone cutting at Kamal Industries" fill className="object-cover" sizes="25vw" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 hidden lg:flex bg-primary rounded-2xl p-5 text-white shadow-2xl flex-col items-center">
                <span className="font-serif text-4xl font-light text-stone-gold leading-none">35+</span>
                <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-white/70 mt-1">Years</span>
              </div>
            </FadeCard>

            {/* Text */}
            <FadeCard delay={150} className="space-y-7 lg:pl-6">
              <div>
                <Eyebrow>About Kamal Industries</Eyebrow>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-dark leading-[1.15]">
                  Manufacturer of<br />
                  <span className="italic font-normal text-primary">Authentic Kota Stone</span>
                </h2>
                <div className="w-14 h-[2px] bg-stone-gold mt-6" />
              </div>
              <div className="space-y-4 text-gray-500 text-sm font-light leading-relaxed">
                <p>
                  <strong className="text-neutral-dark font-semibold">Kamal Industries</strong> is a
                  direct manufacturer and supplier of Kota Blue Stone, Kota Brown Stone, Mandana Stone,
                  and the full range of natural stone products sourced from the Ramganjmandi geological
                  belt of Kota, Rajasthan — the world&apos;s primary Kota Stone deposit.
                </p>
                <p>
                  Operating from our 15-acre factory at Amarpura, Ramganjmandi, we handle every stage
                  of production — from raw block to calibrated, finished, and packed stone — under one
                  roof with 20+ skilled workers and precision cutting machinery.
                </p>
                <p>
                  Our sister brand, <strong className="text-neutral-dark font-semibold">Kamal Enterprises</strong>,
                  manages domestic trading and international export via Mundra and Kandla ports, serving
                  builders, architects, contractors, and wholesalers across India and 18+ countries.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/about" className="inline-flex items-center gap-2 bg-primary text-white text-[11px] font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl hover:bg-primary-dark transition-all duration-200 font-sans">
                  Our Full Story <ArrowRight size={14} />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border border-primary/30 text-primary text-[11px] font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl hover:bg-primary/5 transition-all duration-200 font-sans">
                  Request a Quote
                </Link>
              </div>
            </FadeCard>
          </div>
        </div>
      </div>

      {/* ── 2. MISSION, VISION, CORE VALUES ── */}
      <div className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeCard className="text-center mb-16">
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-dark">
              Our Mission, Vision & Values
            </h2>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-6" />
          </FadeCard>

          {/* Mission + Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <FadeCard delay={100} className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0">
                <Image src="/kota-blue-1.jpeg" alt="Kamal Industries Kota Blue Stone production" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-primary/85" />
              </div>
              <div className="relative p-10 text-white">
                <div className="w-12 h-12 rounded-xl bg-stone-gold/20 flex items-center justify-center mb-6">
                  <Target size={22} className="text-stone-gold" />
                </div>
                <h3 className="font-serif text-3xl font-light mb-4">Our Mission</h3>
                <div className="w-10 h-[1.5px] bg-stone-gold mb-5" />
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  To manufacture and supply the highest quality Kota Stone directly from our factory to
                  every project across India and the world — at factory-direct pricing, with machine
                  precision, and with the reliability of a 35-year-old manufacturing legacy.
                </p>
              </div>
            </FadeCard>
            <FadeCard delay={200} className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0">
                <Image src="/02.jpeg" alt="Kamal Industries office — Amarpura, Ramganjmandi" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-charcoal/88" />
              </div>
              <div className="relative p-10 text-white">
                <div className="w-12 h-12 rounded-xl bg-stone-gold/20 flex items-center justify-center mb-6">
                  <Eye size={22} className="text-stone-gold" />
                </div>
                <h3 className="font-serif text-3xl font-light mb-4">Our Vision</h3>
                <div className="w-10 h-[1.5px] bg-stone-gold mb-5" />
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  To be recognised globally as the benchmark manufacturer of Kota Stone — where
                  architects, builders, and project managers across the world can source authentic
                  Rajasthani limestone with absolute trust in quality, dimension, and delivery.
                </p>
              </div>
            </FadeCard>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map((v, i) => (
              <FadeCard key={v.title} delay={i * 80} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-stone-gold/30 hover:shadow-xl transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-stone-gold/10 transition-colors">
                  {v.icon}
                </div>
                <h3 className="font-serif text-lg font-medium text-neutral-dark mb-2">{v.title}</h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed">{v.desc}</p>
              </FadeCard>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. OUR JOURNEY ── */}
      <div className="py-24 md:py-32 bg-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeCard className="text-center mb-16">
            <Eyebrow>Since 1985</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white">Our Journey</h2>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-6" />
            <p className="text-white/50 text-sm font-light max-w-lg mx-auto mt-5 leading-relaxed">
              Four decades of dedication to the craft of Kota Stone manufacturing.
            </p>
          </FadeCard>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journey.map((item, i) => (
              <FadeCard key={item.year} delay={i * 100}>
                <div className="relative border border-white/8 rounded-2xl p-7 hover:border-stone-gold/30 transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-stone-gold/20 group-hover:bg-stone-gold/60 transition-colors" />
                  <span className="font-serif text-5xl font-extralight text-stone-gold/25 leading-none block mb-4 group-hover:text-stone-gold/40 transition-colors">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl font-light text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </FadeCard>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. WHY CUSTOMERS TRUST US ── */}
      <div className="py-24 md:py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeCard className="space-y-7">
              <div>
                <Eyebrow>Why 5,000+ Customers Trust Us</Eyebrow>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-[1.15]">
                  The Kamal<br />
                  <span className="italic text-stone-gold">Quality Promise</span>
                </h2>
                <div className="w-14 h-[2px] bg-stone-gold mt-6" />
              </div>
              <p className="text-white/70 text-sm font-light leading-relaxed max-w-md">
                Every stone that leaves our factory in Amarpura passes through a strict multi-stage
                quality process. Our commitment is simple: if it doesn&apos;t pass inspection, it doesn&apos;t ship.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-stone-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-white/75 font-light">{point}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-stone-gold text-neutral-dark text-[11px] font-bold tracking-widest uppercase px-7 py-4 rounded-xl hover:bg-stone-gold/90 transition-colors font-sans">
                Request Quality Samples <ArrowRight size={14} />
              </Link>
            </FadeCard>

            {/* Manufacturing Excellence images */}
            <FadeCard delay={150} className="grid grid-cols-2 gap-4">
              {[
                { src: "/cutting-machine-2.jpeg", alt: "Precision stone cutting machinery at Kamal Industries" },
                { src: "/kota-blue-2.jpeg", alt: "Kota Blue Stone quality batch inspection" },
                { src: "/kota-stone-3.jpeg", alt: "Calibrated stone production at factory" },
                { src: "/workers-loading-2.jpeg", alt: "Skilled workers handling stone at Kamal Industries" },
              ].map((img) => (
                <div key={img.src} className="relative aspect-square rounded-2xl overflow-hidden img-zoom-container">
                  <Image src={img.src} alt={img.alt} fill className="object-cover opacity-70 hover:opacity-90 transition-opacity" sizes="25vw" />
                </div>
              ))}
            </FadeCard>
          </div>
        </div>
      </div>

    </section>
  );
}
