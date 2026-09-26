import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Packages />
      <CTA />
      <Contact />
    </main>
  );
}