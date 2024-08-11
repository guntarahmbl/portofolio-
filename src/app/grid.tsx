import React from "react";

export default function Grid({ teks, foto, style }: { teks: string, foto: string, style: React.CSSProperties; }) {
    return (
        <div id='grid' className="w-full flex flex-col rounded-2xl overflow-clip" style={style}>
            <div id="foto" className="">
                <img src={foto} alt="" className="max-w-full"/>
            </div>
            <div id="desc" className="bg-[rgba(137,15,165,0.15)] p-5 h-full hover:bg-gradient-to-b">
                <p>{teks}</p>
            </div>  
        </div>
    );
}


