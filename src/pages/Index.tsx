import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LiveMapSection from "@/components/LiveMapSection";
import VibesSection from "@/components/VibesSection";
import ForYouSection from "@/components/ForYouSection";
import SocialSection from "@/components/SocialSection";
import HowItWorks from "@/components/HowItWorks";
import SportsSection from "@/components/SportsSection";
import Manifesto from "@/components/Manifesto";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LiveMapSection />
      <VibesSection />
      <ForYouSection />
      <SocialSection />
      <HowItWorks />
      <SportsSection />
      <Manifesto />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
