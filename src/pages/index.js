import About from "@/components/About/about";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/hero";
import Skills from "@/components/Skills/skills";
import Work from "@/components/Work";

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
