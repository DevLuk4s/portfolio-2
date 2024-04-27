// Project
import shopCart from "@/app/assets/images/project/shop-cart.png";
import rickAndMorty from "@/app/assets/images/project/rick-morty.png";

// Skills
import html from "@/app/assets/images/skills/html.svg";
import css from "@/app/assets/images/skills/css.svg";
import javascript from "@/app/assets/images/skills/javascript.svg";
import react from "@/app/assets/images/skills/react.svg";
import nextjs from "@/app/assets/images/skills/nextjs.svg";
import tailwindcss from "@/app/assets/images/skills/tailwindcss.svg";
import typescript from "@/app/assets/images/skills/typescript.svg";
import vite from "@/app/assets/images/skills/vite.svg";

const projetosRecentes = [
  {
    id: 1,
    nome: "Challenge Rick Morty",
    imagem: rickAndMorty,
    descricao:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, perferendis?",
    tecnologias: [nextjs, tailwindcss, typescript, javascript],
    url: "https://challenge-rick-morty.vercel.app/",
    github: "https://github.com/DevLuk4s/challenge-rick-morty",
  },
  {
    id: 2,
    nome: "Carrinho De Compras",
    imagem: shopCart,
    descricao:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, perferendis?",
    tecnologias: [react, css, html],
    url: "https://challenge-rick-morty.vercel.app/",
    github: "https://github.com/DevLuk4s/challenge-rick-morty",
  },
];

export default projetosRecentes;
