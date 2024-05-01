// Components
import Logo from "./Logo";
import MainNavigation from "./MainNavigation";

export default function Sidebar() {
  return (
    <aside className="fixed overflow-x-hidden z-10 flex flex-col items-center justify-center gap-10 md:p-12 p-4">
      <Logo />
      <MainNavigation />
    </aside>
  );
}
