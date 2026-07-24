"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Check, Languages } from "lucide-react";

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", flag: "🇮🇳" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇦🇪" },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google?: any;
  }
}

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const [currentLang, setCurrentLang] = useState<Language>(LANGUAGES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize Google Translate Script
  useEffect(() => {
    // Check saved language
    const savedCode = localStorage.getItem("ki-lang");
    if (savedCode) {
      const found = LANGUAGES.find((l) => l.code === savedCode);
      if (found) setCurrentLang(found);
    }

    if (typeof window !== "undefined" && !document.getElementById("google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.id = "google-translate-script";
      addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;

      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,hi,gu,de,es,ar",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };

      document.body.appendChild(addScript);
    }
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem("ki-lang", lang.code);
    setIsOpen(false);

    // Apply Google Translate Cookie
    if (typeof document !== "undefined") {
      const domain = window.location.hostname;
      document.cookie = `googtrans=/en/${lang.code}; path=/; domain=${domain}`;
      document.cookie = `googtrans=/en/${lang.code}; path=/`;

      // Trigger translate element change if initialized
      const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (combo) {
        combo.value = lang.code;
        combo.dispatchEvent(new Event("change"));
      } else {
        window.location.reload();
      }
    }
  };

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      {/* Hidden Google Translate Element Container */}
      <div id="google_translate_element" className="hidden" />

      {/* Language Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-neutral-dark/80 backdrop-blur-md border border-stone-gold/30 hover:border-stone-gold text-neutral-dark dark:text-white shadow-sm hover:shadow-md transition-all cursor-pointer font-sans"
        aria-label="Select Language"
      >
        {/* Glow Icon Badge */}
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FAF0D7] via-[#D4AF37] to-[#8C6D3B] flex items-center justify-center text-neutral-900 shadow-xs group-hover:scale-110 transition-transform">
          <Languages size={13} />
        </div>

        <span className="text-xs font-bold tracking-wider uppercase font-sans flex items-center gap-1.5">
          <span>{currentLang.flag}</span>
          <span className="hidden sm:inline">{currentLang.code.toUpperCase()}</span>
        </span>

        <ChevronDown
          size={13}
          className={`text-stone-gold transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-52 bg-white dark:bg-neutral-dark shadow-2xl rounded-2xl border border-stone-gold/20 py-2 z-50 overflow-hidden font-sans"
          >
            <div className="px-4 py-2 border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-widest text-stone-gold">
                Select Language
              </span>
              <Globe size={13} className="text-stone-gold" />
            </div>

            <div className="max-h-60 overflow-y-auto py-1">
              {LANGUAGES.map((lang) => {
                const isSelected = currentLang.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-xs font-medium transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-stone-gold/15 text-stone-gold font-bold"
                        : "text-gray-700 dark:text-gray-200 hover:bg-neutral-light dark:hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{lang.flag}</span>
                      <div className="text-left">
                        <span className="block leading-none">{lang.nativeName}</span>
                        <span className="text-[9px] text-gray-400 dark:text-gray-500 tracking-wider uppercase font-sans">
                          {lang.name}
                        </span>
                      </div>
                    </div>
                    {isSelected && <Check size={14} className="text-stone-gold" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
