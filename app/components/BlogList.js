"use client"

export default function BlogList({imgurl,title,date,author}) {
    return (
        <div className="flex flex-col border dark:bg-stone-800 border-gray-300 bg-white  shadow-md shadow-gray-500 h-[800px] md:h-[850px] rounded-3xl mt-10 mb-10 md:w-[1000px]  ">
            <img
                src={imgurl}
                className="w-full md:h-[500px] object-cover rounded-xl"/>
                 <div className="flex gap-8 dark:text-white text-gray-400 text-lg md:mt-10 mt-5 px-4 md:px-10 ">
                    <p>{date}</p>
                    <p>👤 {author}</p>
                </div>
                <div className="flex flex-col text-2xl w-full h-[150px] text-md font-light dark:text-white text-gray-500 px-4 mt-5 md:px-10">
                    <p className="text-4xl font-bold text-black dark:text-white ">{title}</p>
                    <p className=" text-lg font-sans mt-5 ">Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now</p>
                </div>
                <button className="bg-green-900 dark:bg-amber-600 text-white font-bold w-[150px] h-[60px] md:mt-5 mt-40 rounded-full mb-10 ml-4 md:ml-10 hover:bg-black ">Read More</button>
              </div>
    )
}
