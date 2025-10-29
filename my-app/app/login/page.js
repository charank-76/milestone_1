"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from '@/entities/User';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formFields = [
    { type: 'email', placeholder: 'Email', value: email, onChange: setEmail },
    { type: 'password', placeholder: 'Password', value: password, onChange: setPassword }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Mock login - in real app, call auth API
      const mockUser = {
        id: 'user123',
        email: email,
        full_name: 'John Doe',
        user_type: null // Will trigger registration popup if null
      };
      localStorage.setItem('user', JSON.stringify(mockUser));
      // Redirect to home, popup will show if new user
      router.push('/dashboard');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center text-white">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login to MindEase</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && <p className={`text-red-400 text-sm text-center transition-opacity duration-300 transform ${error ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            {formFields.map((field, index) => (
              <div key={index}>
                <Input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  required
                  className="bg-white/10 border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200"
                />
              </div>
            ))}
            <Button type="submit" disabled={loading} className="w-full bg-green-500 hover:bg-green-600 transition-transform duration-200 hover:scale-105">
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
          <div className="text-center text-sm text-black">
            Don't have an account? <Link href="/register" className="text-blue-300 hover:underline">Sign up</Link>
          </div>
          <div className="text-center text-sm">
            <Link href="/dashboard" className="text-black hover:underline">Back to Home</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
