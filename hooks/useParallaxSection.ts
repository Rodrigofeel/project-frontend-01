'use client';

import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function useParallaxSection() {
    const container = useRef<HTMLDivElement>(null)

    const { scrollYProgress} = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["20vh", "-30vh"]);

    const yContent = useTransform(scrollYProgress, [0, 1], ["0vh", "10vh"]);

    return { container, y, yContent };
}
