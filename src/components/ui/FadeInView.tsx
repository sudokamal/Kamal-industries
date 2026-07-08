"use client";

import React from "react";
import { motion } from "framer-motion";

/** Wraps any children in a scroll-triggered fade-in-up animation */
export function FadeInView({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const initial =
    direction === "up"
      ? { opacity: 0, y: 24 }
      : direction === "left"
      ? { opacity: 0, x: -24 }
      : { opacity: 0, x: 24 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
