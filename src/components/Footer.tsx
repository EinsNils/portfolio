import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Footer = ({ className }: { className?: string }) => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/nils-zentgraf-63a434261/",
      label: "LinkedIn",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/EinsNils",
      label: "GitHub",
      Icon: SiGithub,
    },
    {
      link: "https://github.com/EinsNils",
      label: "X",
      Icon: FaSquareXTwitter,
    },
  ];

  return (
    <nav className={cn("py-10 flex justify-between items-center animate-move-down", className)}>
      <h1 className="text-1xl font-bold underline underline-offset-8 decoration-green-500">
        Nils Zentgraf © 2024
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Footer;