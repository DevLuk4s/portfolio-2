import { Github, Instagram, Linkedin } from "lucide-react";

export default function ContactMe() {
  return (
    <div className="flex gap-5">
      <a href="https://github.com/DevLuk4s" target="_blank">
        <Github className="w-5 h-5 text-gray-500 hover:text-violet-500" />
      </a>
      <a href="https://www.linkedin.com/in/lucas-gabriel-a1525124b/" target="_blank">
        <Linkedin className="w-5 h-5 text-gray-500 hover:text-violet-500" />
      </a>
      <a href="https://www.instagram.com/luk4s.gabriel/" target="_blank">
        <Instagram className="w-5 h-5 text-gray-500 hover:text-violet-500" />
      </a>
    </div>
  );
}
