import { Github, Linkedin } from "@/components/icons";
import Link from "next/link";

export default function SocialMedia() {
  return (
   

    // Social Icons
    <nav className="flex gap-2 ">
      <Link href={"https://www.linkedin.com/in/muhammad-haziq-siddiqui-1a61b32b5"} target="_blank">
        <Linkedin className={`w-6 h-6`} />
      </Link>
      <Link href={"https://github.com/haziqsiddiqui88"} target="_blank">
        <Github className={`w-6 h-6 fill-dark dark:fill-light`} />
      </Link>
    </nav>
  );
}
