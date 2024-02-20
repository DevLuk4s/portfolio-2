// Nextjs
import Image from "next/image";
import { useRouter } from "next/router";

// Data
import projetos from "@/pages/data/projetos";

export default function IdProject() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {projetos.map((projeto) => (
        <div key={projeto.id}>
          <h1 className="text-white">{projeto.nome}</h1>
          <Image src={projeto.imagem} alt={projeto.nome} />
        </div>
      ))}
    </div>
  );
}
