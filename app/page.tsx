import HomeSection from "@/app/components/pg-home/home";
import Navbar from "@/app/components/pg-home/navbar";
import SobreSection from "./components/pg-home/sobre";
import AcomodacaoSection from "./components/pg-home/acomodacao";
import ServicoSection from "./components/pg-home/serviços";
import FooterSection from "./components/pg-home/footer";

export default function Home() {
  return (
    <main className="bg-[#fff7ef] shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.3)]">
      <Navbar/>
      <HomeSection/>
      <SobreSection/>
      <AcomodacaoSection/>
      <ServicoSection />
      <FooterSection />

    </main>
  );
}
