import Image from "next/image";

export default function Formation({ form }) {
  return (
    <div className="relative w-full max-w-5xl min-h-[28rem] modern-card p-8 mx-auto animate-fade-in-up">
      {/* Timeline Indicator */}
      <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full border-4 border-slate-800 shadow-lg shadow-violet-500/50 z-10 flex items-center justify-center">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z"/>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
        </svg>
      </div>

      {/* Dates Badge */}
      <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-full shadow-lg shadow-violet-500/30 flex items-center gap-2 text-sm font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{form.debut}</span>
        <span>→</span>
        <span>{form.fin}</span>
      </div>

      {/* Header - Logo et titre */}
      <div className="flex flex-row gap-6 items-start mb-6 mt-8">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <Image
            className="relative w-28 h-32 rounded-xl object-contain p-2 bg-slate-800/50 shadow-md border border-slate-700 transition-transform duration-300 group-hover:scale-105"
            height={128}
            width={112}
            src={"./img/" + form.logo}
            alt="Logo formation"
          />
        </div>

        {/* Informations principales */}
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-slate-50 tracking-tight leading-tight">
            {form.intitule_s}
          </h3>
          <div className="flex items-center gap-2 text-violet-400 font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>{form.institut}</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            {form.intitule_l}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6 p-4 bg-gradient-to-r from-slate-800/30 to-violet-900/30 rounded-lg border-l-4 border-violet-500">
        <h4 className="text-sm font-semibold text-slate-50 mb-2 flex items-center gap-2">
          <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Détail de la formation
        </h4>
        <p className="text-sm text-slate-300 leading-relaxed italic">
          {form.detail}
        </p>
      </div>

      {/* Acquis */}
      <div>
        <h4 className="text-lg font-semibold text-slate-50 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Compétences acquises
        </h4>
        <div className="max-h-48 overflow-y-auto pr-2 no-scrollbar">
          <ul className="space-y-3">
            {form.acquis.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-slate-300 group/acquis"
              >
                <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 group-hover/acquis:scale-150 transition-transform duration-300 shadow-lg shadow-violet-500/50"></span>
                <span className="flex-1 leading-relaxed group-hover/acquis:text-slate-50 transition-colors duration-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Badge */}
      <div className="mt-6 pt-4 border-t border-slate-700 flex justify-center">
        <span className="px-4 py-2 bg-gradient-to-r from-violet-900/30 to-blue-900/30 border border-violet-700 rounded-lg text-sm font-medium text-violet-300 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          Diplôme certifié
        </span>
      </div>
    </div>
  );
}
