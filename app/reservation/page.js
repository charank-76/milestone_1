"use client"
import Navbar from "../components/Navbar"
import { useRouter } from "next/navigation";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Rlist from "../components/Rlist";
import WH from "../components/wh";
import HeroSection from "../components/HeroSection";

export default function ReservationPage() {
    const Reserv=[
    {
      name:"Hotline",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=640&q=75",
      desc:"+4733378901"
    },
    {
      name:"Our Location",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=640&q=75",
      desc:"55 Main Street, The Grand Avenue 2nd Block, New York City"
    },
    {
      name:"Official Email",
      imgurl:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=640&q=75",
      desc:"info@restan.com"
    }
  ]
    const router = useRouter()
return(
    
    <div className="bg-white  w-full min-h-screen flex flex-col md:items-center  ">
       <section className="fixed top-0 left-0 right-0 z-50">
    <Navbar/>
  </section>
      <HeroSection name="Contact Us"/>

      <section
      className=" flex md:flex-row flex-col gap-20 p-10 bg-white items-center justify-center">
        {Reserv.map((item)=>(
          <Rlist 
          key={item.name}
          imgurl={item.imgurl}
           name={item.name}
            desc={item.desc}/>
        ))}
      </section>
      <section className="md:w-[800px]  border-2 border-gray-200   mb-10 flex flex-col bg-white items-center pb-4 rounded-[30px] shadow-lg shadow-gray-500   gap-10">
        <div className="md:text-4xl font-serif text-stone-600 p-4 text-[25px]  ">---Keep in touch---</div>
        <h1 className="md:text-5xl font-bold text-black text-[30px] mt-[-40px] ">Send us a Message</h1>
        <form className="flex flex-col gap-6 w-[80%]">
          <input type="text" placeholder="Your Name*" className="border bg-gray-200  border-amber-50 px-4 py-3  text-black rounded-md"/>
          <div className="flex  gap-4">
          <input type="email" placeholder="Your Email*" className="border w-1/2 bg-gray-200  border-amber-50 px-4 py-3 text-black rounded-md"/>
          
          <input type="text" placeholder="Phone*" className="border  bg-gray-200 px-4 border-amber-50 py-3 w-1/2 text-black rounded-md"/></div>
          <textarea placeholder="Your Message*" className="border bg-gray-200 border-amber-50 px-4 py-3  text-black rounded-md h-32"></textarea>
          <button type="submit" className="bg-green-900 text-white py-3 w-50 rounded-md font-semibold hover:bg-black ">Get In Touch</button>
        </form>
      </section>

    <section>
        <WH/>
    </section>
<section className="md:px-20 md:border-b-2  md:border-gray-500  ">
  <Aboutus/>
</section>
<section className="w-full text-white">
  <Footer/>

</section>
      </div>
)
}