export default function data_form() {
  var formation1 = {
    intitule_s: "MASTER MIAGE",
    institut: "UPJV",
    logo: "logo.png",
    lieu: "Amiens, France",
    intitule_l: "Méthode informatique appliqué à la gestion d'entreprise",
    detail:
      "Diplôme universitaire français de niveau Bac+5, alliant une double compétence en informatique et en gestion, destiné à former des cadres d’entreprise experts en ingénierie des systèmes d’information ",
    acquis: [
      "Gérer un changement métier suite à une évolution informatique",
      "Gérer un changement métier suite à une évolution informatique",
      "Planifier et gérer un projet informatique",
      "Gérer un portefeuille de projets",
      "Gérer une relation client ou une relation fournisseur",
      "Identifier et formaliser les besoins des clients / utilisateurs",
      "Développer, tester et déployer un composant logiciel ou matériel dans divers contextes",
      "Mettre en œuvre les outils d’analyse et de fouille de données pour l’aide à la décision",
      "Communiquer à des fins de formation ou de transfert de connaissances, par oral et par écrit, en français et dans au moins une langue étrangère",
    ],
    debut: "Septembre 2022",
    fin: "Actuellement",
  };

  var formation2 = {
    intitule_s: "LICENCE INFORMATIQUE",
    institut: "UPJV",
    logo: "logoUpjv.png",
    lieu: "Amiens, France",
    intitule_l: "Licence informatique mention MIAGE",
    detail:
      "L'objectif de la licence est de former des scientifiques ayant une culture large et fondamentale en informatique, la mention MIAGE permet en plus de comprendre l'importance et le fonctionnement des Systèmes d'Information au sein d'une entreprise ",
    acquis: [
      "Analyser et interpréter les résultats produits par l'exécution d'un programme",
      "Expliquer et documenter la mise en œuvre d'une solution technique",
      "Concevoir, implémenter et exploiter des bases de données",
      "Situer son rôle et sa mission au sein d'une organisation pour s'adapter et prendre des initiatives",
      "Travailler en équipe autant qu’en autonomie et responsabilité au service d’un projet",
      "Analyser ses actions en situation professionnelle, s’autoévaluer pour améliorer sa pratique",
    ],
    debut: "Septembre 2021",
    fin: "Septembre 2022",
  };

  var formations = [formation1, formation2];

  return formations;
}
