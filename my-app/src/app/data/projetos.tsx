// Project
import shopCart from "@/app/assets/images/project/shop-cart.png";
import jogoDaMemoria from "@/app/assets/images/project/jogo-da-memoria.png";
import calculadora from "@/app/assets/images/project/calculadora.jpeg";
import fitnes from "@/app/assets/images/project/fitnes.png";
import rickAndMorty from "@/app/assets/images/project/rick-morty.png";
import timer from "@/app/assets/images/project/timer-react.jpeg";
import mosquito from "@/app/assets/images/project/mosquito.jpeg";

// Skills
import html from "@/app/assets/images/skills/html.svg";
import css from "@/app/assets/images/skills/css.svg";
import javascript from "@/app/assets/images/skills/javascript.svg";
import react from "@/app/assets/images/skills/react.svg";
import nextjs from "@/app/assets/images/skills/nextjs.svg";
import tailwindcss from "@/app/assets/images/skills/tailwindcss.svg";
import typescript from "@/app/assets/images/skills/typescript.svg";
import vite from "@/app/assets/images/skills/vite.svg";

const projetos = [
  {
    id: 1,
    nome: "Challenge Rick Morty",
    imagem: rickAndMorty,
    descricao:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, perferendis?",
    tecnologias: [nextjs, tailwindcss, typescript, javascript],
  },
  {
    id: 2,
    nome: "Carrinho De Compras",
    imagem: shopCart,
    descricao:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, perferendis?",
    tecnologias: [react, css, html],
  },
  {
    id: 3,
    nome: "Calculadora",
    imagem: calculadora,
    descricao:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, perferendis?",
    tecnologias: [vite, react, css, html],
  },
  {
    id: 3,
    nome: "Cronometro",
    imagem: timer,
    descricao:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, perferendis?",
    tecnologias: [vite, react, css, html],
  },
];

export default projetos;
