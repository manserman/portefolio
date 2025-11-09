import { useState } from "react";
import Image from "next/image";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { id: "accueil", label: "Accueil", icon: "🏠" },
    { id: "savoir-faire", label: "Savoir faire", icon: "💼" },
    { id: "stack", label: "Stack technique", icon: "⚙️" },
    { id: "competences", label: "Compétences", icon: "🎯" },
    { id: "experiences", label: "Expériences", icon: "📊" },
    { id: "savoirs", label: "Savoir-être", icon: "🌟" },
    { id: "formations", label: "Formations", icon: "🎓" },
    { id: "projets", label: "Projets", icon: "🚀" }
  ];

  return (
    <>
      {/********************* BURGER MENU BUTTON **********************/}
      <button
        className="h-12 w-12 fixed top-6 left-6 z-50 bg-slate-800/90 backdrop-blur-md text-white rounded-lg shadow-lg shadow-violet-500/30 hover:bg-violet-500 transition-all duration-300 flex items-center justify-center group hover:scale-110 border border-slate-700"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5 w-5">
          <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/********************* OVERLAY **********************/}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/********************* SIDE BAR **********************/}
      <aside
        className={`h-screen w-72 fixed left-0 top-0 bg-gradient-to-b from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl shadow-2xl flex flex-col z-40 transform transition-all duration-500 ease-in-out border-r border-slate-700/50 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Profile Section */}
        <div className="pt-24 pb-8 px-6 border-b border-slate-700/50">
          <div className="relative mx-auto w-40 h-40 group">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full animate-pulse opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            <Image
              className="relative rounded-full border-4 border-slate-700 shadow-xl shadow-violet-500/30 object-cover transition-transform duration-300 group-hover:scale-105"
              height={160}
              width={160}
              src="./img/photo_profil.JPG"
              alt="Photo de profil"
              priority
            />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-white font-semibold text-lg tracking-wide">M. Mansour</h2>
            <p className="text-slate-400 text-sm mt-1">Ingénieur Logiciel</p>
            <div className="mt-2 flex justify-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
              <span className="text-xs text-slate-500">Disponible</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3 no-scrollbar">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActiveSection(item.id);
                  // Close menu on mobile after clicking
                  if (window.innerWidth < 1024) {
                    setTimeout(() => setIsOpen(false), 300);
                  }
                }}
                className={`
                  group flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
                  transition-all duration-300 relative overflow-hidden
                  ${activeSection === item.id
                    ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }
                `}
              >
                <span className="text-xl transition-transform duration-300 group-hover:scale-125">
                  {item.icon}
                </span>
                <span className="flex-1 transition-transform duration-300 group-hover:translate-x-1">
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <span className="absolute right-2 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-lg shadow-white/50"></span>
                )}
              </a>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-slate-700/50">
          <div className="text-center text-xs text-slate-500">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
              <span className="text-violet-400">✨</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
            </div>
            <p>Portfolio 2025</p>
            <p className="mt-1">© Tous droits réservés</p>
          </div>
        </div>
      </aside>
    </>
  );
}
