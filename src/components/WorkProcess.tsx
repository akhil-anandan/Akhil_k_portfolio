import { Search, PenTool, Rocket, CheckCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'Understand the concept, goals, and technical requirements.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: PenTool,
    title: 'Plan',
    description: 'Structure architecture, database schemas, and creative workflows.',
    color: 'from-amber-600 to-orange-600',
  },
  {
    icon: Rocket,
    title: 'Create',
    description: 'Develop clean code, edit visuals, and refine user experience.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: CheckCircle,
    title: 'Deliver',
    description: 'Test, optimize for all devices, and deploy the final product.',
    color: 'from-amber-400 to-emerald-500',
  },
];

export default function WorkProcess() {
  return (
    <SectionWrapper
      id="process"
      title="How I Work"
      subtitle="A structured 4-step workflow from initial idea to polished delivery"
    >
      {/* Desktop: horizontal timeline */}
      <div className="hidden md:flex items-start justify-between relative">
        {/* Connector line */}
        <div className="absolute top-10 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-amber-500/40 via-orange-500/40 to-emerald-500/40 -z-0" />

        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="flex flex-col items-center text-center w-1/4 relative group px-2">
              {/* Step Circle */}
              <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300 z-10`}>
                <Icon size={28} className="text-slate-950 font-bold" />
                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#090d16] border-2 border-amber-400 flex items-center justify-center">
                  <span className="text-[11px] font-bold text-amber-300 font-mono">{idx + 1}</span>
                </div>
              </div>

              <h3 className="font-bold text-white text-base sm:text-lg font-[family-name:var(--font-display)] mb-2">
                {step.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-[200px]">{step.description}</p>
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden space-y-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="flex gap-4 items-start glass-card p-4 rounded-2xl border-amber-500/15">
              <div className="relative flex flex-col items-center">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md shrink-0`}>
                  <Icon size={20} className="text-slate-950" />
                </div>
              </div>
              <div className="pt-1 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-amber-400 font-mono font-bold">0{idx + 1}.</span>
                  <h3 className="font-bold text-white text-base font-[family-name:var(--font-display)]">{step.title}</h3>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
