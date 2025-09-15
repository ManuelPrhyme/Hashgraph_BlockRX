import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DrugVerification } from "@/components/DrugVerification";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DrugVerification />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
