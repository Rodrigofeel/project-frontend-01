'use client';

import Image from "next/image"
import imgacm01 from '../../../public/acomodacao-01.jpg'
import imgacm02 from '../../../public/acomodacao-02.jpg'
import imgacm04 from '../../../public/acomodacao-04.jpg'
import imgacmbed01 from '../../../public/acomodacao-bed-01.jpg'
import imgacmbed02 from '../../../public/acomodacao-bed-02.jpg'
import imgacmbed04 from '../../../public/acomodacao-bed-04.jpg'


export default function AcomodacaoSection() {
    return(
       <section className=" itemns-center">
        <h1 className="text-4xl font-bold text-center drop-shadow-lg py-16">Hospede-se em harmonia com a natureza</h1>
        <div>
            <div className="relative h-[500px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/15 z-30"> </div>
                <Image
                src={imgacm01}
                alt="acomodacao-01"
                fill
                className="object-cover inset-0"
                priority
                />
                <div className="absolute left-12 bottom-12 w-[45%] h-[320px] rounded-xl overflow-hidden shadow-2xl z-30">
                <Image
                src={imgacmbed02}
                alt="acomodacao-bed-01"
                fill
                className="object-cover"
                priority
                />
                </div>
            </div>
            <div className="relative h-[500px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/15 z-30"> </div>
                <Image
                src={imgacm02}
                alt="acomodacao-02"
                fill
                className="object-cover inset-0"
                priority
                />
                <div className="absolute left-12 bottom-12 w-[45%] h-[320px] rounded-xl overflow-hidden shadow-2xl z-30">
                <Image
                src={imgacmbed01}
                alt="acomodacao-bed-02"
                fill
                className="object-cover"
                priority
                />
                </div>

            </div>
            <div className="relative h-[500px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/15 z-30"> </div>
                <Image
                src={imgacm04}
                alt="acomodacao-04"
                fill
                className="object-cover inset-0"
                priority
                />
                <div className="absolute left-12 bottom-12 w-[45%] h-[320px] rounded-xl overflow-hidden shadow-2xl z-30">
                <Image
                src={imgacmbed04}
                alt="acomodacao-bed-04"
                fill
                className="object-cover"
                priority
                />
                </div>
            </div>


        </div>
       </section>
    )
}
