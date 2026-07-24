"use client";

import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import StatsCounter from "@/components/home/StatsCounter";
import { FadeInView } from "@/components/ui/FadeInView";
import {
  Award, ShieldCheck, Factory, Truck, Users, MapPin,
  Cpu, Mountain, FlaskConical, Target, Eye, Gem
} from "lucide-react";

const machineryItems = [
  { title: "Diamond-Blade Gang Saws", desc: "Heavy-duty multi-blade frame saws capable of slabbing jumbo blocks up to 10 feet in length with uniform thickness." },
  { title: "Automated Calibrators", desc: "Multi-head conveyor calibrating machines that surface-grind slabs to precise millimeter thickness tolerances." },
  { title: "Line Polishing Units", desc: "Seven-head continuous bridge polishers producing consistent semi-gloss, honed, and high-gloss mirror finishes." },
  { title: "Shot-Blasting Machinery", desc: "Automated abrasive blasting chamber producing uniform slip-resistant textured surfaces for outdoor paving." },
  { title: "CNC Bridge Cutters", desc: "Computer-controlled diamond disc cutters providing sub-millimeter precision on custom architectural cuts." },
  { title: "Edge Profilers & Chamferers", desc: "Specialised shaping machines for producing bullnose, pencil, bevelled, and rebated step edges." },
];

