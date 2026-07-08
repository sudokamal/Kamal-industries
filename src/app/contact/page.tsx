"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  MapPin, Phone, Mail, Clock, MessageCircle,
  Navigation, ExternalLink, CheckCircle2, Send, User,
  Building2, AtSign, Package, Ruler, Weight,
  Truck, Calendar, Factory, FileText, ChevronDown,
  Shield, Zap, Globe, Star, Award, Box,
} from "lucide-react";

// ─── REAL GOOGLE MAPS EMBED URL (resolved from https://maps.app.goo.gl/e94dm3Qy4t4aEE7G6) ──
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14507.311829375862!2d75.98661795!3d24.629613850000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39656ca58759a1c5%3A0xfe62db11cc9a1261!2sAmar%20Pura%2C%20Rajasthan%20326519!5e0!3m2!1sen!2sin!4v1783223220236!5m2!1sen!2sin";

const MAPS_DIRECTIONS_URL = "https://maps.app.goo.gl/e94dm3Qy4t4aEE7G6";

// ─── FORM STATE ─────────────────────────────────────────────────────────────
interface QuoteForm {
  fullName: string;
  companyName: string;
  phone: string;
  whatsapp: string;
  email: string;
  state: string;
  city: string;
  productRequired: string;
  stoneType: string;
  requiredSize: string;
  thickness: string;
  quantity: string;
  deliveryLocation: string;
  deliveryDate: string;
  projectType: string;
  additionalRequirements: string;
}

const initialForm: QuoteForm = {
  fullName: "", companyName: "", phone: "", whatsapp: "", email: "",
  state: "", city: "", productRequired: "", stoneType: "", requiredSize: "",
  thickness: "", quantity: "", deliveryLocation: "", deliveryDate: "",
  projectType: "", additionalRequirements: "",
};

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi (NCT)", "Chandigarh", "Puducherry", "Lakshadweep", "Andaman & Nicobar Islands",
  "Dadra & Nagar Haveli", "Daman & Diu", "Jammu & Kashmir", "Ladakh",
];

const stoneTypes = [
  "Kota Blue Stone", "Kota Brown Stone", "Mandana Red Stone",
  "Large Format Slabs", "Wall Cladding Panels", "Steps & Stair Treads",
  "Custom Cut Stone", "Garden & Outdoor Stone", "Multiple / Mixed",
];

// ─── INPUT FIELD COMPONENT ───────────────────────────────────────────────────
function FormField({
  label, icon, required, children, error,
}: {
  label: string; icon?: React.ReactNode; required?: boolean;
  children: React.ReactNode; error?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-300 font-sans">
        {icon && <span className="text-stone-gold">{icon}</span>}
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-red-400 text-[10px] font-sans mt-0.5">{error}</p>}
    </div>
  );
}

const inputCls =
  "w-full bg-white/5 border border-white/12 text-white text-sm px-4 py-3 rounded-xl placeholder:text-white/25 focus:outline-none focus:border-stone-gold/60 focus:bg-white/8 transition-all duration-200 font-sans";

// ─── CUSTOM DROPDOWN (fully controlled, always white text) ────────────────────
interface DropdownOption { label: string; value: string; }
interface CustomDropdownProps {
  id: string;
  placeholder: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}

