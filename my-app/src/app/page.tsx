// next
import Image from "next/image";

// Ilustrações
import catSpace from "./assets/images/slug/catSpace.svg";

// Project
import projetoOne from "./assets/images/project/shop-cart.png";
import projetoTwo from "./assets/images/project/jogo-da-memoria.png";

// Skills
import html from "./assets/images/skills/html.svg";
import css from "./assets/images/skills/css.svg";
import javascript from "./assets/images/skills/javascript.svg";
import react from "./assets/images/skills/react.svg";
// import tailwindcss from "./assets/images/skills/tailwindcss.svg";
// import typescript from "./assets/images/skills/typescript.svg";

export default function page() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-white">Lucas Gabriel</h1>
        <p className="text-white">
          Como desenvolvedor web, almejo criar experiências digitais que
          harmonizem de maneira impecável a estética elegante com uma
          funcionalidade excepcional. Minha verdadeira paixão reside em
          transformar códigos em experiências extraordinárias.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <h2 className="text-white">Projetos recentes</h2>
          <p className="text-white">Ver todos</p>
        </div>
        <div className="flex gap-10">
          <div className="border">
            <Image className="w-96" src={projetoOne} alt="projetos recentes" />
            <h2 className="text-white">Carrinho De Compras</h2>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, perferendis?
            </p>
            <div className="flex">
              <Image className="w-6" src={react} alt="css3" />
              <Image className="w-6" src={css} alt="css3" />
              <Image className="w-6" src={html} alt="css3" />
            </div>
          </div>
          <div className="border">
            <Image className="w-96" src={projetoTwo} alt="projetos recentes" />
            <h2 className="text-white">Jogo Da Memoria</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ut.
            </p>
            <div className="flex">
              <Image className="w-6" src={javascript} alt="css3" />
              <Image className="w-6" src={css} alt="css3" />
              <Image className="w-6" src={html} alt="css3" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-neutral-900">
        <div className="flex flex-col items-start justify-center gap-5">
          <h2 className="text-white text-xl font-semibold">
            Vamos trabalhar juntos
          </h2>
          <p className="text-white">
            Se você se interessou pelo meu trabalho ou deseja fornecer feedback
            sobre este website, estou aberto a trocar ideias e discutir qualquer
            aspecto que possa ser relevante.
          </p>
          <button className="bg-white font-medium py-2 px-4 rounded-2xl">
            Contact me
          </button>
        </div>
        <div>
          <Image src={catSpace} alt="" />
        </div>
      </div>
    </section>
  );
}
