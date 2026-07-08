import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Precision Stone Cutting & Finishing Services | Kamal Industries",
  description:
    "Stone cutting, surface calibration, custom sizing, quality grading, and export packing services from Kamal Industries — direct Kota Stone manufacturer in Ramganjmandi, Kota, Rajasthan.",
  alternates: {
    canonical: "https://kamalindustries.in/services",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kamalindustries.in/services",
    siteName: "Kamal Industries & Enterprises",
    title: "Precision Stone Cutting & Finishing Services | Kamal Industries",
    description:
      "Precision stone cutting, calibration, custom sizing, quality grading, and export packing services from Kamal Industries — direct Kota Stone manufacturer in Ramganjmandi, Kota, Rajasthan.",
    images: [
      {
        url: "/cutting-machine-2.jpeg",
        width: 1200,
        height: 630,
        alt: "Precision stone cutting services at Kamal Industries factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precision Stone Cutting & Finishing Services | Kamal Industries",
    description:
      "Precision stone cutting, calibration, custom sizing, quality grading, and export packing services from Kamal Industries.",
    images: ["/cutting-machine-2.jpeg"],
  },
};

const services = [
  {
    number: "01",
    title: "Precision Stone Cutting & Calibration",
    description:
      "Our factory operates multi-blade diamond gang saws and automated calibration machines that cut and calibrate Kota Stone slabs to a thickness tolerance of ±1mm. This eliminates variation across large project orders and ensures seamless installation on site.",
    image: "/cutting-machine-2.jpeg",
    alt: "Diamond blade stone cutting machine at Kamal Industries factory",
    points: [
      "Multi-blade gang saws for high-volume output",
      "±1mm thickness tolerance across all batches",
      "Custom sizes from 6 inches to 4 feet per side",
      "Wet cutting with water recycling system",
    ],
  },
  {
    number: "02",
    title: "Surface Finishing",
    description:
      "Every Kota Stone surface finish — from the raw natural split to a mirror polish — is handled in-house at our Ramganjmandi factory. We operate dedicated finishing lines for each surface type, ensuring consistent results across bulk orders.",
    image: "/cutting-machine-1.jpeg",
    alt: "Stone finishing machine at Kamal Industries factory",
    points: [
      "Natural Split — straight from the quarry",
      "Honed — smooth, matte, non-reflective",
      "Polished — high-gloss mirror finish",
      "Leather / Brushed — textured, contemporary",
      "Sandblasted — slip-resistant for exterior use",
      "Flamed — high-heat anti-slip treatment",
    ],
  },
  {
    number: "03",
    title: "Quality Grading & Inspection",
    description:
      "Before any stone leaves our factory, it goes through a rigorous multi-stage grading process. Each piece is individually inspected for laminations, micro-cracks, colour variation, and dimensional accuracy. Only stone that passes all checks is packed for dispatch.",
    image: "/kota-blue-2.jpeg",
    alt: "Kota Blue Stone quality inspection at Kamal Industries",
    points: [
      "Individual piece-by-piece hand inspection",
      "Colour uniformity grading (Grade A / Grade B)",
      "Structural integrity check — no laminations",
      "Final dimension verification before packing",
    ],
  },
  {
    number: "04",
    title: "Loading, Packing & Dispatch",
    description:
      "Our experienced loading team handles all packing and dispatch operations from the factory yard. For domestic delivery, stone is packed in standard wooden pallets or loose loading as per requirement. For export orders, we pack in fumigated seaworthy wooden crates via Mundra and Kandla ports.",
    image: "/workers-loading-1.jpeg",
    alt: "Workers loading Kota Stone slabs onto transport vehicle at Kamal Industries",
    points: [
      "Experienced team — zero breakage packing",
      "Domestic transport — loose or palletised",
      "Export packing — fumigated seaworthy crates",
      "Port coordination via Mundra & Kandla",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Page Header */}
      <section className="relative bg-neutral-dark text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/factory-yard-1.jpeg"
            alt="Kamal Industries manufacturing facility — Amarpura, Ramganjmandi"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-dark/85 via-neutral-dark/65 to-neutral-dark/40" />
        </div>

        <Container className="relative z-10 max-w-4xl">
          <span className="text-[10px] md:text-xs tracking-[0.4em] font-bold uppercase text-stone-gold mb-5 block font-sans">
            Kamal Industries · Ramganjmandi
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-extralight tracking-tight mb-6 leading-[1.1]">
            Manufacturing<br />
            <span className="italic font-normal text-stone-gold">Services</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-light max-w-xl leading-relaxed">
            From raw stone block to calibrated, finished, and packed product — everything
            happens at our factory in Amarpura, Ramganjmandi. We manufacture Kota Blue Stone,
            Kota Brown Stone, and Mandana Stone for domestic and export markets.
          </p>
        </Container>
      </section>

      {/* Services — alternating layout */}
      <div className="bg-white">
        {services.map((service, i) => (
          <div
            key={service.number}
            className={`border-b border-gray-100 ${i % 2 !== 0 ? "bg-neutral-light/20" : "bg-white"}`}
          >
            <Container className="py-20 md:py-28">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${i % 2 !== 0 ? "direction-rtl" : ""}`}>

                {/* Image */}
                <div className={`relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-5 left-5 bg-primary/90 backdrop-blur-sm text-white font-serif text-2xl font-light w-14 h-14 flex items-center justify-center rounded-sm">
                    {service.number}
                  </div>
                </div>

                {/* Text */}
                <div className={`space-y-6 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div>
                    <span className="text-[9px] tracking-[0.3em] font-bold uppercase text-stone-gold font-sans block mb-2">
                      Service {service.number}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-dark leading-tight">
                      {service.title}
                    </h2>
                    <div className="w-12 h-[1.5px] bg-stone-gold mt-5" />
                  </div>

                  <p className="text-gray-500 text-sm font-light leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 size={15} className="text-stone-gold shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 font-light">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </div>
        ))}
      </div>

      {/* What We Manufacture */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[9px] tracking-[0.3em] font-bold uppercase text-stone-gold font-sans block">
                What We Manufacture
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-white leading-tight">
                Kota Stone Products — Direct from Factory
              </h2>
              <div className="w-12 h-[1.5px] bg-stone-gold" />
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Kota Blue Stone Flooring",
                  "Kota Brown Stone Flooring",
                  "Mandana Red Stone",
                  "Large Format Slabs",
                  "Wall Cladding Panels",
                  "Steps & Stair Treads",
                  "Custom Architectural Sizes",
                  "Export-Grade Batches",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <ArrowRight size={12} className="text-stone-gold shrink-0" />
                    <span className="text-sm text-white/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/products"
                className="inline-block bg-stone-gold text-neutral-dark text-[11px] font-bold tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-stone-gold/90 transition-colors font-sans mt-2"
              >
                Browse All Products
              </Link>
            </div>

            {/* Factory photo grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/kota-blue-1.jpeg", alt: "Kota Blue Stone slab stock" },
                { src: "/steps-1.jpeg", alt: "Kota Stone step treads" },
                { src: "/kota-slab-1.jpeg", alt: "Wall cladding panels" },
                { src: "/workers-loading-2.jpeg", alt: "Stone dispatch operations" },
              ].map((img) => (
                <div key={img.src} className="relative aspect-square rounded-sm overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-dark text-white text-center">
        <Container className="max-w-2xl">
          <h2 className="font-serif text-3xl font-light text-white mb-4">
            Need a Custom Order?
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
            Send us your project drawings, size specifications, or area requirements.
            We will respond with a manufacturer-direct quotation within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-stone-gold text-neutral-dark text-[11px] font-bold tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-stone-gold/90 transition-colors font-sans"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+919214830464"
              className="border border-white/30 text-white text-[11px] font-bold tracking-widest uppercase px-8 py-4 rounded-sm hover:border-white/60 transition-colors font-sans"
            >
              Call: +91 92148 30464
            </a>
          </div>
        </Container>
      </section>

    </div>
  );
}
