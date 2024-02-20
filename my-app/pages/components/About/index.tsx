// Nextjs
"use client";

// Components
import Skills from "./Skills";
import About from "./About";

// Motion Framer
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-10 p-12 min-h-screen"
    >
      <About />
      <Skills />
    </motion.section>
  );
}
