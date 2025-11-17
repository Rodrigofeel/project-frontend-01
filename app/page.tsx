// import Navbar from "@/app/components/pg-home/navbar";
// import HomeSection from "@/app/components/pg-home/home";
// import SobreSection from "./components/pg-home/sobre";
// import AcomodacaoSection from "./components/pg-home/acomodacao";
// import ServicoSection from "./components/pg-home/serviços";
// import Footer from "./components/pg-home/footer";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Accommodation from "./components/Accommodation"
import Footer from "./components/footer"



// className="bg-[#fff7ef] relative overflow-hidden"

export default function Home() {
  return (
     <main>
      {
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Accommodation/>

        <Footer/>
        </>

      }
    </main>
  );
}
