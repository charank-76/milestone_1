"use client";
import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";


export default function Cart() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

     <HeroSection name="Cart Page"/>
       <div className=" dark:bg-black dark:text-white px-10 py-10 min-h-screen  bg-white text-black flex flex-col items-center">
  <table className="border border-gray-200 text-center mb-10 w-[50%]  ">
    <thead className="bg-gray-100 text-gray-700 ">
      <tr>
        <th className="p-4 border border-gray-200">Remove</th>
        <th className="p-4 border border-gray-200">Thumbnail</th>
        <th className="p-4 border border-gray-200">Product</th>
        <th className="p-4 border border-gray-200">Price</th>
        <th className="p-4 border border-gray-200">Quantity</th>
        <th className="p-4 border border-gray-200">Subtotal</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan="2" className="p-4">
          <input
            type="text"
            placeholder="Coupon code"
            className="border dark:bg-white dark:text-black border-gray-300 rounded-md p-2 w-[200px]"
          />  </td>
        <td>  <button className="text-white dark:hover:bg-white dark:hover:text-black  bg-yellow-600 hover:bg-black font-bold w-[130px] h-[40px]  rounded-md">
  Apply Coupon
</button>
        </td>
       
         <td colSpan="2" className="p-4"> 
 <button className=" dark:hover:bg-white dark:hover:text-black text-white bg-yellow-600 hover:bg-black font-bold w-[130px] h-[40px] rounded-md ">
  Checkout
</button>
        </td>
      </tr>
    </tbody>
  </table>

  <div className="max-w-[1200px] mx-auto">
  <h2 className="text-2xl text-center font-bold mb-4">Cart totals</h2>
  <table className="w-full border border-gray-200">
    <tbody>
      <tr>
        <td className="p-3 border border-gray-200 text-center font-semibold">Subtotal</td>
        <td className="p-3 border border-gray-200 text-center">$0.00</td>
      </tr>
      <tr>
        <td className="p-3 border border-gray-200 text-center font-semibold">Shipping</td>
        <td className="p-3 border dark:text-amber-50 border-gray-200 text-center text-gray-600">
          Free shipping <br />
          Shipping to Australia. <br />
          <span className=" dark:text-white dark:hover:text-yellow-300 text-black font-semibold hover:text-stone-500">
            Change address
          </span>
        </td>
      </tr>
      <tr>
        <td className="p-3 border border-gray-200 font-semibold">Total</td>
        <td className="p-3 border border-gray-200 text-right font-bold">$0.00</td>
      </tr>
    </tbody>
  </table>
</div>
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