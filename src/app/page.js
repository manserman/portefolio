"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Experience from "./Components/Experience";
import Projet from "./Components/Projet";
import Competence from "./Components/Competence";
import Formation from "./Components/Formation";
import data_comp from "./Data/data_competences";
import data_form from "./Data/data_formations";
import data_savoir from "./Data/data_savoir";
import data_exp from "./Data/data_experience";
import data_projet from "./Data/data_projet";
import Sidebar from "./sideMenu";
import data_savoir_faire from "./Data/data_savoir_faire";

export default function Home() {
  /********************* DONNEES  **************************/
  const experiences = data_exp();
  const projets = data_projet();
  const competences = data_comp();
  const formations = data_form();
  const savoirs = data_savoir();
  const savoirFaire = data_savoir_faire();
 
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedFormation, setSelectedFormation] = useState(0);

  /********************* NAVIGATION DES FORMATIONS  **************************/
  const handleNextFormation = () => {
    setSelectedFormation((prevFormation) =>
      prevFormation === formations.length - 1 ? 0 : prevFormation + 1
    );
  };
  const handleNextProjet = () => {
    setSelectedProject((prevProjet) =>
      prevProjet === projets.length - 1 ? 0 : prevProjet + 1
    );
  };

  const handlePreviousFormation = () => {
    setSelectedFormation((prevFormation) =>
      prevFormation === 0 ? formations.length - 1 : prevFormation - 1
    );
  };
  const handlePreviousprojet = () => {
    setSelectedProject((prevProjet) =>
      prevProjet === 0 ? projets.length - 1 : prevProjet - 1
    );
  };
  const [selectedSavoir, setSelectedSavoir] = useState(0);

  const handleNextSavoir = () => {
    setSelectedSavoir((prevSavoir) =>
      prevSavoir === savoirs.length - 1 ? 0 : prevSavoir + 1
    );
  };

  const handlePreviousSavoir = () => {
    setSelectedSavoir((prevSavoir) =>
      prevSavoir === 0 ? savoirs.length - 1 : prevSavoir - 1
    );
  };
  const [selectedExperience, setSelectedExperience] = useState(0);

  const handleNextExperience = () => {
    setSelectedExperience((prevExperience) =>
      prevExperience === experiences.length - 1 ? 0 : prevExperience + 1
    );
  };

  const handlePreviousExperience = () => {
    setSelectedExperience((prevExperience) =>
      prevExperience === 0 ? experiences.length - 1 : prevExperience - 1
    );
  };
  const [selectedSavoirFaire, setSelectedSavoirFaire] = useState(0);

  const handleNextSavoirFaire = () => {
    setSelectedSavoirFaire((prevSavoirFaire) =>
      prevSavoirFaire === savoirFaire.length - 1 ? 0 : prevSavoirFaire + 1
    );
  };

  const handlePreviousSavoirFaire = () => {
    setSelectedSavoirFaire((prevSavoirFaire) =>
      prevSavoirFaire === 0 ? savoirFaire.length - 1 : prevSavoirFaire - 1
    );
  };
  return (
    <div className="h-screen w-screen overflow-y-auto page-transition">
      <main className="h-full bg-inherit flex flex-row relative">
        {/********************* SIDE BAR **********************/}
        <Sidebar />

        {/********************* SECTION PRINCIPALE **********************/}
        <div id="princiaple" className="ml-0 lg:ml-72 w-full transition-all duration-300">
          <section
            id="accueil"
            className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-12 relative overflow-hidden fade-in-section is-visible"
          >
            {/* Background decorative elements - Dark theme */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10">
              {/* Badge de salutation */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-6 animate-fade-in backdrop-blur-sm">
                <span className="text-2xl">👋</span>
                <span className="text-sm font-medium text-violet-300">Bienvenue sur mon portfolio</span>
              </div>

              {/* Nom */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-50 via-violet-300 to-blue-300 bg-clip-text text-transparent leading-tight mb-6 animate-fade-in-up">
                Mohamadou Mansour<br />HABIBOU HAMANI
              </h1>

              {/* Titre professionnel */}
              <div className="flex items-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-blue-500 rounded"></div>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
                  Ingénieur Logiciel
                </h2>
              </div>

              {/* Description */}
              <div className="max-w-5xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="text-justify leading-relaxed text-sm sm:text-base text-slate-300 space-y-4 bg-slate-800/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-700/50">
              Diplômé d'un <b>Master MIAGE</b> (Méthodes Informatiques
              Appliquées à la Gestion des Entreprises), avec une spécialisation
              en <b>Ingénierie des Données et de la Décision</b>, obtenu avec
              mention Bien, j'ai développé des compétences solides en
              développement informatique, notamment en <b>back-end Java</b>.
              Fort de <b>deux années d'expérience professionnelle</b>, j'ai
              contribué à des projets significatifs, notamment chez{" "}
              <b>Autoliv</b>, une entreprise spécialisée dans les technologies
              de sécurité automobile. J'y ai participé à la{" "}
              <b>migration du code</b> de <b>Java 6</b> vers <b>Java 8</b>, puis{" "}
              <b>Java 11</b> et enfin <b>Java 17</b>, modernisant les systèmes
              et améliorant leur <b>performance et sécurité</b>. J'ai également
              mené la <b>migration des webservices REST</b>, optimisant le
              partage d'informations entre les parties <b>Java</b> et <b>C++</b>
              , en passant de <b>Jersey</b> à <b>Spring Boot</b>. Cette
              transition a rendu les applications{" "}
              <b>plus robustes et flexibles</b>. En parallèle, j'ai travaillé
              sur l'intégration de <b>Kafka</b>
              pour la <b>gestion des événements</b>, facilitant l'échange de
              données entre microservices et améliorant la scalabilité. Afin
              d'optimiser le déploiement et la gestion des applications, j'ai
              utilisé <b>Docker</b> pour la
              <b>conteneurisation</b> et <b>Kubernetes</b> pour orchestrer et
              automatiser le <b>déploiement des services</b>. Cette approche a
              permis d'améliorer la <b>résilience</b> et la <b>scalabilité</b>{" "}
              des applications en production. De plus, j'ai intégré des
              pipelines <b>CI/CD</b> avec <b>Jenkins</b> et <b>GitLab CI</b>,
              automatisant les processus de build, de test et de déploiement.
              Cela a renforcé la <b>stabilité</b> et accéléré la{" "}
              <b>livraison des fonctionnalités</b>, garantissant un cycle de
              développement plus fluide. Ma maîtrise de technologies telles que{" "}
              <b>Java, Spring Boot, Kafka, Kubernetes, Docker</b>, le serveur
              d'applications <b>WildFly</b> et <b>Maven</b> me permet
              d'intervenir efficacement sur des projets complexes. J'ai
              également acquis des compétences en{" "}
              <b>systèmes d'information web</b>, me donnant une bonne
              compréhension des enjeux liés à la{" "}
              <b>gestion et l'intégration des données</b> dans divers
              environnements. Passionné par les défis techniques des{" "}
              <b>architectures back-end</b>, je cherche constamment à améliorer
              la <b>scalabilité</b> et la <b>fiabilité</b> des systèmes. Bien
              que mon expertise principale soit en <b>back-end</b>, je suis
              ouvert aux opportunités me permettant de renforcer mes compétences
              en <b>full stack</b>, afin d'avoir une vision complète des{" "}
              <b>applications web modernes</b> et de contribuer à des projets de
              bout en bout.
                </div>
              </div>

              {/* Informations de contact */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <a href="mailto:mansourh923@gmail.com" className="group modern-card p-4 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-violet-500/30">
                      ✉️
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-400 font-medium">Email</div>
                      <div className="text-sm text-slate-200 truncate">mansourh923@gmail.com</div>
                    </div>
                  </div>
                </a>

                <div className="modern-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-xl shadow-lg shadow-violet-500/30">
                      📱
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-400 font-medium">Téléphone</div>
                      <div className="text-sm text-slate-200">06 65 15 40 90</div>
                    </div>
                  </div>
                </div>

                <div className="modern-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-xl shadow-lg shadow-violet-500/30">
                      📍
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-400 font-medium">Localisation</div>
                      <div className="text-sm text-slate-200">Ile de France</div>
                    </div>
                  </div>
                </div>

                <a
                  href="./files/FR_Mohamadou_Mansour_HABIBOU_HAMANI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-button text-white p-4 rounded-lg flex items-center justify-center gap-2 font-medium hover:scale-105 transition-all duration-300 group/cv shadow-lg shadow-violet-500/30"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="hidden sm:inline">Télécharger CV</span>
                  <span className="sm:hidden">CV</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/cv:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
          <section
            id="savoir-faire"
            className="min-h-screen flex flex-col justify-center items-center fade-in-section"
          >
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-50 via-violet-300 to-blue-300 bg-clip-text text-transparent mb-3">
                SAVOIR-FAIRE
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                Liste des savoir-faire techniques et professionnels
              </p>
            </div>

            <div className="relative w-full flex items-center justify-center mt-6 px-4 sm:px-8 lg:px-12">
              {/* Bouton de navigation gauche */}
              <button
                onClick={handlePreviousSavoirFaire}
                className="absolute left-2 sm:left-8 lg:left-12 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-800/80 shadow-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-violet-500 hover:text-white hover:scale-110 transition-all duration-300 group backdrop-blur-sm"
                aria-label="Précédent"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Carte de savoir-faire moderne */}
              <div className="modern-card w-full max-w-[600px] min-h-[300px] sm:min-h-[400px] p-6 sm:p-10 mx-auto flex flex-col justify-center relative overflow-hidden animate-fade-in">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-full -mr-16 -mt-16 opacity-50"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-6 backdrop-blur-sm">
                    <span className="text-2xl">💼</span>
                    <span className="text-sm font-medium text-violet-300">
                      {selectedSavoirFaire + 1} / {savoirFaire.length}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6 leading-tight">
                    {savoirFaire[selectedSavoirFaire].nom}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                    {savoirFaire[selectedSavoirFaire].description}
                  </p>
                </div>
              </div>

              {/* Bouton de navigation droite */}
              <button
                onClick={handleNextSavoirFaire}
                className="absolute right-2 sm:right-8 lg:right-12 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-800/80 shadow-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-violet-500 hover:text-white hover:scale-110 transition-all duration-300 group backdrop-blur-sm"
                aria-label="Suivant"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </section>

          <section
            id="stack"
            className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-12 fade-in-section"
          >
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-50 via-violet-300 to-blue-300 bg-clip-text text-transparent mb-3">
                Stack Technique
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">Technologies et frameworks maîtrisés</p>
            </div>

            {/* Stack principale */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-blue-500 rounded"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100">Stack Principale</h3>
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
                {[
                  { name: "Java", imgSrc: "./img/java.png" },
                  { name: "Spring Boot", imgSrc: "./img/spring.png" },
                  { name: "Hibernate", imgSrc: "./img/hibernate.png" },
                  { name: "Spring Data JPA", imgSrc: "./img/data_jpa.png" },
                  { name: "Kubernetes", imgSrc: "./img/kubernates.png" },
                  { name: "Docker", imgSrc: "./img/docker.png" },
                  { name: "Spring MVC", imgSrc: "./img/spring_mvc.png" },
                  { name: "Mockito", imgSrc: "./img/mockito.png" },
                  { name: "JUnit", imgSrc: "./img/JUnit.png" },
                  { name: "Jenkins", imgSrc: "./img/jenkins.png" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="group modern-card p-6 w-40 h-40 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={tech.imgSrc}
                        alt={tech.name}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-300 text-center group-hover:text-violet-400 transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Autre stack */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-blue-500 rounded"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100">Technologies Complémentaires</h3>
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
                {[
                  { name: "Angular", imgSrc: "./img/angular.png" },
                  { name: "React", imgSrc: "./img/react.png" },
                  { name: "C++", imgSrc: "./img/c++.png" },
                  { name: "C#", imgSrc: "./img/csharp.png" },
                  { name: "ASP .NET Core", imgSrc: "./img/NET_Core.png" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="group modern-card p-6 w-40 h-40 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={tech.imgSrc}
                        alt={tech.name}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-300 text-center group-hover:text-violet-400 transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section
            id="competences"
            className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-20 fade-in-section"
          >
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-50 via-violet-300 to-blue-300 bg-clip-text text-transparent mb-3">
                COMPÉTENCES
              </h2>
              <p className="text-slate-400 text-sm sm:text-base lg:text-lg">
                Compétences issues du référentiel présent sur le site du CIGREF (version 2022)
              </p>
            </div>

            {/* Tabs des catégories */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-12">
              {competences.map((item, index) => (
                <div
                  key={index}
                  className={`
                    px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-white text-center text-sm sm:text-base
                    shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300
                    min-w-[150px] sm:min-w-[200px] modern-button
                    ${item.color}
                  `}
                >
                  {item.poste}
                </div>
              ))}
            </div>

            {/* Liste des compétences */}
            <div className="max-h-[500px] sm:max-h-[600px] overflow-y-auto px-2 sm:px-4 no-scrollbar space-y-4">
              {competences[0].comp.map((item, index) => (
                <Competence key={index} comp={item} />
              ))}
            </div>
          </section>

          <section
            id="experiences"
            className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 fade-in-section"
          >
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-50 via-violet-300 to-blue-300 bg-clip-text text-transparent mb-3">
                EXPÉRIENCES
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                Mon parcours professionnel
              </p>
            </div>

            <div className="relative w-full mt-6">
              {/* Bouton navigation gauche */}
              <button
                onClick={handlePreviousExperience}
                className="absolute left-0 sm:left-4 lg:left-0 top-[50%] z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-800/80 shadow-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-violet-500 hover:text-white hover:scale-110 transition-all duration-300 group -translate-y-1/2 backdrop-blur-sm"
                aria-label="Expérience précédente"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <Experience exp={experiences[selectedExperience]} />

              {/* Bouton navigation droite */}
              <button
                onClick={handleNextExperience}
                className="absolute right-0 sm:right-4 lg:right-0 top-[50%] z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-800/80 shadow-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-violet-500 hover:text-white hover:scale-110 transition-all duration-300 group -translate-y-1/2 backdrop-blur-sm"
                aria-label="Expérience suivante"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </section>
          <section
            id="savoirs"
            className="min-h-screen flex flex-col justify-center items-center fade-in-section"
          >
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-50 via-violet-300 to-blue-300 bg-clip-text text-transparent mb-3">
                SAVOIR-ÊTRE
              </h2>
              <p className="text-slate-400 text-sm sm:text-base lg:text-lg">
                Savoir-être issus du référentiel présent sur le site de Pôle emploi (ROME 4.0)
              </p>
            </div>

            <div className="relative w-full flex items-center justify-center mt-6 px-4 sm:px-8 lg:px-12">
              {/* Bouton navigation gauche */}
              <button
                onClick={handlePreviousSavoir}
                className="absolute left-2 sm:left-8 lg:left-12 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-800/80 shadow-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-violet-500 hover:text-white hover:scale-110 transition-all duration-300 group backdrop-blur-sm"
                aria-label="Précédent"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Carte moderne de savoir-être */}
              <div className="modern-card w-full max-w-[600px] min-h-[300px] sm:min-h-[400px] p-6 sm:p-10 mx-auto flex flex-col justify-center relative overflow-hidden animate-fade-in">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-full -mr-16 -mt-16 opacity-50"></div>

                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-6 backdrop-blur-sm">
                    <span className="text-2xl">🌟</span>
                    <span className="text-sm font-medium text-violet-300">
                      {selectedSavoir + 1} / {savoirs.length}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-6 leading-tight">
                    {savoirs[selectedSavoir].nom}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                    {savoirs[selectedSavoir].description}
                  </p>
                </div>
              </div>

              {/* Bouton navigation droite */}
              <button
                onClick={handleNextSavoir}
                className="absolute right-2 sm:right-8 lg:right-12 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-800/80 shadow-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-violet-500 hover:text-white hover:scale-110 transition-all duration-300 group backdrop-blur-sm"
                aria-label="Suivant"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </section>
          <section
            id="formations"
            className="min-h-screen flex flex-col justify-center items-center fade-in-section"
          >
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-50 via-violet-300 to-blue-300 bg-clip-text text-transparent mb-3">
                FORMATIONS
              </h2>
              <p className="text-slate-400 text-sm sm:text-base lg:text-lg">
                Liste des acquis des formations selon le site France Compétences
              </p>
            </div>

            <div className="relative w-full mt-6 flex items-center px-4 sm:px-8 lg:px-12">
              {/* Bouton navigation gauche */}
              <button
                onClick={handlePreviousFormation}
                className="absolute left-2 sm:left-8 lg:left-12 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-800/80 shadow-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-violet-500 hover:text-white hover:scale-110 transition-all duration-300 group backdrop-blur-sm"
                aria-label="Formation précédente"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Formation au centre */}
              <Formation form={formations[selectedFormation]} />

              {/* Bouton navigation droite */}
              <button
                onClick={handleNextFormation}
                className="absolute right-2 sm:right-8 lg:right-12 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-800/80 shadow-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-violet-500 hover:text-white hover:scale-110 transition-all duration-300 group backdrop-blur-sm"
                aria-label="Formation suivante"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </section>

          <section
            id="projets"
            className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 fade-in-section"
          >
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-50 via-violet-300 to-blue-300 bg-clip-text text-transparent mb-3">
                PROJETS
              </h2>
              <p className="text-slate-400 text-sm sm:text-base lg:text-lg">
                Mes réalisations et projets personnels
              </p>
            </div>

            <div className="relative w-full mt-6">
              {/* Bouton navigation gauche */}
              <button
                onClick={handlePreviousprojet}
                className="absolute left-2 sm:left-8 lg:left-12 top-[50%] z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-800/80 shadow-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-violet-500 hover:text-white hover:scale-110 transition-all duration-300 group -translate-y-1/2 backdrop-blur-sm"
                aria-label="Projet précédent"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Bouton navigation droite */}
              <button
                onClick={handleNextProjet}
                className="absolute right-2 sm:right-8 lg:right-12 top-[50%] z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-800/80 shadow-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-violet-500 hover:text-white hover:scale-110 transition-all duration-300 group -translate-y-1/2 backdrop-blur-sm"
                aria-label="Projet suivant"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Affichage du projet */}
              {projets.length > 0 && (
                <Projet projet={projets[selectedProject]} />
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
