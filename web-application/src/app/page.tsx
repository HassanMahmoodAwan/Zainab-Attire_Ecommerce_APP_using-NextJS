import Image from "next/image";
import Navbar from "@/components/Header-Footer/Navbar";
import Footer from "@/components/Header-Footer/Footer";
import Hero from "@/components/HomePage/Hero";
import Products from "@/components/HomePage/Products";



export default function Home() {
  return (
    <section className="w-full h-full  text-slate-900">
      <Hero />

      <div className="space-y-10 w-full py-16 box-border">
        <Products />
      </div>
    </section>
  );
}
