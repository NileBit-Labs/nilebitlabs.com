/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SiReact,
  SiNodedotjs,
  SiAmazonaws,
  SiBlockchain,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiNextdotjs,
  SiTensorflow,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import {
  CodeBracketIcon,
  CloudIcon,
  ShieldCheckIcon,
  CubeTransparentIcon,
  BanknotesIcon,
  CommandLineIcon,
  CubeIcon,
  ServerIcon,
  CircleStackIcon,
  ArrowPathIcon,
  ChipIcon,
  DatabaseIcon,
  SwatchIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  RocketLaunchIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import { Cloud } from "lucide-react";

export const technologies = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    icon: SiReact,
  },
  {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 engine.",
    icon: SiNodedotjs,
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
  {
    name: "TypeScript",
    description:
      "Strongly typed programming language that builds on JavaScript.",
    icon: SiTypescript,
  },
  {
    name: "Docker",
    description:
      "Platform for developing, shipping, and running applications in containers.",
    icon: SiDocker,
  },
  {
    name: "Kubernetes",
    description:
      "Open-source platform for automating deployment and scaling of containerized applications.",
    icon: SiKubernetes,
  },
  {
    name: "GraphQL",
    description:
      "Query language for APIs and runtime for fulfilling those queries.",
    icon: SiGraphql,
  },
  {
    name: "Next.js",
    description:
      "React framework with hybrid static & server rendering, TypeScript support, and route pre-fetching.",
    icon: SiNextdotjs,
  },
  {
    name: "TensorFlow",
    description:
      "Open-source platform for machine learning and artificial intelligence.",
    icon: SiTensorflow,
  },
  {
    name: "PostgreSQL",
    description: "Advanced open-source relational database system.",
    icon: SiPostgresql,
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapidly building custom user interfaces.",
    icon: SiTailwindcss,
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
    icon: "MagnifyingGlassIcon",
    color: "blue",
    subprocesses: [
      {
        title: "Requirement Analysis",
        description:
          "Identifying key needs through stakeholder interviews and research.",
      },
      {
        title: "Market Research",
        description: "Analyzing industry trends and competitor solutions.",
      },
      {
        title: "Problem Definition",
        description: "Clearly defining the challenges we need to address.",
      },
    ],
  },
  {
    title: "Planning",
    description: "We create a roadmap and strategy tailored to your project.",
    icon: "ClipboardDocumentListIcon",
    color: "purple",
    subprocesses: [
      {
        title: "Solution Design",
        description: "Creating architecture and design specifications.",
      },
      {
        title: "Resource Allocation",
        description: "Assigning the right experts to each project component.",
      },
      {
        title: "Timeline Development",
        description:
          "Setting milestones and creating a detailed project schedule.",
      },
    ],
  },
  {
    title: "Execution",
    description: "We develop and implement the solution with precision.",
    icon: "CodeBracketIcon",
    color: "orange",
    subprocesses: [
      {
        title: "Agile Development",
        description: "Building your solution in iterative sprints.",
      },
      {
        title: "Quality Assurance",
        description: "Rigorous testing to ensure performance and reliability.",
      },
      {
        title: "Progress Tracking",
        description: "Regular updates and demonstrations of completed work.",
      },
    ],
  },
  {
    title: "Delivery",
    description: "We ensure the final product meets your expectations.",
    icon: "RocketLaunchIcon",
    color: "green",
    subprocesses: [
      {
        title: "User Training",
        description:
          "Empowering your team to utilize the new solution effectively.",
      },
      {
        title: "Deployment",
        description:
          "Smooth transition from development to production environment.",
      },
      {
        title: "Documentation",
        description: "Comprehensive guides for system maintenance and usage.",
      },
    ],
  },
  {
    title: "Support",
    description: "We provide ongoing assistance to ensure continued success.",
    icon: "LifebuoyIcon",
    color: "red",
    subprocesses: [
      {
        title: "Maintenance",
        description: "Regular updates and system health monitoring.",
      },
      {
        title: "Performance Optimization",
        description: "Continuous improvements based on usage analytics.",
      },
      {
        title: "Growth Planning",
        description: "Strategic consultation for future enhancements.",
      },
    ],
  },
  {
    title: "Evolution",
    description: "We help evolve your solution as your business grows.",
    icon: "ArrowPathIcon",
    color: "teal",
    subprocesses: [
      {
        title: "Feature Expansion",
        description: "Adding new capabilities based on business growth.",
      },
      {
        title: "Technology Upgrade",
        description: "Keeping systems current with emerging technologies.",
      },
      {
        title: "Scaling Strategy",
        description: "Preparing infrastructure for increased demand.",
      },
    ],
  },
];
