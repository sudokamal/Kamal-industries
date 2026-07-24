"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, Phone, Mail, ChevronUp, X, Send, 
  Loader2, CheckCircle2, User, Building2, Globe, FileText, ArrowRight
} from "lucide-react";

interface Message {
  role: "user" | "bot";
  text: string;
}

interface LeadData {
  name: string;
  companyName: string;
  country: string;
  email: string;
  phone: string;
  requirement: string;
}

export default function GlobalUI() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"call" | "chat" | "email">("chat");
  const [isSending, setIsSending] = useState(false);

  // Lead Collection State
  const [isRegistered, setIsRegistered] = useState(false);
  const [lead, setLead] = useState<LeadData>({
    name: "",
    companyName: "",
    country: "",
    email: "",
    phone: "",
    requirement: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<LeadData>>({});

  // Chatbot State
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "👋 Hello! I am the Kamal Industries AI Assistant.\nHow can I help with your stone requirement today? Pick a quick option below or type your question!",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [aiUnansweredCount, setAiUnansweredCount] = useState(0);
  const [escalated, setEscalated] = useState(false);

  const QUICK_QUESTIONS = [
    "📏 Available Sizes & Thickness",
    "🎨 Colors & Finishes",
    "🚚 Delivery & Shipping Time",
    "💰 Wholesale Pricing Quote",
    "📦 Export Wooden Crates",
    "📍 Factory Location & Contact",
    "📄 Request Stone Samples",
  ];

  // Email Support Message State
  const [supportMessage, setSupportMessage] = useState("");
  const [supportSuccess, setSupportSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll to top tracking
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll chatbot to end
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLead((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Lead Submission POST
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Partial<LeadData> = {};
    if (!lead.name.trim()) errors.name = "Name is required";
    if (!lead.country.trim()) errors.country = "Country is required";
    if (!lead.email.trim()) errors.email = "Email is required";
    if (!lead.phone.trim()) errors.phone = "Phone number is required";
    if (!lead.requirement.trim()) errors.requirement = "Requirement is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSending(true);
    setSubmitError(null);
    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          actionType: "lead",
          lead,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to register support lead.");
      }
      setIsRegistered(true);
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Failed to register support lead:", error);
      setSubmitError(error.message || "Registration failed. Please verify credentials.");
    } finally {
      setIsSending(false);
    }
  };

  // Dialer Click Notification POST
  const handleCallSupport = async () => {
    try {
      fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          actionType: "call",
          lead,
        }),
      });
    } catch (err) {
      console.error(err);
    }
    // Route to actual phone call dialer
    window.location.href = "tel:7878492517";
  };

  // AI Chatbot Knowledge Base & Processor
  const processUserQuery = (userText: string) => {
    setChatMessages((prev) => [...prev, { role: "user", text: userText }]);
    setIsTyping(true);

    setTimeout(() => {
      const normalized = userText.toLowerCase();
      let botResponse = "";
      let answered = true;

      if (normalized.includes("size") || normalized.includes("dimension") || normalized.includes("thick")) {
        botResponse = "📏 **Kota Stone Sizes & Thickness Options**:\n\n• **Standard Tiles**: 12×12, 12×18, 18×18, 18×24, 24×24, 24×36, 24×48 inches.\n• **Jumbo Slabs**: Up to 4×4 ft (1200×1200 mm) & 4×8 ft.\n• **Calibrated Thickness**: 18mm, 20mm, 25mm, 30mm, 40mm (±1mm tolerance).\n• **Custom Cut**: Tailored to architectural drawings.";
      } else if (normalized.includes("color") || normalized.includes("colour") || normalized.includes("blue") || normalized.includes("brown") || normalized.includes("red") || normalized.includes("finish")) {
        botResponse = "🎨 **Colors & Surface Finishes**:\n\n💎 **Stone Types**:\n1. **Kota Blue Stone**: Blue-grey limestone benchmark.\n2. **Kota Brown Stone**: Warm earthy limestone.\n3. **Mandana Red Stone**: Acid-resistant quartzite.\n\n✨ **Finishes Available**:\n• Natural Split (Rustic texture)\n• Honed (Silky matte)\n• Polished (High gloss)\n• Leather/Brushed (Modern tactile)\n• Sandblasted (Non-slip wet areas)\n• Flamed (Textured outdoor)";
      } else if (normalized.includes("deliver") || normalized.includes("ship") || normalized.includes("transit") || normalized.includes("time") || normalized.includes("how long")) {
        botResponse = "🚚 **Delivery Timelines & Logistics**:\n\n• **Pan-India Dispatch**: 3 to 7 business days for stock sizes.\n• **Custom Production**: 7 to 14 business days.\n• **Global Exports**: Ocean freight via Mundra & Kandla ports (2-4 weeks transit).\n\nAll shipments are fully insured from our Ramganjmandi yard.";
      } else if (normalized.includes("price") || normalized.includes("cost") || normalized.includes("quote") || normalized.includes("wholesale") || normalized.includes("rate") || normalized.includes("sq.ft")) {
        botResponse = "💰 **Direct Wholesale Factory Pricing**:\n\nBecause you buy directly from our Ramganjmandi production campus, you get direct wholesale pricing with zero middleman markup!\n\nTo get a binding quote within 24 hours, specify:\n1. Stone color & finish\n2. Size & thickness\n3. Total quantity (sq.ft / sq.m)\n4. Destination city/port.";
      } else if (normalized.includes("pack") || normalized.includes("crate") || normalized.includes("pallet") || normalized.includes("export")) {
        botResponse = "📦 **Seaworthy Wooden Crate Packing**:\n\n• **Domestic**: Reinforced wooden pallets with plastic wrapping.\n• **International Exports**: ISPM-15 fumigated wooden crates with plastic film, corner protectors, and heavy-duty steel strapping.\n• **Zero Breakage Guarantee**: Piece-by-piece inspection before loading.";
      } else if (normalized.includes("factory") || normalized.includes("location") || normalized.includes("where") || normalized.includes("address") || normalized.includes("ramganjmandi")) {
        botResponse = "📍 **Factory & Office Campus**:\n\n• **Address**: 15-Acre Processing Campus, Amarpura, Ramganjmandi, District Kota, Rajasthan – 326519, India.\n• **Helpline**: +91 78784 92517 / +91 92148 30464\n• **Established**: Direct stone processing since 1985.";
      } else if (normalized.includes("sample") || normalized.includes("specimen") || normalized.includes("box")) {
        botResponse = "📄 **Stone Sample Box Program**:\n\nWe provide physical sample boxes (Kota Blue, Kota Brown, Mandana Red in various finishes) for architects, contractors, and project managers.\n\nWhatsApp us at **+91 92148 30464** with your office address to request a sample box!";
      } else if (normalized.includes("kota stone") || normalized.includes("limestone") || normalized.includes("what is")) {
        botResponse = "🏛️ **About Kamal Kota Stone**:\n\nKota Stone is a fine-grained, non-porous limestone from Ramganjmandi, Rajasthan. Famous for its extreme durability, cool natural touch, high compressive strength (130-180 MPa), and low water absorption (<0.5%).";
      } else if (normalized.includes("custom") || normalized.includes("cnc") || normalized.includes("stair") || normalized.includes("step") || normalized.includes("wall") || normalized.includes("cladding")) {
        botResponse = "🔨 **Custom Architectural Fabrication**:\n\nWe specialize in custom CNC waterjet cutting for stair treads, risers, pool copings, and split-face wall cladding panels. Send us your CAD drawings for custom cutting!";
      } else {
        answered = false;
        botResponse = "I want to ensure you get the most accurate information! I can escalate your query directly to our Live Factory Coordinator. Would you like me to email your details to our sales desk?";
      }

      setIsTyping(false);
      setChatMessages((prev) => [...prev, { role: "bot", text: botResponse }]);

      if (!answered) {
        setAiUnansweredCount((prev) => prev + 1);
      }
    }, 600);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isTyping) return;
    const text = chatInput.trim();
    setChatInput("");
    processUserQuery(text);
  };

  const handleQuickQuestionClick = (question: string) => {
    if (isTyping) return;
    processUserQuery(question);
  };

  // Escalate unanswered AI chat to Admin Email
  const handleEscalateChat = async () => {
    setIsSending(true);
    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          actionType: "unanswered_ai",
          lead,
          chatHistory: chatMessages,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to escalate chat.");
      }
      setEscalated(true);
      setChatMessages((prev) => [
        ...prev,
        { role: "bot", text: "Your chat transcript and contact details have been successfully emailed to our support coordinator. We will call or email you within 12 hours!" },
      ]);
    } catch (err: unknown) {
      const error = err as Error;
      console.error(error);
      setChatMessages((prev) => [
        ...prev,
        { role: "bot", text: `Escalation failed: ${error.message || "Please check SMTP connection."}` },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  // Submit direct Email Support Ticket
  const handleEmailSupportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supportMessage.trim()) return;

    setIsSending(true);
    setSubmitError(null);
    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          actionType: "email_ticket",
          lead,
          message: supportMessage,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit ticket.");
      }
      setSupportSuccess(true);
      setSupportMessage("");
    } catch (err: unknown) {
      const error = err as Error;
      console.error(error);
      setSubmitError(error.message || "Failed to submit ticket.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* ── SCROLL TO TOP TRIGGER ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-[90] w-11 h-11 rounded-full bg-slate-900/90 hover:bg-stone-gold text-white border border-white/10 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-stone-gold/20 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── FLOATING NEED HELP? BUTTON ── */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2.5 px-5 py-3.5 rounded-full shadow-2xl cursor-pointer select-none border transition-all duration-300
            ${
              isOpen 
                ? "bg-slate-950 text-white border-white/10" 
                : "bg-slate-900 text-white border-stone-gold/25 hover:border-stone-gold/80 hover:shadow-stone-gold/15"
            }
          `}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {isOpen ? (
            <X size={18} className="text-stone-gold" />
          ) : (
            <MessageCircle size={18} className="text-stone-gold animate-pulse" />
          )}
          <span className="text-[11px] font-sans font-bold uppercase tracking-wider">
            {isOpen ? "Close Help" : "Need Help?"}
          </span>
        </motion.button>

        {/* ── MAIN SUPPORT POPUP CONSOLE ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="absolute bottom-16 right-0 w-[90vw] sm:w-[380px] h-[520px] bg-slate-900/95 border border-white/10 shadow-2xl rounded-2xl flex flex-col z-[100] backdrop-blur-xl overflow-hidden text-white"
            >
              {/* Header */}
              <div className="bg-slate-950/70 border-b border-white/10 p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-light text-white tracking-wide">
                    Kamal Support Desk
                  </h3>
                  <p className="text-[9px] tracking-widest text-stone-gold font-sans font-bold uppercase mt-0.5">
                    Direct Factory Desk
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/40 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Form / Content Switcher */}
              <div className="flex-1 overflow-hidden flex flex-col">
                {!isRegistered ? (
                  /* ─── LEAD COLLECTION FORM (STEP 1) ─── */
                  <form onSubmit={handleLeadSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
                    <div className="mb-2">
                      <h4 className="text-xs font-semibold font-sans text-stone-gold uppercase tracking-wider mb-1">
                        Register Support Ticket
                      </h4>
                      <p className="text-[11px] text-white/50 font-light leading-relaxed">
                        Please provide your project details to unlock direct call support, AI chat, and email inquiry desk.
                      </p>
                    </div>

                    {submitError && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-[10px] font-sans leading-relaxed">
                        {submitError}
                      </div>
                    )}

                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[9px] tracking-widest font-bold uppercase text-white/40 font-sans flex items-center gap-1.5">
                        <User size={10} className="text-stone-gold" /> Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={lead.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-stone-gold/60 focus:bg-white/8 transition-all font-sans"
                      />
                      {formErrors.name && (
                        <p className="text-[9px] text-red-400 font-semibold">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label className="text-[9px] tracking-widest font-bold uppercase text-white/40 font-sans flex items-center gap-1.5">
                        <Building2 size={10} /> Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={lead.companyName}
                        onChange={handleInputChange}
                        placeholder="Stone Dealers LLC"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-stone-gold/60 focus:bg-white/8 transition-all font-sans"
                      />
                    </div>

                    {/* Country */}
                    <div className="space-y-1.5">
                      <label className="text-[9px] tracking-widest font-bold uppercase text-white/40 font-sans flex items-center gap-1.5">
                        <Globe size={10} className="text-stone-gold" /> Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={lead.country}
                        onChange={handleInputChange}
                        placeholder="India"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-stone-gold/60 focus:bg-white/8 transition-all font-sans"
                      />
                      {formErrors.country && (
                        <p className="text-[9px] text-red-400 font-semibold">{formErrors.country}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[9px] tracking-widest font-bold uppercase text-white/40 font-sans flex items-center gap-1.5">
                        <Mail size={10} className="text-stone-gold" /> Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={lead.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-stone-gold/60 focus:bg-white/8 transition-all font-sans"
                      />
                      {formErrors.email && (
                        <p className="text-[9px] text-red-400 font-semibold">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[9px] tracking-widest font-bold uppercase text-white/40 font-sans flex items-center gap-1.5">
                        <Phone size={10} className="text-stone-gold" /> Phone Number *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={lead.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-stone-gold/60 focus:bg-white/8 transition-all font-sans"
                      />
                      {formErrors.phone && (
                        <p className="text-[9px] text-red-400 font-semibold">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* Requirement */}
                    <div className="space-y-1.5">
                      <label className="text-[9px] tracking-widest font-bold uppercase text-white/40 font-sans flex items-center gap-1.5">
                        <FileText size={10} className="text-stone-gold" /> Stone Requirement *
                      </label>
                      <textarea
                        name="requirement"
                        value={lead.requirement}
                        onChange={handleInputChange}
                        placeholder="e.g. 5000 sq.ft Kota Blue, 22mm polished finish"
                        rows={2}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-stone-gold/60 focus:bg-white/8 transition-all font-sans resize-none"
                      />
                      {formErrors.requirement && (
                        <p className="text-[9px] text-red-400 font-semibold">{formErrors.requirement}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full bg-stone-gold hover:bg-stone-gold-dark text-slate-950 text-[10px] font-bold uppercase tracking-widest py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      {isSending ? (
                        <Loader2 size={13} className="animate-spin" />
                      ) : (
                        <>
                          Access Channels <ArrowRight size={12} />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  /* ─── ACTIVE CHANNELS HUB (STEP 2) ─── */
                  <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Navigation Tabs */}
                    <div className="flex border-b border-white/10 bg-slate-950/40 text-[9px] font-bold uppercase tracking-widest font-sans">
                      <button
                        onClick={() => setActiveTab("chat")}
                        className={`flex-1 py-3 text-center transition-colors border-b-2 cursor-pointer
                          ${
                            activeTab === "chat"
                              ? "border-stone-gold text-stone-gold bg-white/3"
                              : "border-transparent text-white/60 hover:text-white"
                          }
                        `}
                      >
                        🤖 AI Assistant
                      </button>
                      <button
                        onClick={() => setActiveTab("call")}
                        className={`flex-1 py-3 text-center transition-colors border-b-2 cursor-pointer
                          ${
                            activeTab === "call"
                              ? "border-stone-gold text-stone-gold bg-white/3"
                              : "border-transparent text-white/60 hover:text-white"
                          }
                        `}
                      >
                        📞 Call
                      </button>
                      <button
                        onClick={() => setActiveTab("email")}
                        className={`flex-1 py-3 text-center transition-colors border-b-2 cursor-pointer
                          ${
                            activeTab === "email"
                              ? "border-stone-gold text-stone-gold bg-white/3"
                              : "border-transparent text-white/60 hover:text-white"
                          }
                        `}
                      >
                        📧 Email Desk
                      </button>
                    </div>

                    {/* Tab panels */}
                    <div className="flex-1 overflow-hidden flex flex-col">
                      
                      {/* ── Tab: Call Dialer (Helpline number is secure) ── */}
                      {activeTab === "call" && (
                        <div className="p-6 flex flex-col items-center justify-center text-center h-full space-y-6">
                          <div className="w-16 h-16 rounded-full bg-stone-gold/10 border border-stone-gold/20 flex items-center justify-center text-stone-gold shadow-lg shadow-stone-gold/5">
                            <Phone size={24} />
                          </div>
                          <div>
                            <h4 className="font-serif text-lg text-white mb-2">
                              Call Direct Helpline
                            </h4>
                            <p className="text-xs text-white/50 leading-relaxed font-sans max-w-xs">
                              Connect directly to our factory coordinator for urgent price negotiations, dispatch scheduling, and custom size verification.
                            </p>
                          </div>
                          
                          <button
                            onClick={handleCallSupport}
                            className="w-full max-w-xs bg-stone-gold hover:bg-stone-gold-dark text-slate-950 text-[10px] font-bold uppercase tracking-widest py-3.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
                          >
                            <Phone size={13} /> Call Support Now
                          </button>
                          
                          <p className="text-[10px] text-white/30 font-sans italic">
                            Helpline available Mon - Sat: 9 AM - 7 PM IST
                          </p>
                        </div>
                      )}

                      {/* ── Tab: AI Chatbot (Pretrained simulator) ── */}
                      {activeTab === "chat" && (
                        <div className="flex-1 flex flex-col overflow-hidden bg-slate-900/40">
                          {/* Messages scrolling container */}
                          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs">
                            {chatMessages.map((msg, idx) => (
                              <div
                                key={idx}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                              >
                                <div
                                  className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed shadow-sm ${
                                    msg.role === "user"
                                      ? "bg-primary text-white rounded-tr-none shadow-md"
                                      : "bg-white/10 text-white/95 border border-white/10 rounded-tl-none"
                                  }`}
                                >
                                  {msg.text.split("\n").map((para, i) => (
                                    <p key={i} className={i > 0 ? "mt-1.5" : ""}>
                                      {para}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                              <div className="flex justify-start">
                                <div className="bg-white/10 text-white/70 border border-white/10 rounded-2xl rounded-tl-none px-4 py-2.5 flex items-center gap-1.5">
                                  <span className="text-[10px] text-stone-gold font-bold uppercase tracking-wider font-sans">
                                    AI is typing
                                  </span>
                                  <span className="w-1.5 h-1.5 bg-stone-gold rounded-full animate-bounce [animation-delay:-0.3s]" />
                                  <span className="w-1.5 h-1.5 bg-stone-gold rounded-full animate-bounce [animation-delay:-0.15s]" />
                                  <span className="w-1.5 h-1.5 bg-stone-gold rounded-full animate-bounce" />
                                </div>
                              </div>
                            )}
                            <div ref={chatEndRef} />
                          </div>

                          {/* Quick Question Chips */}
                          <div className="px-3 py-2 bg-slate-950/80 border-t border-white/10 flex gap-2 overflow-x-auto no-scrollbar shrink-0">
                            {QUICK_QUESTIONS.map((q, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleQuickQuestionClick(q)}
                                disabled={isTyping}
                                className="whitespace-nowrap text-[10px] font-sans font-medium bg-white/5 hover:bg-stone-gold/20 text-stone-gold border border-stone-gold/30 rounded-full px-3 py-1 transition-all cursor-pointer disabled:opacity-50 shrink-0"
                              >
                                {q}
                              </button>
                            ))}
                          </div>

                          {/* Fallback Live Escalation Trigger */}
                          {aiUnansweredCount >= 2 && !escalated && (
                            <div className="bg-slate-950/90 border-t border-white/10 p-3 flex items-center justify-between gap-3 shrink-0">
                              <span className="text-[10px] text-stone-gold font-sans leading-tight">
                                Talk directly to our coordinator via email?
                              </span>
                              <button
                                onClick={handleEscalateChat}
                                disabled={isSending}
                                className="bg-stone-gold hover:bg-stone-gold-dark text-slate-950 text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors cursor-pointer shrink-0"
                              >
                                {isSending ? "Sending..." : "Email Coordinator"}
                              </button>
                            </div>
                          )}

                          {/* Chat Input form */}
                          <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-slate-950/90 flex gap-2 shrink-0">
                            <input
                              type="text"
                              value={chatInput}
                              onChange={(e) => setChatInput(e.target.value)}
                              placeholder="Ask about sizes, colors, pricing, delivery..."
                              disabled={isTyping}
                              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-stone-gold/60 focus:bg-white/8 transition-all font-sans disabled:opacity-50"
                            />
                            <button
                              type="submit"
                              disabled={isTyping || !chatInput.trim()}
                              className="w-9 h-9 rounded-xl bg-stone-gold hover:bg-stone-gold-dark disabled:opacity-40 text-slate-950 flex items-center justify-center shrink-0 cursor-pointer transition-colors"
                              aria-label="Send message"
                            >
                              <Send size={14} />
                            </button>
                          </form>
                        </div>
                      )}

                      {/* ── Tab: Direct Email Ticket Submission ── */}
                      {activeTab === "email" && (
                        <div className="p-6 flex flex-col justify-between h-full bg-slate-900/20">
                          {supportSuccess ? (
                            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                              <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                                <CheckCircle2 size={24} />
                              </div>
                              <div>
                                <h4 className="font-serif text-base text-white font-medium">
                                  Support ticket submitted successfully.
                                </h4>
                                <p className="text-[11px] text-white/50 leading-relaxed font-sans max-w-xs mt-1">
                                  Thank you. Your message has been forwarded to our support coordinator. Our team will contact you shortly.
                                </p>
                              </div>
                            </div>
                          ) : (
                            <form onSubmit={handleEmailSupportSubmit} className="flex-1 flex flex-col justify-between">
                              <div className="space-y-3">
                                <div>
                                  <h4 className="text-xs font-semibold font-sans text-stone-gold uppercase tracking-wider mb-1">
                                    Send Direct Query
                                  </h4>
                                  <p className="text-[10px] text-white/40 leading-relaxed font-sans">
                                    Submit details about customized CNC cuttings, test reports, or specific dispatch instructions directly to our factory coordinator.
                                  </p>
                                </div>
                                
                                {submitError && (
                                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-[10px] font-sans leading-relaxed">
                                    {submitError}
                                  </div>
                                )}
                                
                                <textarea
                                  value={supportMessage}
                                  onChange={(e) => setSupportMessage(e.target.value)}
                                  placeholder="Type your message here..."
                                  rows={submitError ? 4 : 7}
                                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3.5 text-xs text-white focus:outline-none focus:border-stone-gold/60 focus:bg-white/8 transition-all font-sans resize-none"
                                  required
                                />
                              </div>

                              <button
                                type="submit"
                                disabled={isSending}
                                className="w-full bg-stone-gold hover:bg-stone-gold-dark text-slate-950 text-[10px] font-bold uppercase tracking-widest py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
                              >
                                {isSending ? (
                                  <Loader2 size={13} className="animate-spin" />
                                ) : (
                                  <>
                                    <Mail size={13} /> Submit Support Ticket
                                  </>
                                )}
                              </button>
                            </form>
                          )}
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── PERSISTENT FLOATING WHATSAPP BUTTON ── */}
      <div className="fixed bottom-6 left-6 z-40 group">
        <a
          href="https://wa.me/919214830464?text=Hello%20Kamal%20Industries%2C%20I%20am%20interested%20in%20a%20quote%20for%20Kota%20Stone."
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-black/40 hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group"
          aria-label="Chat on WhatsApp with Kamal Industries"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 relative z-10 fill-current" />
          
          {/* Tooltip */}
          <span className="absolute left-16 whitespace-nowrap bg-neutral-dark/95 text-stone-gold text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg border border-stone-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block">
            WhatsApp Inquiry
          </span>
        </a>
      </div>
    </>
  );
}
