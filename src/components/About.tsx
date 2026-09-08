import { motion } from 'motion/react';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2, HeartHandshake, BookOpen, Compass, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Editorial Section Wrapper Container */}
      <div className="bg-white rounded-[36px] sm:rounded-[44px] border border-[#D8D8D8] p-6 sm:p-10 lg:p-14 shadow-[0_8px_30px_rgb(24,39,71,0.04)] relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#647E68]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#562B08]/8 blur-3xl pointer-events-none" />

        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-2.5 mb-8 relative z-10">
          <span className="h-px w-8 bg-[#562B08]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#562B08]">
            About Me
          </span>
        </div>

        {/* Top Feature Statement Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 pb-10 border-b border-[#D8D8D8]/70 relative z-10">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#182747] leading-[1.14] tracking-tight">
              Curious by{' '}
              <span className="font-serif italic font-normal text-[#647E68]">nature</span>.
              <br />
              Technical by{' '}
              <span className="font-serif italic font-normal text-[#182747]">mindset</span>.
              <br />
              Creative by{' '}
              <span className="font-serif italic font-normal text-[#562B08]">heart</span>.
            </h2>
          </div>

          <div className="lg:col-span-5 bg-[#F6F6F6] p-6 sm:p-7 rounded-[28px] border border-[#D8D8D8]">
            <p className="text-xs sm:text-sm text-[#182747]/85 font-normal leading-relaxed mb-4">
              {PERSONAL_INFO.aboutDescription}
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-[#647E68]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bridge between technical rigor & empathetic design</span>
            </div>
          </div>
        </div>

        {/* Asymmetric Bento Cards Grid with Different Sizing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 relative z-10">
          {/* Card 1: Large Education Hero Card (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-7 bg-[#F6F6F6] rounded-[32px] p-6 sm:p-8 border border-[#D8D8D8] flex flex-col justify-between hover:border-[#182747]/30 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#182747] text-white flex items-center justify-center shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-[#182747] border border-[#D8D8D8]">
                  Undergraduate
                </span>
              </div>

              <p className="text-[11px] font-bold uppercase tracking-wider text-[#647E68] mb-1">
                Formal Higher Education
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#182747] tracking-tight mb-1">
                {PERSONAL_INFO.university}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-[#562B08] mb-4">
                {PERSONAL_INFO.degree}
              </p>

              <p className="text-xs sm:text-sm text-[#182747]/75 leading-relaxed mb-6">
                Active student in the Department of Informatics. Focused on software architecture, relational & multidimensional database engineering, data modeling, algorithm analysis, and interaction design.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D8D8D8]/60 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="flex items-center gap-1.5 font-semibold text-[#182747]">
                <Calendar className="w-3.5 h-3.5 text-[#562B08]" />
                {PERSONAL_INFO.educationPeriod}
              </span>
              <span className="text-[#647E68] font-bold">Jatinangor, Sumedang</span>
            </div>
          </motion.div>

          {/* Card 2: GPA Distinction Accent Card (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-5 bg-gradient-to-br from-[#182747] to-[#0f1a30] text-white rounded-[32px] p-6 sm:p-8 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#647E68] text-white flex items-center justify-center shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15">
                  Academic Metric
                </span>
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-[#D8D8D8]/70 mb-2">
                Cumulative Grade Point Average
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                  3.19
                </span>
                <span className="text-base text-white/60 font-semibold">/ 4.00</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed mb-6">
                Maintained strong academic standing alongside rigorous extracurriculars, nationwide tech festival leadership (IFEST), and industry internships.
              </p>
            </div>

            <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/70 font-medium">
              <span>Status: Active Undergrad</span>
              <span className="text-[#647E68] font-bold">In Good Standing</span>
            </div>
          </motion.div>

          {/* Card 3: Location & Roots (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="md:col-span-4 bg-[#F6F6F6] rounded-[28px] p-6 border border-[#D8D8D8] flex flex-col justify-between hover:border-[#182747]/30 transition-all"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#562B08]/15 text-[#562B08] flex items-center justify-center mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#182747]/60">Base Location</p>
              <h4 className="text-lg font-bold text-[#182747] tracking-tight mt-0.5">
                {PERSONAL_INFO.location}
              </h4>
              <p className="text-xs text-[#182747]/70 mt-1">
                West Java, Indonesia. Open for hybrid & remote technical roles.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#D8D8D8]/60 text-[11px] text-[#647E68] font-bold">
              Available for Internships
            </div>
          </motion.div>

          {/* Card 4: Working Ethos & Core Values (Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-8 bg-[#647E68]/10 rounded-[28px] p-6 sm:p-7 border border-[#647E68]/20 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <HeartHandshake className="w-4 h-4 text-[#562B08]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#647E68]">
                  Professional Work Ethos
                </h4>
              </div>
              <p className="text-xs text-[#182747]/80 mb-4 leading-relaxed">
                Proven competencies applied consistently across academic projects, corporate internships, and student governance:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#182747] bg-white/70 p-2.5 rounded-xl border border-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#647E68] shrink-0" />
                  <span>Independent & Team-Ready Collaboration</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#182747] bg-white/70 p-2.5 rounded-xl border border-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#647E68] shrink-0" />
                  <span>Strong Attention to Detail & Rigor</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#182747] bg-white/70 p-2.5 rounded-xl border border-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#647E68] shrink-0" />
                  <span>Effective Time & Milestone Management</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#182747] bg-white/70 p-2.5 rounded-xl border border-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#647E68] shrink-0" />
                  <span>Clear Technical & Stakeholder Communication</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
