import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { GithubIcon, LinkedinIcon } from './Icons';
import akhilImg from '../assets/akhil.jpg';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Simulate submission & prepare mailto trigger
      await new Promise((res) => setTimeout(res, 600));
      setStatus('success');
      
      // Also open user's mail client optionally as fallback
      const mailtoUrl = `mailto:akhilanandank871@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry from ' + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.open(mailtoUrl, '_blank');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const contactDetails = [
    { icon: Mail, label: 'Email', value: 'akhilanandank871@gmail.com', href: 'mailto:akhilanandank871@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 6238006820', href: 'tel:+916238006820' },
    { icon: MapPin, label: 'Location', value: 'Palakkad, Kerala, India', href: undefined },
  ];

  return (
    <SectionWrapper
      id="contact"
      title="Have a Project in Mind?"
      subtitle="Whether you need a website, full-stack application, or engaging visual content, let's connect and build something exceptional."
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-card rounded-2xl p-6 border-amber-500/20 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={akhilImg}
                alt="Akhil K"
                className="w-14 h-14 rounded-2xl object-cover object-top border-2 border-amber-400 shadow-md"
              />
              <div>
                <h3 className="font-bold text-white text-base">Akhil K</h3>
                <p className="text-amber-400 text-xs font-mono">Palakkad, Kerala, India</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] text-slate-300">Ready for new projects</span>
                </div>
              </div>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              "Building Digital Experiences. Creating Visual Stories."
            </p>
          </div>

          <div className="space-y-3">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              const Wrapper = item.href ? 'a' : 'div';
              const wrapperProps = item.href
                ? { href: item.href }
                : {};

              return (
                <Wrapper
                  key={item.label}
                  {...wrapperProps}
                  className="group flex items-center gap-4 glass-card rounded-xl p-4 transition-all duration-300 hover:border-amber-400/40 hover:scale-[1.01]"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <Icon size={18} className="text-amber-400 group-hover:text-slate-950 transition-colors" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-mono">{item.label}</p>
                    <p className="text-slate-200 text-xs sm:text-sm font-semibold group-hover:text-amber-300 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}

            {/* Social cards */}
            <a
              href="https://github.com/akhil-anandan"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 glass-card rounded-xl p-4 transition-all duration-300 hover:border-amber-400/40 hover:scale-[1.01]"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                <GithubIcon size={18} className="text-amber-400 group-hover:text-slate-950 transition-colors" />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-mono">GitHub</p>
                <p className="text-slate-200 text-xs sm:text-sm font-semibold group-hover:text-amber-300 transition-colors">
                  github.com/akhil-anandan
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/akhil-k-a98a7731a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 glass-card rounded-xl p-4 transition-all duration-300 hover:border-amber-400/40 hover:scale-[1.01]"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                <LinkedinIcon size={18} className="text-amber-400 group-hover:text-slate-950 transition-colors" />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-mono">LinkedIn</p>
                <p className="text-slate-200 text-xs sm:text-sm font-semibold group-hover:text-amber-300 transition-colors">
                  linkedin.com/in/akhil-k-a98a7731a
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-5 border-amber-500/20">
            <h3 className="text-lg sm:text-xl font-bold text-white font-[family-name:var(--font-display)]">
              Send a Direct Message
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-700/80 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-700/80 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all"
                  placeholder="e.g. rahul@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-700/80 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all"
                placeholder="Web Development / Video Project / Job Opportunity"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-700/80 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all resize-none"
                placeholder="Tell me about your project, timeline, or role..."
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={16} />
                </>
              )}
            </button>

            {/* Status alerts */}
            {status === 'success' && (
              <div className="flex items-center gap-2 text-emerald-300 text-xs sm:text-sm bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-3.5">
                <CheckCircle size={16} className="shrink-0 text-emerald-400" />
                <span>Message prepared & email client triggered! Thank you for reaching out.</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-300 text-xs sm:text-sm bg-red-500/10 border border-red-400/30 rounded-xl p-3.5">
                <AlertCircle size={16} className="shrink-0 text-red-400" />
                <span>Could not send. Please email me directly at akhilanandank871@gmail.com</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
