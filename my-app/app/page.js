"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageSquare, Calendar, BookOpen } from 'lucide-react';
import { User } from '@/entities/User';

export default function HomePage() {
  const router = useRouter();
  const [visitCount, setVisitCount] = useState(0);

  const handleGetStarted = () => {
    setVisitCount(visitCount + 1);
    router.push('/login');
  };

  const features = [
    { icon: MessageSquare, title: 'AI chatbot', description: 'Ask anything, get instant support', color: 'text-blue-300' },
    { icon: Calendar, title: 'Appointment Booking', description: 'Schedule with a counsellor', color: 'text-green-300' },
    { icon: BookOpen, title: 'Resource library', description: 'Videos, relaxation audios, coping skills', color: 'text-yellow-300' }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary text-white">
      {/* This is a self-contained page with no header from the main layout */}
      <div className="container px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight mb-6">
              YOUR DIGITAL COMPANION FOR MENTAL WELL-BEING
            </h1>
            <ul className="space-y-3 text-lg mb-8">
              <li className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                Confidential
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                Accessible
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                Stigma Free
              </li>
            </ul>
            <Button onClick={handleGetStarted} size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-6">
              Get Started
            </Button>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
             {/* Using a proper illustration that represents mental health and wellbeing */}
            <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="text-8xl">🧠</div>
              <div className="absolute top-8 right-8 text-4xl animate-pulse">💙</div>
              <div className="absolute bottom-8 left-8 text-3xl animate-bounce">✨</div>
              <div className="absolute top-16 left-16 text-2xl">🌟</div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center mt-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white-opacity p-6 rounded-lg">
              <feature.icon className={`w-12 h-12 mx-auto mb-4 ${feature.color}`}/>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
       <footer className="bg-black-opacity">
        <div className="container px-6 py-4 text-center text-gray-400">
          © Copyright 2025 - All rights reserved
        </div>
      </footer>
    </div>
  );
}
