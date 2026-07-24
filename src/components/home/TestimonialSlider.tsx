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
    quote: "We ordered 15,000 sq ft Kota Blue tiles for our commercial plaza in Navi Mumbai. Honestly thickness was uniform 22mm as promised so laying work went fast without any height issues. Goods arrived on time.",
    author: "Rajesh K. Sanghavi",
    role: "Managing Director",
    project: "Commercial Plaza & Walkways (15k sqft)",
    type: "Builder",
    stars: 5,
    location: "Mumbai, Maharashtra",
  },
  {
    id: 2,
    quote: "Ordered leather finish Kota brown for a resort near Nandi Hills. Colour consistency across 4 trucks was really good. Natural non slip feel is perfect for pool side walking area.",
    author: "Ar. Meera Deshmukh",
    role: "Lead Landscape Architect",
    project: "Eco-Resort Villas (Kota Brown)",
    type: "Architect",
    stars: 5,
    location: "Bengaluru, Karnataka",
  },
  {
    id: 3,
    quote: "3 truckloads received at our SMS hospital expansion site in Jaipur. Not even single stone was broken because wooden crate packing was so tight. Kamal bhai handled dispatch personally.",
    author: "Vikram Singh Chouhan",
    role: "Civil Contractor",
    project: "District Hospital Complex",
    type: "Contractor",
    stars: 5,
    location: "Jaipur, Rajasthan",
  },
  {
    id: 4,
    quote: "Installed Mandana red stone in my farm house courtyard 2 years back. Still looking brand new despite heavy Delhi rain and heat. No fading at all.",
    author: "Devendra Sharma",
    role: "Homeowner",
    project: "Farmhouse Courtyard & Patio",
    type: "Homeowner",
    stars: 5,
    location: "New Delhi, Delhi",
  },
  {
    id: 5,
    quote: "Density of Kota stone from Ramganjmandi factory is very high. Water absorption is practically zero so no white salt marks coming up after monsoon laying.",
    author: "Sanjay Patel",
    role: "Infrastructure Developer",
    project: "Housing Society Paving",
    type: "Builder",
    stars: 5,
    location: "Ahmedabad, Gujarat",
  },
  {
    id: 6,
    quote: "We needed custom 90x90 cm mirror polished Kota blue slabs for corporate office reception. They cut exact size per drawing. Finish is super smooth.",
    author: "Ar. Rohan Malhotra",
    role: "Principal Architect",
    project: "Corporate Office Reception",
    type: "Architect",
    stars: 5,
    location: "Chandigarh",
  },
  {
    id: 7,
    quote: "Specified 30mm Kota Blue for heritage hotel in Jubilee Hills. Edge finishing was clean and prompt delivery before deadline.",
    author: "Ar. Vikramaditya Rao",
    role: "Principal Architect",
    project: "Heritage Boutique Hotel",
    type: "Architect",
    stars: 5,
    location: "Hyderabad, Telangana",
  },
  {
    id: 8,
    quote: "Regular customer of Kamal Industries since 2018. Factory rate is fair and loading staff is careful. Highly recommended for bulk projects.",
    author: "Anand Brothers Infra",
    role: "Turnkey Civil Contractor",
    project: "Transport Terminal Paving",
    type: "Contractor",
    stars: 5,
    location: "Pune, Maharashtra",
  },
  {
    id: 9,
    quote: "Purchased 40k sqft Kota stone for IT park project in Salt Lake. Direct factory rates saved us nearly 15% comparing to local market dealers.",
    author: "Amit Goyal",
    role: "Project Director",
    project: "Salt Lake IT Park Complex",
    type: "Builder",
    stars: 5,
    location: "Kolkata, West Bengal",
  },
  {
    id: 10,
    quote: "We put Kota Brown in our ECR beach house veranda. Very cool to walk barefoot during summer afternoon. Good guidance by sales team.",
    author: "Dr. Sunita Reddy",
    role: "Villa Owner",
    project: "ECR Beach Villa Veranda",
    type: "Homeowner",
    stars: 5,
    location: "Chennai, Tamil Nadu",
  },
  {
    id: 11,
    quote: "Using split face Kota cladding for villa exterior in Goa. Withstands heavy rain and salt moisture without peeling or rusting.",
    author: "Ar. Sameer Kulkarni",
    role: "Landscape Architect",
    project: "Coastal Villa Exterior Cladding",
    type: "Architect",
    stars: 5,
    location: "Panaji, Goa",
  },
  {
    id: 12,
    quote: "Received 25,000 sqft calibrated tiles for university lobby. Dispatch was quick and driver reached Lucknow in 3 days.",
    author: "Praveen Varma",
    role: "Chief Site Engineer",
    project: "University Campus Lobbies",
    type: "Contractor",
    stars: 5,
    location: "Lucknow, Uttar Pradesh",
  },
  {
    id: 13,
    quote: "Good quality Kota stone for textile market flooring in Surat. Heavy trolley movement everyday but zero cracks till now.",
    author: "Mukeshbhai Prajapati",
    role: "Commercial Contractor",
    project: "Textile Market Floor (20k sqft)",
    type: "Contractor",
    stars: 5,
    location: "Surat, Gujarat",
  },
  {
    id: 14,
    quote: "Ordered 18x18 inch natural split Kota blue for my terrace garden. Looks very authentic and zero maintenance required.",
    author: "Siddharth Mehta",
    role: "Homeowner",
    project: "Terrace Garden Paving",
    type: "Homeowner",
    stars: 5,
    location: "Ahmedabad, Gujarat",
  },
  {
    id: 15,
    quote: "Supplied 50,000 sqft Kota stone for township project in Indore. Factory manager kept us updated on WhatsApp for every vehicle dispatch.",
    author: "R. K. Infrastructure Ltd",
    role: "Project Manager",
    project: "Township Residential Paving",
    type: "Builder",
    stars: 5,
    location: "Indore, Madhya Pradesh",
  },
  {
    id: 16,
    quote: "Mandana red stone tile pattern in our client's villa entrance came out amazing. Truly royal Rajasthani look.",
    author: "Ar. Neha Agarwal",
    role: "Interior Designer",
    project: "Golf Course Villa Entrance",
    type: "Architect",
    stars: 5,
    location: "Gurgaon, Haryana",
  },
  {
    id: 17,
    quote: "Full truck of 30mm stair steps delivered to Ludhiana. Single piece 4ft steps without joints made the staircase look massive.",
    author: "Gurpreet Singh",
    role: "Building Contractor",
    project: "Commercial Building Staircase",
    type: "Contractor",
    stars: 5,
    location: "Ludhiana, Punjab",
  },
  {
    id: 18,
    quote: "We buy wholesale stock from Kamal Industries for our Nagpur depot. Material quality is always Grade A and pricing is competitive.",
    author: "Mahesh Agarwal & Sons",
    role: "Stone Wholesale Dealer",
    project: "Wholesale Depot Stock Supply",
    type: "Builder",
    stars: 5,
    location: "Nagpur, Maharashtra",
  },
  {
    id: 19,
    quote: "Shipped Kota slabs to Vizag port line. Quality control was done before packing so no issue found during unloading.",
    author: "Venkatesh Builders",
    role: "Site Manager",
    project: "Port Area Complex Paving",
    type: "Builder",
    stars: 5,
    location: "Visakhapatnam, AP",
  },
  {
    id: 20,
    quote: "Beautiful natural Kota stone floor in our Udaipur home. Feels cool in summer and natural pattern looks far better than vitrified tiles.",
    author: "Dr. Harish Chandra",
    role: "Homeowner",
    project: "Residence Interior Flooring",
    type: "Homeowner",
    stars: 5,
    location: "Udaipur, Rajasthan",
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
            {type}s ({type === "All" ? testimonials.length : testimonials.filter((t) => t.type === type).length})
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
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.03 }}
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
                    <span className="text-[9px] text-stone-gold font-bold uppercase tracking-widest block font-sans max-w-[130px] truncate">
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
