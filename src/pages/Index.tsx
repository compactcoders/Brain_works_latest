import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { TrustedBySection } from '@/components/TrustedBySection';
import { WhoWeAreSection } from '@/components/WhoWeAreSection';
import { SolutionsSection } from '@/components/SolutionsSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { TestimonialSection } from '@/components/TestimonialSection';
import { CareerSection } from '@/components/CareerSection';
import { NewsSection } from '@/components/NewsSection';
import { IndustriesSection } from '@/components/IndustriesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <IndustriesSection />
      <TrustedBySection />
      <WhoWeAreSection />
      <SolutionsSection />
      <PortfolioSection />
      <TestimonialSection />
      <CareerSection />
      <NewsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
