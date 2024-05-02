// Nextjs
"use client";

// Components
import AboutHome from "./AboutHome";
import ContactHome from "./ContactHome";
import ProjectRecents from "./ProjectRecents";

// Motion Framer
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-10 p-6"
    >
      <AboutHome />
      <ProjectRecents />
      <ContactHome />
    </motion.section>
  );
}
