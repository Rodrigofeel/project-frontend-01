'use client';

import Image from "next/image"

import imglivre01 from '../../../public/img-livre-01.jpg'




export default function ServicoSection() {

    return(
        <section className="bg-[#fff7ef] w-full relative z-50 mt-[-90px] h-[250vh] shadow-[0px_0px_40px_0px_rgba(0,0,0,0.9)] px-6 py-44">

                <h1 className="text-center md:text-5xl force-lora text-[#93804f] mb-12">Tudo o Que Preparamos Para Você</h1>


            <div className="grid  md:grid-cols-3 gap-8 h-[80vh]">

                 {/* card 1 */}
                 <div className=" rounded-2xl bg-[#473019] p-8 shadow-sm  border border-gray-100 flex flex-col items-center text-left">
                     <h2 className="text-2xl font-bold force-lora mb-20">Refeiçao sob demanda</h2>
                     <p  className=" text-base leading-relaxed max-w-prose mb-4 font-semibold">Nosso serviço de refeição sob demanda foi desenvolvido para proporcionar uma experiência gastronômica personalizada em harmonia com a natureza.</p>
                     <p className="text-base leading-relaxed max-w-prose font-semibold">Selecione seus ingredientes, monte seu prato e desfrute de uma alimentação sob medida, com praticidade e qualidade.</p>
                 </div>
                 {/* card 2 */}
                 <div className=" rounded-2xl bg-white p-8 shadow-sm  border border-gray-100 flex flex-col items-center text-left">
                     <h2 className="text-2xl font-bold force-lora mb-20">Suporte geral</h2>
                     <p  className=" text-base leading-relaxed max-w-prose mb-4 font-semibold">Nosso atendimento 24 horas foi pensado para acolher cada hóspede com cuidado e atenção únicos.</p>
                     <p className="text-base leading-relaxed max-w-prose font-semibold">Oferecemos suporte personalizado, incluindo transporte exclusivo para hospedagens selecionadas e disponibilização de equipamentos sob demanda, especialmente</p>
                </div>
                 {/* card 3 */}
                <div className=" rounded-2xl bg-white p-8 shadow-sm  border border-gray-100 flex flex-col items-center text-left">
                     <h2 className="text-2xl font-bold force-lora mb-20">Terapias naturais</h2>
                     <p  className=" text-base leading-relaxed max-w-prose mb-4 font-semibold">Inspiradas pelo entorno natural que nos cerca, nossas terapias foram criadas para harmonizar corpo, mente e ambiente. Cada sessão é uma jornada suave rumo ao equilíbrio interior, convidando você a respirar fundo, soltar tensões e redescobrir o bem-estar mais profundo.</p>

                </div>

            </div>

            <div className="relative w-full h-[80vh] rounded-xl mt-10 overflow-hidden">
                <Image
                    src={imglivre01}
                    alt="acomodacao-01"
                    fill
                    className="object-cover opacity-90"
                    priority
                    />
            </div>
        </section>
    )
}
