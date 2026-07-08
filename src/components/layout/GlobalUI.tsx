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
      text: "Hello! I am the Kamal Industries Assistant. Ask me anything about our Kota Stone, sizes, finishes, pricing, delivery, or custom factory orders.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [aiUnansweredCount, setAiUnansweredCount] = useState(0);
  const [escalated, setEscalated] = useState(false);

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

  // AI Chat simulation response logic
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    setChatMessages((prev) => [...prev, { role: "user", text: userText }]);
    setChatInput("");

    // Simulate typing delay
    setTimeout(() => {
      const normalized = userText.toLowerCase();
      let botResponse = "";
      let answered = true;

      // AI Chatbot Knowledge Base Rules
      if (normalized.includes("kota stone") && (normalized.includes("what") || normalized.includes("about") || normalized.includes("define"))) {
        botResponse = "Kota Stone is a fine-grained, extremely durable limestone quarried in Ramganjmandi, Kota, Rajasthan. It is highly valued for commercial, residential, and industrial floors due to its density, non-porous structure, and natural cool temperature.";
      } else if (normalized.includes("size") || normalized.includes("dimension")) {
        botResponse = "We manufacture Kota Stone in standard sizes: 12×12, 18×18, 22×22, 22×15, 22×11, 24×24, 24×36, and 24×48 inches. Large format slabs are available up to 4×4 feet (or 1200×1200 mm). Custom sizing is cut to specification.";
      } else if (normalized.includes("color") || normalized.includes("colour") || normalized.includes("blue") || normalized.includes("brown") || normalized.includes("red")) {
        botResponse = "We supply three core colors:\n1. **Kota Blue**: A signature blue-grey limestone.\n2. **Kota Brown**: A warm earthy-toned brown limestone.\n3. **Mandana Red**: A robust acid-resistant quartzite.";
      } else if (normalized.includes("finish") || normalized.includes("honed") || normalized.includes("polished") || normalized.includes("leather") || normalized.includes("sandblast") || normalized.includes("flamed")) {
        botResponse = "We offer 6 surface finishes:\n- **Natural Split**: Raw, textured surface.\n- **Honed**: Smooth matte.\n- **Polished**: Gloss mirror-shine.\n- **Leather / Brushed**: Tactile, contemporary texture.\n- **Sandblasted**: Non-slip rough finish.\n- **Flamed**: Thermal textured outdoor finish.";
      } else if (normalized.includes("application") || normalized.includes("floor") || normalized.includes("wall") || normalized.includes("outdoor") || normalized.includes("garden") || normalized.includes("stair") || normalized.includes("step")) {
        botResponse = "Kota Stone is ideal for:\n- High-traffic commercial lobbies\n- Residential living rooms and kitchens\n- Outdoor garden paving and pool decks (Sandblasted/Natural)\n- Stair treads & steps (calibrated load-bearing)\n- Accent wall cladding facades.";
      } else if (normalized.includes("pack") || normalized.includes("pallet") || normalized.includes("crate")) {
        botResponse = "For domestic supply, stone is securely loaded loose or packed in strong wooden pallets. For global exports, we pack in fumigated, export-grade seaworthy wooden crates wrapped in plastic wraps to prevent transit cracks.";
      } else if (normalized.includes("quality") || normalized.includes("inspect") || normalized.includes("tolerance")) {
        botResponse = "We implement strict piece-by-piece inspection. Slabs are checked for color uniformity (Grade A), structural integrity (no laminations), and cut to a ±1mm thickness calibration tolerance standard.";
      } else if (normalized.includes("deliver") || normalized.includes("shipping") || normalized.includes("logistics") || normalized.includes("how long")) {
        botResponse = "We deliver across all states in India. Domestic delivery takes 3-7 days for in-stock sizes, and 7-15 days for custom production cuts. International ocean transit via Mundra/Kandla takes 2-4 weeks.";
      } else if (normalized.includes("price") || normalized.includes("pricing") || normalized.includes("cost") || normalized.includes("quote") || normalized.includes("wholesale")) {
        botResponse = "Because you buy directly from our Ramganjmandi factory yard, we offer the most competitive wholesale prices. Contact us with your exact dimensions, thickness, and total sq.ft to receive a custom quote within 24 hours.";
      } else if (normalized.includes("export") || normalized.includes("international") || normalized.includes("mundra") || normalized.includes("kandla")) {
        botResponse = "Our export division (Kamal Enterprises) coordinates shipping via Mundra & Kandla ports. We manage all documentation, customs clearance, and deliver seaworthy fumigated wooden crates to any global destination.";
      } else if (normalized.includes("factory") || normalized.includes("location") || normalized.includes("ramganjmandi") || normalized.includes("where")) {
        botResponse = "Our manufacturing yard is located at Amarpura, Ramganjmandi, District Kota, Rajasthan – 326519, India. We have been processing natural stone at this facility since 1985.";
      } else if (normalized.includes("custom") || normalized.includes("cnc") || normalized.includes("drawing")) {
        botResponse = "Yes! We specialize in custom-cut stone. Send us your architectural drawings, and our CNC machinery will cut slabs, stair treads, pool copings, or steps to your exact dimensions.";
      } else {
        answered = false;
        botResponse = "I want to make sure you get the most accurate details. I can escalate your query directly to our Live Support Team. Would you like me to email your question to our factory coordinator?";
      }

      setChatMessages((prev) => [...prev, { role: "bot", text: botResponse }]);

      if (!answered) {
        setAiUnansweredCount((prev) => prev + 1);
      }
    }, 800);
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
                                  className={`max-w-[80%] rounded-xl px-4 py-3 leading-relaxed
                                    ${
                                      msg.role === "user"
                                        ? "bg-primary text-white rounded-tr-none shadow-md"
                                        : "bg-white/8 text-white/90 border border-white/5 rounded-tl-none"
                                    }
                                  `}
                                >
                                  {msg.text.split("\n").map((para, i) => (
                                    <p key={i} className={i > 0 ? "mt-2" : ""}>
                                      {para}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            ))}
                            <div ref={chatEndRef} />
                          </div>

                          {/* Fallback Live Escalation Trigger */}
                          {aiUnansweredCount >= 2 && !escalated && (
                            <div className="bg-slate-950/80 border-t border-white/10 p-3 flex items-center justify-between gap-3 shrink-0">
                              <span className="text-[10px] text-stone-gold font-sans leading-tight">
                                Talk directly to our coordinator via email?
                              </span>
                              <button
                                onClick={handleEscalateChat}
                                disabled={isSending}
                                className="bg-stone-gold hover:bg-stone-gold-dark text-slate-950 text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded transition-colors cursor-pointer shrink-0"
                              >
                                {isSending ? "Sending..." : "Email Coordinator"}
                              </button>
                            </div>
                          )}

                          {/* Chat Input form */}
                          <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-slate-950/60 flex gap-2 shrink-0">
                            <input
                              type="text"
                              value={chatInput}
                              onChange={(e) => setChatInput(e.target.value)}
                              placeholder="Ask about sizes, finishes, colors..."
                              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-stone-gold/60 focus:bg-white/8 transition-all font-sans"
                            />
                            <button
                              type="submit"
                              className="w-9 h-9 rounded-lg bg-stone-gold hover:bg-stone-gold-dark text-slate-950 flex items-center justify-center shrink-0 cursor-pointer transition-colors"
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
    </>
  );
}
