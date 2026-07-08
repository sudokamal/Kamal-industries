"use client";

import React, { useEffect, useRef, useState } from "react";

// ─── STAT ITEMS ───────────────────────────────────────────────────────────────
interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  prefix?: string;
  icon: string;
}

const stats: StatItem[] = [
  {
    value: 40,
    suffix: "+",
    label: "Years Experience",
    sublabel: "Since 1985",
    icon: "🌟",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Happy Customers",
    sublabel: "Satisfied Clients",
    icon: "🤝",
  },
  {
    value: 1000000,
    suffix: "+",
    label: "sq.ft Stone Delivered",
    sublabel: "Total Dispatch",
    icon: "📐",
  },
  {
    value: 25,
    suffix: "+",
    label: "States Served",
    sublabel: "Pan-India Logistics",
    icon: "🚚",
  },
  {
    value: 100,
    suffix: "+",
    label: "Dealers Network",
    sublabel: "Distributors",
    icon: "🏭",
  },
  {
    value: 100,
    suffix: "%",
    label: "Quality Inspection",
    sublabel: "Zero Error Standard",
    icon: "🛡️",
  },
];

// ─── ANIMATED COUNTER ──────────────────────────────────────────────────────────
function Counter({
  target,
  suffix,
  prefix = "",
}: {
  target: number;
  suffix: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 80;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {count >= 1000 ? count.toLocaleString("en-IN") : count}
      {suffix}
    </span>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function StatsCounter() {
  return (
    <div className="py-2">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`relative text-center py-12 px-6 border-b border-white/5 group
              ${i % 2 === 0 ? "" : ""}
              ${i < 4 ? "md:border-b" : "md:border-b-0"}
              ${i < 3 ? "lg:border-b-0" : ""}
              ${i < stats.length - 1 ? "lg:border-r lg:border-white/8" : ""}
              hover:bg-white/3 transition-colors duration-300
            `}
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "radial-gradient(ellipse at center, rgba(197,168,128,0.05) 0%, transparent 70%)" }}
            />

            {/* Icon */}
            <div className="text-2xl mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
              {stat.icon}
            </div>

            {/* Number */}
            <div className="font-serif text-4xl md:text-5xl font-extralight text-stone-gold leading-none mb-2">
              <Counter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            </div>

            {/* Label */}
            <div className="text-white/70 text-xs font-semibold font-sans">{stat.label}</div>

            {/* Sublabel */}
            <div className="text-[9px] tracking-[0.25em] font-bold uppercase text-white/30 font-sans mt-1">
              {stat.sublabel}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
