import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import CoreSpotlight from "./components/CoreSpotlight";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#061729] text-[#EAF6FF] antialiased"
      style={{ overflowX: "clip" }}
    >
      <Navbar />
      <Hero />
      <TechMarquee />
      <CoreSpotlight />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
