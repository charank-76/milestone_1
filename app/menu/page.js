"use client";
import MenuCard from "../components/MenuCard";
import Aboutus from "../components/Aboutus";
import Customer from "../components/Customer";
import {useRouter} from "next/navigation";

import {useState} from 'react'
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import Menu from "../shop/page";

export default function MenuPage() {
  const router = useRouter();
 const Bdish=[
    {
        title: "Chicken Alfredo",
        description: "Ricotta / goat cheese / beetroot",
        hprice: 20,
        fprice: 40 ,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F1.jpg&w=640&q=75",
        desc: "Free Drinks"
    },
    {
        title: "Fish Chips",
        description: "Atlantic / chips / salad / tartare",
        hprice: 36,
        fprice: 70,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F2.jpg&w=640&q=75",
        desc: "Free Drinks"
    },
    {
        title: "Ebony Fillet Steak",
        description: "Truffle mash / pepper sauce",
        hprice: 44,
        fprice: 85,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F3.jpg&w=640&q=75",
        desc: "Free Drinks"
    },
    {
        title: "Chicken Grill",
        description: "Ricotta / goat cheese / beetroot",
        hprice: 20,
        fprice: 40,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F4.jpg&w=640&q=75",
        desc: "Free Drinks"
    }
 ]
  const Sdish=[
    {
        title: "Salmon Fry",
        description: "Ricotta / goat cheese / beetroot",
        hprice: 40,
        fprice: 80 ,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F9.jpg&w=640&q=75",
        desc: "Extra Free Juice"
    },
    {
        title: "Pangasius or Basa",
        description: "Atlantic / chips / salad / tartare",
        hprice: 55,
        fprice: 100,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F10.jpg&w=640&q=75",
        desc: "Extra Free Juice"
    },
    {
        title: "Clams",
        description: "Truffle mash / pepper sauce",
        hprice: 66,
        fprice: 120,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F11.jpg&w=640&q=75",
        desc: "Extra Free Juice"
    },
    {
        title: "Red Crab",
        description: "Ricotta / goat cheese / beetroot",
        hprice: 20,
        fprice: 40,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F12.jpg&w=640&q=75",
        desc: "Extra Free Juice"
    }
 ]

 const Ldish=[
   {
        title: "Brownies",
        description: "Ricotta / goat cheese / beetroot",
        hprice: 34,
        fprice: 65 ,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F6.jpg&w=640&q=75",
        desc: "Extra Free Juice"
    },
    {
        title: "Cheesecakes",
        description: "Atlantic / chips / salad / tartare",
        hprice: 55,
        fprice: 100,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F8.jpg&w=640&q=75",
        desc: "Extra Free Juice"
    },
    {
        title: "Muffins",
        description: "Truffle mash / pepper sauce",
        hprice: 66,
        fprice: 120,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F7.jpg&w=640&q=75",
        desc: "Extra Free Juice"
    },
    {
        title: "Cupcakes",
        description: "Ricotta / goat cheese / beetroot",
        hprice: 20,
        fprice: 40,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F5.jpg&w=640&q=75",
        desc: "Extra Free Juice"
    }
  
 ]

  const Bedish=[
   {
        title: "Wine",
        description: "Ricotta / goat cheese / beetroot",
        hprice: 34,
        fprice: 65 ,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F13.jpg&w=640&q=75",
        desc: "Extra Free Juice"
    },
    {
        title: "Coffee",
        description: "Atlantic / chips / salad / tartare",
        hprice: 55,
        fprice: 100,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F14.jpg&w=640&q=75",
        desc: "Extra Free Juice"
    },
    {
        title: "Hot Chocolate",
        description: "Truffle mash / pepper sauce",
        hprice: 66,
        fprice: 120,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F15.jpg&w=640&q=75",
        desc: "Extra Free Juice"
    },
    {
        title: "Milk Shake",
        description: "Ricotta / goat cheese / beetroot",
        hprice: 20,
        fprice: 40,
        imageUrl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F16.jpg&w=640&q=75",
        desc: "Extra Free Juice"
    }
  
 ]

 return(<div className="bg-white dark:bg-stone-900 w-full min-h-screen flex flex-col md:items-center  ">
  <section className="fixed top-0 left-0 right-0 z-50">
    <Navbar/>
  </section>

  <div className="bg-[url(https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg)]  h-[300px] w-full flex brightness-70 justify-center items-center md:mb-10 font-bold text-white ">
    <div className="flex flex-col brightness-200 items-center">
<h1 className="text-4xl brightness-100 mt-10">Food Menu</h1>
<div className="flex">
<h3 className="hover:text-red-500 cursor-pointer brightness-100" 
onClick={(e)=>{router.push("/")}}>home</h3>
<h3>/food menu</h3>
</div></div>
  </div>
    <div className="flex md:flex-row flex-col mb-10 mt-10">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbanner%2F1.jpg&w=640&q=75" className="md:w-[620px] md:h-[700px] h-[300px] md:ml-0 rounded-[30px] md:rounded-[50px] p-2 md:p-0"/>
       <div  className="hidden w-[200px] h-[170px] bg-amber-800 rounded-[100px] mt-[150px] md:ml-[-120px] md:flex flex-col text-amber-100 ">
        <h1 className="font-bold text-5xl ml-[30px] mt-[25px]">Menu</h1>
        <h1 className="font-bold text-4xl ml-[20px] mt-[20px]">Breakfast</h1>
       </div>
     <div>
     <MenuCard items={Bdish}/>
   </div>
    </div>

     <div className="flex md:flex-row flex-col mb-10 md:gap-15 gap-8  md:ml-[-500px] mt-12">
     <div className="md:ml-[-15px]  ">
     <MenuCard items={Ldish}/>
   </div>
    
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbanner%2F1.jpg&w=640&q=75" className="md:w-[620px] md:h-[700px] md:mr-[-50px]  h-[300px] rounded-[30px] md:rounded-[50px]"/>
       <div  className="hidden w-[190px] h-[170px] bg-amber-800 rounded-[100px] mt-[150px] ml-[-700px] md:flex flex-col text-amber-100 ">
        <h1 className="font-bold text-5xl ml-[30px] mt-[25px]">Menu</h1>
        <h1 className="font-bold text-4xl ml-[35px] mt-[20px]">Lunch</h1>
       </div>
 
    </div>

     <div className="bg-black md:h-[500px] h-[700px] w-full flex md:flex-row flex-col  font-bold text-white ">
    <div className="flex md:flex-row flex-col items-center">
        <div className="flex flex-col md:w-[800px] md:ml-20">
            <div className="font-bold md:text-7xl md:p-0 p-4 text-4xl text-gray-50 md:w-[400px] ">30 Minutes Delivery!</div>
            <div className="text-gray-300 font-normal md:p-0 p-4 mt-5 md:w-[500px] md:mt-0 mt-[-10px]">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.</div>
              <div className="bg-amber-800 md:w-[200px] w-[120px] md:h-[60px] h-[40px] rounded-lg flex justify-center items-center text-white font-bold md:text-2xl md:mt-10 mt-2 md:p-0 md:ml-0 ml-4 cursor-pointer hover:bg-amber-600 ">Order Now</div>    
        </div>
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=1920&q=75" className="md:w-[400px] md:h-[400px] w-[300px] md:mt-0 mt-10 md:rounded-[50px] ml-10"/>
</div>
  </div>


    <div className="flex md:flex-row flex-col mb-10 gap-2 mt-2">
            <div className="flex flex-col gap-6 md:mt-10 md:border-r-2 md:border-gray-500 p-4">
               <p className="md:text-4xl font-serif text-stone-600 md:ml-[200px] text-[25px] ml-22 dark:text-gray-200">--Fresh from ocean--</p>
              <p className="text-5xl font-serif text-black md:ml-[280px] ml-27 md:mt-0 mt-[-10px] dark:text-white">Sea Food</p>
       <div>
     <MenuCard items={Sdish}/>
   </div></div>
    
         <div className="flex flex-col gap-6  mt-12 p-2">
          <p className="md:text-4xl text-[25px] font-serif text-stone-600 md:ml-[220px] ml-25 dark:text-gray-200">--Drinks & Wine--</p>
              <p className="text-5xl font-serif text-black md:ml-[280px] ml-27 md:mt-0 mt-[-10px] dark:text-white">Beverage</p>
       <div>
     <MenuCard items={Bedish}/>
   </div></div>
 
    </div>
<Customer />
     

      <div className="bg-blue-950 md:h-[500px] h-[1100px] w-full flex md:flex-row flex-col text-white md:mb-25 ">
        <div className="md:w-1/2 font-sans flex flex-col md:ml-[100px] ml-4  mt-5 md:mt-[80px]">
        <p className="md:text-2xl text-xl font-serif mb-[17px] ">RESERVATION ---</p>
        <p className="md:w-[670px] font-serif md:text-5xl text-3xl mb-[25px]">Reservation Your Favorite Private Table</p>
        <p className="md:w-[670px] md:pr-0 pr-6 font-normal md:text-[18px]">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting</p>
        <div className="flex md:flex-row flex-col md:gap-8">
          <div className="flex flex-col gap-2 border-r mt-[30px] border-gray-500">
            <p className="font-serif text-3xl pr-8">Launch Menu</p>
            <p className="font-normal text-[20px] text-gray-300">30+ Items</p>
</div>
             <div className="flex flex-col gap-2 mt-[30px]">
            <p className="font-serif text-3xl pr-8">Dinner Menu</p>
            <p className="font-normal text-[20px] text-gray-300">50+ Items</p>
          </div>
        </div>
        </div>
            <div className="md:w-[500px] h-[500px] md:p-10 font-normal flex flex-col md:ml-[50px] p-6 bg-gray-900 rounded-[50px] border-2 border-gray-500  mt-[80px]">
              <p>Phone</p>
              <input type="text" placeholder="Your Phone Number"  className="bg-gray-800 h-[40px] rounded-md border-2 border-gray-500 mt-2 mb-4 pl-3 "/>
              <p>Date</p>
              <input type="date" className="bg-gray-800 h-[40px] rounded-md border-2 border-gray-500 mt-2 mb-4 pl-3 "/>
              <p>Time</p>
              <input type="time" className="bg-gray-800 h-[40px] rounded-md border-2 border-gray-500 mt-2 mb-4 pl-3 "/>
              <p>Persons</p>
              <input type="number" placeholder="Number of People" className="bg-gray-800 h-[40px] border-2 border-gray-500 rounded-md mt-2 mb-4 pl-3 "/>
              <button className="bg-amber-600 w-[200px] h-[50px] rounded-md mt-4 text-white font-bold hover:bg-amber-400" onClick={(e)=>{alert("Table Booking SuccessFull")}}>Book A Table</button>
            </div>
        <div></div>
        </div>

  
  <div className="md:px-20 md:border-b-2 md:border-gray-500 ">
    <Aboutus />
  </div>
  <div className="w-full text-white ">
    <Footer />
  </div>
</div>
   
 )
}