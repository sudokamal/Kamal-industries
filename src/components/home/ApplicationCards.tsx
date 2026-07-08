"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  Home, Building2, Star, Heart, GraduationCap, Flame, TreePine,
  Footprints, Car, Waves, Factory, Mountain,
} from "lucide-react";

// ─── APPLICATION DATA WITH REAL IMAGES ────────────────────────────────────────
const applications = [
  {
    icon: <Home size={20} />,
    name: "Residential Flooring",
    desc: "Kota Stone is the #1 choice for Indian homes — durable, low maintenance, and naturally cool underfoot.",
    image: "/kota-blue-1.jpeg",
    alt: "Kota Blue Stone slabs for residential flooring",
    accent: "from-blue-900/70",
  },
  {
    icon: <Building2 size={20} />,
    name: "Commercial Buildings",
    desc: "High traffic lobbies, office corridors, and commercial spaces benefit from Kota Stone's extreme durability.",
    image: "/kota-slab-2.jpeg",
    alt: "Large format Kota Stone slabs for commercial buildings",
    accent: "from-gray-900/70",
  },
  {
    icon: <Star size={20} />,
    name: "Hotels & Resorts",
    desc: "Premium hotel lobbies and resort walkways — polished Kota Blue creates a luxurious first impression.",
    image: "/kota-slab-1.jpeg",
    alt: "Kota Stone wall cladding panels for hotel facades",
    accent: "from-amber-900/70",
  },
  {
    icon: <Heart size={20} />,
    name: "Hospitals",
    desc: "Non-porous, anti-bacterial, and easy to sanitize — Kota Stone meets healthcare flooring standards perfectly.",
    image: "/kota-stone-1.jpeg",
    alt: "Kota Brown Stone flooring for hospitals",
    accent: "from-green-900/70",
  },
  {
    icon: <GraduationCap size={20} />,
    name: "Schools & Colleges",
    desc: "Cost-effective, highly durable, and low maintenance — ideal for educational institution flooring.",
    image: "/hero-2.jpeg",
    alt: "Kota Stone flooring for educational institutions",
    accent: "from-indigo-900/70",
  },
  {
    icon: <Flame size={20} />,
    name: "Temple Flooring",
    desc: "Natural, sacred stone with spiritual resonance — Mandana Red and Kota Blue are traditional temple choices.",
    image: "/stock-yard-1.jpeg",
    alt: "Natural stone for temple flooring",
    accent: "from-red-900/70",
  },
  {
    icon: <TreePine size={20} />,
    name: "Outdoor Landscaping",
    desc: "Weather-resistant in all Indian climates — garden landscapes, driveways, and villa exteriors.",
    image: "/kota-stone-2.jpeg",
    alt: "Large Kota Stone slabs for outdoor landscaping",
    accent: "from-emerald-900/70",
  },
  {
    icon: <Footprints size={20} />,
    name: "Garden Pathways",
    desc: "Natural split and sandblasted Kota Stone for beautiful, slip-resistant garden pathways.",
    image: "/factory-yard-3.jpeg",
    alt: "Stone pathways and garden paving",
    accent: "from-teal-900/70",
  },
  {
    icon: <Car size={20} />,
    name: "Parking Areas",
    desc: "Load-bearing capacity and weather resistance make Kota Stone perfect for parking areas and driveways.",
    image: "/factory-yard-2.jpeg",
    alt: "Stone flooring for parking areas and driveways",
    accent: "from-gray-900/70",
  },
  {
    icon: <Waves size={20} />,
    name: "Swimming Pool Decks",
    desc: "Slip-resistant sandblasted Kota Stone is the ideal choice for pool surrounds and wet area paving.",
    image: "/steps-4.jpeg",
    alt: "Slip-resistant stone for swimming pool decks",
    accent: "from-cyan-900/70",
  },
  {
    icon: <Factory size={20} />,
    name: "Industrial Flooring",
    desc: "High compressive strength and chemical resistance makes Kota Stone ideal for industrial and warehouse flooring.",
    image: "/factory-yard-1.jpeg",
    alt: "Kota Stone industrial flooring at factory",
    accent: "from-zinc-900/70",
  },
  {
    icon: <Mountain size={20} />,
    name: "Farm Houses",
    desc: "Natural earthy aesthetics and rustic character — Kota Brown Stone is the preferred farmhouse flooring choice.",
    image: "/kota-stone-3.jpeg",
    alt: "Kota Stone for farmhouse and villa flooring",
    accent: "from-stone-900/70",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── APPLICATION CARD ──────────────────────────────────────────────────────────
function AppCard({ app, index }: { app: typeof applications[0]; index: number }) {
  const { ref, inView } = useInView(0.05);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`transition-all duration-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[3/4] shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Background Image */}
        <Image
          src={app.image}
          alt={app.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
        />

        {/* Gradient overlay — always present at bottom */}
        <div className={`absolute inset-0 bg-gradient-to-t ${app.accent} to-transparent`} />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Icon */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-gold/90 flex items-center justify-center text-neutral-dark opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {React.cloneElement(app.icon as React.ReactElement<{ size?: number }>, { size: 14 })}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              {React.cloneElement(app.icon as React.ReactElement<{ size?: number; className?: string }>, { size: 12, className: "text-stone-gold" })}
            </div>
            <h3 className="font-sans text-xs font-bold tracking-wide">{app.name}</h3>
          </div>
          <p
            className={`text-white/80 text-[10px] font-light leading-relaxed transition-all duration-400 overflow-hidden ${
              hovered ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {app.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ApplicationCards() {
  const { ref: titleRef, inView: titleInView } = useInView(0.2);

  return (
    <section id="applications" className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <Image src="/factory-yard-3.jpeg" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-white/97" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
            Where Kota Stone Is Used
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-dark">
            Applications of Kota Stone
          </h2>
          <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-6" />
          <p className="text-gray-500 text-sm font-light max-w-lg mx-auto mt-5 leading-relaxed">
            Kota Stone is the preferred choice across construction segments — from luxury hotels to
            industrial warehouses — due to its unmatched durability and natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {applications.map((app, i) => (
            <AppCard key={app.name} app={app} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
