// projects.js
export const projects = {
  featured: [
    {
      id: "nft-marketplace",
      title: "NFT Marketplace",
      description:
        "A decentralized platform for trading digital assets with enhanced security features.",
      category: "Web3",
      image: "/img/projects/nft-marketplace.jpg",
      link: "/portfolio/nft-marketplace",
      technologies: ["Ethereum", "Solidity", "IPFS"],
    },
    {
      id: "ai-driver-monitoring",
      title: "Driver Behavior Monitoring",
      description:
        "Real-time AI system that monitors driver behavior to enhance road safety.",
      category: "AI & ML",
      image: "/img/projects/ai-driver.jpg",
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
      link: "/img/portfolio/skcomputerstore.png",
      technologies: ["Next.js", "Tailwind CSS", "Stripe"],
    },
  ],
  blockchain: [
    {
      id: "nft-marketplace",
      title: "NFT Marketplace",
      description:
        "A decentralized platform for creating, buying, and selling digital assets with enhanced security features.",
      image: "/img/projects/nft-marketplace.jpg",
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
      image: "/img/projects/defi-platform.jpg",
      technologies: ["Ethereum", "Solidity", "The Graph"],
    },
  ],
  aiMl: [
    {
      id: "ai-driver-monitoring",
      title: "AI Driver Behavior Monitoring",
      description:
        "An advanced computer vision system that monitors driver behavior in real-time to prevent accidents.",
      image: "/img/projects/ai-driver.jpg",
      technologies: ["TensorFlow", "Computer Vision", "Edge Computing"],
    },
    {
      id: "business-assistant",
      title: "Intelligent Business Assistant",
      description:
        "An AI agent that automates business processes, customer service, and data analysis tasks.",
      image: "/img/projects/ai-agent.jpg",
      technologies: ["NLP", "Python", "GPT Integration"],
    },
    {
      id: "predictive-analytics",
      title: "Enterprise Predictive Analytics",
      description:
        "A powerful predictive analytics platform that forecasts business trends and optimizes operations.",
      image: "/img/projects/predictive-analytics.jpg",
      technologies: ["PyTorch", "Time Series", "Big Data"],
    },
    {
      id: "medical-imaging",
      title: "Medical Imaging Diagnostics",
      description:
        "An AI system that assists medical professionals in analyzing medical images for early disease detection.",
      image: "/img/projects/medical-ai.jpg",
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
      image: "/img/projects/corporate-site.jpg",
      technologies: ["WordPress", "Custom Theme", "SEO"],
    },
    {
      id: "creative-portfolio",
      title: "Creative Portfolio",
      description:
        "An artist portfolio site with gallery features and client project showcase.",
      image: "/img/projects/portfolio-site.jpg",
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
        image: "/img/projects/crm-system.jpg",
        technologies: ["Vue.js", "Node.js", "MongoDB"],
      },
      {
        id: "project-management",
        title: "Project Management Suite",
        description:
          "An enterprise-grade project management application with real-time collaboration and resource allocation.",
        image: "/img/projects/project-management.jpg",
        technologies: ["React", "GraphQL", "PostgreSQL"],
      },
    ],
    saas: [
      {
        id: "headless-cms",
        title: "Headless CMS Platform",
        description:
          "A flexible content management system with API-first architecture for omnichannel content delivery.",
        image: "/img/projects/headless-cms.jpg",
        technologies: ["Next.js", "NestJS", "MongoDB"],
      },
      {
        id: "marketing-automation",
        title: "Marketing Automation Suite",
        description:
          "A comprehensive marketing automation tool with email campaigns, social media scheduling, and analytics.",
        image: "/img/projects/marketing-automation.jpg",
        technologies: ["Angular", "Django", "Redis"],
      },
    ],
  },
  mobileApps: [
    {
      id: "fittrack-pro",
      title: "FitTrack Pro",
      description:
        "A fitness tracking app with personalized workout plans, nutrition tracking, and progress analytics.",
      image: "/img/projects/fitness-app.jpg",
      technologies: ["React Native", "Firebase", "iOS & Android"],
    },
    {
      id: "securebank-mobile",
      title: "SecureBank Mobile",
      description:
        "A secure mobile banking application with biometric authentication and advanced transaction features.",
      image: "/img/projects/banking-app.jpg",
      technologies: ["Flutter", "Java Backend", "Blockchain"],
    },
    {
      id: "fooddash",
      title: "FoodDash",
      description:
        "A comprehensive food delivery platform with real-time order tracking and restaurant management.",
      image: "/img/projects/food-delivery.jpg",
      technologies: ["Swift UI", "Kotlin", "Node.js"],
    },
  ],
};

// You can add more categories as needed
export const projectCategories = [
  { id: "websites", label: "Websites", href: "#websites" },
  { id: "web-apps", label: "Web Applications", href: "#web-apps" },
  { id: "mobile-apps", label: "Mobile Apps", href: "#mobile-apps" },
  { id: "ai-ml", label: "AI & ML", href: "#ai-ml" },
  { id: "blockchain", label: "Blockchain", href: "#blockchain" },
  { id: "cybersecurity", label: "Cybersecurity", href: "#cybersecurity" },
  { id: "enterprise", label: "Enterprise Solutions", href: "#enterprise" },
];
