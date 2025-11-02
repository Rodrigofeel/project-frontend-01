'use client';

import Image from "next/image"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import imgacm01 from '../../../public/acomodacao-01.jpg'
import imgacm02 from '../../../public/acomodacao-02.jpg'
import imgacm04 from '../../../public/acomodacao-04.jpg'
import imgacmbed01 from '../../../public/acomodacao-bed-01.jpg'
import imgacmbed02 from '../../../public/acomodacao-bed-02.jpg'
import imgacmbed04 from '../../../public/acomodacao-bed-04.jpg'


export default function AcomodacaoSection() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const y1 = useTransform(scrollYProgress, [0.10, 0.90], ["0px", "890px"]);
    const y2 = useTransform(scrollYProgress, [0.10, 0.90], ["-325px", "580px"]);
    const y3 = useTransform(scrollYProgress, [0.10, 0.97], ["-840px", "160px"]);


    return(
       <section ref={ref} className="relative w-full h-[300vh] bg-[#fff7ef]">
        <h1 className="text-5xl font-bold text-center drop-shadow-lg py-16 text-[#211105] ">Hospede-se em harmonia com a natureza</h1>
        <div>

            {/* acomodação 1 */}
            <div className="relative h-[500px] w-full overflow-hidden ">
                <div className="absolute inset-0 bg-black/15 z-30"> </div>
                <Image
                src={imgacm01}
                alt="acomodacao-01"
                fill
                className="object-cover"
                priority
                />
                <motion.div style={{y: y1}} className="absolute left-25 bottom-20 w-[35%] h-80 rounded-xl overflow-hidden shadow-2xl z-30">
                <Image
                src={imgacmbed02}
                alt="acomodacao-bed-01"
                fill
                className="object-cover"
                priority
                />
                </motion.div>
            </div>

            {/* acomodação 2 */}
            <div className="relative h-[500px] w-full overflow-hidden">

                <div className="absolute inset-0 bg-black/15 z-30"> </div>
                <Image
                src={imgacm02}
                alt="acomodacao-02"
                fill
                className="object-cover"
                priority
                />
                <motion.div style={{ y: y2}} className="relative left-25 bottom-20 w-[35%] h-80 rounded-xl overflow-hidden shadow-2xl z-30">
                <Image
                src={imgacmbed01}
                alt="acomodacao-bed-02"
                fill
                className="object-cover"
                priority
                />
                </motion.div>
            </div>

            {/* acomodação 3 */}
            <div className="relative h-[500px] w-full overflow-hidden">

                <div className="relative inset-0 bg-black/15 z-30"> </div>
                <Image
                src={imgacm04}
                alt="acomodacao-04"
                fill
                className="object-cover"
                priority
                />
                <motion.div style={{y: y3}} className="relative left-25 bottom-20 w-[35%] h-80 rounded-xl overflow-hidden shadow-2xl z-30">
                <Image
                src={imgacmbed04}
                alt="acomodacao-bed-04"
                fill
                className="object-cover"
                priority
                />
                </motion.div>
            </div>
        </div>
       </section>
    )
}
