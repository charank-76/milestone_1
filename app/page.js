"use client";
import Navbar from "./components/Navbar";
import PMenuCard from "./components/PMenuCard";

export default function Home() {
  const PMenu=[
    {
      name:"Hamburger",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F9.png&w=1080&q=75",
      price:12
    },
    {
      name:"Chicken Burger",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F10.png&w=1080&q=75",
      price:16
    },
    {
      name:"Cheese Burger",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F11.png&w=1080&q=75",
      price:25
    },
    {
      name:"Bacon Burger",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F12.png&w=1080&q=75",
      price:18
    }
  ]
  return (
    <div className="min-h-screen bg-white text-black">
   <Navbar/>

      <div className="flex items-center justify-between px-20 pt-32">
        <div className="flex flex-col gap-4"></div>
        <div className="relative">
          <img
            src="https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg"
            className="w-[1300px] h-[700px] rounded-2xl object-cover"
          />
          <div className="absolute top-10 left-10 flex flex-col justify-center items-start pl-24"> <h2 className="text-red-500 text-2xl font-semibold">Super Delicious</h2>
          <h1 className="text-6xl font-extrabold text-white">Burger</h1></div>
          <div className="absolute top-10 right-10 bg-red-500 text-white rounded-lg px-6 py-4 text-center">
            <p className="text-sm">up to</p>
            <h3 className="text-3xl font-bold">50% OFF</h3>
          </div>
        </div>
      </div>
     <section className="px-20 py-24 bg-white text-black">
  <div className="text-center mb-12">
    <p className="text-red-500 font-semibold tracking-widest mb-2">── ABOUT US ──</p>
    <h2 className="text-4xl font-bold leading-snug">
      The best burgers offer a <br /> combination of tastes.
    </h2>
  </div>

  <div className="flex flex-col lg:flex-row gap-10">
    <div className="flex-1 flex gap-6">
      <img
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F11.jpg&w=1200&q=75"
        className="rounded-2xl w-1/2 h-[620px] object-cover"
      />
      <div className="flex flex-col justify-between w-1/2 gap-6">
        <div className="bg-red-500 text-white rounded-2xl flex flex-col justify-center items-center p-10 h-[300px]">
          <h3 className="text-6xl font-bold">18+</h3>
          <p className="text-lg mt-4 font-medium">Types Of Burger</p>
        </div>
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F10.jpg&w=1200&q=75"
           className="rounded-2xl w-full h-[300px] object-cover"
        />
      </div>
    </div>

    <div className="flex-1 flex flex-col justify-center gap-8">
      <p className="text-gray-700">
        New had happen unable uneasy. Drawings can followed improved out sociable not.
        Earnestly so do instantly pretended. See general few civilly amiable pleased
        account carried. Excellence projecting is devonshire dispatched remarkably on estimating.
      </p>

      <div className="flex flex-col gap-6">
        <div className="border rounded-2xl p-6 flex items-start gap-4 shadow-sm">
          <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full text-xl">
            <img
            src="https://thumbs.dreamstime.com/b/delivery-service-icon-logo-dark-background-white-delivery-service-icon-logo-dark-background-132225950.jpg"
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold">Online Food Delivery</h4>
            <p className="text-gray-600">
              Excellence projecting is devonshire dispatched remarkably on estimating.
            </p>
          </div>
        </div>

        <div className="border rounded-2xl p-6 flex items-start gap-4 shadow-sm">
          <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full text-xl">
            <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full text-xl">
            <img
            src="https://www.shutterstock.com/image-illustration/white-burger-on-black-background-600w-1069527875.jpg"
            />
          </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Authentic Food</h4>
            <p className="text-gray-600">
              Regularity projecting is devonshire dispatched remarkably on estimating.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-20 px-12 bg-gray-200 text-black text-center">
  <p className="text-red-500 font-semibold tracking-widest mb-2">── OUR SPECIAL ──</p>
  <h2 className="text-4xl font-bold mb-12">Popular Burger</h2>

  <div className="flex justify-center gap-10 flex-wrap">
    {PMenu.map((element) =>{
            return(
                <PMenuCard
              key={element.name}
                name={element.name}
                imgurl={element.imgurl}
                 price={element.price}
              
                />      
            )
        }
    )}
   
  </div>
</section>
<section className="bg-black flex justify-center items-center gap-10 py-16">
  <div className="relative w-[500px] h-[250px] rounded-3xl ">
    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fdeal%2F1.jpg&w=1920&q=75"
      className="absolute inset-0 w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-red-900"></div>
    <div className="relative z-10 text-white flex flex-col justify-center items-start h-full px-8 space-y-3">
      <p className="italic text-lg">Eat Sleep And</p>
      <h2 className="text-4xl font-bold ">DREAM<br />BURGER</h2>
      <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white">
        Accept This Deal
      </button>
      <div className="absolute top-5 right-8 text-xl font-bold">$35.00</div>
    </div>
  </div>

  <div className="relative w-[500px] h-[250px] rounded-3xl ">
    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fdeal%2F2.jpg&w=1920&q=75"
      className="absolute inset-0 w-full h-full object-cover "
    />
    <div className="absolute inset-0 bg-yellow-300"></div>
    <div className="absolute top-5 right-5 bg-white text-red-600 font-bold rounded-xl px-3 py-1 text-center z-10">
      <div className="text-2xl">50</div>
      <div className="text-sm">OFF</div>
    </div>
    <div className="relative z-10 text-white flex flex-col justify-center items-start h-full px-8 space-y-3">
      <p className="italic text-lg">Best deal ever</p>
      <h2 className="text-4xl font-bold ">LUGER<br />BURGER</h2>
      <button className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-black">
        Accept This Deal
      </button>
    </div>
  </div>
</section>






    </div>
  );
}
