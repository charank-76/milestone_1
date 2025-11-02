"use client"

import { useRouter } from "next/navigation";
export default function WH(){
    return(
        <div className="flex flex-col lg:flex-row items-center justify-center px-10 py-20 dark:text-white  bg-white text-black">

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
</div>
    )
}