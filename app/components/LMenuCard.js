"use client"

export default function LMenuCard({imgurl,name,desc,sugg,price}) {
    return (
       
            <div className="dark:bg-black flex md:flex-row flex-col border border-gray-300 bg-white p-2 rounded-lg shadow-md  ">
               
                <img
                    src={imgurl}
                    className="w-[120px] h-[120px] md:ml-8 ml-20 mt-2 object-center rounded-full"/>
                    <div className="flex flex-col text-sm w-[300px] h-[100px] text-md font-light dark:text-white text-gray-500 mt-5 ml-[-10px]">
                        <p className="text-3xl font-sans-b dark:text-white text-black">{name}</p>
                        <p className="mt-2"> Ricotta / goat cheese / beetroot</p>
                        <p>{desc}</p>
                    </div>
                    <div className="w-[90px] rounded-[5px] h-[30px] bg-red-600 text-white font-bold ml-25 md:ml-1 md:mr-5 mt-5 px-2 py-1">{sugg}</div>
                    
                    <div className="text-3xl pr-2 font-bold dark:text-white text-black mt-10 p-1 md:ml-15">${price}</div>
            </div>
    
        
    )
}