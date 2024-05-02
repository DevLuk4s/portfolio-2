// Next
"use client";

// React
import { useState } from "react";

// Components
import ContactMe from "./ContactMe";

// Motion Framer
import { motion } from "framer-motion";

export default function Contato() {
  const [name, setName] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const sendWhatsAppMessage = () => {
    const mensagemNoWhats = `Nome: ${name}%0AEmail: ${email}%0AMensagem: ${mensagem.replace(
      /\n/g,
      "%0A"
    )}`;
    window.open(
      `https://wa.me/5571984078620/?text=${mensagemNoWhats}`,
      "_blank"
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Por favor, insira um email válido.");
      return;
    }
    sendWhatsAppMessage();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 p-6"
      onSubmit={handleSubmit}
    >
      <h1 className="text-white text-4xl font-bold">Contato</h1>
      <p className="text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
        placeat!
      </p>
      <h2 className="text-white text-2xl font-semibold">
        Minhas Redes Sociais
      </h2>
      <ContactMe />
      <h2 className="text-white text-2xl font-semibold">Mande um E-mail</h2>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, tempora.
      </p>
      <label htmlFor="name" className="text-white">
        Nome
      </label>
      <input
        id="name"
        className="text-white bg-neutral-900 rounded-xl outline-none p-4 border-2 border-neutral-700"
        type="text"
        placeholder="Lucas Gabriel"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email" className="text-white">
        E-mail
      </label>
      <input
        id="email"
        className="text-white bg-neutral-900 rounded-xl outline-none p-4 border-2 border-neutral-700"
        type="email"
        placeholder="lucasgabrielferreirasilva777@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="mensagem" className="text-white">
        Mensagem
      </label>
      <textarea
        id="mensagem"
        className="text-white bg-neutral-900 outline-none rounded-xl p-4 border-2 border-neutral-700"
        placeholder="Assuntos"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        name="Mensagem"
        cols={30 as number} // Definindo explicitamente o tipo como number
        rows={10 as number} // Definindo explicitamente o tipo como number
        required
      ></textarea>
      <button type="submit" className="text-black bg-white p-2 rounded-xl">
        Enviar
      </button>
    </motion.form>
  );
}
