"use client";
import { useRouter } from "next/navigation";
export default function Navbar(){
  const router = useRouter();
    return (
            <nav className="w-full flex items-center justify-between px-12 py-5 bg-black dark:bg-stone-700 text-white fixed top-0 z-50 ">
       
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            className="w-20 h-10 object-center md:ml-0 ml-[-20px] cursor-pointer "
          />
       
        <div className="flex flex-row md:items-center gap-4 md:mr-0 mr-[-20px] md:gap-13 text-md font-bold">
          <div className="hover:text-red-500 cursor-pointer md:flex"
          onClick={(e)=>{router.push("/")}}>
            <h1>🏠</h1>
            <h1 className="hidden md:block">Home</h1>
          </div>
          
              <div className="hover:text-red-500 cursor-pointer md:flex"
          onClick={(e)=>{router.push("/register")}}>
            <h1>➕</h1>
            <h1 className="hidden md:block">Register</h1>
          </div> 
         
              <div className="hover:text-red-500 cursor-pointer md:flex"
          onClick={(e)=>{router.push("/menu")}}>
            <h1>🍴</h1>
            <h1 className="hidden md:block">Menu</h1>
          </div> 

           <div className="hover:text-red-500 cursor-pointer md:flex"
          onClick={(e)=>{router.push("/blog")}}>
            <h1>💬</h1>
            <h1 className="hidden md:block">Blogs</h1>
          </div> 
     <div className="hover:text-red-500 cursor-pointer md:flex"
          onClick={(e)=>{router.push("/shop")}}>
            <h1>🛒</h1>
            <h1 className="hidden md:block">Shop</h1>
          </div> 
        </div>
        <button className="bg-red-500 hover:bg-white hover:text-black text-white hidden md:block px-6 py-2 rounded-full font-semibold ">
          Reservation
        </button>
      </nav>
    )
  }