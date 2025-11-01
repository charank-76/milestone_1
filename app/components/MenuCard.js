"use client "

function MenuCard({ title, description, hprice,fprice, imageUrl ,desc}) { {
  return (
    <div className="dark:bg-stone-900  dark:text-white bg-white md:text-2xl text-black flex flex-row p-4 rounded-lg shadow-md menu-card">
      <img src={imageUrl} className="w-[100px] h-[100px]" />
      <div className="ml-[10px] mt-[10px] w-[400px]">
        <div className="font-bold  ">{title}</div>
        <div className="text-gray-500 text-[20px]">{description}</div>
        </div>
        <div>
          <div className="flex flex-row mt-[5px] dark:text-amber-600 text-green-800">
        <div >${hprice}</div>
        <div className=" ml-[20px]  dark:text-amber-600 text-green-800">${fprice}</div>
        </div>
        <div className="text-gray-500 text-[20px]">{desc}</div>
      </div>
    </div>
  )
}}

export default MenuCard