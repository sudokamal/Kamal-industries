"use client";

import React from "react";
import { motion } from "framer-motion";

interface Icon3DProps {
  children: React.ReactNode;
  variant?: "gold" | "emerald" | "blue" | "amber" | "charcoal" | "white";
  size?: "sm" | "md" | "lg" | "xl";
  floating?: boolean;
  className?: string;
}

const variants = {
  gold: {
    bg: "bg-gradient-to-br from-[#FAF0D7] via-[#D4AF37] to-[#8C6D3B]",
    shadow: "shadow-xl shadow-amber-500/20 hover:shadow-amber-400/40",
    border: "border-amber-200/60",
    text: "text-neutral-900",
    glow: "from-amber-400/50 via-yellow-500/30 to-amber-600/10",
    accent: "bg-amber-300/30",
  },
  emerald: {
    bg: "bg-gradient-to-br from-emerald-300 via-emerald-600 to-teal-900",
    shadow: "shadow-xl shadow-emerald-500/20 hover:shadow-emerald-400/40",
    border: "border-emerald-200/50",
    text: "text-white",
    glow: "from-emerald-400/50 via-teal-500/30 to-emerald-700/10",
    accent: "bg-emerald-300/30",
  },
  blue: {
    bg: "bg-gradient-to-br from-sky-300 via-blue-600 to-indigo-900",
    shadow: "shadow-xl shadow-blue-500/20 hover:shadow-blue-400/40",
    border: "border-sky-200/50",
    text: "text-white",
    glow: "from-sky-400/50 via-blue-500/30 to-indigo-700/10",
    accent: "bg-sky-300/30",
  },
  amber: {
    bg: "bg-gradient-to-br from-amber-300 via-orange-500 to-amber-800",
    shadow: "shadow-xl shadow-orange-500/20 hover:shadow-orange-400/40",
    border: "border-amber-200/50",
    text: "text-white",
    glow: "from-orange-400/50 via-amber-500/30 to-orange-700/10",
    accent: "bg-amber-300/30",
  },
  charcoal: {
    bg: "bg-gradient-to-br from-stone-800 via-neutral-900 to-black",
    shadow: "shadow-xl shadow-black/50 hover:shadow-amber-500/20",
    border: "border-stone-600/50",
    text: "text-stone-gold",
    glow: "from-amber-400/30 via-stone-500/20 to-transparent",
    accent: "bg-stone-500/30",
  },
  white: {
    bg: "bg-gradient-to-br from-white via-stone-50 to-stone-200",
    shadow: "shadow-xl shadow-stone-300/40 hover:shadow-amber-500/30",
    border: "border-white/90",
    text: "text-neutral-900",
    glow: "from-white/60 via-stone-200/30 to-transparent",
    accent: "bg-white/40",
  },
};

const sizes = {
  sm: "w-11 h-11 rounded-2xl p-2.5 text-sm",
  md: "w-14 h-14 rounded-2xl p-3.5 text-base",
  lg: "w-16 h-16 rounded-2xl p-4 text-lg",
  xl: "w-20 h-20 rounded-3xl p-5 text-xl",
};

export default function Icon3D({
  children,
  variant = "gold",
  size = "md",
  floating = true,
  className = "",
}: Icon3DProps) {
  const style = variants[variant];
  const sizeStyle = sizes[size];

  return (
    <motion.div
      whileHover={{
        y: -6,
        rotateX: 8,
        rotateY: -8,
        scale: 1.08,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 18 }}
      className={`group relative inline-flex items-center justify-center ${sizeStyle} ${style.bg} ${style.shadow} ${style.border} ${style.text} border backdrop-blur-md cursor-pointer transition-all duration-300 transform-gpu preserve-3d ${className}`}
    >
      {/* Outer ambient glow */}
      <div
        className={`absolute -inset-1.5 rounded-3xl bg-gradient-to-r ${style.glow} blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10`}
      />

      {/* Top Gloss Highlights */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/45 via-white/15 to-transparent rounded-t-2xl pointer-events-none" />

      {/* Inner Metallic Rim */}
      <div className="absolute inset-[1px] rounded-[14px] border border-white/20 pointer-events-none" />

      {/* Icon Graphic Container with 3D Depth */}
      <div className="relative z-10 flex items-center justify-center drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-110">
        {children}
      </div>

      {/* Bottom Subtle Bevel Shadow for 3D elevation */}
      <div className="absolute inset-x-1 bottom-0 h-1 bg-black/20 rounded-b-2xl pointer-events-none" />
    </motion.div>
  );
}

