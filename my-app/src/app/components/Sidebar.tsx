import Link from "next/link";
import eu from "../assets/images/slug/eu.jpeg";
import Image from "next/image";

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
            <Link className="text-white" href="About">
              Sobre
            </Link>
          </li>
          <li>
            <Link className="text-white" href="Project">
              Projeto
            </Link>
          </li>
          <li>
            <Link className="text-white" href="Contact">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
