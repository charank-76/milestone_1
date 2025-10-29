"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User } from '@/entities/User';

export default function Profile() {
  const [user, setUser] = React.useState(null);
  const [editMode, setEditMode] = React.useState(false);
  const [formData, setFormData] = React.useState({
    full_name: '',
    user_type: ''
  });

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await User.me();
        setUser(currentUser);
        setFormData({
          full_name: currentUser.full_name || '',
          user_type: currentUser.user_type || ''
        });
      } catch (e) {
        console.error('Error fetching user:', e);
      }
    };
    fetchUser();
  }, []);

  const handleSave = async () => {
    try {
      await User.updateMyUserData(formData);
      const updatedUser = await User.me();
      setUser(updatedUser);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (!user) {
    return <div className="flex items-center justify-center h-screen"><p>Loading profile...</p></div>;
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-white/10 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">
                  {user.full_name?.[0]?.toUpperCase() || 'U'}
                </span>
              </div>
              <h2 className="text-xl font-semibold">{user.full_name}</h2>
              <p className="text-gray-300">{user.email}</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                {editMode ? (
                  <Input
                    id="name"
                    value={formData.full_name}
                    onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                    className="bg-white/20 border-white/30"
                  />
                ) : (
                  <p className="p-2">{user.full_name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <p className="p-2 text-gray-300">{user.email}</p>
              </div>

              <div>
                <Label htmlFor="user_type">Account Type</Label>
                {editMode ? (
                  <Select 
                    value={formData.user_type} 
                    onValueChange={(value) => setFormData({...formData, user_type: value})}
                  >
                    <SelectTrigger className="bg-white/20 border-white/30">
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="counselor">Counselor</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <p className="p-2 capitalize">{user.user_type || 'Not specified'}</p>
                )}
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              {editMode ? (
                <>
                  <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                    Save Changes
                  </Button>
                  <Button 
                    onClick={() => setEditMode(false)} 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button onClick={() => setEditMode(true)} className="bg-purple-600 hover:bg-purple-700">
                  Edit Profile
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}