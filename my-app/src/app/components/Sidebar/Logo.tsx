// NextJs
import Image from "next/image";

// Image
import eu from "@/app/assets/images/slug/eu.jpeg";

export default function Logo() {
  return (
    <div>
      <Image className="w-28 h-28 rounded-full" src={eu} alt="eu" />
      <h2 className="text-white text-xl font-semibold">Lucas Gabriel</h2>
    </div>
  );
}
