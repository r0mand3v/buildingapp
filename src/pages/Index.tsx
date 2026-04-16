import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CityNeverSleeps from "@/components/CityNeverSleeps";
import LiveMapSection from "@/components/LiveMapSection";
import VibesSection from "@/components/VibesSection";
import ForYouSection from "@/components/ForYouSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import SportsSection from "@/components/SportsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen noise">
      <Navbar />
      <HeroSection />
      <CityNeverSleeps />
      <LiveMapSection />
      <VibesSection />
      <ForYouSection />
      <HowItWorks />
      <Testimonials />
      <SportsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
