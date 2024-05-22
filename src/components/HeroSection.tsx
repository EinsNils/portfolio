import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋
          <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            I&apos;m Nils.
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
        I am currently training to become an application developer. In my free time, I focus on <span className="text-green-500 font-bold">Web</span> and <span className="text-green-500 font-bold">IOS</span> development.
        </p>

        <Link href="mailto:nilszentgraf@aol.com" className="inline-block">
          <div>
            <h1 className="text-3xl font-bold">Contact Me 📬</h1>
          </div>
        </Link>
      </div>

      <div>
        <img
          src="/1715101804238.jpg"
          alt="Nils Zentgraf"
          className="w-60 h-60 rounded-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
