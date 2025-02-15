export default function data_projet() {
  var projet_1 = {
    titre: "Réalisation d'un jeu de serpent ",
    illustration: "serpent.png",
    description:
      "Projet visant à réproduire le jeu de serpent grâce à la bibliothèque Swing de java, Ainsi que la mise en applicaiton du concept de multi-threading.",
    lien: "https://github.com/manserman/jeu-de-serpent",
  };

  var projet_2 = {
    titre: "Conception d'un jeu d'échéc à 2 utilisateurs ",
    illustration: "chess.jpg",
    description:
      "Ce projet consiste en la conception d'un jeu d'échecs pour deux utilisateurs utilisant Java Swing pour l'interface graphique, le multi-threading pour gérer les interactions en temps réel, et la sérialisation pour la sauvegarde et la restauration de l'état du jeu.",
    lien: "https://github.com/manserman/Chess-game",
  };
  var projet_3 = {
    titre:
      "Conception de trois clients applicatifs (un pour la caisse, un pour la cuisine, et un pour les serveurs) pour gérer un restaurant ",
    illustration: "restaurant.jpg",
    description:
      "Ce projet consiste en la conception d'une application web de gestion des commandes dans un restaurant en utilisant ASP.NET Core et C# pour le back-end, CSS pour le front-end, et SignalR pour le partage d'informations en temps réel entre les trois clients applicatifs : caissier, cuisine et serveur.",
    lien: "https://github.com/manserman/Projet_ASI",
  };

  var projet_4 = {
    titre: "Simulation d'une compétition sportive ",
    illustration: "foot.png",
    description:
      "Ce projet consiste à simuler le fonctionnement d'une compétition sportive en java avec les designs patterns  Builder, Factory, Façade et Composite ",
    lien: "https://github.com/manserman/CompetitionSportive",
  };
  var projet_5 = {
    titre: "Application permettant la gestion des notes des étudiants ",
    illustration: "etudes.jpg",
    description:
      "Ce projet consiste à développer une application web permettant de noter des étudiants en fonction de leurs blocs de compétences. Les technologies qui ont été utilisées sont Javascript et typescript pour le backend, Angular et css pour le front-end et Mongodb pour la gestion de bases de données NoSQL",
    lien: "https://github.com/KeVinTsHiBaNgU/ArchiWebNewProjet",
  };
  var projet_6 = {
    titre: "Application mobile permettant la gestion d'un magasin ",
    illustration: "boutique.png",
    description:
      "Ce projet consiste à développer une application mobile pour la gestion de magasin. L'application permet de gérer les produits, de suivre les stocks, d'authentifier les utilisateurs et de recevoir des notifications pour le réapprovisionnement. Le projet utilise Java pour le modèle et le contrôleur, Gradle pour la gestion du projet, et XML pour la vue avec Android Studio. Une base de données SQLite est intégrée pour assurer la persistance des données.",
    lien: "https://github.com/manserman/App-gestionn-magasin",
  };
  var projet_7 = {
    titre: "myGrade - Backend pour la gestion des notes des étudiants",
    illustration: "etudes.jpg",
    description:
      "myGrade est une application backend développée en Java avec Spring Boot, permettant de gérer les notes et appréciations des étudiants de manière centralisée. L'application fournit des API REST sécurisées pour la gestion des utilisateurs, des matières et des évaluations. Elle utilise Spring Data MongoDB pour stocker les données et assurer une gestion efficace des notes et des appréciations.",
    lien: "https://github.com/manserman/myGrade",
  };

  var projets = [
    projet_7,
    projet_6,
    projet_4,
    projet_1,
    projet_2,
    projet_3,
    projet_5,
  ];

  return projets;
}
