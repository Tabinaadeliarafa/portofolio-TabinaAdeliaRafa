import { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, BarChart3, Palette, Layers, Sparkles, Search, CheckCircle, Database } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const iconMap: Record<string, typeof Code2> = {
    Code2,
    BarChart3,
    Palette,
    Layers,
    Sparkles,
  };

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, filteredSkills: matchingSkills };
  }).filter((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) return false;
    if (searchQuery.trim() !== '') return cat.filteredSkills.length > 0;
    return true;
  });

  return (
    <section id="skills" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Primary Section Container */}
      <div className="bg-[#F6F6F6] dark:bg-[#0f1a30]/80 rounded-[36px] sm:rounded-[44px] border border-[#D8D8D8] dark:border-white/10 p-6 sm:p-10 lg:p-14 shadow-[0_12px_40px_rgb(24,39,71,0.03)] relative overflow-hidden backdrop-blur-xl transition-colors">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-8 border-b border-[#D8D8D8]/80 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-[#562B08] dark:bg-amber-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#562B08] dark:text-amber-400">
                Core Competencies
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#182747] dark:text-white tracking-tight">
              Skills & Toolkits
            </h2>
            <p className="text-sm sm:text-base text-[#182747]/75 dark:text-[#D8D8D8]/80 mt-2 max-w-xl">
              A comprehensive overview of programming stacks, business intelligence platforms, user research frameworks, and collaborative soft skills.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#182747]/40 dark:text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Power BI, Figma)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9.5 pr-4 py-2.5 rounded-full bg-white dark:bg-white/10 border border-[#D8D8D8] dark:border-white/15 text-xs font-medium text-[#182747] dark:text-white placeholder:text-[#182747]/40 dark:placeholder:text-white/40 focus:outline-hidden focus:border-[#182747] dark:focus:border-[#647E68] shadow-2xs transition-all"
            />
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#182747] dark:bg-[#647E68] text-white shadow-xs'
                : 'bg-white dark:bg-white/10 text-[#182747]/70 dark:text-[#D8D8D8] border border-[#D8D8D8] dark:border-white/15 hover:border-[#182747] dark:hover:border-white/30'
            }`}
          >
            All Domains
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#182747] dark:bg-[#647E68] text-white shadow-xs'
                  : 'bg-white dark:bg-white/10 text-[#182747]/70 dark:text-[#D8D8D8] border border-[#D8D8D8] dark:border-white/15 hover:border-[#182747] dark:hover:border-white/30'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Grouped Editorial Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => {
            const Icon = iconMap[category.iconName] || Sparkles;
            const skillsToRender = searchQuery ? category.filteredSkills : category.skills;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white dark:bg-[#182747]/50 rounded-[32px] p-6 sm:p-7 border border-[#D8D8D8] dark:border-white/10 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#182747]/5 dark:bg-white/10 text-[#182747] dark:text-white flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#562B08] dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#182747] dark:text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-[#647E68] dark:text-[#7b9980] font-semibold">
                        {skillsToRender.length} skills
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#182747]/70 dark:text-[#D8D8D8]/70 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Floating Skill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {skillsToRender.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#F6F6F6] dark:bg-white/10 text-[#182747] dark:text-[#D8D8D8] border border-[#D8D8D8] dark:border-white/10 hover:border-[#647E68] hover:bg-[#647E68]/10 transition-colors cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#647E68] dark:bg-[#7b9980]" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer indicator */}
                <div className="mt-6 pt-4 border-t border-[#D8D8D8]/50 dark:border-white/10 flex items-center justify-between text-[11px] text-[#182747]/60 dark:text-[#D8D8D8]/60 font-medium">
                  <span>Applied in practical projects</span>
                  <CheckCircle className="w-3.5 h-3.5 text-[#647E68] dark:text-[#7b9980]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
