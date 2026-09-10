import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  ChevronLeft, 
  ChevronRight, 
  Briefcase,
  Layers,
  ArrowRight
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  const [filter, setFilter] = useState<'All' | 'Internships' | 'Courses'>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filter === 'All') return true;
    if (filter === 'Internships') return exp.type === 'Internship' || exp.type === 'Project-Based';
    if (filter === 'Courses') return exp.type === 'Course';
    return true;
  });

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const total = filteredExperiences.length;

  const nextSlide = () => {
    if (total <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    if (total <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentExp = filteredExperiences[currentIndex] || EXPERIENCES[0];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.94,
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
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.94,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 32 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    }),
  };

  return (
    <section id="experience" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Primary Section Container */}
      <div className="bg-white/90 dark:bg-[#0f1a30]/80 rounded-[36px] sm:rounded-[44px] border border-[#D8D8D8] dark:border-[#D8D8D8]/15 p-6 sm:p-10 lg:p-14 shadow-[0_12px_40px_rgb(24,39,71,0.04)] relative overflow-hidden backdrop-blur-xl transition-colors duration-300">
        {/* Subtle Ambient Light Reflections */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#647E68]/15 dark:bg-[#647E68]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#562B08]/10 dark:bg-[#562B08]/15 blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-[#D8D8D8]/80 dark:border-[#D8D8D8]/20 relative z-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-[#562B08] dark:bg-amber-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#562B08] dark:text-amber-400">
                Career Journey
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#182747] dark:text-white tracking-tight">
              Experience
            </h2>
            <p className="text-sm sm:text-base text-[#182747]/75 dark:text-[#D8D8D8]/80 mt-2 max-w-xl">
              Hands-on industry internships and project-based programs across data analysis, backend engineering, and user experience design.
            </p>
          </div>

          {/* Filter Tabs & Counter */}
          <div className="flex flex-wrap items-center gap-3 self-start sm:self-auto">
            <div className="inline-flex p-1 rounded-full bg-[#F6F6F6] dark:bg-white/10 border border-[#D8D8D8] dark:border-[#D8D8D8]/20 shadow-2xs">
              {(['All', 'Internships', 'Courses'] as const).map((tab) => (
                <button
                  key={tab}
                  id={`exp-filter-${tab.toLowerCase()}`}
                  onClick={() => setFilter(tab)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    filter === tab
                      ? 'bg-[#182747] dark:bg-[#647E68] text-white shadow-xs'
                      : 'text-[#182747]/70 dark:text-[#D8D8D8]/70 hover:text-[#182747] dark:hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Slider Navigation Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                id="exp-slider-prev-btn"
                onClick={prevSlide}
                disabled={total <= 1}
                aria-label="Previous experience"
                className="w-10 h-10 rounded-full bg-white/80 dark:bg-white/10 border border-[#D8D8D8] dark:border-[#D8D8D8]/20 flex items-center justify-center text-[#182747] dark:text-[#D8D8D8] hover:bg-white dark:hover:bg-white/20 hover:border-[#647E68] transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                id="exp-slider-next-btn"
                onClick={nextSlide}
                disabled={total <= 1}
                aria-label="Next experience"
                className="w-10 h-10 rounded-full bg-white/80 dark:bg-white/10 border border-[#D8D8D8] dark:border-[#D8D8D8]/20 flex items-center justify-center text-[#182747] dark:text-[#D8D8D8] hover:bg-white dark:hover:bg-white/20 hover:border-[#647E68] transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Liquid Glass Bubble Slider Container */}
        <div className="relative min-h-[460px] flex flex-col justify-between">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentExp.id}
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

              {/* Card Meta Row: Story Number, Type, Period, and Featured Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#D8D8D8]/70 dark:border-[#D8D8D8]/15">
                <div className="flex items-center gap-3">
                  {/* Floating Glass Number Bubble */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sm:rounded-3xl bg-[#182747]/5 dark:bg-white/10 border border-[#182747]/10 dark:border-white/15 flex items-center justify-center font-serif italic font-extrabold text-xl sm:text-2xl text-[#182747] dark:text-white shadow-2xs">
                    0{currentIndex + 1}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        currentExp.type === 'Internship'
                          ? 'bg-[#647E68]/15 text-[#647E68] dark:text-[#7b9980] border border-[#647E68]/30 dark:border-[#647E68]/40'
                          : currentExp.type === 'Project-Based'
                          ? 'bg-[#562B08]/15 text-[#562B08] dark:text-amber-300 border border-[#562B08]/30 dark:border-amber-400/30'
                          : 'bg-[#182747]/10 dark:bg-white/10 text-[#182747] dark:text-[#D8D8D8] border border-[#182747]/20 dark:border-white/20'
                      }`}
                    >
                      {currentExp.type}
                    </span>

                    {currentExp.id === 'exp-1' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#647E68] text-white shadow-2xs">
                        <Sparkles className="w-3 h-3" />
                        <span>Primary Internship</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Period Capsule */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/90 dark:bg-white/10 border border-[#D8D8D8] dark:border-[#D8D8D8]/20 text-[#182747] dark:text-[#D8D8D8] shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-[#562B08] dark:text-amber-300" />
                  <span>{currentExp.period}</span>
                </div>
              </div>

              {/* Title & Company */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#182747] dark:text-white tracking-tight leading-tight">
                  {currentExp.role}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-base sm:text-lg font-bold text-[#562B08] dark:text-amber-300">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#562B08] dark:text-amber-300" />
                  <span>{currentExp.company}</span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm sm:text-base text-[#182747]/85 dark:text-[#D8D8D8]/90 font-normal leading-relaxed mb-8 max-w-3xl">
                {currentExp.description}
              </p>

              {/* Key Deliverables & Responsibilities Grid */}
              <div className="mb-8">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#182747]/60 dark:text-[#D8D8D8]/60 mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#647E68]" />
                  <span>Key Deliverables & Responsibilities</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentExp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#D8D8D8]/70 dark:border-white/10 text-xs sm:text-sm text-[#182747]/90 dark:text-[#D8D8D8] shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#647E68] dark:text-[#7b9980] shrink-0 mt-0.5" />
                      <span className="leading-snug">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Tags */}
              <div className="pt-6 border-t border-[#D8D8D8]/60 dark:border-[#D8D8D8]/15 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#182747]/60 dark:text-[#D8D8D8]/60 mr-2">
                  Skills & Tools:
                </span>
                {currentExp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-white/10 border border-[#D8D8D8] dark:border-white/10 text-[#182747] dark:text-[#D8D8D8] shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Slider Pagination Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-[#D8D8D8]/60 dark:border-[#D8D8D8]/20">
            {/* Slide Index Counter */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#182747]/70 dark:text-[#D8D8D8]/70">
              <span>Card</span>
              <span className="text-sm font-extrabold text-[#182747] dark:text-white">
                0{currentIndex + 1}
              </span>
              <span>of</span>
              <span className="text-sm font-extrabold text-[#182747] dark:text-white">
                0{total}
              </span>
            </div>

            {/* Pagination Glass Dots */}
            <div className="flex items-center gap-2">
              {filteredExperiences.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-[#182747] dark:bg-[#647E68] shadow-xs'
                      : 'w-2.5 bg-[#D8D8D8] dark:bg-white/20 hover:bg-[#182747]/40 dark:hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Mobile Prev / Next Buttons */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={prevSlide}
                disabled={total <= 1}
                aria-label="Previous experience"
                className="px-4 py-2 rounded-full text-xs font-bold bg-white dark:bg-white/10 border border-[#D8D8D8] dark:border-[#D8D8D8]/20 text-[#182747] dark:text-[#D8D8D8] flex items-center gap-1 shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>
              <button
                onClick={nextSlide}
                disabled={total <= 1}
                aria-label="Next experience"
                className="px-4 py-2 rounded-full text-xs font-bold bg-[#182747] dark:bg-[#647E68] text-white flex items-center gap-1 shadow-xs cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
