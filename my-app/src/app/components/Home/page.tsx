import AboutHome from "./AboutHome";
import ContactHome from "./ContactHome";
import ProjectRecents from "./ProjectRecents";

export default function Home() {
  return (
    <section className="flex flex-col gap-10 p-12">
      <AboutHome />
      <ProjectRecents />
      <ContactHome />
    </section>
  );
}
