import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Trophy, RotateCcw, AlertTriangle, ShieldCheck, Check, Info, HelpCircle, Eye, Flame, Brain, Fingerprint, RefreshCw } from "lucide-react";

interface UXLevel {
  id: number;
  title: string;
  category: string;
  question: string;
  principle: string;
  law: string;
  diagnostics: string;
  options: {
    id: "A" | "B";
    description: string;
    isCorrect: boolean;
    previewTitle: string;
    snippet: string;
    // Render classes/behaviors
    demoClasses: string;
    // Specific properties to pass or render inside option demo
    interactiveType: "contrast" | "target" | "label" | "feedback";
  }[];
}

const UX_LEVELS: UXLevel[] = [
  {
    id: 1,
    title: "WCAG Typography Ratio",
    category: "Contrast Accessibility",
    question: "Which of the text pairings below conforms to standard color accessibility thresholds for dark mode visibility?",
    principle: "Contrast Accessibility (WCAG 2.1)",
    law: "Adequate color contrast guarantees readability for users with mild visual impairment, age-related opacity, or high-luminosity ambient conditions.",
    diagnostics: "Option B provides a high-contrast 7.8:1 visibility index using crisp neon pigments, satisfying WCAG AAA standards. Option A falls below 2.1:1, rendering it virtually invisible.",
    options: [
      {
        id: "A",
        description: "Low contrast muted gray label on charcoal base layout.",
        isCorrect: false,
        previewTitle: "Sub-optimal (Ratio 1.9:1)",
        snippet: "color: #4A4D53; background-color: #111111;",
        demoClasses: "text-[#3D4045] bg-[#0E0F11]",
        interactiveType: "contrast"
      },
      {
        id: "B",
        description: "Highly readable accent teal paired with pure white indicators on charcoal base layout.",
        isCorrect: true,
        previewTitle: "Optimal Compliance (Ratio 7.8:1)",
        snippet: "color: #00F5D4; background-color: #111111;",
        demoClasses: "text-accent-teal bg-[#0E0F11] font-bold shadow-[0_0_12px_rgba(0,245,212,0.15)]",
        interactiveType: "contrast"
      }
    ]
  },
  {
    id: 2,
    title: "Touch Target Size",
    category: "Fitts's Law Optimization",
    question: "Which interactive layout minimizes physical speed-accuracy error rates when a mobile visitor tries to click quickly?",
    principle: "Fitts's Law & Spatial Comfort",
    law: "The time to acquire a target is a function of the distance to and size of the target. Micro touch targets cause extreme click-miss rates and user frustration.",
    diagnostics: "Option B utilizes comfortable 44px touch grids with responsive scale pads satisfying Apple Human Interface Guidelines. Option A is restricted to 18px grids, making mobile selection difficult.",
    options: [
      {
        id: "A",
        description: "Tiny micro-trigger clickable link with zero padding boundary bounds.",
        isCorrect: false,
        previewTitle: "18px Target Zone",
        snippet: "padding: 1px 4px; border-radius: 2px;",
        demoClasses: "h-[18px] w-auto text-[9px] px-1 py-0 justify-center rounded bg-accent-purple/25 text-white/70",
        interactiveType: "target"
      },
      {
        id: "B",
        description: "Robust, padded interactive zone that satisfies touch safety guidelines.",
        isCorrect: true,
        previewTitle: "44px Target Zone",
        snippet: "padding: 10px 18px; border-radius: 99px; min-height: 44px;",
        demoClasses: "h-[44px] px-5 text-xs text-white bg-accent-purple hover:bg-accent-teal hover:text-charcoal-pure font-bold tracking-widest uppercase transition-all duration-300 rounded-full",
        interactiveType: "target"
      }
    ]
  },
  {
    id: 3,
    title: "Cognitive Load: Form Fields",
    category: "Information Parsing",
    question: "Which pattern maintains long-term structural context and minimizes short-term memory fatigue for complex sign-up processes?",
    principle: "Persistent Structural Labels vs Placeholders",
    law: "Placeholders that vanish as soon as a key is pressed throw away the user's focus reference. Top-aligned labels preserve contextual stability.",
    diagnostics: "Option B ensures that even when data is inserted, the structural category remains locked. Option A leaves the user guessing if they typed a username, email, or registry credentials.",
    options: [
      {
        id: "A",
        description: "Minimalist placeholder-only inputs that disappear as the user starts typing key values.",
        isCorrect: false,
        previewTitle: "Vanish Placeholders",
        snippet: "<input placeholder='Database Access Key' />",
        demoClasses: "rounded-xl border border-white/5 bg-white/5 px-4 py-3 placeholder:text-white/20 text-xs w-full text-left text-white/40",
        interactiveType: "label"
      },
      {
        id: "B",
        description: "Top-aligned persistent indicator tags paired with clean interactive inputs.",
        isCorrect: true,
        previewTitle: "Floating Legend Context",
        snippet: "<label>KEY ID</label><input value='...' />",
        demoClasses: "rounded-xl border border-white/10 hover:border-accent-teal bg-[#15171B] px-4 pt-4 pb-2 w-full text-left text-white/90 relative group transition-all duration-300",
        interactiveType: "label"
      }
    ]
  },
  {
    id: 4,
    title: "Asynchronous Interaction Flow",
    category: "Feedback & System Status",
    question: "Which notification behavior keeps are client's awareness synchronized during high-latency system actions?",
    principle: "Visual Response Feedback & Stepper Indicators",
    law: "Providing immediate feedback on action registers (steppers, loading check stages, micro animations) prevents double-clicks and reassuring users of transaction safety.",
    diagnostics: "Option B provides explicit stepper responses showing network latency phases. Option A leaves the client guessing if the task crashed or registered.",
    options: [
      {
        id: "A",
        description: "Static feedback state. Silent submission with absolutely zero feedback until finished.",
        isCorrect: false,
        previewTitle: "Static Zero Response",
        snippet: "handleSubmit() { /* silent */ }",
        demoClasses: "px-5 py-2.5 rounded-lg bg-white/10 text-white/50 border border-white/5 text-xs cursor-pointer select-none text-center",
        interactiveType: "feedback"
      },
      {
        id: "B",
        description: "Interactive stepper with progressive validation chimes and success marks.",
        isCorrect: true,
        previewTitle: "Progressive Validation HUD",
        snippet: "setState('authenticating') -> then('complete')",
        demoClasses: "px-5 py-2.5 rounded-lg bg-accent-teal/15 text-accent-teal border border-accent-teal/20 text-xs cursor-pointer select-none text-center font-bold tracking-wider",
        interactiveType: "feedback"
      }
    ]
  }
];

