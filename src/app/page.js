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
  const s_sideBar = "h-[100%] w-[17%] fixed fixed bg-gray-800 flex flex-col";
  const s_photo = "mx-auto h-[8em] w-[8em] mt-10 rounded-full flex items-center justify-center font-semibold";
  const s_logo = "mx-auto mt-20 scale-[115%] rounded-full overflow-hidden";
  const s_nav = "text-white text-sm p-3 w-full text-center hover:bg-gray-700 mt-1";
  const s_nav_section = "flex flex-col items-center justify-start mt-4";
  const s_main = "flex flex-col h-[400%] w-[83%] ml-[17%]";
  const s_hr = "w-full h-[0.1em] mt-20 bg-black";

  return (
    <main className="h-full bg-inherit flex flex-row">
      {/********************* SIDE BAR **********************/}
      <motion.div
        className={s_sideBar}
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Image className={s_logo} height={300} width={200} src="./img/photo.png" />

        <div className={s_nav_section}>
          <div className={s_nav}>
            <a href="#accueil">Accueil</a>
          </div>
          <div className={s_nav}>
            <a href="#competences">Competences</a>
          </div>
          <div className={s_nav}>
            <a href="#experiences">Experiences</a>
          </div>
          <div className={s_nav}>
            <a href="#savoirs">Savoir Etre</a>
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

        <div className="h-[7%] w-[100%] pt-10 pl-10" id="accueil">
          <span className="text-4xl font-serif text-black">
            Mohamadou Mansour HABIBOU HAMANI
          </span>
          <div className="flex flex-row mt-4">
            <span className="italic font-serif text-black">
              Développeur Java
            </span>
          </div>
          <br></br>

          <div className="text-justify tracking-wide text-sm font-serif w-[85%]">
            Fort d'une expérience de 2 ans en développement Java en alternance, j'ai contribué à la mise à jour du système
            de traçabilité d'Autoliv, passant de Java 6 à Java 11. J'ai assuré le bon fonctionnement des webservices REST
            et des outils d'administration et reporting, en mettant l'accent sur les tests unitaires pour garantir la 
            qualité du code. Mes compétences incluent WildFly, Jersey, Spring Boot, Maven,...
             Parallèlement, ma formation universitaire m'a doté d'une connaissance approfondie des systèmes d'information web 
             et des design patterns, avec une expérience pratique en Node.js, Angular, React,.Net et C#.
          </div>

          <div className="w-[70%] h-[20%] justify-center mt-4 border-black grid grid-cols-8">
            <span>&#128233;</span>
            <span className="-ml-[75%] mt-1.5 text-xs">
              : mansourh923@gmail.com
            </span>
            <span>&#128241;</span>
            <span className="-ml-[75%] mt-1.5 text-xs">: 06 65 15 40 90</span>
            <span>&#128664;</span>
            <span className="-ml-[75%] mt-1.5 text-xs">
              : Ile de france / Hauts de france
            </span>
          </div>

          <div className="flex flex-row font-serif justify-center space-x-4 text-sm h-10 w-[20%] absolute top-12 right-10">
            <a
              href="./files/cv.pdf"
              target="blank"
              className="hover:underline hover:cursor-pointer"
            >
              Mon CV
            </a>
          </div>
        </div>

        <div className={s_hr}></div>

        {/********************* COMPETENCES **********************/}

        <div id="competences" className="w-full h-[15%] relative pl-12 pt-10 ">
          <span className="text-black font-serif text-3xl">COMPETENCES</span>
          <br />
          <div className="text-slate-600 text-xs italic mt-2">
            Compétences issues du référentiel présent sur le site du CIGREF
            (version 2022)
          </div>

          <div className="flex flex-row mx-auto space-x-7 mt-6 h-[17%] w-[70%]">
            {competences.map((item, index) => {
              return (
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
              );
            })}
          </div>

          <div className="no-scrollbar mt-10 overflow-y-auto h-[60%]">
            {competences[ind_tab_comp].comp.map((item, index) => {
              return <Competence key={index} comp={item}></Competence>;
            })}
          </div>
        </div>

        <div className={s_hr}></div>

        {/********************* EXPERIENCES **********************/}
        <div
          id="experiences"
          className="w-full h-[22%] pt-10 space-y-6 pl-12"
        >
          <span className="text-black font-serif text-3xl">EXPERIENCES</span>
          <div className="flex flex-col h-[90%] space-y-4 overflow-y-auto">
            {experiences.map((item, index) => {
              return <Experience key={index} exp={item}></Experience>;
            })}
          </div>
        </div>

        <div className={s_hr}></div>

        {/********************* SAVOIR ETRE **********************/}

        <div id="savoirs" className="w-full h-[15%] relative pl-12 pt-10">
          <span className="text-black font-serif text-3xl">SAVOIR ETRE</span>
          <br />
          <div className="text-slate-600 text-xs italic mt-2">
            Savoir être issue du référentiel présent sur le site de pôle emploi
            (ROME 4.0)
          </div>

          <table className="mt-5 text-center h-[80%] w-[85%] overflow-y-auto text-xs">
            <tr className="bg-upjv-2 text-xs text-white font-normal">
              <th>Savoir être</th>
              <th>Description</th>
            </tr>
            {savoirs.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.nom}</td>
                  <td>{item.description}</td>
                </tr>
              );
            })}
          </table>
        </div>

        <div className={s_hr}></div>

        {/********************* FORMATIONS **********************/}
        <div
          id="formations"
          className="relative w-full h-[14%] pt-10 space-y-6 pl-12"
        >
          <span className="text-black font-serif text-3xl">FORMATIONS</span>

          <div className="text-slate-600 text-xs italic mt-2">
            Liste des acquis des formations selon le site France competences
          </div>

          <span
            id="previous"
            onClick={formation_carousel}
            className="absolute top-[50%] text-6xl text-upjv-2 hover:cursor-pointer hover:scale-[130%]"
          >
            &#10216;
          </span>

          <span
            id="next"
            onClick={formation_carousel}
            className="absolute top-[50%] right-[10%] hover:cursor-pointer text-upjv-2 text-6xl hover:scale-[130%]"
          >
            &#10217;
          </span>

          <div className="ml-28">
            <Formation form={formations[ind_formation]}></Formation>
          </div>
        </div>

        <div className={s_hr}></div>

        <div id="projets" className="relative w-full h-[14%] pt-10 pl-12">
          <span className="text-black font-serif text-3xl">
            PROJETS Universitaires
          </span>

          <div className="flex flex-row items-center justify-center space-x-10 h-[15%] mt-10 w-[100%]">
            {projets.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  id={index}
                  onClick={display_project}
                  className="bg-slate-100 border-2 border-black w-[20%] flex items-center text-center justify-center h-full hover:scale-110 text-black text-xs"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.titre}
                </motion.div>
              );
            })}
          </div>

          <div className="w-[100%] h-[100%]">
            <Projet projet={projets[ind_projet]}></Projet>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
