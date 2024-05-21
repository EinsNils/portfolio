import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto p-5 dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
