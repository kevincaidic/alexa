import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Clock } from "lucide-react";
import { PORTFOLIO_OWNER } from "../data";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeStr, setTimeStr] = useState("");

  // Ticking local digital clock for high-fidelity interactive details
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certificates" },
    { name: "Recognitions", href: "#recognitions" },
  ];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-4 bg-[#F5EDE4]/95 backdrop-blur-md border-b border-[#B47B84]/10" : "py-6 bg-transparent"
        }`}
        id="navbar-header"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Digital Signature */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#hero");
            }}
            className="flex flex-col tracking-wider font-display font-bold text-lg select-none group"
            id="brand-logo-link"
          >
            <span className="text-[#1A1A1A] group-hover:text-[#B47B84] transition-colors">
              METHUSHIELA
            </span>
            <span className="text-[10px] uppercase text-[#6B6B6B] tracking-[0.3em] font-mono font-normal">
              ALEXA CAGAANAN
            </span>
          </a>

          {/* Desktop Navigation Options */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/40 p-1 rounded-full border border-[#B47B84]/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => handleScrollTo(item.href)}
                  className={`relative px-4 py-1.5 text-xs font-display tracking-wide uppercase transition-colors rounded-full ${
                    isActive ? "text-white font-semibold" : "text-[#3D3D3D] hover:text-[#1A1A1A]"
                  }`}
                  id={`nav-item-${item.name.toLowerCase()}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-[#B47B84] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Clock & Secondary Details */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Live GMT Ticker */}
            <div className="flex items-center gap-2 bg-white/40 px-3 py-1.5 rounded-md border border-[#B47B84]/10 text-[11px] font-mono text-[#B47B84]" id="live-time-ticker">
              <Clock className="w-3 h-3 text-[#B47B84] animate-pulse" />
              <span>UTC {timeStr || "15:25:48"}</span>
            </div>

            {/* Custom Interactive Magnet CTA */}
            <a
              href={`mailto:${PORTFOLIO_OWNER.email}`}
              className="flex items-center gap-1 bg-[#B47B84] hover:bg-[#C98B95] text-white text-xs font-display uppercase tracking-wider font-bold px-5 py-2.5 rounded-full shadow-lg hover:shadow-[#B47B84]/30 transition-all duration-300"
              id="cta-navbar-contact"
            >
              START PROJECT
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex items-center gap-4 lg:hidden">
            {timeStr && (
              <div className="flex items-center gap-1.5 bg-white/40 px-2 py-1 rounded text-[10px] font-mono text-[#B47B84]">
                <Clock className="w-2.5 h-2.5 text-[#B47B84]" />
                <span>{timeStr}</span>
              </div>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A1A1A] hover:text-[#B47B84] bg-white/40 rounded-full border border-[#B47B84]/10"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#F5EDE4]/98 backdrop-blur-lg z-45 flex flex-col pt-24 px-6 pb-12 lg:hidden"
            id="mobile-drawer-root"
          >
            <div className="flex flex-col gap-6 text-center my-auto">
              <span className="text-[#6B6B6B] uppercase font-mono text-[10px] tracking-[0.2em]">Navigation</span>
              {navItems.map((item, idx) => (
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.name}
                  onClick={() => handleScrollTo(item.href)}
                  className="text-2xl font-display font-medium text-[#1A1A1A] hover:text-[#B47B84] transition-colors tracking-wide"
                  id={`mobile-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </motion.button>
              ))}
              
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                href={`mailto:${PORTFOLIO_OWNER.email}`}
                className="mt-8 bg-[#B47B84] hover:bg-[#C98B95] text-white text-sm font-display tracking-widest uppercase font-bold py-4 rounded-full transition-all duration-300"
                id="mobile-nav-cta"
              >
                Email Me
              </motion.a>
            </div>

            <div className="mt-auto text-center text-[#6B6B6B] text-xs font-mono">
              Designed by {PORTFOLIO_OWNER.name} • 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
