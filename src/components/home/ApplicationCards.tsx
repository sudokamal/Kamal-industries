"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2, Home, Landmark, Hotel, Warehouse, Footprints,
  Trees as TreePine, Flame, Car, Waves, Factory, Mountain, ChevronRight
} from "lucide-react";
import Icon3D from "@/components/ui/Icon3D";

interface ApplicationCardData {
  icon: React.ReactNode;
  name: string;
  desc: string;
  image: string;
  variant: "gold" | "emerald" | "blue" | "amber" | "charcoal" | "white";
}

const applications: ApplicationCardData[] = [
  {
    icon: <Building2 size={24} />,
    name: "Commercial Lobbies",
    desc: "Honed and polished Kota Blue Stone creates an elegant, ultra-durable flooring surface for high-traffic commercial building foyers and office towers.",
    image: "/Kota Blue Stone.jpeg",
    variant: "gold",
  },
  {
    icon: <Home size={24} />,
    name: "Residential Villas",
    desc: "Cool, natural limestone flooring for living rooms, verandas, and bedrooms. Provides natural climate control and timeless aesthetic appeal.",
    image: "/Kota Brown Stone.jpeg",
    variant: "amber",
  },
  {
    icon: <Landmark size={24} />,
    name: "Government & Public Buildings",
    desc: "Specified across Indian railways, court complexes, and government offices for its 50+ year service life and minimal maintenance costs.",
    image: "/Large Format Slabs.jpeg",
    variant: "charcoal",
  },
  {
    icon: <Hotel size={24} />,
    name: "Hotels & Hospitality",
    desc: "Large-format Kota Blue slabs and wall cladding panels bring raw industrial luxury to boutique hotel receptions, corridors, and dining areas.",
    image: "/Gallery3.jpeg",
    variant: "gold",
  },
  {
    icon: <Warehouse size={24} />,
    name: "Corridors & Hallways",
    desc: "Machine-calibrated tiles laid with tight grout lines ensure smooth, noise-reducing foot traffic in long hospital and institution corridors.",
    image: "/Gallery2.jpeg",
    variant: "blue",
  },
  {
    icon: <Flame size={24} />,
    name: "Temple & Heritage Paving",
    desc: "Natural, sacred stone with spiritual resonance — Mandana Red quartzite and Kota Blue limestone are traditional temple flooring choices.",
    image: "/Mandana Red Stone.jpeg",
    variant: "amber",
  },
  {
    icon: <TreePine size={24} />,
    name: "Outdoor Landscaping",
    desc: "Weather-resistant in all Indian climates — garden landscapes, driveways, boundary walls, and villa terrace paving.",
    image: "/Garden.jpeg",
    variant: "emerald",
  },
  {
    icon: <Footprints size={24} />,
    name: "Garden Pathways",
    desc: "Natural split and sandblasted Kota Stone for beautiful, non-slip garden pathways and open courtyard walkways.",
    image: "/Gallery15.jpeg",
    variant: "emerald",
  },
  {
    icon: <Car size={24} />,
    name: "Parking Areas & Driveways",
    desc: "High compressive strength (130-180 MPa) and weather resistance make Kota Stone ideal for heavy vehicle driveways and parking lots.",
    image: "/Gallery1.jpeg",
    variant: "charcoal",
  },
  {
    icon: <Waves size={24} />,
    name: "Swimming Pool Decks",
    desc: "Naturally slip-resistant sandblasted Kota Stone is the ideal safety-conscious choice for pool surrounds and wet area paving.",
    image: "/Gallery21.jpeg",
    variant: "blue",
  },
  {
    icon: <Factory size={24} />,
    name: "Industrial & Warehouse Flooring",
    desc: "Extreme load-bearing capacity and chemical resistance make Kota Stone ideal for factory floors and heavy material storage yards.",
    image: "/Gallery11.jpeg",
    variant: "charcoal",
  },
  {
    icon: <Mountain size={24} />,
    name: "Farm Houses & Courtyards",
    desc: "Natural earthy aesthetics and rustic character — Kota Brown Stone is the preferred choice for farmhouse verandas and rustic courtyards.",
    image: "/Gallery6.jpeg",
    variant: "amber",
  },
];

export default function ApplicationCards() {
  return (
    <section className="py-24 bg-neutral-light/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-3 block font-sans">
            Architectural Applications
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-dark mb-6">
            Engineered for Every Project Domain
          </h2>
          <div className="w-16 h-[2px] bg-stone-gold mx-auto mb-6" />
          <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
            From heavy-traffic commercial lobbies to tranquil garden pathways, Kota Stone delivers unparalleled performance across residential, commercial, and industrial spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-6 border border-white/10 group min-h-[280px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={app.image}
                  alt={app.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/95 via-neutral-dark/80 to-neutral-dark/40" />
              </div>

              <div className="relative z-10">
                <div className="mb-5">
                  <Icon3D variant={app.variant} size="sm">
                    {app.icon}
                  </Icon3D>
                </div>
                <h3 className="font-serif text-xl font-medium mb-3 text-white">{app.name}</h3>
                <p className="text-stone-300 text-xs font-light leading-relaxed mb-6">
                  {app.desc}
                </p>
              </div>

              <Link
                href="/products"
                className="relative z-10 inline-flex items-center gap-1.5 text-stone-gold text-xs font-bold uppercase tracking-widest font-sans group-hover:translate-x-1 transition-transform"
              >
                View Stone Specs <ChevronRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
