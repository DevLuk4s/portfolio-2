// Next
"use client";

// Components
import ContactMe from "./ContactMe";

// Motion Framer
import { motion } from "framer-motion";

export default function contato() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 p-12"
    >
      <h1 className="text-white text-4xl font-bold">Contato</h1>
      <p className="text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
        placeat!
      </p>
      <h2 className="text-white text-2xl font-semibold">Minhas Redes Social</h2>
      <ContactMe />
      <h2 className="text-white text-2xl font-semibold">Mande um E-mail</h2>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, tempora.
      </p>
      <p className="text-white">Nome</p>
      <input
        className="text-white bg-neutral-900 rounded-xl outline-none p-4 border-2 border-neutral-700"
        type="text"
        placeholder="Lucas Gabriel"
      />
      <p className="text-white">E-mail</p>
      <input
        className="text-white bg-neutral-900 rounded-xl outline-none p-4 border-2 border-neutral-700"
        type="text"
        placeholder="lucasgabrielferreirasilva777@gmail.com"
      />
      <p className="text-white">Mensagem</p>
      <input
        className="text-white bg-neutral-900 rounded-xl outline-none p-4 border-2 border-neutral-700"
        type="text"
        placeholder="Como posso ajudar?"
      />
      <button className="text-black bg-white p-2 rounded-xl">Enviar</button>
    </motion.section>
  );
}
