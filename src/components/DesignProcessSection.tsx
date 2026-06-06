import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, PenTool, Layers, Compass, HelpCircle, Check, Play, UserCheck, ChevronRight } from "lucide-react";
import { DESIGN_STAGES } from "../data";

export default function DesignProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  // Return icons based on step index for tailored micro-presentation
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-accent-teal" />;
      case 1:
        return <PenTool className="w-5 h-5 text-accent-purple" />;
      case 2:
        return <Layers className="w-5 h-5 text-accent-cyan" />;
      case 3:
        return <Compass className="w-5 h-5 text-accent-emerald" />;
      case 4:
        return <UserCheck className="w-5 h-5 text-[#FF007A]" />;
      default:
        return <HelpCircle className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-charcoal-pure overflow-hidden" id="process">
      {/* Decorative backing spotlights */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent-teal/[0.02] rounded-full blur-[140px] pointer-events-none" />

      {/* Scroll reveal wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Structured header */}
        <div className="mb-16 md:mb-24" id="process-header">
          <div className="flex border-l-2 border-accent-teal pl-4 flex-col">
            <span className="font-mono text-xs text-accent-teal uppercase tracking-[0.25em] mb-2">Design Blueprint</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
              Creative Strategy & Flow
            </h2>
            <p className="text-white/40 text-xs font-mono font-light mt-1">CLICK A SEGMENT BLOCK TO MONITOR RESEARCH PROTOCOLS</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="process-playground">
          {/* Left Side: Timeline Steps list connected with active tracker bar */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="timeline-flow-list">
            <div className="relative pl-6 space-y-4" id="timeline-tracks">
              
              {/* Animated progress track line */}
              <div className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-white/5" />

              {DESIGN_STAGES.map((stage, index) => {
                const isSelected = activeStep === index;
                return (
                  <div
                    key={stage.step}
                    onClick={() => setActiveStep(index)}
                    className={`group relative flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer select-none ${
                      isSelected
                        ? "bg-white/5 border-white/10 shadow-lg scale-[1.02]"
                        : "bg-transparent border-transparent hover:border-white/5"
                    }`}
                    id={`process-stage-selector-${index}`}
                  >
                    {/* Active highlight scroll bar */}
                    {isSelected && (
                      <motion.div
                        layoutId="active-process-line-highlight"
                        className="absolute -left-[4.5px] top-3 bottom-3 w-[3px] bg-gradient-to-b from-accent-purple to-accent-teal rounded-full z-20"
                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                      />
                    )}

                    {/* Custom Indicator Circle */}
                    <div
                      className={`w-[10px] h-[10px] rounded-full shrink-0 border z-10 transition-colors ${
                        isSelected
                          ? "bg-accent-teal border-accent-teal shadow-[0_0_8px_rgba(0,245,212,0.6)]"
                          : "bg-[#050505] border-white/20 group-hover:border-white/45"
                      }`}
                    />

                    {/* Step ID index */}
                    <span className="font-mono text-xs text-white/30 font-semibold w-6">{stage.step}</span>

                    <div className="flex-1">
                      <p className={`font-display text-sm font-semibold tracking-wide transition-colors ${
                        isSelected ? "text-white" : "text-white/60 group-hover:text-white"
                      }`}>
                        {stage.title}
                      </p>
                      <p className="text-white/30 text-[11px] font-sans truncate max-w-xs">{stage.description}</p>
                    </div>

                    <ChevronRight className={`w-4 h-4 text-white/20 group-hover:text-white transition-opacity ${
                      isSelected ? "opacity-100" : "opacity-0"
                    }`} />
                  </div>
                );
              })}
            </div>

            {/* Core process checklist summary */}
            <div className="hidden lg:block bg-[#15171B]/30 border border-white/5 p-5 rounded-2xl font-mono text-[10px] text-white/40 mt-8" id="diagnostic-process">
              <div className="flex justify-between items-center mb-3">
                <span>SYSTEM QUALITY REPORT</span>
                <span className="text-accent-teal">VERIFIED</span>
              </div>
              <p className="mb-2 leading-relaxed">DESIGN SYSTEM TOKENS ACCURACY: 99.8%</p>
              <p className="leading-relaxed">INTERACTIVE PHYSICS TIMING: 60FPS STABLE</p>
            </div>
          </div>

          {/* Right Side: Detailed descriptive plate for selected stage */}
          <div className="lg:col-span-7 flex flex-col" id="timeline-detail-plate">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-panel-heavy p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl flex-1 flex flex-col justify-between"
                id="timeline-active-pane"
              >
                {/* Header card info */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {getStepIcon(activeStep)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">STAGE PROCESS {DESIGN_STAGES[activeStep].step}</span>
                        <h4 className="font-display font-black text-xl text-white tracking-wide">{DESIGN_STAGES[activeStep].title}</h4>
                      </div>
                    </div>
                    
                    <span className="font-mono text-3xl font-extrabold text-white/5 select-none">{DESIGN_STAGES[activeStep].step}</span>
                  </div>

                  <p className="text-white/80 font-sans font-light text-sm md:text-base leading-relaxed mb-8 border-b border-white/5 pb-6">
                    {DESIGN_STAGES[activeStep].description}
                  </p>

                  {/* Specific bullets of deliverables */}
                  <div className="space-y-4">
                    <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">Stage Deliverables</p>
                    
                    {DESIGN_STAGES[activeStep].details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-accent-teal/10 text-accent-teal flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <p className="text-xs font-sans text-white/75 font-light leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core designer psychological quote insight */}
                <div className="mt-10 pt-6 border-t border-white/5 flex items-start gap-4" id="process-quote-box">
                  <div className="mt-1 p-2 bg-white/5 rounded-lg font-mono text-[9px] text-accent-teal">
                    INSIGHT
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">Philosophy Axiom</p>
                    <p className="text-xs italic text-[#00F5D4] leading-relaxed font-sans font-light">
                      "{DESIGN_STAGES[activeStep].insights}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
