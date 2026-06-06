import { motion } from "motion/react";
import { Award, Compass, Linkedin, Briefcase, Send, Sparkles, Star } from "lucide-react";
import { PORTFOLIO_OWNER, SKILL_CATEGORIES } from "../data";

export default function AboutSection() {
  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      default:
        return <Send className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-charcoal-pure overflow-hidden" id="about">
      {/* Glow spots */}
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto relative z-10"
      >
        
        {/* Core Layout Grid: About bio + Skills token board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
          
          {/* Left Column: Narrative bio & Social CTAs */}
          <div className="lg:col-span-5 space-y-8" id="about-narrative-container">
            <div className="flex border-l-2 border-accent-teal pl-4 flex-col mb-4">
              <span className="font-mono text-xs text-accent-teal uppercase tracking-[0.25em] mb-1">DESIGNER STATEMENT</span>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
                About / Methushiela
              </h2>
            </div>

            <h3 className="font-display font-medium text-lg text-white tracking-wide leading-relaxed">
              {PORTFOLIO_OWNER.bioHeadline}
            </h3>

            <p className="text-white/60 text-sm md:text-base font-sans font-light leading-relaxed">
              {PORTFOLIO_OWNER.bioParagraph1}
            </p>

            <p className="text-white/60 text-sm md:text-base font-sans font-light leading-relaxed">
              {PORTFOLIO_OWNER.bioParagraph2}
            </p>

            {/* Social channels signature links */}
            <div className="pt-6 border-t border-white/5 space-y-4" id="social-channels-links">
              <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Connect / Core Channels</p>
              <div className="flex flex-wrap gap-4">
                {PORTFOLIO_OWNER.socials.map((soc) => (
                  <a
                    href={soc.url}
                    key={soc.name}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-4 py-2 border border-white/10 hover:border-white/20 text-white/80 hover:text-white transition-colors text-xs font-mono rounded"
                  >
                    {getSocialIcon(soc.name)}
                    {soc.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Grid statistics highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4" id="about-stats-grid">
              <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                <span className="font-display font-bold text-2xl text-accent-teal block">5+ Years</span>
                <span className="font-mono text-[9px] text-white/40 tracking-wider uppercase">Craft Excellence</span>
              </div>
              <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                <span className="font-display font-bold text-2xl text-accent-purple block">32+ Projects</span>
                <span className="font-mono text-[9px] text-white/40 tracking-wider uppercase">Vetted Systems</span>
              </div>
            </div>
          </div>

          {/* Right Column: Skills tokens catalog layout */}
          <div className="lg:col-span-7 space-y-10" id="skills-catalog-board">
            <div>
              <p className="font-mono text-xs text-accent-teal uppercase tracking-widest mb-1">Forge Calibration Specs</p>
              <h3 className="font-display font-black text-2xl text-white tracking-wide">Dynamic Engine Skills</h3>
            </div>

            <div className="space-y-8">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl relative overflow-hidden">
                  {/* Subtle decorative backing bar */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] rounded-full translate-x-8 -translate-y-8" />
                  
                  <h4 className="font-mono text-xs text-white/45 tracking-widest uppercase mb-6 border-b border-white/5 pb-2">
                    // {cat.title}
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-white/80 font-medium font-display">{skill.name}</span>
                          <span className="font-mono text-[10px] text-accent-teal">{skill.level}%</span>
                        </div>
                        {/* Custom visual progress bar */}
                        <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-accent-purple to-accent-teal rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
