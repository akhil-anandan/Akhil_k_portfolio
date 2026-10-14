import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { navItems } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useAnimations';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass py-3 shadow-xl shadow-black/40 border-b border-amber-500/15'
            : 'py-4 sm:py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2.5 group cursor-pointer text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-slate-950 text-sm shadow-md shadow-amber-500/25 group-hover:scale-105 transition-transform">
              A
            </div>
            <div>
              <span className="font-[family-name:var(--font-display)] font-bold text-base sm:text-lg text-white block leading-tight">
                Akhil<span className="text-amber-400">.K</span>
              </span>
              <span className="text-[10px] text-amber-300/80 font-mono hidden sm:block leading-none">
                Developer &bull; Creator
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-[#0d1322]/60 p-1.5 rounded-2xl border border-amber-500/15 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-slate-950 bg-amber-400 font-semibold shadow-sm shadow-amber-400/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://github.com/akhil-anandan"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-9 h-9 items-center justify-center rounded-xl bg-white/[0.04] border border-amber-500/20 text-slate-300 hover:text-amber-300 hover:border-amber-400/50 hover:bg-amber-500/10 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/akhil-k-a98a7731a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-9 h-9 items-center justify-center rounded-xl bg-white/[0.04] border border-amber-500/20 text-slate-300 hover:text-amber-300 hover:border-amber-400/50 hover:bg-amber-500/10 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-amber-500/20 text-amber-300 hover:text-white hover:bg-amber-500/15 transition-all cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMobileOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${
            isMobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-72 sm:w-80 bg-[#0d1322] border-l border-amber-500/20 py-20 px-6 transform transition-transform duration-300 flex flex-col justify-between ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3 px-2 pb-6 mb-2 border-b border-amber-500/20">
              <img
                src="/akhil.jpg"
                alt="Akhil K"
                className="w-12 h-12 rounded-xl object-cover object-top border border-amber-400/40"
              />
              <div>
                <p className="text-white font-bold text-sm">Akhil K</p>
                <p className="text-xs text-amber-400 font-mono">Palakkad, Kerala</p>
              </div>
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-3 rounded-xl text-left font-medium text-sm transition-all cursor-pointer flex items-center justify-between ${
                  activeSection === item.id
                    ? 'text-slate-950 bg-amber-400 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-amber-500/20">
            <div className="flex gap-3 justify-center">
              <a
                href="https://github.com/akhil-anandan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 flex items-center justify-center gap-2 rounded-xl bg-white/[0.04] border border-amber-500/20 text-slate-300 hover:text-white text-xs font-medium"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/akhil-k-a98a7731a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 flex items-center justify-center gap-2 rounded-xl bg-white/[0.04] border border-amber-500/20 text-slate-300 hover:text-white text-xs font-medium"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/30 hover:bg-amber-400 transition-all duration-300 cursor-pointer ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={18} strokeWidth={2.5} />
      </button>
    </>
  );
}
