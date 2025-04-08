import {
  CodeBracketIcon,
  CloudIcon,
  ShieldCheckIcon,
  CubeTransparentIcon,
  BanknotesIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

export const technologies = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    icon: CodeBracketIcon,
  },
  {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 engine.",
    icon: CommandLineIcon,
  },
  {
    name: "AWS",
    description: "Cloud computing services for scalable applications.",
    icon: CloudIcon,
  },
  {
    name: "Blockchain",
    description: "Decentralized ledger technology for secure transactions.",
    icon: CubeTransparentIcon,
  },
];

export const services = [
  {
    id: "01",
    title: "Fullstack Software Development",
    description:
      "We build bespoke software solutions tailored to your unique business requirements.",
    details: [
      "Custom web and mobile application development",
      "Frontend and backend integration",
      "API development and third-party system integration",
      "Database design and optimization",
      "UX/UI design and implementation",
    ],
    icon: CodeBracketIcon,
  },
  {
    id: "02",
    title: "AI Agents Solutions, AI & Machine Learning",
    description:
      "Harness the power of AI to drive innovation and efficiency in your operations.",
    details: [
      "Conversational AI and virtual agent development",
      "Predictive analytics and data modeling",
      "Computer vision and image recognition systems",
      "Natural language processing solutions",
      "AI-powered process automation",
    ],
    icon: CommandLineIcon,
  },
  {
    id: "03",
    title: "Cloud Solutions",
    description:
      "Seamless cloud integration and management for scalability and performance.",
    details: [
      "Cloud migration and infrastructure setup",
      "Serverless architecture implementation",
      "DevOps and continuous integration/deployment",
      "Microservices architecture design",
      "Multi-cloud strategy and management",
    ],
    icon: CloudIcon,
  },
  {
    id: "04",
    title: "Cybersecurity",
    description:
      "Protect your business with our advanced cybersecurity services.",
    details: [
      "Security assessment and vulnerability testing",
      "Secure application development practices",
      "Threat monitoring and incident response",
      "Data encryption and protection",
      "Security compliance and certification support",
    ],
    icon: ShieldCheckIcon,
  },
  {
    id: "05",
    title: "Web3 & Blockchain dApp Development",
    description:
      "Welcome to the future of the internet – build and deploy decentralized applications.",
    details: [
      "Smart contract development and auditing",
      "NFT marketplaces and token creation",
      "DeFi protocol development",
      "Blockchain integration with existing systems",
      "Layer 2 scaling solutions implementation",
    ],
    icon: CubeTransparentIcon,
  },
  {
    id: "06",
    title: "Fintech Solutions",
    description:
      "Where finance meets innovation – scalable tech for modern financial services.",
    details: [
      "Payment processing and gateway integration",
      "Digital banking solutions",
      "Regulatory compliance technology",
      "Wealth management platforms",
      "Fraud detection and prevention systems",
    ],
    icon: BanknotesIcon,
  },
];

export const process = [
  {
    title: "Discovery",
    description: "We start by understanding your business needs and goals.",
  },
  {
    title: "Planning",
    description: "We create a roadmap and strategy tailored to your project.",
  },
  {
    title: "Execution",
    description: "We develop and implement the solution with precision.",
  },
  {
    title: "Delivery",
    description: "We ensure the final product meets your expectations.",
  },
];