function CustomDropdown({ id, placeholder, options, value, onChange, error }: CustomDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const selected = options.find((o) => o.value === value);
  const displayLabel = selected ? selected.label : placeholder;
  const hasValue = !!selected;

  return (
    <div ref={containerRef} className="relative w-full" id={id}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={[
          "w-full flex items-center justify-between gap-3",
          "bg-white/5 border text-sm px-4 py-3 rounded-xl",
          "transition-all duration-200 font-sans cursor-pointer",
          "focus:outline-none focus:ring-2 focus:ring-primary/50",
          hasValue ? "text-white" : "text-white/30",
          open
            ? "border-primary/70 bg-white/8"
            : error
            ? "border-red-500/60"
            : "border-white/12 hover:border-white/25",
        ].join(" ")}
      >
        <span className="truncate text-left">{displayLabel}</span>
        <ChevronDown
          size={15}
          className={`shrink-0 text-white/40 transition-transform duration-200 ${
            open ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          role="listbox"
          className="absolute z-50 mt-1.5 w-full rounded-xl border border-white/12 bg-[#1a2744] shadow-2xl shadow-black/50 overflow-hidden"
          style={{ maxHeight: "240px", overflowY: "auto" }}
        >
          {/* Placeholder/clear row */}
          <button
            type="button"
            role="option"
            aria-selected={!hasValue}
            onClick={() => { onChange(""); setOpen(false); }}
            className={`w-full text-left px-4 py-2.5 text-sm font-sans transition-colors ${
              !hasValue
                ? "bg-primary/30 text-white"
                : "text-white/35 hover:bg-white/5 hover:text-white/60"
            }`}
          >
            {placeholder}
          </button>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={value === opt.value}
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm font-sans transition-colors ${
                value === opt.value
                  ? "bg-primary text-white font-semibold"
                  : "text-white/80 hover:bg-white/8 hover:text-white"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState<QuoteForm>(initialForm);
  const [errors, setErrors] = useState<Partial<QuoteForm>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof QuoteForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: Partial<QuoteForm> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.stoneType) newErrors.stoneType = "Please select a stone type";
    if (!form.quantity.trim()) newErrors.quantity = "Quantity is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error ?? "Submission failed. Please try again or call us directly.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex flex-col min-h-screen">

      {/* ══════════════════════════════════════════════════════════════
          HERO HEADER — uses 02.jpeg (office photo)
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/02.jpeg"
            alt="Kamal Industries office — Amarpura, Ramganjmandi, Kota, Rajasthan"
            fill priority className="object-cover" sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
            Get in Touch · Factory Direct
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-extralight text-white mb-5 leading-[1.1]">
            Contact<br />
            <span className="italic font-normal text-stone-gold">Kamal Industries</span>
          </h1>
          <div className="w-14 h-[2px] bg-stone-gold mb-6" />
          <p className="text-white/60 text-sm md:text-base font-light max-w-xl leading-relaxed">
            Manufacturer & Supplier of Kota Blue Stone, Kota Brown Stone, Mandana Stone, Stone Slabs,
            Wall Cladding, Stair Stone and Custom Cut Stone. Amarpura, Ramganjmandi, Kota, Rajasthan.
          </p>

          {/* Quick action strip */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="https://wa.me/919214830464?text=Hello%2C%20I%20am%20interested%20in%20Kota%20Stone%20from%20Kamal%20Industries." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-[11px] font-bold tracking-widest uppercase px-5 py-3 rounded-xl hover:bg-[#1ebe57] transition-colors font-sans shadow-lg">
              <MessageCircle size={15} /> WhatsApp Chat
            </a>
            <a href="tel:+919214830464"
              className="inline-flex items-center gap-2 bg-primary text-white text-[11px] font-bold tracking-widest uppercase px-5 py-3 rounded-xl hover:bg-primary-dark transition-colors font-sans shadow-lg">
              <Phone size={15} /> Call Now
            </a>
            <a href="mailto:kamalindustriesfactory@gmail.com"
              className="inline-flex items-center gap-2 bg-stone-gold text-neutral-dark text-[11px] font-bold tracking-widest uppercase px-5 py-3 rounded-xl hover:bg-stone-gold/90 transition-colors font-sans shadow-lg">
              <Mail size={15} /> Email Us
            </a>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════
          MAIN CONTACT SECTION — 2 Columns
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* ── LEFT: Map + Contact Info ── */}
            <div className="space-y-6">

              {/* Google Maps — REAL LOCATION */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/8">
                <div className="px-5 py-4 bg-dark/80 flex items-center justify-between border-b border-white/8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-stone-gold/15 flex items-center justify-center">
                      <MapPin size={15} className="text-stone-gold" />
                    </div>
                    <div>
                      <span className="text-white text-xs font-bold font-sans">Kamal Industries</span>
                      <span className="text-white/40 text-[10px] block font-sans">Amarpura, Ramganjmandi, Rajasthan 326519</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-stone-gold hover:text-white transition-colors font-sans">
                      <Navigation size={11} /> Directions
                    </a>
                  </div>
                </div>

                {/* REAL Google Maps iframe */}
                <div className="relative w-full" style={{ height: "380px" }}>
                  <iframe
                    title="Kamal Industries — Amarpura, Ramganjmandi, Kota, Rajasthan 326519"
                    src={MAPS_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                {/* Map footer — Get Directions + Open in Maps */}
                <div className="px-5 py-4 bg-dark/80 flex flex-wrap gap-3 border-t border-white/8">
                  <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl hover:bg-primary-dark transition-colors font-sans">
                    <Navigation size={12} /> Get Directions
                  </a>
                  <a href="https://www.google.com/maps/place/Amar+Pura,+Rajasthan+326519/@24.6296139,75.9866179,15z" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-white/15 text-white/70 text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl hover:border-stone-gold hover:text-stone-gold transition-all font-sans">
                    <ExternalLink size={12} /> Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="glass-card-dark rounded-2xl p-7 space-y-5">
                <h2 className="font-serif text-2xl font-light text-white mb-1">Factory & Office</h2>
                <div className="w-10 h-[1.5px] bg-stone-gold" />

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-stone-gold/10 flex items-center justify-center shrink-0">
                      <MapPin size={15} className="text-stone-gold" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-stone-gold block mb-1 font-sans">Factory Address</span>
                      <p className="text-white/80 text-sm font-light leading-relaxed">
                        Amarpura, Ramganjmandi,<br />
                        District Kota, Rajasthan – 326519,<br />
                        India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-stone-gold/10 flex items-center justify-center shrink-0">
                      <Phone size={15} className="text-stone-gold" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-stone-gold block mb-1 font-sans">Phone</span>
                      <a href="tel:+919214830464" className="text-white/80 text-sm font-light hover:text-stone-gold transition-colors block">+91 9214830464</a>
                      <a href="tel:+919414226966" className="text-white/80 text-sm font-light hover:text-stone-gold transition-colors block">+91 9414226966</a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#25D366]/15 flex items-center justify-center shrink-0">
                      <MessageCircle size={15} className="text-[#25D366]" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-stone-gold block mb-1 font-sans">WhatsApp</span>
                      <a href="https://wa.me/919214830464" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm font-light hover:text-[#25D366] transition-colors block">+91 9214830464</a>
                      <a href="https://wa.me/919414226966" target="_blank" rel="noopener noreferrer" className="text-white/80 text-sm font-light hover:text-[#25D366] transition-colors block">+91 9414226966</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-stone-gold/10 flex items-center justify-center shrink-0">
                      <Mail size={15} className="text-stone-gold" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-stone-gold block mb-1 font-sans">Email</span>
                      <a href="mailto:kamalindustriesfactory@gmail.com" className="text-white/80 text-sm font-light hover:text-stone-gold transition-colors">
                        kamalindustriesfactory@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-stone-gold/10 flex items-center justify-center shrink-0">
                      <Clock size={15} className="text-stone-gold" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-stone-gold block mb-1 font-sans">Business Hours</span>
                      <p className="text-white/80 text-sm font-light">
                        Monday – Saturday: 9:00 AM – 7:00 PM<br />
                        <span className="text-white/40 text-xs">Sunday: 10:00 AM – 4:00 PM</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Get Directions CTA */}
                <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-stone-gold text-neutral-dark text-[11px] font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl hover:bg-stone-gold/90 transition-colors font-sans mt-2">
                  <Navigation size={14} /> Get Directions to Factory
                </a>
              </div>
            </div>

            {/* ── RIGHT: Premium Quote Form ── */}
            <div className="glass-card-dark rounded-2xl overflow-hidden shadow-2xl">

              {/* Form header */}
              <div className="relative px-7 py-7 border-b border-white/8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-stone-gold/5" />
                <div className="relative z-10">
                  <span className="text-[9px] tracking-[0.35em] font-bold uppercase text-stone-gold block mb-2 font-sans">
                    Factory Direct
                  </span>
                  <h2 className="font-serif text-3xl font-light text-white">Request a Free Quote</h2>
                  <p className="text-white/50 text-xs font-light mt-2 font-sans">
                    Our sales team will respond within 24 hours with manufacturer-direct pricing.
                  </p>
                </div>
              </div>

              <div className="p-7">
                {submitted ? (
                  /* ── SUCCESS STATE ── */
                  <div className="text-center py-14 space-y-5">
                    <div className="relative inline-flex">
                      <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                        <CheckCircle2 size={36} className="text-green-400" />
                      </div>
                      <div className="absolute inset-0 rounded-full border-2 border-green-400/20 animate-ping" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-light text-white mb-3">Quote Request Sent!</h3>
                      <p className="text-white/60 text-sm font-light max-w-sm mx-auto leading-relaxed font-sans">
                        Thank you for contacting Kamal Industries. Our sales team will contact you shortly with factory-direct pricing and product details.
                      </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                      <button onClick={() => { setSubmitted(false); setForm(initialForm); setSubmitError(""); }}
                        className="text-[11px] font-bold tracking-widest uppercase font-sans border border-white/20 px-5 py-3 rounded-xl text-white/60 hover:border-white/40 hover:text-white transition-all cursor-pointer">
                        Send Another
                      </button>
                      <a href="https://wa.me/919214830464?text=I%20just%20submitted%20a%20quote%20request.%20Please%20call%20me%20back." target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase font-sans bg-[#25D366] text-white px-5 py-3 rounded-xl hover:bg-[#1ebe57] transition-colors">
                        <MessageCircle size={13} /> Continue on WhatsApp
                      </a>
                    </div>
                  </div>
                ) : (
                  /* ── FORM ── */
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                    {/* Personal Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField label="Full Name" icon={<User size={11} />} required error={errors.fullName}>
                        <input id="c-fullName" name="fullName" type="text" required value={form.fullName}
                          onChange={handleChange} placeholder="Your full name" className={inputCls} />
                      </FormField>
                      <FormField label="Company Name" icon={<Building2 size={11} />}>
                        <input id="c-company" name="companyName" type="text" value={form.companyName}
                          onChange={handleChange} placeholder="Company / firm name" className={inputCls} />
                      </FormField>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField label="Phone Number" icon={<Phone size={11} />} required error={errors.phone}>
                        <input id="c-phone" name="phone" type="tel" required value={form.phone}
                          onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputCls} />
                      </FormField>
                      <FormField label="WhatsApp Number" icon={<MessageCircle size={11} />}>
                        <input id="c-whatsapp" name="whatsapp" type="tel" value={form.whatsapp}
                          onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputCls} />
                      </FormField>
                    </div>

                    <FormField label="Email Address" icon={<AtSign size={11} />}>
                      <input id="c-email" name="email" type="email" value={form.email}
                        onChange={handleChange} placeholder="your@email.com" className={inputCls} />
                    </FormField>

                    {/* Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField label="State" icon={<Globe size={11} />}>
                        <CustomDropdown
                          id="c-state"
                          placeholder="Select state"
                          value={form.state}
                          onChange={(v) => {
                            setForm((p) => ({ ...p, state: v }));
                            if (errors.state) setErrors((p) => ({ ...p, state: undefined }));
                          }}
                          options={indianStates.map((s) => ({ label: s, value: s }))}
                        />
                      </FormField>
                      <FormField label="City" icon={<MapPin size={11} />}>
                        <input id="c-city" name="city" type="text" value={form.city}
                          onChange={handleChange} placeholder="Your city" className={inputCls} />
                      </FormField>
                    </div>

                    {/* Product Requirements */}
                    <div className="border-t border-white/6 pt-5 space-y-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-stone-gold font-sans">Product Requirements</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField label="Product Required" icon={<Package size={11} />}>
                          <CustomDropdown
                            id="c-product"
                            placeholder="Select product"
                            value={form.productRequired}
                            onChange={(v) => setForm((p) => ({ ...p, productRequired: v }))}
                            options={[
                              { label: "Kota Stone Flooring",      value: "Kota Stone Flooring" },
                              { label: "Wall Cladding",            value: "Wall Cladding" },
                              { label: "Steps & Stair Treads",     value: "Steps & Stair Treads" },
                              { label: "Large Format Slabs",       value: "Large Format Slabs" },
                              { label: "Garden & Outdoor Stone",   value: "Garden & Outdoor Stone" },
                              { label: "Custom Cut Stone",         value: "Custom Cut Stone" },
                              { label: "Mixed / Multiple Products", value: "Mixed / Multiple Products" },
                            ]}
                          />
                        </FormField>
                        <FormField label="Stone Type" icon={<Box size={11} />} required error={errors.stoneType}>
                          <CustomDropdown
                            id="c-stoneType"
                            placeholder="Select stone type"
                            value={form.stoneType}
                            onChange={(v) => {
                              setForm((p) => ({ ...p, stoneType: v }));
                              if (errors.stoneType) setErrors((p) => ({ ...p, stoneType: undefined }));
                            }}
                            options={stoneTypes.map((s) => ({ label: s, value: s }))}
                            error={!!errors.stoneType}
                          />
                        </FormField>
                      </div>

                      {/* Size / Thickness / Quantity — responsive grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <FormField label="Required Size" icon={<Ruler size={11} />}>
                          <input id="c-size" name="requiredSize" type="text" value={form.requiredSize}
                            onChange={handleChange} placeholder="e.g. 24×24 in" className={inputCls} />
                        </FormField>
                        <FormField label="Thickness" icon={<Ruler size={11} />}>
                          <CustomDropdown
                            id="c-thickness"
                            placeholder="Select thickness"
                            value={form.thickness}
                            onChange={(v) => setForm((p) => ({ ...p, thickness: v }))}
                            options={["18mm","20mm","25mm","30mm","35mm","40mm","50mm","Custom"].map((t) => ({ label: t, value: t }))}
                          />
                        </FormField>
                        <FormField label="Quantity" icon={<Weight size={11} />} required error={errors.quantity}>
                          <input id="c-qty" name="quantity" type="text" required value={form.quantity}
                            onChange={handleChange} placeholder="sq.ft / tons" className={inputCls} />
                        </FormField>
                      </div>
                    </div>

                    {/* Delivery */}
                    <div className="border-t border-white/6 pt-4 space-y-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-stone-gold font-sans">Delivery & Project</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField label="Delivery Location" icon={<Truck size={11} />}>
                          <input id="c-delivery" name="deliveryLocation" type="text" value={form.deliveryLocation}
                            onChange={handleChange} placeholder="City, State" className={inputCls} />
                        </FormField>
                        <FormField label="Expected Delivery Date" icon={<Calendar size={11} />}>
                          <input id="c-date" name="deliveryDate" type="date" value={form.deliveryDate}
                            onChange={handleChange} className={inputCls + " [color-scheme:dark]"} />
                        </FormField>
                      </div>

                      <FormField label="Project Type" icon={<Factory size={11} />}>
                        <div className="flex flex-wrap gap-2">
                          {["Residential", "Commercial", "Industrial", "Government", "Hospitality", "Other"].map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setForm((p) => ({ ...p, projectType: type }))}
                              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider font-sans transition-all duration-200 cursor-pointer ${
                                form.projectType === type
                                  ? "bg-stone-gold text-neutral-dark"
                                  : "bg-white/6 border border-white/12 text-white/60 hover:border-stone-gold/40 hover:text-stone-gold"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </FormField>
                    </div>

                    {/* Additional requirements */}
                    <FormField label="Additional Requirements" icon={<FileText size={11} />}>
                      <textarea
                        id="c-additional"
                        name="additionalRequirements"
                        rows={3}
                        value={form.additionalRequirements}
                        onChange={handleChange}
                        placeholder="Finish (natural/honed/polished), special dimensions, export packaging, or any other specifications..."
                        className={inputCls + " resize-none"}
                      />
                    </FormField>

                    {/* Legal note */}
                    <p className="text-[9px] text-white/30 font-sans leading-relaxed">
                      By submitting, you agree to be contacted by Kamal Industries via phone, WhatsApp, or email.
                      Fields marked <span className="text-red-400">*</span> are required.
                    </p>

                    {/* API error */}
                    {submitError && (
                      <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/25 rounded-xl px-4 py-3">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">⚠</span>
                        <p className="text-red-300 text-xs font-sans leading-relaxed">{submitError}</p>
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      id="quote-submit-btn"
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 bg-stone-gold text-neutral-dark text-[11px] font-bold tracking-widest uppercase py-4 px-8 rounded-xl hover:bg-stone-gold/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed font-sans shadow-lg shadow-stone-gold/20 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-neutral-dark/30 border-t-neutral-dark rounded-full animate-spin" />
                          Sending Your Request…
                        </>
                      ) : (
                        <>
                          <Send size={15} /> Request Free Quote
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════
          DELIVERY ACROSS INDIA
          ══════════════════════════════════════════════════════════════ */}
      <section id="delivery" className="py-20 md:py-28 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left: Map of India SVG + badge */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-lg mx-auto">
                {/* India SVG Map — simplified outline */}
                <svg viewBox="0 0 400 480" className="w-full opacity-80" aria-label="Map of India — Kamal Industries delivery coverage">
                  {/* Glow effect */}
                  <defs>
                    <radialGradient id="indiaGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#C5A880" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#244B7A" stopOpacity="0.02" />
                    </radialGradient>
                    <filter id="shadow">
                      <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#C5A880" floodOpacity="0.3" />
                    </filter>
                  </defs>
                  <ellipse cx="200" cy="240" rx="185" ry="230" fill="url(#indiaGlow)" />
                  {/* Simplified India outline path */}
                  <path
                    d="M160,20 L185,15 L210,18 L235,25 L260,35 L280,55 L295,80 L300,105 L310,125 L325,140 L340,155 L345,175 L340,195 L330,215 L320,230 L315,250 L310,270 L300,285 L290,295 L285,310 L280,325 L270,340 L265,355 L255,370 L248,385 L240,395 L230,405 L218,415 L205,425 L200,435 L195,425 L183,415 L172,405 L160,395 L150,385 L143,370 L133,355 L127,340 L118,325 L112,310 L106,295 L96,285 L85,270 L78,250 L72,230 L61,215 L52,195 L48,175 L52,155 L68,140 L82,125 L92,105 L96,80 L110,55 L130,35 L150,25 Z"
                    fill="#1A1E2E"
                    stroke="#244B7A"
                    strokeWidth="2"
                    filter="url(#shadow)"
                  />
                  {/* Highlighted states dots */}
                  {[
                    [200,100],[160,130],[240,130],[140,170],[260,170],[120,210],[280,210],[100,250],[300,250],
                    [200,200],[200,280],[160,320],[240,320],[200,360],[130,300],[270,300],
                  ].map(([x,y],i) => (
                    <circle key={i} cx={x} cy={y} r="4" fill="#C5A880" opacity="0.6">
                      <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                    </circle>
                  ))}
                  {/* Factory location marker */}
                  <circle cx="178" cy="195" r="8" fill="#C5A880" opacity="0.9">
                    <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="178" cy="195" r="5" fill="#C5A880" />
                  <text x="190" y="192" fill="#C5A880" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Kamal Industries</text>
                  <text x="190" y="203" fill="#C5A880" fontSize="7" fontFamily="sans-serif" opacity="0.7">Ramganjmandi, Rajasthan</text>
                </svg>

                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-stone-gold text-neutral-dark text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full font-sans shadow-lg">
                  All India Coverage
                </div>
              </div>
            </div>

            {/* Right: Text + badges */}
            <div className="space-y-8">
              <div>
                <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold mb-4 block font-sans">
                  Delivery Coverage
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-[1.15] mb-6">
                  Delivery Across<br />
                  <span className="italic text-stone-gold">All India</span>
                </h2>
                <div className="w-14 h-[2px] bg-stone-gold mb-6" />
                <p className="text-white/60 text-sm font-light leading-relaxed max-w-md">
                  We supply premium Kota Stone products across all states and union territories of India.
                  Bulk orders, dealer supplies, construction projects, architects, builders, wholesalers,
                  retailers and government projects are welcome.
                </p>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Globe size={16} className="text-stone-gold" />, text: "Pan India Delivery" },
                  { icon: <Factory size={16} className="text-stone-gold" />, text: "Factory Direct Pricing" },
                  { icon: <Box size={16} className="text-stone-gold" />, text: "Bulk Orders" },
                  { icon: <Ruler size={16} className="text-stone-gold" />, text: "Custom Sizes" },
                  { icon: <Shield size={16} className="text-stone-gold" />, text: "Secure Packaging" },
                  { icon: <Zap size={16} className="text-stone-gold" />, text: "Fast Dispatch" },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-3 bg-white/4 border border-white/8 rounded-xl px-4 py-3 hover:border-stone-gold/30 transition-colors">
                    {badge.icon}
                    <span className="text-xs font-bold text-white font-sans">{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* Delivery note */}
              <div className="bg-primary/20 border border-primary/30 rounded-xl px-5 py-4 flex items-start gap-3">
                <Truck size={16} className="text-stone-gold shrink-0 mt-0.5" />
                <p className="text-white/70 text-xs font-light leading-relaxed font-sans">
                  We provide safe and timely delivery across all states of India. Bulk orders, dealer supplies,
                  and project deliveries are available nationwide via road and rail freight.
                </p>
              </div>

              <a
                href="https://wa.me/919214830464?text=Hello%2C%20I%20need%20delivery%20information%20for%20Kota%20Stone%20across%20India."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-[11px] font-bold tracking-widest uppercase px-6 py-3.5 rounded-xl hover:bg-[#1ebe57] transition-colors font-sans"
              >
                <MessageCircle size={14} /> Check Delivery to Your Location
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════
          FACTORY VISIT SECTION — uses 02.jpeg
          ══════════════════════════════════════════════════════════════ */}
      <section id="factory-visit" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/02.jpeg"
            alt="Kamal Industries office and factory — visit us at Amarpura, Ramganjmandi"
            fill className="object-cover" sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-7">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-stone-gold block font-sans">
              By Appointment
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-[1.15]">
              Visit Our<br />
              <span className="italic text-stone-gold">Factory</span>
            </h2>
            <div className="w-14 h-[2px] bg-stone-gold" />
            <p className="text-white/70 text-sm font-light leading-relaxed max-w-lg">
              Customers, architects, builders and dealers are welcome to visit our manufacturing unit
              by appointment to inspect our products and production process. See the stone quality
              first-hand before placing your order.
            </p>

            {/* What to expect */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Star size={14} />, text: "See stone quality first-hand" },
                { icon: <Award size={14} />, text: "Tour our cutting machines" },
                { icon: <Package size={14} />, text: "View all product grades" },
                { icon: <CheckCircle2 size={14} />, text: "Meet our production team" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-white/70 text-xs font-light">
                  <span className="text-stone-gold">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/919214830464?text=Hello%2C%20I%20would%20like%20to%20book%20a%20factory%20visit%20to%20Kamal%20Industries%20at%20Amarpura%2C%20Ramganjmandi."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-stone-gold text-neutral-dark text-[11px] font-bold tracking-widest uppercase px-7 py-4 rounded-xl hover:bg-stone-gold/90 transition-colors font-sans shadow-lg shadow-stone-gold/20"
              >
                <MessageCircle size={14} /> Book Factory Visit
              </a>
              <a href="tel:+919214830464"
                className="inline-flex items-center gap-2 border border-white/20 text-white text-[11px] font-bold tracking-widest uppercase px-7 py-4 rounded-xl hover:border-white/50 transition-colors font-sans">
                <Phone size={14} /> Call to Schedule
              </a>
            </div>

            {/* Address reminder */}
            <div className="flex items-start gap-3 bg-white/6 border border-white/10 rounded-xl px-4 py-3">
              <MapPin size={14} className="text-stone-gold shrink-0 mt-0.5" />
              <div>
                <span className="text-white text-xs font-semibold font-sans block">Kamal Industries</span>
                <span className="text-white/50 text-[10px] font-sans">Amarpura, Ramganjmandi, District Kota, Rajasthan – 326519</span>
              </div>
              <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer"
                className="ml-auto text-stone-gold text-[9px] font-bold uppercase tracking-wider font-sans hover:underline shrink-0 flex items-center gap-1">
                <Navigation size={10} /> Directions
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════
          PHOTO STRIP
          ══════════════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-2 md:grid-cols-4 h-44 md:h-52">
        {[
          { src: "/03.jpeg", alt: "Kamal Industries factory overview" },
          { src: "/cutting-machine-1.jpeg", alt: "Stone cutting at Kamal Industries" },
          { src: "/kota-blue-1.jpeg", alt: "Kota Blue Stone stock" },
          { src: "/workers-loading-1.jpeg", alt: "Loading and dispatch at Kamal Industries" },
        ].map((img) => (
          <div key={img.src} className="relative overflow-hidden group img-zoom-container">
            <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="25vw" />
            <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/10 transition-colors" />
          </div>
        ))}
      </div>


      {/* ══════════════════════════════════════════════════════════════
          FLOATING ACTION BUTTONS
          ══════════════════════════════════════════════════════════════ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919214830464?text=Hello%2C%20I%20am%20interested%20in%20Kota%20Stone%20from%20Kamal%20Industries."
          target="_blank" rel="noopener noreferrer"
          className="group relative flex items-center justify-end gap-2"
          aria-label="WhatsApp Chat"
        >
          <span className="bg-charcoal/90 text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full font-sans opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-lg">
            WhatsApp Chat
          </span>
          <div className="w-13 h-13 w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 flex items-center justify-center text-white hover:scale-110 transition-transform">
            <MessageCircle size={22} />
          </div>
        </a>
        {/* Call */}
        <a href="tel:+919214830464" className="group relative flex items-center justify-end gap-2" aria-label="Call Now">
          <span className="bg-charcoal/90 text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full font-sans opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-lg">
            Call Now
          </span>
          <div className="w-14 h-14 rounded-full bg-primary shadow-lg shadow-primary/30 flex items-center justify-center text-white hover:scale-110 transition-transform">
            <Phone size={20} />
          </div>
        </a>
        {/* Email */}
        <a href="mailto:kamalindustriesfactory@gmail.com" className="group relative flex items-center justify-end gap-2" aria-label="Email Us">
          <span className="bg-charcoal/90 text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full font-sans opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-lg">
            Email Us
          </span>
          <div className="w-14 h-14 rounded-full bg-stone-gold shadow-lg shadow-stone-gold/30 flex items-center justify-center text-neutral-dark hover:scale-110 transition-transform">
            <Mail size={20} />
          </div>
        </a>
      </div>

    </div>
  );
}
