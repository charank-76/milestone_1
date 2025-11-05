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
          <h1 className="text-5xl  hover:text-yellow-300 font-bold mb-4">Chef Details</h1>
        </div>
      </div >
<section className="py-20 bg-gray-200">
  <div className="w-[1200px] mx-auto flex items-center gap-10">
    <div className="flex gap-5">
      <img 
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.jpg&w=828&q=75"
        class="w-[280px] h-[350px] object-cover rounded-lg"
      />
       </div>
    <div className="bg-white shadow-gray-200 p-12 rounded-2xl w-[550px]">
      <p className="text-3xl font-bold text-black mb-3">Alexander Petllo</p>
      <h2 className="text-sm  text-gray-500  mb-5">
       Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from.
      </h2>
    <div className="space-y-5 mb-8">
      <div className="flex items-center gap-4">
        <div className="bg-white p-3 border border-gray-300 rounded-md">
        </div>
        <p className="text-gray-700 text-sm ">175 10h Street, Office 375 Berlin, De 21562</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-white border border-gray-300 p-3 rounded-md">
        </div>
        <p className="text-black text-sm">alexander@digital.com</p>
      </div>
 <div className="flex items-center gap-4">
        <div className="bg-white border border-gray-300 p-3 rounded-md">
        </div>
        <p className="text-gray-700 text-sm">+44-20-7328-4499</p>
      </div>
    </div>
      <button className="bg-yellow-700 text-white px-6 py-3 font-semibold rounded-10 hover:bg-black hover:text-white">
        Contact Me
      </button>
    </div>
  </div>
</section>
<section className="py-20 bg-white min-h-screen">
  <div className="w-[1200px] mx-auto flex items-center gap-10">
    <div className="flex gap-5">
       <h1 className="text-2xl text-black font-semibold text-center">Education</h1>
       <div>
       <h3 className="text-lg text-black font-semibold text-center">Residential College</h3>
       </div>
    </div>
    <h1></h1>
  </div>
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