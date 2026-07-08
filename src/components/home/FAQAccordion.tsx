"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "What is Kota Stone?",
    a: "Kota Stone is a fine-grained, naturally durable variety of limestone quarried in the Ramganjmandi region of Kota, Rajasthan. Known for its high compressive strength, slip resistance, and low porosity, it is widely used for residential flooring, commercial complexes, industrial walkways, garden paths, and wall cladding.",
  },
  {
    q: "What sizes are available?",
    a: "We supply Kota Stone in standard tile and slab dimensions, including 12×12, 18×18, 22×22, 22×15, and 22×11 inches. We also offer large-format slabs up to 4×4 ft (or 48×48 in) to minimize joints in premium installations.",
  },
  {
    q: "Do you provide custom cutting?",
    a: "Yes, we provide custom sizing and precision cutting. Using our factory's diamond-blade gang saws and CNC machines, we can cut Kota Blue, Kota Brown, and Mandana Red stone to any specific architectural dimensions with a tolerance of ±1mm.",
  },
  {
    q: "Can you deliver anywhere in India?",
    a: "Yes, we coordinate safe road transport to deliver Kota Stone directly to project sites and dealer yards across all Indian states and Union Territories, including Maharashtra, Gujarat, Delhi-NCR, Karnataka, Tamil Nadu, and West Bengal.",
  },
  {
    q: "Do you export internationally?",
    a: "Yes, international exports are handled through Mundra and Kandla ports. We pack the stones in seaworthy, export-grade, fumigated wooden crates with plastic wrapping to prevent damage during sea transit.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Our standard Minimum Order Quantity (MOQ) is one full truckload (approx. 15 to 21 tons, or roughly 3,000 to 4,000 sq.ft depending on thickness), which enables us to offer direct wholesale pricing. Smaller quantities can be coordinated depending on the project requirements.",
  },
  {
    q: "How can I request a quotation?",
    a: "You can request a quote by messaging us on WhatsApp (+91 92148 30464), calling us directly, or submitting an enquiry form on our website. Please specify the stone type, thickness, finish, size, and estimated quantity for a factory-direct price list.",
  },
  {
    q: "How long does delivery take?",
    a: "For standard in-stock sizes, domestic dispatch takes 3 to 7 working days. For custom cut dimensions or large commercial volumes, delivery timelines range from 7 to 15 working days depending on order size and delivery location.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  // Dynamic FAQ Page Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="space-y-2 max-w-4xl mx-auto">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-white/8 rounded-lg overflow-hidden bg-white/3 backdrop-blur-sm"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left group focus:outline-none cursor-pointer"
            aria-expanded={open === i}
          >
            <span className={`font-sans text-sm font-medium transition-colors duration-200 ${open === i ? "text-stone-gold" : "text-white/90 group-hover:text-white"}`}>
              {faq.q}
            </span>
            <motion.span
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`shrink-0 ml-4 ${open === i ? "text-stone-gold" : "text-white/40"}`}
            >
              <ChevronDown size={18} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pt-1 border-t border-white/5">
                  <p className="text-sm text-white/60 font-light leading-relaxed font-sans">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
