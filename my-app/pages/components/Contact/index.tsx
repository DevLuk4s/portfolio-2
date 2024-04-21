// Next
"use client";

// React
import { useState } from "react";

// Components
import ContactMe from "./ContactMe";

// Motion Framer
import { motion } from "framer-motion";

export default function Contato() {
  const [name, setName] = useState("");
  const [mensagem, setmensagem] = useState("");
  const [email, setemail] = useState("");

  const sendEmail = () => {
    alert("Ola Mundo");
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 p-12"
      onSubmit={sendEmail}
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
        value={name}
      />
      <p className="text-white">E-mail</p>
      <input
        className="text-white bg-neutral-900 rounded-xl outline-none p-4 border-2 border-neutral-700"
        type="text"
        placeholder="lucasgabrielferreirasilva777@gmail.com"
        value={email}
      />
      <p className="text-white">Mensagem</p>
      <textarea
        className="text-white bg-neutral-900 outline-none rounded-xl p-4 border-2 border-neutral-700"
        placeholder="Mensagem"
        value={mensagem}
        onChange={(e) => sendEmail()}
        name="Mensagem"
        cols={30 as number} // Definindo explicitamente o tipo como number
        rows={10 as number} // Definindo explicitamente o tipo como number
      ></textarea>
      <button className="text-black bg-white p-2 rounded-xl">Enviar</button>
    </motion.form>
  );
}
