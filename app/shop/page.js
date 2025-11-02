"use client";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";

export default function Menu() {
    return(
        <div className="min-h-screen bg-black text-white">
          <Navbar/>
    
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
              <h1 className="text-5xl font-bold mb-4">Special Food</h1>
            </div>
          </div>
    <section className="px-10 py-16 bg-white text-black">
      <div className="flex justify-center gap-10 flex-wrap">
        <div className="bg-white shadow-md rounded-2xl w-[300px] hover:bg-gray-300 transition-transform ">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75"
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="p-5 flex flex-col items-center text-center">
            <h4 className="text-sm font-semibold mb-2">Cheese,Pizza</h4>
            <h2 className="text-gray-600 mb-4">
             Margherita Pizza
            </h2>
            <button className="bg-white hover:bg-yellow-800 text-black hover:text-white px-5 py-2 rounded-full font-semibold">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="hover:bg-gray-100 shadow-md rounded-2xl w-[300px] bg:white">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=1080&q=75"
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="p-5 flex flex-col items-center text-center">
            <h4 className="text-sm font-semibold mb-2">Creamy,Burger</h4>
            <h3 className="text-gray-600 mb-4">
           Margherita Pizza
            </h3>
            <button className="bg-white hover:bg-yellow-800 text-black hover:text-white px-5 py-2 rounded-full font-semibold">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="hover:bg-gray-100 shadow-md rounded-2xl w-[300px] bg-white">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75"
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="p-5 flex flex-col items-center text-center">
           <h4 className="text-sm font-semibold mb-2">Beef,Steak</h4>
            <h3 className="text-gray-600 mb-4">
           Grilled Flank Steak
            </h3>
            <button className="bg-white hover:bg-yellow-800 text-black hover:text-white px-5 py-2 rounded-full font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
        <div className="hover:bg-gray-100 shadow-md rounded-2xl w-[300px] bg-white">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F5.png&w=1080&q=75"
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="p-5 flex flex-col items-center text-center">
           <h4 className="text-sm font-semibold mb-2">BBQ,Meat</h4>
            <h3 className="text-gray-600 mb-4">
          Barbecue Chicken
            </h3>
            <button className="bg-white hover:bg-yellow-800 text-black hover:text-white px-5 py-2 rounded-full font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
       <div className="hover:bg-gray-100 shadow-md rounded-2xl w-[300px] bg-white">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F8.png&w=1080&q=75"
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="p-5 flex flex-col items-center text-center">
           <h4 className="text-sm font-semibold mb-2">Food,Roll</h4>
            <h3 className="text-gray-600 mb-4">
           Vegetable Roll
            </h3>
            <button className="bg-white hover:bg-yellow-800 text-black hover:text-white px-5 py-2 rounded-full font-semibold">
              Add to Cart
            </button>
          </div>
          
           <div className="p-5 flex flex-col items-center text-center">
           <h4 className="text-sm font-semibold mb-2">Food,Roll</h4>
            <h3 className="text-gray-600 mb-4">
           Vegetable Roll
            </h3>
            <button className="bg-white hover:bg-yellow-800 text-black hover:text-white px-5 py-2 rounded-full font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
    </section>
     <section className="md:px-20 md:border-b-2 md:border-gray-500">
  <Aboutus/>
</section>
<section className="w-full text-white">
  <Footer/>
  </section>
          </div> 

          )
        }