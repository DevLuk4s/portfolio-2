// Nextjs
"use client";
import Image from "next/image";

// Skills
import html from "@/app/assets/images/skills/html.svg";
import css from "@/app/assets/images/skills/css.svg";
import javascript from "@/app/assets/images/skills/javascript.svg";
import react from "@/app/assets/images/skills/react.svg";
import typescript from "@/app/assets/images/skills/typescript.svg";
import nextjs from "@/app/assets/images/skills/nextjs.svg";
import vite from "@/app/assets/images/skills/vite.svg";
import tailwindcss from "@/app/assets/images/skills/tailwindcss.svg";
import styledcomponents from "@/app/assets/images/skills/styled-components.svg";
import sass from "@/app/assets/images/skills/sass.svg";
import reactrouter from "@/app/assets/images/skills/react-router.svg";
import figma from "@/app/assets/images/skills/figma.svg";
import git from "@/app/assets/images/skills/git.svg";
import openai from "@/app/assets/images/skills/openai.svg";
import framer from "@/app/assets/images/skills/framer.svg";
import jest from "@/app/assets/images/skills/jest.svg";
import redux from "@/app/assets/images/skills/redux.svg";
// import express from "@/app/assets/images/skills/express.svg";
// import mongo from "@/app/assets/images/skills/mongo.svg";
// import mysql from "@/app/assets/images/skills/mysql.svg";
// import nodejs from "@/app/assets/images/skills/nodejs.svg";

export default function Skills() {
  const skillsData = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Javascript", image: javascript },
    { name: "React", image: react },
    { name: "Typescript", image: typescript },
    { name: "Tailwind CSS", image: tailwindcss },
    { name: "Styled Components", image: styledcomponents },
    { name: "Sass", image: sass },
    { name: "Next.js", image: nextjs },
    { name: "Vite", image: vite },
    { name: "React Router", image: reactrouter },
    { name: "Jest", image: jest },
    { name: "Framer", image: framer },
    { name: "Redux", image: redux },
    { name: "Git", image: git },
    { name: "Figma", image: figma },
    { name: "Openai", image: openai },
    // { name: "nodejs", image: nodejs },
    // { name: "mongo", image: mongo },
    // { name: "express", image: express },
    // { name: "mysql", image: mysql },
  ];
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-white text-xl font-bold">Habilidades</h1>
      <div className="flex flex-wrap gap-9 p-5 bg-neutral-900 border-2 border-neutral-700 rounded-xl">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Image width={50} height={50} src={skill.image} alt={skill.name} />
            <p className="text-white font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
