import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-black">
          <div className="max-w-7xl mx-auto">
              <Navbar />
              <HeroSection />
          </div>
      </div>
    </MaxWidthWrapper>
  );
}
