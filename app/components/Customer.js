"use client"

export default function Customer() {
    return (

        <div className="w-full items-center justify-center bg-gray-200 px-[100px] py-[60px] font-medium">
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
    )
}