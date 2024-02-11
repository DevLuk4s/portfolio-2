import Link from "next/link";
import { ElementType } from "react";

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
      <Icons className="w-6 h-6 text-zinc-500 group-hover:text-violet-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {tittle}
      </span>
    </Link>
  );
}
