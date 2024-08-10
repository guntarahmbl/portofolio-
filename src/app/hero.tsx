import React from "react";

export default function Hero(){
    return(
        <section id='header' className="w-full flex flex-row h-96 items-center justify-between my-20">
          <div id="nama" className="max-w-[50%]">
            <h1 className="font-extrabold text-4xl max-w-80">Guntara Hambali</h1>
            <h2 className="font-medium text-2xl max-w-80">Teknik Informatika</h2>
            <p className=""> Guntara is currently expanding his knowledge 
            and expertise in the broad world of computer science (focusing on data science 
            and artificial intellegence).
            </p>
          </div>

          <div id="foto" className="w-72 h-72 rounded-full bg-white overflow-clip">
            <img src="foto-author.jpg" alt="" className=""/>
          </div>
        </section>
    );
}