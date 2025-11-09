"use client";
import Image from "next/image";
import Header from "./Components/Header";
import Experience from "./Components/Experience";
import Competence from "./Components/Competence";
import Formation from "./Components/Formation";
import data_comp from "./Data/data_competences";
import data_form from "./Data/data_formations";
import data_exp from "./Data/data_experience";

export default function Home() {
  // Protection robuste contre les données undefined
  let experiences = [];
  let competences = [];
  let formations = [];

  try {
    experiences = data_exp() || [];
  } catch (e) {
    console.error("Error loading experiences:", e);
  }

  try {
    competences = data_comp() || [];
  } catch (e) {
    console.error("Error loading competences:", e);
  }

  try {
    formations = data_form() || [];
  } catch (e) {
    console.error("Error loading formations:", e);
  }

  // S'assurer que ce sont des tableaux
  if (!Array.isArray(experiences)) experiences = [];
  if (!Array.isArray(competences)) competences = [];
  if (!Array.isArray(formations)) formations = [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header />

      {/* HERO SECTION */}
      <section
        id="accueil"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Photo de profil */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                <Image
                  src="/img/photo_profil.JPG"
                  alt="Mohamadou Mansour HABIBOU HAMANI"
                  width={200}
                  height={200}
                  className="relative rounded-full object-cover border-4 border-indigo-600/30 shadow-2xl shadow-indigo-600/50 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/10 border border-indigo-600/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="text-2xl">👋</span>
              <span className="text-sm font-medium text-indigo-300">
                Bienvenue sur mon portfolio
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-indigo-200 to-violet-200 bg-clip-text text-transparent">
                Mohamadou Mansour<br />HABIBOU HAMANI
              </span>
            </h1>

            {/* Title */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-indigo-600 to-violet-600 rounded"></div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300">
                Ingénieur Logiciel
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-violet-600 to-indigo-600 rounded"></div>
            </div>

            {/* Specializations */}
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Spécialisé en <span className="text-indigo-400 font-semibold">Backend Java</span>,
              <span className="text-indigo-400 font-semibold"> Systèmes Distribués</span> et
              <span className="text-indigo-400 font-semibold"> Architecture Middleware</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#experiences"
                className="btn-primary px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg shadow-indigo-600/30"
              >
                Voir mes expériences
              </a>
              <a
                href="#contact"
                className="btn-secondary px-8 py-4 bg-slate-800/50 border-2 border-slate-700 text-white rounded-xl font-semibold hover:border-indigo-600 hover:bg-slate-800 transition-all backdrop-blur-sm"
              >
                Me contacter
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400">3+</div>
                <div className="text-sm text-slate-400 mt-1">Ans d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-violet-400">15+</div>
                <div className="text-sm text-slate-400 mt-1">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* À PROPOS */}
      <section id="apropos" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-indigo-200 to-violet-200 bg-clip-text text-transparent">
                À propos
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Mon parcours et mes compétences</p>
          </div>

          <div className="modern-card p-8 sm:p-12 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-slate-300 leading-relaxed mb-6">
                Diplômé d'un <span className="text-indigo-400 font-semibold">Master MIAGE</span> (Méthodes Informatiques
                Appliquées à la Gestion des Entreprises), avec une spécialisation
                en <span className="text-indigo-400 font-semibold">Ingénierie des Données et de la Décision</span>, obtenu avec
                mention Bien.
              </p>

              <p className="text-slate-300 leading-relaxed mb-6">
                Fort de <span className="text-indigo-400 font-semibold">trois années d'expérience professionnelle</span>,
                j'ai contribué à des projets significatifs, notamment chez <span className="text-indigo-400 font-semibold">Autoliv</span>,
                une entreprise spécialisée dans les technologies de sécurité automobile, et sur le
                <span className="text-indigo-400 font-semibold"> projet ORCI</span>, une initiative européenne d'optimisation
                du trafic aérien par l'IA.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-semibold text-indigo-400 mb-3">Expertise Backend</h3>
                  <p className="text-slate-400">
                    Maîtrise de Java, Spring Boot, et architectures microservices pour des systèmes robustes et scalables.
                  </p>
                </div>

                <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-semibold text-violet-400 mb-3">Systèmes Distribués</h3>
                  <p className="text-slate-400">
                    Conception de middleware et intégration de protocoles (REST, AMQP, RPC) pour des communications temps réel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPÉRIENCES */}
      <section id="experiences" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-indigo-200 to-violet-200 bg-clip-text text-transparent">
                Expériences Professionnelles
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Mon parcours professionnel</p>
          </div>

          <div className="timeline space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <Experience exp={exp} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section id="competences" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-indigo-200 to-violet-200 bg-clip-text text-transparent">
                Compétences
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Technologies et expertises</p>
          </div>

          <div className="grid gap-6">
            {competences.map((compGroup, groupIndex) => (
              compGroup.comp && Array.isArray(compGroup.comp) ? (
                compGroup.comp.map((comp, index) => (
                  <Competence key={`${groupIndex}-${index}`} comp={comp} />
                ))
              ) : null
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-indigo-200 to-violet-200 bg-clip-text text-transparent">
                Contact
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Travaillons ensemble</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="mailto:mansourh923@gmail.com"
              className="modern-card p-6 hover:scale-105 transition-transform bg-slate-900/50 border border-slate-800 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-2xl shadow-lg">
                  ✉️
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email</div>
                  <div className="text-sm text-slate-200 truncate">mansourh923@gmail.com</div>
                </div>
              </div>
            </a>

            <div className="modern-card p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-2xl shadow-lg">
                  📱
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Téléphone</div>
                  <div className="text-sm text-slate-200">06 65 15 40 90</div>
                </div>
              </div>
            </div>

            <div className="modern-card p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-2xl shadow-lg">
                  📍
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Localisation</div>
                  <div className="text-sm text-slate-200">Ile de France</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="./files/FR_Mohamadou_Mansour_HABIBOU_HAMANI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg shadow-indigo-600/30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger mon CV
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="text-slate-400 text-sm">
            <p>© 2025 Mohamadou Mansour HABIBOU HAMANI - Tous droits réservés</p>
            <p className="mt-2">Ingénieur Logiciel | Backend Java & Systèmes Distribués</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
