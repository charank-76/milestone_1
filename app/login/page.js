"use client";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";

export default function Main() {
  const [remail,setRemail] = useState("")
   const [rpassword, setRpassword] = useState("");
   const { login } = useAuth()
  const router = useRouter();
  const {email, password} = useAuth()
  let pass=password;
  let mail=email;
  return (
    <div className="min-h-screen dark:bg-black bg-white text-white">
     <Navbar/>

      <div className="relative w-full h-[400px] flex flex-col items-center justify-center text-center  ">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-60"
          style={{
            backgroundImage:
              "url('https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="z-10">
          <h1 className="text-5xl font-bold mb-4 hover:text-amber-300">Login Page</h1>
        </div>
      </div>

      <div className="min-h-screen dark:bg-black bg-gray-100 flex items-center justify-center p-6">
        <div className="w-full max-w-5xl dark:bg-stone-800 shadow-lg shadow-gray-500 bg-white rounded-2xl shadow-2xl  flex">
          <div className="w-1/2 relative hidden md:block">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=3840&q=75"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-yellow-700">WELCOME BACK</span> 
            </h2>
            <p className="dark:text-white text-gray-500 text-center mb-8">
              Enter your email and password to continue
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email*"
                className="dark: placeholder-black border text-black bg-white placeholder-black border bg-gray-300 text-black px-4 py-3 border border-blue-400"
                onChange={(e)=>{
                  setRemail(e.target.value)
                }}
              />
              <input
                type="password"
                placeholder="Password*"
                className="dark: placeholder-black border text-black bg-white placeholder-black border bg-gray-300 text-black px-4 py-3 border border-blue-400"
               onChange={(e)=>{
                  setRpassword(e.target.value)}}
             />
               </form>
              <button
                type="submit"
                className="bg-yellow-800 text-white py-3 rounded-md font-semibold hover:bg-black mt-4  dark:hover:bg-amber-100 dark:hover:text-black"
                 onClick={(e)=>{
                  if (rpassword == pass && remail == mail) {
      console.log(remail);
      console.log(rpassword);
     

      login(remail,rpassword)
      router.push("/"); 
    } else {
      console.log("Login Failed! Invalid credentials.");
      alert("Invalid email or password. Please try again.");
    }
                 }}
              >
                LOGIN
              </button>
           

            <div className="text-center text-xl font-semibold my-6 text-black dark:text-white">Or Login With</div>

            <div className="flex gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-5 py-2">
                <span className="dark:text-white text-black text-xl">Google</span> 
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-5 py-2">
                <span className="dark:text-white text-black text-xl">Facebook</span>
              </button>
            </div>

            <p className="text-center dark:text-white text-gray-600 mt-6">
              Don’t have any account?{" "}
              <span className="text-red-600 cursor-pointer hover:underline" onClick={(e)=>{router.push("/register")}}>
                Register Now
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