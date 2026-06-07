import { motion } from "motion/react";
import { Award, Trophy, Star } from "lucide-react";
import { RECOGNITIONS } from "../data";

export default function RecognitionsSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#F5EDE4] overflow-hidden" id="recognitions">
      {/* Decorative gradient glowing spot */}
      <div className="absolute top-1/3 right-[-15%] w-[600px] h-[600px] bg-[#B47B84]/[0.08] rounded-full blur-[140px] pointer-events-none" />

      {/* Scroll reveal wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Styled Section Header */}
        <div className="mb-16 md:mb-24" id="recognitions-header">
          <div className="flex border-l-2 border-[#B47B84] pl-4 flex-col">
            <span className="font-mono text-xs text-[#B47B84] uppercase tracking-[0.25em] mb-2">RECOGNITIONS</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[#1A1A1A] tracking-tight">
              Achievements & Awards
            </h2>
            <p className="text-[#6B6B6B] text-xs font-mono font-light mt-1">ACADEMIC HONORS AND PROJECT RECOGNITIONS</p>
          </div>
        </div>

        {/* Recognitions Timeline List */}
        <div className="space-y-8" id="recognitions-list">
          {RECOGNITIONS.map((rec, index) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={rec.id}
              className="group relative bg-white/40 hover:bg-white/60 border border-[#B47B84]/10 hover:border-[#B47B84]/30 rounded-2xl transition-all duration-300 overflow-hidden"
              id={`recognition-${rec.id}`}
            >
              {/* Grid layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 md:p-8 items-start">
                
                {/* Left Column: Period - Gold/Orange color like in your image */}
                <div className="lg:col-span-2 flex items-start justify-start lg:justify-center">
                  <div className="text-left lg:text-center">
                    <p className="font-display font-bold text-2xl md:text-3xl text-[#D4A574] tracking-tight leading-tight">
                      {rec.period}
                    </p>
                  </div>
                </div>

                {/* Middle Column: Title and Institution */}
                <div className="lg:col-span-6 space-y-2">
                  <span className="font-mono text-[10px] text-[#6B6B6B] font-semibold tracking-wider uppercase block">
                    {rec.category}
                  </span>
                  
                  <h3 className="font-display font-bold text-xl md:text-2xl text-[#1A1A1A] tracking-tight leading-tight group-hover:text-[#B47B84] transition-colors">
                    {rec.title}
                  </h3>
                  
                  <p className="text-[#6B6B6B] text-sm tracking-wide">
                    {rec.institution}
                  </p>
                </div>

                {/* Right Column: Description */}
                <div className="lg:col-span-4">
                  <p className="text-[#3D3D3D] text-sm md:text-base leading-relaxed font-sans font-light">
                    {rec.description}
                  </p>
                </div>

              </div>

              {/* Decorative accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B47B84] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
