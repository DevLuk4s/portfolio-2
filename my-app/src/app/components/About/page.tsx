import Skills from "./Skills";
import About from "./About";

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-10 p-12 min-h-screen">
      <About />
      <Skills />
    </section>
  );
}
