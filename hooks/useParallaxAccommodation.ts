// 'use client';

// import { useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function useParallaxAcomodacao() {
//     const ref = useRef<HTMLElement>(null);

//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start start", "end end"]
//     });

//     const y1 = useTransform(scrollYProgress, [0.10, 0.90], [170, 1200]);
//     const y2 = useTransform(y1, y => y - 500);
//     const y3 = useTransform(y1, y => y - 1000);

//     return { ref, y1, y2, y3 };
// }



'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useParallaxAccommodation() {
  const container = useRef<HTMLDivElement>(null);
  const bed1 = useRef<HTMLDivElement>(null);
  const bed2 = useRef<HTMLDivElement>(null);
  const bed3 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // ✅ Garantir que todas comecem na mesma posição visual
    const alignToBed1 = () => {
      if (!bed1.current || !bed2.current || !bed3.current) return;

      // Mede a posição *relativa ao viewport* de bed1
      const y1 = bed1.current.getBoundingClientRect().top;

      // Calcula quanto cada uma precisa subir para ficar na mesma altura
      const y2 = bed2.current.getBoundingClientRect().top;
      const y3 = bed3.current.getBoundingClientRect().top;

      const offset2 = y1 - y2; // ex: -1000px → bed2 está 1000px abaixo → sobe 1000px
      const offset3 = y1 - y3;

      // Aplica offset inicial (instantâneo, sem animação)
      gsap.set(bed2.current, { y: offset2 });
      gsap.set(bed3.current, { y: offset3 });
      gsap.set(bed1.current, { y: 0 });
    };

    // Executa uma vez, antes da animação
    alignToBed1();

    const ctx = gsap.context(() => {
      if (!container.current) return;

      const layers = [
        { el: bed1.current, speed: 1.0 },
        { el: bed2.current, speed: 1.25 },
        { el: bed3.current, speed: 1.5 },
      ];

      // Distância total de movimento (200vh)
      const totalMove = window.innerHeight * 2;

      // ✅ Animação: todas partem de y = offset_inicial, e vão para y = offset_inicial + movimento
      layers.forEach(({ el, speed }) => {
        if (!el) return;

        // Pega o y inicial já aplicado
        const startY = gsap.getProperty(el, 'y') as number || 0;

        gsap.to(el, {
          y: startY + totalMove * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: container.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            // onUpdate: self => console.log(self.progress),
          },
        });
      });
    }, [container, bed1, bed2, bed3]);

    return () => {
      // Volta tudo ao normal ao sair
      gsap.set([bed1.current, bed2.current, bed3.current], { y: 0 });
      ctx.revert();
    };
  }, []);

  return { container, bed1, bed2, bed3 };
}
