// Components
import Logo from "./Logo";
import MainNavigation from "./MainNavigation";

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-10 p-12">
      <Logo />
      <MainNavigation />
    </aside>
  );
}
