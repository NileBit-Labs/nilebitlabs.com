import { CodeBracketIcon, CloudIcon, ShieldCheckIcon, CubeTransparentIcon, BanknotesIcon, CommandLineIcon } from '@heroicons/react/24/outline';

export default function Services() {
  const services = [
    {
      id: '01',
      title: 'Fullstack Software Development',
      description: 'We build bespoke software solutions tailored to your unique business requirements.',
      details: [
        'Custom web and mobile application development',
        'Frontend and backend integration',
        'API development and third-party system integration',
        'Database design and optimization',
        'UX/UI design and implementation'
      ],
      icon: CodeBracketIcon
    },
    {
      id: '02',
      title: 'AI Agents Solutions, AI & Machine Learning',
      description: 'Harness the power of AI to drive innovation and efficiency in your operations.',
      details: [
        'Conversational AI and virtual agent development',
        'Predictive analytics and data modeling',
        'Computer vision and image recognition systems',
        'Natural language processing solutions',
        'AI-powered process automation'
      ],
      icon: CommandLineIcon
    },
    {
      id: '03',
      title: 'Cloud Solutions',
      description: 'Seamless cloud integration and management for scalability and performance.',
      details: [
        'Cloud migration and infrastructure setup',
        'Serverless architecture implementation',
        'DevOps and continuous integration/deployment',
        'Microservices architecture design',
        'Multi-cloud strategy and management'
      ],
      icon: CloudIcon
    },
    {
      id: '04',
      title: 'Cybersecurity',
      description: 'Protect your business with our advanced cybersecurity services.',
      details: [
        'Security assessment and vulnerability testing',
        'Secure application development practices',
        'Threat monitoring and incident response',
        'Data encryption and protection',
        'Security compliance and certification support'
      ],
      icon: ShieldCheckIcon
    },
    {
      id: '05',
      title: 'Web3 & Blockchain dApp Development',
      description: 'Welcome to the future of the internet – build and deploy decentralized applications.',
      details: [
        'Smart contract development and auditing',
        'NFT marketplaces and token creation',
        'DeFi protocol development',
        'Blockchain integration with existing systems',
        'Layer 2 scaling solutions implementation'
      ],
      icon: CubeTransparentIcon
    },
    {
      id: '06',
      title: 'Fintech Solutions',
      description: 'Where finance meets innovation – scalable tech for modern financial services.',
      details: [
        'Payment processing and gateway integration',
        'Digital banking solutions',
        'Regulatory compliance technology',
        'Wealth management platforms',
        'Fraud detection and prevention systems'
      ],
      icon: BanknotesIcon
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12">Comprehensive technology solutions to power your business growth</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 p-3 bg-orange-100 rounded-lg mr-4">
                  <service.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h2 className="text-2xl font-semibold text-orange-500">
                  {service.id} {service.title}
                </h2>
              </div>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">What we offer:</h3>
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}