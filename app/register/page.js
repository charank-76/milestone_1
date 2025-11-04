"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";



export default function Main() {
  const router = useRouter();
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfmpass, setcnfmpass] = useState("");
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>

      <div className="relative w-full h-[450px] flex flex-col items-center justify-center text-center overflow-hidden mt-[90px]">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-60"
          style={{
            backgroundImage:
              "url('https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="z-10">
          <h1 className="text-5xl  hover:text-yellow-300 font-bold mb-4">Register Page</h1>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 dark:bg-black">
        <div className="w-full max-w-5xl dark:bg-stone-800 shadow-lg shadow-gray-500 bg-white rounded-2xl shadow-2xl overflow-hidden flex">
          <div className="w-1/2 relative hidden md:block">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=3840&q=75"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-yellow-700">CREATE AN ACCOUNT </span> 
            </h2>
            <p className="dark:text-white text-gray-500 text-center mb-8">
             Enter your details to create a new account
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email*"
                className=" dark: placeholder-black border text-black bg-white placeholder-black border bg-gray-300  px-4 py-3  text-black border border-blue-400"
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
              />
              <input
                type="password"
                placeholder="Password*"
                className="dark: placeholder-black border text-black bg-white placeholder-black border bg-gray-300  text-black px-4 py-3 border border-blue-400"
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}                
              />
               <input
                type="password"
                placeholder=" Confirm-Password*"
                className="dark: placeholder-black border text-black bg-white placeholder-black border text-black bg-gray-300  px-4 py-3 border border-blue-400"
                 onChange={(e)=>{
                  setcnfmpass(e.target.value)
                }} 
              /></form>
            <button
  type="button"
  className="bg-yellow-800 text-white py-3 rounded-md font-semibold  dark:hover:bg-amber-100 hover:bg-black mt-4 dark:hover:bg-white dark:hover:text-black"
  onClick={(e) => {
    

    if (password === cnfmpass && email !== "") {
      console.log(email);
      console.log(password);
      console.log(cnfmpass);

      register(email, password, cnfmpass);
      router.push("/login"); 
    } else {
      console.log("Login Failed! Invalid credentials.");
      alert("Invalid email or password. Please try again.");
    }
  }}
>
  REGISTER
</button>

            

            <div className="text-center my-6 text-xl font-semibold text-black dark: text-white">Or Register With</div>

            <div className="flex gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-5 py-2">
                <span className="dark:text-white text-black text-xl">Google</span> 
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-5 py-2">
                <span className="text-black text-xl dark:text-white">Facebook</span>
              </button>
            </div>

            <p className="text-center dark:text-white text-gray-600 mt-6">
            Already have an account{" "}
              <span className="text-red-600 cursor-pointer hover:underline" onClick={(e)=>{router.push("/login")}}>
              Login
              </span>
            </p>
          </div>
        </div>
      </div>
       <section className="md:px-20 md:border-b-2 md:border-gray-500">
  <Aboutus/>
</section>
<section className="w-full text-white">
  <Footer/>
  </section>
    </div>
  );
}