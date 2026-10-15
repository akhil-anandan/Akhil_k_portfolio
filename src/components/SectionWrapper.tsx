import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useAnimations';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function SectionWrapper({ id, children, className = '', title, subtitle }: SectionWrapperProps) {
  const { ref, isRevealed } = useReveal(0.05);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isRevealed ? 'opacity-100 translate-y-0' : 'max-sm:opacity-100 max-sm:translate-y-0 opacity-0 translate-y-8'
        }`}
      >
        {title && (
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
              <span className="gradient-text">{title}</span>
            </h2>
            {subtitle && (
              <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">{subtitle}</p>
            )}
            <div className="mt-5 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 shadow-sm shadow-amber-500/50" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
