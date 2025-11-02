"use client"
import Navbar from "../components/Navbar"
import { useRouter } from "next/navigation";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Rlist from "../components/Rlist";

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
      <Navbar/>
      <div className="bg-[url(https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg)]  h-[300px] w-full flex brightness-70 justify-center items-center md:mb-10 font-bold text-white ">
        <div className="flex flex-col brightness-200 items-center">
    <h1 className="text-4xl brightness-100 mt-10">Contact Us</h1>
    <div className="flex">
    <h3 className="hover:text-red-500 cursor-pointer brightness-100" 
    onClick={(e)=>{router.push("/")}}>home</h3>
    <h3>/Contact</h3>
    </div></div>
      </div>

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
        <h1 className="md:text-5xl font-bold text-black text-[30px] mt-[-40px] ">Send us a Massage</h1>
        <form className="flex flex-col gap-6 w-[80%]">
          <input type="text" placeholder="Your Name*" className="border bg-gray-200  border-amber-50 px-4 py-3  text-black rounded-md"/>
          <div className="flex  gap-4">
          <input type="email" placeholder="Your Email*" className="border w-1/2 bg-gray-200  border-amber-50 px-4 py-3 text-black rounded-md"/>
          
          <input type="text" placeholder="Phone*" className="border  bg-gray-200 px-4 border-amber-50 py-3 w-1/2 text-black rounded-md"/></div>
          <textarea placeholder="Your Message*" className="border bg-gray-200 border-amber-50 px-4 py-3  text-black rounded-md h-32"></textarea>
          <button type="submit" className="bg-green-900 text-white py-3 w-50 rounded-md font-semibold hover:bg-black ">Get In Touch</button>
        </form>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-center px-10 py-20 dark:text-white  bg-white text-black">

  <div className="w-full flex justify-center">
    <div className="w-[90%] h-[400px] rounded-xl overflow-hidden">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1&mute=1&loop=1&playlist=F3zw1Gvn4Mk"
        title="YouTube video player"
        allow="autoplay"
    ></iframe>
    </div>
  </div>

  <div className="w-full md:w-1/2 dark:bg-stone-900 bg-white shadow-xl shadow-gray-500 border border-gray-600 rounded-2xl p-10 mt-10 md:mt-[-100px] md:ml-[-100px]">
    <h2 className="  dark:text-white text-3xl font-semibold mb-4">Opening Hours</h2>
    <p className=" dark:text-white text-gray-500 mb-8">
      A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.
      The Patio Time Bar opens in the center.
    </p>

    <div className="space-y-4">
      <div className="flex justify-between border-b border-gray-200 pb-2">
        <p className="font-medium  dark:text-white">Sunday To Tuesday:</p>
        <p className="text-gray-700  dark:text-white">10:00 - 09:00</p>
      </div>
      <div className="flex justify-between border-b border-gray-200 pb-2">
        <p className="font-medium  dark:text-white">Wednesday To Thursday:</p>
        <p className="text-gray-700  dark:text-white">11:30 - 10:30</p>
      </div>
      <div className="flex justify-between border-b border-gray-200 pb-2">
        <p className="font-medium  dark:text-white">Friday & Saturday:</p>
        <p className="text-gray-700  dark:text-white">10:30 - 12:00</p>
      </div>
    </div>

    <div className="flex items-center gap-4 mt-8">
      <div className="bg-red-600 text-white p-4 rounded-full"></div>
      <div>
        <p className="text-gray-500 text-sm  dark:text-white">Call Anytime</p>
        <p className="text-xl font-semibold  dark:text-white">+964733-378901</p>
      </div>
    </div>
  </div>
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