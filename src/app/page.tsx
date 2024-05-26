import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="bg-black bg-grid-white/[0.09] relative">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>

      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
