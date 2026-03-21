import HeroSection from "./components/HeroSection";
import MilestonesSection from "./components/Milestones";
import ProjectSection from "./components/ProjectSection";
import TechStackSection from "./components/TechStackSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="font-[family-name:var:(--font-geist-sans)]">
      <HeroSection />
      <div className="container mx-auto px-4 md:px-8 py-8 pb-20 sm:p-20 ">
        <MilestonesSection />
        <ProjectSection/>
        <TechStackSection />
        <ContactSection />
      </div>
    </div>
  );
}
