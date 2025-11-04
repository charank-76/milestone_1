"use client"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";
import BlogList from "../components/BlogList";

export default function Blog() {
    const blogs = [
        {
            imgurl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75",
            title: "Picked up a Brussels burger Sprouts.",
            date: "12 August, 2024",
            author: " john Baus"
        },
        {
            imgurl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2-full.jpg&w=3840&q=75",
            title: "This prefabricated passive house highly",
            date: "13 August, 2024",
            author: "Admin"
        },
        {
            imgurl: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3.jpg&w=1920&q=75",
            title: "The best food recipes for you",
            date: "14 August, 2024",
            author: " john Baus"
        }]
  return (
    <div className="bg-white dark:bg-stone-900 w-full min-h-screen flex flex-col items-center   ">
<section className="fixed inset-0 z-50">
    <Navbar/>
  </section>
         <div className="flex flex-col  mt-20 md:px-0 px-4 ">
                {blogs.map((element) =>{
                    return(
                        <BlogList
                      key={element.title}
                        title={element.title}
                       
                        date={element.date}
                        author={element.author}
                        imgurl={element.imgurl}
                        
                        />      
                    )
                }
            )}</div>
            <div className="flex gap-2 mt-10 mb-10   ">
                <button className="bg-green-900 text-white px-4 py-2 rounded-md hover:bg-black ">1</button>
                <button className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-black hover:text-white ">2</button>
                <button className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-black hover:text-white ">3</button>
                 <button className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-black hover:text-white ">➜</button>

            </div>
<div className="md:px-20  md:border-b-2 md:border-gray-500"><Aboutus /></div>

        <Footer  />
        </div>
        )}