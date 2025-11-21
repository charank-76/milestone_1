"use client";
import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";


export default function Cart() {
  return (
    <div className="min-h-screen bg-white dark:text-white dark:bg-stone-900 text-white">
      <Navbar />

   <HeroSection name="Error Page"/>
      <section className="bg-white dark:text-white dark:bg-stone-900 h-screen flex flex-col items-center justify-center text-center">
  <h1 className="text-[150px] font-bold text-black dark:text-white  mb-4">404</h1>
  <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">Sorry Page Was Not Found!</h2>
  <p className="text-gray-600 dark:text-gray-300 max-w-[600px] mb-10">
    Household shameless incommode at no objection behaviour. Especially do at he possession
    insensible sympathize boisterous it. Songs he on an widen me event truth.
  </p>
  <button className="bg-yellow-700 hover:bg-black hover:text-white text-white px-6 py-3 font-semibold rounded">
    Back To Home
  </button>
</section>

       <section className="md:px-20 md:border-b-2 md:border-gray-500">
        <Aboutus />
      </section>

      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
  );
} 