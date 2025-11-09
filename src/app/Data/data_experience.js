export default function data_exp() {
  var exp_1 = {
    poste: "Ingénieur Logiciel - Middleware & IA",
    entreprise: "Projet ORCI (Union Européenne)",
    logo: "logo_orci.png",
    lieu: "Collaboration internationale (France, Espagne, Portugal)",
    description:
      "Conception et développement d'un middleware de communication pour systèmes distribués dans le cadre d'un projet européen d'optimisation du trafic aérien par IA",
    detail:
      "Dans le cadre du projet ORCI, initiative financée par l'Union Européenne visant à optimiser la gestion du trafic aérien grâce à l'intelligence artificielle et à l'automatisation, et regroupant trois équipes dans différents pays : Conception et développement d'un middleware de communication pour systèmes distribués, faisant le lien entre une plateforme de simulation de trafic aérien existante (communiquant via RPC) et des agents IA, afin de permettre une communication fluide et en temps réel. Collaboration étroite avec des équipes pluridisciplinaires en Espagne, au Portugal et en France pour garantir l'interopérabilité et la conformité avec les exigences du projet européen, tout en relevant les défis techniques des environnements distribués.",
    missions: [
      "Développement d'un middleware supportant plusieurs protocoles (REST, AMQP 1.0, RPC) avec un focus sur la communication temps réel via AMQP 1.0",
      "Conception et réalisation d'un wrapper Python pour l'intégration des agents IA",
      "Développement d'une interface en temps réel (React, REST, WebSockets) répliquant les fonctionnalités de la plateforme de simulation de trafic aérien, et amélioration de l'ergonomie et de l'accessibilité pour les utilisateurs",
      "Conception et implémentation d'un service REST pour l'intégration frontend-backend",
      "Participation à la conception de l'architecture et à la rédaction de la documentation technique",
      "Collaboration avec des équipes internationales pour assurer l'interopérabilité, la scalabilité et la conformité européenne"
    ],
    competences: [
      "Architecture de systèmes distribués",
      "Conception de solutions middleware robustes",
      "Intégration de protocoles (REST, AMQP 1.0, RPC)",
      "Communication temps réel (AMQP 1.0, WebSockets)",
      "Développement frontend (React, APIs REST)",
      "Développement Python (wrappers pour intégration IA)",
      "Conception et implémentation de services REST",
      "Collaboration en équipes internationales",
      "Conformité aux standards européens"
    ],
    debut: "Septembre 2024",
    fin: "Présent",
    isExperience: true,
  };
  var exp_2 = {
    poste: "Dévelopopeur Java",
    entreprise: "Autoliv Europe",
    logo: "logo_autoliv.png",
    lieu: "Gournay-en-Braie, France",
    description:
      "Mise à jour du système de traçabilité d 'autoliv de java 6 à java 8 puis java 11 et enfin java 17",
    detail:
      "Dans le cadre de la modernisation de son système de traçabilité, j’ai rejoint Autoliv, leader mondial des systèmes de sécurité automobile, en tant qu’ingénieur Java back-end. À ce titre, j’ai contribué à l’évolution de solutions critiques pour la sécurité, destinées à améliorer la traçabilité des composants tout au long de la chaîne de production. Mes principales missions incluent :",
    missions: [
      "Gestion et Réalisation de la mise à jour d'un système de traçabilité de java 6 à java 8 puis java 11 et enfin java 17.",
      "Études comparatives : Analyse des compatibilités et performances entre Spring Boot, Jersey, différentes versions de Java et Tomcat pour orienter les choix d'architecture backend afin de maximiser compatibilité, performance et évolutivité.",
      "Migration des webservices rest du framework Jersey 2 vers le framework SpringBoot 2.7  motivée par l'analyse comparative",
      "Tests D'intégrations ",
      "Réalisation de test Unitaires",
      "CI/CD",
      "Correction de bugs et amélioraiton des performances",
      "Migration des applets vers des applications bureau java (clients lourds) avec Icedtea-Web et le protocole JNLP",
      "Vérification et résolution des CVE (failles de sécurité) avec OWASP dependancy-check",
      "Développement de nouvelles fonctionnalités",
      "Etude de l'existant"
    ],
    competences: [
      "Conception et développement d'applications",
      "Tests ",
      "Production de la documentation ",
      "Intégration des composants",
      "Identification des besoins",
      "Innovation",
    ],
    debut: "Septembre 2022",
    fin: "Septembre 2024",
    isExperience: true,
  };
  var exp_3 = {
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
      "Innovation",
    ],
    debut: "Avril 2022",
    fin: "Juin 2022",
    isExperience: true,
  };

  var experiences = [exp_1, exp_2, exp_3];

  return experiences;
}
