import Grid from "./grid"

export default function Projects(){
    return (
    <section id='projects' className="w-full flex flex-col items-center justify-center my-10">
        <h1 className="text-3xl font-bold">Projects</h1>
        <h2 className="my-5">Projects I have worked in to cement my skills!</h2>

        <div id="grids" className="grid grid-cols-3 gap-4">
            <Grid style={{height: "25rem"}}
            teks={"Comparing the effectiveness of flood management in Jakarta in a certain period with other periods based on the number of clusters (light, medium, heavy) of events. The algorithm used is K-Means Clustering"} 
            foto={"DSACompfest.png"}/>

            <Grid style={{height: "25rem"}}
            teks={"Implementing multiclass classification using stacking tree models (XGBoost, LightGBM, etc.). This project was created in the framework of the FindIT UGM 2023 final."} 
            foto={"FindIT23.png"}/>

            <Grid style={{height: "25rem"}}
            teks={"Applying regression to determine carbon dioxide emission figures in a city. The model used is stacking between Gradient Based Tree Model and Neural Network. This project was created in the framework of the Data Slayer 2023 final."} 
            foto={"DataSlayer23.png"}/>



        </div>
    </section>
    )
}