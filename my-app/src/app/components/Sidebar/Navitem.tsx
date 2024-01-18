import { ElementType } from "react";

export interface NavitemProps {
  tittle: string;
  icons: ElementType;
}

export default function Navitem({ tittle, icons: Icons }: NavitemProps) {
  return (
    <a
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
      href=""
    >
      <Icons className="w-5 h-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {tittle}
      </span>
    </a>
  );
}
