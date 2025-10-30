import HomeSection from "@/app/components/pg-home/home";
import Navbar from "@/app/components/pg-home/navbar";
import SobreSection from "./components/pg-home/sobre";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <SobreSection />
    </main>
  );
}
