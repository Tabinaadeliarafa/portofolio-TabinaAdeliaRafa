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
import { useTheme } from '../hooks/useTheme';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'approach', 'experience', 'organization', 'projects', 'skills', 'contact'];
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

  // Shared "liquid glass" treatment: translucent, saturated blur, a hairline
  // border that catches light, and a soft inner highlight like real glass.
  // Bubbles get slightly denser + a stronger shadow once the page is scrolled.
  const glassPill = `${
    scrolled
      ? 'bg-white/60 dark:bg-navy-dark/60 border-white/70 dark:border-white/10'
      : 'bg-white/35 dark:bg-navy-dark/35 border-white/50 dark:border-white/10'
  } backdrop-blur-2xl backdrop-saturate-150 border shadow-[0_8px_32px_rgba(24,39,71,0.10),inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors duration-300`;

  const glassButton = `bg-white/45 dark:bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/60 dark:border-white/10 shadow-[0_4px_20px_rgba(24,39,71,0.08),inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors duration-300`;

  const ThemeToggleButton = ({
    className = '',
    size = 'w-4 h-4',
  }: {
    className?: string;
    size?: string;
  }) => (
    <button
      id="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className={`relative overflow-hidden rounded-full text-[#182747] dark:text-white hover:border-[#182747]/40 dark:hover:border-white/30 transition-all cursor-pointer ${glassButton} ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            <Sun className={`${size} text-amber-300`} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            <Moon className={`${size} text-[#562B08]`} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );

  return (
    <>
      {/* Desktop Floating Pill Navigation (Liquid Glass Capsule) */}
      <header
        id="main-navbar"
        className="fixed top-3 sm:top-5 inset-x-0 z-40 px-3 sm:px-6 pointer-events-none transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand Pill */}
          <a
            href="#hero"
            id="brand-logo-link"
            className={`group flex items-center gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full hover:border-[#182747]/40 dark:hover:border-white/30 hover:shadow-md ${glassPill}`}
          >
            <div className="w-8 h-8 rounded-full bg-[#182747] dark:bg-white text-white dark:text-[#0f1a30] flex items-center justify-center font-bold text-xs tracking-wider shadow-xs transition-transform duration-300 group-hover:scale-105">
              TAR
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-xs sm:text-sm tracking-tight text-[#182747] dark:text-white group-hover:text-[#562B08] dark:group-hover:text-amber-300 transition-colors leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] text-[#647E68] dark:text-[#9db3a2] font-semibold tracking-wide hidden md:inline">
                Informatics Engineering • Unpad
              </span>
            </div>
          </a>

          {/* Centered Floating Nav Capsule (Desktop) */}
          <nav className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full ${glassPill}`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#182747] dark:text-white font-bold'
                      : 'text-[#182747]/70 dark:text-white/60 hover:text-[#182747] dark:hover:text-white hover:bg-black/4 dark:hover:bg-white/10'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/80 dark:bg-white/15 rounded-full border border-white/80 dark:border-white/10 shadow-2xs -z-10"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Capsule */}
          <div className="hidden sm:flex items-center gap-2">
            <ThemeToggleButton className="p-2.5" />
            <button
              id="navbar-resume-btn"
              onClick={onOpenResume}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-[#182747] dark:text-white hover:border-[#182747] dark:hover:border-white/40 hover:bg-white/60 dark:hover:bg-white/15 transition-all cursor-pointer ${glassButton}`}
            >
              <FileText className="w-3.5 h-3.5 text-[#562B08] dark:text-amber-300" />
              <span>Resume</span>
            </button>
            <a
              id="navbar-contact-cta"
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#182747] dark:bg-white text-white dark:text-[#0f1a30] hover:bg-[#562B08] dark:hover:bg-amber-300 transition-all cursor-pointer shadow-[0_4px_16px_rgb(24,39,71,0.18)]"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggleButton className="p-2.5" />
            <button
              id="mobile-resume-trigger"
              onClick={onOpenResume}
              className={`p-2.5 rounded-full text-[#182747] dark:text-white ${glassButton}`}
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4 text-[#562B08] dark:text-amber-300" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-full text-[#182747] dark:text-white focus:outline-hidden ${glassButton}`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Top Dropdown Drawer (Liquid Glass Card) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-4 top-18 z-50 bg-white/70 dark:bg-navy-dark/70 backdrop-blur-2xl backdrop-saturate-150 border border-white/60 dark:border-white/10 rounded-[32px] p-5 shadow-[0_16px_48px_rgba(24,39,71,0.16),inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] sm:hidden text-left"
            id="mobile-nav-drawer"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D8D8D8]/70 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#647E68] dark:bg-[#9db3a2]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#182747] dark:text-white">
                  Navigation Menu
                </span>
              </div>
              <span className="text-[11px] text-[#647E68] dark:text-[#9db3a2] font-bold">
                {activeSection.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 pb-4 mb-4 border-b border-[#D8D8D8]/70 dark:border-white/10">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-[#182747] dark:bg-white/15 text-white dark:text-white font-bold border border-transparent dark:border-white/20'
                        : 'text-[#182747] dark:text-white/80 hover:bg-[#F6F6F6] dark:hover:bg-white/10'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#562B08] dark:text-amber-300'}`} />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={toggleTheme}
                className="w-full py-2.5 px-4 rounded-2xl text-xs font-bold border border-[#D8D8D8]/70 dark:border-white/10 bg-[#F6F6F6]/80 dark:bg-white/10 text-[#182747] dark:text-white flex items-center justify-center gap-2"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4 text-[#562B08]" />
                )}
                <span>{isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-4 rounded-2xl text-xs font-bold border border-[#D8D8D8]/70 dark:border-white/10 bg-[#F6F6F6]/80 dark:bg-white/10 text-[#182747] dark:text-white flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#562B08] dark:text-amber-300" />
                <span>View Full Resume & Credentials</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-2xl text-xs font-bold bg-[#182747] dark:bg-white text-white dark:text-[#0f1a30] flex items-center justify-center gap-2 shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bottom App Dock for Mobile (thumb-accessible glass capsule) */}
      <div className="fixed bottom-4 inset-x-0 z-30 flex justify-center pointer-events-none sm:hidden px-4">
        <div className="pointer-events-auto bg-[#182747]/70 dark:bg-navy-dark/70 backdrop-blur-2xl backdrop-saturate-150 text-white px-3 py-1.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] border border-white/20 dark:border-white/10 flex items-center gap-1.5">
          <a
            href="#hero"
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-colors ${
              activeSection === 'hero' ? 'bg-white/20 text-white font-bold' : 'text-white/70 hover:text-white'
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-colors ${
              activeSection === 'about' ? 'bg-white/20 text-white font-bold' : 'text-white/70 hover:text-white'
            }`}
          >
            About
          </a>
          <a
            href="#experience"
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-colors ${
              activeSection === 'experience' ? 'bg-white/20 text-white font-bold' : 'text-white/70 hover:text-white'
            }`}
          >
            Career
          </a>
          <a
            href="#projects"
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-colors ${
              activeSection === 'projects' ? 'bg-white/20 text-white font-bold' : 'text-white/70 hover:text-white'
            }`}
          >
            Projects
          </a>
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-1.5 rounded-full bg-white/15 text-white flex items-center justify-center"
          >
            {isDark ? <Sun className="w-3 h-3 text-amber-300" /> : <Moon className="w-3 h-3" />}
          </button>
          <a
            href="#contact"
            className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#647E68] text-white flex items-center gap-1 shadow-xs"
          >
            <Sparkles className="w-3 h-3" />
            <span>Connect</span>
          </a>
        </div>
      </div>
    </>
  );
}
