import { Code2, Video, Palette, Lightbulb, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const highlights = [
  { label: 'Python & Django Development', icon: Code2 },
  { label: 'Full-Stack Web Applications', icon: Lightbulb },
  { label: 'Database Management', icon: Code2 },
  { label: 'Video Editing & Videography', icon: Video },
  { label: 'Graphic & Poster Design', icon: Palette },
  { label: 'Creative Problem-Solving', icon: Lightbulb },
];

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="A blend of technical problem-solving and creative storytelling">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Profile Image Column */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative group max-w-sm w-full">
            {/* Ambient warm glow tailored to the amber shirt */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-500/25 via-amber-400/20 to-indigo-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-all duration-700 -z-10" />

            {/* Image Card Container */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-amber-500/30 bg-[#0d1322] shadow-2xl shadow-amber-950/40">
              <img
                src="/akhil.jpg"
                alt="Akhil K - Python Developer & Creative Designer"
                className="w-full h-auto max-h-[460px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />

              {/* Gradient overlay at bottom for text contrast */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090d16] via-[#090d16]/60 to-transparent" />

              {/* Status pill on image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium text-slate-200">Open to Projects & Roles</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-amber-300">
                  <Sparkles size={12} className="text-amber-400" />
                  <span>Akhil K</span>
                </div>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl border-2 border-amber-500/40 -z-10 bg-amber-500/10 blur-[1px]" />
            <div className="absolute -top-3 -left-3 w-12 h-12 rounded-xl border border-indigo-500/30 -z-10 bg-indigo-500/10" />
          </div>

          {/* Location Badge */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-amber-500/20 text-slate-300 text-xs sm:text-sm">
            <MapPin size={14} className="text-amber-400 shrink-0" />
            <span>Palakkad, Kerala, India</span>
          </div>
        </div>

        {/* Bio Content Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <CheckCircle2 size={13} />
            Developer & Creator
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-display)]">
            Bridging technical logic with <span className="gradient-text-amber">visual creativity</span>
          </h3>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I'm <strong className="text-white font-semibold">Akhil K</strong>, a Python and Django developer from Palakkad, Kerala, with hands-on internship experience building database-driven web applications. I enjoy developing practical solutions, creating responsive user interfaces, and learning new technologies.
            </p>
            <p>
              Alongside backend engineering, my passion extends deeply into video editing, videography, graphic design, and creative visual storytelling. This dual perspective enables me to approach digital projects with both analytical rigor and visual finesse.
            </p>
            <p>
              My goal is to craft digital products and visual stories that are not only fully functional and secure, but also intuitive, visually memorable, and impactful.
            </p>
          </div>

          {/* Compact Highlights Grid */}
          <div className="pt-2">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">Core Competencies</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-xl px-3.5 py-3 flex items-center gap-2.5 transition-all duration-300 hover:border-amber-500/40 hover:scale-[1.02]"
                >
                  <item.icon size={16} className="text-amber-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
