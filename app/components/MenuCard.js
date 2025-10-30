"use client "

function MenuCard({ title, description, hprice,fprice, imageUrl ,desc}) { {
  return (
    <div className="bg-white text-2xl text-black flex flex-row p-4 rounded-lg shadow-md menu-card">
      <img src={imageUrl} className="w-[100px] h-[100px]" />
      <div className="ml-[10px] mt-[10px] w-[400px]">
        <div className="font-bold">{title}</div>
        <div >{description}</div>
        </div>
        <div>
          <div className="flex flex-row mt-[5px]">
        <div >${hprice}</div>
        <div className=" ml-[20px] ">${fprice}</div>
        </div>
        <div >{desc}</div>
      </div>
    </div>
  )
}}

export default MenuCard