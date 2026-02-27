import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GameLinksSection from "@/components/GameLinksSection";
import CommunitySection from "@/components/CommunitySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <GameLinksSection />
      <CommunitySection />
      <ContactSection />
    </div>
  );
};

export default Index;
