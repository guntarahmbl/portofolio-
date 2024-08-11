import React from "react";
import Image from "next/image";

export default function Hero(){
    return(
        <section id="header" className="w-full flex flex-row h-96 items-center justify-between my-20">
          <div id="nama" className="max-w-[50%]">
            <h1 className="font-extrabold text-4xl max-w-80">Guntara Hambali</h1>
            <h2 className="font-medium text-2xl max-w-80">Teknik Informatika ITB&apos;23</h2>
            <p className=""> Guntara is currently expanding his knowledge 
            and expertise in the broad world of computer science (focusing on data science 
            and artificial intellegence).
            </p>
          </div>

          <div id="foto" className="w-72 h-72 rounded-full bg-white overflow-clip drop-shadow-[0_35px_35px_rgba(218,212,218,0.3)]">
            <Image src="/foto-author.jpg" width={1000} height={760} alt="" className=""/>
          </div>
        </section>
    );
}