// NextJs
import Link from "next/link";
import { ElementType } from "react";

// TypeScript
export interface NavitemProps {
  tittle: string;
  router: string;
  icons: ElementType;
}

export default function Navitem({
  tittle,
  icons: Icons,
  router,
}: NavitemProps) {
  return (
    <Link className="group flex items-center gap-3" href={router}>
      <Icons className="w-5 h-5 text-zinc-500 group-hover:text-violet-500 transition duration-200" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 transition duration-200 hidden md:block">
        {tittle}
      </span>
    </Link>
  );
}
