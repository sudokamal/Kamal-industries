import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle,
} from "lucide-react";

// ─── Inline Social Icons (lucide-react v1 doesn't include these) ──────────────
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Factory Gallery", href: "/gallery" },
  { label: "Technical Specs", href: "/specifications" },
  { label: "Download Centre", href: "/downloads" },
  { label: "Contact Us", href: "/contact" },
];

const productLinks = [
  { label: "Kota Blue Stone", href: "/products" },
  { label: "Kota Brown Stone", href: "/products" },
  { label: "Mandana Red Stone", href: "/products" },
  { label: "Stone Flooring & Slabs", href: "/products" },
  { label: "Wall Cladding Panels", href: "/products" },
  { label: "Steps & Stair Treads", href: "/products" },
  { label: "Custom Cut Stone", href: "/products" },
  { label: "Garden & Outdoor Stone", href: "/products" },
];

const socialLinks = [
  { icon: <FacebookIcon />, href: "#", label: "Facebook", color: "hover:text-blue-400" },
  { icon: <InstagramIcon />, href: "#", label: "Instagram", color: "hover:text-pink-400" },
  { icon: <YoutubeIcon />, href: "#", label: "YouTube", color: "hover:text-red-400" },
  { icon: <TwitterIcon />, href: "#", label: "Twitter / X", color: "hover:text-sky-400" },
  { icon: <LinkedinIcon />, href: "#", label: "LinkedIn", color: "hover:text-blue-500" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white font-sans">

      {/* ── Top strip — quick contact ── */}
      <div className="bg-primary border-b border-primary-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <a href="tel:+919214830464" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                <Phone size={14} className="text-stone-gold" /> +91 92148 30464
              </a>
              <a href="tel:+919414226966" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                <Phone size={14} className="text-stone-gold" /> +91 9414226966
              </a>
              <a href="mailto:kamalindustriesfactory@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                <Mail size={14} className="text-stone-gold" /> kamalindustriesfactory@gmail.com
              </a>
            </div>
            <a
              href="https://wa.me/919214830464?text=Hello%2C%20I%20am%20interested%20in%20Kota%20Stone%20from%20Kamal%20Industries."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-[#1ebe57] transition-colors"
            >
              <MessageCircle size={13} /> WhatsApp Us Now
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer content ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand — spans 2 columns on lg */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo + signage photo */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-white/10 shrink-0">
                <Image src="/ki-signage.jpeg" alt="Kamal Industries logo" fill className="object-cover" sizes="56px" />
              </div>
              <div>
                <div className="font-serif text-2xl font-semibold tracking-[0.15em] text-white">KAMAL</div>
                <div className="text-[9px] tracking-[0.25em] font-sans text-stone-gold uppercase font-bold">Industries & Enterprises</div>
                <div className="text-[8px] tracking-[0.2em] font-sans text-white/30 uppercase mt-0.5">Est. 1985 · Ramganjmandi, Rajasthan</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Direct manufacturer and supplier of Kota Blue Stone, Kota Brown Stone,
              Mandana Stone, Wall Cladding, Steps, and Custom Cut Stone. Operating
              from our 15-acre factory at Amarpura, Ramganjmandi, Kota, Rajasthan since 1985.
            </p>

            {/* Business Hours */}
            <div className="flex items-start gap-3 text-sm text-gray-400 font-light">
              <Clock size={14} className="text-stone-gold shrink-0 mt-0.5" />
              <div>
                <span className="text-white text-xs font-semibold block font-sans">Business Hours</span>
                Mon – Sat: 9:00 AM – 7:00 PM IST<br />
                <span className="text-[10px]">Sunday: 10:00 AM – 4:00 PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3 font-sans">Follow Us</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} hover:border-stone-gold/30 transition-all duration-200`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-stone-gold border-b border-gray-800 pb-3 font-sans">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-1.5 group font-light"
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-all text-stone-gold shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-stone-gold border-b border-gray-800 pb-3 font-sans">
              Our Products
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-1.5 group font-light"
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-all text-stone-gold shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address + Map */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-stone-gold border-b border-gray-800 pb-3 font-sans">
              Factory Location
            </h3>

            <div className="space-y-4 text-sm text-gray-400 font-light">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-stone-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Amarpura, Ramganjmandi,<br />
                  Dist. Kota, Rajasthan – 326519,<br />
                  India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={14} className="text-stone-gold shrink-0" />
                <div className="space-y-0.5">
                  <a href="tel:+919214830464" className="hover:text-white transition-colors block">+91 92148 30464</a>
                  <a href="tel:+919414226966" className="hover:text-white transition-colors block">+91 9414226966</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle size={14} className="text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/919214830464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: +91 92148 30464
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={14} className="text-stone-gold shrink-0" />
                <a href="mailto:kamalindustriesfactory@gmail.com" className="hover:text-white transition-colors text-xs">
                  kamalindustriesfactory@gmail.com
                </a>
              </div>
            </div>

            {/* Google Maps link */}
            <a
              href="https://www.google.com/maps/search/Ramganjmandi+Kota+Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-stone-gold transition-colors font-sans"
            >
              <MapPin size={11} /> View on Google Maps →
            </a>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-block bg-stone-gold text-neutral-dark text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-lg hover:bg-stone-gold/90 transition-colors font-sans"
            >
              Request a Quote →
            </Link>
          </div>

        </div>

        {/* ── Newsletter ── */}
        <div className="border border-white/8 rounded-2xl p-6 md:p-8 mb-10 bg-white/3">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl font-light text-white mb-1">Stay Updated</h3>
              <p className="text-gray-400 text-xs font-light">
                Get our latest product updates, price revisions, and stone industry news.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-xl bg-white/8 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-stone-gold/50 transition-colors font-sans"
              />
              <button className="px-4 py-2.5 bg-stone-gold text-neutral-dark text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-stone-gold/90 transition-colors font-sans whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} Kamal Industries & Kamal Enterprises. All Rights Reserved.
            Amarpura, Ramganjmandi, Kota, Rajasthan.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-gold inline-block" />
              Kota Stone Manufacturer · Rajasthan, India
            </span>
            <span className="hidden md:inline">·</span>
            <Link href="/contact" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-gray-400 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
