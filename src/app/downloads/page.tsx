"use client";

import React from "react";
import Link from "next/link";
import { Download, FileText, Phone, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

interface DownloadItem {
  title: string;
  desc: string;
  format: string;
  size: string;
  tag: string;
  href: string;
  downloadName?: string;
  featured?: boolean;
}

const downloads: DownloadItem[] = [
  {
    title: "Official Product & Company Catalogue",
    desc: "Complete product range, stone specifications, available sizes, finishes, and factory capabilities.",
    format: "PDF",
    size: "4.2 MB",
    tag: "Catalogue",
    href: "/Kamal_Industries_Kota_Stone_Catalogue.pdf",
    downloadName: "Kamal_Industries_Kota_Stone_Catalogue.pdf",
    featured: true,
  },
  {
    title: "Company Profile & Overview",
    desc: "35+ years manufacturing heritage, Ramganjmandi campus infrastructure, and export credentials.",
    format: "PDF",
    size: "2.1 MB",
    tag: "Company Profile",
    href: "/contact",
  },
  {
    title: "Technical Specifications & BIS Data",
    desc: "Compressive strength, water absorption, flexural strength, and chemical resistance test reports.",
    format: "PDF",
    size: "1.8 MB",
    tag: "Technical Data",
    href: "/downloads",
  },
  {
    title: "Export & Packing Guide",
    desc: "Container loading capacities, wooden crate dimensions, fumigation certificates, and port logistics.",
    format: "PDF",
    size: "1.5 MB",
    tag: "Export Guide",
    href: "/contact",
  },
];

export default function DownloadsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── HEADER ── */}
      <section className="relative bg-charcoal text-white py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-neutral-dark to-charcoal" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest mb-8 font-sans">
            <Link href="/" className="hover:text-stone-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stone-gold">Downloads</span>
          </nav>
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-5 block font-sans">
            Kamal Industries · Resources
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-extralight tracking-tight mb-6 leading-[1.1]">
            Download<br />
            <span className="italic font-normal text-stone-gold">Centre</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base font-light max-w-xl leading-relaxed">
            Download our company profile, product catalogue, technical data sheets, and export guides.
            All documents are available free of charge.
          </p>
        </div>
      </section>

      {/* ── DOWNLOADS GRID ── */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
              Free Downloads
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-dark">
              Product & Company Resources
            </h2>
            <div className="w-14 h-[2px] bg-stone-gold mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((doc) => (
              <div
                key={doc.title}
                className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FileText size={20} className="text-stone-gold" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-stone-gold font-sans">
                        {doc.tag}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full font-sans">
                        {doc.format}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full font-sans">
                        {doc.size}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-neutral-dark mb-2">{doc.title}</h3>
                  <p className="text-gray-500 text-xs font-light leading-relaxed mb-6">{doc.desc}</p>
                </div>

                <div>
                  {doc.downloadName ? (
                    <a
                      href={doc.href}
                      download={doc.downloadName}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-stone-gold text-neutral-dark text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-stone-gold/90 transition-colors font-sans w-full justify-center"
                    >
                      <Download size={14} /> Download Document
                    </a>
                  ) : (
                    <Link
                      href={doc.href}
                      className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors font-sans w-full justify-center"
                    >
                      Request Copy <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-20 bg-charcoal text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-light mb-4">Need Custom Specifications?</h2>
          <p className="text-white/60 text-sm font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Contact our engineering and sales desk directly for architectural drawing reviews and bespoke quarry estimates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919214830464?text=Hello%2C%20I%20need%20custom%20stone%20specifications%20for%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl font-sans"
            >
              <MessageCircle size={16} /> WhatsApp Sales Desk
            </a>
            <a
              href="tel:+919214830464"
              className="inline-flex items-center gap-2 border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl font-sans"
            >
              <Phone size={14} /> Call +91 92148 30464
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
