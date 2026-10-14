import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Check, Clock } from 'lucide-react';
import { projects } from '../data/portfolioData';
import SectionWrapper from './SectionWrapper';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Full-stack web applications, Python tools, and interactive dashboards"
    >
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project) => {
          const isExpanded = expandedId === project.id;
          const Icon = project.icon;

          return (
            <div
              key={project.id}
              className={`glass-card rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10 ${
                project.id === 'bookmysalon' ? 'md:col-span-2' : ''
              }`}
            >
              {/* Preview Banner */}
              <div className={`relative h-44 sm:h-52 bg-gradient-to-br ${project.previewGradient} flex items-center justify-center p-6 border-b border-amber-500/15`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.15),transparent_70%)]" />
                
                {/* Tech icon watermark */}
                <div className="flex flex-col items-center gap-2 select-none relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-black/50 backdrop-blur-md border border-amber-400/30 flex items-center justify-center shadow-lg">
                    <Icon size={28} className="text-amber-300" />
                  </div>
                  <span className="text-[11px] sm:text-xs uppercase tracking-widest text-amber-200 font-mono font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-black/60 backdrop-blur-md text-amber-300 border border-amber-400/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-7">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-display)] mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expand/Collapse */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                  className="flex items-center gap-1.5 text-xs sm:text-sm text-amber-400 hover:text-amber-300 transition-colors mb-4 cursor-pointer font-semibold"
                >
                  {isExpanded ? 'Hide Details' : 'View Implemented Features & Architecture'}
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {/* Expanded details */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-slate-800 pt-4 space-y-3">
                    <h4 className="text-[11px] uppercase tracking-wider font-bold text-emerald-400 flex items-center gap-1.5">
                      <Check size={14} />
                      Implemented Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {project.plannedFeatures && (
                      <div className="pt-2">
                        <h4 className="text-[11px] uppercase tracking-wider font-bold text-amber-400 flex items-center gap-1.5">
                          <Clock size={14} />
                          Planned Roadmap Features
                        </h4>
                        <ul className="space-y-1.5 mt-1.5">
                          {project.plannedFeatures.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-amber-200/80 italic">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 pt-3 border-t border-white/[0.06] mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.04] text-slate-200 hover:text-white hover:bg-white/[0.08] transition-all border border-slate-700/60"
                    >
                      <GithubIcon size={14} />
                      GitHub Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition-all border border-amber-400/30"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
