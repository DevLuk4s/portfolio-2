// Nextjs
import Image from "next/image";
import Link from "next/link";

// Project
import projetosRecentes from "@/app/data/projetosRecentes";

// Icons
import { ChevronRight, ExternalLink, Github } from "lucide-react";

export default function ProjectRecents() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <h2 className="text-white text-xl font-semibold">Projetos recentes</h2>
        <Link
          href="components/Project"
          className="group flex justify-between items-center text-white hover:text-violet-500"
        >
          Ver todos
          <ChevronRight className="w-5 h-5 group-hover:mr-5 transition-all" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {projetosRecentes.map((projeto) => (
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
                <Link href={projeto.url} target="_blank">
                  <ExternalLink className="w-5 h-5 text-white hover:text-violet-500 transition duration-200" />
                </Link>
                <a href={projeto.github} target="_blank">
                  <Github className="w-5 h-5 text-white hover:text-violet-500 transition duration-200" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
