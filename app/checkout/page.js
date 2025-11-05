"use client";
import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";


export default function Cart() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative w-full h-[450px] flex flex-col items-center justify-center text-center overflow-hidden mt-[90px]">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-60"
          style={{
            backgroundImage:
              "url('https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="z-10">
          <h1 className="text-5xl  hover:text-yellow-300 font-bold mb-4">CheckOut</h1>
        </div>
      </div >
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