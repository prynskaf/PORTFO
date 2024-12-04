import About from "@/pages/About";
import Contact from "@/pages/Contact";
import HomePge from "@/pages/HomePage";
import Project from "@/pages/Project";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <HomePge />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

