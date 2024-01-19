import eu from "@/app/assets/images/slug/eu.jpeg";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image className="w-28 rounded-full" src={eu} alt="eu" />
      <h2 className="text-white text-xl font-semibold">Lucas Gabriel</h2>
    </div>
  );
}
