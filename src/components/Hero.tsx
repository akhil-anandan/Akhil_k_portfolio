import { useEffect, useState, useRef } from 'react';
import { ArrowDown, ExternalLink, Sparkles, MapPin } from 'lucide-react';
import { useTypingAnimation, useMouseGlow } from '../hooks/useAnimations';
import { GithubIcon, LinkedinIcon } from './Icons';

const typingWords = [
  'Python Developer',
  'Django Developer',
  'Full-Stack Web Developer',
  'Video Editor',
  'Videographer',
  'Graphic & Poster Designer',
  'Creative Digital Designer',
];

export default function Hero() {
  const typedText = useTypingAnimation(typingWords, 70, 40, 1800);
  const { x, y } = useMouseGlow();
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-24"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(245,158,11,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.25) 1px, transparent 1px)`,
          backgroundSize: '54px 54px',
        }}
      />

      {/* Mouse-following warm amber glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none transition-all duration-700 ease-out hidden md:block"
        style={{
          left: x - 250,
          top: y - 250,
          background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 68%)',
        }}
      />

      {/* Floating geometric elements with warm amber & indigo tones */}
      <div className="absolute top-1/4 left-[6%] w-20 h-20 border border-amber-500/15 rounded-2xl rotate-12 animate-float opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 right-[8%] w-14 h-14 border border-amber-400/20 rounded-xl -rotate-12 animate-float-delayed opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 left-[12%] w-10 h-10 border border-amber-500/20 rounded-lg rotate-45 animate-float-slow opacity-25 pointer-events-none" />
      <div className="absolute top-[65%] right-[10%] w-16 h-16 border border-indigo-500/20 rounded-2xl rotate-6 animate-float opacity-20 pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-[18%] left-[25%] w-72 h-72 bg-amber-500/10 rounded-full blur-[120px] animate-pulse-soft pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-80 h-80 bg-orange-600/10 rounded-full blur-[140px] animate-pulse-soft pointer-events-none" style={{ animationDelay: '1.5s' }} />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            {/* Availability Pill */}
            <div
              className={`transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border-amber-500/30 text-xs sm:text-sm text-amber-300 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Full-time Roles & Freelance</span>
              </div>
            </div>

            {/* Greeting & Name */}
            <div
              className={`transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <span className="block text-base sm:text-lg text-slate-400 font-medium mb-1">
                Hi, I'm
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-[family-name:var(--font-display)] tracking-tight mb-2">
                <span className="gradient-text">Akhil K</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-amber-200/90 font-mono tracking-wide mb-4 uppercase font-medium">
                Python & Django Developer <span className="text-amber-500">|</span> Creative Visual Storyteller
              </p>
            </div>

            {/* Typing Animation */}
            <div
              className={`transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              <div className="h-9 mb-4 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-xl md:text-2xl text-amber-400 font-mono font-medium">
                  {typedText}
                  <span className="animate-typing-cursor text-amber-300 font-bold ml-0.5">|</span>
                </span>
              </div>
            </div>

            {/* Headline */}
            <h2
              className={`text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-3 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Code with Purpose. Design with Creativity.
            </h2>

            {/* Tagline */}
            <p
              className={`text-sm sm:text-base md:text-lg text-slate-300/90 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '750ms' }}
            >
              "Building Digital Experiences. Creating Visual Stories."
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.03] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore My Work
                <ExternalLink size={16} />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-amber-500/30 text-amber-200 font-semibold text-sm hover:border-amber-400 hover:text-white hover:bg-amber-500/10 transition-all duration-200 text-center cursor-pointer"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div
              className={`flex items-center justify-center lg:justify-start gap-4 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '1050ms' }}
            >
              <a
                href="https://github.com/akhil-anandan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="https://www.linkedin.com/in/akhil-k-a98a7731a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400">
                <MapPin size={13} className="text-amber-400" />
                <span>Palakkad, Kerala</span>
              </div>
            </div>
          </div>

          {/* Right Photo Column */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div
              className={`relative max-w-[280px] sm:max-w-[340px] lg:max-w-none w-full transition-all duration-1000 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              {/* Animated glowing backdrop matching Akhil's amber shirt */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500/40 via-amber-400/20 to-orange-600/30 blur-2xl opacity-70 animate-pulse-soft -z-10" />

              {/* Framed image */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 bg-[#0d1322] shadow-2xl shadow-amber-950/60 group">
                <img
                  src="/akhil.jpg"
                  alt="Akhil K - Python Developer & Creative Designer"
                  className="w-full h-auto object-cover object-top max-h-[440px] sm:max-h-[500px] transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/90 via-transparent to-transparent pointer-events-none" />

                {/* Bottom badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-amber-500/20 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Akhil K</p>
                    <p className="text-amber-400 text-xs font-mono">Palakkad, Kerala</p>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                    <Sparkles size={16} className="text-amber-300" />
                  </div>
                </div>
              </div>

              {/* Floating decorative tags */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-[#0d1322]/90 border border-amber-500/30 backdrop-blur-md text-[11px] font-mono text-amber-300 shadow-lg">
                Python &bull; Django
              </div>
              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-[#0d1322]/90 border border-amber-500/30 backdrop-blur-md text-[11px] font-mono text-amber-300 shadow-lg">
                Video &bull; Design
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hidden sm:flex">
        <span className="text-[10px] tracking-widest uppercase font-mono text-amber-400/70">Scroll Down</span>
        <ArrowDown size={14} className="animate-bounce text-amber-400" />
      </div>
    </section>
  );
}
