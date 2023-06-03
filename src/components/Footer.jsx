import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-slate-900 h-16 flex justify-center items-center gap-5">
      <a href="http://linkedin.com/in/santiago-arias-gomez" target="_blank">
        <AiFillLinkedin className="text-creme text-3xl" />
      </a>
      <a href="https://github.com/sanargo" target="_blank">
        <AiFillGithub className="text-creme text-3xl" />
      </a>
    </footer>
  );
}

export default Footer;
