import { motion } from 'motion/react';
import { Database, Palette, Code2, ArrowRight, Layers, Cpu, LineChart, Sparkles, Check, ChevronRight } from 'lucide-react';
import { APPROACH_PILLARS } from '../data/portfolioData';

export default function Approach() {
  const icons = [Database, Palette, Code2];

  return (
    <section
      id="approach"
      className="py-12 sm:py-20 px-3 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Primary Section Container */}
      <div className="bg-[#F6F6F6] rounded-[36px] sm:rounded-[44px] border border-[#D8D8D8] p-6 sm:p-10 lg:p-14 shadow-[0_8px_30px_rgb(24,39,71,0.03)] relative overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#D8D8D8]/80">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-[#647E68]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#647E68]">
                Methodology & Mindset
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#182747] tracking-tight">
              The Intersection of Three Disciplines
            </h2>
            <p className="text-sm sm:text-base text-[#182747]/75 mt-2 max-w-xl">
              How data modeling, human-centered UI design, and backend engineering synthesize into cohesive digital systems.
            </p>
          </div>

          {/* Connected Pillar Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D8D8D8] text-xs sm:text-sm font-bold shadow-2xs self-start md:self-auto">
            <span className="text-[#647E68]">DATA</span>
            <span className="text-[#182747]/30">→</span>
            <span className="text-[#562B08]">DESIGN</span>
            <span className="text-[#182747]/30">→</span>
            <span className="text-[#182747] bg-[#182747]/10 px-2 py-0.5 rounded-md">DEVELOPMENT</span>
          </div>
        </div>

        {/* Hierarchical Connected Visual Composition (1 Featured Hero Card + 2 Supporting Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
          {/* Card 01: DATA (Featured Primary Card with Visual Dashboard Mockup - Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-white rounded-[32px] p-6 sm:p-8 border border-[#D8D8D8] shadow-xs flex flex-col justify-between group hover:border-[#647E68] transition-all duration-300"
          >
            <div>
              {/* Header row */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-[#647E68]/15 text-[#647E68] border border-[#647E68]/30">
                  PILLAR 01
                </span>
                <div className="w-10 h-10 rounded-2xl bg-[#647E68]/15 text-[#647E68] flex items-center justify-center font-bold">
                  <Database className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#182747] tracking-tight mb-2">
                {APPROACH_PILLARS[0].title}
              </h3>

              <p className="text-sm sm:text-base font-semibold text-[#647E68] italic mb-3 font-serif">
                “{APPROACH_PILLARS[0].tagline}”
              </p>

              <p className="text-xs sm:text-sm text-[#182747]/75 leading-relaxed mb-6 font-normal">
                {APPROACH_PILLARS[0].description}
              </p>

              {/* Visual Micro-Mock: Data Warehouse Star Schema Snippet */}
              <div className="bg-[#F6F6F6] rounded-2xl p-4 border border-[#D8D8D8]/70 mb-6">
                <div className="flex items-center justify-between text-[10px] font-bold text-[#182747]/70 uppercase mb-3">
                  <span className="flex items-center gap-1.5">
                    <LineChart className="w-3.5 h-3.5 text-[#647E68]" />
                    Dimensional Modeling Logic
                  </span>
                  <span className="text-[#647E68] font-bold">ETL • OLAP</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="bg-white p-2 rounded-xl border border-[#D8D8D8]/60 shadow-2xs">
                    <p className="text-[#182747]/60 font-semibold">Dim_Entity</p>
                    <p className="font-bold text-[#182747] mt-0.5">Attributes</p>
                  </div>
                  <div className="bg-[#647E68] text-white p-2 rounded-xl shadow-xs font-bold flex flex-col justify-center">
                    <p className="text-white/70 text-[9px]">FACT TABLE</p>
                    <p className="text-[10px]">Metrics</p>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-[#D8D8D8]/60 shadow-2xs">
                    <p className="text-[#182747]/60 font-semibold">Dim_Time</p>
                    <p className="font-bold text-[#182747] mt-0.5">Temporal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="pt-4 border-t border-[#D8D8D8]/60 flex flex-wrap gap-1.5">
              {APPROACH_PILLARS[0].skillsSample.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#647E68]/10 text-[#647E68] border border-[#647E68]/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 02 DESIGN & 03 DEVELOPMENT (Span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Card 02: DESIGN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-[32px] p-6 sm:p-7 border border-[#D8D8D8] shadow-xs flex flex-col justify-between group hover:border-[#562B08] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-[#562B08]/15 text-[#562B08] border border-[#562B08]/30">
                    PILLAR 02
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#562B08]/15 text-[#562B08] flex items-center justify-center font-bold">
                    <Palette className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#182747] tracking-tight mb-1">
                  {APPROACH_PILLARS[1].title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#562B08] italic mb-2 font-serif">
                  “{APPROACH_PILLARS[1].tagline}”
                </p>
                <p className="text-xs sm:text-sm text-[#182747]/75 leading-relaxed mb-4">
                  {APPROACH_PILLARS[1].description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8D8D8]/60 flex flex-wrap gap-1.5">
                {APPROACH_PILLARS[1].skillsSample.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#562B08]/10 text-[#562B08] border border-[#562B08]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Card 03: DEVELOPMENT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-[32px] p-6 sm:p-7 border border-[#D8D8D8] shadow-xs flex flex-col justify-between group hover:border-[#182747] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-[#182747]/10 text-[#182747] border border-[#182747]/20">
                    PILLAR 03
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#182747]/10 text-[#182747] flex items-center justify-center font-bold">
                    <Code2 className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#182747] tracking-tight mb-1">
                  {APPROACH_PILLARS[2].title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#182747] italic mb-2 font-serif">
                  “{APPROACH_PILLARS[2].tagline}”
                </p>
                <p className="text-xs sm:text-sm text-[#182747]/75 leading-relaxed mb-4">
                  {APPROACH_PILLARS[2].description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8D8D8]/60 flex flex-wrap gap-1.5">
                {APPROACH_PILLARS[2].skillsSample.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#182747]/10 text-[#182747] border border-[#182747]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Synthesis Banner (Editorial Mobile-Card Strip) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#182747] text-white p-6 sm:p-8 rounded-[28px] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div className="text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-4 h-4 text-[#647E68]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#647E68]">
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
