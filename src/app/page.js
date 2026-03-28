import HeroSection from "./components/HeroSection";
import MilestonesSection from "./components/Milestones";
import ProjectSection from "./components/ProjectSection";
import TechStackSection from "./components/TechStackSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      
      <div className="container mx-auto px-4 md:px-8 space-y-24 pb-20 sm:pb-32">
        <MilestonesSection />
        <ProjectSection />
        <TechStackSection />
        <ContactSection />
      </div>
    </div>
  );
}