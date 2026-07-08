"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: "1985",
    title: "The Foundation",
    description: "Kamal Industries was founded in Amarpura, Ramganjmandi by our patriarch, a visionary stone merchant who identified the extraordinary geological potential of the Kota region's limestone belt. Operations began with manual quarrying and hand-sorting for local construction markets.",
  },
  {
    year: "1993",
    title: "First Processing Unit",
    description: "Established the first mechanized stone processing unit with single-blade cutting machines and basic polishing lines. Production capacity expanded to serve contractors across Rajasthan and Madhya Pradesh. The reputation for color-uniform, lamination-free Kota Stone began to take hold.",
  },
  {
    year: "2001",
    title: "Kamal Enterprises Founded",
    description: "Recognizing growing national demand, Kamal Enterprises was incorporated as a dedicated trading and export division. This separation allowed Kamal Industries to focus purely on manufacturing excellence while Enterprises managed distribution, logistics, and client management.",
  },
  {
    year: "2008",
    title: "First International Shipments",
    description: "Kamal Enterprises secured its first confirmed export consignments to the United Arab Emirates and the United Kingdom. Stone packing standards were upgraded to full seaworthy fumigated wooden crates with padded interleaving, enabling safe long-haul maritime transport.",
  },
  {
    year: "2013",
    title: "Multi-Blade Gang Saw Upgrade",
    description: "Invested in a state-of-the-art multi-blade gang saw line capable of processing multiple slabs simultaneously. Thickness calibration accuracy improved to within ±1mm. Annual processing capacity crossed the 1 million square feet benchmark for the first time.",
  },
  {
    year: "2017",
    title: "Automated Calibration & Polishing Lines",
    description: "Fully automated calibration conveyor and continuous polishing lines were commissioned. Surface finishing options expanded to include mirror polish, honed, leathered, sandblasted, and flamed textures — positioning the company as a full-service natural stone manufacturer.",
  },
  {
    year: "2021",
    title: "Water Recycling & Green Operations",
    description: "Installed a closed-loop water recycling system in the cutting and grinding production lines. This initiative reduced fresh water consumption by over 70% and aligned operations with international environmental standards, opening new sustainability-conscious export markets.",
  },
  {
    year: "2024",
    title: "Capacity of 2.5M+ Sq. Ft. Annually",
    description: "Having doubled its machinery fleet, Kamal Industries now commands a combined annual processing throughput exceeding 2.5 million square feet, exporting Kota Stone, Mandana Stone, and bespoke architectural stone pieces to clients in Germany, the UK, UAE, USA, and across Southeast Asia.",
  },
];

export default function AboutTimeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Vertical center line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 md:-translate-x-1/2" />

      <div className="space-y-0">
        {events.map((event, idx) => {
          const isRight = idx % 2 === 0;
          const isActive = activeIndex === idx;

          return (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative flex items-start md:items-center gap-8 pb-12 pl-12 md:pl-0 ${
                isRight ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Box */}
              <div className={`flex-1 ${isRight ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                <button
                  onClick={() => setActiveIndex(isActive ? null : idx)}
                  className="group text-left md:text-inherit w-full focus:outline-none cursor-pointer"
                >
                  <div
                    className={`inline-block p-6 border rounded-sm transition-all duration-300 w-full md:max-w-sm ${
                      isActive
                        ? "border-stone-gold bg-white shadow-md"
                        : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
                    }`}
                  >
                    <span className="text-[10px] tracking-widest font-bold text-stone-gold uppercase font-sans block mb-1">
                      {event.year}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-neutral-dark mb-2">
                      {event.title}
                    </h3>
                    <motion.p
                      initial={false}
                      animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                      className="text-gray-500 text-xs font-light leading-relaxed overflow-hidden"
                    >
                      {event.description}
                    </motion.p>
                    {!isActive && (
                      <span className="text-[10px] text-primary font-semibold tracking-widest uppercase group-hover:text-stone-gold transition-colors">
                        Read more →
                      </span>
                    )}
                  </div>
                </button>
              </div>

              {/* Year Dot — centered on the line */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 md:top-auto flex items-center justify-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 shadow-sm ${
                    isActive
                      ? "bg-stone-gold border-stone-gold scale-125"
                      : "bg-white border-gray-300 group-hover:border-stone-gold"
                  }`}
                />
              </div>

              {/* Spacer for the other side */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
