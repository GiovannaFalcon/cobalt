import { CallToAction } from "@/sections/CallToAction";
import { Finance } from "@/sections/Finance";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { Meet } from "@/sections/Meet";
import { Navbar } from "@/sections/Navbar";
import { Products } from "@/sections/Products";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Finance/>
    <Products/>
    <Meet/>
    <CallToAction/>
    <Footer/>
    </>
  );
}
