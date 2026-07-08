"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Moon, Sun } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  dropdown?: { id: string; label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/products",
    dropdown: [
      { id: "nav-kota-blue-flooring", label: "Kota Blue Flooring",     href: "/products/kota-blue-flooring" },
      { id: "nav-kota-blue-slabs",    label: "Kota Blue Slabs",        href: "/products/kota-blue-slabs" },
      { id: "nav-kota-brown-flooring",label: "Kota Brown Flooring",    href: "/products/kota-brown-flooring" },
      { id: "nav-mandana-stone",      label: "Mandana Red Stone",      href: "/products/mandana-stone" },
      { id: "nav-wall-cladding",      label: "Wall Cladding Panels",   href: "/products/wall-cladding" },
      { id: "nav-steps",              label: "Steps & Stair Treads",   href: "/products/stone-steps" },
      { id: "nav-custom-cut",         label: "Custom Cut Stone",        href: "/products/custom-cut" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Resources",
    href: "/downloads",
    dropdown: [
      { id: "nav-specifications",  label: "Technical Specifications", href: "/specifications" },
      { id: "nav-downloads",       label: "Download Brochures",       href: "/downloads" },
      { id: "nav-services",        label: "Manufacturing Services",   href: "/services" },
    ],
  },
  { label: "Contact", href: "/contact" },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  // Dark mode persistence
  useEffect(() => {
    const stored = localStorage.getItem("ki-dark-mode");
    if (stored === "true") {
      document.documentElement.classList.add("dark");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDark(true);
    }
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("ki-dark-mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("ki-dark-mode", "false");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(false);
    }
  }, [pathname, isOpen]);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Identity / Logo */}
        <Link href="/" className="group flex flex-col focus:outline-none">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-2xl font-semibold tracking-[0.15em] text-primary transition-colors duration-300">
              KAMAL
            </span>
            <span className="text-[10px] tracking-[0.3em] font-sans text-stone-gold uppercase font-bold">
              Group
            </span>
          </div>
          <span className="text-[9px] tracking-[0.25em] font-sans text-gray-500 uppercase mt-0.5 group-hover:text-primary transition-colors duration-300">
            Industries & Enterprises
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors duration-300 py-2 focus:outline-none cursor-pointer ${
                      isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.label ? "rotate-180 text-stone-gold" : "text-gray-400"
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 py-2 block ${
                      isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBorder"
                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-stone-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-64 bg-white shadow-xl border border-gray-100 py-2 z-50 rounded-sm"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={subItem.href}
                            className={`block px-5 py-2.5 text-xs font-sans font-medium tracking-wider text-gray-700 hover:bg-neutral-light hover:text-primary transition-colors border-l-2 border-transparent hover:border-stone-gold`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* Call to Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-stone-gold hover:text-stone-gold transition-all cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-primary text-white text-xs font-semibold tracking-widest uppercase hover:bg-primary-dark transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer border border-transparent rounded-sm"
          >
            Request a Quote
          </Link>
          <div className="flex items-center gap-1.5 text-gray-400 pl-4 border-l border-gray-200">
            <Globe size={15} className="text-stone-gold" />
            <span className="text-[10px] tracking-widest uppercase font-bold text-gray-500">INTL</span>
          </div>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary focus:outline-none p-1 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="px-6 py-8 space-y-6 max-h-[85vh] overflow-y-auto">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <div key={item.label} className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="flex items-center justify-between w-full text-base font-semibold tracking-wider text-gray-800 focus:outline-none"
                        >
                          <span className={isActive ? "text-primary" : ""}>
                            {item.label}
                          </span>
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 text-stone-gold ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 mt-2 space-y-2 border-l border-gray-100 ml-1"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.id}
                                  href={subItem.href}
                                  className="block py-2 text-sm text-gray-600 hover:text-primary"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block text-base font-semibold tracking-wider ${
                          isActive ? "text-primary font-bold" : "text-gray-800"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              <div className="pt-4 flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="w-full text-center py-3 bg-primary text-white text-sm font-semibold tracking-widest uppercase hover:bg-primary-dark transition-all rounded-sm"
                >
                  Request a Quote
                </Link>
                <div className="flex items-center justify-center gap-2 text-gray-500 py-2 border-t border-gray-100">
                  <Globe size={16} className="text-stone-gold" />
                  <span className="text-xs tracking-widest uppercase font-bold">
                    International Quality Certified
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
