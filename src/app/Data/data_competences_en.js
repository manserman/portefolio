export default function data_comp_en() {
  const groups = [
    {
      titre: "Software engineering",
      summary:
        "Design, write and ship production code — from backend to mobile.",
      competences: [
        "Translate business needs into technical requirements",
        "Design, build and test backend (Java · NestJS) and mobile (React Native · Expo) applications",
        "Modify and port existing applications to new platforms",
        "Write, debug and review code under production constraints",
        "Document architectural decisions and development processes",
        "Reuse, improve and reconfigure existing components",
      ],
    },
    {
      titre: "Architecture & distributed systems",
      summary:
        "Bring heterogeneous components together into systems that are readable, robust and built to evolve.",
      competences: [
        "Design multi-protocol middleware architectures (REST · AMQP 1.0 · RPC)",
        "Model and operate relational databases (PostgreSQL · Prisma)",
        "Set up message queues and asynchronous processing (BullMQ · AMQP)",
        "Optimize performance through caching and targeted invalidation (Redis)",
        "Guarantee integrity, interoperability and security across an integrated system",
        "Verify capacity, robustness and documentation of an integration",
      ],
    },
    {
      titre: "Generative AI & LLMs",
      summary:
        "Integrate LLMs into real products — not demos.",
      competences: [
        "Integrate OpenAI and Anthropic Claude APIs in production",
        "Design robust prompts and structured outputs (Zod · JSON Schema)",
        "Voice pipelines: real-time transcription with Whisper",
        "Evaluate and compare models with reproducible test protocols (Haiku coach + Opus judge)",
        "Run human-in-the-loop loops: review, replan, journal, feedback",
        "Control costs through prompt caching and targeted model selection",
      ],
    },
    {
      titre: "Cloud, DevOps & delivery",
      summary:
        "From commit to deployment — automation, observability, reproducibility.",
      competences: [
        "Containerize and orchestrate services (Docker · Caddy · Hetzner)",
        "Build CI/CD pipelines (GitHub Actions · GHCR · Vercel)",
        "Self-healing CI: failure analysis, proposed fix, autonomous re-run",
        "Manage multi-provider payments (Stripe · Apple StoreKit 2 · Google Play RTDN · RevenueCat)",
        "Authentication and authorization: JWT, jose, OTA flows and revocation",
        "Monitoring and targeted alerts on critical paths",
      ],
    },
    {
      titre: "Product & project management",
      summary:
        "Hold the line between needs, framing and delivery.",
      competences: [
        "Identify, formalize and challenge client / user needs",
        "Advise stakeholders on technical trade-offs",
        "Plan, prioritize and steer a portfolio of projects",
        "Drive business change resulting from IT evolutions",
        "Manage client and supplier relationships across the project lifecycle",
        "Communicate clearly in writing and speech, in French and English",
      ],
    },
    {
      titre: "Stance & soft skills",
      summary:
        "How I work — as much as what I know how to do.",
      competences: [
        "End-to-end product design: backend → mobile → landing → SEO",
        "Active tech watch and disciplined experimentation",
        "Systems thinking: trace the root cause instead of masking symptoms",
        "Autonomy on long cycles, ability to work in distributed teams",
        "Editorial sense: copywriting, design, accessibility",
        "Pedagogy: document, explain, transfer knowledge",
      ],
    },
  ];

  return groups;
}
