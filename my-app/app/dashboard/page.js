"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/entities/User';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, HeartHandshake, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const features = [
    { icon: Brain, title: "24/7 Support", description: "AI chatbot & resources" },
    { icon: HeartHandshake, title: "Professional Help", description: "Book sessions with counselors" },
    { icon: Share2, title: "Community & Peer Support", description: "Join discussion forums" }
  ];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await User.me();
        setUser(currentUser);
      } catch (e) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleLogin = () => {
    router.push('/login');
  }

  const guestAction = (e) => {
    e.preventDefault();
    handleLogin();
  }

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen"><p>Loading...</p></div>;
  }

  const isGuest = !user;

  return (
    <div className="container px-6 py-8">
      {user ? (
        <h1 className="text-3xl font-bold mb-8">
          Hi {user.full_name?.split(' ')[0] || 'User'}, how was your day?
        </h1>
      ) : (
        <div className="text-center my-8">
            <h1 className="text-3xl font-bold mb-2">Welcome to MindEase</h1>
            <p className="text-lg text-gray-300">Your space for mental well-being. <Button variant="link" onClick={handleLogin} className="text-blue-300 p-0">Login</Button> to unlock all features.</p>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Link href={isGuest ? "#" : "/ai"} onClick={isGuest ? guestAction : undefined}>
          <Card className={`text-white h-full transition-all duration-300 shadow-lg border-0 ${isGuest ? 'bg-gray-500 cursor-not-allowed opacity-60' : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'}`}>
            <CardHeader className="text-center pb-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">Start Chat with AI</CardTitle>
            </CardHeader>
            <CardContent className="text-center p-6 pt-0">
              <p className="text-sm opacity-90 mb-4">Get instant support from our AI companion</p>
              {isGuest && <p className="text-xs opacity-80">Login to access the AI Chatbot.</p>}
            </CardContent>
          </Card>
        </Link>
        <Link href={isGuest ? "#" : "/appoin"} onClick={isGuest ? guestAction : undefined}>
          <Card className={`text-white h-full transition-all duration-300 shadow-lg border-0 ${isGuest ? 'bg-gray-500 cursor-not-allowed opacity-60' : 'bg-green-500 hover:bg-green-600 cursor-pointer'}`}>
            <CardHeader className="text-center pb-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">Book Appointment</CardTitle>
            </CardHeader>
            <CardContent className="text-center p-6 pt-0">
              <p className="text-sm opacity-90 mb-4">Schedule sessions with certified counselors</p>
              {isGuest && <p className="text-xs opacity-80">Login to book an appointment.</p>}
            </CardContent>
          </Card>
        </Link>
        <Link href={isGuest ? "#" : "/community"} onClick={isGuest ? guestAction : undefined}>
          <Card className={`text-white h-full transition-all duration-300 shadow-lg border-0 ${isGuest ? 'bg-gray-500 cursor-not-allowed opacity-60' : 'bg-purple-500 hover:bg-purple-600 cursor-pointer'}`}>
            <CardHeader className="text-center pb-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">Community</CardTitle>
            </CardHeader>
            <CardContent className="text-center p-6 pt-0">
              <p className="text-sm opacity-90 mb-4">Connect with others and share experiences</p>
              {isGuest && <p className="text-xs opacity-80">Login to join the community.</p>}
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why This Platform?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="p-6 bg-white/20 rounded-full mb-4">
                    <feature.icon className="w-10 h-10"/>
                </div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
