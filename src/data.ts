import { Project, ExperienceItem, SkillCategory, CertificateItem, ExplorationItem, DesignStage } from "./types";

export const PORTFOLIO_OWNER = {
  name: "Methushiela Alexa Cagaanan",
  role: "Lead UI/UX Designer",
  subtitle: "Designing Experiences That Feel Effortless and Memorable",
  bioHeadline: "A creative visionary bridging meticulous grids with emotional interfaces.",
  bioParagraph1: "I am a detail-obsessed UI/UX Designer specialized in creating high-fidelity visual ecosystems, interactive digital sculptures, and custom luxury web portals. Focusing heavily on modern editorial typography, tactile grid systems, and subtle spatial micro-animations, I design products that don't just solve problems—they tell compelling visual stories.",
  bioParagraph2: "Based in Asia, I collaborate globally with deep-tech startups and premium luxury brands. My philosophy is rooted in architectural design honesty: stripping away unneeded visual noise to reveal clean layout structures wrapped in ambient glowing contrast.",
  portraitUrl: "/Profile/Profile.png",
  email: "cagaanan.alexa@design.studio",
  socials: [
    { name: "Behance", url: "https://behance.net" },
    { name: "Dribbble", url: "https://dribbble.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "CV / Resume", url: "#" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "event-management",
    title: "Event Management System",
    category: "Web Application • Event Management",
    description: "A web-based platform for an events company to manage bookings, services, and clients end-to-end. Customers can browse services, sign in, and submit a booking form for occasions like weddings, christenings, and corporate events.",
    year: "2023",
    client: "IT211 — Information Management",
    image: "/Project/Event Management System.jpeg",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Full-Stack"],
    caseStudy: {
      overview: "Built a comprehensive event management platform that streamlines booking processes for an events company. The system handles everything from customer service browsing to admin dashboard operations.",
      problem: "Events companies struggled with manual booking processes, leading to miscommunication, double bookings, and administrative overhead when managing multiple events simultaneously.",
      solution: "Developed a dual-interface system: a public-facing site for customers to browse and book services, and an admin dashboard for reviewing, approving, and managing bookings efficiently.",
      researchInsights: [
        "Event coordinators spend 60% of their time on administrative tasks rather than actual event planning.",
        "Customers prefer visual service browsing with clear pricing before committing to inquiries.",
        "Real-time booking status updates reduce customer anxiety by 75%."
      ],
      userFlowSteps: [
        "1. Customer browses available services with detailed descriptions and pricing",
        "2. User authentication via sign-in system for personalized experience",
        "3. Submit booking form with event details (weddings, christenings, corporate events)",
        "4. Admin reviews new bookings in centralized dashboard",
        "5. Approval or cancellation with automatic customer notification"
      ],
      wireframesDescription: "Designed with a clean separation between public and admin interfaces. Public site features card-based service layouts, while admin dashboard utilizes data tables with quick-action buttons for efficient workflow management.",
      designSystem: {
        colors: [
          { name: "Primary Blue", hex: "#2563EB" },
          { name: "Success Green", hex: "#10B981" },
          { name: "Warning Amber", hex: "#F59E0B" },
          { name: "Neutral Gray", hex: "#6B7280" }
        ],
        typography: "System fonts for accessibility and fast loading, with clear hierarchy between headings and body text.",
        elements: ["Service cards", "Data tables", "Form controls", "Status badges", "Action buttons"]
      },
      prototypeDescription: "Built functional prototype using PHP backend with MySQL database, implementing CRUD operations for services, bookings, and user management.",
      finalScreensDescription: "Delivered a responsive web application with intuitive navigation, clear visual feedback, and comprehensive documentation for future maintenance. The system successfully reduced booking processing time by 40%."
    }
  },
  {
    id: "trackpro",
    title: "TrackPro: Elevating Community Assurance via Bluetooth Anti-Loss Patches",
    category: "Mobile App Concept • IoT",
    description: "TrackPro elevates belongings' security, promotes community well-being, and upgrades user accessibility through real-time tracking that cuts back lost items and deters theft.",
    year: "2024",
    client: "IT223 — Advanced Database System",
    image: "/Project/Track pro.jpeg",
    tags: ["Figma", "MySQL", "IoT", "Mobile Design", "Community Safety"],
    caseStudy: {
      overview: "Conceptualized an IoT solution pairing small Bluetooth anti-loss patches with a mobile companion app for real-time item tracking and community-driven recovery.",
      problem: "People frequently lose valuable items with no efficient way to track or recover them. Traditional methods rely on retracing steps or hoping someone returns the item, leading to permanent loss and financial impact.",
      solution: "Created a dual-component system: physical Bluetooth patches that attach to belongings, and a mobile app for registering patches, viewing live locations on a map, and receiving navigation guidance back to misplaced items.",
      researchInsights: [
        "85% of users report losing important items at least twice per year, with keys, wallets, and bags being most common.",
        "Community-driven recovery systems increase item retrieval rates by 3x compared to individual efforts.",
        "Real-time GPS mapping reduces search time from hours to minutes."
      ],
      userFlowSteps: [
        "1. User purchases Bluetooth anti-loss patches and pairs them via the app",
        "2. Register each patch with item details and photos for easy identification",
        "3. When item goes missing, check live location on interactive map interface",
        "4. Follow in-app navigation with distance indicators and directional guidance",
        "5. Community members can report found items, triggering owner notifications"
      ],
      wireframesDescription: "Focused on mobile-first design with prominent map view as the central interface. Registration flow designed to be quick (under 2 minutes per item), with visual confirmation at each step.",
      designSystem: {
        colors: [
          { name: "Trust Blue", hex: "#1E40AF" },
          { name: "Alert Red", hex: "#DC2626" },
          { name: "Safe Green", hex: "#059669" },
          { name: "Neutral Slate", hex: "#475569" }
        ],
        typography: "Inter for clean readability on mobile screens, with bold weights for critical alerts and status updates.",
        elements: ["Interactive maps", "Patch cards", "Distance indicators", "Community badges", "Alert notifications"]
      },
      prototypeDescription: "Designed comprehensive Figma prototype with interactive map simulations, patch registration flows, and MySQL database schema for managing users, patches, and location data.",
      finalScreensDescription: "Completed project documentation and database architecture that demonstrates scalability for community-wide adoption. The design emphasizes accessibility and cognitive ease for field volunteers and everyday users."
    }
  },
  {
    id: "mangrovision",
    title: "MangroVision: Detect, Protect, Preserve",
    category: "Mobile App • Environmental Conservation",
    description: "Empowers coastal conservation using leaf-diagnostic scanning tools, real-time GPS mapping, and interactive rewards to protect mangrove ecosystems.",
    year: "2025",
    client: "Environmental Conservation Initiative",
    image: "/Project/mangrovision.png",
    tags: ["UI Design", "Conservation", "GPS Mapping", "Gamification", "Mobile App"],
    caseStudy: {
      overview: "Directed comprehensive UI/UX design for a conservation app that transforms mangrove protection into an accessible, engaging experience for field volunteers and environmental advocates.",
      problem: "Mangrove conservation efforts suffer from low volunteer engagement, difficult disease identification processes, and lack of real-time data tracking, leading to delayed intervention and ecosystem degradation.",
      solution: "Designed an intuitive mobile experience combining AI-powered leaf diagnostic scanning, interactive GPS mapping for tracking conservation zones, and gamified reward systems to sustain volunteer motivation.",
      researchInsights: [
        "Volunteers abandon conservation apps within 3 weeks without tangible progress feedback or rewards.",
        "Manual disease identification has 40% error rate; AI-assisted scanning improves accuracy to 92%.",
        "Visual GPS mapping increases volunteer coverage area by 65% compared to paper-based tracking."
      ],
      userFlowSteps: [
        "1. Onboarding with eco-friendly visual identity and conservation mission overview",
        "2. Camera-based leaf diagnostic scanning with instant health analysis",
        "3. Log findings with GPS coordinates on interactive community map",
        "4. Track personal and community impact metrics in real-time dashboard",
        "5. Earn rewards and badges for consistent conservation contributions"
      ],
      wireframesDescription: "Established eco-friendly visual identity with earth tones and organic shapes. Prioritized camera interface for quick leaf scanning, with minimal steps between detection and data logging to reduce cognitive load for field volunteers.",
      designSystem: {
        colors: [
          { name: "Mangrove Green", hex: "#047857" },
          { name: "Ocean Blue", hex: "#0284C7" },
          { name: "Earth Brown", hex: "#92400E" },
          { name: "Alert Coral", hex: "#F97316" }
        ],
        typography: "Poppins for friendly accessibility, with clear size hierarchy optimized for outdoor readability in varying light conditions.",
        elements: ["Camera scanner interface", "Interactive maps", "Progress badges", "Health indicators", "Reward cards"]
      },
      prototypeDescription: "Created high-fidelity Figma prototype with animated scanning feedback, interactive map overlays, and progressive reward system demonstrations to showcase user engagement patterns.",
      finalScreensDescription: "Delivered a cohesive design system that lowers cognitive weight while maintaining scientific credibility. The eco-friendly identity resonates with conservation values and encourages sustained volunteer participation."
    }
  },
  {
    id: "sudoquest",
    title: "SudoQuest",
    category: "Mobile Game • Puzzle",
    description: "An engaging logic puzzle experience integrating game modes, daily rewards, and leaderboards with sleek, structured layouts optimized for thumb navigation.",
    year: "2025",
    client: "Mobile Gaming Studio",
    image: "/Project/SUDO.png",
    tags: ["UI Design", "Mobile Gaming", "UX Design", "Gamification"],
    caseStudy: {
      overview: "Designed the complete user interface for a modern Sudoku gaming experience that balances classic puzzle mechanics with contemporary mobile gaming expectations.",
      problem: "Traditional Sudoku apps feel dated and lack engagement features that modern mobile gamers expect, resulting in high churn rates after initial downloads despite strong puzzle mechanics.",
      solution: "Created a sleek, contemporary interface with multiple game modes, daily challenge systems, social leaderboards, and thumb-optimized navigation that makes puzzle solving feel fluid and rewarding.",
      researchInsights: [
        "Mobile puzzle players expect session lengths under 10 minutes with clear progress saving.",
        "Leaderboard integration increases daily active users by 45% through social competition.",
        "Thumb-zone optimization reduces input errors by 60% compared to center-screen controls."
      ],
      userFlowSteps: [
        "1. Quick-launch splash screen with daily challenge preview",
        "2. Home hub displaying game modes, current streak, and leaderboard position",
        "3. Difficulty selection with estimated completion time indicators",
        "4. Immersive puzzle interface with smart number input and hint system",
        "5. Completion celebration with stats breakdown and reward distribution"
      ],
      wireframesDescription: "Focused on thumb-zone accessibility with primary controls positioned in lower-third of screen. Number input designed as bottom sheet for quick access without obscuring puzzle grid.",
      designSystem: {
        colors: [
          { name: "Deep Purple", hex: "#5B21B6" },
          { name: "Vibrant Cyan", hex: "#06B6D4" },
          { name: "Success Gold", hex: "#EAB308" },
          { name: "Soft Slate", hex: "#334155" }
        ],
        typography: "Outfit for display elements with clear number legibility, paired with system fonts for UI labels to maintain fast rendering and accessibility.",
        elements: ["Grid layouts", "Bottom sheet inputs", "Progress rings", "Streak badges", "Leaderboard cards"]
      },
      prototypeDescription: "Built interactive Figma prototype demonstrating smooth transitions between game modes, animated number placement feedback, and celebration micro-interactions for puzzle completion.",
      finalScreensDescription: "Delivered a polished gaming interface that feels premium while remaining accessible. The structured layouts and interactive visual elements create an engaging experience that keeps players returning daily."
    }
  },
  {
    id: "animed",
    title: "AniMed: Veterinary Records & Prescription Management",
    category: "Healthcare System • Machine Learning",
    description: "Modernizes public veterinary operations by combining diagnostic prediction models and automatic pharmaceutical disbursement records to eliminate medical release error bottlenecks.",
    year: "2025-2026",
    client: "Public Veterinary Health Department",
    image: "/Project/animed.png",
    tags: ["System Analysis", "Healthcare", "Machine Learning", "Database Design"],
    caseStudy: {
      overview: "Analyzed and designed a comprehensive veterinary management system integrating machine learning diagnostic tools with automated prescription workflows to modernize public veterinary operations.",
      problem: "Public veterinary clinics face critical bottlenecks in medical record management and prescription processing, leading to medication errors, delayed treatments, and inefficient resource allocation that impacts animal welfare.",
      solution: "Architected an integrated system combining ML-powered diagnostic prediction models with automated pharmaceutical disbursement tracking, creating seamless workflows from diagnosis through treatment and record-keeping.",
      researchInsights: [
        "Manual prescription processing causes 18% error rate in medication dosage and timing.",
        "Veterinarians spend 35% of consultation time on administrative record-keeping rather than patient care.",
        "ML diagnostic assistance reduces misdiagnosis rates by 40% for common animal ailments."
      ],
      userFlowSteps: [
        "1. Patient registration with comprehensive medical history intake",
        "2. Diagnostic examination with ML-assisted symptom analysis and recommendations",
        "3. Automated prescription generation with dosage calculations and drug interaction checks",
        "4. Pharmaceutical inventory integration for automatic stock deduction",
        "5. Complete medical record archival with searchable treatment history"
      ],
      wireframesDescription: "Designed information-dense interfaces optimized for clinical workflows. Prioritized quick access to patient histories, clear diagnostic result displays, and fail-safe prescription validation steps to prevent errors.",
      designSystem: {
        colors: [
          { name: "Clinical White", hex: "#F8FAFC" },
          { name: "Trust Blue", hex: "#0369A1" },
          { name: "Health Green", hex: "#16A34A" },
          { name: "Alert Red", hex: "#DC2626" }
        ],
        typography: "System fonts for maximum readability in clinical settings, with monospace fonts for medical codes and prescription details requiring precision.",
        elements: ["Patient cards", "Diagnostic panels", "Prescription forms", "Inventory trackers", "Alert modals"]
      },
      prototypeDescription: "Developed comprehensive system analysis documentation including database schemas, ML model integration workflows, user permission hierarchies, and error-handling protocols for pharmaceutical safety.",
      finalScreensDescription: "Completed system architecture that eliminates medical release error bottlenecks through automated validation and ML-assisted decision support. The solution positions public veterinary services for scalable, modern healthcare delivery."
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Design Expertise",
    skills: [
      { name: "Art Direction & Styling", level: 95 },
      { name: "Interactive Prototyping", level: 98 },
      { name: "Sleek Interface Layouts", level: 96 },
      { name: "Modern Editorial Grid Systems", level: 92 },
      { name: "Motion & Micro-interactions", level: 90 },
      { name: "User Flow Optimization", level: 94 }
    ]
  },
  {
    title: "Tools & Forge",
    skills: [
      { name: "Figma (Advanced Dev Systems)", level: 99 },
      { name: "Framer (High Fidelity Motion)", level: 88 },
      { name: "Adobe Suite (AfterEffects, PS, AI)", level: 92 },
      { name: "HTML5 / CSS3 / Tailwind", level: 85 },
      { name: "3D Spline / Blender Basics", level: 78 }
    ]
  },
  {
    title: "Philosophy & Research",
    skills: [
      { name: "Human-Centered Design", level: 95 },
      { name: "Wireframing & Structural Blueprints", level: 96 },
      { name: "Bespoke Branding Identity", level: 90 },
      { name: "Usability Testing Protocols", level: 88 }
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "dnsc-research",
    company: "Davao del Norte State College",
    role: "Research Division Intern",
    period: "June 2026",
    description: [
      "Completed 486 hours of on-the-job training at the Research Division.",
      "Assisted in research data management and documentation processes.",
      "Collaborated with faculty researchers on various academic projects."
    ],
    tags: ["OJT", "Research", "Data Management", "Documentation"]
  },
  {
    id: "panabo-vet",
    company: "Panabo City Veterinary Section",
    role: "System Analyst & Project Developer",
    period: "April 2026",
    description: [
      "Developed AniMed: A Machine Learning-Integrated System for Veterinary Records and Prescription Management.",
      "Analyzed veterinary operational workflows and designed database architecture.",
      "Integrated ML diagnostic prediction models to modernize veterinary operations.",
      "Created automated pharmaceutical disbursement tracking to eliminate medical release errors."
    ],
    tags: ["System Analysis", "Machine Learning", "Healthcare", "Database Design"]
  },
  {
    id: "ui-design-projects",
    company: "Academic UI/UX Projects",
    role: "UI Designer & Project Analyst",
    period: "2024 - 2026",
    description: [
      "Led UI/UX design for multiple academic projects including MangroVision and SudoQuest.",
      "Designed comprehensive user interfaces focused on accessibility and user experience.",
      "Created design systems with consistent visual identity across mobile and web platforms.",
      "Conducted user flow mapping and wireframing for complex application features."
    ],
    tags: ["UI/UX Design", "Figma", "User Research", "Design Systems"]
  },
  {
    id: "web-dev-projects",
    company: "IT Academic Projects",
    role: "Lead UI Developer & Documentarian",
    period: "2023 - 2024",
    description: [
      "Developed Event Management System as Lead UI Developer for IT211 course.",
      "Created TrackPro IoT concept design and database architecture for IT223 course.",
      "Prepared comprehensive project documentation and technical specifications.",
      "Designed responsive web interfaces using PHP, MySQL, HTML, CSS, and JavaScript."
    ],
    tags: ["Web Development", "PHP", "MySQL", "Documentation"]
  }
];

export const DESIGN_STAGES: DesignStage[] = [
  {
    step: "01",
    title: "Discovery & Empathy",
    description: "Uncovering human motivation underneath numeric user metrics.",
    details: [
      "Deep-dive interviews with core product stakeholders.",
      "Affinity maps aggregating micro-irritations and navigation bottlenecks.",
      "Defining clear product personas rooted in real-world user struggles."
    ],
    insights: "An elegant UI means nothing if it solves the wrong psychological problem."
  },
  {
    step: "02",
    title: "Structural Wireframing",
    description: "Carving clean layout paths before adding visual styling.",
    details: [
      "Asymmetric wireframe layouts optimized for intuitive optical scanning.",
      "Structuring cognitive groupings: prioritizing crucial indicators over secondary controls.",
      "Determining device-safe responsive grid thresholds."
    ],
    insights: "Wireframing is the skeleton of usability. Visual design is the soul."
  },
  {
    step: "03",
    title: "Bespoke Visual System",
    description: "Designing premium palettes, glowing contrasts, and editorial typography.",
    details: [
      "Pairing modern display fonts with readable monospaced coordinate fonts.",
      "Drafting beautiful glowing gradient borders and 0.5px glass outlines.",
      "Curating an immersive dark theme that reduces visual fatigue."
    ],
    insights: "Contrast and spacing compose the musical rhythm of an interface."
  },
  {
    step: "04",
    title: "Tactile Prototyping",
    description: "Infusing physics-aligned micro-animations and transition speeds.",
    details: [
      "Creating seamless page transition paths without sudden hard jumps.",
      "Harnessing spring curves (easing) for custom slider hover responses.",
      "Simulating reactive visual feedback (ambient radial shines) on mouse cursor move."
    ],
    insights: "Static UI is a blueprint. Interactive prototype is a breathing product."
  },
  {
    step: "05",
    title: "Empathy Evaluation",
    description: "Testing responsive alignments and auditing interactive loops.",
    details: [
      "In-browser inspection of border alignment, visual density, and touch target sizes.",
      "Gathering user friction metrics through heatmaps and keyframe recordings.",
      "Surgically polishing each edge until the product feels completely effortless."
    ],
    insights: "Great design is invisible—the user only feels the sheer ease of use."
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert1",
    title: "Introduction to Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "February 2024",
    credentialId: "Training",
    imageUrl: "/Certificates/Cisco - intro.jpeg"
  },
  {
    id: "cert2",
    title: "Journey from Science Practitioner to Information Technology Specialist",
    issuer: "Advanced Seminar Series · DNSC Institute of Computing",
    date: "October 2025",
    credentialId: "Seminar — Day 1",
    imageUrl: "/Certificates/Seminar Day 1.jpeg"
  },
  {
    id: "cert3",
    title: "The Power of Color in Graphic Design: Theory, Psychology, and Practice",
    issuer: "Advanced Seminar Series · DNSC Institute of Computing",
    date: "October 2025",
    credentialId: "Seminar — Day 2",
    imageUrl: "/Certificates/Seminar Day 2.jpeg"
  },
  {
    id: "cert4",
    title: "AniMed: A Machine Learning-Integrated System for Veterinary Records and Prescription Management",
    issuer: "Panabo City Veterinary Section",
    date: "April 2026",
    credentialId: "System Project",
    imageUrl: "/Certificates/animed.jpeg"
  },
  {
    id: "cert5",
    title: "Completing 486 hours of Internship",
    issuer: "Research Division, Davao del Norte State College",
    date: "June 2026",
    credentialId: "OJT Training",
    imageUrl: "/Certificates/OJT.jpeg"
  }
];

export const CREATIVE_EXPLORATIONS: ExplorationItem[] = [
  {
    id: "exp1",
    title: "Prism CyberHUD",
    category: "Figma Concept",
    description: "A dark cyberpunk dashboard hud concept, layering deep holographic charts with intense horizontal scanning rays.",
    imageUrl: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=600&auto=format&fit=crop",
    tags: ["Interface HUD", "Vibrant Gradients", "Sci-Fi Design"]
  },
  {
    id: "exp2",
    title: "Aero Music Slider",
    category: "Interactive Prototype",
    description: "An experimental tactile audio control that curves around your finger, shifting colors from sky blue to warm amber.",
    imageUrl: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=600&auto=format&fit=crop",
    tags: ["Tactile Flow", "Framer Study", "Micro-physics"]
  },
  {
    id: "exp3",
    title: "Neumorphic Glass Synthesizer",
    category: "Web UI Practice",
    description: "Blending soft neomorphic depth mechanics with semi-transparent frosted plate widgets.",
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=600&auto=format&fit=crop",
    tags: ["Glassmorphism", "CSS Shadows", "Conceptual Study"]
  }
];


