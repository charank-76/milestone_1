"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from '@/entities/User';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: ''
  });
  const [trustAuthor, setTrustAuthor] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (e) => {
    if (e.target.name === 'trustAuthor') {
      setTrustAuthor(e.target.checked);
    } else if (e.target.name === 'agreeTerms') {
      setAgreeTerms(e.target.checked);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!trustAuthor || !agreeTerms) {
      setError('Please agree to all terms');
      setLoading(false);
      return;
    }

    try {
      // Mock registration - in real app, call auth API
      const mockUser = {
        id: 'user123',
        email: formData.email,
        full_name: formData.full_name,
        password: formData.password,
        user_type: null // Will trigger registration popup after login
      };
      localStorage.setItem('user', JSON.stringify(mockUser));
      // Redirect to dashboard, popup will show for user_type selection if needed
      router.push('/dashboard');
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white border border-purple-200 rounded-lg shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-purple-800 mb-2">Create an Account</CardTitle>
          <p className="text-purple-600">Start your journey to a healthier mind today.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && <p className={`text-red-500 text-sm text-center transition-opacity duration-300 transform ${error ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label className="text-purple-700 font-medium">Name</Label>
              <Input
                type="text"
                name="full_name"
                placeholder="Your Name"
                value={formData.full_name}
                onChange={handleChange}
                required
                className="bg-white border-2 border-purple-300 text-purple-900 placeholder-purple-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-md py-3 transition-all duration-200"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-purple-700 font-medium">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white border-2 border-purple-300 text-purple-900 placeholder-purple-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-md py-3 transition-all duration-200"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-purple-700 font-medium">Password</Label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="bg-white border-2 border-purple-300 text-purple-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-md py-3 transition-all duration-200"
              />
            </div>
            <div className="space-y-2 pt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="trustAuthor"
                  checked={trustAuthor}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
                  required
                />
                <Label className="ml-2 text-sm text-purple-700">We trust the author</Label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={agreeTerms}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-purple-300 rounded"
                  required
                />
                <Label className="ml-2 text-sm text-purple-700">I agree with Terms & Conditions</Label>
              </div>
            </div>
            <Button 
              type="submit" 
              disabled={loading || !trustAuthor || !agreeTerms} 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md py-3 transition-all duration-200 disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>
          <div className="text-center text-sm text-purple-600 mt-4">
            Already have an account? <Link href="/login" className="font-medium hover:underline">Login</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
