"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { value: 2.5, suffix: "M+", label: "Sq. Ft. Annual Capacity", description: "Square feet of stone processed and supplied per year" },
  { value: 39, suffix: "+", label: "Years of Operations", description: "Decades of continuous quarrying and manufacturing expertise" },
  { value: 18, suffix: "+", label: "Countries Exported To", description: "Global destinations receiving Kamal stone consignments" },
  { value: 250, suffix: "+", label: "Skilled Workforce", description: "Trained stonecutters, calibration operators, and quality inspectors" },
  { value: 98, suffix: "%", label: "Client Repeat Orders", description: "Clients who return for second and third consignments" },
  { value: 1, suffix: "mm", label: "Calibration Tolerance", description: "Maximum allowed dimensional variance across all processed slabs" },
];

function AnimatedNumber({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <span className="font-serif text-4xl md:text-5xl font-light text-stone-gold tabular-nums">
      {Number.isInteger(value) ? Math.round(display) : display.toFixed(1)}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-sm overflow-hidden">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: idx * 0.1 }}
          className="bg-white p-8 md:p-10 flex flex-col gap-3"
        >
          <AnimatedNumber value={stat.value} suffix={stat.suffix} active={isInView} />
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-neutral-dark font-sans mb-1">
              {stat.label}
            </span>
            <span className="block text-[11px] text-gray-400 font-light leading-relaxed">
              {stat.description}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
