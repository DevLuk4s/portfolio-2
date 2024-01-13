import Skills from "./Skills";
import About from "./About";

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-10 bg-neutral-950 p-12 min-h-screen">
      <About />
      <Skills />
    </section>
  );
}
