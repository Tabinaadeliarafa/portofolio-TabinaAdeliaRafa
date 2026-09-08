import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#D8D8D8] bg-[#F6F6F6] py-14 px-4 sm:px-6 lg:px-12 text-[#182747]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Column: Brand & Role */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg bg-[#182747] text-white flex items-center justify-center font-bold text-xs">
              TAR
            </div>
            <span className="font-extrabold text-lg text-[#182747] tracking-tight">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-[#182747]/70 font-medium">
            {PERSONAL_INFO.role} • {PERSONAL_INFO.university}
          </p>
          <p className="text-xs text-[#647E68] font-bold mt-1 tracking-wider">
            “{PERSONAL_INFO.badgeTagline}”
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-full bg-white border border-[#D8D8D8] text-[#182747] hover:bg-[#182747] hover:text-white transition-colors shadow-2xs"
            aria-label="Email Tabina"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white border border-[#D8D8D8] text-[#182747] hover:bg-[#182747] hover:text-white transition-colors shadow-2xs"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white border border-[#D8D8D8] text-[#182747] hover:bg-[#182747] hover:text-white transition-colors shadow-2xs"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
          <p className="text-xs text-[#182747]/60">
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#182747] hover:text-[#562B08] transition-colors cursor-pointer py-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
