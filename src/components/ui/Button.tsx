"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "gold" | "goldOutline" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans uppercase tracking-[0.18em] font-semibold text-xs transition-all duration-300 rounded-sm cursor-pointer select-none focus:outline-none";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-[10px]",
    md: "px-8 py-3.5 text-xs",
    lg: "px-10 py-4.5 text-xs",
  };

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow",
    secondary: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
    gold: "bg-stone-gold text-white hover:bg-stone-gold-dark shadow-sm hover:shadow",
    goldOutline:
      "bg-transparent border border-stone-gold text-stone-gold hover:bg-stone-gold hover:text-white",
    text: "bg-transparent p-0 text-primary hover:text-stone-gold tracking-widest relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-stone-gold after:transition-all hover:after:w-full",
  };

  const buttonContent = (
    <motion.span
      whileHover={{ y: -1 }}
      whileTap={{ y: 1 }}
      className="flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {buttonContent}
    </button>
  );
}
