"use client";
import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";


export default function Cart() {
  return (
    <div className="min-h-screen bg-white dark:text-white dark:bg-stone-900 ">
      <Navbar />

      <HeroSection name="Online Reservation"/>
      <div className="flex flex-col lg:flex-row items-center justify-center px-5 md:px-10 py-20 dark:text-white dark:text-white dark:bg-stone-900 bg-white text-black">

  <div className="w-full md:flex-row flex flex-col justify-center items-center bg-white dark:text-white dark:bg-stone-900 md:p-10">
  <div className="md:w-[45%] w-[90%] h-[400px] rounded-xl overflow-hidden md:mr-10">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&mute=1&loop=1&playlist=F3zw1Gvn4Mk"
      title="YouTube video player"
      allow="autoplay"
    ></iframe>
  </div>

  <div className="md:w-[45%] w-[90%] flex flex-col shadow-md shadow-gray-200 border dark:shadow-stone-600 dark:border-stone-600 dark:text-white dark:bg-stone-800 border-gray-100 rounded-2xl p-10  ">
    <p>Phone</p>
    <input type="text" placeholder="Your Phone Number" className="dark:bg-stone-800 h-[40px] rounded-md border-2 border-gray-500 mt-2 mb-4 pl-3" />
    <p>Date</p>
    <input type="date" className="dark:bg-stone-800 h-[40px] rounded-md border-2 border-gray-500 mt-2 mb-4 pl-3" />
    <p>Time</p>
    <input type="time" className="dark:bg-stone-800 h-[40px] rounded-md border-2 border-gray-500 mt-2 mb-4 pl-3" />
    <p>Persons</p>
    <input type="number" placeholder="Number of People" className="dark:bg-stone-800 h-[40px] border-2 border-gray-500 rounded-md mt-2 mb-4 pl-3" />
    <button className="bg-amber-600 w-[200px]  h-[50px] rounded-md mt-4 text-white font-bold hover:bg-amber-400" onClick={(e)=>{alert("Table Booking SuccessFull")}}>Book A Table</button>
  </div>
  </div>
  </div>
<section className="md:px-20 md:border-b-2 md:border-gray-500">
        <Aboutus />
      </section>

      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
    
  );
} 