"use client";


import { useState, useEffect } from "react";

export default function Navbar() {

     const [showNavbar, setShowNavbar] = useState(true);
     const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const scrollThreshold = 200;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


    return (
        <nav className={`fixed top-0 shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)] left-0 w-full rounded-b-3xl z-70 bg-[#fff7ef] transition-transform duration-10 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>

         <div className="max-w-7xl mx-auto px-17 py-7 flex items-center justify-between">

          <h1 className="force-bebas text-[#5C5032] text-5xl ml-10 font-extrabold">Roots</h1>

                <ul className="mr-10 flex  gap-13 force-inter">
                    <li><a href="#" className="text-[#5C5032] font-bold text-base">Acomodações</a></li>
                    <li><a href="#" className="text-[#5C5032] font-bold text-base">Serviços</a></li>
                    <li><a href="#" className="text-[#5C5032] font-bold text-base">Quem somos</a></li>
                </ul>
        </div>
        </nav>
    );
}
