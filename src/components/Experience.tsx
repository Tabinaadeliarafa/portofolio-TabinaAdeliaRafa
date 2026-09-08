import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Building2, Briefcase, Award, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>('exp-1');
  const [filter, setFilter] = useState<'All' | 'Internships' | 'Courses'>('All');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filter === 'All') return true;
    if (filter === 'Internships') return exp.type === 'Internship' || exp.type === 'Project-Based';
    if (filter === 'Courses') return exp.type === 'Course';
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Primary Section Container */}
      <div className="bg-white rounded-[36px] sm:rounded-[44px] border border-[#D8D8D8] p-6 sm:p-10 lg:p-14 shadow-[0_8px_30px_rgb(24,39,71,0.03)] relative overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#D8D8D8]/80">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-[#562B08]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#562B08]">
                Career Journey
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#182747] tracking-tight">
              Experience
            </h2>
            <p className="text-sm sm:text-base text-[#182747]/75 mt-2 max-w-xl">
              Hands-on industry internships and project-based programs across data analysis, backend engineering, and user experience design.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="inline-flex p-1 rounded-full bg-[#F6F6F6] border border-[#D8D8D8] shadow-2xs self-start sm:self-auto">
            {(['All', 'Internships', 'Courses'] as const).map((tab) => (
              <button
                key={tab}
                id={`exp-filter-${tab.toLowerCase()}`}
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-[#182747] text-white shadow-xs'
                    : 'text-[#182747]/70 hover:text-[#182747]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Story Cards List with Visual Numbering & Hierarchical Emphasis */}
        <div className="space-y-6">
          {filteredExperiences.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            const isFeatured = exp.id === 'exp-1';
            const storyNumber = `0${idx + 1}`;

            return (
              <motion.div
                key={exp.id}
                id={`experience-card-${exp.id}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`rounded-[32px] border transition-all duration-300 overflow-hidden ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#F6F6F6] to-white border-[#647E68]/40 shadow-md ring-1 ring-[#647E68]/20'
                    : 'bg-[#F6F6F6]/60 hover:bg-white border-[#D8D8D8] shadow-2xs hover:shadow-md'
                }`}
              >
                <div className="p-6 sm:p-8">
                  {/* Card Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#D8D8D8]/70">
                    <div className="flex items-start gap-4">
                      {/* Story Number Badge */}
                      <span className="text-2xl sm:text-3xl font-black font-serif text-[#182747]/25 shrink-0 pt-0.5">
                        {storyNumber}
                      </span>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span
                            className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              exp.type === 'Internship'
                                ? 'bg-[#647E68]/15 text-[#647E68] border border-[#647E68]/30'
                                : exp.type === 'Project-Based'
                                ? 'bg-[#562B08]/15 text-[#562B08] border border-[#562B08]/30'
                                : 'bg-[#182747]/10 text-[#182747] border border-[#182747]/20'
                            }`}
                          >
                            {exp.type}
                          </span>

                          {isFeatured && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#647E68] text-white shadow-2xs">
                              <Sparkles className="w-2.5 h-2.5" />
                              <span>Primary Internship</span>
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#182747] tracking-tight">
                          {exp.role}
                        </h3>

                        <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-[#562B08]">
                          <Building2 className="w-4 h-4 text-[#562B08]/80" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right side: Period & Toggle */}
                    <div className="flex items-center justify-between lg:flex-col lg:items-end gap-2 shrink-0">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#D8D8D8] text-[#182747] shadow-2xs">
                        <Calendar className="w-3.5 h-3.5 text-[#562B08]" />
                        <span>{exp.period}</span>
                      </div>

                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#182747] hover:text-[#562B08] transition-colors cursor-pointer py-1 px-2.5 rounded-full bg-white/80 border border-[#D8D8D8]/80 hover:bg-white"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Hide Details' : 'View Responsibilities'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs sm:text-sm text-[#182747]/80 font-normal leading-relaxed mt-4">
                    {exp.description}
                  </p>

                  {/* Responsibilities Dropdown */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-[#D8D8D8]/60 space-y-2">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#182747]/60 mb-2">
                            Key Deliverables & Responsibilities
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {exp.responsibilities.map((resp, rIdx) => (
                              <div
                                key={rIdx}
                                className="flex items-start gap-2 text-xs text-[#182747]/85 bg-white/90 p-2.5 rounded-xl border border-[#D8D8D8]/70"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#647E68] shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tags Pill Row */}
                  <div className="mt-4 pt-4 border-t border-[#D8D8D8]/50 flex flex-wrap items-center gap-1.5">
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white border border-[#D8D8D8] text-[#182747]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
