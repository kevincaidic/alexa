import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, ArrowUpRight, CheckCircle2, ShieldCheck, Mail, Globe, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Fintech Dashboard",
    timeline: "1-2 Months",
    notes: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!formData.name || !formData.email) {
      setFormError("Please enter both your name and email address to calibrate contact parameters.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormError(null);
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        service: "Fintech Dashboard",
        timeline: "1-2 Months",
        notes: ""
      });
    }, 1500);
  };

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-charcoal-pure overflow-hidden border-t border-white/5" id="contact">
      {/* Decorative cybernetic backdrop line grids */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-accent-purple/5 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto relative z-10"
        id="contact-workspace"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-stretch">
          
          {/* Left Column: Contact coordinates & quick credentials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10" id="contact-coord-plate">
            <div className="space-y-6">
              <div className="flex border-l-2 border-accent-teal pl-4 flex-col mb-4">
                <span className="font-mono text-xs text-accent-teal uppercase tracking-[0.25em] mb-2">Initiate Alignment</span>
                <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
                  Start a Project
                </h2>
                <p className="text-white/40 text-xs font-mono font-light mt-1">CALIBRATE INTEGRATION ARGUEMENTS TO DISPATCH</p>
              </div>

              <p className="text-white/60 text-sm md:text-base font-sans font-light leading-relaxed">
                Have a premium digital concept, dynamic layout question, or deep design challenge? Submit the parameters to trigger instant communication.
              </p>

              {/* Direct coordinates links */}
              <div className="pt-6 space-y-4" id="direct-coords-list">
                <div className="flex items-center gap-3.5 bg-[#15171B]/20 p-3.5 rounded-xl border border-white/5">
                  <Mail className="w-4 h-4 text-accent-teal" />
                  <div>
                    <p className="text-[10px] font-mono text-white/45 uppercase tracking-widest leading-none mb-1">Direct Mailbox</p>
                    <a href="mailto:cagaanan.alexa@design.studio" className="text-white font-mono text-sm hover:text-accent-teal transition-colors">
                      cagaanan.methushielaalexa@dnsc.edu.ph
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-[#15171B]/20 p-3.5 rounded-xl border border-white/5">
                  <Globe className="w-4 h-4 text-accent-purple" />
                  <div>
                    <p className="text-[10px] font-mono text-white/45 uppercase tracking-widest leading-none mb-1">Active Headquarters</p>
                    <p className="text-white text-sm">
                      GMT+8 (Asia/Manila) • Global Remote Service
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Security logs */}
            <div className="bg-[#15171B]/25 border border-white/5 p-5 rounded-2xl font-mono text-[9px] text-white/40 hidden lg:block" id="contact-sec-badges">
              <div className="flex justify-between items-center mb-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-emerald" />
                  DISPATCH SECURITY METHOD: ACTIVE
                </span>
                <span className="text-white/45">SSL 256B</span>
              </div>
              <p>PROJECT PARAMETERS SENT SECURELY TO THE PORTFOLIO PIPELINES.</p>
            </div>
          </div>

          {/* Right Column: Responsive Glassmorphic Form Dashboard */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="glass-panel-heavy p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl relative min-h-[460px]">
              
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[#0B0C0E]/95 z-20 rounded-2xl"
                    id="contact-form-success"
                  >
                    <div className="w-14 h-14 rounded-full bg-accent-emerald/10 text-accent-emerald flex items-center justify-center mb-6 border border-accent-emerald/20 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-black text-2xl text-white mb-2">Parameters Dispatched!</h3>
                    <p className="text-white/60 text-sm max-w-sm font-sans font-light leading-relaxed mb-8">
                      Thank you! Your project configuration payload has successfully compiled. Methushiela Alexa will examine your requirements within 12 standard business hours.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="px-6 py-2.5 bg-white hover:bg-accent-teal text-charcoal-pure font-display font-bold uppercase tracking-wider text-xs rounded-full transition-all duration-300"
                    >
                      Calibrate Another Form
                    </button>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              {/* Core Form Element fields */}
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form-elements">
                
                {formError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-200 font-mono text-[11px] leading-relaxed flex items-start gap-2.5"
                    id="form-error-banner"
                  >
                    <span className="shrink-0 font-bold bg-red-800/40 text-red-300 px-2.5 py-0.5 rounded">REJECTED</span>
                    <span className="text-white/80">{formError}</span>
                  </motion.div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-white/45 uppercase tracking-widest block font-bold">Your ID / Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Linnea Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#15171B]/55 border border-white/5 focus:border-accent-teal rounded-lg px-4.5 py-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Mail address field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-white/45 uppercase tracking-widest block font-bold">Inbound Mail Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sterling@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#15171B]/55 border border-white/5 focus:border-accent-teal rounded-lg px-4.5 py-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  {/* Project Service dropdown options */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-white/45 uppercase tracking-widest block font-bold">Target Initiative Archetype</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#15171B]/55 border border-white/5 focus:border-accent-teal rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Fintech Dashboard">FinTech Design Systems</option>
                      <option value="Mobile App • Wellness">Tactile Mobile Applications</option>
                      <option value="Interactive Map / WebGL">Immersive WebGL Portals</option>
                      <option value="Custom Brand Identity">Bespoke Strategic Branding</option>
                    </select>
                  </div>

                  {/* Project Timeline Options dropdown */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-white/45 uppercase tracking-widest block font-bold">Project Dispatch Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[#15171B]/55 border border-white/5 focus:border-accent-teal rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Immediate Service">Hyperspeed (1 Month)</option>
                      <option value="1-2 Months">Standard System (1-2 Months)</option>
                      <option value="3+ Months">Multi-module System (3+ Months)</option>
                    </select>
                  </div>
                </div>

                {/* Additional notes field */}
                <div className="space-y-2 pt-2">
                  <label className="text-[10px] font-mono text-white/45 uppercase tracking-widest block font-bold">Project Arguments / Design Brief</label>
                  <textarea
                    rows={4}
                    placeholder="Describe specific grid parameters, component targets, or layout constraints..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#15171B]/55 border border-white/5 focus:border-accent-teal rounded-lg px-4.5 py-3 text-sm text-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Trigger with loading visual and magnetic feedback */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent-purple hover:bg-accent-teal text-white hover:text-charcoal-pure font-display uppercase tracking-widest text-xs font-bold py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-accent-teal/15 border border-white/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  id="submit-contact-button"
                >
                  <Send className={`w-4 h-4 ${loading ? "animate-ping" : ""}`} />
                  {loading ? "Compiling Payload..." : "Dispatch Project Brief"}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

              </form>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
