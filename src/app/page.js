"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Experience from "./Components/Experience";
import Projet from "./Components/Projet";
import { useState } from "react";
import Competence from "./Components/Competence";
import Formation from "./Components/Formation";
import data_comp from "./Data/data_competences";
import data_form from "./Data/data_formations";
import data_savoir from "./Data/data_savoir";
import data_exp from "./Data/data_experience";
import data_projet from "./Data/data_projet";

export default function Home() {
  /********************* DONNEES  **************************/

  /********************* EXPERIENCES  **************************/
  const experiences = data_exp();

  /********************* PROJETS  **************************/
  const projets = data_projet();

  /** Affichage dynamique des projets **/
  const [ind_projet, set_ind_projet] = useState(0);
  const display_project = (e) => {
    set_ind_projet(e.target.id);
  };

  /********************* COMPETENCES  **************************/
  const competences = data_comp();

  /** Affichage dynamique des compétences **/
  const [ind_tab_comp, set_ind_tab_comp] = useState(0);
  const display_comp = (e) => {
    set_ind_tab_comp(e.target.id);
  };

  /********************* FORMATIONS  **************************/
  const formations = data_form();

  /** Affichage dynamique des formations **/
  const [ind_formation, set_ind_formation] = useState(0);
  const formation_carousel = (e) => {
    const sign = e.target.id;

    if (sign === "previous") {
      if (ind_formation !== 0) set_ind_formation(ind_formation - 1);
      else set_ind_formation(formations.length - 1);
    } else {
      if (ind_formation < formations.length - 1)
        set_ind_formation(ind_projet + 1);
      else set_ind_formation(0);
    }
  };

  /********************* SAVOIRS  **************************/
  const savoirs = data_savoir();

  /********************* CONSTANTES DE STYLE  **************************/
  const s_sideBar = "h-[100%] w-[17%] fixed bg-gray-800 flex flex-col";
  const s_photo =
    "mx-auto h-[8em] w-[8em] mt-10 rounded-full flex items-center justify-center font-semibold";
  const s_logo = "mx-auto mt-20 scale-[115%] rounded-full overflow-hidden";
  const s_nav =
    "text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1";
  const s_nav_section = "flex flex-col items-center justify-start mt-4";
  const s_main = "flex flex-col w-[83%] ml-[17%]";

  return (
    <div className="h-screen overflow-y-auto">
      <main className="h-full bg-inherit flex flex-row">
        {/********************* SIDE BAR **********************/}
        <motion.div
          className={s_sideBar}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Image
            className={s_logo}
            height={300}
            width={200}
            src="./img/photo.png"
          />

          <div className={s_nav_section}>
            <div className={s_nav}>
              <a href="#accueil">Accueil</a>
            </div>
            <div className={s_nav}>
              <a href="#stack">Stack technique</a>
            </div>
            <div className={s_nav}>
              <a href="#competences">Compétences</a>
            </div>
            <div className={s_nav}>
              <a href="#experiences">Expériences</a>
            </div>
            <div className={s_nav}>
              <a href="#savoirs">Savoir-être</a>
            </div>
            <div className={s_nav}>
              <a href="#formations">Formations</a>
            </div>
            <div className={s_nav}>
              <a href="#projets">Projets Universitaires</a>
            </div>
          </div>
        </motion.div>

        {/********************* SECTION PRINCIPALE **********************/}
        <motion.div
          className={s_main}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/********************* PRESENTATION **********************/}
          <section
            id="accueil"
            className="min-h-screen flex flex-col justify-center items-start pl-10 pt-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
            </motion.div>
          </section>

          {/********************* STACK TECHNIQUE **********************/}
          <section
            id="stack"
            className="min-h-screen flex flex-col justify-center pl-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-black font-serif text-4xl">
                Stack technique principale
              </span>
              <br />
              <div className="flex flex-nowrap overflow-x-auto space-x-4 mt-6">
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px] flex-shrink-0">
                  <Image
                    src="./img/java.png"
                    alt="Java"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">Java</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px] flex-shrink-0">
                  <Image
                    src="./img/spring.png"
                    alt="Spring Boot"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">Spring Boot</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px] flex-shrink-0">
                  <Image
                    src="./img/hibernate.png"
                    alt="Hibernate"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">Hibernate</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px] flex-shrink-0">
                  <Image
                    src="./img/data_jpa.png"
                    alt="Spring Data JPA"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">Spring Data JPA</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px] flex-shrink-0">
                  <Image
                    src="./img/spring_mvc.png"
                    alt="Spring MVC"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">Spring MVC</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px] flex-shrink-0">
                  <Image
                    src="./img/mockito.png"
                    alt="Mockito"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">Mockito</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px] flex-shrink-0">
                  <Image
                    src="./img/JUnit.png"
                    alt="JUnit"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">JUnit</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px] flex-shrink-0">
                  <Image
                    src="./img/csharp.png"
                    alt="C#"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">C#</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px] flex-shrink-0">
                  <Image
                    src="./img/NET_Core.png"
                    alt="ASP .NET Core"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">ASP .NET Core</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px] flex-shrink-0">
                  <Image
                    src="./img/angular.png"
                    alt="Angular"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">Angular</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-[150px] h-[150px] flex-shrink-0">
                  <Image
                    src="./img/react.png"
                    alt="React"
                    width={60}
                    height={60}
                  />
                  <span className="mt-2 text-lg">React</span>
                </div>
              </div>
            </motion.div>
          </section>

          {/********************* COMPETENCES **********************/}
          <section
            id="competences"
            className="min-h-screen flex flex-col justify-center pl-12 pt-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-black font-serif text-4xl">COMPETENCES</span>
              <br />
              <div className="text-slate-600 text-base italic mt-2">
                Compétences issues du référentiel présent sur le site du CIGREF
                (version 2022)
              </div>
              <div className="flex flex-row mx-auto space-x-7 mt-6 h-[17%] w-[70%]">
                {competences.map((item, index) => (
                  <motion.div
                    id={index}
                    key={index}
                    onClick={display_comp}
                    className={
                      "h-full w-[100%] flex items-center justify-center border border-black font-semibold text-white " +
                      item.color
                    }
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.poste}
                  </motion.div>
                ))}
              </div>
              <div className="no-scrollbar mt-10 overflow-y-auto h-[60%]">
                {competences[ind_tab_comp].comp.map((item, index) => (
                  <Competence key={index} comp={item}></Competence>
                ))}
              </div>
            </motion.div>
          </section>

          {/********************* EXPERIENCES **********************/}
          <section
            id="experiences"
            className="min-h-screen flex flex-col justify-center pl-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-black font-serif text-4xl">EXPERIENCES</span>
              <div className="flex flex-col h-[90%] space-y-4 overflow-y-auto mt-4">
                {experiences.map((item, index) => (
                  <Experience key={index} exp={item}></Experience>
                ))}
              </div>
            </motion.div>
          </section>

          {/********************* SAVOIR ETRE **********************/}
          <section
            id="savoirs"
            className="min-h-screen flex flex-col justify-center pl-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-black font-serif text-4xl">
                SAVOIR ETRE
              </span>
              <br />
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
            </motion.div>
          </section>

          {/********************* FORMATIONS **********************/}
          <section
            id="formations"
            className="min-h-screen flex flex-col justify-center pl-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-black font-serif text-4xl">FORMATIONS</span>
              <div className="text-slate-600 text-base italic mt-2">
                Liste des acquis des formations selon le site France
                competences
              </div>
              <div className="relative w-full mt-6">
                <span
                  id="previous"
                  onClick={formation_carousel}
                  className="absolute top-[50%] text-7xl text-gray-800 hover:cursor-pointer hover:scale-[130%]"
                >
                  &#10216;
                </span>

                <span
                  id="next"
                  onClick={formation_carousel}
                  className="absolute top-[50%] right-[10%] hover:cursor-pointer text-gray-800 text-7xl hover:scale-[130%]"
                >
                  &#10217;
                </span>
                <div className="ml-28">
                  <Formation form={formations[ind_formation]}></Formation>
                </div>
              </div>
            </motion.div>
          </section>

          {/********************* PROJETS **********************/}
          <section
            id="projets"
            className="min-h-screen flex flex-col justify-center pl-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-black font-serif text-4xl">
                Projets Universitaires
              </span>

              <div className="flex flex-row items-center justify-center space-x-10 mt-10 w-full">
                {projets.map((item, index) => (
                  <motion.div
                    key={index}
                    id={index}
                    onClick={display_project}
                    className="bg-slate-100 border-2 border-black w-[250px] h-[250px] flex items-center text-center justify-center hover:scale-110 text-black text-base"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.titre}
                  </motion.div>
                ))}
              </div>

              <div className="w-full h-full mt-5">
                <Projet projet={projets[ind_projet]}></Projet>
              </div>
            </motion.div>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
