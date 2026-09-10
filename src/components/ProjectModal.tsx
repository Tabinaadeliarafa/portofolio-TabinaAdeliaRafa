import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#182747]/80 dark:bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#0f1a30] rounded-[36px] shadow-2xl border border-[#D8D8D8] dark:border-[#D8D8D8]/20 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col text-left transition-colors"
        >
          {/* Header image & close button */}
          <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#182747]/10 dark:bg-white/5 shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#182747] dark:from-[#0f1a30] via-[#182747]/40 dark:via-[#0f1a30]/60 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 dark:bg-white/15 hover:bg-white dark:hover:bg-white/25 text-[#182747] dark:text-white backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer shadow-md"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title & Category over image */}
            <div className="absolute bottom-5 inset-x-6 text-white">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#647E68] text-white shadow-xs">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-medium mt-1">
                Role: <span className="text-[#D8D8D8] font-bold">{project.role}</span>
              </p>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#562B08] dark:text-amber-400 mb-2 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#562B08] dark:text-amber-400" />
                <span>Project Overview</span>
              </h4>
              <p className="text-sm sm:text-base text-[#182747]/85 dark:text-[#D8D8D8]/90 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Architecture Details if provided */}
            {project.architectureDetails && (
              <div className="bg-[#F6F6F6] dark:bg-white/5 p-5 rounded-2xl border border-[#D8D8D8] dark:border-white/10">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#182747] dark:text-white mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#647E68] dark:text-[#7b9980]" />
                  <span>Technical Architecture & Stack</span>
                </h5>
                <p className="text-xs sm:text-sm text-[#182747]/80 dark:text-[#D8D8D8]/80 mb-3">
                  {project.architectureDetails.overview}
                </p>
                <div className="p-3 bg-white dark:bg-[#182747]/60 rounded-xl border border-[#D8D8D8] dark:border-white/10 font-mono text-xs text-[#182747] dark:text-[#D8D8D8] font-medium">
                  <span className="text-[#647E68] dark:text-[#7b9980] font-bold">Stack: </span>
                  {project.architectureDetails.schemaOrStack}
                </div>
              </div>
            )}

            {/* Highlights List */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#182747]/70 dark:text-[#D8D8D8]/70 mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#647E68] dark:text-[#7b9980]" />
                <span>Key Engineering Highlights</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs sm:text-sm text-[#182747]/90 dark:text-[#D8D8D8] bg-white dark:bg-white/5 p-3 rounded-xl border border-[#D8D8D8]/70 dark:border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#647E68] dark:text-[#7b9980] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology tags */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#182747]/70 dark:text-[#D8D8D8]/70 mb-2.5">
                Technologies & Tools Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-[#182747]/5 dark:bg-white/10 text-[#182747] dark:text-[#D8D8D8] border border-[#182747]/15 dark:border-white/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions inside modal */}
            <div className="pt-4 border-t border-[#D8D8D8] dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#182747] dark:bg-[#647E68] text-white text-xs font-bold hover:bg-[#562B08] dark:hover:bg-[#562B08] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              ) : (
                <div />
              )}

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-[#D8D8D8] dark:border-white/20 text-xs font-semibold text-[#182747] dark:text-[#D8D8D8] hover:bg-[#F6F6F6] dark:hover:bg-white/10 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
