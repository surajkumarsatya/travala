import AboutHero from "@/components/about/AboutHero";
import FoundingPhilosophy from "@/components/about/FoundingPhilosophy";
import GuidingFoundations from "@/components/about/GuidingFoundations";
import WhyTravelersChoose from "@/components/about/WhyTravelersChoose";
import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <GuidingFoundations />
      <WhyTravelersChoose />
      <FoundingPhilosophy />
      <CTA />
    </main>
  );
}