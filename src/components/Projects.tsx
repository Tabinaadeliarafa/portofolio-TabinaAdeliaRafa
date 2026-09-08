import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, ArrowUpRight, Sparkles, Eye, Database, Server, Smartphone, LineChart, Code2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Backend Development', 'Data Engineering', 'Mobile Application'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <section id="projects" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Primary Section Container */}
      <div className="bg-white rounded-[36px] sm:rounded-[44px] border border-[#D8D8D8] p-6 sm:p-10 lg:p-14 shadow-[0_8px_30px_rgb(24,39,71,0.03)] relative overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#D8D8D8]/80">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-[#647E68]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#647E68]">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#182747] tracking-tight">
              Selected Projects
            </h2>
            <p className="text-sm sm:text-base text-[#182747]/75 mt-2 max-w-2xl">
              Real-world systems, architectural schemas, and full-stack solutions built with Golang, Laravel, Kimball Star Schemas, and modern database platforms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#182747] text-white shadow-xs'
                    : 'bg-[#F6F6F6] text-[#182747]/70 border border-[#D8D8D8] hover:border-[#182747] hover:text-[#182747]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Project 1: EcoTrack (Featured Bento Hero Card - Span 12 or 7 depending on filter) */}
          {filteredProjects.find((p) => p.id === 'ecotrack') && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-[#F6F6F6] rounded-[32px] sm:rounded-[36px] border border-[#D8D8D8] p-5 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Presentation Frame */}
                <div className="relative aspect-16/10 rounded-[26px] overflow-hidden bg-[#182747]/5 mb-5 shadow-2xs">
                  <img
                    src={filteredProjects.find((p) => p.id === 'ecotrack')!.image}
                    alt="EcoTrack Mobile App"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#182747]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Badges Over Image */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#182747] backdrop-blur-md shadow-xs flex items-center gap-1.5">
                      <Smartphone className="w-3 h-3 text-[#647E68]" />
                      <span>Mobile App Backend</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#647E68] text-white shadow-xs">
                      Featured
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProject(filteredProjects.find((p) => p.id === 'ecotrack')!)}
                    className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-[#182747] text-xs font-bold shadow-md hover:bg-[#182747] hover:text-white transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect System</span>
                  </button>
                </div>

                {/* Content */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#647E68]">
                    Golang • REST API • Deepseek AI
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#182747] tracking-tight mb-2 group-hover:text-[#562B08] transition-colors">
                  EcoTrack
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#562B08] mb-3">
                  Smart energy & IoT usage tracking with AI insights
                </p>
                <p className="text-xs sm:text-sm text-[#182747]/80 leading-relaxed mb-5">
                  Engineered high-concurrency REST endpoints in Golang for email verification, device telemetry, authentication, account management, and group management with Deepseek AI analytics.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Golang', 'REST API', 'PostgreSQL', 'Deepseek AI', 'IoT Telemetry'].map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white text-[#182747] border border-[#D8D8D8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-[#D8D8D8]/60 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(filteredProjects.find((p) => p.id === 'ecotrack')!)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#182747] hover:text-[#562B08] transition-colors cursor-pointer py-1"
                >
                  <span>View Architectural Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={filteredProjects.find((p) => p.id === 'ecotrack')!.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white text-[#182747] hover:bg-[#182747] hover:text-white transition-colors border border-[#D8D8D8] shadow-2xs"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          )}

          {/* Project 2 & 3 in the remaining Bento area */}
          <div className={`flex flex-col gap-6 ${filteredProjects.length === 1 ? 'lg:col-span-12' : 'lg:col-span-5'}`}>
            {/* Project 2: IMDb Warehouse */}
            {filteredProjects.find((p) => p.id === 'imdb-warehouse') && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#F6F6F6] rounded-[32px] sm:rounded-[36px] border border-[#D8D8D8] p-5 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-16/9 rounded-[22px] overflow-hidden bg-[#182747]/5 mb-4 shadow-2xs">
                    <img
                      src={filteredProjects.find((p) => p.id === 'imdb-warehouse')!.image}
                      alt="IMDb Film Trends Data Warehouse"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#182747]/50 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#182747] backdrop-blur-md shadow-xs flex items-center gap-1.5">
                        <Database className="w-3 h-3 text-[#647E68]" />
                        <span>Data Warehouse</span>
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedProject(filteredProjects.find((p) => p.id === 'imdb-warehouse')!)}
                      className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[#182747] text-[11px] font-bold shadow-md hover:bg-[#182747] hover:text-white transition-all cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Inspect</span>
                    </button>
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#647E68] mb-1">
                    Kimball Star Schema • SSIS • OLAP
                  </p>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#182747] tracking-tight mb-1 group-hover:text-[#562B08] transition-colors">
                    IMDb Film Trends Data Warehouse
                  </h3>
                  <p className="text-xs font-semibold text-[#562B08] mb-2">
                    Multidimensional OLAP analysis & dimensional modeling
                  </p>
                  <p className="text-xs text-[#182747]/80 leading-relaxed mb-4">
                    Extracted IMDb Top 1000 datasets, built SSIS ETL pipelines, modeled star schema dimensional cubes, and delivered Power BI intelligence dashboards.
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {['SSIS', 'Star Schema', 'OLAP', 'Power BI'].map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white text-[#182747] border border-[#D8D8D8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#D8D8D8]/60 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(filteredProjects.find((p) => p.id === 'imdb-warehouse')!)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#182747] hover:text-[#562B08] transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={filteredProjects.find((p) => p.id === 'imdb-warehouse')!.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white text-[#182747] hover:bg-[#182747] hover:text-white transition-colors border border-[#D8D8D8]"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            )}

            {/* Project 3: TeraZ */}
            {filteredProjects.find((p) => p.id === 'teraz') && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-[#F6F6F6] rounded-[32px] sm:rounded-[36px] border border-[#D8D8D8] p-5 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-16/9 rounded-[22px] overflow-hidden bg-[#182747]/5 mb-4 shadow-2xs">
                    <img
                      src={filteredProjects.find((p) => p.id === 'teraz')!.image}
                      alt="TeraZ Boarding House Search Platform"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#182747]/50 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#182747] backdrop-blur-md shadow-xs flex items-center gap-1.5">
                        <Server className="w-3 h-3 text-[#182747]" />
                        <span>Web Platform</span>
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedProject(filteredProjects.find((p) => p.id === 'teraz')!)}
                      className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[#182747] text-[11px] font-bold shadow-md hover:bg-[#182747] hover:text-white transition-all cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Inspect</span>
                    </button>
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#647E68] mb-1">
                    Laravel • PHP • PostgreSQL
                  </p>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#182747] tracking-tight mb-1 group-hover:text-[#562B08] transition-colors">
                    TeraZ
                  </h3>
                  <p className="text-xs font-semibold text-[#562B08] mb-2">
                    Boarding house search platform with full property management
                  </p>
                  <p className="text-xs text-[#182747]/80 leading-relaxed mb-4">
                    Architected backend logic, RESTful APIs, and relational schemas in PostgreSQL for property listings, role permissions, and geolocation search.
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {['Laravel', 'PHP', 'PostgreSQL', 'REST API'].map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white text-[#182747] border border-[#D8D8D8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#D8D8D8]/60 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(filteredProjects.find((p) => p.id === 'teraz')!)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#182747] hover:text-[#562B08] transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={filteredProjects.find((p) => p.id === 'teraz')!.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white text-[#182747] hover:bg-[#182747] hover:text-white transition-colors border border-[#D8D8D8]"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            )}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
