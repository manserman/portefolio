export default function data_exp_en() {
  const experiences = [
    {
      poste: "Founder · Software Engineer",
      entreprise: "Ascelyo",
      logo: "ascelyo-logo.png",
      lieu: "Île-de-France, France",
      description:
        "Designing and building an AI life-coach mobile app that turns long-term goals into a personalized daily action plan.",
      detail:
        "Ascelyo is a mobile app (iOS · Android) I design and build end-to-end, from backend to brand identity. It is an AI life coach that helps users structure their goals over a 6-month-to-30-year horizon, break them down into milestones and daily actions, and iterate every week through a human-in-the-loop loop: weekly review, collaborative replanning, and a voice journal with automatic transcription. The product targets the ROI of human coaching (~€300/mo) at €19.99/mo.",
      missions: [
        "Full-stack architecture: NestJS + Prisma + PostgreSQL + Redis/BullMQ backend, and a React Native (Expo) mobile app",
        "Multi-provider AI integration (OpenAI, Anthropic): conversational onboarding, plan synthesis, voice journal with Whisper transcription",
        "Multi-channel payments (Stripe, Apple StoreKit 2, Google Play RTDN) with idempotent webhooks and BullMQ-based reconciliation",
        "JWT auth (jose, HS256) with automatic refresh and plan-based RBAC (free / pro / elite)",
        "Editorial landing page design and deployment (Hetzner + Caddy + Docker + GHCR)",
        "Product direction: positioning, copywriting, design system, visual identity",
      ],
      competences: [
        "Full-stack architecture (NestJS, React Native, PostgreSQL)",
        "Production-grade generative AI (OpenAI, Anthropic, Whisper)",
        "Prompt engineering and prompt-injection defense",
        "Multi-provider payments (Stripe, IAP)",
        "DevOps (Docker, Caddy, Hetzner, GHCR)",
        "Mobile (Expo, Reanimated, RevenueCat)",
        "Product direction and copywriting",
      ],
      debut: "Apr. 2026",
      fin: "Present",
      isExperience: true,
    },
    {
      poste: "Software Engineer",
      entreprise: "ISA Software",
      logo: "isa.jpeg",
      lieu: "Paris, Île-de-France, France",
      description:
        "Designing and building a communication middleware for distributed systems within ORCI — a European initiative on AI-driven air-traffic optimization.",
      detail:
        "Within the ORCI project, an EU-funded initiative aiming to optimize air-traffic management through AI and automation across three teams in different countries: designed and built a communication middleware for distributed systems, bridging an existing air-traffic simulation platform (RPC-based) with AI agents to enable smooth real-time communication. Worked closely with cross-functional teams in Spain, Portugal and France to ensure interoperability and compliance with the European project requirements while solving the technical challenges of distributed environments.",
      missions: [
        "Built a multi-protocol middleware (REST, AMQP 1.0, RPC) with a focus on real-time communication over AMQP 1.0",
        "Designed and implemented a Python wrapper to integrate AI agents",
        "Built a real-time interface (React, REST, WebSockets) replicating features of the air-traffic simulation platform, with improved ergonomics and accessibility",
        "Designed and implemented a REST service for frontend-backend integration",
        "Contributed to architecture design and technical documentation",
        "Collaborated with international teams to ensure interoperability, scalability and EU compliance",
      ],
      competences: [
        "Distributed-systems architecture",
        "Robust middleware design",
        "Protocol integration (REST, AMQP 1.0, RPC)",
        "Real-time communication (AMQP 1.0, WebSockets)",
        "Frontend development (React, REST APIs)",
        "Python development (wrappers for AI integration)",
        "REST service design and implementation",
        "Collaboration in international teams",
        "Compliance with European standards",
      ],
      debut: "Apr. 2025",
      fin: "Present",
      isExperience: true,
    },
    {
      poste: "Java Developer (Apprenticeship)",
      entreprise: "Autoliv Europe",
      logo: "logo_autoliv.png",
      lieu: "Gournay-en-Bray, France",
      description:
        "Modernized Autoliv's traceability system from Java 6 to Java 8, then Java 11, and finally Java 17.",
      detail:
        "As part of Autoliv's traceability-system modernization program, I joined the world leader in automotive safety as a back-end Java engineer (apprenticeship). I contributed to the evolution of safety-critical solutions designed to improve component traceability across the production chain. Main responsibilities included:",
      missions: [
        "Owned the migration of a traceability system from Java 6 → Java 8 → Java 11 → Java 17",
        "Comparative analysis of Spring Boot vs. Jersey, Java versions, and Tomcat releases to inform backend architecture decisions for compatibility, performance and longevity",
        "Migrated REST web services from Jersey 2 to Spring Boot 2.7, driven by the comparative analysis",
        "Integration testing",
        "Unit testing",
        "CI/CD",
        "Bug fixing and performance improvements",
        "Migrated legacy applets to Java desktop apps (heavy clients) using IcedTea-Web and the JNLP protocol",
        "CVE auditing and remediation with OWASP Dependency-Check",
        "New feature development",
        "Reverse-engineering of the existing system",
      ],
      competences: [
        "Application design and development",
        "Testing",
        "Technical documentation",
        "Component integration",
        "Requirements analysis",
        "Innovation",
      ],
      debut: "Sept. 2022",
      fin: "Sept. 2024",
      isExperience: true,
    },
    {
      poste: "Symfony Web Developer",
      entreprise: "Lycée LaHotoie",
      logo: "logoLaHotoie.png",
      lieu: "Amiens, France",
      description: "Designed and built a web application.",
      detail:
        "Designed and built a web application to track student internships during in-company periods.",
      missions: [
        "Client requirements gathering and analysis",
        "Existing-system analysis",
        "Task planning",
        "Specification writing",
        "Web application development",
      ],
      competences: [
        "Application design and development",
        "Technical documentation",
        "Requirements analysis",
        "Innovation",
      ],
      debut: "Apr. 2022",
      fin: "June 2022",
      isExperience: true,
    },
  ];

  return experiences;
}
