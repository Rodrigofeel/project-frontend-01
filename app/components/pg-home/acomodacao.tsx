'use client';

import Image from "next/image"
import imgacm01 from '../../../public/acomodacao-01.jpg'
import imgacm02 from '../../../public/acomodacao-02.jpg'

export default function AcomodacaoSection() {
    return(
       <section>
        <h1>fotos</h1>
        <div>
            <div className="relative h-[500px] border-4 border-red-500">
                <Image
                src={imgacm01}
                alt="acomodacao-01"
                fill
                className="object-cover inset-0"
                priority
                />
            </div>
            <div className="relative h-[500px] border-4 border-red-500">
                <Image
                src={imgacm02}
                alt="acomodacao-01"
                fill
                className="object-cover inset-0"
                priority
                />
            </div>

        </div>
       </section>
    )
}
