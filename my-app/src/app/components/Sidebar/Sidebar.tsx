import eu from "@/app/assets/images/slug/eu.jpeg";
import Image from "next/image";
import MainNavigation from ".";

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-5 p-12 bg-neutral-950">
      <div>
        <Image className="w-28 rounded-full" src={eu} alt="eu" />
        <h2 className="text-white text-xl font-semibold">Lucas Gabriel</h2>
      </div>
      <MainNavigation />
    </aside>
  );
}
