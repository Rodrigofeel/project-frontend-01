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
        setShowNavbar(false); // rolando pra baixo → esconde
      } else {
        setShowNavbar(true);  // rolando pra cima → mostra
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


    return (
        <nav className={`fixed top-0 left-0 w-full rounded-b-3xl z-50 bg-[#fff7ef] transition-transform duration-10 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>

         <div className="max-w-7xl mx-auto px-17 py-7 flex items-center justify-center">

                <ul className="mr-50 flex  gap-13 ">
                    <li><a href="#" className="text-[#211105] font-(--font-fredoka)  font-bold">Quem somos</a></li>
                    <li><a href="#" className="text-[#211105] font-(--font-fredoka) font-bold text-base">Contato</a></li>
                </ul>
                    <h1 className="text-[#211105] text-4xl font-bold-(--font-bebas) font-extrabold">Roots</h1>
                <ul className="ml-50 flex gap-13 font-(--font-fredoka)">
                    <li><a href="#" className="text-[#211105] font-(--font-fredoka)  font-bold text-base">Acomodações</a></li>
                    <li><a href="#" className="text-[#211105] font-(--font-fredoka) font-bold text-base">Serviços</a></li>
                </ul>
        </div>
        </nav>
    );
}
