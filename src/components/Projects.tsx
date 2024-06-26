import React from "react";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { SiReact, SiTailwindcss } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      tech: [SiReact, SiTailwindcss],
      link: "nilszentgraf.dev",
      cover: "/Screenshot 2024-05-26 142139.png",
      background: "bg-indigo-500",
    },
    {
      title: "Soon...",
      tech: [],
      link: "",
      cover: "/Screenshot 2024-05-26 152644.png",
      background: "bg-green-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        title="Projects"
        className="flex flex-col justify-center items-center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((projects, index) => {
          return (
            <Link href={projects.link} key={index}>
              <div className={cn("p-2 rounded-md", projects.background)}>
                <DirectionAwareHover
                  imageUrl={projects.cover}
                  className="w-full space-y-5 cursor-pointer h-[150px] sm:h-[130px] md:h-[160px] lg:h-[230px] xl:h-[250px]"
                >
                  <div className="space-y-5">
                    <h1 className="font-bold text-2xl">{projects.title}</h1>
                    <div className="flex items-center gap-5">
                      {projects.tech.map((Icon, index) => {
                        return <Icon className="w-7 h-7" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
