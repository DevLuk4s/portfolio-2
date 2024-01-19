import { Github, Instagram, Linkedin } from "lucide-react";

export default function ContactMe() {
  return (
    <div className="flex gap-5">
      <a href="">
        <Github className="w-5 h-5 text-gray-500 hover:text-violet-500" />
      </a>
      <a href="">
        <Linkedin className="w-5 h-5 text-gray-500 hover:text-violet-500" />
      </a>
      <a href="">
        <Instagram className="w-5 h-5 text-gray-500 hover:text-violet-500" />
      </a>
    </div>
  );
}
