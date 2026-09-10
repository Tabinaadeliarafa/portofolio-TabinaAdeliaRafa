import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  FileText,
  ArrowUpRight,
  Sparkles,
  Send,
  Compass,
  User,
  Briefcase,
  Award,
  FolderGit2,
  Cpu,
  Mail,
  Sun,
  Moon,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        'hero',
        'about',
        'approach',
        'experience',
        'organization',
        'projects',
        'skills',
        'contact',
      ];

      const scrollPos = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about', icon: User },
    { label: 'Approach', href: '#approach', id: 'approach', icon: Compass },
    { label: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { label: 'Leadership', href: '#organization', id: 'organization', icon: Award },
    { label: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
    { label: 'Skills', href: '#skills', id: 'skills', icon: Cpu },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Floating Glass Bubble Navigation */}
      <header
        id="main-navbar"
        className={`fixed top-3 sm:top-5 inset-x-0 z-40 px-3 sm:px-6 pointer-events-none transition-all duration-500 ${
          scrolled ? 'translate-y-0' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">

          {/* Brand Glass Bubble */}
          <a
            href="#hero"
            id="brand-logo-link"
            className="
              group relative flex items-center gap-2.5
              px-3 sm:px-4 py-2 sm:py-2.5
              rounded-full
              bg-white/45 dark:bg-[#0f1a30]/45
              backdrop-blur-2xl backdrop-saturate-150
              border border-white/70 dark:border-white/15
              shadow-[0_8px_32px_rgba(24,39,71,0.10)]
              ring-1 ring-black/[0.03] dark:ring-white/[0.04]
              overflow-hidden
              hover:bg-white/60 dark:hover:bg-[#182747]/60
              hover:border-white/90 dark:hover:border-white/25
              hover:shadow-[0_12px_40px_rgba(24,39,71,0.16)]
              transition-all duration-300
            "
          >
            {/* Glass Highlight */}
            <span className="absolute inset-x-3 top-0 h-px bg-white/80 dark:bg-white/20 pointer-events-none" />

            <div className="relative w-8 h-8 rounded-full bg-[#182747] dark:bg-[#647E68] text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_4px_12px_rgba(24,39,71,0.18)] transition-transform duration-300 group-hover:scale-105">
              TAR
            </div>

            <div className="relative flex flex-col text-left">
              <span className="font-bold text-xs sm:text-sm tracking-tight text-[#182747] dark:text-[#D8D8D8] group-hover:text-[#562B08] dark:group-hover:text-white transition-colors leading-tight">
                {PERSONAL_INFO.name}
              </span>

              <span className="text-[10px] text-[#647E68] dark:text-[#7b9980] font-semibold tracking-wide hidden md:inline">
                Informatics Engineering • Unpad
              </span>
            </div>
          </a>

          {/* Center Glass Navigation Bubble */}
          <nav
            className="
              hidden lg:flex items-center gap-1
              bg-white/40 dark:bg-[#0f1a30]/45
              backdrop-blur-2xl backdrop-saturate-150
              p-1.5 rounded-full
              border border-white/70 dark:border-white/15
              shadow-[0_8px_32px_rgba(24,39,71,0.10)]
              ring-1 ring-black/[0.03] dark:ring-white/[0.04]
              relative overflow-hidden
            "
          >
            {/* Glass Highlight */}
            <span className="absolute inset-x-6 top-0 h-px bg-white/80 dark:bg-white/20 pointer-events-none" />

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-[#182747] dark:text-white font-bold'
                      : 'text-[#182747]/70 dark:text-[#D8D8D8]/70 hover:text-[#182747] dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/10'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="
                        absolute inset-0
                        bg-white/65 dark:bg-white/15
                        backdrop-blur-md
                        rounded-full
                        border border-white/80 dark:border-white/15
                        shadow-[inset_0_1px_2px_rgba(255,255,255,0.65),0_3px_10px_rgba(24,39,71,0.06)]
                        -z-10
                      "
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}

                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Glass Action Bubbles */}
          <div className="hidden sm:flex items-center gap-2">

            {/* Theme Toggle */}
            <button
              id="navbar-theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              className="
                inline-flex items-center gap-1.5
                px-3 py-2 rounded-full
                text-xs font-semibold
                bg-white/45 dark:bg-[#0f1a30]/45
                backdrop-blur-2xl backdrop-saturate-150
                border border-white/70 dark:border-white/15
                text-[#182747] dark:text-[#D8D8D8]
                hover:bg-white/65 dark:hover:bg-[#182747]/65
                hover:border-white/90 dark:hover:border-white/25
                shadow-[0_8px_28px_rgba(24,39,71,0.10)]
                ring-1 ring-black/[0.03] dark:ring-white/[0.04]
                transition-all duration-300
                cursor-pointer
              "
            >
              {theme === 'light' ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#182747]" />
                  <span className="hidden md:inline">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-300" />
                  <span className="hidden md:inline">Light</span>
                </>
              )}
            </button>

            {/* Resume */}
            <button
              id="navbar-resume-btn"
              onClick={onOpenResume}
              className="
                inline-flex items-center gap-1.5
                px-3.5 py-2 rounded-full
                text-xs font-semibold
                bg-white/45 dark:bg-[#0f1a30]/45
                backdrop-blur-2xl backdrop-saturate-150
                border border-white/70 dark:border-white/15
                text-[#182747] dark:text-[#D8D8D8]
                hover:bg-white/65 dark:hover:bg-[#182747]/65
                hover:border-white/90 dark:hover:border-white/25
                shadow-[0_8px_28px_rgba(24,39,71,0.10)]
                ring-1 ring-black/[0.03] dark:ring-white/[0.04]
                transition-all duration-300
                cursor-pointer
              "
            >
              <FileText className="w-3.5 h-3.5 text-[#562B08] dark:text-amber-400" />
              <span>Resume</span>
            </button>

            {/* Connect */}
            <a
              id="navbar-contact-cta"
              href="#contact"
              className="
                inline-flex items-center gap-1.5
                px-4 py-2 rounded-full
                text-xs font-semibold
                bg-[#182747]/90 dark:bg-[#647E68]/90
                backdrop-blur-xl
                border border-white/20
                text-white
                hover:bg-[#562B08]/95
                shadow-[0_8px_24px_rgba(24,39,71,0.20)]
                transition-all duration-300
                cursor-pointer
              "
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Glass Controls */}
          <div className="flex sm:hidden items-center gap-2">

            {/* Mobile Theme */}
            <button
              id="mobile-theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="
                relative p-2.5 rounded-full
                bg-white/50 dark:bg-[#0f1a30]/50
                backdrop-blur-2xl backdrop-saturate-150
                border border-white/70 dark:border-white/15
                text-[#182747] dark:text-[#D8D8D8]
                shadow-[0_8px_28px_rgba(24,39,71,0.12)]
                ring-1 ring-black/[0.03] dark:ring-white/[0.04]
                cursor-pointer
                transition-all duration-300
              "
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-[#182747]" />
              ) : (
                <Sun className="w-4 h-4 text-amber-300" />
              )}
            </button>

            {/* Mobile Resume */}
            <button
              id="mobile-resume-trigger"
              onClick={onOpenResume}
              className="
                relative p-2.5 rounded-full
                bg-white/50 dark:bg-[#0f1a30]/50
                backdrop-blur-2xl backdrop-saturate-150
                border border-white/70 dark:border-white/15
                text-[#182747] dark:text-[#D8D8D8]
                shadow-[0_8px_28px_rgba(24,39,71,0.12)]
                ring-1 ring-black/[0.03] dark:ring-white/[0.04]
                cursor-pointer
                transition-all duration-300
              "
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4 text-[#562B08] dark:text-amber-400" />
            </button>

            {/* Mobile Menu */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="
                relative p-2.5 rounded-full
                bg-white/50 dark:bg-[#0f1a30]/50
                backdrop-blur-2xl backdrop-saturate-150
                border border-white/70 dark:border-white/15
                text-[#182747] dark:text-[#D8D8D8]
                shadow-[0_8px_28px_rgba(24,39,71,0.12)]
                ring-1 ring-black/[0.03] dark:ring-white/[0.04]
                focus:outline-hidden
                cursor-pointer
                transition-all duration-300
              "
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Glass Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="
              fixed inset-x-4 top-18 z-50
              bg-white/55 dark:bg-[#0f1a30]/60
              backdrop-blur-3xl backdrop-saturate-150
              border border-white/70 dark:border-white/15
              rounded-[32px]
              p-5
              shadow-[0_20px_60px_rgba(24,39,71,0.18)]
              ring-1 ring-black/[0.03] dark:ring-white/[0.04]
              sm:hidden
              text-left
              overflow-hidden
            "
            id="mobile-nav-drawer"
          >
            {/* Glass highlight */}
            <span className="absolute inset-x-8 top-0 h-px bg-white/90 dark:bg-white/20 pointer-events-none" />

            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/60 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#647E68] shadow-[0_0_10px_rgba(100,126,104,0.45)]" />

                <span className="text-xs font-bold uppercase tracking-wider text-[#182747] dark:text-[#D8D8D8]">
                  Navigation Menu
                </span>
              </div>

              <span className="text-[11px] text-[#647E68] dark:text-[#7b9980] font-bold">
                {activeSection.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 pb-4 mb-4 border-b border-white/60 dark:border-white/10">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;

                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#182747]/90 dark:bg-[#647E68]/90 text-white font-bold shadow-[0_5px_16px_rgba(24,39,71,0.15)]'
                        : 'text-[#182747] dark:text-[#D8D8D8] hover:bg-white/50 dark:hover:bg-white/10'
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 ${
                        isActive
                          ? 'text-white'
                          : 'text-[#562B08] dark:text-amber-400'
                      }`}
                    />

                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="
                  w-full py-2.5 px-4
                  rounded-2xl
                  text-xs font-bold
                  border border-white/70 dark:border-white/15
                  bg-white/40 dark:bg-white/10
                  backdrop-blur-xl
                  text-[#182747] dark:text-[#D8D8D8]
                  flex items-center justify-center gap-2
                  cursor-pointer
                  transition-all duration-300
                  hover:bg-white/60 dark:hover:bg-white/15
                "
              >
                <FileText className="w-4 h-4 text-[#562B08] dark:text-amber-400" />
                <span>View Full Resume & Credentials</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="
                  w-full py-2.5 px-4
                  rounded-2xl
                  text-xs font-bold
                  bg-[#182747]/90 dark:bg-[#647E68]/90
                  backdrop-blur-xl
                  text-white
                  flex items-center justify-center gap-2
                  shadow-[0_8px_20px_rgba(24,39,71,0.18)]
                "
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bottom Glass Dock for Mobile */}
      <div className="fixed bottom-4 inset-x-0 z-30 flex justify-center pointer-events-none sm:hidden px-4">
        <div
          className="
            pointer-events-auto
            bg-[#182747]/75 dark:bg-[#0f1a30]/75
            backdrop-blur-2xl backdrop-saturate-150
            text-white
            px-3 py-1.5
            rounded-full
            shadow-[0_10px_35px_rgba(24,39,71,0.28)]
            border border-white/20 dark:border-white/10
            flex items-center gap-1.5
          "
        >
          <a
            href="#hero"
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-colors ${
              activeSection === 'hero'
                ? 'bg-white/20 text-white font-bold'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Home
          </a>

          <a
            href="#about"
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-colors ${
              activeSection === 'about'
                ? 'bg-white/20 text-white font-bold'
                : 'text-white/70 hover:text-white'
            }`}
          >
            About
          </a>

          <a
            href="#experience"
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-colors ${
              activeSection === 'experience'
                ? 'bg-white/20 text-white font-bold'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Career
          </a>

          <a
            href="#projects"
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-colors ${
              activeSection === 'projects'
                ? 'bg-white/20 text-white font-bold'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Projects
          </a>

          <a
            href="#contact"
            className="
              text-[11px] font-bold
              px-3 py-1
              rounded-full
              bg-[#647E68]
              text-white
              flex items-center gap-1
              shadow-[0_4px_14px_rgba(100,126,104,0.35)]
            "
          >
            <Sparkles className="w-3 h-3" />
            <span>Connect</span>
          </a>
        </div>
      </div>
    </>
  );
}