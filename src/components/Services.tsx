import { services } from '../data/portfolioData';
import SectionWrapper from './SectionWrapper';

export default function Services() {
  return (
    <SectionWrapper
      id="services"
      title="Services & Capabilities"
      subtitle="Full-stack web development, backend engineering, and creative visual production"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="group glass-card rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center mb-4 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300">
                  <Icon size={22} className="text-amber-400 group-hover:text-slate-950 transition-colors" />
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-2 font-[family-name:var(--font-display)]">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
