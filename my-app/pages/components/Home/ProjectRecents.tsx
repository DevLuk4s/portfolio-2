// Nextjs
import Image from "next/image";

// Project
import projetos from "@/pages/data/projetosRecentes";

// Icons
import { ExternalLink, Github } from "lucide-react";

export default function ProjectRecents() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <h2 className="text-white text-xl font-semibold">Projetos recentes</h2>
        <a
          href="components/Project"
          className="text-white hover:text-violet-500"
        >
          Ver todos
        </a>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            className="flex flex-col gap-5 p-5 bg-neutral-900 border-2 border-neutral-700 rounded-xl"
          >
            <Image src={projeto.imagem} alt={projeto.nome} />
            <h2 className="text-white text-xl font-semibold">{projeto.nome}</h2>
            <p className="text-white">{projeto.descricao}</p>
            <div className="flex justify-between">
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
              <div className="flex gap-5">
                <a href={projeto.url} target="_blank">
                  <ExternalLink className="w-5 h-5 text-white hover:text-violet-500" />
                </a>
                <a href={projeto.github} target="_blank">
                  <Github className="w-5 h-5 text-white hover:text-violet-500" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
