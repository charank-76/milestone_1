"use client";
import { useRouter } from "next/navigation";
export default function Navbar(){
  const router = useRouter();
    return (
            <nav className="w-full flex items-center justify-between px-12 py-5 bg-black text-white fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
       
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            className="w-20 h-10 object-center md:ml-0 ml-[130px] "
          />
       
        <ul className="hidden md:flex flex-row items-center gap-13 text-md font-bold">
          <li className="hover:text-red-500 cursor-pointer "
          onClick={(e)=>{router.push("/")}}>Home</li>
          
            <li className="hover:text-red-500 cursor-pointer "
          onClick={(e)=>{router.push("/register")}}>Register</li>  
          <li className="hover:text-red-500 cursor-pointer " 
           onClick={(e)=>{router.push("/menu")}}>Menu</li>
          <li className="hover:text-red-500 cursor-pointer"
           onClick={(e)=>{router.push("/blog")}}>Blog</li>
          <li className="hover:text-red-500 cursor-pointer "
          onClick={(e)=>{router.push("/shop")}}>Shop</li>
        </ul>
        <button className="bg-red-500 hover:bg-white hover:text-black text-white hidden md:block px-6 py-2 rounded-full font-semibold ">
          Reservation
        </button>
      </nav>
    )
  }