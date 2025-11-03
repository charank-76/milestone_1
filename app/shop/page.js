"use client";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Shop from "../components/Shop";

export default function Menu() {
  const foodItems = [
    {
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75",
      category: "CHEESE, PIZZA",
      name: "Margherita Pizza",
      price: 12,
    },
    {
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=1080&q=75",
      category: "CREAMY, BURGER",
      name: "Margherita Pizza",
      price: 8,
    },
    {
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75",
      category: "BEEF, STEAK",
      name: "Grilled Flank Steak",
      price: 14,
    },
    {
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F5.png&w=1080&q=75",
      category: "BBQ, MEAT",
      name: "Barbecue Chicken",
      price: 8,
    },
     {
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F8.png&w=1080&q=75",
      category: "FOOD,ROLL",
      name: "Vegetable Roll",
      price: 25,
    },
  ];

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
          <h1 className="text-5xl font-bold mb-4">Special Food</h1>
        </div>
      </div>

      <div className="flex justify-center gap-10 flex-wrap p-10 bg-white">
        {foodItems.map((element, index) => (
          <Shop
            key={index}
            image={element.image}
            category={element.category}
            name={element.name}
            price={element.price}
          />
        ))}
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
