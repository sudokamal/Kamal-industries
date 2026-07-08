"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className = "",
  light = false,
}: SectionTitleProps) {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center justify-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col mb-16 ${alignmentClass[align]} ${className}`}
    >
      {subtitle && (
        <span className="text-[10px] md:text-xs font-sans tracking-[0.25em] uppercase font-bold text-stone-gold mb-3">
          {subtitle}
        </span>
      )}
      
      <h2
        className={`font-serif text-3xl md:text-5xl font-light tracking-wide ${
          light ? "text-white" : "text-neutral-dark"
        }`}
      >
        {title}
      </h2>
      
      <div className="w-16 h-[1.5px] bg-stone-gold mt-6" />
    </motion.div>
  );
}
