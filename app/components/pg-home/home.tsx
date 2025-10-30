'use client';

import { useEffect, useRef } from 'react';
import Image from "next/image"
import imgprinc from '../../../public/img-home.jpg'

export default function HomeSection() {
const parallaxBgRef = useRef<HTMLDivElement>(null);
const parallaxContentRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

        if (parallaxBgRef.current) {
        parallaxBgRef.current.style.transform = `translateY(${-scrollY * 0.1}px)`;
      }

        if (parallaxContentRef.current) {
        parallaxContentRef.current.style.transform = `translateY(${-scrollY * 0.6}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="text-white min-h-screen relative overflow-hidden " >

              <div
                ref={parallaxBgRef}
                className="absolute inset-0 z-0"
                style={{ willChange: 'transform' }}
              >
             <Image
               src={imgprinc}
               alt="Banner do site"
               fill
               className="object-cover inset-0"
               priority
             />
             <div className=" absolute inset-0 h-full bg-black/40 z-10"></div>
            </div>


             <div
             ref={parallaxContentRef}
             className="relative flex flex-col items-center justify-center h-full mt-70  z-20 px-4 text-center">
              <h1 className="text-5xl font-bold mb-4">Bem-vindo à Roots</h1>
              <p className="text-lg mb-8">
                 Chalés e natureza em perfeita harmonia.
              </p>
              <button className="cursor-pointer bg-[#5C4033] text-[#ffffff] text-bold px-6 py-3 rounded-xl hover:bg-[#211105] transition">
               Reservar
              </button>
        </div>


    </section>
  );
}
