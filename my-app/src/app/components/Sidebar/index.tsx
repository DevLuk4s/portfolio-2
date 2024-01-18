import { Contact, Gamepad, Home, ProjectorIcon } from "lucide-react";
import Navitem from "./Navitem";
import About from "../About/About";

export default function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <Navitem tittle="Home" icons={Home} />
      <Navitem tittle="About" icons={ProjectorIcon} />
      <Navitem tittle="Projeto" icons={Gamepad} />
      <Navitem tittle="Contact" icons={Contact} />
    </nav>
  );
}
