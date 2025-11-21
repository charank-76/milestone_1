"use client";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Shop from "../components/Shop";
import HeroSection from "../components/HeroSection";

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
    {
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F8.png&w=1080&q=75",
      category: "PASTA,SPICY",
      name: "Creamy Pasta",
      price:18 ,
    },
     {
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F7.png&w=1080&q=75",
      category: "MEAT,SHAWARMA",
      name: "Chicken Shawarma",
      price:3 ,
    },
    {
      image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F4.png&w=1080&q=75",
      category: "SANDWICH,CHICKEN",
      name: "Submarine Sandwich",
      price:3 ,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-stone-600 text-white">
      <Navbar />

      <HeroSection name="Special Food"/>
      <div className=" dark:bg-stone-900 flex justify-center gap-10 flex-wrap p-10 bg-white">
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

      <section className="md:px-20 md:border-b-2 md:border-gray-500">
        <Aboutus />
      </section>

      <section className="w-full text-white">
        <Footer />
      </section>
    </div>
  );
}
