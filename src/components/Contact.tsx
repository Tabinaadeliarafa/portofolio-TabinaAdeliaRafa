import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Copy, Check, Send, Sparkles, ArrowUpRight, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
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

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
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
        <span className="h-px w-8 bg-[#562B08]" />
        <span className="text-xs font-bold uppercase tracking-widest text-[#562B08]">
          Get in Touch
        </span>
      </div>

      {/* Editorial Large CTA Card */}
      <div className="bg-white rounded-[36px] border border-[#D8D8D8] p-8 sm:p-12 lg:p-14 shadow-sm relative overflow-hidden">
        {/* Subtle Decorative Backdrop Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#647E68]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#562B08]/8 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10">
          {/* Left Column: Headline & Direct Contact Links */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#647E68]/15 text-[#647E68] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open for Opportunities & Collaborations</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#182747] tracking-tight leading-[1.1] mb-5">
                Let's build something <span className="font-serif italic font-normal text-[#562B08]">meaningful</span>.
              </h2>

              <p className="text-sm sm:text-base text-[#182747]/80 leading-relaxed max-w-xl mb-8">
                Whether it's a data-driven dashboard, a thoughtful user experience, or a reliable backend system, I'm always interested in learning, collaborating, and creating something useful.
              </p>

              {/* Quick Contact Info Cards */}
              <div className="space-y-3 mb-8">
                {/* Email Card */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F6F6F6] border border-[#D8D8D8]/70">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#182747] shadow-2xs">
                      <Mail className="w-4 h-4 text-[#562B08]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#182747]/50">Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-bold text-[#182747] hover:text-[#562B08] transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white hover:bg-[#D8D8D8]/50 text-[#182747] border border-[#D8D8D8]/60 transition-colors cursor-pointer text-xs font-semibold flex items-center gap-1"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#647E68]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="hidden sm:inline">{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Location Card */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F6F6F6] border border-[#D8D8D8]/70">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#182747] shadow-2xs">
                    <MapPin className="w-4 h-4 text-[#647E68]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#182747]/50">Location</p>
                    <p className="text-xs sm:text-sm font-bold text-[#182747]">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons (Email Me, LinkedIn, GitHub) */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#D8D8D8]/60">
              <a
                id="contact-email-btn"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold bg-[#182747] text-white hover:bg-[#562B08] transition-colors cursor-pointer shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <a
                id="contact-linkedin-btn"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold bg-white text-[#182747] border border-[#D8D8D8] hover:border-[#182747] transition-colors cursor-pointer shadow-2xs"
              >
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#182747]/60" />
              </a>

              <a
                id="contact-github-btn"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold bg-white text-[#182747] border border-[#D8D8D8] hover:border-[#182747] transition-colors cursor-pointer shadow-2xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#182747]/60" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Interactive Composer */}
          <div className="lg:col-span-6 bg-[#F6F6F6] p-6 sm:p-8 rounded-[30px] border border-[#D8D8D8] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-[#182747] tracking-tight">
                  Send a Direct Note
                </h3>
                <span className="text-[11px] font-semibold text-[#647E68]">Direct Ingestion</span>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#182747]/70 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D8D8D8] text-xs font-medium text-[#182747] placeholder:text-[#182747]/40 focus:outline-hidden focus:border-[#182747]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#182747]/70 mb-1">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D8D8D8] text-xs font-medium text-[#182747] placeholder:text-[#182747]/40 focus:outline-hidden focus:border-[#182747]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#182747]/70 mb-1">
                    Purpose of Discussion
                  </label>
                  <select
                    value={interestTopic}
                    onChange={(e) => setInterestTopic(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D8D8D8] text-xs font-medium text-[#182747] focus:outline-hidden focus:border-[#182747]"
                  >
                    <option value="Internship Opportunity">Data Analyst / Backend Internship</option>
                    <option value="Full-Time / Graduate Role">Full-Time Tech Role</option>
                    <option value="UI/UX Redesign Collaboration">UI/UX Project</option>
                    <option value="Academic or Student Inquiries">Academic / Speaker Inquiry</option>
                    <option value="General Networking">General Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#182747]/70 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project, internship opportunity, or question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D8D8D8] text-xs font-medium text-[#182747] placeholder:text-[#182747]/40 focus:outline-hidden focus:border-[#182747] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#182747] text-white text-xs font-bold hover:bg-[#562B08] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Tabina</span>
                </button>
              </form>

              {sentSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 p-3 bg-[#647E68]/15 border border-[#647E68]/30 rounded-xl text-xs text-[#647E68] font-bold text-center"
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
