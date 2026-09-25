import Contact from "@/components/Contact";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactHero from "@/components/contact/ContactHero";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <Contact />
      <ContactFAQ />
    </main>
  );
}