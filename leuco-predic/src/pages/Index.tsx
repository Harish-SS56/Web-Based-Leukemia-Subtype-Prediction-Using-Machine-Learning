
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutALLSection from "@/components/AboutALLSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SubtypeGallerySection from "@/components/SubtypeGallerySection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutALLSection />
        <HowItWorksSection />
        <SubtypeGallerySection />
        <CTASection />
      </main>
      <FooterSection />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
