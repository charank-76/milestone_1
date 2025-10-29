"use client"; // Fixed the Client Component error

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct Next.js router hook
// Corrected: Using FaBrain for the logo (removing the unstable SiMindmup import)
import { FaVideo, FaGamepad, FaFileAlt, FaUserCheck, FaPhoneVolume, FaArrowLeft, FaBlog, FaBrain } from 'react-icons/fa';


// Data Array: Defines all card properties, including the 'path'
const libraryItems = [
    { 
        id: 1, 
        name: 'Videos / Audio', 
        icon: <FaVideo className="text-5xl text-red-500" />, 
        path: '/resource/videos-audio',
        mainColor: 'bg-red-700/30',
        hoverScale: 'scale-[1.05]',
        layoutClass: 'col-span-1',
    },
    { 
        id: 2, 
        name: 'Article', 
        icon: <FaBlog className="text-5xl text-blue-400" />, 
        path: '/resource/articles', 
        mainColor: 'bg-blue-600/30',
        hoverScale: 'scale-[1.05]',
        layoutClass: 'col-span-1',
    },
    { 
        id: 3, 
        name: 'Games', 
        icon: <FaGamepad className="text-5xl text-gray-400" />, 
        path: '/resource/games', 
        mainColor: 'bg-gray-600/30',
        hoverScale: 'scale-[1.10]', 
        layoutClass: 'col-span-2 lg:col-span-1 lg:row-start-2 lg:col-start-2 -mt-12 lg:mt-0',
    },
    { 
        id: 4, 
        name: 'Take Assessment', 
        icon: <FaUserCheck className="text-5xl text-yellow-500" />, 
        path: '/resource/assessment', 
        mainColor: 'bg-yellow-600/30',
        hoverScale: 'scale-[1.05]',
        layoutClass: 'col-span-1 lg:row-start-3',
    },
    { 
        id: 5, 
        name: 'Emergency Contact', 
        icon: <FaPhoneVolume className="text-5xl text-red-600" />,
        path: '/resource/emergency-contact', 
        mainColor: 'bg-red-800/30',
        hoverScale: 'scale-[1.05]',
        layoutClass: 'col-span-1 lg:row-start-3',
    },
];

// Reusable Card Component
const LibraryCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        router.push(item.path);
    };

    const cardClasses = `
        w-full h-36 lg:w-48 lg:h-40 p-6 flex flex-col items-center justify-center
        rounded-2xl text-white font-semibold text-lg cursor-pointer
        transition-all duration-300 transform shadow-xl
        ${item.mainColor}
        ${isHovered
            ? `${item.hoverScale} shadow-3xl border-2 border-white/50 ring-2 ring-white/30`
            : 'scale-100 border-2 border-transparent'
        }
    `;

    return (
        <div className={item.layoutClass}>
            <div
                className={cardClasses}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleClick}
                role="button"
                tabIndex="0"
                aria-label={`Open ${item.name} section`}
            >
                <div className="mb-3">{item.icon}</div>
                <p className="text-center mt-2 text-sm lg:text-base">{item.name}</p>
            </div>
        </div>
    );
};


// Main Page Component
export default function LibrariesPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-primary p-4">

            {/* Header Section */}
            <header className="flex justify-between items-center py-4 px-2 text-white">
                <div
                    className="text-lg font-medium cursor-pointer flex items-center space-x-2 hover:text-gray-300"
                    onClick={() => router.push("/")}
                >
                    Home
                </div>
                <div className="flex items-center space-x-2">
                    {/* FIX APPLIED: Using FaBrain (or another stable Fa icon) */}
                    <FaBrain className="text-3xl text-green-400" />
                    <span className="text-xl font-bold">MindEase</span>
                </div>
                <div className="w-12"></div>
            </header>

            <h1 className="text-4xl font-bold text-white mt-8 mb-12 px-2">
                Libraries
            </h1>

            {/* Libraries Grid Layout */}
            <main
                className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto pb-16"
            >
                {libraryItems.map((item) => (
                    <LibraryCard key={item.id} item={item} />
                ))}
            </main>

            {/* Back Button */}
            <div className="fixed bottom-4 left-4">
                <button
                    onClick={() => router.back()} // Next.js router.back()
                    className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition duration-300 shadow-lg"
                    aria-label="Go back"
                >
                    <FaArrowLeft className="mr-2" />
                    Back
                </button>
            </div>
        </div>
    );
}
