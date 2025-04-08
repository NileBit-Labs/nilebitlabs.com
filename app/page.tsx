// app/page.tsx
import Hero from "../components/ui/Hero";
import ServicesSection from "../components/sections/ServicesSection";
import BlogSection from "../components/sections/BlogSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import NewsletterSection from "../components/sections/NewsletterSection";

export default function Home() {
  return (
    <div>
      <Hero
        title="Empowering Innovation with NileBit Labs"
        subtitle="Transforming ideas into powerful digital experiences through innovative software development and strategic technology consulting."
        ctaText="Let's Talk"
        ctaLink="/contact"
      />
      <ServicesSection />
      <PortfolioSection />
      <BlogSection />
      <NewsletterSection />
    </div>
  );
}
