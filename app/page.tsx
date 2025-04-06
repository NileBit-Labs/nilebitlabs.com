import Hero from "../components/ui/Hero";
import ServicesSection from "../components/sections/ServicesSection";

export default function Home() {
  return (
    <div>
      <Hero
        title="Empowering Innovation with NileBit Labs"
        subtitle="Cutting-Edge Software Solutions for the Future"
        ctaText="Discover Our Solutions"
        ctaLink="/solutions"
      />
      <ServicesSection />
    </div>
  );
}
