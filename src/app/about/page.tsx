import Avatar from "../../components/Avatar";
import AnimatedAboutHero from "../../components/AnimatedAboutHero";
import AnimatedAboutContent from "../../components/AnimatedAboutContent";

export const metadata = {
  title: "About - Nicolas Leão",
  description: "About Nicolas, an AI Engineer from Brazil.",
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <AnimatedAboutHero />
      <AnimatedAboutContent />
    </main>
  );
} 