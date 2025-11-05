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

      <div className="flex justify-center flex-wrap gap-16 px-6">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=640&q=75"  className="h-20 " />
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=640&q=75" className="h-20 " />
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=640&q=75"  className="h-20 " />
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=640&q=75"  className="h-20 " />
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=640&q=75"  className="h-20 " />
      </div>
    </section>
    <section class="py-20 bg-white">
  <div class="w-[1200px] mx-auto flex items-center gap-10">
    <div class="flex gap-5">
      <img 
        src="https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg"
        class="w-[280px] h-[350px] object-cover rounded-lg"
      />
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsww_glrGRFxkf9tVSikwCQumGim_PxcAejQ&s"
        class="w-[280px] h-[350px] object-cover rounded-lg"
      />
    </div>
    <div class="bg-white shadow-gray-200 p-12 rounded-2xl w-[550px]">
      <p class="text-sm  text-yellow-700 mb-3">ABOUT US</p>
      <h2 class="text-4xl  text-black font-bold  mb-5">
        We Invite You <br />
        To Visit Our Restaurant
      </h2>
      <p class="text-gray-600 mb-8">
     A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.
      </p>
      <button class="bg-yellow-700 text-white px-6 py-3 font-semibold rounded-10 hover:bg-black hover:text-white">
        Discover More
      </button>
    </div>
  </div>
</section>
                // charan do the component for chief and opening hour .
      <section className="px-20 border-b-2 border-gray-500">
        <Aboutus />
      </section>

      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
  );
} 