import Image from "next/image";
import Hero from "./hero";
import { Inter } from "next/font/google";
import MinatBakat from "./minat-bakat";
import Projects from "./projects";
import Contact from "./contact";
import Awards from "./awards";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="background flex flex-col justify-center" >


      <div id='container' className="w-3/4 flex flex-col mx-auto justify-center">
        <Navbar />
        <Hero />
        <MinatBakat />
        <Projects />
        <Awards />
      </div>

      <Contact />

      
    </main>
  );
}
