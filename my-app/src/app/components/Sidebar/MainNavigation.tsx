import { Gamepad, GraduationCap, Home, Info, User } from "lucide-react";
import Navitem from "./Navitem";

export default function MainNavigation() {
  return (
    <nav className="space-y-6">
      <Navitem tittle="Home" icons={Home} router="/" />
      <Navitem tittle="About" icons={Info} router="/components/About" />
      <Navitem tittle="Projeto" icons={Gamepad} router="/components/Project" />
      <Navitem tittle="Certificado" icons={GraduationCap} router="/" />
      <Navitem tittle="Contact" icons={User} router="/components/Contact" />
    </nav>
  );
}
