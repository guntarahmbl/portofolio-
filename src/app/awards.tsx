import Grid from "./grid"

export default function Awards(){
    return (
    <section id="awards" className="w-full flex flex-col items-center justify-center my-10">
        <h1 className="text-3xl font-bold">Awards & Honors</h1>
        <h2 className="my-5">Awards and Honor I have achieved throughout my journey!</h2>

        <div id="grids" className="grid grid-cols-3 gap-4">

            
            <Grid style={{height: "17rem", fontWeight: "600", fontSize: "17px", textAlign:"center"}}
            teks={"3rd Rank Machine Learning Competition Data Slayer 1.0"} 
            foto={"/DataSlayerLogo.png"}/>

            <Grid style={{height: "17rem", fontWeight: "600", fontSize: "17px", textAlign:"center"}}
            teks={"Awardee Beasiswa Unggulan"} 
            foto={"/BeasiswaUnggulan.jpg"}/>

            <Grid style={{height: "17rem", fontWeight: "600", fontSize: "17px", textAlign: "center"}}
            teks={"Gold Medalist Kompetisi Sains Nasional Astronomi 2021"} 
            foto={"/KSNAstro.png"}/>

        </div>
    </section>
    )
}