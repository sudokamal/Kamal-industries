"use client";

import React, { useRef, useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

// ─── SPEC DATA ─────────────────────────────────────────────────────────────────
const specCategories = [
  {
    category: "Dimensions & Format",
    specs: [
      { property: "Standard Sizes", kota_blue: "12×12 to 48×48 in", kota_brown: "12×12 to 48×48 in", mandana: "Custom & Standard", slabs: "24×24 to 48×48 in" },
      { property: "Thickness Range", kota_blue: "18mm – 50mm", kota_brown: "18mm – 40mm", mandana: "20mm – 35mm", slabs: "20mm – 50mm" },
      { property: "Custom Sizes", kota_blue: "Yes — Any dimension", kota_brown: "Yes — Any dimension", mandana: "Yes — Custom", slabs: "Yes — Large format" },
      { property: "Tolerance", kota_blue: "±1mm", kota_brown: "±1mm", mandana: "±1.5mm", slabs: "±1mm" },
    ],
  },
  {
    category: "Physical Properties",
    specs: [
      { property: "Density", kota_blue: "2,650 kg/m³", kota_brown: "2,600 kg/m³", mandana: "2,700 kg/m³", slabs: "2,650 kg/m³" },
      { property: "Weight (25mm)", kota_blue: "~66 kg/m²", kota_brown: "~65 kg/m²", mandana: "~67 kg/m²", slabs: "~66 kg/m²" },
      { property: "Water Absorption", kota_blue: "< 0.5%", kota_brown: "< 0.6%", mandana: "< 0.3%", slabs: "< 0.5%" },
      { property: "Compressive Strength", kota_blue: "800–1200 kg/cm²", kota_brown: "750–1100 kg/cm²", mandana: "1200+ kg/cm²", slabs: "800–1200 kg/cm²" },
    ],
  },
  {
    category: "Surface & Finish",
    specs: [
      { property: "Available Finishes", kota_blue: "Natural, Honed, Polished, Sandblasted, Leather, Flamed", kota_brown: "Natural, Honed, Leather, Sandblasted", mandana: "Natural Split, Sandblasted", slabs: "Honed, Polished, Natural" },
      { property: "Slip Resistance", kota_blue: "Excellent (R10+)", kota_brown: "Excellent (R10+)", mandana: "Outstanding (R12+)", slabs: "Good (R9-R10)" },
      { property: "Scratch Resistance", kota_blue: "High", kota_brown: "High", mandana: "Very High", slabs: "High" },
    ],
  },
  {
    category: "Durability & Performance",
    specs: [
      { property: "Weather Resistance", kota_blue: "Excellent", kota_brown: "Excellent", mandana: "Outstanding", slabs: "Excellent" },
      { property: "Frost Resistance", kota_blue: "High", kota_brown: "High", mandana: "Very High", slabs: "High" },
      { property: "Acid Resistance", kota_blue: "Good", kota_brown: "Good", mandana: "Excellent", slabs: "Good" },
      { property: "Service Life", kota_blue: "50+ years", kota_brown: "50+ years", mandana: "50+ years", slabs: "50+ years" },
      { property: "Maintenance", kota_blue: "Minimal", kota_brown: "Minimal", mandana: "Minimal", slabs: "Low" },
    ],
  },
];

const products = ["Kota Blue Stone", "Kota Brown Stone", "Mandana Red Stone", "Large Format Slabs"];

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

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function TechSpecsTable() {
  const { ref: titleRef, inView: titleInView } = useInView(0.2);
  const { ref: tableRef, inView: tableInView } = useInView(0.05);

  return (
    <section id="specifications" className="py-24 md:py-36 bg-surface overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-700 ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
            Technical Data
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-dark">
            Technical Specifications
          </h2>
          <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-6" />
          <p className="text-gray-500 text-sm font-light max-w-xl mx-auto mt-5 leading-relaxed">
            Comprehensive engineering data for architects, structural engineers, and project managers.
            All specifications are based on our standard production quality.
          </p>
        </div>

        {/* Table */}
        <div
          ref={tableRef}
          className={`transition-all duration-700 delay-150 ${tableInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                {/* Thead */}
                <thead>
                  <tr className="bg-charcoal">
                    <th className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-white/60 font-sans min-w-[180px]">
                      Property
                    </th>
                    {products.map((p) => (
                      <th key={p} className="text-left px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-stone-gold font-sans min-w-[160px]">
                        {p}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Tbody */}
                <tbody>
                  {specCategories.map((cat) => (
                    <React.Fragment key={cat.category}>
                      {/* Category header row */}
                      <tr className="bg-primary/5">
                        <td
                          colSpan={5}
                          className="px-6 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-primary font-sans border-b border-primary/10"
                        >
                          {cat.category}
                        </td>
                      </tr>
                      {/* Spec rows */}
                      {cat.specs.map((spec, specIdx) => (
                        <tr
                          key={spec.property}
                          className={`border-b border-gray-50 hover:bg-stone-gold/3 transition-colors ${
                            specIdx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                          }`}
                        >
                          <td className="px-6 py-4 text-xs font-medium text-gray-700 font-sans whitespace-nowrap">
                            {spec.property}
                          </td>
                          <td className="px-6 py-4 text-xs text-gray-500 font-light">{spec.kota_blue}</td>
                          <td className="px-6 py-4 text-xs text-gray-500 font-light">{spec.kota_brown}</td>
                          <td className="px-6 py-4 text-xs text-gray-500 font-light">{spec.mandana}</td>
                          <td className="px-6 py-4 text-xs text-gray-500 font-light">{spec.slabs}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 flex flex-wrap items-center gap-4 justify-center md:justify-between">
          <p className="text-xs text-gray-400 font-light max-w-lg">
            * Specifications represent our standard production quality. Custom dimensions and tolerances
            are available. Contact us for specific project requirements and engineering certifications.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-light">
            <CheckCircle2 size={14} className="text-stone-gold shrink-0" />
            All specs verified at our Amarpura, Ramganjmandi factory.
          </div>
        </div>

        {/* Key highlights */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Water Absorption", value: "< 0.5%", desc: "Virtually non-porous" },
            { label: "Service Life", value: "50+ yrs", desc: "With basic maintenance" },
            { label: "Thickness Tolerance", value: "±1mm", desc: "Machine calibrated" },
            { label: "Slip Resistance", value: "R10–R12", desc: "Naturally anti-slip" },
          ].map((h) => (
            <div key={h.label} className="bg-white rounded-2xl p-5 border border-gray-100 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="font-serif text-3xl font-light text-primary mb-1">{h.value}</div>
              <div className="text-xs font-bold text-neutral-dark mb-1 font-sans">{h.label}</div>
              <div className="text-[10px] text-gray-400 font-light">{h.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
