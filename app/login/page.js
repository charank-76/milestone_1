"use client";

import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-black text-white">
     <Navbar/>

      <div className="relative w-full h-[400px] flex flex-col items-center justify-center text-center  mt-[90px]">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-60"
          style={{
            backgroundImage:
              "url('https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="z-10">
          <h1 className="text-5xl font-bold mb-4">Login Page</h1>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex">
          <div className="w-1/2 relative hidden md:block">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=3840&q=75"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-center mb-2">
              <span className="text-yellow-700">WELCOME BACK</span> BACK
            </h2>
            <p className="text-gray-500 text-center mb-8">
              Enter your email and password to continue
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email*"
                className=" placeholder-black border bg-gray-300  px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                placeholder="Password*"
                className=" placeholder-black border bg-gray-300  px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
               </form>
              <button
                type="submit"
                className="bg-yellow-800 text-white py-3 rounded-md font-semibold hover:bg-black mt-4"
                 onClick={(e)=>{router.push("/")}}
              >
                LOGIN
              </button>
           

            <div className="text-center my-6 text-black">Or Login With</div>

            <div className="flex gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-5 py-2">
                <span className="text-black text-xl">Google</span> 
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-5 py-2">
                <span className="text-black text-xl">Facebook</span>
              </button>
            </div>

            <p className="text-center text-gray-600 mt-6">
              Don’t have any account?{" "}
              <span className="text-red-600 cursor-pointer hover:underline">
                Register Now
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}