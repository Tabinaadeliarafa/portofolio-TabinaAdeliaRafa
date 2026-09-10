import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  Palette, 
  Code2, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  LineChart, 
  Sparkles, 
  Cpu, 
  Check, 
  Layers, 
  Layout, 
  ShieldCheck, 
  Server
} from 'lucide-react';
import { APPROACH_PILLARS } from '../data/portfolioData';

export default function Approach() {
  const [currentPillar, setCurrentPillar] = useState(0);
  const [direction, setDirection] = useState(0);

  const pillars = [
    {
      ...APPROACH_PILLARS[0],
      number: '01',
      domain: 'DATA',
      icon: Database,
      accentColor: '#647E68',
      quote: 'Turning raw information into meaningful insights.',
    },
    {
      ...APPROACH_PILLARS[1],
      number: '02',
      domain: 'DESIGN',
      icon: Palette,
      accentColor: '#562B08',
      quote: 'Creating interfaces that are clear, intuitive, and meaningful.',
    },
    {
      ...APPROACH_PILLARS[2],
      number: '03',
      domain: 'DEVELOPMENT',
      icon: Code2,
      accentColor: '#182747',
      quote: 'Building reliable digital experiences behind the interface.',
    },
  ];

  const total = pillars.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrentPillar((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentPillar((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentPillar ? 1 : -1);
    setCurrentPillar(index);
  };

  const active = pillars[currentPillar];
  const IconComponent = active.icon;

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 70 : -70,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 32 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -70 : 70,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 32 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    }),
  };

  return (
    <section id="approach" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Primary Section Container */}
      <div className="bg-white/90 dark:bg-[#0f1a30]/80 rounded-[36px] sm:rounded-[44px] border border-[#D8D8D8] dark:border-[#D8D8D8]/15 p-6 sm:p-10 lg:p-14 shadow-[0_12px_40px_rgb(24,39,71,0.04)] relative overflow-hidden backdrop-blur-xl transition-colors duration-300">
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#647E68]/15 dark:bg-[#647E68]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#562B08]/10 dark:bg-[#562B08]/15 blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-[#D8D8D8]/80 dark:border-[#D8D8D8]/20 relative z-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-[#647E68] dark:bg-[#7b9980]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#647E68] dark:text-[#7b9980]">
                Methodology & Mindset
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#182747] dark:text-white tracking-tight">
              The Intersection of Three Disciplines
            </h2>
            <p className="text-sm sm:text-base text-[#182747]/75 dark:text-[#D8D8D8]/80 mt-2 max-w-xl">
              How data modeling, human-centered UI design, and backend engineering synthesize into cohesive digital systems.
            </p>
          </div>

          {/* Discipline Navigation Tabs & Slider Controls */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <div className="inline-flex p-1 rounded-full bg-[#F6F6F6] dark:bg-white/10 border border-[#D8D8D8] dark:border-[#D8D8D8]/20 shadow-2xs">
              {pillars.map((p, idx) => (
                <button
                  key={p.domain}
                  id={`approach-tab-${p.domain.toLowerCase()}`}
                  onClick={() => goToSlide(idx)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    currentPillar === idx
                      ? 'bg-[#182747] dark:bg-[#647E68] text-white shadow-xs'
                      : 'text-[#182747]/70 dark:text-[#D8D8D8]/70 hover:text-[#182747] dark:hover:text-white'
                  }`}
                >
                  {p.domain}
                </button>
              ))}
            </div>

            {/* Slider Arrow Controls */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                id="approach-prev-btn"
                onClick={prevSlide}
                aria-label="Previous approach pillar"
                className="w-10 h-10 rounded-full bg-white/80 dark:bg-white/10 border border-[#D8D8D8] dark:border-[#D8D8D8]/20 flex items-center justify-center text-[#182747] dark:text-[#D8D8D8] hover:bg-white dark:hover:bg-white/20 hover:border-[#647E68] transition-all shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                id="approach-next-btn"
                onClick={nextSlide}
                aria-label="Next approach pillar"
                className="w-10 h-10 rounded-full bg-white/80 dark:bg-white/10 border border-[#D8D8D8] dark:border-[#D8D8D8]/20 flex items-center justify-center text-[#182747] dark:text-[#D8D8D8] hover:bg-white dark:hover:bg-white/20 hover:border-[#647E68] transition-all shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Liquid Glass Bubble Approach Card Slider */}
        <div className="relative min-h-[440px] mb-8">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={active.domain}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -40) {
                  nextSlide();
                } else if (info.offset.x > 40) {
                  prevSlide();
                }
              }}
              className="relative w-full rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 overflow-hidden cursor-grab active:cursor-grabbing
                bg-white/70 dark:bg-[#0f1a30]/75 backdrop-blur-2xl
                border border-white/80 dark:border-white/10
                shadow-[0_20px_50px_rgba(24,39,71,0.07),inset_0_1.5px_2px_rgba(255,255,255,0.85)]
                dark:shadow-[0_25px_60px_rgba(0,0,0,0.5),inset_0_1.5px_2px_rgba(255,255,255,0.12)]
                ring-1 ring-black/5 dark:ring-white/5"
            >
              {/* Glass Specular Top Highlight Streak */}
              <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Pillar Details (Span 7) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#182747]/5 dark:bg-white/10 border border-[#182747]/10 dark:border-white/15 flex items-center justify-center font-serif italic font-extrabold text-xl text-[#182747] dark:text-white shadow-2xs">
                        {active.number}
                      </div>

                      <span
                        className={`px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                          active.domain === 'DATA'
                            ? 'bg-[#647E68]/15 text-[#647E68] dark:text-[#7b9980] border border-[#647E68]/30'
                            : active.domain === 'DESIGN'
                            ? 'bg-[#562B08]/15 text-[#562B08] dark:text-amber-300 border border-[#562B08]/30'
                            : 'bg-[#182747]/10 dark:bg-white/10 text-[#182747] dark:text-[#D8D8D8] border border-[#182747]/20 dark:border-white/20'
                        }`}
                      >
                        PILLAR {active.number} • {active.domain}
                      </span>
                    </div>

                    {/* Pillar Title */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#182747] dark:text-white tracking-tight leading-tight mb-3">
                      {active.title}
                    </h3>

                    {/* Tagline Quote */}
                    <p className="text-base sm:text-lg font-serif italic font-semibold text-[#647E68] dark:text-[#7b9980] mb-4">
                      “{active.quote}”
                    </p>

                    {/* Descriptive Narrative */}
                    <p className="text-sm sm:text-base text-[#182747]/85 dark:text-[#D8D8D8]/90 font-normal leading-relaxed mb-6">
                      {active.description}
                    </p>
                  </div>

                  {/* Skills Sample Pills */}
                  <div className="pt-6 border-t border-[#D8D8D8]/60 dark:border-[#D8D8D8]/15">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#182747]/60 dark:text-[#D8D8D8]/60 mb-2.5">
                      Core Competencies in {active.domain}:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {active.skillsSample.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-white/10 border border-[#D8D8D8] dark:border-white/10 text-[#182747] dark:text-[#D8D8D8] shadow-2xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Visual Interactive Micro-Mockup (Span 5) */}
                <div className="lg:col-span-5">
                  {active.domain === 'DATA' && (
                    <div className="p-5 sm:p-6 rounded-3xl bg-white/80 dark:bg-white/5 border border-[#D8D8D8]/80 dark:border-white/10 shadow-sm">
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#182747]/70 dark:text-[#D8D8D8]/70 uppercase mb-4">
                        <span className="flex items-center gap-2">
                          <LineChart className="w-4 h-4 text-[#647E68] dark:text-[#7b9980]" />
                          Dimensional Modeling
                        </span>
                        <span className="text-[#647E68] dark:text-[#7b9980] font-mono">ETL • OLAP</span>
                      </div>

                      {/* Star Schema Diagram */}
                      <div className="grid grid-cols-3 gap-2.5 text-center text-xs mb-4">
                        <div className="bg-[#F6F6F6] dark:bg-white/10 p-3 rounded-2xl border border-[#D8D8D8]/60 dark:border-white/10">
                          <p className="text-[10px] text-[#182747]/60 dark:text-[#D8D8D8]/60 font-semibold uppercase">Dim_User</p>
                          <p className="font-bold text-[#182747] dark:text-white mt-1">Demographics</p>
                        </div>
                        <div className="bg-[#647E68] text-white p-3 rounded-2xl shadow-sm flex flex-col justify-center font-bold">
                          <p className="text-white/80 text-[10px] uppercase">FACT TABLE</p>
                          <p className="text-xs mt-0.5">Transactions</p>
                        </div>
                        <div className="bg-[#F6F6F6] dark:bg-white/10 p-3 rounded-2xl border border-[#D8D8D8]/60 dark:border-white/10">
                          <p className="text-[10px] text-[#182747]/60 dark:text-[#D8D8D8]/60 font-semibold uppercase">Dim_Time</p>
                          <p className="font-bold text-[#182747] dark:text-white mt-1">Temporal</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#647E68]/10 dark:bg-[#647E68]/15 border border-[#647E68]/20 text-xs text-[#182747] dark:text-[#D8D8D8] flex items-center justify-between">
                        <span className="font-semibold">Kimball Methodology:</span>
                        <span className="font-bold text-[#647E68] dark:text-[#7b9980]">9-Step Process</span>
                      </div>
                    </div>
                  )}

                  {active.domain === 'DESIGN' && (
                    <div className="p-5 sm:p-6 rounded-3xl bg-white/80 dark:bg-white/5 border border-[#D8D8D8]/80 dark:border-white/10 shadow-sm">
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#182747]/70 dark:text-[#D8D8D8]/70 uppercase mb-4">
                        <span className="flex items-center gap-2">
                          <Layout className="w-4 h-4 text-[#562B08] dark:text-amber-300" />
                          Design System & UI Tokens
                        </span>
                        <span className="text-[#562B08] dark:text-amber-300 font-mono">Figma • WCAG</span>
                      </div>

                      {/* Design Tokens Matrix */}
                      <div className="space-y-2.5 mb-4 text-xs">
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F6F6F6] dark:bg-white/10 border border-[#D8D8D8]/60 dark:border-white/10">
                          <span className="text-[#182747]/70 dark:text-[#D8D8D8]/70 font-mono text-[11px]">Primary Color</span>
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#182747] border border-white/20" />
                            <span className="font-bold text-[#182747] dark:text-white font-mono text-[11px]">#182747</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F6F6F6] dark:bg-white/10 border border-[#D8D8D8]/60 dark:border-white/10">
                          <span className="text-[#182747]/70 dark:text-[#D8D8D8]/70 font-mono text-[11px]">Typography Pair</span>
                          <span className="font-bold text-[#182747] dark:text-white text-[11px]">Syne + Plus Jakarta</span>
                        </div>

                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F6F6F6] dark:bg-white/10 border border-[#D8D8D8]/60 dark:border-white/10">
                          <span className="text-[#182747]/70 dark:text-[#D8D8D8]/70 font-mono text-[11px]">Accessibility</span>
                          <span className="font-bold text-[#647E68] dark:text-[#7b9980] text-[11px] flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> WCAG AA Compliant
                          </span>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#562B08]/10 dark:bg-amber-400/10 border border-[#562B08]/20 dark:border-amber-400/20 text-xs text-[#182747] dark:text-[#D8D8D8] flex items-center justify-between">
                        <span className="font-semibold">Human-Centered Focus:</span>
                        <span className="font-bold text-[#562B08] dark:text-amber-300">Empathy & Usability</span>
                      </div>
                    </div>
                  )}

                  {active.domain === 'DEVELOPMENT' && (
                    <div className="p-5 sm:p-6 rounded-3xl bg-white/80 dark:bg-white/5 border border-[#D8D8D8]/80 dark:border-white/10 shadow-sm">
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#182747]/70 dark:text-[#D8D8D8]/70 uppercase mb-4">
                        <span className="flex items-center gap-2">
                          <Server className="w-4 h-4 text-[#182747] dark:text-[#647E68]" />
                          Backend & GIS Architecture
                        </span>
                        <span className="text-[#182747] dark:text-white font-mono">REST • Golang • Laravel</span>
                      </div>

                      {/* API Pipeline Architecture */}
                      <div className="space-y-2 mb-4 text-xs font-mono">
                        <div className="p-2.5 rounded-xl bg-[#182747] text-white flex items-center justify-between">
                          <span className="text-[11px] text-white/70">POST /api/v1/telemetry</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#647E68] text-white font-bold">200 OK</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#F6F6F6] dark:bg-white/10 border border-[#D8D8D8]/60 dark:border-white/10 flex items-center justify-between text-[#182747] dark:text-white">
                          <span className="text-[11px]">JWT Middleware Auth</span>
                          <ShieldCheck className="w-4 h-4 text-[#647E68]" />
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#F6F6F6] dark:bg-white/10 border border-[#D8D8D8]/60 dark:border-white/10 flex items-center justify-between text-[#182747] dark:text-white">
                          <span className="text-[11px]">PostgreSQL & Leaflet GIS</span>
                          <Cpu className="w-4 h-4 text-[#562B08] dark:text-amber-400" />
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#182747]/10 dark:bg-white/10 border border-[#182747]/20 dark:border-white/20 text-xs text-[#182747] dark:text-[#D8D8D8] flex items-center justify-between">
                        <span className="font-semibold">Software Engineering:</span>
                        <span className="font-bold text-[#182747] dark:text-white">High Concurrency & Rigor</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Pagination Dots & Mobile Prev/Next */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pt-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#182747]/70 dark:text-[#D8D8D8]/70">
            <span>Discipline</span>
            <span className="text-sm font-extrabold text-[#182747] dark:text-white">
              0{currentPillar + 1}
            </span>
            <span>of</span>
            <span className="text-sm font-extrabold text-[#182747] dark:text-white">
              0{total}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {pillars.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to approach pillar ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentPillar === idx
                    ? 'w-8 bg-[#182747] dark:bg-[#647E68] shadow-xs'
                    : 'w-2.5 bg-[#D8D8D8] dark:bg-white/20 hover:bg-[#182747]/40 dark:hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous approach pillar"
              className="px-4 py-2 rounded-full text-xs font-bold bg-white dark:bg-white/10 border border-[#D8D8D8] dark:border-[#D8D8D8]/20 text-[#182747] dark:text-[#D8D8D8] flex items-center gap-1 shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next approach pillar"
              className="px-4 py-2 rounded-full text-xs font-bold bg-[#182747] dark:bg-[#647E68] text-white flex items-center gap-1 shadow-xs cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Synthesis Banner (Editorial Mobile-Card Strip) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#182747] dark:bg-[#0f1a30] text-white p-6 sm:p-8 rounded-[28px] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div className="text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-4 h-4 text-[#647E68] dark:text-[#7b9980]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#647E68] dark:text-[#7b9980]">
                Holistic Synergy
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-extrabold text-white">
              The Unique Value of an Informatics Engineer
            </h4>
            <p className="text-xs sm:text-sm text-white/75 mt-1 max-w-2xl leading-relaxed">
              Having both backend architectural knowledge and UI/UX empathy means solutions aren't just visually compelling—they are functionally robust, high-performance, and backed by verifiable data.
            </p>
          </div>

          <a
            href="#projects"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#182747] text-xs font-bold hover:bg-[#D8D8D8] transition-colors shadow-xs"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
