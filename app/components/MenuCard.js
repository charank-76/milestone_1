"use client";

export default function MenuCard({ items }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="dark:bg-stone-900 dark:text-white bg-white md:text-2xl text-black flex flex-row p-4 rounded-lg shadow-md menu-card"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-[100px] h-[100px] rounded-lg object-cover"
          />
          <div className="ml-[10px] mt-[10px] w-[400px]">
            <div className="font-bold">{item.title}</div>
            <div className="text-gray-500 text-[20px]">{item.description}</div>
          </div>
          <div className="flex flex-col justify-center ml-auto text-right">
            <div className="flex flex-row mt-[5px] dark:text-amber-600 text-green-800 justify-end">
              <div>${item.hprice}</div>
              <div className="ml-[20px] dark:text-amber-600 text-green-800">${item.fprice}</div>
            </div>
            <div className="text-gray-500 text-[20px]">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
