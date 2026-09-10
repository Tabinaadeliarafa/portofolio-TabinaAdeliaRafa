import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Handshake, Mic, Eye, TrendingUp, Award, Calendar, CheckCircle2, Star, Sparkles, Building, ChevronRight } from 'lucide-react';
import { ORGANIZATIONS, STATS } from '../data/portfolioData';

// Custom Animated Counter
function Counter({ end, decimals = 0, duration = 1500 }: { end: number; decimals?: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = eased * end;
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
    </span>
  );
}

export default function Organization() {
  const ifest2024 = ORGANIZATIONS[0];
  const ifest2023 = ORGANIZATIONS[1];
  const himatif = ORGANIZATIONS[2];

  return (
    <section id="organization" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Primary Section Container */}
      <div className="bg-[#F6F6F6] dark:bg-[#0f1a30]/80 rounded-[36px] sm:rounded-[44px] border border-[#D8D8D8] dark:border-white/10 p-6 sm:p-10 lg:p-14 shadow-[0_12px_40px_rgb(24,39,71,0.03)] relative overflow-hidden backdrop-blur-xl transition-colors">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#D8D8D8]/80 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-[#647E68] dark:bg-[#7b9980]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#647E68] dark:text-[#7b9980]">
                Leadership & Impact
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#182747] dark:text-white tracking-tight">
              Beyond the Classroom
            </h2>
            <p className="text-sm sm:text-base text-[#182747]/75 dark:text-[#D8D8D8]/80 mt-2 max-w-2xl">
              Spearheading national-scale tech festivals, external PR partnerships, and organizational digital visibility for the Informatics Engineering Student Association.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/10 text-[#562B08] dark:text-amber-300 text-xs font-bold border border-[#D8D8D8] dark:border-white/15 shadow-2xs self-start md:self-auto">
            <Star className="w-3.5 h-3.5 fill-[#562B08] dark:fill-amber-300" />
            <span>Proven Project Governance</span>
          </div>
        </div>

        {/* Dashboard Bento Statistics Grid with Varied Sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 mb-8">
          {/* Stat 1: Large Hero Metric Card (TikTok Impressions - Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#182747] to-[#0f1a30] text-white p-6 sm:p-7 rounded-[32px] shadow-md border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15">
                  Viral Media Reach
                </span>
                <TrendingUp className="w-5 h-5 text-[#647E68] dark:text-[#7b9980]" />
              </div>
              <p className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-1">
                <Counter end={1.9} decimals={1} />M+
              </p>
              <p className="text-sm font-bold text-white/90">TikTok Campaign Impressions</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
              <span>Audience Growth Campaign</span>
              <span className="text-[#647E68] dark:text-[#7b9980] font-bold">IFEST 2024</span>
            </div>
          </motion.div>

          {/* Stat 2: Medium Metric Card (Instagram Reels - Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="lg:col-span-4 bg-white dark:bg-[#182747]/50 p-6 sm:p-7 rounded-[32px] border border-[#D8D8D8] dark:border-white/10 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#562B08]/10 dark:bg-amber-400/15 text-[#562B08] dark:text-amber-300">
                  Video Impressions
                </span>
                <Eye className="w-5 h-5 text-[#562B08] dark:text-amber-300" />
              </div>
              <p className="text-3xl sm:text-4xl font-black text-[#182747] dark:text-white tracking-tight mb-1">
                <Counter end={685} />K+
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#182747] dark:text-white">Instagram Reels Views</p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#D8D8D8]/60 dark:border-white/10 text-xs text-[#182747]/60 dark:text-[#D8D8D8]/60 font-semibold">
              Cross-Platform Content Strategy
            </div>
          </motion.div>

          {/* Stat 3: Supporting Metric Card (Nationwide Participants - Span 3) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="lg:col-span-3 bg-white dark:bg-[#182747]/50 p-6 sm:p-7 rounded-[32px] border border-[#D8D8D8] dark:border-white/10 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#647E68]/15 dark:bg-[#647E68]/25 text-[#647E68] dark:text-[#7b9980]">
                  Delegates
                </span>
                <Users className="w-5 h-5 text-[#647E68] dark:text-[#7b9980]" />
              </div>
              <p className="text-3xl sm:text-4xl font-black text-[#182747] dark:text-white tracking-tight mb-1">
                <Counter end={500} />+
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#182747] dark:text-white">National Participants</p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#D8D8D8]/60 dark:border-white/10 text-xs text-[#182747]/60 dark:text-[#D8D8D8]/60 font-semibold">
              Universities Nationwide
            </div>
          </motion.div>

          {/* Stat 4: Partnerships (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="sm:col-span-1 lg:col-span-6 bg-white dark:bg-[#182747]/50 p-5 rounded-[28px] border border-[#D8D8D8] dark:border-white/10 shadow-xs flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#562B08]/10 dark:bg-amber-400/15 text-[#562B08] dark:text-amber-300 flex items-center justify-center shrink-0">
                <Handshake className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-black text-[#182747] dark:text-white">
                  <Counter end={20} />+
                </p>
                <p className="text-xs font-bold text-[#182747] dark:text-white">Company Partnerships & Media Sponsors</p>
              </div>
            </div>
          </motion.div>

          {/* Stat 5: Expert Speakers (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="sm:col-span-1 lg:col-span-6 bg-white dark:bg-[#182747]/50 p-5 rounded-[28px] border border-[#D8D8D8] dark:border-white/10 shadow-xs flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#182747]/10 dark:bg-white/10 text-[#182747] dark:text-[#D8D8D8] flex items-center justify-center shrink-0">
                <Mic className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-black text-[#182747] dark:text-white">
                  <Counter end={12} />
                </p>
                <p className="text-xs font-bold text-[#182747] dark:text-white">Keynote Tech Speakers Coordinated</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Featured Organization Cards Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Card: IFEST 2024 Project Supervisor (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white dark:bg-[#182747]/50 rounded-[32px] p-6 sm:p-8 border border-[#D8D8D8] dark:border-white/10 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-[#D8D8D8]/70 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#647E68] text-white">
                    Primary Leadership Role
                  </span>
                  <span className="text-xs font-semibold text-[#182747]/60 dark:text-[#D8D8D8]/60">
                    {ifest2024.period}
                  </span>
                </div>
                <span className="text-xs font-bold text-[#562B08] dark:text-amber-300">National Tech Festival</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#182747] dark:text-white tracking-tight mb-1">
                {ifest2024.role}
              </h3>
              <p className="text-sm font-semibold text-[#562B08] dark:text-amber-300 mb-3">
                {ifest2024.organization}
              </p>

              <p className="text-xs sm:text-sm text-[#182747]/80 dark:text-[#D8D8D8]/80 leading-relaxed mb-6">
                {ifest2024.description} Led overall strategic planning, roadmap execution, budgeting, sponsor acquisition, and team coordination across all divisions.
              </p>

              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#182747]/60 dark:text-[#D8D8D8]/60 mb-2">
                  Key Supervisory Deliverables
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ifest2024.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-[#182747]/85 dark:text-[#D8D8D8]/90 bg-[#F6F6F6] dark:bg-white/5 p-2.5 rounded-xl border border-[#D8D8D8]/60 dark:border-white/10"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#647E68] dark:text-[#7b9980] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: HIMATIF Unpad & IFEST 2023 (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* HIMATIF Unpad Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-[#182747]/50 rounded-[32px] p-6 sm:p-7 border border-[#D8D8D8] dark:border-white/10 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#182747]/10 dark:bg-white/10 text-[#182747] dark:text-white">
                    Student Association
                  </span>
                  <span className="text-xs font-semibold text-[#182747]/60 dark:text-[#D8D8D8]/60 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#647E68] dark:text-[#7b9980]" />
                    {himatif.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#182747] dark:text-white tracking-tight mb-1">
                  {himatif.role}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#562B08] dark:text-amber-300 mb-3">
                  {himatif.organization}
                </p>
                <p className="text-xs text-[#182747]/75 dark:text-[#D8D8D8]/75 leading-relaxed mb-4">
                  {himatif.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-[#D8D8D8]/60 dark:border-white/10">
                  {himatif.responsibilities.slice(0, 4).map((item, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-[#182747]/85 dark:text-[#D8D8D8]/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#647E68] dark:bg-[#7b9980] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* IFEST 2023 Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white dark:bg-[#182747]/50 rounded-[32px] p-6 sm:p-7 border border-[#D8D8D8] dark:border-white/10 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#562B08]/10 dark:bg-amber-400/15 text-[#562B08] dark:text-amber-300">
                    Public Relations
                  </span>
                  <span className="text-xs font-semibold text-[#182747]/60 dark:text-[#D8D8D8]/60 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#562B08] dark:text-amber-300" />
                    {ifest2023.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#182747] dark:text-white tracking-tight mb-1">
                  {ifest2023.role}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#562B08] dark:text-amber-300 mb-3">
                  {ifest2023.organization}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-[#D8D8D8]/60 dark:border-white/10">
                  {ifest2023.responsibilities.slice(0, 3).map((item, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-[#182747]/85 dark:text-[#D8D8D8]/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#562B08] dark:bg-amber-300 shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
