import React from "react";
export default function Navbar(){
    return(
        <section id="navbar" className="w-full flex justify-between h-14 items-center mt-3 border-b-2 border-[rgba(244,241,244,0.09)]">
            <div id="logo">
                <h1 className="font-bold text-3xl">BIGBOSS</h1>
            </div>

            <div id="link" className="flex flex-row gap-x-7">
                <a href="#hero" className="hover:scale-105 hover:text-[rgba(218,212,218,0.23)] transition-all">Home</a>
                <a href="#minat-bakat" className="hover:scale-105 hover:text-[rgba(218,212,218,0.23)] transition-all">Interests</a>
                <a href="#projects" className="hover:scale-105 hover:text-[rgba(218,212,218,0.23)] transition-all">Projects</a>
                <a href="#awards" className="hover:scale-105 hover:text-[rgba(218,212,218,0.23)] transition-all">Awards</a>
                <a href="#contact" className="hover:scale-105 hover:text-[rgba(218,212,218,0.23)] transition-all">Contact</a>
            </div>
        </section>
    )
}
