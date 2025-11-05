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
          <h1 className="text-5xl  hover:text-yellow-300 font-bold mb-4">Error Page</h1>
        </div>
      </div >
      <section class="bg-white h-screen flex flex-col items-center justify-center text-center">
  <h1 class="text-[150px] font-bold text-black  mb-4">404</h1>
  <h2 class="text-2xl font-semibold text-black mb-3">Sorry Page Was Not Found!</h2>
  <p class="text-gray-600 max-w-[600px] mb-10">
    Household shameless incommode at no objection behaviour. Especially do at he possession
    insensible sympathize boisterous it. Songs he on an widen me event truth.
  </p>
  <button class="bg-yellow-700 hover:bg-black hover:text-white text-white px-6 py-3 font-semibold rounded">
    Back To Home
  </button>
</section>

       <section className="px-20 border-b-2 border-gray-500">
        <Aboutus />
      </section>

      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
  );
} 