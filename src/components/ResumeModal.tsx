import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Copy, Check, Download, Mail, MapPin, ExternalLink, Calendar, Award } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, ORGANIZATIONS, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const text = `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}\nEducation: ${PERSONAL_INFO.university} (${PERSONAL_INFO.degree}, GPA ${PERSONAL_INFO.gpa})\nEmail: ${PERSONAL_INFO.email}\nLinkedIn: ${PERSONAL_INFO.linkedin}\nGitHub: ${PERSONAL_INFO.github}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#182747]/75 dark:bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white dark:bg-[#0f1a30] rounded-[36px] shadow-2xl border border-[#D8D8D8] dark:border-white/15 overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col text-left transition-colors"
        >
          {/* Action Bar */}
          <div className="p-4 sm:px-8 sm:py-4 bg-[#F6F6F6] dark:bg-[#182747]/60 border-b border-[#D8D8D8] dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#647E68]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#182747] dark:text-white">
                Verified Digital Resume
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopySummary}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/10 border border-[#D8D8D8] dark:border-white/15 text-xs font-semibold text-[#182747] dark:text-white hover:bg-[#D8D8D8]/30 dark:hover:bg-white/20 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#647E68]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Overview'}</span>
              </button>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#182747] dark:bg-[#647E68] text-white text-xs font-semibold hover:bg-[#562B08] dark:hover:bg-[#562B08] transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white dark:bg-white/10 hover:bg-[#D8D8D8] dark:hover:bg-white/20 text-[#182747] dark:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable / Viewable Resume Document */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans">
            {/* Header */}
            <div className="border-b border-[#D8D8D8] dark:border-white/10 pb-6">
              <h1 className="text-3xl sm:text-4xl font-black text-[#182747] dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base font-bold text-[#562B08] dark:text-amber-300 mt-1">
                {PERSONAL_INFO.role} • {PERSONAL_INFO.interests}
              </p>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#182747]/75 dark:text-[#D8D8D8]/75 mt-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#647E68]" />
                  {PERSONAL_INFO.location}
                </span>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#182747] dark:text-white hover:underline">
                  {PERSONAL_INFO.email}
                </a>
                <span>•</span>
                <span>{PERSONAL_INFO.phone}</span>
                <span>•</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#182747] dark:text-white hover:underline">
                  LinkedIn
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#182747] dark:text-white hover:underline">
                  GitHub
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#562B08] dark:text-amber-400 mb-2">
                Professional Profile
              </h2>
              <p className="text-sm text-[#182747]/85 dark:text-[#D8D8D8]/85 leading-relaxed">
                {PERSONAL_INFO.aboutDescription}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#562B08] dark:text-amber-400 mb-3">
                Education
              </h2>
              <div className="bg-[#F6F6F6] dark:bg-white/5 p-4 rounded-2xl border border-[#D8D8D8] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-[#182747] dark:text-white">{PERSONAL_INFO.university}</h3>
                  <p className="text-xs text-[#182747]/80 dark:text-[#D8D8D8]/80">{PERSONAL_INFO.degree}</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#647E68]/20 dark:bg-[#647E68]/30 text-[#647E68] dark:text-[#7b9980]">
                    GPA: {PERSONAL_INFO.gpa}
                  </span>
                  <p className="text-[11px] text-[#182747]/60 dark:text-[#D8D8D8]/60 mt-0.5">{PERSONAL_INFO.educationPeriod}</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#562B08] dark:text-amber-400 mb-4">
                Work & Educational Experience
              </h2>
              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-[#182747] dark:border-[#647E68] pl-4 py-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-sm font-bold text-[#182747] dark:text-white">{exp.role}</h3>
                      <span className="text-xs text-[#182747]/60 dark:text-[#D8D8D8]/60 font-semibold">{exp.period}</span>
                    </div>
                    <p className="text-xs font-bold text-[#562B08] dark:text-amber-300 mb-1.5">{exp.company}</p>
                    <p className="text-xs text-[#182747]/80 dark:text-[#D8D8D8]/80 mb-2">{exp.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-[#182747]/80 dark:text-[#D8D8D8]/80">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizational Leadership */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#562B08] dark:text-amber-400 mb-4">
                Organizational & Leadership Experience
              </h2>
              <div className="space-y-4">
                {ORGANIZATIONS.map((org) => (
                  <div key={org.id} className="border-l-2 border-[#647E68] pl-4 py-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-sm font-bold text-[#182747] dark:text-white">{org.role}</h3>
                      <span className="text-xs text-[#182747]/60 dark:text-[#D8D8D8]/60 font-semibold">{org.period}</span>
                    </div>
                    <p className="text-xs font-bold text-[#647E68] dark:text-[#7b9980] mb-1.5">{org.organization}</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-[#182747]/80 dark:text-[#D8D8D8]/80">
                      {org.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#562B08] dark:text-amber-400 mb-3">
                Skills & Technical Proficiencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="p-3 bg-[#F6F6F6] dark:bg-white/5 rounded-xl border border-[#D8D8D8] dark:border-white/10">
                    <span className="font-bold text-[#182747] dark:text-white block mb-1">{cat.title}:</span>
                    <span className="text-[#182747]/80 dark:text-[#D8D8D8]/80">{cat.skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
