// Next
import Image from "next/image";

// Project
import projetoOne from "@/app/assets/images/project/shop-cart.png";
import projetoTwo from "@/app/assets/images/project/jogo-da-memoria.png";

// Skills
import html from "@/app/assets/images/skills/html.svg";
import css from "@/app/assets/images/skills/css.svg";
import javascript from "@/app/assets/images/skills/javascript.svg";
import react from "@/app/assets/images/skills/react.svg";

export default function Project() {
  return (
    <section className="flex flex-col gap-10 bg-neutral-950 p-12 min-h-screen">
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
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-5 p-5 bg-neutral-900 border-2 border-neutral-700 rounded-xl">
          <Image src={projetoOne} alt="projetos recentes" />
          <h2 className="text-white text-xl font-semibold">
            Carrinho De Compras
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, perferendis?
          </p>
          <div className="flex gap-5">
            <Image className="w-6" src={react} alt="css3" />
            <Image className="w-6" src={css} alt="css3" />
            <Image className="w-6" src={html} alt="css3" />
          </div>
        </div>
        <div className="flex flex-col gap-5 p-5 bg-neutral-900 border-2 border-neutral-700 rounded-xl">
          <Image src={projetoTwo} alt="projetos recentes" />
          <h2 className="text-white text-xl font-semibold">Jogo Da Memoria</h2>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, perferendis?
          </p>
          <div className="flex gap-5">
            <Image className="w-6" src={javascript} alt="css3" />
            <Image className="w-6" src={css} alt="css3" />
            <Image className="w-6" src={html} alt="css3" />
          </div>
        </div>
      </div>
    </section>
  );
}
