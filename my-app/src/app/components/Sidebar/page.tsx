// Components
import Logo from "./Logo";
import MainNavigation from "./MainNavigation";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 overflow-x-hidden z-10 flex flex-col items-center justify-center gap-10 md:p-6">
      <Logo />
      <MainNavigation />
    </aside>
  );
}
