export default function data_exp() {
  var exp_1 = {
    poste: "Dévelopopeur Java",
    entreprise: "Autoliv Europe",
    logo: "logo_autoliv.png",
    lieu: "Gournay-en-Braie, France",
    description: "Mise à jour du système de traçabilité d 'autoliv de java 6 à java 8 puis java 11 et enfin java 17",
    detail:
      "Mise à jour du système de traçabilité d 'autoliv de java 6 à java 17 suivant une roadmap pré-établie",
    missions: [
      "Migration des webservices rest du framework Jersey vers le framework SpringBoot 2.7",
      "Tests D'intégrations ",
      "Réalisation de test Unitaires",
      "CI/CD",
      "Correction de bugs et amélioraiton des performances",
      "Migration des applets vers des applications java",
      "Vérification et résolution des CVE (failles de sécurité) avec OWASP discovery",
      "Développement de nouvelles fonctionnalités"
    ],
    competences: [
      "Conception et développement d'applications",
      "Tests ",
      "Production de la documentation ",
      "Intégration des composants",
      "Identification des besoins",
      "Innovation"
    ],
    debut: "Septembre 2022",
    fin: "Septembre 2024",
    isExperience: true,
  };
  var exp_2 = {
    poste: "Développeur web Symfony",
    entreprise: "Lycée LaHotoie",
    logo: "logoLaHotoie.png",
    lieu: "Amiens, France",
    description: "Conception et réalisation d’une application Web",
    detail:
      "Conception et réalisation d’une application Web permettant le suivi des élèves en périodes d’entreprise.",
    missions: [
      "Réccueil et analyse des besions clients",
      "Analyse de l'existant",
      "Plannification de tâches",
      "Rédaction du cahier de charge",
      "Développement de l'application web",
    ],
    competences: [
      "Conception et développement d'applications",
      "Production de la documentation ",
      "Identification des besoins",
      "Innovation"],
    debut: "Avril 2022",
    fin: "Juin 2022",
    isExperience: true,
  };

  var experiences = [exp_1, exp_2];

  return experiences;
}
