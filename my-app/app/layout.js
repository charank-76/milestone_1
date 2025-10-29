"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { User } from '@/entities/User';
import { Button } from '@/components/ui/button';
import './globals.css';

import RegistrationPopup from './components/RegistrationPopup';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`text-white hover:text-gray-300 transition-colors ${isActive ? 'font-bold border-b-2 border-white' : ''}`}
    >
      {children}
    </Link>
  );
};

export default function Layout({ children }) {
  const [user, setUser] = React.useState(null);
  const [showRegistrationPopup, setShowRegistrationPopup] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await User.me();
        setUser(currentUser);
        // Show popup for new users who haven't set their user_type
        if (currentUser && !currentUser.user_type) {
          setShowRegistrationPopup(true);
        }
      } catch (e) {
        setUser(null);
      }
    };
    fetchUser();
  }, [pathname]);
  
  const handleLogin = () => {
    router.push('/login');
  };

  const handleLogout = async () => {
    await User.logout();
    setUser(null);
    router.push('/');
  }

  const handleRegistrationAccept = async (userType) => {
    try {
      await User.updateMyUserData({ user_type: userType });
      const updatedUser = await User.me();
      setUser(updatedUser);
      setShowRegistrationPopup(false); // Close popup after successful update
      router.push('/'); // Navigate to home after registration
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const isGuest = !user;

  const content = (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-primary text-white">
        <header className="bg-black-opacity shadow-md fixed top-0 left-0 w-full z-50">
          <nav className="container px-6 py-4 flex justify-between items-center">
            <Link href={isGuest ? '/' : '/dashboard'} className="flex items-center">
              <span className="text-2xl font-bold text-white">MindEase</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href={isGuest ? '/' : '/dashboard'}>{isGuest ? 'Home' : 'Home'}</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/resource">Resources</NavLink>
              {!isGuest && (
                <>
                  <NavLink href="/profile">Profile</NavLink>
                  <div className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      More ▼
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full mt-2 bg-black bg-opacity-80 rounded-lg shadow-md py-2 z-50">
                        <Link href="/community" className="block px-4 py-2 text-white hover:bg-gray-700">Community</Link>
                        <Link href="/appoin" className="block px-4 py-2 text-white hover:bg-gray-700">Appointments</Link>
                        <Link href="/library" className="block px-4 py-2 text-white hover:bg-gray-700">Library</Link>
                        <Link href="/assessment" className="block px-4 py-2 text-white hover:bg-gray-700">Assessment</Link>
                        <Link href="/moodtracker" className="block px-4 py-2 text-white hover:bg-gray-700">Mood Tracker</Link>
                        <Link href="/games" className="block px-4 py-2 text-white hover:bg-gray-700">Games</Link>
                        <Link href="/ai" className="block px-4 py-2 text-white hover:bg-gray-700">AI Chat</Link>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
            <div className="flex items-center space-x-4">
              {isGuest ? (
                  <Button onClick={handleLogin} className="bg-white text-black hover:bg-gray-200">Login/Signup</Button>
              ) : (
                <>
                  <NavLink href="/profile">{user.full_name?.split(" ")[0] || 'Profile'}</NavLink>
                  <Button variant="outline" onClick={handleLogout} className="bg-transparent text-white hover:bg-white hover:text-black">Logout</Button>
                </>
              )}
            </div>
          </nav>
        </header>

        <main className="flex-1 pt-20">{children}</main>

        <footer className="bg-black-opacity mt-auto">
          <div className="container px-6 py-4 text-center text-gray-400">
            © Copyright 2025 - All rights reserved
          </div>
        </footer>
      </div>

      <RegistrationPopup
        isOpen={showRegistrationPopup}
        onClose={() => setShowRegistrationPopup(false)}
        onAccept={handleRegistrationAccept}
      />
    </>
  );

  const aiContent = (
    <div className="flex flex-col h-screen bg-gradient-primary text-white">
         <header className="bg-black-opacity shadow-md">
            <nav className="container px-6 py-4 flex justify-between items-center">
                <Link href="/dashboard" className="flex items-center">
                    <span className="text-2xl font-bold text-white">MindEase AI Bot</span>
                </Link>
                <div className="flex items-center space-x-4">
                    <NavLink href="/dashboard">Home</NavLink>
                    {user && <Button variant="outline" onClick={handleLogout} className="bg-transparent text-white hover:bg-white hover:text-black">Logout</Button>}
                </div>
            </nav>
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );

  return (
    <html lang="en">
      <body>
        {pathname === '/' ? children : pathname === '/ai' ? aiContent : content}
      </body>
    </html>
  );
}