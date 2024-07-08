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
  const experiences = data_exp();
  const projets = data_projet();
  const [ind_projet, set_ind_projet] = useState(0);
  const display_project = (e) => {
    set_ind_projet(e.target.id);
  };

  const competences = data_comp();
  const [ind_tab_comp, set_ind_tab_comp] = useState(0);
  const display_comp = (e) => {
    set_ind_tab_comp(e.target.id);
  };

  const formations = data_form();
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

  const savoirs = data_savoir();

  const s_sideBar = "h-full w-1/5 fixed bg-gray-800 flex flex-col p-5";
  const s_logo = "mx-auto mt-10 rounded-full overflow-hidden";
  const s_nav = "text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1";
  const s_nav_section = "flex flex-col items-center justify-start mt-8";
  const s_main = "flex flex-col w-4/5 ml-auto p-10 space-y-20";
  const s_hr = "w-full h-0.5 bg-black mt-10";

  return (
    <div className="flex">
      <motion.div
        className={s_sideBar}
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Image className={s_logo} height={100} width={100} src="/img/photo.png" alt="Logo" />
        <div className={s_nav_section}>
          <a href="#accueil" className={s_nav}>Accueil</a>
          <a href="#competences" className={s_nav}>Competences</a>
          <a href="#experiences" className={s_nav}>Experiences</a>
          <a href="#savoirs" className={s_nav}>Savoir Etre</a>
          <a href="#formations" className={s_nav}>Formations</a>
          <a href="#projets" className={s_nav}>Projets Universitaires</a>
        </div>
      </motion.div>
      <motion.div
        className={s_main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section id="accueil" className="space-y-4">
          <h1 className="text-4xl font-serif text-black">Mohamadou Mansour HABIBOU HAMANI</h1>
          <h2 className="italic font-serif text-black text-2xl">Développeur Java</h2>
          <p className="text-justify tracking-wide text-base font-serif">
            Fort d'une expérience de 2 ans en développement Java en alternance, j'ai contribué à la mise à jour du système
            de traçabilité d'Autoliv, passant de Java 6 à Java 11. J'ai assuré le bon fonctionnement des webservices REST
            et des outils d'administration et reporting, en mettant l'accent sur les tests unitaires pour garantir la 
            qualité du code. Mes compétences incluent WildFly, Jersey, Spring Boot, Maven,...
            Parallèlement, ma formation universitaire m'a doté d'une connaissance approfondie des systèmes d'information web 
            et des design patterns, avec une expérience pratique en Node.js, Angular, React,.Net et C#.
          </p>
          <div className="flex space-x-4 mt-4">
            <span>&#128233; : mansourh923@gmail.com</span>
            <span>&#128241; : 06 65 15 40 90</span>
            <span>&#128664; : Ile de france / Hauts de france</span>
          </div>
          <div className="flex justify-center mt-4">
            <a href="/files/cv.pdf" target="blank" className="hover:underline">Mon CV</a>
          </div>
        </section>
        <div className={s_hr}></div>
        <section id="competences" className="space-y-4">
          <h2 className="text-3xl font-serif text-black">COMPETENCES</h2>
          <p className="text-slate-600 text-sm italic">
            Compétences issues du référentiel présent sur le site du CIGREF (version 2022)
          </p>
          <div className="flex space-x-4 mt-4">
            {competences.map((item, index) => (
              <motion.div
                id={index}
                key={index}
                onClick={display_comp}
                className={`p-4 rounded-lg font-semibold text-white ${item.color}`}
                whileHover={{ scale: 1.1 }}
              >
                {item.poste}
              </motion.div>
            ))}
          </div>
          <div className="mt-6 space-y-4">
            {competences[ind_tab_comp].comp.map((item, index) => (
              <Competence key={index} comp={item} />
            ))}
          </div>
        </section>
        <div className={s_hr}></div>
        <section id="experiences" className="space-y-4">
          <h2 className="text-3xl font-serif text-black">EXPERIENCES</h2>
          <div className="space-y-4">
            {experiences.map((item, index) => (
              <Experience key={index} exp={item} />
            ))}
          </div>
        </section>
        <div className={s_hr}></div>
        <section id="savoirs" className="space-y-4">
          <h2 className="text-3xl font-serif text-black">SAVOIR ETRE</h2>
          <p className="text-slate-600 text-sm italic">
            Savoir être issue du référentiel présent sur le site de pôle emploi (ROME 4.0)
          </p>
          <table className="mt-4 w-full text-left text-sm">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-2">Savoir être</th>
                <th className="p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {savoirs.map((item, index) => (
                <tr key={index}>
                  <td className="p-2">{item.nom}</td>
                  <td className="p-2">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <div className={s_hr}></div>
        <section id="formations" className="relative space-y-4">
          <h2 className="text-3xl font-serif text-black">FORMATIONS</h2>
          <p className="text-slate-600 text-sm italic">
            Liste des acquis des formations selon le site France competences
          </p>
          <div className="flex items-center justify-between mt-4">
            <span
              id="previous"
              onClick={formation_carousel}
              className="cursor-pointer text-4xl text-gray-800"
            >
              &#10216;
            </span>
            <Formation form={formations[ind_formation]} />
            <span
              id="next"
              onClick={formation_carousel}
              className="cursor-pointer text-4xl text-gray-800"
            >
              &#10217;
            </span>
          </div>
        </section>
        <div className={s_hr}></div>
        <section id="projets" className="space-y-4">
          <h2 className="text-3xl font-serif text-black">Projets Universitaires</h2>
          <div className="flex space-x-4 mt-4">
            {projets.map((item, index) => (
              <motion.div
                key={index}
                id={index}
                onClick={display_project}
                className="p-4 bg-slate-100 border border-black rounded-lg text-center text-black text-sm"
                whileHover={{ scale: 1.1 }}
              >
                {item.titre}
              </motion.div>
            ))}
          </div>
          <div className="mt-6">
            <Projet projet={projets[ind_projet]} />
          </div>
        </section>
      </motion.div>
    </div>
  );
}
