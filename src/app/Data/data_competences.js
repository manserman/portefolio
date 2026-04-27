export default function data_comp() {
  const groups = [
    {
      titre: "Ingénierie logicielle",
      summary:
        "Concevoir, écrire et livrer du code de production — du backend au mobile.",
      competences: [
        "Analyser et formaliser les besoins métier en exigences techniques",
        "Concevoir, développer et tester des applications backend (Java · NestJS) et mobile (React Native · Expo)",
        "Modifier et porter des applications existantes vers de nouvelles plateformes",
        "Écrire, déboguer et reviewer du code sous contraintes de production",
        "Documenter les choix d'architecture et les processus de développement",
        "Réutiliser, améliorer et reconfigurer des composants existants",
      ],
    },
    {
      titre: "Architecture & systèmes distribués",
      summary:
        "Articuler des composants hétérogènes en systèmes lisibles, robustes et évolutifs.",
      competences: [
        "Concevoir des architectures middleware multi-protocole (REST · AMQP 1.0 · RPC)",
        "Modéliser et exploiter des bases de données relationnelles (PostgreSQL · Prisma)",
        "Mettre en place des files de messages et du traitement asynchrone (BullMQ · AMQP)",
        "Optimiser les performances par caching et invalidation ciblée (Redis)",
        "Garantir l'intégrité, l'interopérabilité et la sécurité d'un système intégré",
        "Vérifier la capacité, la robustesse et la documentation d'une intégration",
      ],
    },
    {
      titre: "IA générative & LLM",
      summary:
        "Intégrer les LLM dans des produits réels — pas des démos.",
      competences: [
        "Intégrer les API OpenAI et Anthropic Claude en production",
        "Concevoir des prompts robustes et des sorties structurées (Zod · JSON Schema)",
        "Pipelines vocaux : transcription temps réel avec Whisper",
        "Évaluer et comparer les modèles via des protocoles de test reproductibles (Haiku coach + Opus judge)",
        "Boucler « human-in-the-loop » : revue, replan, journal, feedback",
        "Maîtriser les coûts par caching de prompts et choix de modèle ciblé",
      ],
    },
    {
      titre: "Cloud, DevOps & livraison",
      summary:
        "Du commit au déploiement — automatisation, observabilité, reproductibilité.",
      competences: [
        "Conteneuriser et orchestrer des services (Docker · Caddy · Hetzner)",
        "Mettre en place des pipelines CI/CD (GitHub Actions · GHCR · Vercel)",
        "Auto-correction de CI : analyse d'échec, fix proposé, re-run autonome",
        "Gérer les paiements multi-provider (Stripe · Apple StoreKit 2 · Google Play RTDN · RevenueCat)",
        "Authentification et autorisation : JWT, jose, flux d'OTA et révocation",
        "Monitoring et alertes ciblées sur les chemins critiques",
      ],
    },
    {
      titre: "Produit & gestion de projet",
      summary:
        "Tenir le cap entre les besoins, le cadrage et la livraison.",
      competences: [
        "Identifier, formaliser et challenger les besoins client / utilisateur",
        "Conseiller les parties prenantes sur les arbitrages techniques",
        "Planifier, prioriser et piloter un portefeuille de projets",
        "Conduire un changement métier consécutif à une évolution informatique",
        "Gérer la relation client et fournisseur sur la durée d'un projet",
        "Communiquer à l'oral et à l'écrit, en français et en anglais",
      ],
    },
    {
      titre: "Posture & savoir-être",
      summary:
        "Comment je travaille — autant que ce que je sais faire.",
      competences: [
        "Conception produit de bout en bout : backend → mobile → landing → SEO",
        "Veille technologique active et expérimentation maîtrisée",
        "Pensée systémique : remonter à la cause racine plutôt que masquer les symptômes",
        "Autonomie sur des cycles longs, capacité à travailler en équipe distribuée",
        "Sens de la qualité éditoriale : copywriting, design, accessibilité",
        "Pédagogie : documenter, expliquer, transférer la connaissance",
      ],
    },
  ];

  return groups;
}
