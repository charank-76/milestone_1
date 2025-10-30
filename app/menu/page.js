"use client";
import MenuCard from "../components/MenuCard";
import Aboutus from "../components/Aboutus";

import {useState} from 'react'
import Footer from "../components/Footer";

export default function MenuPage() {
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

 return(<div className="bg-white w-full min-h-screen flex flex-col items-center  ">
  <div className="bg-[url(https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg)]  h-[300px] w-full flex justify-center items-center mb-10 font-bold text-white ">
    <div className="flex flex-col items-center">
<h1 className="text-4xl">Food Menu</h1>
<h3>home/food menu</h3></div>
  </div>
    <div className="flex flex-row mb-10 mt-10">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbanner%2F1.jpg&w=640&q=75" className="w-[600px] h-[700px] rounded-[50px]"/>
       <div  className="w-[200px] h-[170px] bg-amber-800 rounded-[100px] mt-[150px] ml-[-120px] flex flex-col text-amber-100 ">
        <h1 className="font-bold text-5xl ml-[30px] mt-[25px]">Menu</h1>
        <h1 className="font-bold text-4xl ml-[20px] mt-[20px]">Breakfast</h1>
       </div>
      <div className="flex flex-col gap-6 mt-10">
        {Bdish.map((element) =>{
            return(
                <MenuCard
              key={element.title}
                title={element.title}
                description={element.description}
                hprice={element.hprice}
                 fprice={element.fprice}
                imageUrl={element.imageUrl}
                desc={element.desc}
                />      
            )
        }
    )}</div>
    </div>

     <div className="flex flex-row mb-10 ml-[-480px] mt-12">
            <div className="flex flex-col gap-6 mr-[80px] mt-10">
        {Ldish.map((element) =>{
            return(
                <MenuCard
              key={element.title}
                title={element.title}
                description={element.description}
                hprice={element.hprice}
                 fprice={element.fprice}
                imageUrl={element.imageUrl}
                desc={element.desc}
                />      
            )
        }
    )}</div>
    
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbanner%2F1.jpg&w=640&q=75" className="w-[600px] h-[700px] rounded-[50px]"/>
       <div  className="w-[190px] h-[170px] bg-amber-800 rounded-[100px] mt-[150px] ml-[-680px] flex flex-col text-amber-100 ">
        <h1 className="font-bold text-5xl ml-[30px] mt-[25px]">Menu</h1>
        <h1 className="font-bold text-4xl ml-[35px] mt-[20px]">Lunch</h1>
       </div>
 
    </div>
    <div className="flex flex-row mb-10 gap-2 mt-2">
            <div className="flex flex-col gap-6 mt-10 border-r-2 border-gray-500 p-4">
               <p className="text-4xl font-serif text-stone-600 ml-[200px]">--Fresh from ocean--</p>
              <p className="text-5xl font-serif text-black ml-[280px]">Sea Food</p>
        {Sdish.map((element) =>{
            return(
                <MenuCard
              key={element.title}
                title={element.title}
                description={element.description}
                hprice={element.hprice}
                 fprice={element.fprice}
                imageUrl={element.imageUrl}
                desc={element.desc}
                />      
            )
        }
    )}</div>
    
         <div className="flex flex-col gap-6  mt-12 p-2">
          <p className="text-4xl font-serif text-stone-600 ml-[220px]">--Drinks & Wine--</p>
              <p className="text-5xl font-serif text-black ml-[280px]">Beverage</p>
        {Bedish.map((element) =>{
            return(
                <MenuCard
              key={element.title}
                title={element.title}
                description={element.description}
                hprice={element.hprice}
                 fprice={element.fprice}
                imageUrl={element.imageUrl}
                desc={element.desc}
                />      
            )
        }
    )}</div>
 
    </div>




    <div className="bg-black h-[500px] w-full flex   font-bold text-white ">
    <div className="flex flex-row items-center">
        <div className="flex flex-col w-[800px] ml-20">
            <div className="font-bold text-7xl text-gray-50 w-[400px] ">30 Minutes Delivery!</div>
            <div className="text-gray-300 font-normal mt-5 w-[500px] ">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.</div>
              <div className="bg-amber-800 w-[200px] h-[60px] rounded-lg flex justify-center items-center text-white font-bold text-2xl mt-10 cursor-pointer hover:bg-amber-600 ">Order Now</div>    
        </div>
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=1920&q=75" className="w-[400px] h-[400px] rounded-[50px] ml-10"/>
</div>
  </div>



<div className="w-full items-center justify-center bg-gray-100 px-[100px] py-[60px] font-medium">
      <p className="text-amber-600  text-[25px] ml-[500px] mb-[8px] font-semibold  ">
          Happy Customers
        </p>

        <h1 className="text-[40px] font-bold ml-[380px] mb-[50px] text-black ">
          Our Customers Feedback
        </h1>



    <div className="flex flex-row mb-20  items-center justify-center ">
  
     <div className=" mr-[50px] ">
     
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F4.jpg&w=640&q=75"
          alt="Main"
          className="w-[400px] h-[450px] rounded-[30px] object-cover shadow-2xl shadow-gray-600"
        />

       
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75"
          alt="Customer1"
          className="w-[70px] h-[70px]  mt-[-320px] ml-[350px] mb-[50px] rounded-full border-4 border-white shadow-lg object-cover  "
        />
        <img
          src="https://th.bing.com/th/id/OIP.A3rJ-nO5s3Bv2qCF2r3thAHaEK?w=208&h=117&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt="Customer2"
          className="w-[80px] h-[80px] mb-[25px] ml-[350px] rounded-full border-4 border-white shadow-lg object-cover   "
        />
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75"
          alt="Customer3"
          className="w-[70px] h-[70px]  ml-[370px] rounded-full border-4 border-white shadow-lg object-cover   "
        />
      </div>

      
      <div className="w-[550px] ">
       

        <div className="flex items-center gap-8  mb-[10px]  text-[30px] text-amber-500">
          <p>⭐⭐⭐⭐⭐</p>
          <span className="text-[16px] text-amber-950 font-semibold">(5/5)</span>
        </div>

        <h2 className="text-[35px] font-semibold text-gray-900 mb-[15px]">
          The best food ever
        </h2>

        <p className="text-amber-800 text-[20px]  mb-[30px]">
          “Targeting consultation discover apartments. Indulgence off under folly
          death wrote cause her way spite. Plan upon yet way get cold spot its week.
          Almost do am or limits hearts. Resolve parties but why she shewing.”
        </p>

        <div>
          <h3 className="text-[22px] font-semibold text-black">
            Matthew J. Wyman
          </h3>
          <p className="text-[20px] text-amber-600 font-medium">
            Senior Consultant
          </p>
        </div>

        
        <div className="flex gap-[10px] mt-[25px]">
          <div className="w-[10px] h-[10px] rounded-full bg-amber-500" />
          <div className="w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="w-[10px] h-[10px] rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
    </div>
     

      <div className="bg-blue-950 h-[500px] w-full flex text-white mb-25 ">
        <div className="w-1/2 font-sans flex flex-col ml-[100px]  mt-[80px]">
        <p className="text-2xl font-serif mb-[17px] ">RESERVATION ---</p>
        <p className="w-[670px] font-serif text-5xl  mb-[25px]">Reservation Your Favorite Private Table</p>
        <p className="w-[670px] font-normal text-[18px]">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting</p>
        <div className="flex gap-8">
          <div className="flex flex-col gap-2 border-r mt-[30px] border-gray-500">
            <p className="font-serif text-3xl pr-8">Launch Menu</p>
            <p className="font-normal text-[20px]">30+ Items</p>
</div>
             <div className="flex flex-col gap-2 mt-[30px]">
            <p className="font-serif text-3xl pr-8">Dinner Menu</p>
            <p className="font-normal text-[20px]">50+ Items</p>
          </div>
        </div>
        </div>
            <div className="w-[500px] h-[500px] p-10 font-normal flex flex-col ml-[50px] bg-gray-900 rounded-[50px] border-2 border-gray-500  mt-[80px]">
              <p>Phone</p>
              <input type="text" placeholder="Your Phone Number"  className="bg-gray-800 h-[40px] rounded-md border-2 border-gray-500 mt-2 mb-4 pl-3 "/>
              <p>Date</p>
              <input type="date" className="bg-gray-800 h-[40px] rounded-md border-2 border-gray-500 mt-2 mb-4 pl-3 "/>
              <p>Time</p>
              <input type="time" className="bg-gray-800 h-[40px] rounded-md border-2 border-gray-500 mt-2 mb-4 pl-3 "/>
              <p>Persons</p>
              <input type="number" placeholder="Number of People" className="bg-gray-800 h-[40px] border-2 border-gray-500 rounded-md mt-2 mb-4 pl-3 "/>
              <button className="bg-amber-600 w-[200px] h-[50px] rounded-md mt-4 text-white font-bold hover:bg-amber-400">Book A Table</button>
            </div>
        <div></div>
        </div>
<div className="flex flex-col">
  
  <div className="px-20 border-b-2 border-gray-500 ">
    <Aboutus />
  </div>

  {/* Footer Section */}
  <div className="w-full  ">
    <Footer />
  </div>
</div>


    </div>
   
 )
}