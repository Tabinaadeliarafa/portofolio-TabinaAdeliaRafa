import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Copy, Check, Send, Sparkles, ArrowUpRight, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [interestTopic, setInterestTopic] = useState('Internship Opportunity');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Create mailto prefill
    const subject = encodeURIComponent(`Portfolio Inquiry: ${interestTopic} from ${senderName || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Tabina,\n\nMy name is ${senderName || 'a visitor'} (${senderEmail || 'N/A'}).\n\nInterest: ${interestTopic}\n\nMessage:\n${message}\n\nBest regards,\n${senderName || 'Anonymous'}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2.5 mb-8">
        <span className="h-px w-8 bg-[#562B08] dark:bg-amber-400" />
        <span className="text-xs font-bold uppercase tracking-widest text-[#562B08] dark:text-amber-400">
          Get in Touch
        </span>
      </div>

      {/* Editorial Large CTA Card */}
      <div className="bg-white/90 dark:bg-[#0f1a30]/80 rounded-[36px] border border-[#D8D8D8] dark:border-white/10 p-8 sm:p-12 lg:p-14 shadow-sm backdrop-blur-xl relative overflow-hidden transition-colors">
        {/* Subtle Decorative Backdrop Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#647E68]/10 dark:bg-[#647E68]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#562B08]/8 dark:bg-[#562B08]/15 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10">
          {/* Left Column: Headline & Direct Contact Links */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#647E68]/15 dark:bg-[#647E68]/25 text-[#647E68] dark:text-[#7b9980] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open for Opportunities & Collaborations</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#182747] dark:text-white tracking-tight leading-[1.1] mb-5">
                Let's build something <span className="font-serif italic font-normal text-[#562B08] dark:text-amber-300">meaningful</span>.
              </h2>

              <p className="text-sm sm:text-base text-[#182747]/80 dark:text-[#D8D8D8]/80 leading-relaxed max-w-xl mb-8">
                Whether it's a data-driven dashboard, a thoughtful user experience, or a reliable backend system, I'm always interested in learning, collaborating, and creating something useful.
              </p>

              {/* Quick Contact Info Cards */}
              <div className="space-y-3 mb-8">
                {/* Email Card */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F6F6F6] dark:bg-white/5 border border-[#D8D8D8]/70 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center text-[#182747] dark:text-white shadow-2xs">
                      <Mail className="w-4 h-4 text-[#562B08] dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#182747]/50 dark:text-[#D8D8D8]/50">Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-bold text-[#182747] dark:text-white hover:text-[#562B08] dark:hover:text-amber-300 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white dark:bg-white/10 hover:bg-[#D8D8D8]/50 dark:hover:bg-white/20 text-[#182747] dark:text-white border border-[#D8D8D8]/60 dark:border-white/15 transition-colors cursor-pointer text-xs font-semibold flex items-center gap-1"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#647E68] dark:text-[#7b9980]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="hidden sm:inline">{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Location Card */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F6F6F6] dark:bg-white/5 border border-[#D8D8D8]/70 dark:border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center text-[#182747] dark:text-white shadow-2xs">
                    <MapPin className="w-4 h-4 text-[#647E68] dark:text-[#7b9980]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#182747]/50 dark:text-[#D8D8D8]/50">Location</p>
                    <p className="text-xs sm:text-sm font-bold text-[#182747] dark:text-white">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons (Email Me, LinkedIn, GitHub) */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#D8D8D8]/60 dark:border-white/10">
              <a
                id="contact-email-btn"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold bg-[#182747] dark:bg-[#647E68] text-white hover:bg-[#562B08] dark:hover:bg-[#562B08] transition-colors cursor-pointer shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <a
                id="contact-linkedin-btn"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold bg-white dark:bg-white/10 text-[#182747] dark:text-[#D8D8D8] border border-[#D8D8D8] dark:border-white/15 hover:border-[#182747] dark:hover:border-white/40 transition-colors cursor-pointer shadow-2xs"
              >
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#182747]/60 dark:text-[#D8D8D8]/60" />
              </a>

              <a
                id="contact-github-btn"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold bg-white dark:bg-white/10 text-[#182747] dark:text-[#D8D8D8] border border-[#D8D8D8] dark:border-white/15 hover:border-[#182747] dark:hover:border-white/40 transition-colors cursor-pointer shadow-2xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#182747]/60 dark:text-[#D8D8D8]/60" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Interactive Composer */}
          <div className="lg:col-span-6 bg-[#F6F6F6] dark:bg-white/5 p-6 sm:p-8 rounded-[30px] border border-[#D8D8D8] dark:border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-[#182747] dark:text-white tracking-tight">
                  Send a Direct Note
                </h3>
                <span className="text-[11px] font-semibold text-[#647E68] dark:text-[#7b9980]">Direct Ingestion</span>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#182747]/70 dark:text-[#D8D8D8]/70 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/10 border border-[#D8D8D8] dark:border-white/15 text-xs font-medium text-[#182747] dark:text-white placeholder:text-[#182747]/40 dark:placeholder:text-white/40 focus:outline-hidden focus:border-[#182747] dark:focus:border-[#647E68]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#182747]/70 dark:text-[#D8D8D8]/70 mb-1">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/10 border border-[#D8D8D8] dark:border-white/15 text-xs font-medium text-[#182747] dark:text-white placeholder:text-[#182747]/40 dark:placeholder:text-white/40 focus:outline-hidden focus:border-[#182747] dark:focus:border-[#647E68]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#182747]/70 dark:text-[#D8D8D8]/70 mb-1">
                    Purpose of Discussion
                  </label>
                  <select
                    value={interestTopic}
                    onChange={(e) => setInterestTopic(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#182747] border border-[#D8D8D8] dark:border-white/15 text-xs font-medium text-[#182747] dark:text-white focus:outline-hidden focus:border-[#182747] dark:focus:border-[#647E68]"
                  >
                    <option value="Internship Opportunity" className="dark:bg-[#0f1a30] dark:text-white">Data Analyst / Backend Internship</option>
                    <option value="Full-Time / Graduate Role" className="dark:bg-[#0f1a30] dark:text-white">Full-Time Tech Role</option>
                    <option value="UI/UX Redesign Collaboration" className="dark:bg-[#0f1a30] dark:text-white">UI/UX Project</option>
                    <option value="Academic or Student Inquiries" className="dark:bg-[#0f1a30] dark:text-white">Academic / Speaker Inquiry</option>
                    <option value="General Networking" className="dark:bg-[#0f1a30] dark:text-white">General Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#182747]/70 dark:text-[#D8D8D8]/70 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project, internship opportunity, or question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/10 border border-[#D8D8D8] dark:border-white/15 text-xs font-medium text-[#182747] dark:text-white placeholder:text-[#182747]/40 dark:placeholder:text-white/40 focus:outline-hidden focus:border-[#182747] dark:focus:border-[#647E68] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#182747] dark:bg-[#647E68] text-white text-xs font-bold hover:bg-[#562B08] dark:hover:bg-[#562B08] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Tabina</span>
                </button>
              </form>

              {sentSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 p-3 bg-[#647E68]/15 border border-[#647E68]/30 rounded-xl text-xs text-[#647E68] dark:text-[#7b9980] font-bold text-center"
                >
                  Opening mail draft! Thank you for reaching out.
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
