import Link from "next/link";
import eu from "../assets/images/slug/eu.jpeg";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="py-8 px-4">
      <div>
        <Image className="w-28 rounded-full" src={eu} alt="eu" />
        <h2 className="text-white">Lucas Gabriel</h2>
      </div>
      <nav>
        <ul>
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
