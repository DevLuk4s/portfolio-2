import Link from "next/link";
import eu from "@/app/assets/images/slug/eu.jpeg";
import Image from "next/image";

//Icons animated
import home from "@/app/assets/icons/home.json";

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-5 p-12 bg-neutral-950 border-r-2 border-neutral-700">
      <div>
        <Image className="w-28 rounded-full" src={eu} alt="eu" />
        <h2 className="text-white text-xl font-semibold">Lucas Gabriel</h2>
      </div>
      <nav>
        <ul className="flex flex-col gap-5">
          <li>
            <Link className="text-white" href="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="text-white" href="components/About">
              Sobre
            </Link>
          </li>
          <li>
            <Link className="text-white" href="components/About">
              Projeto
            </Link>
          </li>
          <li>
            <Link className="text-white" href="components/About">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
