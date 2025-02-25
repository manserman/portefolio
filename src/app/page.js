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
    <div className="h-screen  w-screen overflow-y-auto">
      <main className="h-full bg-inherit flex flex-row">
        {/********************* SIDE BAR **********************/}
        <Sidebar />

        {/********************* SECTION PRINCIPALE **********************/}
        <div id="princiaple">
          <section
            id="accueil"
            className="min-h-screen flex flex-col justify-center pl-12 pr-12"
          >
            <span className="text-5xl font-serif text-black">
              Mohamadou Mansour HABIBOU HAMANI
            </span>
            <div className="flex flex-row mt-4">
              <span className="italic font-serif text-xl text-black">
                Ingénieur logiciel
              </span>
            </div>
            <div className="text-justify tracking-wide text-base font-serif w-[85%] mt-4">
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

            <div className="flex justify-between items-center mt-8 space-x-4">
              <div className="flex items-center">
                <span>&#128233;</span>
                <span className="ml-2">mansourh923@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span>&#128241;</span>
                <span className="ml-2">06 65 15 40 90</span>
              </div>
              <div className="flex items-center">
                <span>&#128664;</span>
                <span className="ml-2">Ile de France / Hauts de France</span>
              </div>
              <div className="flex items-center">
                <a
                  href="./files/FR_Mohamadou_Mansour_HABIBOU_HAMANI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  Consulter Mon CV
                </a>
              </div>
            </div>
          </section>
          <section
            id="savoir-faire"
            className="min-h-screen flex flex-col justify-center items-center"
          >
            <span className="text-black font-serif text-4xl">SAVOIR-FAIRE</span>
            <div className="text-slate-600 text-base italic mt-2">
              Liste des savoir-faire techniques et professionnels
            </div>

            <div className="relative w-full flex items-center justify-center mt-6 px-12">
              {/* Bouton de gauche */}
              <span
                onClick={handlePreviousSavoirFaire}
                className="absolute left-0 text-7xl text-gray-800 hover:cursor-pointer hover:scale-[130%] transform -translate-y-1/2 top-[50%]"
              >
                &#10216;
              </span>

              {/* Carte de savoir-faire */}
              <div className="bg-white shadow-lg rounded-lg border border-gray-200 w-[500px] h-[500px] p-6 mx-auto flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {savoirFaire[selectedSavoirFaire].nom}
                </h3>
                <p className="text-base text-gray-600 mt-2">
                  {savoirFaire[selectedSavoirFaire].description}
                </p>
              </div>

              {/* Bouton de droite */}
              <span
                onClick={handleNextSavoirFaire}
                className="absolute right-0 text-7xl text-gray-800 hover:cursor-pointer hover:scale-[130%] transform -translate-y-1/2 top-[50%]"
              >
                &#10217;
              </span>
            </div>
          </section>

          <section
            id="stack"
            className="min-h-screen flex flex-col justify-center pl-12 pr-12"
          >
            <span className="text-black font-serif text-4xl">
              Stack technique principale
            </span>
            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              {[
                { name: "Java", imgSrc: "./img/java.png" },
                { name: "Spring Boot", imgSrc: "./img/spring.png" },
                { name: "Hibernate", imgSrc: "./img/hibernate.png" },
                { name: "Spring Data JPA", imgSrc: "./img/data_jpa.png" },
                { name: "Kubernates", imgSrc: "./img/kubernates.png" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-white p-4 rounded-lg w-[150px] h-[150px] border border-gray-300 shadow-lg hover:shadow-2xl hover:border-gray-500 transition-all duration-300"
                >
                  <Image
                    src={tech.imgSrc}
                    alt={tech.name}
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">{tech.name}</span>
                </div>
              ))}
            </div>
            <br></br>
            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              {[
                { name: "Docker", imgSrc: "./img/docker.png" },
                { name: "Spring MVC", imgSrc: "./img/spring_mvc.png" },
                { name: "Mockito", imgSrc: "./img/mockito.png" },
                { name: "JUnit", imgSrc: "./img/JUnit.png" },
                { name: "Jenkins", imgSrc: "./img/jenkins.png" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-white p-4 rounded-lg w-[150px] h-[150px] border border-gray-300 shadow-lg hover:shadow-2xl hover:border-gray-500 transition-all duration-300"
                >
                  <Image
                    src={tech.imgSrc}
                    alt={tech.name}
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">{tech.name}</span>
                </div>
              ))}
            </div>
            <br></br>
            <span className="text-black font-serif text-4xl">Autre Stack</span>
            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              {[
                { name: "Angular", imgSrc: "./img/angular.png" },
                { name: "React", imgSrc: "./img/react.png" },
                { name: "C++", imgSrc: "./img/c++.png" },
                { name: "C#", imgSrc: "./img/csharp.png" },
                { name: "ASP .NET Core", imgSrc: "./img/NET_Core.png" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-white p-4 rounded-lg w-[150px] h-[150px] border border-gray-300 shadow-lg hover:shadow-2xl hover:border-gray-500 transition-all duration-300"
                >
                  <Image
                    src={tech.imgSrc}
                    alt={tech.name}
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>
          <section
            id="competences"
            className="min-h-screen flex flex-col justify-center pl-12 pt-10"
          >
            <span className="text-black font-serif text-4xl">COMPETENCES</span>
            <div className="text-slate-600 text-base italic mt-2">
              Compétences issues du référentiel présent sur le site du CIGREF
              (version 2022)
            </div>
            <div className="flex flex-row mx-auto space-x-7 mt-6 h-[17%] w-[70%]">
              {competences.map((item, index) => (
                <div
                  key={index}
                  className={
                    "h-full w-[100%] flex items-center justify-center border border-black font-semibold text-white " +
                    item.color
                  }
                >
                  {item.poste}
                </div>
              ))}
            </div>
            <div className="no-scrollbar mt-10 overflow-y-auto h-[60%]">
              {competences[0].comp.map((item, index) => (
                <Competence key={index} comp={item}></Competence>
              ))}
            </div>
          </section>

          <section
            id="experiences"
            className="min-h-screen flex flex-col justify-center items-center px-12"
          >
            <span className="text-black font-serif text-4xl">EXPERIENCES</span>
            <div className="text-slate-600 text-base italic mt-2">
              Liste des expériences professionnelles
            </div>

            <div className="relative w-full mt-6">
              {/* Bouton pour revenir en arrière */}
              <span
                onClick={handlePreviousExperience}
                className="absolute left-0 top-[50%] text-7xl text-gray-800 hover:cursor-pointer hover:scale-[130%] transform -translate-y-1/2"
              >
                &#10216;
              </span>

              <Experience exp={experiences[selectedExperience]} />

              {/* Bouton pour aller à l'expérience suivante */}
              <span
                onClick={handleNextExperience}
                className="absolute right-0 top-[50%] text-7xl text-gray-800 hover:cursor-pointer hover:scale-[130%] transform -translate-y-1/2"
              >
                &#10217;
              </span>
            </div>
          </section>
          <section
            id="savoirs"
            className="min-h-screen flex flex-col justify-center items-center"
          >
            <span className="text-black font-serif text-4xl">SAVOIR ETRE</span>
            <div className="text-slate-600 text-base italic mt-2">
              Savoir-être issus du référentiel présent sur le site de pôle
              emploi (ROME 4.0)
            </div>

            <div className="relative w-full flex items-center justify-center mt-6 px-12">
              {/* Bouton de gauche */}
              <span
                onClick={handlePreviousSavoir}
                className="absolute left-0 text-7xl text-gray-800 hover:cursor-pointer hover:scale-[130%] transform -translate-y-1/2 top-[50%]"
              >
                &#10216;
              </span>

              {/* Carte de savoir-être avec taille fixe */}
              <div className="bg-white shadow-lg rounded-lg border border-gray-200 w-[500px] h-[500px] p-6 mx-auto flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {savoirs[selectedSavoir].nom}
                </h3>
                <p className="text-base text-gray-600 mt-2 text-center overflow-y-auto">
                  {savoirs[selectedSavoir].description}
                </p>
              </div>

              {/* Bouton de droite */}
              <span
                onClick={handleNextSavoir}
                className="absolute right-0 text-7xl text-gray-800 hover:cursor-pointer hover:scale-[130%] transform -translate-y-1/2 top-[50%]"
              >
                &#10217;
              </span>
            </div>
          </section>
          <section
            id="formations"
            className="min-h-screen flex flex-col justify-center items-center"
          >
            <span className="text-black font-serif text-4xl">FORMATIONS</span>
            <div className="text-slate-600 text-base italic mt-2">
              Liste des acquis des formations selon le site France compétences
            </div>

            <div className="relative w-[80%] mt-6 flex items-center">
              {/* Bouton de gauche */}
              <span
                onClick={handlePreviousFormation}
                className="absolute left-0 top-[50%] text-7xl text-gray-800 hover:cursor-pointer hover:scale-[130%] transform -translate-y-1/2"
              >
                &#10216;
              </span>

              {/* Formation au centre */}

              <Formation form={formations[selectedFormation]} />

              {/* Bouton de droite */}
              <span
                onClick={handleNextFormation}
                className="absolute right-0 top-[50%] text-7xl text-gray-800 hover:cursor-pointer hover:scale-[130%] transform -translate-y-1/2"
              >
                &#10217;
              </span>
            </div>
          </section>

          <section
            id="projets"
            className="min-h-screen flex flex-col justify-center pl-12 relative"
          >
            <span className="text-black font-serif text-4xl">Projets</span>

            <div className="relative w-full h-full mt-5">
              {/* Bouton précédent */}
              <span
                onClick={handlePreviousprojet}
                className="absolute top-[50%] left-5 text-7xl text-gray-800 hover:cursor-pointer hover:scale-[130%] z-10"
              >
                &#10216;
              </span>

              {/* Bouton suivant */}
              <span
                onClick={handleNextProjet}
                className="absolute top-[50%] right-5 text-7xl text-gray-800 hover:cursor-pointer hover:scale-[130%] z-10"
              >
                &#10217;
              </span>

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
