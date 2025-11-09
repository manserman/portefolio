import { useEffect, useState } from "react";
import Image from "next/image";

export default function Projet({ projet }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, [projet]);

  // Protection contre les données undefined
  if (!projet) {
    return null;
  }

  return (
    <div
      className={`w-full max-w-2xl mx-auto px-4 transition-all duration-500 ease-in-out transform ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="modern-card overflow-hidden group">
        {/* Header avec gradient */}
        <div className="relative bg-gradient-to-br from-violet-600 via-blue-600 to-violet-700 px-6 py-8 overflow-hidden">
          {/* Effets de fond animés */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Titre */}
          <h3 className="relative text-center text-white font-bold text-2xl tracking-wide drop-shadow-lg">
            {projet.titre}
          </h3>

          {/* Badge Projet */}
          <div className="relative mt-3 flex justify-center">
            <span className="px-4 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs font-medium">
              🚀 Projet Personnel
            </span>
          </div>
        </div>

        {/* Image du projet avec effet hover */}
        <div className="relative overflow-hidden bg-slate-900/50">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <Image
            width={600}
            height={400}
            src={"./img/" + projet.illustration}
            alt={projet.titre}
            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Description */}
        <div className="px-6 py-6">
          <div className="flex items-start gap-3 mb-4">
            <svg className="w-6 h-6 text-violet-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-slate-300 leading-relaxed flex-1">
              {projet.description}
            </p>
          </div>

          {/* Bouton d'action */}
          <a
            href={projet.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-lg font-medium shadow-md shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105 group/btn"
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>Voir le code source</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Footer avec info */}
        <div className="px-6 py-4 bg-slate-800/50 border-t border-slate-700">
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Projet open source disponible sur GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
}
