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
          <h1 className="text-5xl  hover:text-yellow-300 font-bold mb-4">Online Reservation</h1>
        </div>
      </div >
      <div className="flex flex-col lg:flex-row items-center justify-center px-10 py-20 dark:text-white  bg-white text-black">

  <div className="w-full flex justify-center items-center bg-black text-white p-10">
  <div className="w-[45%] h-[400px] rounded-xl overflow-hidden mr-10">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&mute=1&loop=1&playlist=F3zw1Gvn4Mk"
      title="YouTube video player"
      allow="autoplay"
    ></iframe>
  </div>

  <div className="w-[45%] flex flex-col">
    <p>Phone</p>
    <input type="text" placeholder="Your Phone Number" className="bg-gray-800 h-[40px] rounded-md border-2 border-gray-500 mt-2 mb-4 pl-3" />
    <p>Date</p>
    <input type="date" className="bg-gray-800 h-[40px] rounded-md border-2 border-gray-500 mt-2 mb-4 pl-3" />
    <p>Time</p>
    <input type="time" className="bg-gray-800 h-[40px] rounded-md border-2 border-gray-500 mt-2 mb-4 pl-3" />
    <p>Persons</p>
    <input type="number" placeholder="Number of People" className="bg-gray-800 h-[40px] border-2 border-gray-500 rounded-md mt-2 mb-4 pl-3" />
    <button className="bg-amber-600 w-[200px] h-[50px] rounded-md mt-4 text-white font-bold hover:bg-amber-400" onClick={(e)=>{alert("Table Booking SuccessFull")}}>Book A Table</button>
  </div>
  </div>
  </div>
<section className="px-20 border-b-2 border-gray-500">
        <Aboutus />
      </section>

      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
    
  );
} 