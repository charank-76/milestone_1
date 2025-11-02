"use client"

export default function Rlist({imgurl,name,desc}) {
    return(
        <div
        className="w-[250px] h-[250px] p-4 flex items-center flex-col border-2 border-gray-200 rounded-2xl bg-white ">
          
                <img className="w-[100px] h-[100px] rounded-full" src={imgurl}/>
                <h1 className="text-black text-center font-bold p-2 text-2xl">{name}</h1>
                <h1 className="text-black text-center">{desc}</h1>
        </div>
    )
}