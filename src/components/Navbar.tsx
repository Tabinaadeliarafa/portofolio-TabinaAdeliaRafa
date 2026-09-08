import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, ArrowUpRight, Sparkles, Send, Compass, User, Briefcase, Award, FolderGit2, Cpu, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

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

  return (
    <>
      {/* Desktop Floating Pill Navigation (Floating Capsule) */}
      <header
        id="main-navbar"
        className="fixed top-3 sm:top-5 inset-x-0 z-40 px-3 sm:px-6 pointer-events-none transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand Pill */}
          <a
            href="#hero"
            id="brand-logo-link"
            className="group flex items-center gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D8D8D8]/80 shadow-[0_4px_20px_rgb(24,39,71,0.06)] hover:border-[#182747]/40 transition-all duration-300 hover:shadow-md"
          >
            <div className="w-8 h-8 rounded-full bg-[#182747] text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-xs transition-transform duration-300 group-hover:scale-105">
              TAR
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-xs sm:text-sm tracking-tight text-[#182747] group-hover:text-[#562B08] transition-colors leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] text-[#647E68] font-semibold tracking-wide hidden md:inline">
                Informatics Engineering • Unpad
              </span>
            </div>
          </a>

          {/* Centered Floating Nav Capsule (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/85 backdrop-blur-md p-1.5 rounded-full border border-[#D8D8D8]/80 shadow-[0_4px_20px_rgb(24,39,71,0.06)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#182747] font-bold'
                      : 'text-[#182747]/70 hover:text-[#182747] hover:bg-black/4'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#F6F6F6] rounded-full border border-[#D8D8D8]/80 shadow-2xs -z-10"
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
            <button
              id="navbar-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md border border-[#D8D8D8]/80 text-[#182747] hover:border-[#182747] hover:bg-white transition-all cursor-pointer shadow-[0_4px_20px_rgb(24,39,71,0.06)]"
            >
              <FileText className="w-3.5 h-3.5 text-[#562B08]" />
              <span>Resume</span>
            </button>
            <a
              id="navbar-contact-cta"
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#182747] text-white hover:bg-[#562B08] transition-all cursor-pointer shadow-[0_4px_16px_rgb(24,39,71,0.18)]"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-resume-trigger"
              onClick={onOpenResume}
              className="p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D8D8D8]/80 text-[#182747] shadow-xs"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4 text-[#562B08]" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D8D8D8]/80 text-[#182747] shadow-xs focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Top Dropdown Drawer (Application Style Card) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-4 top-18 z-50 bg-white/95 backdrop-blur-xl border border-[#D8D8D8] rounded-[32px] p-5 shadow-2xl sm:hidden text-left"
            id="mobile-nav-drawer"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D8D8D8]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#647E68]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#182747]">
                  Navigation Menu
                </span>
              </div>
              <span className="text-[11px] text-[#647E68] font-bold">
                {activeSection.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 pb-4 mb-4 border-b border-[#D8D8D8]">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-[#182747] text-white font-bold'
                        : 'text-[#182747] hover:bg-[#F6F6F6]'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#562B08]'}`} />
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
                className="w-full py-2.5 px-4 rounded-2xl text-xs font-bold border border-[#D8D8D8] bg-[#F6F6F6] text-[#182747] flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#562B08]" />
                <span>View Full Resume & Credentials</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-2xl text-xs font-bold bg-[#182747] text-white flex items-center justify-center gap-2 shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bottom App Dock for Mobile (thumb-accessible capsule) */}
      <div className="fixed bottom-4 inset-x-0 z-30 flex justify-center pointer-events-none sm:hidden px-4">
        <div className="pointer-events-auto bg-[#182747]/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full shadow-xl border border-white/20 flex items-center gap-1.5">
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
