import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, Copy, FileText, Layout, Lightbulb, Link2, Minimize2, Palette, PlayCircle } from "lucide-react";
import { Project } from "../types";
import { PROJECTS } from "../data";

export default function FeaturedProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCaseTab, setActiveCaseTab] = useState<"overview" | "research" | "flow" | "architecture" | "system">("overview");
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setActiveCaseTab("overview");
  };

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
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

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#F5EDE4] overflow-hidden" id="projects">
      {/* Glow highlight anchors */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#B47B84]/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Scroll reveal wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Structured Section Heading & Navigation controls */}
        <div className="max-w-7xl mx-auto mb-12 relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex border-l-2 border-[#B47B84] pl-4 flex-col">
            <span className="font-mono text-xs text-[#B47B84] uppercase tracking-[0.25em] mb-2">Featured Launches</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[#1A1A1A] tracking-tight">
              Immersive Project Catalog
            </h2>
            <p className="text-[#6B6B6B] text-xs font-mono font-light mt-1">SWIPE OR USE BUTTONS TO NAVIGATE CASE STUDIES</p>
          </div>

          {/* Side Slider Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => handleScroll("left")}
              className="w-12 h-12 rounded-full border border-[#B47B84]/20 hover:border-[#B47B84] flex items-center justify-center bg-white/60 hover:bg-[#B47B84] hover:text-white text-[#1A1A1A] transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-12 h-12 rounded-full border border-[#B47B84]/20 hover:border-[#B47B84] flex items-center justify-center bg-white/60 hover:bg-[#B47B84] hover:text-white text-[#1A1A1A] transition-all duration-300 cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Projects Showcase Container with Sideways Scrolling */}
        <div 
          ref={scrollRef}
          onScroll={handleScrollProgress}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-10 relative z-10 scrollbar-none max-w-7xl mx-auto" 
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={project.id}
              className="w-[380px] shrink-0 snap-center bg-white/60 border border-[#B47B84]/15 hover:border-[#B47B84]/40 transition-all rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Image Container - Fixed Height */}
              <div className="relative h-[280px] bg-white overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Year Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#B47B84]/20">
                  <span className="font-mono text-xs text-[#B47B84]">{project.year}</span>
                </div>
              </div>

              {/* Content - Fixed Padding */}
              <div className="p-6 flex flex-col flex-1">
                {/* Category */}
                <div className="mb-3">
                  <span className="font-mono text-[10px] text-[#6B6B6B] uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                {/* Title - Fixed Height */}
                <h3 className="font-display font-bold text-xl text-[#1A1A1A] tracking-tight mb-3 line-clamp-2 min-h-[3.5rem]">
                  {project.title}
                </h3>

                {/* Description - Fixed Height */}
                <p className="text-[#3D3D3D] text-sm leading-relaxed mb-4 line-clamp-3 min-h-[4rem]">
                  {project.description}
                </p>

                {/* Tags - Fixed Height */}
                <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem]">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 bg-[#B47B84]/10 text-[#3D3D3D] border border-[#B47B84]/20 rounded-full h-fit"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-mono px-2.5 py-1 text-[#6B6B6B]">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Button - Pushed to Bottom */}
                <div className="mt-auto pt-4 border-t border-[#B47B84]/10">
                  <button
                    onClick={() => handleOpenCaseStudy(project)}
                    className="w-full flex items-center justify-center gap-2 bg-[#B47B84]/15 hover:bg-[#B47B84] text-[#B47B84] hover:text-white font-display text-xs font-bold px-4 py-3 rounded-lg transition-all duration-300 border border-[#B47B84]/30"
                  >
                    <FileText className="w-4 h-4" />
                    View Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Client */}
                <div className="pt-4">
                  <p className="text-[10px] font-mono text-[#6B6B6B] uppercase tracking-wider text-center">
                    {project.client}
                  </p>
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

      {/* Case Study Full Screen Immersive Portal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#F5EDE4]/98 z-[100] overflow-y-auto pt-16 md:pt-20 pb-12 flex justify-center"
            id="case-study-portal-pane"
          >
            {/* Custom interactive dashboard layout */}
            <div className="w-full max-w-6xl mx-auto px-6 relative" id="case-study-frame">
              
              {/* Header section with Close Trigger */}
              <div className="flex items-center justify-between border-b border-[#B47B84]/15 pb-6 mb-10" id="case-study-header">
                <div>
                  <span className="font-mono text-[#B47B84] text-[10px] uppercase tracking-[0.25em]">{selectedProject.category}</span>
                  <p className="text-[11px] font-mono text-[#6B6B6B] uppercase tracking-widest mt-1">PRODUCT LAUNCH INITIATIVE • {selectedProject.year}</p>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-1.5 bg-white/80 hover:bg-white px-4.5 py-2 rounded-full text-xs font-display tracking-widest uppercase font-bold border border-[#B47B84]/30 hover:border-[#B47B84] transition-colors text-[#1A1A1A]"
                  title="Close Project Portal"
                >
                  <Minimize2 className="w-3.5 h-3.5 text-[#B47B84]" />
                  Close Portal
                </button>
              </div>

              {/* Grid: Overview and Side panel controls */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* 1. Left Section Tabs indices */}
                <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0" id="case-study-nav-box">
                  <button
                    onClick={() => setActiveCaseTab("overview")}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-display font-bold tracking-widest uppercase text-left w-full transition-colors whitespace-nowrap min-w-fit ${
                      activeCaseTab === "overview" ? "bg-[#B47B84] text-white" : "hover:bg-white/50 text-[#3D3D3D]"
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Overview & Problem
                  </button>
                  <button
                    onClick={() => setActiveCaseTab("research")}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-display font-bold tracking-widest uppercase text-left w-full transition-colors whitespace-nowrap min-w-fit ${
                      activeCaseTab === "research" ? "bg-[#B47B84] text-white" : "hover:bg-white/50 text-[#3D3D3D]"
                    }`}
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    Research Insights
                  </button>
                  <button
                    onClick={() => setActiveCaseTab("flow")}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-display font-bold tracking-widest uppercase text-left w-full transition-colors whitespace-nowrap min-w-fit ${
                      activeCaseTab === "flow" ? "bg-[#B47B84] text-white" : "hover:bg-white/50 text-[#3D3D3D]"
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5" />
                    User Flow Map
                  </button>
                  <button
                    onClick={() => setActiveCaseTab("architecture")}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-display font-bold tracking-widest uppercase text-left w-full transition-colors whitespace-nowrap min-w-fit ${
                      activeCaseTab === "architecture" ? "bg-[#B47B84] text-white" : "hover:bg-white/50 text-[#3D3D3D]"
                    }`}
                  >
                    <Layout className="w-3.5 h-3.5" />
                    Layout Hierarchy
                  </button>
                  <button
                    onClick={() => setActiveCaseTab("system")}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-display font-bold tracking-widest uppercase text-left w-full transition-colors whitespace-nowrap min-w-fit ${
                      activeCaseTab === "system" ? "bg-[#B47B84] text-white" : "hover:bg-white/50 text-[#3D3D3D]"
                    }`}
                  >
                    <Palette className="w-3.5 h-3.5" />
                    Design Tokens
                  </button>
                </div>

                {/* 2. Main content display plate */}
                <div className="lg:col-span-9" id="case-study-visual-plate">
                  <div className="glass-panel-heavy p-6 md:p-10 rounded-2xl border border-[#B47B84]/20 shadow-2xl relative min-h-[460px] bg-white/60">
                    
                    {/* Glowing highlight anchor background */}
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#B47B84]/5 rounded-full blur-[80px]" />

                    {/* OVERVIEW & PROBLEM */}
                    {activeCaseTab === "overview" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                      >
                        <div>
                          <p className="font-mono text-xs text-[#B47B84] uppercase tracking-widest mb-1.5">Launch Phase Archetype</p>
                          <h4 className="font-display font-bold text-3xl text-[#1A1A1A]">{selectedProject.title}</h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                          <div>
                            <p className="text-xs font-mono uppercase text-[#6B6B6B] tracking-wider mb-2">The Strategic Problem</p>
                            <p className="font-sans font-light text-[#3D3D3D] leading-relaxed text-sm">
                              {selectedProject.caseStudy.problem}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-mono uppercase text-[#6B6B6B] tracking-wider mb-2">The Design Solution</p>
                            <p className="font-sans font-light text-[#3D3D3D] leading-relaxed text-sm">
                              {selectedProject.caseStudy.solution}
                            </p>
                          </div>
                        </div>

                        <div className="pt-6 border-t border-[#B47B84]/10">
                          <p className="text-xs font-mono uppercase text-[#6B6B6B] tracking-wider mb-3">Enterprise Overview</p>
                          <p className="text-[#1A1A1A] font-sans font-light text-sm leading-relaxed">
                            {selectedProject.caseStudy.overview}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* RESEARCH INSIGHTS */}
                    {activeCaseTab === "research" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <p className="font-mono text-xs text-[#B47B84] uppercase tracking-wider">Qualitative Research Evidence</p>
                        <h4 className="font-display font-bold text-2xl text-[#1A1A1A] mb-6">User Empathy Discoveries</h4>

                        <div className="grid grid-cols-1 gap-4">
                          {selectedProject.caseStudy.researchInsights.map((insight, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-4 bg-white/60 p-4 rounded-xl border border-[#B47B84]/15 hover:border-[#B47B84]/30 transition-colors"
                            >
                              <div className="w-6 h-6 rounded-full bg-[#B47B84]/20 text-[#B47B84] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                                {idx + 1}
                              </div>
                              <p className="text-sm font-sans font-light text-[#1A1A1A] leading-relaxed">
                                {insight}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* USER FLOW MAP */}
                    {activeCaseTab === "flow" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <p className="font-mono text-xs text-[#B47B84] uppercase tracking-wider">Optimal Interface Pathways</p>
                        <h4 className="font-display font-bold text-2xl text-[#1A1A1A] mb-6">User Flow Architecture</h4>

                        <div className="relative pl-6 border-l border-[#B47B84]/30 space-y-8 py-2">
                          {selectedProject.caseStudy.userFlowSteps.map((step, idx) => (
                            <div key={idx} className="relative">
                              {/* Glowing bullet */}
                              <div className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#B47B84] flex items-center justify-center">
                                <Link2 className="w-2 h-2 text-[#B47B84]" />
                              </div>
                              <p className="text-sm font-sans font-medium text-[#1A1A1A] tracking-wide">{step}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* WIREFRAMES & LAYOUTS */}
                    {activeCaseTab === "architecture" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <p className="font-mono text-xs text-[#B47B84] uppercase tracking-wider">Grid Mechanics & Blueprint Studies</p>
                        <h4 className="font-display font-bold text-2xl text-[#1A1A1A] mb-4">Structure Constraints</h4>
                        <p className="text-[#3D3D3D] text-sm font-sans font-light leading-relaxed mb-6">
                          {selectedProject.caseStudy.wireframesDescription}
                        </p>

                        {/* Interactive Blueprint Canvas Simulation */}
                        <div className="border border-[#B47B84]/30 rounded-xl bg-white/40 p-4 border-dashed relative">
                          <div className="absolute top-2 right-2 font-mono text-[8px] text-[#6B6B6B] uppercase tracking-widest">DIAGNOSTIC DISPLAY</div>
                          <div className="grid grid-cols-12 gap-3 h-32 items-stretch font-mono text-[9px] text-[#6B6B6B] text-center">
                            <div className="col-span-3 border border-[#B47B84]/20 rounded flex flex-col justify-between p-2 bg-white/50">
                              <span>LEFT BAR</span>
                              <span className="text-[7px]">PERSISTENT=FALSE</span>
                            </div>
                            <div className="col-span-9 border border-[#B47B84]/40 rounded flex flex-col justify-between p-2 bg-[#B47B84]/5">
                              <div className="flex justify-between items-center w-full">
                                <span className="text-[#B47B84]">PRIMARY WORKSPACE GRID</span>
                                <span className="text-[#C98B95]">BENTO FRAME</span>
                              </div>
                              <div className="grid grid-cols-3 gap-2">
                                <div className="border border-[#B47B84]/20 rounded py-3 bg-white">W1</div>
                                <div className="border border-[#B47B84]/20 rounded py-3 bg-white">W2</div>
                                <div className="border border-[#B47B84]/20 rounded py-3 bg-white">W3</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* DESIGN SYSTEMS TOKENS */}
                    {activeCaseTab === "system" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <p className="font-mono text-xs text-[#B47B84] uppercase tracking-wider">Design Token Values</p>
                        <h4 className="font-display font-bold text-2xl text-[#1A1A1A] mb-4">System Elements</h4>

                        {/* Palette displays */}
                        <div className="space-y-6">
                          <div>
                            <p className="text-xs font-mono uppercase text-[#6B6B6B] tracking-wider mb-3">Color Token Tokens (Click to Copy)</p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                              {selectedProject.caseStudy.designSystem.colors.map((color) => (
                                <div
                                  key={color.hex}
                                  onClick={() => handleCopyHex(color.hex)}
                                  className="group cursor-pointer bg-white/60 rounded-xl p-3 border border-[#B47B84]/15 hover:border-[#B47B84]/40 transition-all text-center select-none"
                                >
                                  <div
                                    className="w-full h-12 rounded-lg mb-2 shadow-inner group-hover:scale-[1.02] transition-transform"
                                    style={{ backgroundColor: color.hex }}
                                  />
                                  <p className="text-[10px] text-[#1A1A1A] font-medium font-display leading-tight">{color.name}</p>
                                  <p className="text-[9px] font-mono text-[#6B6B6B] mt-0.5 uppercase tracking-wide flex items-center justify-center gap-1 group-hover:text-[#B47B84] transition-colors">
                                    {copiedHex === color.hex ? (
                                      <span className="text-[#B47B84] flex items-center gap-0.5">COPIED!</span>
                                    ) : (
                                      <>
                                        {color.hex} <Copy className="w-2.5 h-2.5" />
                                      </>
                                    )}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#B47B84]/10 text-sm font-sans font-light">
                            <div>
                              <p className="text-xs font-mono uppercase text-[#6B6B6B] tracking-wider mb-2">Typography Tokens</p>
                              <p className="text-[#B47B84] font-mono text-xs bg-white/50 px-3 py-2 rounded border border-[#B47B84]/20 leading-relaxed">
                                {selectedProject.caseStudy.designSystem.typography}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs font-mono uppercase text-[#6B6B6B] tracking-wider mb-2">Bespoke Design Tokens</p>
                              <div className="flex flex-wrap gap-1.5">
                                {selectedProject.caseStudy.designSystem.elements.map((el) => (
                                  <span key={el} className="bg-white/60 px-2.5 py-1 text-xs text-[#3D3D3D] rounded border border-[#B47B84]/15 font-mono">
                                    {el}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Interactive Prototype Simulation Bar */}
                    <div className="mt-10 border-t border-[#B47B84]/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#6B6B6B] gap-4">
                      <div className="flex items-center gap-1.5">
                        <PlayCircle className="w-3.5 h-3.5 text-[#B47B84]" />
                        <span>Interactive Prototype Simulation Phase: </span>
                        <span className="text-[#1A1A1A] font-medium">READY</span>
                      </div>
                      <div className="text-[10px] bg-white/60 px-3 py-1 rounded text-[#3D3D3D] italic">
                        {selectedProject.caseStudy.prototypeDescription}
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
