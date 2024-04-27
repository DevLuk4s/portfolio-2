// Project
import shopCart from "@/pages/assets/images/project/shop-cart.png";
import rickAndMorty from "@/pages/assets/images/project/rick-morty.png";

// Skills
import html from "@/pages/assets/images/skills/html.svg";
import css from "@/pages/assets/images/skills/css.svg";
import javascript from "@/pages/assets/images/skills/javascript.svg";
import react from "@/pages/assets/images/skills/react.svg";
import nextjs from "@/pages/assets/images/skills/nextjs.svg";
import tailwindcss from "@/pages/assets/images/skills/tailwindcss.svg";
import typescript from "@/pages/assets/images/skills/typescript.svg";
import vite from "@/pages/assets/images/skills/vite.svg";

const projetosRecentes = [
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
];

export default projetosRecentes;
