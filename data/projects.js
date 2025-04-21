// projects.js
export const projects = {
  featured: [
    {
      id: "nft-marketplace",
      title: "NFT Marketplace",
      description:
        "A decentralized platform for trading digital assets with enhanced security features.",
      category: "Web3",
      image: "/img/portfolio/nft-marketplace.jpeg",
      link: "/portfolio/nft-marketplace",
      technologies: ["Ethereum", "Solidity", "IPFS"],
    },
    {
      id: "ai-driver-monitoring",
      title: "Driver Behavior Monitoring",
      description:
        "Real-time AI system that monitors driver behavior to enhance road safety.",
      category: "AI & ML",
      image: "/img/portfolio/ai-driver.jpg",
      link: "/portfolio/ai-driver-monitoring",
      technologies: ["TensorFlow", "Computer Vision", "Edge Computing"],
    },
    {
      id: "sk-computer-store",
      title: "SK Computer Store",
      description:
        "Feature-rich e-commerce platform for computer hardware and accessories.",
      category: "E-Commerce",
      image: "/img/portfolio/skcomputerstore.png",
      link: "/portfolio/skcomputerstore",
      technologies: ["Next.js", "Tailwind CSS", "Stripe"],
    },
  ],
  blockchain: [
    {
      id: "nft-marketplace",
      title: "NFT Marketplace",
      description:
        "A decentralized platform for creating, buying, and selling digital assets with enhanced security features.",
      image: "/img/portfolio/nft-marketplace.jpeg",
      technologies: ["Ethereum", "Solidity", "IPFS"],
    },
    {
      id: "solana-lottery",
      title: "Solana Lottery Platform",
      description:
        "A transparent and fair lottery system built on Solana blockchain with automated prize distribution.",
      image: "/img/portfolio/soltery.png",
      technologies: ["Solana", "Rust", "React"],
    },
    {
      id: "defi-lending",
      title: "DeFi Lending Protocol",
      description:
        "A decentralized finance platform for lending and borrowing crypto assets with optimized yield strategies.",
      image: "/img/portfolio/compound.png",
      technologies: ["Ethereum", "Solidity", "The Graph"],
    },
  ],
  aiMl: [
    {
      id: "ai-driver-monitoring",
      title: "AI Driver Behavior Monitoring",
      description:
        "An advanced computer vision system that monitors driver behavior in real-time to prevent accidents.",
      image: "/img/portfolio/ai-driver.jpg",
      technologies: ["TensorFlow", "Computer Vision", "Edge Computing"],
    },
    {
      id: "terasalesai",
      title: "TeraSalesAI",
      description:
        "An AI agent that automates business processes, customer service, and data analysis tasks.",
      image: "/img/portfolio/terasalesai.jpg",
      technologies: ["NLP", "Python", "GPT Integration"],
    },
    {
      id: "bankguard",
      title: "BankGuard",
      description:
        "An AI Bankchurning model that helps analyze and predict customer churning rates.",
      image: "/img/portfolio/bankguard.jpg",
      technologies: ["PyTorch", "Time Series", "Big Data"],
    },
    {
      id: "medical-imaging",
      title: "Medical Imaging Diagnostics",
      description:
        "An AI system that assists medical professionals in analyzing medical images for early disease detection.",
      image: "/img/portfolio/medical.jpg",
      technologies: ["Deep Learning", "Medical Imaging", "HIPAA Compliant"],
    },
  ],
  websites: [
    {
      id: "sk-computer-store",
      title: "SK Computer Store",
      description:
        "A comprehensive e-commerce solution for computer hardware with inventory management and payment gateway integration.",
      image: "/img/portfolio/skcomputerstore.png",
      technologies: ["Next.js", "Tailwind CSS", "Stripe"],
    },
    {
      id: "techvision-corporate",
      title: "TechVision Corporate",
      description:
        "A modern, responsive corporate website with CMS integration and SEO optimization.",
      image: "/img/portfolio/TechVision-Corporate.png",
      technologies: ["WordPress", "Custom Theme", "SEO"],
    },
    {
      id: "creative-portfolio",
      title: "Creative Portfolio",
      description:
        "An artist portfolio site with gallery features and client project showcase.",
      image: "/img/portfolio/portfolio-creative.png",
      technologies: ["React", "Framer Motion", "Sanity CMS"],
    },
  ],
  webApps: {
    enterprise: [
      {
        id: "crm-system",
        title: "Custom CRM System",
        description:
          "A tailored customer relationship management system with advanced analytics and reporting features.",
        image: "/img/portfolio/crm.jpg",
        technologies: ["Vue.js", "Node.js", "MongoDB"],
      },
      {
        id: "project-management",
        title: "Project Management Suite",
        description:
          "An enterprise-grade project management application with real-time collaboration and resource allocation.",
        image: "/img/portfolio/project-management.png",
        technologies: ["React", "GraphQL", "PostgreSQL"],
      },
    ],
    saas: [
      {
        id: "headless-cms",
        title: "Headless CMS Platform",
        description:
          "A flexible content management system with API-first architecture for omnichannel content delivery.",
        image: "/img/portfolio/cms.jpg",
        technologies: ["Next.js", "NestJS", "MongoDB"],
      },
      {
        id: "marketing-automation",
        title: "Marketing Automation Suite",
        description:
          "A comprehensive marketing automation tool with email campaigns, social media scheduling, and analytics.",
        image: "/img/portfolio/marketing-automation.jpg",
        technologies: ["Angular", "Django", "Redis"],
      },
    ],
  },
  mobileApps: [
    {
      id: "foozana",
      title: "Foozana",
      description:
        "Foozana is a diet and nutrition wellness app built in flutter.",
      image: "/img/portfolio/foozana.jpg",
      technologies: ["React Native", "Firebase", "iOS & Android"],
    },
    {
      id: "securebank-mobile",
      title: "SecureBank Mobile",
      description:
        "A secure mobile banking application with biometric authentication and advanced transaction features.",
      image: "/img/portfolio/securebank.jpg",
      technologies: ["Flutter", "Java Backend", "Blockchain"],
    },
    {
      id: "fooddash",
      title: "FoodDash",
      description:
        "A comprehensive food delivery platform with real-time order tracking and restaurant management.",
      image: "/img/portfolio/fooddash.jpg",
      technologies: ["Swift UI", "Kotlin", "Node.js"],
    },
  ],
};

// You can add more categories as needed
export const projectCategories = [
  { id: "blockchain", label: "Blockchain", href: "#blockchain" },
  { id: "ai-ml", label: "AI & ML", href: "#ai-ml" },
  { id: "websites", label: "Websites", href: "#websites" },
  { id: "web-apps", label: "Web Applications", href: "#web-apps" },
  { id: "mobile-apps", label: "Mobile Apps", href: "#mobile-apps" },
];
