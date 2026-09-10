import { motion } from 'motion/react';
import { ArrowDownRight, Sparkles, MapPin, Database, Palette, Server, Download, Copy, Check, BarChart2, Activity, Cpu, Code2, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useState } from 'react';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-20 px-3 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Background Ambient Tones */}
      <div className="absolute top-16 left-1/4 w-96 h-96 rounded-full bg-[#647E68]/10 dark:bg-[#647E68]/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-36 right-10 w-96 h-96 rounded-full bg-[#562B08]/8 dark:bg-[#562B08]/15 blur-3xl pointer-events-none -z-10" />

      {/* Large Rounded Primary Hero Container (Glass Bubble / Bento App Canvas) */}
      <div className="bg-white/85 dark:bg-[#0f1a30]/80 backdrop-blur-xl rounded-[36px] sm:rounded-[44px] border border-[#D8D8D8]/90 dark:border-white/10 p-6 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgb(24,39,71,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden transition-colors">
        {/* Subtle Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#182747_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] dark:opacity-[0.04] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          {/* Left Column: Asymmetrical Typography & Direct Interaction (Cols 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Live Status & Tagline Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div
                id="hero-status-badge"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F6F6F6] dark:bg-white/10 border border-[#D8D8D8] dark:border-white/15 text-[#182747] dark:text-[#D8D8D8] shadow-2xs"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#647E68] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#647E68]"></span>
                </span>
                <span>{PERSONAL_INFO.status}</span>
              </div>

              <div
                id="hero-domain-pill"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#647E68]/15 text-[#182747] dark:text-[#7b9980] border border-[#647E68]/30 dark:border-[#647E68]/40"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#562B08] dark:text-amber-400" />
                <span className="font-bold">{PERSONAL_INFO.badgeTagline}</span>
              </div>
            </div>

            {/* Editorial Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#182747] dark:text-white leading-[1.08] mb-4"
            >
              Hi, I'm <span className="font-serif italic text-[#562B08] dark:text-amber-300 font-normal">Tabina</span>.
            </motion.h1>

            {/* Secondary Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-[#182747]/90 dark:text-[#D8D8D8] leading-snug tracking-tight mb-5"
            >
              Informatics Engineering Student turning{' '}
              <span className="text-[#647E68] dark:text-[#7b9980] font-bold underline decoration-[#647E68]/40 underline-offset-4">
                data
              </span>
              ,{' '}
              <span className="text-[#562B08] dark:text-amber-300 font-bold underline decoration-[#562B08]/40 underline-offset-4">
                ideas
              </span>
              , and{' '}
              <span className="text-[#182747] dark:text-white font-bold underline decoration-[#182747]/40 underline-offset-4">
                technology
              </span>{' '}
              into meaningful digital experiences.
            </motion.h2>

            {/* Concise Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-[#182747]/75 dark:text-[#D8D8D8]/80 font-normal leading-relaxed max-w-xl mb-8"
            >
              {PERSONAL_INFO.aboutDescription.split('.')[0]}. I enjoy transforming analytical logic and user insights into high-impact, data-backed products.
            </motion.p>

            {/* Actions: Primary CTA, Connect, and Interactive Copy Email */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                id="hero-view-work-cta"
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#182747] dark:bg-[#647E68] text-white hover:bg-[#562B08] dark:hover:bg-[#562B08] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                id="hero-lets-connect-cta"
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#F6F6F6] dark:bg-white/10 text-[#182747] dark:text-[#D8D8D8] border border-[#D8D8D8] dark:border-white/15 hover:border-[#182747] dark:hover:border-white/40 hover:bg-white dark:hover:bg-white/15 transition-all duration-300 shadow-2xs hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#182747]/60 dark:text-[#D8D8D8]/60" />
              </a>

              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-semibold text-[#182747] dark:text-[#D8D8D8] bg-white dark:bg-white/10 hover:bg-[#F6F6F6] dark:hover:bg-white/15 transition-colors border border-[#D8D8D8] dark:border-white/15 shadow-2xs cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#647E68] dark:text-[#7b9980]" />
                    <span className="text-[#647E68] dark:text-[#7b9980] font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#562B08] dark:text-amber-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Quick Context Strip */}
            <div className="mt-8 pt-5 border-t border-[#D8D8D8]/70 dark:border-white/10 flex flex-wrap items-center gap-4 text-xs text-[#182747]/75 dark:text-[#D8D8D8]/75">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#562B08] dark:text-amber-400" />
                <span className="font-semibold">{PERSONAL_INFO.location}</span>
              </div>
              <span className="text-[#D8D8D8] dark:text-white/20">•</span>
              <div>
                <span className="font-semibold text-[#182747] dark:text-white">{PERSONAL_INFO.university}</span>
                <span className="ml-1 text-[#647E68] dark:text-[#7b9980]">({PERSONAL_INFO.educationPeriod})</span>
              </div>
              <span className="text-[#D8D8D8] dark:text-white/20">•</span>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#647E68]/15 dark:bg-[#647E68]/25 text-[#647E68] dark:text-[#7b9980] font-bold text-[11px]">
                GPA: {PERSONAL_INFO.gpa}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Layered Bento Visual Composition representing DATA × DESIGN × DEVELOPMENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Main Rounded Portrait Card */}
              <div className="relative bg-white dark:bg-[#0f1a30] p-3 sm:p-4 rounded-[32px] sm:rounded-[36px] border border-[#D8D8D8] dark:border-white/15 shadow-xl">
                {/* Photo Frame */}
                <div className="relative aspect-4/5 rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#182747]/5 dark:bg-white/5">
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt="Tabina Adelia Rafa"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#182747]/70 dark:from-[#0f1a30]/80 via-[#182747]/15 to-transparent pointer-events-none" />

                  {/* Bottom Strip Over Image */}
                  <div className="absolute bottom-3 inset-x-3 bg-white/95 dark:bg-[#0f1a30]/95 backdrop-blur-md rounded-2xl p-3 border border-white/60 dark:border-white/10 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xs sm:text-sm font-extrabold text-[#182747] dark:text-white leading-tight">
                          {PERSONAL_INFO.name}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] text-[#647E68] dark:text-[#7b9980] font-semibold">
                          {PERSONAL_INFO.university}
                        </p>
                      </div>
                      <button
                        onClick={onOpenResume}
                        className="px-2.5 py-1.5 rounded-xl bg-[#182747] dark:bg-[#647E68] text-white text-[11px] font-bold hover:bg-[#562B08] dark:hover:bg-[#562B08] transition-colors flex items-center gap-1 shadow-xs cursor-pointer"
                        aria-label="View Resume"
                      >
                        <Download className="w-3 h-3" />
                        <span>Resume</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layered Floating Card 1: Data Widget */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-3 sm:-top-5 sm:-left-8 bg-white/95 dark:bg-[#0f1a30]/95 backdrop-blur-md rounded-2xl p-3 border border-[#D8D8D8] dark:border-white/15 shadow-lg flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-[#647E68]/15 dark:bg-[#647E68]/25 text-[#647E68] dark:text-[#7b9980] flex items-center justify-center font-bold shrink-0">
                  <Database className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#647E68] dark:text-[#7b9980]">Domain 01</p>
                  <p className="text-xs font-bold text-[#182747] dark:text-white whitespace-nowrap">Data Analyst</p>
                  <p className="text-[10px] text-[#182747]/60 dark:text-[#D8D8D8]/60">Star Schema • Power BI</p>
                </div>
              </motion.div>

              {/* Layered Floating Card 2: UI/UX Prototyping Badge */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="absolute top-1/3 -right-3 sm:-right-8 bg-white/95 dark:bg-[#0f1a30]/95 backdrop-blur-md rounded-2xl p-3 border border-[#D8D8D8] dark:border-white/15 shadow-lg flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-[#562B08]/15 dark:bg-amber-400/20 text-[#562B08] dark:text-amber-300 flex items-center justify-center font-bold shrink-0">
                  <Palette className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#562B08] dark:text-amber-300">Domain 02</p>
                  <p className="text-xs font-bold text-[#182747] dark:text-white whitespace-nowrap">UI/UX Designer</p>
                  <p className="text-[10px] text-[#182747]/60 dark:text-[#D8D8D8]/60">Figma • Design Sprint</p>
                </div>
              </motion.div>

              {/* Layered Floating Card 3: Backend Systems & APIs */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="absolute -bottom-4 -left-2 sm:-left-6 bg-white/95 dark:bg-[#0f1a30]/95 backdrop-blur-md rounded-2xl p-3 border border-[#D8D8D8] dark:border-white/15 shadow-lg flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-[#182747]/15 dark:bg-white/10 text-[#182747] dark:text-[#D8D8D8] flex items-center justify-center font-bold shrink-0">
                  <Server className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#182747] dark:text-[#D8D8D8]">Domain 03</p>
                  <p className="text-xs font-bold text-[#182747] dark:text-white whitespace-nowrap">Backend Developer</p>
                  <p className="text-[10px] text-[#182747]/60 dark:text-[#D8D8D8]/60">Golang • Laravel • SQL</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
