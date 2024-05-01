// NextJs
import Image from "next/image";

// Image
import eu from "@/app/assets/images/slug/eu.jpeg";

export default function Logo() {
  return (
    <div>
      <Image className="md:w-28 md:h-28 w-14 h-14 rounded-full" src={eu} alt="eu" />
      <h2 className="text-white text-xl font-semibold hidden md:block">Lucas Gabriel</h2>
    </div>
  );
}
