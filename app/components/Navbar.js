"use client";
import { useRouter } from "next/navigation";
export default function Nav1(){
  const router = useRouter();
    return (
            <nav><div className="hidden md:flex w-full  items-center   px-12 py-5 bg-black dark:bg-stone-700 text-white fixed top-0 z-50">
       
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            className="w-20 h-10 object-center md:ml-9 ml-[-20px] cursor-pointer "
          />
       
        <div className="flex flex-row md:items-center gap-4 md:mr-0 mr-[-20px] md:gap-15 md:ml-[300px] text-md font-bold">
          <div className="hover:text-red-500 cursor-pointer mr-[-10px]"
          onClick={(e)=>{router.push("/")}}>
         
            <h1 className="hidden md:block">Home</h1>
          </div>
          <select className="text-white bg-black  dark:bg-stone-700  cursor-pointer md:flex  px-2 hover:text-red-500" onChange={(e)=>{router.push(e.target.value)}}
          >
            <option value="option1" >Pages</option>
            <option value="/login" >Login</option>
            <option value="/register" >Register</option>
            <option value="/about" >About Us</option>
            
            <option value="/error" >Error Page</option>
            <option value="/onlineres" >Reservation</option>
             </select>



         
              <div className="hover:text-red-500  ml-[-30px] cursor-pointer "
          onClick={(e)=>{router.push("/menu")}}>
           
            <h1 className="hidden md:block">Menu</h1>
          </div> 

           <div className="hover:text-red-500  cursor-pointer "
          onClick={(e)=>{router.push("/blog")}}>
            
            <h1 className="hidden md:block">Blogs</h1>
          </div> 

           
            <select className="text-white ml-[-10px] bg-black  dark:bg-stone-700  cursor-pointer md:flex  px-2 hover:text-red-500" onChange={(e)=>{router.push(e.target.value)}}
          >
            <option value="/shop" >Shop</option>
            <option value="/shop" >Shop</option>
            <option value="/cart" >Cart</option>
           </select>
        </div>

        
        <button className="bg-white hover:bg-red-500  text-white md:px-2 md:py-2 md:mr-0 mr-[-30px] md:ml-[220px]  rounded-full font-semibold "
          onClick={(e)=>{alert("Cart is empty")}}>
           
            <h1 className="hidden md:block">🛒</h1>
         
        </button>
         <button className="bg-red-500 hover:bg-white hover:text-black text-white md:px-6 md:py-2 md:mr-0 mr-[-30px] md:ml-10 rounded-full font-semibold "
          onClick={(e)=>{router.push("/reservation")}}>
         
            <h1 className="hidden md:block">Reservation</h1>
            </button>
        </div>

        <div className="md:hidden flex w-full  items-center  px-4 py-3 bg-black dark:bg-stone-700 text-stone-700 fixed top-0 gap-10 justify-around z-50">
          <div><select className="text-white md:ml-0 ml-[-30px] bg-black dark:bg-stone-700 text-3xl cursor-pointer md:flex w-25 h-12 px-2" onChange={(e)=>{router.push(e.target.value)}}
          >
            <option value="option1" className="font-bold text-red ">☰</option>
            <option value="/" className="border-gray-500 border-b-2  p-4 text-xl" >Home</option>
            <option value="/register" className="border-gray-500 border-b-2 w-[50px] h-[50px] p-2 text-xl">Register</option>
            <option value="/shop" className="border-gray-500 border-b-2 w-[50px] h-[50px] p-2 text-xl">Shop</option>
            <option value="/menu" className="border-gray-500 border-b-2 w-[50px] h-[50px] p-2 text-xl">Menu</option>
              <option value="/about" className="border-gray-500 border-b-2 w-[50px] h-[50px] p-2 text-xl">About Us</option>
                <option value="/error" className="border-gray-500 border-b-2 w-[50px] h-[50px] p-2 text-xl">Error</option>
                  <option value="/onlineres" className="border-gray-500 border-b-2 w-[50px] h-[50px] p-2 text-xl">Reservation</option>
            <option value="/reservation" className="border-gray-500 border-b-2 w-[50px] h-[50px] p-2 text-xl">Contact Us</option>
            <option value="/blog" className="border-gray-500 border-b-2 w-[50px] h-[50px] p-2 text-xl">Blog</option>
            
            
             </select></div> 

               <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            className="w-20 h-10 object-center md:ml-0 ml-[-50px] cursor-pointer "
          />
  <button className="bg-white hover:bg-red-500  text-white md:px-2 md:py-2 px-3 py-3 md:mr-0 mr-[-30px] md:ml-[300px]  rounded-full font-semibold "
          onClick={(e)=>{alert("Cart is empty")}}>
           
            <h1 >🛒</h1>
            </button>
            
        </div>
      </nav>

     

    )
  }