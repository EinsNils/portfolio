"use client";

import { InfiniteMovingCards } from "./ui/Infinite-moving-cards";
import Title from "./Title";
import { DiApple } from "react-icons/di";

const Skills = () => {
  return (
    <div className="w-full max-w mx-auto">
      <Title
        className="flex flex-col items-center justify-center"
        title="Skills"
      />

      <InfiniteMovingCards
        items={testimonials}
        pauseOnHover={true}
        speed="slow"
      />
    </div>
  );
};

// Define the testimonials array
const testimonials = [
  {
    name: "Apple",
    Icon: DiApple,
  },
  {
    name: "Apple",
    Icon: DiApple,
  },
  {
    name: "Apple",
    Icon: DiApple,
  },
  {
    name: "Apple",
    Icon: DiApple,
  },
  {
    name: "Apple",
    Icon: DiApple,
  },
];

export default Skills;
