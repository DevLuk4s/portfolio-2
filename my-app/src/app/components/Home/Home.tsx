import AboutHome from "./AboutHome";
import ContactHome from "./ContactHome";
import ProjectRecents from "./ProjectRecents";

export default function index() {
  return (
    <section className="flex flex-col gap-10 bg-neutral-950 p-12">
      <AboutHome />
      <ProjectRecents />
      <ContactHome />
    </section>
  );
}
