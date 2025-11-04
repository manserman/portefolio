"use client";

import { useState } from "react";

export default function Competence({ comp }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisplay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-4 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 modern-card">
      {/* Header - Cliquable */}
      <button
        onClick={toggleDisplay}
        className={`
          w-full flex items-center justify-between px-6 py-4 text-white font-medium
          transition-all duration-300 relative overflow-hidden group
          ${comp.color}
        `}
      >
        {/* Gradient overlay au hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

        {/* Icon de gauche */}
        <div className="flex items-center gap-3 relative z-10">
          <span className={`
            text-2xl transition-all duration-300
            ${isOpen ? 'rotate-90 scale-110' : 'scale-100'}
          `}>
            ▶
          </span>
          <h2 className="text-lg font-semibold tracking-wide">{comp.titre}</h2>
        </div>

        {/* Badge compteur */}
        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
          {comp.competences.length} compétence{comp.competences.length > 1 ? 's' : ''}
        </span>
      </button>

      {/* Content - Expandable */}
      <div
        className={`
          bg-white transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 py-5">
          <ul className="space-y-3">
            {comp.competences.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-slate-700 group/item animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className="flex-1 leading-relaxed group-hover/item:text-slate-900 transition-colors duration-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
