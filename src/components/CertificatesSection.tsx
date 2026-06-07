import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Calendar, Eye, ShieldCheck, X, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { CertificateItem } from "../types";
import { CERTIFICATES } from "../data";

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [verifying, setVerifying] = useState(false);
  const [verifiedSuccess, setVerifiedSuccess] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Prevent background scrolling and lock Navbar layers when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
      setVerifiedSuccess(false);
      setVerifying(false);
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [selectedCert]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by approximately one card width plus gap
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handleScrollProgress = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    handleScrollProgress();
    window.addEventListener("resize", handleScrollProgress);
    return () => window.removeEventListener("resize", handleScrollProgress);
  }, []);

  const handleVerify = () => {
    if (verifying || verifiedSuccess) return;
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setVerifiedSuccess(true);
    }, 1500);
  };

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#F5EDE4] overflow-hidden" id="certificates">
      {/* Decorative spotlight grids */}
      <div className="absolute top-1/4 right-[-10%] w-[450px] h-[450px] bg-[#B47B84]/[0.05] rounded-full blur-[100px] pointer-events-none" />

      {/* Scroll reveal wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Styled Section Header & Navigation controls */}
        <div className="max-w-7xl mx-auto mb-12 relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6" id="certs-header">
          <div className="flex border-l-2 border-[#B47B84] pl-4 flex-col">
            <span className="font-mono text-xs text-[#B47B84] uppercase tracking-[0.25em] mb-2">Qualifications</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[#1A1A1A] tracking-tight">
              Certificates & Vetting
            </h2>
            <p className="text-[#6B6B6B] text-xs font-mono font-light mt-1">SWIPE OR USE BUTTONS TO NAVIGATE CREDENTIALS</p>
          </div>

          {/* Side Slider Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => handleScroll("left")}
              className="w-12 h-12 rounded-full border border-[#B47B84]/20 hover:border-[#B47B84] flex items-center justify-center bg-white/60 hover:bg-[#B47B84] hover:text-white text-[#1A1A1A] transition-all duration-300 cursor-pointer animate-none"
              title="Scroll Left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-12 h-12 rounded-full border border-[#B47B84]/20 hover:border-[#B47B84] flex items-center justify-center bg-white/60 hover:bg-[#B47B84] hover:text-white text-[#1A1A1A] transition-all duration-300 cursor-pointer animate-none"
              title="Scroll Right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Customizable Card Gallery with Sideways Scrolling */}
        <div 
          ref={scrollRef}
          onScroll={handleScrollProgress}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-10 relative z-10 scrollbar-none max-w-7xl mx-auto" 
          id="certs-cards-grid"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onClick={() => setSelectedCert(cert)}
              className="w-[380px] shrink-0 snap-center bg-white/60 border border-[#B47B84]/15 hover:border-[#B47B84]/40 transition-all rounded-2xl overflow-hidden flex flex-col cursor-pointer group"
              id={`cert-panel-${cert.id}`}
            >
              {/* Certificate Image - Fixed Height */}
              <div className="relative h-[280px] bg-white overflow-hidden">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#B47B84]/20">
                  <span className="font-mono text-xs text-[#B47B84]">{cert.date}</span>
                </div>

                {/* View Overlay on Hover */}
                <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 bg-[#B47B84]/20 px-4 py-2 rounded-full backdrop-blur-sm border border-[#B47B84]/50 text-sm font-display font-bold uppercase tracking-wider text-[#1A1A1A]">
                    <Eye className="w-4 h-4 text-[#B47B84]" />
                    View Details
                  </div>
                </div>
              </div>

              {/* Content - Fixed Padding */}
              <div className="p-6 flex flex-col flex-1">
                {/* Credential ID */}
                <div className="mb-3">
                  <span className="font-mono text-[10px] text-[#6B6B6B] uppercase tracking-widest">
                    {cert.credentialId}
                  </span>
                </div>

                {/* Title - Fixed Height */}
                <h3 className="font-display font-bold text-xl text-[#1A1A1A] tracking-tight mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-[#B47B84] transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer - Fixed Height */}
                <p className="text-[#3D3D3D] text-sm leading-relaxed mb-4 line-clamp-2 min-h-[3rem]">
                  {cert.issuer}
                </p>

                {/* Status Badge */}
                <div className="mt-auto pt-4 border-t border-[#B47B84]/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#B47B84]" />
                      <span className="text-xs font-mono text-[#B47B84] uppercase tracking-wider">Verified</span>
                    </div>
                    <Award className="w-5 h-5 text-[#B47B84]/40 group-hover:text-[#B47B84] transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Elegant Scroll Indicator Track Line */}
        <div className="max-w-7xl mx-auto mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-none relative z-10">
          <div className="w-full sm:max-w-[240px] h-[3px] bg-[#B47B84]/15 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#B47B84] transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(180,123,132,0.4)]" 
              style={{ width: `${Math.max(8, scrollProgress)}%` }}
            />
          </div>
          <div className="text-[10px] font-mono text-[#6B6B6B] uppercase tracking-[0.2em] flex items-center gap-2">
            <span>DRAG TRACKPAD OR SWIPE OR USE NAV</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B47B84] animate-pulse"></span>
          </div>
        </div>
      </motion.div>

      {/* Embedded Certificate credential verification modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedCert(null)}
            id="cert-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-[#1A1C20] border-2 border-white/20 rounded-2xl shadow-2xl relative my-8 max-h-[85vh] overflow-y-auto"
              id="cert-modal-box"
            >
              {/* Sticky Close Button */}
              <div className="sticky top-0 z-50 flex justify-end p-4 bg-[#1A1C20]/95 backdrop-blur-sm">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 bg-white/10 hover:bg-white/20 text-white/70 hover:text-white rounded-lg border border-white/20 hover:border-white/40 cursor-pointer transition-all"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8">
                {/* Outer decorative border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-purple via-accent-teal to-accent-purple" />

              {/* Modal header details */}
              <div className="flex items-center gap-3.5 mb-6 border-b border-white/10 pb-5">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/20 text-accent-purple border border-accent-purple/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent-purple" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-mono text-accent-purple uppercase tracking-[0.2em] block">{selectedCert.issuer}</span>
                  <h4 className="font-display font-black text-lg text-white leading-tight">{selectedCert.title}</h4>
                </div>
              </div>

              {/* Certificate image with high contrast framing */}
              <div className="aspect-[1.5] rounded-lg overflow-hidden relative border-2 border-white/20 mb-6 bg-charcoal-pure">
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Audit specs checklist */}
              <div className="space-y-4 bg-[#0B0C0E] border border-white/20 rounded-xl p-4 font-mono text-xs text-white/70 mb-6" id="cert-specifications">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-accent-teal" />
                    STATUS
                  </span>
                  <span className="text-accent-teal font-semibold">VERIFIED & ACTIVE</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-white/50" />
                    CONFERRED DATE
                  </span>
                  <span className="text-white">{selectedCert.date}</span>
                </div>
                <div className="flex justify-between">
                  <span>REGISTRY ID</span>
                  <span className="text-white">{selectedCert.credentialId}</span>
                </div>
              </div>

              {/* Custom interactive action with modern feedback replacing window.alert */}
              <div className="flex flex-col gap-4">
                {verifying && (
                  <div className="flex items-center gap-2 justify-center py-3 bg-accent-teal/10 border border-accent-teal/30 rounded-xl text-accent-teal font-mono text-xs">
                    <div className="w-4 h-4 border-2 border-accent-teal border-t-transparent rounded-full animate-spin" />
                    CONNECTING REGISTRY AUTHORITIES...
                  </div>
                )}
                {verifiedSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-1.5 p-4 bg-accent-emerald/10 border border-accent-emerald/30 rounded-xl"
                  >
                    <div className="flex items-center gap-2 text-accent-emerald font-mono text-xs font-bold">
                      <Check className="w-4 h-4" />
                      SIGNATURE VERIFICATION SECURED
                    </div>
                    <p className="text-xs text-accent-emerald/80 font-mono leading-relaxed">
                      Cryptographic audit checks validated against registry: {selectedCert.credentialId}
                    </p>
                  </motion.div>
                )}

                <div className="flex flex-col sm:flex-row justify-end gap-3 font-display pt-2">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 hover:border-white/60 rounded-lg text-sm font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleVerify}
                    disabled={verifying || verifiedSuccess}
                    className={`px-6 py-3 rounded-lg text-sm uppercase tracking-wider transition-all duration-300 font-bold cursor-pointer border-2 ${
                      verifiedSuccess 
                        ? "bg-accent-emerald/30 text-accent-emerald border-accent-emerald/60 cursor-default" 
                        : verifying 
                          ? "bg-white/10 text-white/50 border-white/20 cursor-wait" 
                          : "bg-accent-teal hover:bg-accent-teal/80 text-charcoal-pure border-accent-teal/80 hover:border-accent-teal"
                    }`}
                  >
                    {verifiedSuccess ? "✓ Verified" : verifying ? "Verifying..." : "Verify Now"}
                  </button>
                </div>
              </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
