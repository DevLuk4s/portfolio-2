// Icons
import { Github, Instagram, Linkedin } from "lucide-react";

export default function ContactMe() {
  return (
    <div className="flex gap-5">
      <a
        className="flex gap-2 text-gray-500 bg-neutral-900 border border-neutral-700 hover:text-violet-500 rounded-xl px-4 py-2"
        href="https://github.com/DevLuk4s"
        target="_blank"
      >
        <Github className="w-5 h-5" />
        Github
      </a>
      <a
        className="flex gap-2 text-gray-500 bg-neutral-900 border border-neutral-700 hover:text-violet-500 rounded-xl px-4 py-2"
        href="https://www.linkedin.com/in/lucas-gabriel-a1525124b/"
        target="_blank"
      >
        <Linkedin className="w-5 h-5" />
        Linkedin
      </a>
      <a
        className="flex gap-2 text-gray-500 bg-neutral-900 border border-neutral-700 hover:text-violet-500 rounded-xl px-4 py-2"
        href="https://www.instagram.com/luk4s.gabriel/"
        target="_blank"
      >
        <Instagram className="w-5 h-5" />
        Instagram
      </a>
    </div>
  );
}
