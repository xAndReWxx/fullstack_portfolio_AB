import Hero from "@/components/sections/Hero";
import LiveSystemPreview from "@/components/sections/LiveSystemPreview";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Achievements from "@/components/sections/Achievements";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import BackgroundCanvas from "@/components/ui/BackgroundCanvas";
import Navbar from "@/components/layout/Navbar";
import Preloader from "@/components/ui/Preloader";

export default function Home() {
  return (
    <main>
      <Preloader />
      <BackgroundCanvas />
      <Navbar />
      <Hero />
      <LiveSystemPreview />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Achievements />
      <Testimonials />
      <Contact />
    </main>
  );
}

