"use client"
export default function PMenuCard({imgurl,name,price}) {
    return(

    <div className="flex flex-col items-center hover:bg-white p-6 rounded-3xl w-[250px]">
      <img
        src={imgurl}
        className="w-[180px] h-[160px] object-contain mb-4"
      />
      <h3 className="font-bold text-xl mb-2">{name}</h3>
      <div className="flex justify-between items-center bg-white rounded-full px-4 py-2 w-[80%] mb-4">
        <div className="text-yellow-400 text-lg">★★★★★</div>
        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
         ${price}
        </div>
      </div>
      <p className="text-gray-600 text-sm">
        The hamburger is the original and the best-known burger to date
      </p>
    </div>
    
    )}