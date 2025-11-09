import Image from "next/image";

export default function Experience({ exp }) {
  // Protection contre les données undefined
  if (!exp) {
    return null;
  }

  return (
    <div className="relative modern-card w-full max-w-5xl h-auto p-8 mx-auto animate-fade-in-up">
      {/* Timeline Indicator */}
      <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full border-4 border-slate-800 shadow-lg shadow-violet-500/50 z-10"></div>

      {/* Dates Badge */}
      <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-full shadow-lg shadow-violet-500/30 flex items-center gap-2 text-sm font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{exp.debut}</span>
        <span>→</span>
        <span>{exp.fin}</span>
      </div>

      {/* Header - Logo et informations principales */}
      <div className="flex flex-row gap-6 items-start mb-6 mt-8">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <Image
            className="relative w-28 h-28 rounded-xl object-contain p-2 bg-slate-800/50 shadow-md border border-slate-700 transition-transform duration-300 group-hover:scale-105"
            height={112}
            width={112}
            src={"./img/" + exp.logo}
            alt="Logo entreprise"
          />
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-slate-50 tracking-tight">{exp.description}</h3>
          <div className="flex items-center gap-2 text-violet-400 font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>{exp.entreprise}</span>
          </div>
          <div className="inline-flex items-center gap-2 text-slate-300 bg-slate-700/50 px-3 py-1.5 rounded-lg w-fit">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">{exp.poste}</span>
          </div>
        </div>
      </div>

      {/* Détail de l'expérience */}
      <div className="mb-6 p-4 bg-gradient-to-r from-slate-800/30 to-violet-900/30 rounded-lg border-l-4 border-violet-500">
        <p className="text-sm text-slate-300 leading-relaxed italic">{exp.detail}</p>
      </div>

      {/* Missions */}
      {exp.missions && Array.isArray(exp.missions) && exp.missions.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-slate-50 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Missions principales
          </h4>
          <ul className="space-y-3">
            {exp.missions.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-300 group/mission">
                <span className="flex-shrink-0 w-6 h-6 mt-0.5 flex items-center justify-center rounded-full bg-gradient-to-br from-violet-900/50 to-blue-900/50 text-violet-300 font-semibold text-xs group-hover/mission:scale-110 transition-transform duration-200 border border-violet-700/50">
                  {index + 1}
                </span>
                <span className="flex-1 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Compétences acquises */}
      {exp.isExperience && exp.competences && exp.competences.length > 0 && (
        <div className="mt-8 pt-6 border-t border-slate-700">
          <h4 className="text-lg font-semibold text-slate-50 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Compétences acquises
          </h4>
          <div className="flex flex-wrap gap-3">
            {exp.competences.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-sm text-slate-300 font-medium hover:border-violet-500 hover:bg-violet-900/30 hover:text-violet-300 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-violet-500/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
