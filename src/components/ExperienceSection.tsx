import { motion } from "motion/react";
import { Briefcase, ArrowUpRight, CheckCircle } from "lucide-react";
import { EXPERIENCE } from "../data";

export default function ExperienceSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#F5EDE4] overflow-hidden" id="experience">
      {/* Decorative gradient glowing spot */}
      <div className="absolute top-1/3 left-[-15%] w-[600px] h-[600px] bg-[#B47B84]/[0.06] rounded-full blur-[140px] pointer-events-none" />

      {/* Scroll reveal wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Styled Section Header */}
        <div className="mb-16 md:mb-24" id="experience-header">
          <div className="flex border-l-2 border-[#B47B84] pl-4 flex-col">
            <span className="font-mono text-xs text-[#B47B84] uppercase tracking-[0.25em] mb-2">TIMELINE LOGS</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[#1A1A1A] tracking-tight">
              Professional Experience
            </h2>
            <p className="text-[#6B6B6B] text-xs font-mono font-light mt-1">CURATED CHRONOLOGICAL INDUSTRY CONTRIBUTIONS</p>
          </div>
        </div>

        {/* Experience Staggered Rows List */}
        <div className="space-y-12" id="experience-row-list">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={exp.id}
              className="group relative bg-white/50 hover:bg-white/70 border border-[#B47B84]/15 hover:border-[#B47B84]/30 p-6 md:p-10 rounded-2xl transition-all duration-300"
              id={`experience-block-${exp.id}`}
            >
              {/* Grid layout for company profile and descriptions */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Period & Company Brand */}
                <div className="lg:col-span-4 space-y-2">
                  <span className="font-mono text-xs text-[#B47B84] font-semibold tracking-wider font-display uppercase block">
                    {exp.period}
                  </span>
                  
                  <h3 className="font-display font-bold text-2xl text-[#1A1A1A] tracking-tight group-hover:text-[#B47B84] transition-colors">
                    {exp.company}
                  </h3>
                  
                  <p className="text-[#6B6B6B] font-mono text-xs uppercase tracking-widest leading-relaxed">
                    // {exp.role}
                  </p>
                </div>

                {/* Right Column: Key Actions Bullet List & Tag Badges */}
                <div className="lg:col-span-8 space-y-6">
                  
                  <div className="space-y-4">
                    {exp.description.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#B47B84] shrink-0 mt-2" />
                        <p className="text-[#3D3D3D] font-sans font-light text-sm leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags cluster */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#B47B84]/10">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-3 py-1 bg-[#B47B84]/10 text-[#3D3D3D] rounded border border-[#B47B84]/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Glowing vertical reticle in corners on hover */}
              <div className="absolute top-4 right-4 text-[#B47B84]/20 group-hover:text-[#B47B84] transition-colors" id={`experience-reticle-${exp.id}`}>
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
