import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Approach from './components/Approach';
import Experience from './components/Experience';
import Organization from './components/Organization';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F6F6] text-[#182747] font-sans antialiased overflow-x-hidden selection:bg-[#647E68] selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative">
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Me */}
        <About />

        {/* 3. My Approach / Personal Brand: DATA × DESIGN × DEVELOPMENT */}
        <Approach />

        {/* 4. Experience Section */}
        <Experience />

        {/* 5. Organization Section ("Beyond the Classroom" & Stats) */}
        <Organization />

        {/* 6. Selected Projects Section */}
        <Projects />

        {/* 7. Skills & Toolkits */}
        <Skills />

        {/* 8. Contact CTA & Direct Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Full Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
