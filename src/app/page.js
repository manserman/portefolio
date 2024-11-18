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
  /********************* ETAT  **************************/
  const [selectedSection, setSelectedSection] = useState(0); // section actuellement sélectionnée
  const sections = [
    "accueil",
    "savoir-faire",
    "stack",
    "competences",
    "experiences",
    "savoirs",
    "formations",
    "projets",
  ]; // nom des sections

  // Fonction de gestion du scroll
  // Fonction de gestion du scroll avec débouncing
  let scrollTimeout = null;
  const handleScroll = (event) => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(() => {
      if (event.deltaY > 0) {
        // Si l'utilisateur fait défiler vers le bas
        setSelectedSection((prevSection) =>
          prevSection === sections.length - 1 ? 0 : prevSection + 1
        );
      } else {
        // Si l'utilisateur fait défiler vers le haut
        setSelectedSection((prevSection) =>
          prevSection === 0 ? sections.length - 1 : prevSection - 1
        );
      }
    }, 300); // Délai de 300 ms
  };

  // Effet pour gérer le défilement de la molette
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  // Effet pour faire défiler vers la section sélectionnée
  useEffect(() => {
    const section = document.getElementById(sections[selectedSection]);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedSection]);

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
              Diplômé d'un Master MIAGE (Méthodes Informatiques Appliquées à la
              Gestion des Entreprises) avec mention bien, j'ai eu l'opportunité
              de développer des compétences solides dans le domaine du
              développement informatique, notamment en back-end Java. Au cours
              de mes deux années d'expérience professionnelle, j'ai pu
              contribuer à des projets significatifs, notamment lors de ma
              participation à la migration du code de Java 6 à java 8 puis java
              11 et finalement vers Java 17 chez Autoliv, une entreprise
              internationale spécialisée dans les technologies de sécurité
              automobile. Cette migration a permis une modernisation importante
              des systèmes, améliorant ainsi la performance et la sécurité des
              applications. De plus, j'ai méné la migration des webservices
              REST, permettant le partage d'informations entre les parties java
              et C++, de jersey vers Springboot (uniquement) facilitant la mise
              en place d'applications plus robustes et flexibles. J'ai également
              utilisé des outils comme Jenkins et GitLab CI pour l'intégration
              continue (CI) et le déploiement continu (CD), participant à
              l'automatisation des processus de build et de déploiement. Grâce à
              ces pipelines CI/CD, j'ai pu bénéficier des tests automatisés pour
              garantir la stabilité du code à chaque mise à jour, assurant ainsi
              une livraison rapide et fiable des fonctionnalités. Ma maîtrise de
              technologies telles que Java, le serveur d'applications WildFly,
              et l'outil de gestion de projet Maven me permet d'intervenir
              efficacement sur des projets complexes. J'ai également acquis des
              compétences en systèmes d'information web, ce qui me donne une
              bonne compréhension des besoins liés à la gestion et à
              l'intégration de données dans des environnements variés. Passionné
              par les défis techniques liés aux architectures back-end, je suis
              en permanence à la recherche de moyens pour améliorer la
              scalabilité et la fiabilité des systèmes. Bien que mon expertise
              principale soit orientée vers le back-end, je suis également
              ouvert aux opportunités qui me permettraient de développer
              davantage mes compétences en full stack, afin d’avoir une vue plus
              complète des applications web modernes et de participer à des
              projets de bout en bout.
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
                  href="./files/cv_Mansour.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  Mon CV
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
            <div className="flex flex-wrap gap-4 mt-6 justify-evenly">
              {[
                { name: "Java", imgSrc: "./img/java.png" },
                { name: "Spring Boot", imgSrc: "./img/spring.png" },
                { name: "Hibernate", imgSrc: "./img/hibernate.png" },
                { name: "Spring Data JPA", imgSrc: "./img/data_jpa.png" },
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
                <span className="text-black font-serif text-4xl">
              Autre Stack
            </span>
            <div className="flex flex-wrap gap-4 mt-6 justify-evenly">
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
