"use client";
import Link from "next/link";
import Image from "next/image";

// Framer Motion
import { motion } from "framer-motion";

// Data
import projetos from "@/app/data/projetos";

export default function Project() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-10 p-12 min-h-screen"
    >
      <div>
        <h1 className="text-white text-4xl font-bold">
          Trabalho, hobby & open source
        </h1>
        <p className="text-white">
          Sou fanático pela criação de novos projetos, pois é a maior chave para
          ganhar conhecimento. Nesta página você pode navegar para 2 aplicações
          na qual desenvolvi.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        {projetos.map((projeto) => (
          <Link
            key={projeto.id}
            href={`/components/AboutProject/${projeto.id}`}
          >
            <div className="flex flex-col gap-5 p-5 bg-neutral-900 border-2 border-neutral-700 rounded-xl">
              <Image src={projeto.imagem} alt={projeto.nome} />
              <h2 className="text-white text-xl font-semibold">
                {projeto.nome}
              </h2>
              <p className="text-white">{projeto.descricao}</p>
              <div className="flex gap-5">
                {projeto.tecnologias.map((tecnologia, index) => (
                  <Image
                    key={index}
                    className="w-6"
                    src={tecnologia}
                    alt={projeto.nome}
                  />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
