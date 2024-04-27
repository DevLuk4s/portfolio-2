// /pages/aboutProject/[id].tsx

import { useRouter } from "next/router";
import projetos from "@/app/data/projetos";
import Image from "next/image";

export default function AboutProject() {
  const router = useRouter();
  const { id } = router.query;

  // Encontrar o projeto correspondente com base no ID da rota
  const projeto = projetos.find((p) => p.id === Number(id));

  // Verificar se o projeto foi encontrado
  if (!projeto) {
    return <p>Projeto não encontrado</p>;
  }

  // Renderizar as informações do projeto
  return (
    <div>
      <h1>{projeto.nome}</h1>
      <Image src={projeto.imagem} alt={projeto.nome} />
      <p>{projeto.descricao}</p>
      <h2>Tecnologias utilizadas:</h2>
      <ul>
        {projeto.tecnologias.map((tecnologia, index) => (
          <li key={index}>{tecnologia}</li>
        ))}
      </ul>
    </div>
  );
}
