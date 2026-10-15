import { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import SectionWrapper from './SectionWrapper';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="Organized technical proficiencies combined with creative design capabilities"
    >
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-12">
        {skillCategories.map((cat, idx) => (
          <button
            key={cat.title}
            onClick={() => setActiveCategory(idx)}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === idx
                ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/25 ring-1 ring-amber-300'
                : 'glass-card text-slate-300 hover:text-white hover:border-amber-500/40'
            }`}
          >
            <cat.icon size={15} />
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* All Categories Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {skillCategories.map((cat, catIdx) => (
          <div
            key={cat.title}
            className={`glass-card rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
              activeCategory === catIdx
                ? 'border-amber-400/60 shadow-xl shadow-amber-500/10'
                : ''
            }`}
          >
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                <cat.icon size={18} className="text-amber-400" />
              </div>
              <h3 className="font-bold text-white text-base font-[family-name:var(--font-display)]">
                {cat.title}
              </h3>
            </div>

            <div className="space-y-2">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/[0.04] transition-colors"
                >
                  <skill.icon
                    size={14}
                    className="text-amber-400/70 group-hover:text-amber-300 transition-colors shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-slate-300 group-hover:text-white transition-colors font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
