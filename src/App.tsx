import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedProjectsSection from "./components/FeaturedProjectsSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import CertificatesSection from "./components/CertificatesSection";
import RecognitionsSection from "./components/RecognitionsSection";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Custom high-performance intersection tracker scroll handlers
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "projects",
        "about",
        "experience",
        "certificates",
        "recognitions"
      ];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F5EDE4] text-[#1A1A1A] select-none overflow-x-hidden selection:bg-[#B47B84] selection:text-white" id="portfolio-root">
      
      {/* Sophisticated Light Theme Ambient Elements */}
      <div className="absolute inset-0 noise pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] accent-glow-orange blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-20 right-0 w-[600px] h-[600px] accent-glow-blue blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* Top Elite Navbar panel */}
      <Navbar activeSection={activeSection} />

      {/* Main structured portfolio modules */}
      <main id="main-content-flow" className="relative">
        
        {/* Core Hero Landing Module */}
        <HeroSection />

        {/* Featured Projects with storytelling case study portals */}
        <FeaturedProjectsSection />

        {/* Narrative Biography about Alexa Cagaanan */}
        <AboutSection />

        {/* Chronological professional experiences */}
        <ExperienceSection />

        {/* Verified credentials & certificate modal popups */}
        <CertificatesSection />

        {/* Recognitions and Achievements */}
        <RecognitionsSection />

      </main>

      {/* Core bottom layout credits signature */}
      <Footer />

    </div>
  );
}
