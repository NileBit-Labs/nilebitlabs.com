import type { KnowledgeRecord } from "./types";

export const nileBitFacts = {
  company: {
    name: "NileBit Labs",
    description: "A product engineering and emerging technology company based in Kampala, Uganda, serving clients locally and globally.",
    location: "Makerere Kavule, Kampala, Uganda",
    email: "info@nilebitlabs.com",
    phone: "+256 770 919 975",
    hours: "Monday to Friday, 9:00 AM to 5:00 PM; Saturday, 10:00 AM to 2:00 PM, East Africa Time.",
  },
  services: [
    "Full-stack web and software engineering",
    "Mobile application development",
    "Artificial intelligence and machine learning",
    "Blockchain and Web3 development",
    "Cloud infrastructure",
    "UI/UX design",
    "Technology consulting",
  ],
  process: ["Discover", "Architect", "Build", "Validate", "Launch", "Improve"],
  leadership: [
    "Douglas Bagambe — CEO & Co-Founder; company strategy, business development, partnerships, technical leadership, blockchain, and software engineering.",
    "Elioda Muhangi — CTO & Co-Founder; technology strategy, system architecture, research, AI/ML, and engineering quality.",
    "Collins Shema — COO & Co-Founder; operations, project coordination, delivery processes, client experience, and quality assurance.",
  ],
  work: [
    "SK Computer Store — commerce platform work. Detailed operating metrics remain unconfirmed.",
    "Driver Behavior Monitoring — AI and computer-vision project. Deployment scope remains unconfirmed.",
    "Foozana — mobile nutrition and wellness application. Current release status remains unconfirmed.",
    "Solana Lottery Platform — blockchain product. Production status remains unconfirmed.",
    "TeraSalesAI — AI workflow-automation product work. Client scope and deployment status remain unconfirmed.",
  ],
} as const;

export const knowledgeRecords: KnowledgeRecord[] = [
  { id: "company", title: "NileBit Labs", summary: nileBitFacts.company.description, keywords: ["company", "nilebit", "about", "who are you"], href: "/about" },
  { id: "services", title: "Services", summary: `NileBit Labs provides ${nileBitFacts.services.join(", ")}.`, keywords: ["service", "capability", "build", "software", "web", "cloud", "design", "consulting"], href: "/services" },
  { id: "mobile", title: "Mobile development", summary: "NileBit Labs builds cross-platform mobile products for customer and operational workflows.", keywords: ["mobile", "app", "ios", "android", "flutter"], href: "/services" },
  { id: "ai", title: "Artificial intelligence", summary: "NileBit Labs works on applied AI and machine learning for automation, prediction, workflow assistance, and intelligent product features.", keywords: ["ai", "artificial intelligence", "machine learning", "automation", "agent"], href: "/services" },
  { id: "blockchain", title: "Blockchain and Web3", summary: "NileBit Labs engineers smart-contract systems, Web3 applications, wallets, and blockchain integrations where decentralized infrastructure fits the product.", keywords: ["blockchain", "web3", "solana", "smart contract", "wallet"], href: "/services" },
  { id: "process", title: "Delivery process", summary: `The delivery path is ${nileBitFacts.process.join(", ")}. Engagements begin with the business problem, users, constraints, and technical risk.`, keywords: ["process", "approach", "start", "timeline", "delivery", "how do projects"], href: "/services" },
  { id: "work", title: "Selected work", summary: `Selected work includes ${nileBitFacts.work.join(" ")}`, keywords: ["work", "case study", "case studies", "project", "portfolio", "examples"], href: "/work" },
  { id: "leadership", title: "Leadership", summary: nileBitFacts.leadership.join(" "), keywords: ["leader", "leadership", "founder", "ceo", "cto", "coo", "douglas", "elioda", "collins"], href: "/about" },
  { id: "contact", title: "Contact", summary: `Email ${nileBitFacts.company.email}, call ${nileBitFacts.company.phone}, or visit the Contact page. NileBit Labs is located at ${nileBitFacts.company.location}.`, keywords: ["contact", "email", "phone", "call", "reach", "talk", "location", "based", "where"], href: "/contact" },
  { id: "insights", title: "Insights", summary: "NileBit Labs publishes practical perspectives on software engineering, applied AI, blockchain product fit, and MVP foundations.", keywords: ["insight", "article", "read", "thinking", "engineering principle"], href: "/insights" },
  { id: "international", title: "International work", summary: "NileBit Labs is based in Kampala, Uganda, and can collaborate remotely with clients in other markets using clear milestones, documentation, and regular communication.", keywords: ["international", "global", "remote", "country", "uganda"], href: "/about" },
  { id: "mvp", title: "MVPs", summary: "NileBit Labs treats an MVP as the smallest complete product that can test an important assumption while preserving the foundations required for safe operation and useful learning.", keywords: ["mvp", "startup", "prototype", "founder"], href: "/services" },
];

export const navigationActions = {
  services: { label: "View Services", href: "/services" },
  work: { label: "Explore Work", href: "/work" },
  about: { label: "About NileBit Labs", href: "/about" },
  insights: { label: "Read Insights", href: "/insights" },
  contact: { label: "Discuss Your Project", href: "/contact" },
} as const;

export function serializeKnowledge() {
  return [
    `${nileBitFacts.company.name}: ${nileBitFacts.company.description}`,
    `Location: ${nileBitFacts.company.location}. Email: ${nileBitFacts.company.email}. Phone: ${nileBitFacts.company.phone}. Hours: ${nileBitFacts.company.hours}`,
    `Services: ${nileBitFacts.services.join("; ")}.`,
    `Process: ${nileBitFacts.process.join(" → ")}.`,
    `Leadership: ${nileBitFacts.leadership.join(" ")}`,
    `Work: ${nileBitFacts.work.join(" ")}`,
    `Public routes: Home /, Services /services, Work /work, About /about, Insights /insights, Contact /contact, FAQ /faq.`,
  ].join("\n");
}
