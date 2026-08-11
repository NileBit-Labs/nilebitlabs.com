export const insightCategories = [
  "Engineering",
  "Artificial Intelligence",
  "Blockchain",
  "Product",
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export interface InsightSection {
  heading: string;
  paragraphs?: string[];
  points?: string[];
}

export interface Insight {
  slug: string;
  title: string;
  category: InsightCategory;
  excerpt: string;
  introduction: string;
  publishedAt: string;
  readingTime: string;
  image?: string;
  featured?: boolean;
  sections: InsightSection[];
}

export const insights: Insight[] = [
  {
    slug: "modern-software-development-principles",
    title: "Principles for Building Software That Can Keep Evolving",
    category: "Engineering",
    excerpt:
      "A practical view of the architecture, delivery, and maintenance decisions that help software remain useful after launch.",
    introduction:
      "Launching software is one milestone in a much longer product life. The more important question is whether the system can absorb new users, workflows, integrations, and business decisions without becoming fragile.",
    publishedAt: "2025-04-01",
    readingTime: "6 min read",
    image: "/img/blog/softwaredev-1.png",
    featured: true,
    sections: [
      {
        heading: "Begin with the system, not the screen",
        paragraphs: [
          "Interfaces make a product visible, but the underlying system determines whether it is dependable. Before implementation, teams should clarify the important data, roles, permissions, integrations, and operational constraints.",
          "This does not require designing every future feature. It means identifying the decisions that would be expensive to reverse and keeping the rest of the architecture appropriately simple.",
        ],
      },
      {
        heading: "Create boundaries that match the product",
        paragraphs: [
          "Clear modules make change safer. A commerce platform, for example, benefits when catalogue, account, order, and payment responsibilities are understandable rather than spread across unrelated components.",
        ],
        points: [
          "Keep business rules separate from presentation details.",
          "Define stable interfaces around external services.",
          "Prefer explicit data ownership over convenient duplication.",
          "Document the decisions a future engineer cannot infer from code alone.",
        ],
      },
      {
        heading: "Deliver in useful increments",
        paragraphs: [
          "A smaller release can still be production-minded. It should solve a coherent user problem, handle expected failure states, and provide enough operational visibility to learn from real use.",
          "Incremental delivery reduces risk when each increment is complete enough to validate. Shipping unfinished fragments faster only moves uncertainty into production.",
        ],
      },
      {
        heading: "Treat maintenance as product work",
        paragraphs: [
          "Dependencies, security updates, monitoring, support, and performance are part of the product—not chores that begin after development. Planning for them early leads to clearer ownership and fewer emergency decisions.",
          "Software that can evolve is rarely the result of one clever technology choice. It comes from disciplined decisions repeated across architecture, delivery, testing, and operation.",
        ],
      },
    ],
  },
  {
    slug: "applied-ai-product-decisions",
    title: "Where Applied AI Creates Real Product Value",
    category: "Artificial Intelligence",
    excerpt:
      "A decision framework for separating useful AI capabilities from features that add cost without improving the product.",
    introduction:
      "AI is most useful when it improves a specific decision, workflow, or customer experience. Starting with the model or trend instead of the problem usually creates an impressive demonstration with unclear operational value.",
    publishedAt: "2025-04-05",
    readingTime: "5 min read",
    image: "/img/blog/ai-1.png",
    sections: [
      {
        heading: "Identify the decision being improved",
        paragraphs: [
          "A useful AI opportunity can be described without technical language: reduce the time needed to review documents, help a support team find relevant information, identify patterns in operational data, or assist users through a complex task.",
          "That framing creates a baseline. Teams can compare the AI-assisted workflow with the current process and decide whether the added complexity is justified.",
        ],
      },
      {
        heading: "Design for uncertainty",
        paragraphs: [
          "AI outputs are not conventional deterministic results. Product design must account for confidence, ambiguity, incomplete context, and incorrect answers.",
        ],
        points: [
          "Give users a way to review consequential outputs.",
          "Make source context visible where the workflow allows it.",
          "Define what happens when the system cannot provide a reliable result.",
          "Avoid automating high-impact decisions without appropriate human oversight.",
        ],
      },
      {
        heading: "Evaluate the complete workflow",
        paragraphs: [
          "Model quality matters, but so do response time, cost, privacy, integration reliability, and the effort required to maintain evaluation data. A technically capable model can still produce a poor product if it interrupts how people work.",
          "The strongest implementation is often narrower than the first idea. A focused capability is easier to evaluate, explain, and improve than an assistant expected to handle every task.",
        ],
      },
      {
        heading: "Build evidence before expanding",
        paragraphs: [
          "Start with a bounded workflow and define what useful performance means for that context. Review real failure modes, adjust the experience, and expand only when the evidence supports it.",
          "Applied AI becomes credible product engineering when its value can be understood in the work it improves—not in the novelty of the technology behind it.",
        ],
      },
    ],
  },
  {
    slug: "blockchain-product-fit",
    title: "When Blockchain Is the Right Product Infrastructure",
    category: "Blockchain",
    excerpt:
      "A restrained way to evaluate whether shared state, programmable assets, or verifiable transactions justify blockchain infrastructure.",
    introduction:
      "Blockchain should solve a product constraint, not define the product by default. Its value is strongest when multiple parties need shared, verifiable state and cannot rely on one operator to control every important action.",
    publishedAt: "2025-04-10",
    readingTime: "6 min read",
    image: "/img/blog/blockchain-1.png",
    sections: [
      {
        heading: "Start with the trust model",
        paragraphs: [
          "The first architecture question is not which chain to use. It is who writes data, who verifies it, who can change the rules, and what users must be able to own or prove independently.",
          "If one trusted organization can operate the entire workflow efficiently, a conventional database may be clearer and less expensive. Blockchain becomes relevant when decentralization or independent verification changes the value of the product.",
        ],
      },
      {
        heading: "Look for durable product reasons",
        points: [
          "Assets or permissions need to move between independent participants.",
          "Transactions must be verifiable without access to a private database.",
          "Business rules benefit from transparent, programmable execution.",
          "Users need direct custody or portable ownership.",
        ],
        paragraphs: [
          "These properties can be valuable, but each introduces responsibilities around wallets, keys, transaction states, fees, and user education.",
        ],
      },
      {
        heading: "Design the experience around unfamiliar states",
        paragraphs: [
          "A blockchain transaction may be submitted, pending, confirmed, rejected, or replaced. Interfaces must explain those states in plain language and provide safe recovery paths.",
          "Users should understand the consequences of signing an action. Technical transparency is not enough if the product experience hides risk behind unfamiliar terminology.",
        ],
      },
      {
        heading: "Keep the architecture proportionate",
        paragraphs: [
          "Many blockchain products still need conventional application infrastructure for search, notifications, analytics, and responsive interfaces. The goal is not to place everything on-chain; it is to put the right responsibilities where they are most dependable.",
          "A credible Web3 product makes its trust assumptions clear and uses blockchain only where those properties create meaningful value.",
        ],
      },
    ],
  },
  {
    slug: "mvp-without-throwaway-foundations",
    title: "Building an MVP Without Creating a Throwaway Product",
    category: "Product",
    excerpt:
      "How to reduce scope while preserving the decisions that matter for security, maintainability, and future product learning.",
    introduction:
      "An MVP is a focused product used to test an important assumption. It is not a reason to ignore the foundations that make the result safe to operate and useful to learn from.",
    publishedAt: "2025-03-30",
    readingTime: "5 min read",
    image: "/img/blog/web&mobile-1.jpg",
    sections: [
      {
        heading: "Reduce breadth, not integrity",
        paragraphs: [
          "The most effective scope reduction removes secondary personas, edge workflows, integrations, and configuration options. It does not remove basic security, clear data models, error handling, or the ability to understand what happens in production.",
          "A narrow workflow completed properly creates better evidence than a broad collection of disconnected features.",
        ],
      },
      {
        heading: "Define the learning goal",
        paragraphs: [
          "Before choosing features, state what the first release needs to establish. The question may concern demand, usability, operational feasibility, or whether a technical capability performs well enough in context.",
        ],
        points: [
          "Name the primary user and the problem they need resolved.",
          "Choose the smallest complete journey that addresses that problem.",
          "Decide what evidence will influence the next product decision.",
          "Separate launch requirements from ideas that can wait.",
        ],
      },
      {
        heading: "Protect expensive decisions",
        paragraphs: [
          "Some implementation details can change cheaply. Others—identity, permissions, core data relationships, payment records, and integration contracts—become costly to repair once real usage begins.",
          "A production-minded MVP gives those decisions enough attention while avoiding speculative architecture for scale that may never arrive.",
        ],
      },
      {
        heading: "Plan the path after launch",
        paragraphs: [
          "The release should include a clear way to observe errors, receive user feedback, and prioritize what comes next. Without that loop, the MVP is only a smaller launch, not a learning system.",
          "The right foundation is not the biggest one. It is the simplest system that can support real use, reveal what matters, and change without requiring an immediate rebuild.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

export function getRelatedInsights(insight: Insight, limit = 2) {
  return insights
    .filter((candidate) => candidate.slug !== insight.slug)
    .sort((a, b) => Number(b.category === insight.category) - Number(a.category === insight.category))
    .slice(0, limit);
}
