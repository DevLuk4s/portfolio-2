// Nextjs
import Image from "next/image";
import Link from "next/link";

// Ilustrações
import catSpace from "@/pages/assets/images/slug/catSpace.svg";

export default function ContactHome() {
  return (
    <div className="flex p-6 bg-neutral-900 border-2 border-neutral-700 rounded-xl">
      <div className="flex flex-col items-start justify-center gap-5">
        <h2 className="text-white text-xl font-semibold">
          Vamos trabalhar juntos
        </h2>
        <p className="text-white">
          Se você se interessou pelo meu trabalho ou deseja fornecer feedback
          sobre este website, estou aberto a trocar ideias e discutir qualquer
          aspecto que possa ser relevante.
        </p>
        <Link
          href="/components/Contact"
          className="font-bold py-2 px-4 rounded-full bg-white"
        >
          Contato me
        </Link>
      </div>
      <div>
        <Image src={catSpace} alt="gato espacial" />
      </div>
    </div>
  );
}
