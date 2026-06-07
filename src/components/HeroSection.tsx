import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, Compass, Sparkles, Activity, Eye, Zap } from "lucide-react";
import { PORTFOLIO_OWNER } from "../data";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeWidgetTab, setActiveWidgetTab] = useState(0);
  const [sliderVal, setSliderVal] = useState(74);

  // Mouse coordinate tracker for parallax ambient glowing lights
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // For scroll-driven text parallax transitions
  const { scrollY } = useScroll();
  // Relaxed scroll-driven parallax boundaries optimized for large displays
  const textY = useTransform(scrollY, [0, 800], [0, 120]);
  const imageY = useTransform(scrollY, [0, 800], [0, -70]);
  const opacityFade = useTransform(scrollY, [0, 700], [1, 0.12]);

  const handleScrollToProjects = () => {
    const projElem = document.querySelector("#projects");
    if (projElem) {
      projElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 px-6 md:px-12 overflow-hidden bg-[#F5EDE4]"
      id="hero"
    >
      {/* Cinematic Ambient Glowing Background Orbs (Interact with mouse) */}
      <div
        className="glow-orb w-[600px] h-[600px] bg-[#B47B84]/10 top-1/4 -left-1/4"
        style={{
          transform: `translate(${mousePosition.x * 60}px, ${mousePosition.y * 60}px)`,
        }}
      />
      <div
        className="glow-orb w-[500px] h-[500px] bg-[#C98B95]/10 top-1/3 right-[-10%] "
        style={{
          transform: `translate(${mousePosition.x * -70}px, ${mousePosition.y * -70}px)`,
        }}
      />
      <div
        className="glow-orb w-[400px] h-[400px] bg-[#E89F9C]/8 bottom-[-10%] left-1/3"
        style={{
          transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
        }}
      />

      {/* Cybernetic Grid Overlay Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(180,123,132,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(180,123,132,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40 z-0 mask-radial" />

      {/* Hero Content Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
        
        {/* Left Side: Editorial Typography & Magnetic Statements */}
        <motion.div
          style={{ y: textY, opacity: opacityFade }}
          className="lg:col-span-7 flex flex-col justify-center"
          id="hero-typography-container"
        >
          {/* Creative Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 bg-white/60 border border-[#B47B84]/20 pr-4 pl-3 py-1.5 rounded-full w-fit mb-6 text-xs text-[#B47B84] font-mono tracking-wider backdrop-blur-md"
            id="hero-badge"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B47B84]" />
            <span className="uppercase text-[10px]">PREMIUM INTERFACE CRAFT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B47B84] animate-ping" />
          </motion.div>

          {/* Designer Name Text Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-mono text-[#B47B84] text-[12px] uppercase tracking-[0.3em] font-bold mb-4">
              {PORTFOLIO_OWNER.role}
            </h2>
          </motion.div>

          {/* Large Oversized Awwwards Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-4xl sm:text-6xl md:text-[82px] uppercase tracking-tighter leading-[0.90] mb-8 text-[#1A1A1A] flex flex-col gap-1 sm:gap-2"
            id="hero-core-headline"
          >
            <span>Designing</span>
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(26, 26, 26, 0.25)" }}>Experiences</span>
            <span>That Feel</span>
            <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-[#B47B84] via-[#C98B95] to-[#E89F9C] select-none pb-2">Effortless.</span>
          </motion.h1>

          {/* Secondary Core Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#3D3D3D] md:text-lg max-w-xl mb-10 font-sans font-light leading-relaxed"
            id="hero-desc-para"
          >
            Hi, I'm <span className="text-[#1A1A1A] font-medium">Methushiela Alexa</span>. I am a graduating BSIT student passionate about system development, UI design, and technology-driven solutions. I enjoy transforming ideas into functional applications while continuously learning and growing in the field of information technology.  
          </motion.p>

          {/* Interactive Magnetic Trigger Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
            id="hero-action-buttons"
          >
            <button
              onClick={handleScrollToProjects}
              className="relative px-8 py-4 bg-[#B47B84] hover:bg-[#C98B95] text-white font-display uppercase tracking-wider text-xs font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center gap-2"
              id="hero-btn-explore"
            >
              <span className="flex items-center gap-1">
                Explore Work
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </button>

            <a
              href="#recognitions"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#recognitions")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-4 bg-white hover:bg-[#B47B84] border-2 border-[#B47B84] text-[#1A1A1A] hover:text-white rounded-full text-xs font-display uppercase tracking-widest transition-all duration-300 font-bold"
              id="hero-btn-contact"
            >
              Recognitions
            </a>
          </motion.div>

          {/* Responsive Live Metadata Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg border-t border-[#B47B84]/10 pt-8 text-[11px] font-mono text-[#6B6B6B]"
            id="hero-metadata"
          >
            <div>
              <p className="text-[#B47B84] uppercase tracking-wider text-[9px] mb-1">LOCAL TIME</p>
              <p className="text-[#3D3D3D] font-medium">GMT+8 (Asia/Manila)</p>
            </div>
            <div>
              <p className="text-[#C98B95] uppercase tracking-wider text-[9px] mb-1">DESIGN CORE</p>
              <p className="text-[#3D3D3D] font-medium">Bento Grids & Motion</p>
            </div>
            <div>
              <p className="text-[#E89F9C] uppercase tracking-wider text-[9px] mb-1">AVAILABILITY</p>
              <p className="text-[#3D3D3D] font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#B47B84] inline-block" /> Active Client Mode
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Asymmetrical Portrait Display & Drifting Live Widgets */}
        <motion.div
          style={{ y: imageY }}
          className="lg:col-span-5 relative flex items-center justify-center pointer-events-auto"
          id="hero-presentation-visual"
        >
          {/* Main Portrait Frame - PERFECT CIRCLE */}
          <div className="relative w-full max-w-[360px] aspect-square z-10 group" id="portrait-frame">
            
            {/* Outer offset ambient frame coordinates - CIRCULAR */}
            <div className="absolute inset-0 border border-[#B47B84]/20 -translate-x-4 translate-y-4 rounded-full -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            <div className="absolute inset-0 border border-[#C98B95]/15 -translate-x-8 translate-y-8 rounded-full -z-20 scale-[0.98] group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />

            {/* Glowing spotlight background of image */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#B47B84]/20 via-[#C98B95]/20 to-transparent rounded-full blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Custom Interactive Portrait Image - CIRCULAR with proper fit */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
              <img
                src={PORTFOLIO_OWNER.portraitUrl}
                alt={PORTFOLIO_OWNER.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-all duration-700 select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F5EDE4]/20 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* DRifting tactile widgets modeled on her interactive skills */}
          
          {/* Floating UI Widget 1: Neuro Meditation Breathing Ring */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-10 -left-12 z-20 w-44 p-3 rounded-xl glass-panel border border-[#B47B84]/20 shadow-2xl hidden md:block select-none cursor-pointer group"
            id="hero-widget-soma"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[9px] text-[#B47B84] font-semibold tracking-wider">SOMA WAVES</span>
              <Activity className="w-3.5 h-3.5 text-[#B47B84] animate-pulse" />
            </div>
            <p className="text-[10px] text-[#3D3D3D] font-medium font-display leading-tight mb-2.5">Neuro Breathing Pace</p>
            
            {/* Visual breathing wave loop */}
            <div className="flex items-end justify-center gap-1 h-8 px-1 mb-1 relative overflow-hidden bg-[#B47B84]/10 rounded-lg">
              <motion.div
                animate={{ height: ["30%", "85%", "30%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 bg-[#B47B84] rounded-full"
              />
              <motion.div
                animate={{ height: ["50%", "95%", "50%"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="w-1.5 bg-[#C98B95] rounded-full"
              />
              <motion.div
                animate={{ height: ["20%", "70%", "20%"] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="w-1.5 bg-[#E89F9C] rounded-full"
              />
              <motion.div
                animate={{ height: ["40%", "80%", "40%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                className="w-1.5 bg-[#F4B5A8] rounded-full"
              />
            </div>
            <div className="text-[8px] font-mono text-center text-[#6B6B6B] tracking-widest mt-1">
              BREATH RATE: ACTIVE
            </div>
          </motion.div>

          {/* Floating UI Widget 2: Interactive Slider Controller */}
          <motion.div
            animate={{
              y: [0, 12, 0],
              x: [0, -6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-8 -right-12 z-20 w-48 p-3 rounded-xl glass-panel border border-[#B47B84]/20 shadow-2xl hidden md:block select-none"
            id="hero-widget-tactile"
          >
            <div className="flex items-center gap-1.5 mb-2 border-b border-[#B47B84]/10 pb-1.5">
              <Zap className="w-3.5 h-3.5 text-[#B47B84]" />
              <span className="font-mono text-[9px] text-[#6B6B6B] tracking-wider">TACTILE MODULATOR</span>
            </div>
            
            <p className="text-[10px] text-[#3D3D3D] font-display mb-2.5">Flow Spring Tension</p>
            <input
              type="range"
              min="10"
              max="100"
              value={sliderVal}
              onChange={(e) => setSliderVal(parseInt(e.target.value))}
              className="w-full h-1 bg-[#B47B84]/10 accent-[#B47B84] rounded-lg cursor-pointer mb-1.5 appearance-none"
            />
            <div className="flex justify-between font-mono text-[8px] text-[#6B6B6B]">
              <span>{sliderVal}ms easing</span>
              <span className="text-[#B47B84]">CALIBRATED</span>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Decorative vertical coordinates overlay & floating grid borders */}
      <div className="absolute left-6 bottom-12 hidden xl:flex flex-col items-center gap-4 text-[10px] font-mono tracking-[0.2em] text-[#6B6B6B] select-none">
        <span className="rotate-90 origin-left translate-x-1 py-4 uppercase">M•A•C STUDIO 2026</span>
        <div className="w-[1px] h-12 bg-[#B47B84]/20" />
      </div>

      {/* Scroll Down Floating Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        onClick={handleScrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] font-mono tracking-widest text-[#B47B84] opacity-70 hover:opacity-100 cursor-pointer z-20"
        id="scroll-visual-indicator"
      >
        <span>SCROLL DOWN</span>
        <div className="w-[1px] h-6 bg-[#B47B84]" />
      </motion.div>
    </section>
  );
}
