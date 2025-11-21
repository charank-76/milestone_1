"use client";
import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";


export default function Cart() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

     <HeroSection name="Checkout"/>
      <form>
        <h1 className="text-xl font-semibold text-black">Billing Details</h1>
        <input className="type=text "></input>
      </form>
       <section className="px-20 border-b-2 border-gray-500">
        <Aboutus />
      </section>

      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
  );
} 