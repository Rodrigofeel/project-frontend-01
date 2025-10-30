'use client';

import { useEffect, useRef } from 'react';

export default function SobreSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;



      if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {

        const progress = (scrollY - sectionTop + windowHeight) / (windowHeight + sectionHeight);
        const offset = progress * 20;
        textRef.current.style.transform = `translateY(${-offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


    return (
        <section className="h-auto w-full py-24 pt-48 bg-[#F6E7D7]  px-6 overflow-hidden relative " >
            <div ref={textRef} className='transition-transform duration-300'>
              <p className="px-20">O que fazemos</p>
              <h1 className="text-3xl font-bold max-w-3xl mb-8 text- left px-20 ">
               A Roots oferece chalés integrados à natureza, proporcionando momentos
               de descanso e reconexão com a mãe natureza. Cada detalhe é pensado para
               unir conforto e harmonia natural.
              </h1>
            </div>
</section>
    )
}
