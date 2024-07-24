import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/hero";
import Skills from "@/components/skills/skills";
import Work from "@/components/work/work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
    </main>
  );
}
