"use client"

export default function Customer() {
    return (

        <div className="w-full items-center justify-center dark:bg-stone-800 bg-gray-200 md:px-[100px] md:py-[60px] md:h-[700px] font-medium pb-5 pt-5 md:pb-0 md:pt-0">
      <p className="text-amber-600 text-[20px] md:pt-4 ml-30 md:text-[25px] md:ml-[500px] mb-[8px]  font-semibold  ">
          Happy Customers
        </p>

        <h1 className="md:text-[40px] text-[30px] font-bold md:ml-[380px] ml-20 mb-[50px] dark:text-white text-black ">
          Our Customers Feedback
        </h1>



    <div className="flex flex-col md:flex-row mb-20  items-center justify-center ">
  
     <div className=" md:mr-[50px] p-4 md:p-0">
     
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F4.jpg&w=640&q=75"
          alt="Main"
          className="w-[400px] h-[450px] rounded-[30px] object-cover md:p-0 md:mt-0 mt-[-30px] shadow-2xl shadow-gray-600"
        />

       
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75"
          alt="Customer1"
          className="w-[70px] h-[70px]  mt-[-320px] ml-[350px] mb-[50px] hidden md:block rounded-full border-4 border-white shadow-lg object-cover  "
        />
        <img
          src="https://th.bing.com/th/id/OIP.A3rJ-nO5s3Bv2qCF2r3thAHaEK?w=208&h=117&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt="Customer2"
          className="w-[80px] h-[80px] mb-[25px] ml-[350px] rounded-full hidden md:block border-4 border-white shadow-lg object-cover   "
        />
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75"
          alt="Customer3"
          className="w-[70px] h-[70px]  ml-[370px] hidden md:block rounded-full border-4 border-white shadow-lg object-cover   "
        />
      </div>

      
      <div className="md:w-[550px] items-center md:items-start  md:mt-0 mt-10  flex flex-col ">
       

        <div className="flex items-center gap-8  mb-[10px]  text-[30px] text-amber-500">
          <p>⭐⭐⭐⭐⭐</p>
          <span className="text-[16px] text-red-500 font-semibold">(5/5)</span>
        </div>

        <h2 className="text-[35px] font-semibold dark:text-blue-500 text-gray-900 mb-[15px]">
          The best food ever
        </h2>

        <p className="text-amber-800 md:text-[20px] dark:text-white md:px-0 px-2 mb-[30px]">
          “Targeting consultation discover apartments. Indulgence off under folly
          death wrote cause her way spite. Plan upon yet way get cold spot its week.
          Almost do am or limits hearts. Resolve parties but why she shewing.”
        </p>

        <div>
          <h3 className="text-[22px] font-semibold dark:text-white text-black">
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