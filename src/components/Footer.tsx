import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import akhilImg from '../assets/akhil.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-amber-500/15 bg-[#05080f]">
      {/* Warm ambient gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <img
              src={akhilImg}
              alt="Akhil K"
              className="w-10 h-10 rounded-xl object-cover object-top border border-amber-400/40"
            />
            <div>
              <p className="font-[family-name:var(--font-display)] font-bold text-white text-base">
                Akhil K
              </p>
              <p className="text-slate-400 text-xs">
                Building Digital Experiences &bull; Creating Visual Stories
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/akhil-anandan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-300 hover:border-amber-400/40 hover:bg-amber-500/10 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/akhil-k-a98a7731a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-300 hover:border-amber-400/40 hover:bg-amber-500/10 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="mailto:akhilanandank871@gmail.com"
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-300 hover:border-amber-400/40 hover:bg-amber-500/10 transition-all"
              aria-label="Email Akhil"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-400 text-xs sm:text-sm flex items-center justify-center gap-1.5 font-medium">
            &copy; {currentYear} Akhil K. Crafted with
            <Heart size={13} className="text-amber-400 fill-amber-400" />
            in Palakkad, Kerala
          </p>
        </div>
      </div>
    </footer>
  );
}
