import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  ArrowUpRight, 
  Sparkles, 
  Eye, 
  Database, 
  Server, 
  Smartphone, 
  MapPin, 
  Layers, 
  AlertTriangle, 
  TrendingUp, 
  ShieldAlert, 
  BarChart3, 
  Map as MapIcon, 
  Compass,
  FileCheck2,
  GraduationCap
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeGisTab, setActiveGisTab] = useState<'map' | 'analytics'>('map');
  const [activeRiskFilter, setActiveRiskFilter] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');

  const categories = [
    'All', 
    'Geographic Information System', 
    'Backend Development', 
    'Data Engineering', 
    'Mobile Application'
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Geographic Information System') {
      return p.category.toLowerCase().includes('geographic') || p.category.toLowerCase().includes('gis');
    }
    return p.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  const thesisProject = PROJECTS.find((p) => p.id === 'disaster-gis') || PROJECTS[0];

  // Disaster risk zones data for Kabupaten Bekasi GIS visualization
  const bekasiZones = [
    { name: 'Tambun Selatan', risk: 'High', type: 'Banjir (Flood)', events: 42, color: '#DC2626' },
    { name: 'Babelan', risk: 'High', type: 'Rob & Banjir', events: 38, color: '#DC2626' },
    { name: 'Cikarang Utara', risk: 'Medium', type: 'Cuaca Ekstrem', events: 19, color: '#D97706' },
    { name: 'Cibitung', risk: 'Medium', type: 'Genangan Air', events: 14, color: '#D97706' },
    { name: 'Cikarang Pusat', risk: 'Low', type: 'Tanah Longsor Minimal', events: 5, color: '#16A34A' },
  ];

  const filteredZones = activeRiskFilter === 'All' 
    ? bekasiZones 
    : bekasiZones.filter(z => z.risk === activeRiskFilter);

  return (
    <section id="projects" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Primary Section Container */}
      <div className="bg-white/90 dark:bg-[#0f1a30]/80 rounded-[36px] sm:rounded-[44px] border border-[#D8D8D8] dark:border-[#D8D8D8]/15 p-6 sm:p-10 lg:p-14 shadow-[0_12px_40px_rgb(24,39,71,0.04)] relative overflow-hidden backdrop-blur-xl transition-colors duration-300">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#647E68]/15 dark:bg-[#647E68]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#562B08]/10 dark:bg-[#562B08]/15 blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#D8D8D8]/80 dark:border-[#D8D8D8]/20 relative z-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-px w-8 bg-[#647E68] dark:bg-[#7b9980]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#647E68] dark:text-[#7b9980]">
                Engineering & Research Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#182747] dark:text-white tracking-tight">
              Selected Projects
            </h2>
            <p className="text-sm sm:text-base text-[#182747]/75 dark:text-[#D8D8D8]/80 mt-2 max-w-2xl">
              From academic thesis research in Web GIS disaster spatial analysis to enterprise data warehouses and concurrent backend microservices.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  id={`project-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#182747] dark:bg-[#647E68] text-white shadow-xs'
                      : 'bg-[#F6F6F6] dark:bg-white/10 text-[#182747]/70 dark:text-[#D8D8D8]/70 border border-[#D8D8D8] dark:border-[#D8D8D8]/20 hover:border-[#182747] dark:hover:border-white/30 hover:text-[#182747] dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================ */}
        {/* 1. FEATURED UNDERGRADUATE THESIS PROJECT CARD (BENTO HERO)        */}
        {/* ================================================================ */}
        {(activeCategory === 'All' || activeCategory === 'Geographic Information System') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12
              bg-white/70 dark:bg-[#0f1a30]/75 backdrop-blur-2xl
              border border-white/80 dark:border-white/10
              shadow-[0_20px_50px_rgba(24,39,71,0.07),inset_0_1.5px_2px_rgba(255,255,255,0.85)]
              dark:shadow-[0_25px_60px_rgba(0,0,0,0.5),inset_0_1.5px_2px_rgba(255,255,255,0.12)]
              ring-1 ring-black/5 dark:ring-white/5 relative overflow-hidden"
          >
            {/* Top Specular Sheen */}
            <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent pointer-events-none" />

            {/* Thesis Category Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#D8D8D8]/70 dark:border-[#D8D8D8]/20">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#647E68] text-white shadow-xs">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Undergraduate Thesis Project</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#182747]/10 dark:bg-white/10 text-[#182747] dark:text-white border border-[#182747]/15 dark:border-white/15">
                  <MapIcon className="w-3.5 h-3.5 text-[#647E68] dark:text-[#7b9980]" />
                  <span>Kabupaten Bekasi Web GIS</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-[#562B08] dark:text-amber-400 bg-[#562B08]/10 dark:bg-amber-400/10 px-3 py-1 rounded-full border border-[#562B08]/20 dark:border-amber-400/20">
                  Lead Engineering Researcher
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-start">
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#182747] dark:text-white tracking-tight leading-snug mb-3">
                  {thesisProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#647E68] dark:text-[#7b9980] uppercase tracking-wider mb-4">
                  {thesisProject.category}
                </p>
                <p className="text-sm sm:text-base text-[#182747]/85 dark:text-[#D8D8D8]/90 leading-relaxed mb-6">
                  {thesisProject.description}
                </p>

                {/* Key Research Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {thesisProject.highlights.slice(0, 6).map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-2.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-[#D8D8D8]/70 dark:border-white/10 text-xs text-[#182747]/90 dark:text-[#D8D8D8]"
                    >
                      <FileCheck2 className="w-3.5 h-3.5 text-[#647E68] dark:text-[#7b9980] shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#182747]/60 dark:text-[#D8D8D8]/60 mr-1">
                    Technologies:
                  </span>
                  {thesisProject.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 dark:bg-white/10 border border-[#D8D8D8] dark:border-white/10 text-[#182747] dark:text-[#D8D8D8] shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive GIS Visual Concept Preview Panel (Right Span 5) */}
              <div className="lg:col-span-5 bg-white/90 dark:bg-white/5 rounded-3xl border border-[#D8D8D8]/80 dark:border-white/10 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                <div>
                  {/* GIS Preview Tab Bar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D8D8D8]/70 dark:border-white/10">
                    <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#F6F6F6] dark:bg-white/10 border border-[#D8D8D8]/60 dark:border-white/10 text-[11px] font-bold">
                      <button
                        onClick={() => setActiveGisTab('map')}
                        className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                          activeGisTab === 'map'
                            ? 'bg-[#182747] dark:bg-[#647E68] text-white shadow-2xs'
                            : 'text-[#182747]/70 dark:text-[#D8D8D8]/70'
                        }`}
                      >
                        Spatial Map View
                      </button>
                      <button
                        onClick={() => setActiveGisTab('analytics')}
                        className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                          activeGisTab === 'analytics'
                            ? 'bg-[#182747] dark:bg-[#647E68] text-white shadow-2xs'
                            : 'text-[#182747]/70 dark:text-[#D8D8D8]/70'
                        }`}
                      >
                        Analytics & Trends
                      </button>
                    </div>

                    <span className="text-[10px] font-mono text-[#647E68] dark:text-[#7b9980] font-bold">
                      EPSG:4326 (WGS84)
                    </span>
                  </div>

                  {/* Tab 1: GIS Map View */}
                  {activeGisTab === 'map' ? (
                    <div>
                      {/* Interactive Risk Level Filter */}
                      <div className="flex items-center justify-between mb-3 text-[11px]">
                        <span className="font-bold text-[#182747]/70 dark:text-[#D8D8D8]/70">
                          Risk Severity:
                        </span>
                        <div className="flex gap-1">
                          {(['All', 'High', 'Medium', 'Low'] as const).map((lvl) => (
                            <button
                              key={lvl}
                              onClick={() => setActiveRiskFilter(lvl)}
                              className={`px-2 py-0.5 rounded-md font-bold text-[10px] transition-all cursor-pointer ${
                                activeRiskFilter === lvl
                                  ? lvl === 'High'
                                    ? 'bg-red-500 text-white'
                                    : lvl === 'Medium'
                                    ? 'bg-amber-500 text-white'
                                    : lvl === 'Low'
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-[#182747] dark:bg-white/20 text-white'
                                  : 'bg-[#F6F6F6] dark:bg-white/5 text-[#182747]/70 dark:text-[#D8D8D8]/70'
                              }`}
                            >
                              {lvl}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Map Visual Frame */}
                      <div className="relative aspect-16/10 rounded-2xl overflow-hidden border border-[#D8D8D8]/80 dark:border-white/10 mb-4 bg-[#182747]">
                        <img
                          src={thesisProject.image}
                          alt="Web GIS Disaster Visualization Map"
                          className="w-full h-full object-cover opacity-85"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#182747]/80 via-transparent to-transparent pointer-events-none" />

                        {/* Map Overlay HUD */}
                        <div className="absolute top-2.5 left-2.5 bg-black/65 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
                          <Compass className="w-3 h-3 text-[#647E68]" />
                          <span>Kabupaten Bekasi (107.16°E, 6.24°S)</span>
                        </div>

                        {/* Interactive Markers Overlay */}
                        <div className="absolute inset-0 p-4 pointer-events-none flex flex-col justify-between">
                          <div className="flex justify-end gap-1">
                            <span className="px-2 py-0.5 rounded-md bg-red-600/90 text-white text-[9px] font-bold">
                              High Risk (Banjir)
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-amber-600/90 text-white text-[9px] font-bold">
                              Medium (Angin)
                            </span>
                          </div>

                          <div className="bg-white/95 dark:bg-[#0f1a30]/95 backdrop-blur-md p-2.5 rounded-xl border border-black/10 dark:border-white/10 text-[11px] shadow-md pointer-events-auto">
                            <div className="flex items-center justify-between font-bold text-[#182747] dark:text-white">
                              <span className="flex items-center gap-1">
                                <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                                Zone: Tambun Selatan
                              </span>
                              <span className="text-red-500 font-extrabold">42 Records</span>
                            </div>
                            <p className="text-[10px] text-[#182747]/70 dark:text-[#D8D8D8]/70 mt-0.5">
                              Historical flood inundation depth 0.6m – 1.8m
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Filtered Zones List */}
                      <div className="space-y-1.5">
                        {filteredZones.map((z, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-[#F6F6F6] dark:bg-white/5 border border-[#D8D8D8]/60 dark:border-white/10 text-xs"
                          >
                            <span className="font-semibold text-[#182747] dark:text-white flex items-center gap-1.5">
                              <span
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: z.color }}
                              />
                              {z.name}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-[#182747]/60 dark:text-[#D8D8D8]/60">
                                {z.type}
                              </span>
                              <span className="font-bold text-[#182747] dark:text-white text-[11px]">
                                {z.events} events
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Tab 2: Disaster Analytics & Prediction HUD */
                    <div className="space-y-3">
                      <div className="p-3 rounded-2xl bg-[#F6F6F6] dark:bg-white/5 border border-[#D8D8D8]/60 dark:border-white/10">
                        <div className="flex items-center justify-between text-xs font-bold text-[#182747] dark:text-white mb-2">
                          <span className="flex items-center gap-1.5">
                            <TrendingUp className="w-3.5 h-3.5 text-[#647E68]" />
                            Disaster Distribution by Type
                          </span>
                          <span className="text-[#647E68] text-[11px]">Kab. Bekasi</span>
                        </div>
                        {/* Breakdown Bars */}
                        <div className="space-y-2 text-[11px]">
                          <div>
                            <div className="flex justify-between text-[#182747]/80 dark:text-[#D8D8D8] font-medium mb-1">
                              <span>Banjir / Water Inundation</span>
                              <span className="font-bold">62%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-red-500 rounded-full w-[62%]" />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[#182747]/80 dark:text-[#D8D8D8] font-medium mb-1">
                              <span>Cuaca Ekstrem / Wind Storms</span>
                              <span className="font-bold">24%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-amber-500 rounded-full w-[24%]" />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[#182747]/80 dark:text-[#D8D8D8] font-medium mb-1">
                              <span>Tanah Longsor / Soil Instability</span>
                              <span className="font-bold">9%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-[#562B08] dark:bg-amber-400 rounded-full w-[9%]" />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[#182747]/80 dark:text-[#D8D8D8] font-medium mb-1">
                              <span>Kekeringan / Drought Risk</span>
                              <span className="font-bold">5%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full w-[5%]" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Predictive Analysis Feature */}
                      <div className="p-3 rounded-2xl bg-[#647E68]/10 dark:bg-[#647E68]/20 border border-[#647E68]/30 text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-[#182747] dark:text-white mb-1">
                          <BarChart3 className="w-3.5 h-3.5 text-[#647E68] dark:text-[#7b9980]" />
                          <span>Predictive Modeling Engine</span>
                        </div>
                        <p className="text-[11px] text-[#182747]/80 dark:text-[#D8D8D8]/80 leading-relaxed">
                          Time-series regression predicting seasonal flood propensity based on monthly precipitation and river catchment elevation data.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Inspect Action */}
                <div className="pt-4 mt-4 border-t border-[#D8D8D8]/60 dark:border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(thesisProject)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#182747] dark:bg-[#647E68] text-white text-xs font-bold hover:bg-[#562B08] dark:hover:bg-[#562B08] transition-all shadow-xs cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Full Thesis Specification</span>
                  </button>

                  <a
                    href={thesisProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white dark:bg-white/10 text-[#182747] dark:text-white hover:bg-[#182747] hover:text-white transition-colors border border-[#D8D8D8] dark:border-white/15"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ================================================================ */}
        {/* 2. OTHER SELECTED PROJECTS (ECOTRACK, IMDB, TERAZ)               */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects
            .filter((p) => p.id !== 'disaster-gis')
            .map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/80 dark:bg-[#0f1a30]/70 rounded-[32px] sm:rounded-[36px] border border-[#D8D8D8] dark:border-white/10 p-5 sm:p-6 shadow-xs hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl"
              >
                <div>
                  {/* Visual Presentation Frame */}
                  <div className="relative aspect-16/10 rounded-[22px] overflow-hidden bg-[#182747]/5 dark:bg-white/5 mb-4 shadow-2xs">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#182747]/60 dark:from-[#0f1a30]/80 via-transparent to-transparent pointer-events-none" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 dark:bg-[#0f1a30]/95 text-[#182747] dark:text-[#D8D8D8] backdrop-blur-md shadow-xs flex items-center gap-1.5 border border-black/5 dark:border-white/10">
                        {project.id === 'ecotrack' && <Smartphone className="w-3 h-3 text-[#647E68]" />}
                        {project.id === 'imdb-warehouse' && <Database className="w-3 h-3 text-[#647E68]" />}
                        {project.id === 'teraz' && <Server className="w-3 h-3 text-[#562B08] dark:text-amber-400" />}
                        <span>{project.category}</span>
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#0f1a30]/95 text-[#182747] dark:text-white text-[11px] font-bold shadow-md hover:bg-[#182747] hover:text-white dark:hover:bg-[#647E68] transition-all cursor-pointer border border-black/5 dark:border-white/10"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Inspect</span>
                    </button>
                  </div>

                  {/* Project Info */}
                  <div className="mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#647E68] dark:text-[#7b9980]">
                      Role: {project.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#182747] dark:text-white tracking-tight mt-1 mb-1 group-hover:text-[#562B08] dark:group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#182747]/80 dark:text-[#D8D8D8]/85 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#F6F6F6] dark:bg-white/10 text-[#182747] dark:text-[#D8D8D8] border border-[#D8D8D8]/80 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="pt-3 border-t border-[#D8D8D8]/60 dark:border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#182747] dark:text-[#D8D8D8] hover:text-[#562B08] dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Architecture Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#F6F6F6] dark:bg-white/10 text-[#182747] dark:text-[#D8D8D8] hover:bg-[#182747] hover:text-white dark:hover:bg-white/20 transition-colors border border-[#D8D8D8] dark:border-white/10 shadow-2xs"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
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
