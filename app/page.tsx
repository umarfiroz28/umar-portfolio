import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import StructuredData from "@/components/StructuredData";
import TechMarquee from "@/components/TechMarquee";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-canvas text-ink">
      <StructuredData />
      <Navbar />
      <HeroSection />
      <TechMarquee />
      <ProcessSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
