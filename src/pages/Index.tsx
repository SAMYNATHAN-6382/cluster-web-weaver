
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import GetStartedSection from "../components/GetStartedSection";
import DocumentationSection from "../components/DocumentationSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GetStartedSection />
        <DocumentationSection />
        <CaseStudiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
