import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsPipol from "@/components/WhatIsPipol";
import LiveMapSection from "@/components/LiveMapSection";
import VibesSection from "@/components/VibesSection";
import ForYouSection from "@/components/ForYouSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhatIsPipol />
      <LiveMapSection />
      <VibesSection />
      <ForYouSection />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
