import { Header } from "@/components/Header";
import { DrugVerification } from "@/components/DrugVerification";
import { Footer } from "@/components/Footer";

const VerifyDrug = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <DrugVerification />
      </main>
      <Footer />
    </div>
  );
};

export default VerifyDrug;