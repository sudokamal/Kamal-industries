"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

// ─── FACTORY SECTIONS WITH REAL PHOTOS ───────────────────────────────────────
const factoryAreas = [
  {
    id: "machines",
    title: "Modern Stone Cutting Machines",
    subtitle: "Diamond-blade gang saws & CNC equipment",
    desc: "High-speed diamond-blade cutting machines process raw Kota Stone blocks with ±1mm precision tolerance across all calibrated sizes.",
    images: ["/cutting-machine-1.jpeg", "/cutting-machine-2.jpeg", "/cutting-machine-3.jpeg"],
    mainImage: "/cutting-machine-1.jpeg",
    alt: "Diamond-blade stone cutting machine at Kamal Industries factory",
    badge: "CNC Precision",
    span: "lg:col-span-2",
  },
  {
    id: "workforce",
    title: "Skilled Workforce",
    subtitle: "20+ expert stone craftsmen",
    desc: "Multi-generational stone cutters trained in the art and science of Kota Stone processing.",
    images: ["/workers-loading-1.jpeg", "/workers-loading-3.jpeg"],
    mainImage: "/workers-loading-3.jpeg",
    alt: "Skilled workers at Kamal Industries stone factory",
    badge: "20+ Workers",
    span: "",
  },
  {
    id: "yard",
    title: "Large Factory Area",
    subtitle: "15-acre factory campus",
    desc: "A sprawling 15-acre manufacturing campus in Amarpura, Ramganjmandi — purpose-built for high-volume stone processing.",
    images: ["/factory-yard-1.jpeg", "/factory-yard-2.jpeg", "/factory-yard-3.jpeg"],
    mainImage: "/factory-yard-1.jpeg",
    alt: "Kamal Industries 15-acre factory campus — Amarpura, Ramganjmandi",
    badge: "15 Acres",
    span: "",
  },
  {
    id: "production",
    title: "Production Yard",
    subtitle: "High-volume daily output",
    desc: "Organised production yard with daily output capacity to fulfil bulk domestic and international orders reliably.",
    images: ["/hero-1.jpeg", "/hero-2.jpeg"],
    mainImage: "/hero-1.jpeg",
    alt: "Stone production yard at Kamal Industries",
    badge: "High Capacity",
    span: "lg:col-span-2",
  },
  {
    id: "storage",
    title: "Stone Storage",
    subtitle: "Organised inventory management",
    desc: "Categorised stone storage areas with systematically organised inventory of Kota Blue, Brown, Mandana, and slab stock.",
    images: ["/stock-yard-1.jpeg", "/stock-yard-2.jpeg"],
    mainImage: "/stock-yard-1.jpeg",
    alt: "Stone storage and inventory area at Kamal Industries",
    badge: "Organised Stock",
    span: "",
  },
  {
    id: "quality",
    title: "Quality Inspection",
    subtitle: "Every piece hand-inspected",
    desc: "Rigorous quality inspection under calibrated lighting — each piece assessed for colour consistency, structural integrity, and dimensional accuracy.",
    images: ["/kota-blue-1.jpeg", "/kota-blue-2.jpeg", "/kota-blue-3.jpeg"],
    mainImage: "/kota-blue-2.jpeg",
    alt: "Quality inspection of Kota Stone at Kamal Industries",
    badge: "Grade A Quality",
    span: "",
  },
  {
    id: "packing",
    title: "Packing Section",
    subtitle: "Export-grade wooden crates",
    desc: "Stone is sorted by grade and packed in wooden pallets for domestic delivery or seaworthy fumigated wooden crates for international export.",
    images: ["/kota-slab-1.jpeg", "/kota-slab-2.jpeg", "/kota-slab-3.jpeg"],
    mainImage: "/kota-slab-2.jpeg",
    alt: "Stone packing area at Kamal Industries — export ready slabs",
    badge: "Export Ready",
    span: "lg:col-span-2",
  },
  {
    id: "loading",
    title: "Loading Area",
    subtitle: "Zero breakage dispatch policy",
    desc: "Our experienced team loads stone with extreme care — zero breakage policy enforced on every dispatch from the factory gate.",
    images: ["/workers-loading-1.jpeg", "/workers-loading-2.jpeg", "/workers-loading-3.jpeg"],
    mainImage: "/workers-loading-1.jpeg",
    alt: "Workers loading Kota Stone for dispatch at Kamal Industries",
    badge: "Zero Breakage",
    span: "",
  },
];

// ─── USE IN-VIEW HOOK ─────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
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

// ─── FACTORY CARD ─────────────────────────────────────────────────────────────
function FactoryCard({ area, index }: { area: typeof factoryAreas[0]; index: number }) {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${area.span}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-full min-h-[280px] shadow-lg">
        {/* Image */}
        <div className="absolute inset-0 img-zoom-container">
          <Image
            src={area.mainImage}
            alt={area.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div
          className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-stone-gold text-neutral-dark text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full font-sans">
            {area.badge}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="font-serif text-xl font-light text-white mb-1">{area.title}</h3>
          <p className="text-stone-gold text-[10px] font-bold uppercase tracking-widest mb-3 font-sans">{area.subtitle}</p>
          <p
            className={`text-white/70 text-xs font-light leading-relaxed transition-all duration-500 overflow-hidden ${
              hovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {area.desc}
          </p>
        </div>

        {/* Photo count badge */}
        {area.images.length > 1 && (
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-gold" />
              <span className="text-white text-[9px] font-bold uppercase tracking-wider font-sans">
                {area.images.length} Photos
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function FactoryOverview() {
  const { ref: titleRef, inView: titleInView } = useInView(0.2);

  return (
    <section id="factory-overview" className="py-24 md:py-36 bg-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
            Inside Our Factory
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
            Factory Overview
          </h2>
          <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-6" />
          <p className="text-white/50 text-sm font-light max-w-xl mx-auto mt-5 leading-relaxed">
            A real look inside our 15-acre manufacturing campus at Amarpura, Ramganjmandi —
            from raw stone processing to final dispatch. Every photograph is from our actual facility.
          </p>
        </div>

        {/* Factory grid — custom 3-column with large spans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {factoryAreas.map((area, i) => (
            <FactoryCard key={area.id} area={area} index={i} />
          ))}
        </div>

        {/* Bottom badge strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {["15-Acre Campus", "Modern Machinery", "20+ Skilled Workers", "Quality Certified", "Export Ready", "10,000+ Tons Capacity"].map((badge) => (
            <div key={badge} className="flex items-center gap-2 border border-white/10 rounded-full px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-gold" />
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider font-sans">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
