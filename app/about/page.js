"use client";
import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import WH from "../components/wh";


export default function Cart() {
  return (
    <div className="min-h-screen bg-white text-white dark:text-white dark:bg-stone-900 ">
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
          <h1 className="text-5xl  hover:text-yellow-300 font-bold mb-4">About Us</h1>
        </div>
      </div >
     <section className="bg-gray-100 py-12">
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="h-[1px] w-24 bg-yellow-700" />
        <h2 className="text-yellow-700 font-semibold text-lg ">
          OUR TRUSTED & HAPPY PARTNER
        </h2>
        <div className="h-[1px] w-24 bg-yellow-700" />
      </div>

      <div className="flex  justify-center flex-wrap gap-16 px-6 ">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=640&q=75"  className="h-20 " />
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=640&q=75" className="h-20 " />
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=640&q=75"  className="h-20 " />
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=640&q=75"  className="h-20 " />
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=640&q=75"  className="h-20 " />
      </div>
    </section>
    <section className="py-20 bg-white dark:text-white dark:bg-stone-900 ">
  <div className="md:w-[1200px] mx-auto md:flex-row flex flex-col items-center gap-10">
    <div className="flex gap-5">
      <img 
        src="https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg"
        className="md:w-[280px] h-[350px] object-cover rounded-lg"
      />
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsww_glrGRFxkf9tVSikwCQumGim_PxcAejQ&s"
        class="w-[280px] h-[350px] object-cover rounded-lg hidden md:block"
      />
    </div>
    <div className="bg-white shadow-gray-200 md:p-12 p-2 mt-2 rounded-2xl md:w-[550px] dark:text-white dark:bg-stone-800">
      <p className="text-xl font-semibold  text-yellow-700 mb-3 dark:text-white">ABOUT US</p>
      <h2 className="text-4xl  text-black font-bold  mb-5 dark:text-white">
        We Invite You <br />
        To Visit Our Restaurant
      </h2>
      <p className="text-gray-600 mb-8 dark:text-gray-400">
     A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.
      </p>
      <button className="bg-yellow-700 text-white px-6 py-3 font-semibold rounded-xl hover:bg-black hover:text-white">
        Discover More
      </button>
    </div>
  </div>
</section>
<section className="mt-[-70px] ">
  <WH />
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