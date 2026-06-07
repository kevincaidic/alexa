import { ArrowUp, Award, Compass, Heart } from "lucide-react";
import { PORTFOLIO_OWNER } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F5EDE4] border-t border-[#B47B84]/10 py-12 px-6 md:px-12 relative overflow-hidden" id="footer-section">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Brand Credits & Signature */}
        <div className="flex flex-col text-center md:text-left">
          <span className="font-display font-black tracking-widest text-sm text-[#1A1A1A] uppercase sm:text-base">
            {PORTFOLIO_OWNER.name}
          </span>
          <span className="text-[10px] font-mono text-[#6B6B6B] uppercase tracking-[0.2em] mt-1 leading-none">
            CRAFTED WITH PRECISION • 2026
          </span>
        </div>

        {/* Mid Section: Design Axiom Statement and Heart Logo decoration */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-[#6B6B6B]" id="design-integrity-statement">
          <Award className="w-3.5 h-3.5 text-[#B47B84]" />
          <span>ESTABLISHED DESIGN SYSTEM CONSTRAINTS STABLE</span>
          <div className="w-1.5 h-[1px] bg-[#B47B84]/20" />
          <Heart className="w-3 h-3 text-[#B47B84] fill-current animate-pulse opacity-50" />
        </div>

        {/* Right Side: Back to Top Trigger Button with spring mechanical actions */}
        <button
          onClick={handleScrollToTop}
          className="flex items-center gap-2 bg-white/50 hover:bg-white/70 px-4.5 py-2.5 rounded-full text-[10px] font-mono tracking-widest uppercase border border-[#B47B84]/20 transition-all text-[#3D3D3D] hover:text-[#1A1A1A] cursor-pointer select-none"
          title="Return to Space Head"
          id="back-to-top-trigger"
        >
          <ArrowUp className="w-3.5 h-3.5 text-[#B47B84]" />
          Return to Top
        </button>

      </div>
    </footer>
  );
}