export default function ExplorationsSection() {
  const [gameState, setGameState] = useState<"intro" | "playing" | "completed">("intro");
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<"A" | "B" | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [wrongAnswersCount, setWrongAnswersCount] = useState(0);

  // Play micro synth sound using Web Audio API to satisfy Elite Premium expectations
  const playSynthSound = (type: "correct" | "incorrect" | "click" | "victory") => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      if (type === "correct") {
        // High 8-bit sweet chirp
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.16); // G5
        gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else if (type === "incorrect") {
        // Low analog buzzer
        osc.type = "triangle";
        osc.frequency.setValueAtTime(140.0, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(60.0, ctx.currentTime + 0.25);
        gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.28);
        osc.start();
        osc.stop(ctx.currentTime + 0.28);
      } else if (type === "click") {
        // Soft synthetic tap
        osc.type = "sine";
        osc.frequency.setValueAtTime(329.63, ctx.currentTime); // E4
        gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === "victory") {
        // Uplifting retro synth chord run
        const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
        notes.forEach((freq, idx) => {
          const individualOsc = ctx.createOscillator();
          const individualGain = ctx.createGain();
          individualOsc.connect(individualGain);
          individualGain.connect(ctx.destination);
          
          individualOsc.type = "sine";
          individualOsc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);
          individualGain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.12);
          individualGain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + idx * 0.12 + 0.5);
          
          individualOsc.start(ctx.currentTime + idx * 0.12);
          individualOsc.stop(ctx.currentTime + idx * 0.12 + 0.5);
        });
      }
    } catch (e) {
      // Audio fallback fail safe
    }
  };

  const currentLevel = UX_LEVELS[currentLevelIndex];

  // Specific simulation interactivity states for previews
  const [simIntInputVal, setSimIntInputVal] = useState("");
  const [simIntFeedbackStep, setSimIntFeedbackStep] = useState<"idle" | "firing" | "completed">("idle");
  const [simIntLogs, setSimIntLogs] = useState<string[]>([]);

  // Reset interactive mini inputs on levels changing
  useEffect(() => {
    setSimIntInputVal("");
    setSimIntFeedbackStep("idle");
    setSimIntLogs([]);
  }, [currentLevelIndex]);

  const handleStartGame = () => {
    playSynthSound("click");
    setGameState("playing");
    setCurrentLevelIndex(0);
    setScore(0);
    setWrongAnswersCount(0);
    setStreak(0);
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
  };

  const handleSelectOption = (optionId: "A" | "B") => {
    if (selectedAnswer !== null) return; // Prevent double selecting
    setSelectedAnswer(optionId);
    
    const chosenOption = currentLevel.options.find(o => o.id === optionId);
    const correct = chosenOption?.isCorrect || false;
    
    setIsAnswerCorrect(correct);
    if (correct) {
      playSynthSound("correct");
      setScore(prev => prev + 100 + (streak * 10)); // Progressive streak points
      setStreak(prev => prev + 1);
    } else {
      playSynthSound("incorrect");
      setWrongAnswersCount(prev => prev + 1);
      setStreak(0);
    }
  };

  const handleNextLevel = () => {
    playSynthSound("click");
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
    
    if (currentLevelIndex < UX_LEVELS.length - 1) {
      setCurrentLevelIndex(prev => prev + 1);
    } else {
      setGameState("completed");
      playSynthSound("victory");
    }
  };

  const handleSimulationFeedbackTrigger = () => {
    if (simIntFeedbackStep !== "idle") return;
    playSynthSound("click");
    setSimIntFeedbackStep("firing");
    setSimIntLogs(["[CONN]: INITIALIZING ASYNC ROUTE...", "[PING]: SYNCING SERVER PORT..."]);
    
    setTimeout(() => {
      setSimIntLogs(prev => [...prev, "[SECURE]: SHIELD CHECK SIGNATURE SIGNED ✓"]);
    }, 600);

    setTimeout(() => {
      setSimIntFeedbackStep("completed");
      setSimIntLogs(prev => [...prev, "[SUCCESS]: PROTOCOL COMPLETE"]);
      playSynthSound("correct");
    }, 1500);
  };

  const handleResetFeedbackSim = () => {
    playSynthSound("click");
    setSimIntFeedbackStep("idle");
    setSimIntLogs([]);
  };

  // Rank determination
  const accuracy = Math.round((score / ((currentLevelIndex + 1) * 100)) * 100) || 100;
  const getRankStats = () => {
    if (wrongAnswersCount === 0 && score > 0) return { title: "Elite Pixel Perfectionist", color: "text-accent-teal" };
    if (wrongAnswersCount <= 1) return { title: "Senior Design Auditor", color: "text-accent-purple" };
    return { title: "System Usability Coordinator", color: "text-white/60" };
  };

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-charcoal-pure overflow-hidden" id="explorations">
      {/* Dynamic atmospheric ambient glow spotlight behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-accent-purple/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Styled Section Header */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10" id="explorations-header">
        <div className="flex border-l-2 border-accent-teal pl-4 flex-col">
          <span className="font-mono text-xs text-accent-teal uppercase tracking-[0.25em] mb-2">UX Laboratory</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
            Design Match Mini-Game
          </h2>
          <p className="text-white/40 text-xs font-mono font-light mt-1">benchmark your visual cognitive instincts and earn certified rank parameters</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <AnimatePresence mode="wait">
          {gameState === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-[#15171B]/40 border border-white/5 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto shadow-2xl relative overflow-hidden"
              id="game-intro-box"
            >
              {/* Retro HUD line markings */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-purple via-accent-teal to-accent-purple" />
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-accent-teal" />
                </div>
              </div>

              <h3 className="font-display font-black text-2xl md:text-3xl text-white tracking-tight mb-3">
                Spot the Better UX Pattern
              </h3>
              <p className="text-white/60 text-sm font-sans font-light leading-relaxed mb-8 max-w-md mx-auto">
                Test your eye for web accessibility, interactive design laws (Fitts's, Hick's), and psychological micro-feedback configurations. Answer 4 technical rounds to unlock your score badge.
              </p>

              <button
                onClick={handleStartGame}
                className="inline-flex items-center gap-2 bg-accent-teal text-charcoal-pure hover:bg-white font-display uppercase tracking-widest text-xs font-black px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-accent-teal/20 cursor-pointer"
                id="btn-play-game"
              >
                Launch Challenge Arena
                <Sparkles className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {gameState === "playing" && (
            <motion.div
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              id="game-arena-grid"
            >
              {/* Left Side: Game Board (Questions & Options) */}
              <div className="lg:col-span-8 space-y-6">
                {/* Board Info Bar */}
                <div className="bg-[#15171B]/55 border border-white/5 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] px-2.5 py-1 bg-white/5 text-accent-teal border border-white/5 rounded-full uppercase tracking-wider font-bold">
                      Round {currentLevel.id} of {UX_LEVELS.length}
                    </span>
                    <span className="font-mono text-[10px] text-white/40 uppercase hidden sm:inline">
                      {currentLevel.category}
                    </span>
                  </div>
                  
                  {/* Visual Tracker Indicators */}
                  <div className="flex gap-1.5">
                    {UX_LEVELS.map((lvl, index) => (
                      <div
                        key={lvl.id}
                        className={`w-6 h-1 rounded-full transition-all duration-300 ${
                          index === currentLevelIndex
                            ? "bg-accent-teal w-10"
                            : index < currentLevelIndex
                              ? "bg-accent-purple"
                              : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Main Challenge Box */}
                <div className="bg-[#15171B]/35 border border-white/5 rounded-2xl p-6 md:p-8 relative">
                  <h3 className="font-mono text-[10px] text-accent-purple uppercase tracking-[0.2em] mb-2 font-bold flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 animate-pulse" />
                    Interactive Challenge
                  </h3>
                  <h4 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight mb-4">
                    {currentLevel.question}
                  </h4>

                  {/* Interactive Demo Cards (A/B testing view) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {currentLevel.options.map((option) => {
                      const isSelected = selectedAnswer === option.id;
                      const hasVoted = selectedAnswer !== null;
                      
                      return (
                        <div
                          key={option.id}
                          className={`border rounded-xl p-5 md:p-6 transition-all duration-300 flex flex-col justify-between h-fit relative group ${
                            isSelected
                              ? option.isCorrect
                                ? "bg-accent-teal/5 border-accent-teal/30"
                                : "bg-red-550/5 border-red-500/30"
                              : hasVoted
                                ? "opacity-45 border-white/5 bg-[#15171B]/10"
                                : "bg-[#15171B]/35 border-white/5 hover:border-white/15 cursor-pointer hover:bg-[#15171B]/60"
                          }`}
                          onClick={() => handleSelectOption(option.id)}
                          id={`option-${option.id}`}
                        >
                          {/* Live Render Area based on choice dynamics */}
                          <div className="mb-6">
                            <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
                              <span className="text-white/35 uppercase font-medium">OPTION {option.id}</span>
                              <span className="text-accent-purple font-semibold">{option.previewTitle}</span>
                            </div>

                            {/* Render interactive representation preview */}
                            <div className="aspect-[1.8] rounded-lg bg-[#0E0F11] border border-white/5 p-4 flex flex-col items-center justify-center relative overscroll-contain select-none">
                              {option.interactiveType === "contrast" && (
                                <div className={`px-4 py-2.5 rounded-lg text-center font-mono ${option.demoClasses}`}>
                                  <span className="text-xs transition-colors duration-200">
                                    SYS_KEY_SECURE
                                  </span>
                                </div>
                              )}

                              {option.interactiveType === "target" && (
                                <div className="flex flex-col items-center gap-2">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      playSynthSound("click");
                                    }}
                                    className={`flex items-center gap-1.5 focus:outline-none cursor-pointer ${option.demoClasses}`}
                                  >
                                    <Fingerprint className="w-3.5 h-3.5" />
                                    <span>LAUNCH ENGINE</span>
                                  </button>
                                  <span className="text-[8px] font-mono text-white/30">(Click preview to test fit)</span>
                                </div>
                              )}

                              {option.interactiveType === "label" && (
                                <div className="w-full max-w-[180px] space-y-2">
                                  {option.id === "A" ? (
                                    <div className={option.demoClasses}>
                                      <span>Database Key...</span>
                                    </div>
                                  ) : (
                                    <div className={option.demoClasses}>
                                      <span className="absolute top-1 left-4 text-[7.5px] font-mono text-accent-purple uppercase tracking-widest font-black">
                                        DB_ACCESS_KEY
                                      </span>
                                      <span className="text-xs">••••-••••-••••</span>
                                    </div>
                                  )}
                                  <span className="text-[8px] font-mono text-white/20 block text-center">(Form field memory bounds)</span>
                                </div>
                              )}

                              {option.interactiveType === "feedback" && (
                                <div className="w-full max-w-[200px] flex flex-col gap-2.5 justify-center items-center">
                                  {option.id === "A" ? (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        playSynthSound("click");
                                      }}
                                      className={option.demoClasses}
                                    >
                                      Submit Transaction
                                    </button>
                                  ) : (
                                    <div className="w-full flex flex-col items-center gap-2">
                                      {simIntFeedbackStep === "idle" && (
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleSimulationFeedbackTrigger();
                                          }}
                                          className={`w-full ${option.demoClasses}`}
                                        >
                                          Submit Transaction
                                        </button>
                                      )}
                                      {simIntFeedbackStep !== "idle" && (
                                        <div className="w-full bg-[#15171B] border border-white/5 rounded p-2 text-left space-y-1 font-mono text-[8px] text-white/60">
                                          {simIntLogs.map((log, i) => (
                                            <div key={i}>{log}</div>
                                          ))}
                                          {simIntFeedbackStep === "completed" && (
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handleResetFeedbackSim();
                                              }}
                                              className="mt-1.5 px-2 py-0.5 bg-accent-teal text-charcoal-pure rounded uppercase font-bold text-[7px]"
                                            >
                                              Reset View
                                            </button>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                  <span className="text-[8px] font-mono text-white/30">(Click simulation trigger)</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Technical Code Snippet overlay */}
                          <div className="bg-[#050505] p-3 rounded-lg border border-white/5 font-mono text-[8.5px] text-[#8C9099] mb-4 overflow-x-auto whitespace-pre select-all scrollbar-none">
                            {option.snippet}
                          </div>

                          {/* Level description text */}
                          <p className="text-white/50 text-xs font-sans font-light leading-relaxed">
                            {option.description}
                          </p>

                          {/* Reveal Match Labels */}
                          {hasVoted && option.isCorrect && (
                            <div className="absolute top-4 right-4 bg-accent-teal/15 text-accent-teal border border-accent-teal/20 px-3 py-1 rounded-full font-mono text-[8px] font-bold uppercase tracking-wider flex items-center gap-1">
                              <Check className="w-3 h-3 animate-bounce" /> Correct Pattern
                            </div>
                          )}
                          {hasVoted && isSelected && !option.isCorrect && (
                            <div className="absolute top-4 right-4 bg-red-500/15 text-red-400 border border-red-500/20 px-3 py-1 rounded-full font-mono text-[8px] font-bold uppercase tracking-wider flex items-center gap-1">
                              <AlertTriangle className="w-3 h-3" /> Mismatch Issue
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Context Analyzer Panel (Revealed upon selecting) */}
                <AnimatePresence>
                  {selectedAnswer !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="bg-[#15171B]/55 border border-white/10 rounded-2xl p-6 md:p-8"
                      id="context-breakdown-panel"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                        <div className="flex items-center gap-2">
                          <div className={`p-1.5 rounded-full ${isAnswerCorrect ? "bg-accent-teal/10 text-accent-teal" : "bg-red-500/10 text-red-400"}`}>
                            {isAnswerCorrect ? <ShieldCheck className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                          </div>
                          <div>
                            <span className="font-mono text-[9px] text-[#8C9099] uppercase">Diagnostics Breakdown</span>
                            <h4 className="font-display font-bold text-white text-base leading-tight">
                              {isAnswerCorrect ? "Correct Principle Executed ✓" : "Heuristic Violation Detected X"}
                            </h4>
                          </div>
                        </div>

                        <button
                          onClick={handleNextLevel}
                          className="px-6 py-3 bg-white hover:bg-accent-teal text-charcoal-pure font-display font-black uppercase text-[10px] tracking-widest rounded-full cursor-pointer transition-all duration-300 shadow-md hover:shadow-accent-teal/15 flex items-center gap-1.5 self-end md:self-auto"
                        >
                          {currentLevelIndex === UX_LEVELS.length - 1 ? "Finish Vetting Code" : "Advance to Next Round"}
                          <Sparkles className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono text-white/50">
                        <div>
                          <p className="text-white/30 uppercase text-[9px] mb-1 font-bold">Design Guideline // {currentLevel.principle}</p>
                          <p className="text-white/80 leading-relaxed">{currentLevel.law}</p>
                        </div>
                        <div className="border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6">
                          <p className="text-white/30 uppercase text-[9px] mb-1 font-bold">Audit Evaluation Codecs</p>
                          <p className="text-[#8C9099] leading-relaxed">{currentLevel.diagnostics}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Side: Scoreboard & Live Console */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-[#15171B]/55 border border-white/5 rounded-2xl p-6 shadow-xl relative">
                  {/* Neon border glow accent */}
                  <div className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-gradient-to-r from-accent-purple via-transparent to-accent-teal" />
                  
                  <h3 className="font-mono text-[9px] text-accent-teal uppercase tracking-[0.2em] mb-4 font-bold">
                    USER PROTOCOLS // SCOREBOARD
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-white/5 pb-3">
                      <span className="font-mono text-[10px] text-white/40">TOTAL XP POINTS</span>
                      <span className="font-display font-black text-2xl text-white">{score} XP</span>
                    </div>

                    <div className="flex justify-between items-end border-b border-white/5 pb-3">
                      <span className="font-mono text-[10px] text-white/40">ACCURACY RATING</span>
                      <span className="font-mono text-sm text-accent-teal font-black">{accuracy}%</span>
                    </div>

                    <div className="flex justify-between items-end border-b border-white/5 pb-3">
                      <span className="font-mono text-[10px] text-white/40">STREAK MULTIPLIER</span>
                      <span className="font-mono text-sm text-accent-purple font-black">x{streak} combo</span>
                    </div>

                    <div className="flex justify-between items-end">
                      <span className="font-mono text-[10px] text-white/40">ERRORS FOUND</span>
                      <span className="font-mono text-sm text-white/60">{wrongAnswersCount}</span>
                    </div>
                  </div>
                </div>

                {/* Technical Live Logs Terminal */}
                <div className="bg-[#050505] border border-white/5 rounded-2xl p-5 shadow-2xl font-mono text-[9.5px]">
                  <div className="flex items-center justify-between mb-3 text-white/20 border-b border-white/5 pb-2">
                    <span>SYS_CONSOLE_FEED</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-ping" />
                  </div>
                  <div className="space-y-2 h-[120px] overflow-y-auto scrollbar-none text-[#7D818A]">
                    <div>&gt; Loading heuristic datasets... complete.</div>
                    <div>&gt; Booting testing virtual nodes... complete.</div>
                    <div>&gt; Score buffer configured dynamically at {score} XP.</div>
                    {streak > 0 && <div className="text-accent-teal">&gt; MULTIPLIER MULTIPLE COMBO SECURED: {streak}x</div>}
                    {selectedAnswer !== null && (
                      <div className={isAnswerCorrect ? "text-accent-teal" : "text-red-400"}>
                        &gt; Vetted response: Option {selectedAnswer} parsed. Verdict: {isAnswerCorrect ? "STABLE" : "VIOLATION"}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {gameState === "completed" && (
            <motion.div
              key="completed"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-[#15171B]/40 border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto shadow-2xl relative overflow-hidden"
              id="game-completed-box"
            >
              {/* Retro HUD lines */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-teal via-accent-purple to-accent-teal" />
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-accent-purple" />
                </div>
              </div>

              <h3 className="font-display font-black text-2xl md:text-3xl text-white tracking-tight mb-2">
                Usability Evaluation Complete!
              </h3>
              <p className="font-mono text-xs text-accent-teal uppercase tracking-widest mb-6">
                ACCURACY RATE Secured at {accuracy}%
              </p>

              <div className="bg-[#050505]/65 border border-white/5 rounded-xl p-6 text-left space-y-4 max-w-md mx-auto mb-8 font-mono text-[11px]" id="completed-stats-card">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/40">AUDITED COG SCORE:</span>
                  <span className="text-white font-bold">{score} XP</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/40">AUDIT VERDICT RANK:</span>
                  <span className={`font-black ${getRankStats().color}`}>
                    {getRankStats().title.toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">MISMATCH REGISTERED:</span>
                  <span className="text-white/80">{wrongAnswersCount} heuristic glitches</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handleStartGame}
                  className="flex items-center gap-2 bg-white hover:bg-accent-teal text-charcoal-pure font-display uppercase tracking-widest text-[10px] font-bold px-6 py-3.5 rounded-full transition-all duration-300 shadow-md cursor-pointer"
                  id="btn-retry-game"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Retest Protocols
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
