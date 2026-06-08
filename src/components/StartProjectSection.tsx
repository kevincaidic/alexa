import { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, MapPin, Shield } from "lucide-react";

export default function StartProjectSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    archetype: "FinTech Design Systems",
    timeline: "Standard System (1-2 Months)",
    brief: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link with form data
    const subject = encodeURIComponent(`Project Brief: ${formData.archetype}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Project Type: ${formData.archetype}\n` +
      `Timeline: ${formData.timeline}\n\n` +
      `Project Brief:\n${formData.brief}`
    );
    
    window.location.href = `mailto:cagaanan.methushielaalex@dnsc.edu.ph?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="relative py-24 px-6 md:px-12 bg-[#F5EDE4] overflow-hidden"
      id="start-project"
    >
      {/* Background Ambient Elements */}
      <div className="glow-orb w-[500px] h-[500px] bg-[#B47B84]/10 top-1/4 -right-1/4" />
      <div className="glow-orb w-[400px] h-[400px] bg-[#C98B95]/10 bottom-1/4 -left-1/4" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#B47B84] mb-4">
            INITIATE ALIGNMENT
          </p>
          <h2 className="text-display text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] mb-6 uppercase tracking-tight">
            Start a Project
          </h2>
          <p className="text-[#3D3D3D] text-sm md:text-base max-w-2xl font-light leading-relaxed">
            CALIBRATE INTEGRATION ARGUMENTS TO DISPATCH
          </p>
          <p className="text-[#3D3D3D] text-sm md:text-base max-w-2xl font-light leading-relaxed mt-2">
            Have a premium digital concept, dynamic layout question, or deep design challenge? Submit the parameters to trigger instant communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email Card */}
            <div className="glass-panel rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#B47B84]/10 flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#B47B84]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#B47B84] mb-1">
                    DIRECT MAILBOX
                  </p>
                  <a
                    href="mailto:cagaanan.methushielaalex@dnsc.edu.ph"
                    className="text-[#1A1A1A] text-sm font-medium hover:text-[#B47B84] transition-colors break-words inline-block"
                    style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                  >
                    cagaanan.methushielaalex@dnsc.edu.ph
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#C98B95]/10">
                  <MapPin className="w-4 h-4 text-[#C98B95]" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#C98B95] mb-1">
                    ACTIVE HEADQUARTERS
                  </p>
                  <p className="text-[#1A1A1A] text-sm font-medium">
                    GMT+8 (Asia/Manila) • Global Remote Service
                  </p>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="glass-panel rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#E89F9C]/10">
                  <Shield className="w-4 h-4 text-[#E89F9C]" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#E89F9C] mb-1">
                    BIOMETRIC SECURITY METHOD: ACTIVE
                  </p>
                  <p className="text-[#3D3D3D] text-xs font-light leading-relaxed">
                    PROJECT PHANTOMS SENT SECURELY TO THE PORTFOLIO PIPELINES.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-8 space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] mb-2 block">
                    YOUR ID / NAME
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Linnea Sterling"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/50 border border-[#B47B84]/20 rounded-lg text-[#1A1A1A] text-sm placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#B47B84] transition-colors"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] mb-2 block">
                    INBOUND MAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. sterling@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/50 border border-[#B47B84]/20 rounded-lg text-[#1A1A1A] text-sm placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#B47B84] transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Archetype and Timeline Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Archetype Select */}
                <div>
                  <label className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] mb-2 block">
                    TARGET INITIATIVE ARCHETYPE
                  </label>
                  <select
                    value={formData.archetype}
                    onChange={(e) => setFormData({ ...formData, archetype: e.target.value })}
                    className="w-full px-4 py-3 bg-white/50 border border-[#B47B84]/20 rounded-lg text-[#1A1A1A] text-sm focus:outline-none focus:border-[#B47B84] transition-colors appearance-none cursor-pointer"
                  >
                    <option>FinTech Design Systems</option>
                    <option>E-Commerce Platform</option>
                    <option>SaaS Dashboard</option>
                    <option>Mobile Application</option>
                    <option>Portfolio Website</option>
                    <option>Custom Web Solution</option>
                  </select>
                </div>

                {/* Timeline Select */}
                <div>
                  <label className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] mb-2 block">
                    PROJECT DISPATCH TIMELINE
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 bg-white/50 border border-[#B47B84]/20 rounded-lg text-[#1A1A1A] text-sm focus:outline-none focus:border-[#B47B84] transition-colors appearance-none cursor-pointer"
                  >
                    <option>Standard System (1-2 Months)</option>
                    <option>Rush Delivery (2-4 Weeks)</option>
                    <option>Extended Project (3-6 Months)</option>
                    <option>Ongoing Collaboration</option>
                  </select>
                </div>
              </div>

              {/* Project Brief Textarea */}
              <div>
                <label className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] mb-2 block">
                  PROJECT ARGUMENTS / DESIGN BRIEF
                </label>
                <textarea
                  placeholder="Describe specific grid parameters, component targets, or layout constraints..."
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/50 border border-[#B47B84]/20 rounded-lg text-[#1A1A1A] text-sm placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#B47B84] transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#4A7FDE] hover:bg-[#5A8FEE] text-white font-display uppercase tracking-wider text-sm font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                DISPATCH PROJECT BRIEF
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
