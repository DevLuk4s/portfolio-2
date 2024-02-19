import Button from "@/pages/utilities/Button";

export default function About() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-white text-4xl font-bold">Sobre mim</h1>
      <p className="text-white">
        Ei! Me chamo Lucas Gabriel, sou um desenvolvedor web de 20 anos com
        residência na área de Salvador Bahia. Sou formado em Técnico em
        Informática para Internet pela UFBA.
      </p>
      <p className="text-white">
        Nos últimos 12 meses, tenho dedicado meu tempo ao estudo das principais
        tecnologias front-end para a web. Meu objetivo é trabalhar no exterior
        e, no futuro, cursar uma faculdade na área. Atualmente, estou
        progredindo como desenvolvedor, aprimorando também gradualmente meu
        inglês para alcançar essas metas.
      </p>
      <p className="text-white">
        Busco manter-me constantemente atualizado com as últimas tendências do
        mercado, demonstrando um comprometimento em fazer a diferença em todos
        os projetos nos quais estou envolvido.
      </p>
      <Button />
    </div>
  );
}
