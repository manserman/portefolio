"use client";

import { useState } from "react";
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

export default function Home() {
  /********************* DONNEES  **************************/
  const experiences = data_exp();
  const projets = data_projet();
  const competences = data_comp();
  const formations = data_form();
  const savoirs = data_savoir();

  /********************* ETAT  **************************/
  const [activeSection, setActiveSection] = useState(0);
  const [selectedProject, setSelectedProject] = useState(0);

  /********************* NAVIGATION  **************************/
  const sections = [
    "accueil",
    "stack",
    "competences",
    "experiences",
    "savoirs",
    "formations",
    "projets",
  ];

  return (
    <div className="h-screen w-screen overflow-hidden">
      <main className="h-full bg-inherit flex flex-row">
        {/********************* SIDE BAR **********************/}
        <div className="h-[100%] w-[17%] fixed bg-gray-800 flex flex-col">
          <Image
            className="mx-auto mt-20 scale-[115%] rounded-full overflow-hidden"
            height={300}
            width={200}
            src="./img/photo.png"
          />
          <div className="flex flex-col items-center justify-start mt-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
                onClick={() => setActiveSection(index)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </div>
            ))}
          </div>
        </div>

        {/********************* SECTION PRINCIPALE **********************/}
        <div className="flex flex-col w-[83%] ml-[17%]">
          {activeSection === 0 && (
            <section className="h-screen flex flex-col justify-center pl-12">
              <span className="text-5xl font-serif text-black">
                Mohamadou Mansour HABIBOU HAMANI
              </span>
              <div className="flex flex-row mt-4">
                <span className="italic font-serif text-xl text-black">
                  Ingénieur logiciel
                </span>
              </div>
              <div className="text-justify tracking-wide text-base font-serif w-[85%] mt-4">
                Fort d'une expérience de 2 ans en développement Java backend en
                alternance, j'ai contribué à la mise à jour du système de
                traçabilité d'Autoliv, passant de Java 6 à Java 11. J'ai assuré
                le bon fonctionnement des webservices REST et des outils
                d'administration et reporting, en mettant l'accent sur les tests
                unitaires pour garantir la qualité du code. Mes compétences
                incluent WildFly, Jersey, Spring Boot, Maven,... Parallèlement,
                ma formation universitaire m'a doté d'une connaissance
                approfondie des systèmes d'information web et des design
                patterns, avec une expérience pratique en Node.js, Angular,
                React,.Net et C#.
              </div>
            </section>
          )}

          {activeSection === 1 && (
            <section className="h-screen flex flex-col justify-center pl-12">
              <span className="text-black font-serif text-4xl">
                Stack technique principale
              </span>
              <div className="flex flex-wrap space-x-4 mt-6">
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px]">
                  <Image
                    src="./img/java.png"
                    alt="Java"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">Java</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px]">
                  <Image
                    src="./img/spring.png"
                    alt="Spring Boot"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">Spring Boot</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px]">
                  <Image
                    src="./img/hibernate.png"
                    alt="Hibernate"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">Hibernate</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px]">
                  <Image
                    src="./img/data_jpa.png"
                    alt="Spring Data JPA"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">Spring Data JPA</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px]">
                  <Image
                    src="./img/spring_mvc.png"
                    alt="Spring MVC"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">Spring MVC</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px]">
                  <Image
                    src="./img/mockito.png"
                    alt="Mockito"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">Mockito</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px]">
                  <Image
                    src="./img/JUnit.png"
                    alt="JUnit"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">JUnit</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px]">
                  <Image
                    src="./img/csharp.png"
                    alt="C#"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">C#</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px]">
                  <Image
                    src="./img/NET_Core.png"
                    alt="ASP .NET Core"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">ASP .NET Core</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px]">
                  <Image
                    src="./img/angular.png"
                    alt="Angular"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">Angular</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px]">
                  <Image
                    src="./img/react.png"
                    alt="React"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">React</span>
                </div>
              </div>
            </section>
          )}

          {activeSection === 2 && (
            <section className="h-screen flex flex-col justify-center pl-12 pt-10">
              <span className="text-black font-serif text-4xl">
                COMPETENCES
              </span>
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
          )}

          {activeSection === 3 && (
            <section className="h-screen flex flex-col justify-center pl-12">
              <span className="text-black font-serif text-4xl">EXPERIENCES</span>
              <div className="flex flex-col h-[90%] space-y-4 overflow-y-auto mt-4">
                {experiences.map((item, index) => (
                  <Experience key={index} exp={item}></Experience>
                ))}
              </div>
            </section>
          )}

          {activeSection === 4 && (
            <section className="h-screen flex flex-col justify-center pl-12">
              <span className="text-black font-serif text-4xl">SAVOIR ETRE</span>
              <div className="text-slate-600 text-base italic mt-2">
                Savoir-être issus du référentiel présent sur le site de pôle
                emploi (ROME 4.0)
              </div>
              <table className="mt-5 text-center w-[85%] overflow-y-auto text-base">
                <tr className="bg-gray-800 text-base text-white font-normal">
                  <th>Savoir-être</th>
                  <th>Description</th>
                </tr>
                {savoirs.map((item, index) => (
                  <tr key={index}>
                    <td>{item.nom}</td>
                    <td>{item.description}</td>
                  </tr>
                ))}
              </table>
            </section>
          )}

          {activeSection === 5 && (
            <section className="h-screen flex flex-col justify-center pl-12">
              <span className="text-black font-serif text-4xl">FORMATIONS</span>
              <div className="text-slate-600 text-base italic mt-2">
                Liste des acquis des formations selon le site France
                competences
              </div>
              <div className="relative w-full mt-6">
                <span
                  id="previous"
                  onClick={() => {}}
                  className="absolute top-[50%] text-7xl text-gray-800 hover:cursor-pointer hover:scale-[130%]"
                >
                  &#10216;
                </span>
                <span
                  id="next"
                  onClick={() => {}}
                  className="absolute top-[50%] right-[10%] hover:cursor-pointer text-gray-800 text-7xl hover:scale-[130%]"
                >
                  &#10217;
                </span>
                <div className="ml-28">
                  <Formation form={formations[0]}></Formation>
                </div>
              </div>
            </section>
          )}

          {activeSection === 6 && (
            <section className="h-screen flex flex-col justify-center pl-12">
              <span className="text-black font-serif text-4xl">
                Projets Universitaires
              </span>
              <div className="flex flex-row items-center justify-center space-x-10 mt-10 w-full">
                {projets.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-100 border-2 border-black w-[250px] h-[250px] flex items-center text-center justify-center hover:scale-110 text-black text-base cursor-pointer"
                    onClick={() => setSelectedProject(index)}
                  >
                    {item.titre}
                  </div>
                ))}
              </div>
              <div className="w-full h-full mt-5">
                <Projet projet={projets[selectedProject]}></Projet>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
