import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import dynamic from "next/dynamic";

const Experience = dynamic(() => import("@/components/experience"), {
  ssr: false,
  loading: () => <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40" />,
});

const Contact = dynamic(() => import("@/components/contact"), {
  ssr: false,
  loading: () => (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)]" />
  ),
});

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
