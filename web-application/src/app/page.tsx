import Image from "next/image";
import Navbar from "@/components/Header-Footer/Header";
import Footer from "@/components/Header-Footer/Footer";
import Hero from "@/components/HomePage/Hero";
import Products from "@/components/HomePage/Products";
import Story from "@/components/HomePage/Story";
import NewsLetter from "@/components/HomePage/NewsLetter";



export default function Home() {
  return (
    <section className="w-full h-full  text-slate-900">
      <Hero />

      <div className="space-y-20 w-full py-16 box-border">
        <Products />
        <Story />
      </div>
        <NewsLetter />
    </section>
  );
}
