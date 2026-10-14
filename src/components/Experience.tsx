import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience & Education"
      subtitle="Professional training, academic milestones, and specialized certifications"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Professional Experience */}
        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0">
              <Briefcase size={18} className="text-amber-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-display)]">
              Professional Experience
            </h3>
          </div>

          {/* Timeline Card */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-500/30">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-amber-400 border-4 border-[#090d16] shadow-lg shadow-amber-400/50" />

            <div className="glass-card rounded-2xl p-5 sm:p-6 mb-6 hover:border-amber-400/40 transition-colors">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                <div>
                  <h4 className="font-bold text-white text-lg sm:text-xl">Python Django Intern</h4>
                  <p className="text-amber-400 font-semibold text-sm sm:text-base">IROHUB INFOTECH</p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
                  <Calendar size={12} />
                  June 2025 – January 2026
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {[
                  'Completed hands-on training and internship work in Python and Django web development.',
                  'Built database-driven web applications with real-world business logic.',
                  'Implemented user authentication, role-based access control, and CRUD operations.',
                  'Assisted with backend architecture and MySQL / SQLite database management.',
                  'Practiced agile debugging, code optimization, and full-stack integration.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="space-y-8">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                <GraduationCap size={18} className="text-amber-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-display)]">
                Education
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-500/30">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-amber-400 border-4 border-[#090d16] shadow-lg shadow-amber-400/50" />

              <div className="glass-card rounded-2xl p-5 sm:p-6 hover:border-amber-400/40 transition-colors">
                <h4 className="font-bold text-white text-base sm:text-lg">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-amber-400 font-semibold text-sm mt-1">Sadanam Kumaran College, Pathirippala</p>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Calicut University</p>
                <div className="inline-flex items-center gap-1.5 mt-3 text-slate-400 text-xs font-mono">
                  <Calendar size={12} className="text-amber-400" />
                  2022 – 2025
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                <Award size={18} className="text-amber-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-display)]">
                Certifications & Workshops
              </h3>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: 'Python-Django Certification',
                  org: 'Irohub Infotech',
                  year: '2025',
                },
                {
                  title: 'Power BI Workshop',
                  org: 'Sadanam Kumaran College, E-Cell IIM Calcutta & MakeIntern',
                  year: '2024',
                },
                {
                  title: 'Machine Learning Workshop',
                  org: 'Sadanam Kumaran College, E-Cell IIM Calcutta & MakeIntern',
                  year: '2024',
                },
              ].map((cert) => (
                <div
                  key={cert.title}
                  className="glass-card rounded-xl p-4 flex items-start gap-3.5 transition-all duration-200 hover:border-amber-400/40"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Award size={15} className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{cert.title}</h4>
                    <p className="text-slate-400 text-xs mt-0.5">{cert.org}</p>
                    <p className="text-amber-400/80 text-xs font-mono mt-0.5">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
