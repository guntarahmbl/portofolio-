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
                <a href="#contact" className="hover:scale-105 hover:text-[rgba(218,212,218,0.23)] transition-all ease-linear duration-400">Contact</a>
            </div>

            <a id="return" href="#html" className="w-12 h-12 flex items-center rounded-full fixed bottom-14 right-20 bg-[rgba(137,15,165,0.15)] hover:bg-[rgba(137,15,165,0.3)]">
                <img src="up.svg" alt="" className="w-6 h-6 mx-auto"/>
            </a>
        </section>
    )
}
