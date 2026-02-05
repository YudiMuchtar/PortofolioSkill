import ScrollyCanvas from "@/components/ScrollyCanvas";
import Competencies from "@/components/Competencies";
import Experience from "@/components/Experience";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas />
      <div id="content" className="relative z-10">
        <Competencies />
        <Experience />
        <WhyMe />
        <Contact />
      </div>
    </main>
  );
}