const qcSteps = [
  { step: "01", title: "Quarry Block Soundness Audit", desc: "Before a block enters the factory, it is inspected for structural micro-cracks, lamination planes, and color vein consistency." },
  { step: "02", title: "Dimension & Thickness Verification", desc: "Post-calibration, a sample from each pallet is measured with precision digital calipers against the specified thickness tolerance." },
  { step: "03", title: "Surface Finish Grading", desc: "Finished slabs are classified under calibrated daylight lamps into Grade A (premium export), Grade B (commercial) and secondary grades." },
  { step: "04", title: "Lamination & Void Scanning", desc: "Thin laminations within slabs — invisible to the naked eye — are identified by expert inspectors through a tap-percussion method." },
  { step: "05", title: "Color Uniformity Sorting", desc: "Color-graded lots are assembled to ensure every crate holds only visually matched stone, critical for large continuous floor installations." },
  { step: "06", title: "Packing & Load-Out Inspection", desc: "Final sign-off is conducted at the loading dock — packing materials, crate markings, and shipping documents are verified against the purchase order." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* ─── PAGE HEADER ─── */}
      <section className="relative bg-neutral-dark text-white py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark via-charcoal to-neutral-dark" />
        <Container className="relative z-10 text-center max-w-4xl">
          <div>
            <span className="text-[10px] md:text-xs font-sans tracking-[0.35em] uppercase font-bold text-stone-gold mb-6 block">
              Since 1985 · Ramganjmandi, Kota
            </span>
            <h1 className="font-serif text-4xl md:text-7xl font-extralight tracking-tight mb-8 leading-[1.1]">
              Four Decades of <br />
              <span className="italic font-normal text-stone-gold">Premium Stone Heritage</span>
            </h1>
            <p className="font-sans text-gray-300 text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Rooted in the geological heart of Rajasthan and driven by an uncompromising
              commitment to quality, Kamal Industries and Kamal Enterprises have grown from
              a regional quarry operation to an internationally recognised natural stone supplier.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── OUR STORY ─── */}
      <section className="py-24 bg-white border-b border-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <FadeInView>
              <div>
                <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-stone-gold mb-3 block font-sans">
                  Our Story
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-neutral-dark leading-tight">
                  Born from the Rajasthan Limestone Belt
                </h2>
                <div className="w-16 h-[1.5px] bg-stone-gold mt-6" />
              </div>
              <div className="space-y-5 text-gray-500 text-sm font-light leading-relaxed mt-8">
                <p>
                  The story of Kamal Industries begins in 1985 in the dusty lanes of Amarpura,
                  a small village sitting atop one of India&apos;s most extraordinary limestone deposits.
                  Our founder, a stone trader with a deep geological intuition, recognised that the
                  blue-green Kota Stone beneath the region was unlike anything available in the country —
                  extraordinarily dense, naturally slip-resistant, and capable of taking an impressive polish.
                </p>
                <p>
                  What began as a manual quarrying venture supplying local contractors gradually
                  evolved into a vertically integrated manufacturing enterprise. Today,
                  <strong> Kamal Industries</strong> handles all processing — quarrying, sizing, surface
                  treatment, and packing — while <strong>Kamal Enterprises</strong> manages trading,
                  international logistics, and client relationships across 18+ countries.
                </p>
                <p>
                  The company remains privately held by the founding family, which we believe is the
                  core reason for our consistent quality. When ownership is personal and hands-on,
                  every crate that leaves our factory carries our name literally.
                </p>
              </div>
              <div className="pt-2 mt-8">
                <Button href="/contact" variant="primary">
                  Connect With Our Team
                </Button>
              </div>
            </FadeInView>
          </div>
        </Container>
      </section>

      {/* ─── FACTORY STATISTICS ─── */}
      <section className="py-24 bg-neutral-light/30 border-b border-gray-100">
        <Container>
          <SectionTitle subtitle="By The Numbers" title="Factory Statistics" align="center" />
          <StatsCounter />
        </Container>
      </section>

      {/* ─── FACTORY OVERVIEW ─── */}
      <section className="py-24 bg-white border-b border-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <FadeInView direction="right">
              <div>
                <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-stone-gold mb-3 block font-sans">
                  Infrastructure
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-neutral-dark leading-tight">
                  Factory Overview
                </h2>
                <div className="w-16 h-[1.5px] bg-stone-gold mt-6" />
              </div>
              <div className="space-y-5 text-gray-500 text-sm font-light leading-relaxed mt-8">
                <p>
                  Our manufacturing campus spans over 15 acres on the outskirts of Ramganjmandi,
                  Kota — within direct proximity to the primary limestone quarry zones. The facility
                  integrates all stages of production under a single management chain, from raw block
                  arrival to finished, packed pallets ready for dispatch.
                </p>
                <p>
                  The production floor houses four multi-blade gang saw lines, two calibration conveyor
                  systems, and a seven-head continuous line polishing machine. A dedicated surface treatment
                  bay handles shot-blasting, sandblasting, and flaming operations on a make-to-order basis.
                </p>
                <p>
                  The dispatch yard accommodates 12 heavy-load trucks simultaneously and is integrated with
                  a secure storage system for finished goods, keeping consignments safe from weather damage
                  during pre-shipment hold periods.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {[
                  { label: "Production Halls", value: "4 Units" },
                  { label: "Polishing Lines", value: "2 Lines" },
                  { label: "Dispatch Bays", value: "12 Docks" },
                  { label: "Water Recycling", value: "Closed Loop" },
                ].map((item) => (
                  <div key={item.label} className="border border-gray-100 p-4 rounded-sm bg-neutral-light/40">
                    <span className="font-serif text-xl font-medium text-primary block">{item.value}</span>
                    <span className="text-[10px] tracking-widest uppercase font-bold text-gray-400 font-sans">{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </Container>
      </section>

      {/* ─── MODERN MACHINERY ─── */}
      <section className="py-24 bg-neutral-dark text-white border-b border-gray-800 relative overflow-hidden">
        <Container className="relative z-10">
          <SectionTitle subtitle="Equipment & Technology" title="Modern Machinery" align="center" light />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machineryItems.map((item, idx) => (
              <FadeInView key={idx} delay={idx * 0.08}>
                <div className="border border-gray-800 p-7 hover:border-stone-gold/40 transition-colors duration-300 rounded-sm bg-white/5 backdrop-blur-sm h-full">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-gray-700 flex items-center justify-center mb-5">
                    <Cpu size={18} className="text-stone-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── QUALITY CONTROL ─── */}
      <section className="py-24 bg-white border-b border-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-stone-gold mb-3 block font-sans">
                Quality Assurance
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-neutral-dark leading-tight">
                Rigorous Six-Stage Quality Control
              </h2>
              <div className="w-16 h-[1.5px] bg-stone-gold mt-6" />
            </div>

            <div className="space-y-4">
              {qcSteps.map((item, idx) => (
                <FadeInView key={item.step} delay={idx * 0.07} direction="right">
                  <div className="flex gap-6 p-7 border border-gray-100 hover:border-gray-200 rounded-sm bg-white hover:shadow-sm transition-all duration-300">
                    <span className="font-serif text-3xl font-light text-stone-gold/30 shrink-0 leading-none pt-1">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-neutral-dark mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── PRODUCTION CAPACITY ─── */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-stone-gold mb-3 block font-sans">
                Manufacturing Output
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-white leading-tight">
                Production Capacity
              </h2>
              <div className="w-16 h-[1.5px] bg-stone-gold mt-6" />
            </div>
            <div className="space-y-5 text-gray-300 text-sm font-light leading-relaxed">
              <p>
                Our combined quarrying and processing capacity enables us to fulfil large-volume
                contracts — including major infrastructure projects, hotel chains, and residential
                developments — without compromising on delivery timelines or dimensional consistency.
              </p>
              <p>
                During peak demand cycles, our factory operates on double-shift schedules, and our
                raw block inventory at the quarry ensures that material shortages do not impact
                committed orders. Buffer stock of finished goods is maintained for popular sizes.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
              {[
                { value: "2.5M+", unit: "Sq. Ft / Year", label: "Processing Throughput" },
                { value: "30+", unit: "Containers/Month", label: "Export Consignments" },
                { value: "72h", unit: "Avg. Lead Time", label: "Order to Dispatch" },
              ].map((cap) => (
                <div key={cap.label}>
                  <span className="font-serif text-3xl font-light text-stone-gold block">{cap.value}</span>
                  <span className="text-[9px] tracking-widest uppercase font-bold text-stone-gold/60 block font-sans">{cap.unit}</span>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-gray-400 block font-sans mt-1">{cap.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── EXPERIENCED WORKERS ─── */}
      <section className="py-24 bg-neutral-light/30 border-b border-gray-100">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <FadeInView direction="right">
              <div>
                <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-stone-gold mb-3 block font-sans">
                  Human Excellence
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-neutral-dark leading-tight">
                  Experienced Workforce
                </h2>
                <div className="w-16 h-[1.5px] bg-stone-gold mt-6" />
              </div>
              <div className="space-y-5 text-gray-500 text-sm font-light leading-relaxed mt-8">
                <p>
                  The machinery in our factory is state-of-the-art, but it is our 250+ strong
                  human workforce that makes the difference between adequate stone and exceptional stone.
                  Our master cutters — many of whom have spent 15 to 25 years in our factory — carry
                  an intuitive understanding of the material that no sensor can replicate.
                </p>
                <p>
                  Stone is a natural material with organic variation in colour, density, and structure.
                  Our experienced hands identify and segregate these variations at speed, assembling
                  colour-matched lots that give architects and installers the consistent appearance
                  their projects demand.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { value: "20+ Yrs", label: "Avg. Senior Experience" },
                  { value: "100%", label: "Safety Compliance" },
                  { value: "3rd Gen", label: "Family Workforce" },
                ].map((w) => (
                  <div key={w.label} className="border-l border-stone-gold/30 pl-4">
                    <span className="font-serif text-xl font-medium text-primary block">{w.value}</span>
                    <span className="text-[9px] tracking-widest uppercase font-bold text-gray-400 font-sans">{w.label}</span>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </Container>
      </section>

      {/* ─── MISSION / VISION / VALUES ─── */}
      <section className="py-24 bg-white border-b border-gray-50">
        <Container>
          <SectionTitle subtitle="Our Foundations" title="Mission, Vision & Core Values" align="center" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Mission */}
            <FadeInView>
              <div className="border-t-4 border-t-primary border border-gray-100 p-10 rounded-sm bg-neutral-light/30 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-primary" size={28} />
                  <span className="text-[10px] tracking-widest font-bold uppercase text-primary font-sans">Our Mission</span>
                </div>
                <p className="font-serif text-xl md:text-2xl font-light text-neutral-dark leading-relaxed italic">
                  &ldquo;To supply the world&apos;s most discerning architects, builders, and developers
                  with perfectly calibrated, rigorously graded, and reliably delivered natural limestone
                  and quartzite stone products — directly from the geological source in Kota, Rajasthan.&rdquo;
                </p>
              </div>
            </FadeInView>

            {/* Vision */}
            <FadeInView delay={0.1}>
              <div className="border-t-4 border-t-stone-gold border border-gray-100 p-10 rounded-sm bg-neutral-light/30 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="text-stone-gold" size={28} />
                  <span className="text-[10px] tracking-widest font-bold uppercase text-stone-gold font-sans">Our Vision</span>
                </div>
                <p className="font-serif text-xl md:text-2xl font-light text-neutral-dark leading-relaxed italic">
                  &ldquo;To be recognised globally as the benchmark standard for authentic Kota Stone processing,
                  advancing modern technology while preserving the craft heritage of Rajasthan stone workers.&rdquo;
                </p>
              </div>
            </FadeInView>
          </div>
        </Container>
      </section>
    </div>
  );
}
