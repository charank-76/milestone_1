"use client"

export default function BlogList({imgurl,title,date,author}) {
    return (
        <div className="flex flex-col border dark:bg-black border-gray-300 bg-white  shadow-md rounded-3xl mt-10 mb-10 w-[1000px] ">
            <img
                src={imgurl}
                className="w-full h-[500px] object-cover rounded-xl"/>
                 <div className="flex gap-8 dark:text-white text-gray-400 text-lg mt-10 px-10 ">
                    <p>{date}</p>
                    <p>👤 {author}</p>
                </div>
                <div className="flex flex-col text-2xl w-full h-[150px] text-md font-light dark:text-white text-gray-500  mt-5 px-10">
                    <p className="text-4xl font-bold text-black dark:text-white ">{title}</p>
                    <p className=" text-lg font-sans mt-5 ">Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now</p>
                </div>
                <button className="bg-green-900 text-white font-bold w-[150px] h-[60px] mt-5 rounded-full mb-10 ml-10 hover:bg-black ">Read More</button>
              </div>
    )
}
