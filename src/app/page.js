"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

  /********************* NAVIGATION  **************************/
  const sections = [
    { id: "accueil", label: "Accueil", content: <Accueil /> },
    { id: "stack", label: "Stack technique", content: <Stack /> },
    { id: "competences", label: "Compétences", content: <Competences /> },
    { id: "experiences", label: "Expériences", content: <Experiences /> },
    { id: "savoirs", label: "Savoir-être", content: <Savoirs /> },
    { id: "formations", label: "Formations", content: <Formations /> },
    { id: "projets", label: "Projets Universitaires", content: <Projets /> },
  ];

  const nextSection = () => {
    setActiveSection((prevSection) =>
      prevSection === sections.length - 1 ? 0 : prevSection + 1
    );
  };

  const previousSection = () => {
    setActiveSection((prevSection) =>
      prevSection === 0 ? sections.length - 1 : prevSection - 1
    );
  };

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      nextSection();
    } else if (event.deltaY < 0) {
      previousSection();
    }
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden"
      onWheel={handleScroll}
      onKeyDown={(e) => {
        if (e.key === "ArrowDown") nextSection();
        if (e.key === "ArrowUp") previousSection();
      }}
      tabIndex={0} // To allow key events
    >
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
                {section.label}
              </div>
            ))}
          </div>
        </div>

        {/********************* SECTION PRINCIPALE **********************/}
        <div className="flex flex-col w-[83%] ml-[17%]">
          <AnimatePresence>
            {sections.map((section, index) =>
              activeSection === index ? (
                <motion.section
                  key={section.id}
                  className="h-screen flex flex-col justify-center pl-12"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 1 }}
                >
                  {section.content}
                </motion.section>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

/********************* CONTENT SECTIONS **********************/
const Accueil = () => (
  <>
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
      alternance, j'ai contribué à la mise à jour du système de traçabilité
      d'Autoliv, passant de Java 6 à Java 11. J'ai assuré le bon fonctionnement
      des webservices REST et des outils d'administration et reporting, en
      mettant l'accent sur les tests unitaires pour garantir la qualité du code.
      Mes compétences incluent WildFly, Jersey, Spring Boot, Maven,...
      Parallèlement, ma formation universitaire m'a doté d'une connaissance
      approfondie des systèmes d'information web et des design patterns, avec
      une expérience pratique en Node.js, Angular, React,.Net et C#.
    </div>
  </>
);

const Stack = () => (
  <>
    <span className="text-black font-serif text-4xl">
      Stack technique principale
    </span>
    <div className="flex flex-nowrap overflow-x-auto space-x-4 mt-6">
      {/* Add your stack items here */}
    </div>
  </>
);

const Competences = () => (
  <>
    <span className="text-black font-serif text-4xl">COMPETENCES</span>
    <div className="text-slate-600 text-base italic mt-2">
      Compétences issues du référentiel présent sur le site du CIGREF (version
      2022)
    </div>
    <div className="flex flex-row mx-auto space-x-7 mt-6 h-[17%] w-[70%]">
      {/* Add your competences here */}
    </div>
  </>
);

const Experiences = () => (
  <>
    <span className="text-black font-serif text-4xl">EXPERIENCES</span>
    <div className="flex flex-col h-[90%] space-y-4 overflow-y-auto mt-4">
      {/* Add your experiences here */}
    </div>
  </>
);

const Savoirs = () => (
  <>
    <span className="text-black font-serif text-4xl">SAVOIR ETRE</span>
    <div className="text-slate-600 text-base italic mt-2">
      Savoir-être issus du référentiel présent sur le site de pôle emploi (ROME
      4.0)
    </div>
    <table className="mt-5 text-center w-[85%] overflow-y-auto text-base">
      {/* Add your savoirs here */}
    </table>
  </>
);

const Formations = () => (
  <>
    <span className="text-black font-serif text-4xl">FORMATIONS</span>
    <div className="text-slate-600 text-base italic mt-2">
      Liste des acquis des formations selon le site France competences
    </div>
    <div className="relative w-full mt-6">
      {/* Add your formations here */}
    </div>
  </>
);

const Projets = () => (
  <>
    <span className="text-black font-serif text-4xl">
      Projets Universitaires
    </span>
    <div className="flex flex-row items-center justify-center space-x-10 mt-10 w-full">
      {/* Add your projects here */}
    </div>
  </>
);
