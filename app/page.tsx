import HomeSection from "@/app/components/pg-home/home";
import Navbar from "@/app/components/pg-home/navbar";
import SobreSection from "./components/pg-home/sobre";
import AcomodacaoSection from "./components/pg-home/acomodacao";
import ServicoSection from "./components/pg-home/serviços";

export default function Home() {
  return (
    <main className="bg-[#fff7ef]">
      <Navbar/>
      <HomeSection/>
      <SobreSection/>
      <AcomodacaoSection/>
      <ServicoSection />

    </main>
  );
}
