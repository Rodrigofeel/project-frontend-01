import Image from "next/image"
import imgprinc from '../../../public/img-home.jpg'

export default function HomeSection() {
  return (
    <section className="text-white h-full">

            <Image
            src={imgprinc}
            alt="Banner do site"
            fill
            className="object-cover"
            priority
            />
             <div className="relative z-10 text-center">
              <h1 className="text-5xl font-bold mb-4">Bem-vindo à Roots</h1>
              <p className="text-lg mb-8">
                 Chalés e natureza em perfeita harmonia.
              </p>
              <button className="bg-[#5C4033] text-[#F6E7D7] px-6 py-3 rounded-xl hover:bg-[#8B5E3C] transition">
               Reservar
              </button>
        </div>


    </section>
  );
}
