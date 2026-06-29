import HeroSection from "./components/sections/HeroSection";
import MilestonesSection from "./components/sections/Milestones";
import ProjectSection from "./components/sections/ProjectSection";
import TechStackSection from "./components/sections/TechStackSection";
import ContactSection from "./components/sections/ContactSection";

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