"use client";

import Image from "next/image";
import Experience from "./Components/Experience";
import Projet from "./Components/Projet";
import Competence from "./Components/Competence";
import Formation from "./Components/Formation";
import { useState } from "react";
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
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedFormation, setSelectedFormation] = useState(0);

  /********************* NAVIGATION DES FORMATIONS  **************************/
  const handleNextFormation = () => {
    setSelectedFormation((prevFormation) =>
      prevFormation === formations.length - 1 ? 0 : prevFormation + 1
    );
  };

  const handlePreviousFormation = () => {
    setSelectedFormation((prevFormation) =>
      prevFormation === 0 ? formations.length - 1 : prevFormation - 1
    );
  };

  return (
    <div className="h-screen w-screen overflow-y-auto">
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
            <a
              href="#accueil"
              className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
            >
              Accueil
            </a>
            <a
              href="#stack"
              className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
            >
              Stack technique
            </a>
            <a
              href="#competences"
              className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
            >
              Compétences
            </a>
            <a
              href="#experiences"
              className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
            >
              Expériences
            </a>
            <a
              href="#savoirs"
              className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
            >
              Savoir-être
            </a>
            <a
              href="#formations"
              className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
            >
              Formations
            </a>
            <a
              href="#projets"
              className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
            >
              Projets Universitaires
            </a>
          </div>
        </div>

        {/********************* SECTION PRINCIPALE **********************/}
        <div className="flex flex-col w-[83%] ml-[17%]">
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
              participation à la migration du code de Java 6 vers Java 17 chez
              Autoliv, une entreprise internationale spécialisée dans les
              technologies de sécurité automobile. Cette migration a permis une
              modernisation importante des systèmes, améliorant ainsi la
              performance et la sécurité des applications. De plus, j'ai joué un
              rôle clé dans la transformation des services web REST vers le
              framework Spring Boot, facilitant la mise en place d'applications
              plus robustes et flexibles. Ma maîtrise de technologies telles que
              Java, le serveur d'applications WildFly, et l'outil de gestion de
              projet Maven me permet d'intervenir efficacement sur des projets
              complexes. J'ai également acquis des compétences en systèmes
              d'information web, ce qui me donne une bonne compréhension des
              besoins liés à la gestion et à l'intégration de données dans des
              environnements variés. Passionné par les défis techniques liés aux
              architectures back-end, je suis en permanence à la recherche de
              moyens pour améliorer la scalabilité et la fiabilité des systèmes.
              Désireux de continuer à évoluer dans ma carrière, je souhaite
              approfondir mes connaissances en matière d'architecture
              logicielle, d'intégration des systèmes dans des environnements
              cloud (notamment les plateformes comme AWS, Azure ou Google
              Cloud), ainsi qu'en automatisation des processus via les pipelines
              CI/CD (intégration continue et déploiement continu). Bien que mon
              expertise principale soit orientée vers le back-end, je suis
              également ouvert aux opportunités qui me permettraient de
              développer davantage mes compétences en full stack, afin d’avoir
              une vue plus complète des applications web modernes et de
              participer à des projets de bout en bout.
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
                  href="./files/cv.pdf"
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
            id="stack"
            className="min-h-screen flex flex-col justify-center pl-12"
          >
            <span className="text-black font-serif text-4xl">
              Stack technique principale
            </span>
            <div className="flex flex-wrap space-x-4 mt-6">
              <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px]">
                <Image src="./img/java.png" alt="Java" width={60} height={60} />
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
                <Image src="./img/csharp.png" alt="C#" width={60} height={60} />
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
            className="min-h-screen flex flex-col justify-center pl-12"
          >
            <span className="text-black font-serif text-4xl">EXPERIENCES</span>
            <div className="flex flex-col h-[90%] space-y-4 overflow-y-auto mt-4">
              {experiences.map((item, index) => (
                <Experience key={index} exp={item}></Experience>
              ))}
            </div>
          </section>

          <section
            id="stack"
            className="min-h-screen flex flex-col justify-center pl-12"
          >
            <span className="text-black font-serif text-4xl">
              Stack technique principale
            </span>
            <div className="flex flex-wrap gap-4 mt-6 justify-start">
              <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px]">
                <Image src="./img/java.png" alt="Java" width={60} height={60} />
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
                <Image src="./img/csharp.png" alt="C#" width={60} height={60} />
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

          <section
            id="projets"
            className="min-h-screen flex flex-col justify-center pl-12"
          >
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
        </div>
      </main>
    </div>
  );
}
