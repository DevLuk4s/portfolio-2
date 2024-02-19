// Project
import shopCart from "@/pages/assets/images/project/shop-cart.png";
import jogoDaMemoria from "@/pages/assets/images/project/jogo-da-memoria.png";
import calculadora from "@/pages/assets/images/project/calculadora.jpeg";
import fitnes from "@/pages/assets/images/project/fitnes.png";
import rickAndMorty from "@/pages/assets/images/project/rick-morty.png";
import timer from "@/pages/assets/images/project/timer-react.jpeg";
import mosquito from "@/pages/assets/images/project/mosquito.jpeg";

// Skills
import html from "@/pages/assets/images/skills/html.svg";
import css from "@/pages/assets/images/skills/css.svg";
import javascript from "@/pages/assets/images/skills/javascript.svg";
import react from "@/pages/assets/images/skills/react.svg";
import nextjs from "@/pages/assets/images/skills/nextjs.svg";
import tailwindcss from "@/pages/assets/images/skills/tailwindcss.svg";
import typescript from "@/pages/assets/images/skills/typescript.svg";
import vite from "@/pages/assets/images/skills/vite.svg";

const projetos = [
  {
    id: 1,
    nome: "Challenge Rick Morty",
    imagem: rickAndMorty,
    descricao:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, perferendis?",
    tecnologias: [nextjs, tailwindcss, typescript, javascript],
    url: "https://challenge-rick-morty.vercel.pages/",
    github: "https://github.com/DevLuk4s/challenge-rick-morty",
  },
  {
    id: 2,
    nome: "Carrinho De Compras",
    imagem: shopCart,
    descricao:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, perferendis?",
    tecnologias: [react, css, html],
    url: "https://challenge-rick-morty.vercel.pages/",
    github: "https://github.com/DevLuk4s/challenge-rick-morty",
  },
  {
    id: 3,
    nome: "Calculadora",
    imagem: calculadora,
    descricao:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, perferendis?",
    tecnologias: [vite, react, css, html],
    url: "https://challenge-rick-morty.vercel.pages/",
    github: "https://github.com/DevLuk4s/challenge-rick-morty",
  },
  {
    id: 3,
    nome: "Cronometro",
    imagem: timer,
    descricao:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, perferendis?",
    tecnologias: [vite, react, css, html],
    url: "https://challenge-rick-morty.vercel.pages/",
    github: "https://github.com/DevLuk4s/challenge-rick-morty",
  },
];

export default projetos;
