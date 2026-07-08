"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, MapPin } from "lucide-react";

// ─── TESTIMONIALS DATA ────────────────────────────────────────────────────────
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  project: string;
  type: "Builder" | "Architect" | "Contractor" | "Homeowner";
  stars: number;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "We sourced high-grade calibrated Kota Blue Stone from Kamal Industries for our commercial plaza project in Mumbai. The uniform thickness of 22mm was exactly what we needed to prevent trip hazards. Exceptionally processed stone.",
    author: "Rajesh K. Sanghavi",
    role: "Managing Director",
    project: "Commercial Plaza & Walkways (15,000 sq ft)",
    type: "Builder",
    stars: 5,
    location: "Mumbai, Maharashtra",
  },
  {
    id: 2,
    quote: "Kamal Industries provided natural hones and custom-finished leathered brown stone for our resort project. The color consistency across bulk delivery was impressive, and the stone has natural slip resistance. Outstanding service.",
    author: "Ar. Meera Deshmukh",
    role: "Lead Landscape Architect",
    project: "Eco-Resort Villas (Honed Kota Brown)",
    type: "Architect",
    stars: 5,
    location: "Bengaluru, Karnataka",
  },
  {
    id: 3,
    quote: "I have worked with many quarry suppliers, but Kamal Industries stands out for structural integrity. Out of 3 truckloads delivered to our Jaipur hospital site, we had zero breakages. Their wooden crate packing is unmatched.",
    author: "Vikram Singh Chouhan",
    role: "Civil Contractor",
    project: "District Hospital Complex & Steps",
    type: "Contractor",
    stars: 5,
    location: "Jaipur, Rajasthan",
  },
  {
    id: 4,
    quote: "For my courtyard renovation, I wanted something durable yet natural. The Mandana red stone from Kamal Industries looks stunning. Its rich color doesn't fade under the harsh Delhi heat. A premium experience.",
    author: "Devendra Sharma",
    role: "Homeowner",
    project: "Residential Courtyard & Patio",
    type: "Homeowner",
    stars: 5,
    location: "New Delhi, Delhi",
  },
  {
    id: 5,
    quote: "Our primary concern for outdoor paving was durability and water absorption. Kamal's Kota stone blocks are incredibly dense. The water absorption is minimal, making it perfect for the Gujarat monsoon season. A reliable factory.",
    author: "Sanjay Patel",
    role: "Infrastructure Developer",
    project: "Premium Housing Society Paving",
    type: "Builder",
    stars: 5,
    location: "Ahmedabad, Gujarat",
  },
  {
    id: 6,
    quote: "The high-mirror polish on the Kota Blue slabs we received is breathtaking. They custom-cut the slabs to 90x90cm exactly as per client specification. It gives an ultra-premium, sustainable floor finish.",
    author: "Ar. Rohan Malhotra",
    role: "Principal Architect",
    project: "Modern Corporate Office Lobby",
    type: "Architect",
    stars: 5,
    location: "Chandigarh",
  },
];

const typeColors: Record<Testimonial["type"], string> = {
  Builder: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  Architect: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  Contractor: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  Homeowner: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
};

// ─── STAR RATING ──────────────────────────────────────────────────────────────
function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < count ? "#C5A880" : "none"}
          className={i < count ? "text-stone-gold" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function TestimonialSlider() {
  const [filter, setFilter] = useState<"All" | Testimonial["type"]>("All");

  const filteredTestimonials = filter === "All"
    ? testimonials
    : testimonials.filter((t) => t.type === filter);

  return (
    <div className="relative">
      {/* Type filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {(["All", "Builder", "Architect", "Contractor", "Homeowner"] as const).map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border transition-all duration-300 font-sans cursor-pointer ${
              filter === type
                ? "bg-stone-gold border-stone-gold text-neutral-dark shadow-md"
                : "border-gray-200 bg-white text-gray-500 hover:border-stone-gold hover:text-stone-gold"
            }`}
          >
            {type}s
          </button>
        ))}
      </div>

      {/* Luxury Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredTestimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
              className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-stone-gold/30 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Decorative top gold gradient strip */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-stone-gold/20 via-stone-gold to-stone-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Quote icon background */}
              <div className="absolute -top-4 -right-4 text-stone-gold/5 pointer-events-none transition-colors group-hover:text-stone-gold/10 duration-300">
                <Quote size={110} />
              </div>

              <div>
                {/* Type badge and star rating */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border font-sans ${typeColors[t.type]}`}>
                    {t.type}
                  </span>
                  <StarRating count={t.stars} />
                </div>

                {/* Quote text */}
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-6 italic relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div>
                <div className="w-full h-[1px] bg-gray-100 my-5" />

                {/* Author Info */}
                <div className="flex items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-3">
                    {/* Initials Avatar */}
                    <div className="w-10 h-10 rounded-full bg-primary/5 text-stone-gold border border-stone-gold/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="font-serif text-sm font-medium">
                        {t.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <span className="font-sans font-semibold text-neutral-dark text-sm block leading-tight">
                        {t.author}
                      </span>
                      <span className="text-[10px] text-gray-400 font-light block mt-0.5">
                        {t.role}
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[9px] text-stone-gold font-bold uppercase tracking-widest block font-sans">
                      {t.project}
                    </span>
                    <span className="text-[10px] text-gray-400 font-light inline-flex items-center gap-1 mt-0.5">
                      <MapPin size={10} className="text-stone-gold" />
                      {t.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
