"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageCircle, Share, Plus, Image, Search } from 'lucide-react';
const Post = {
  list: async (order) => {
    // Mock list posts - in real app, call API
    console.log('Listing posts with order:', order);
    return [];
  },
  create: async (data) => {
    // Mock create post
    console.log('Creating post:', data);
    return data;
  },
  update: async (id, data) => {
    // Mock update post
    console.log('Updating post:', id, data);
    return data;
  }
};
import { User } from '@/entities/User';
const UploadFile = async ({ file }) => {
  // Mock upload file
  console.log('Uploading file:', file);
  return { file_url: 'mock-url.jpg' };
};
import { Input } from '@/components/ui/input';

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const fileInputRef = useRef(null);

  const communityStats = [
    { label: 'A', color: 'bg-green-500' },
    { label: 'B', color: 'bg-red-500' },
    { label: 'C', color: 'bg-blue-500' },
    { label: 'D', color: 'bg-yellow-500' },
    { label: '+', color: 'bg-purple-500' }
  ];

  const fetchData = async () => {
    try {
      const [currentUser, postData] = await Promise.all([
        User.me().catch(() => null),
        Post.list('-created_date')
      ]);
      setUser(currentUser);
      setAllPosts(postData);
      setPosts(postData);
    } catch (e) {
      console.error('Error fetching data:', e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = allPosts.filter(p =>
      p.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.author_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPosts(filtered);
  }, [searchQuery, allPosts]);

  const handleCreatePost = async () => {
    if (!newPost.trim() || !user) return;
    setIsLoading(true);
    
    try {
      let imageUrl = '';
      if (postImage) {
        const { file_url } = await UploadFile({ file: postImage });
        imageUrl = file_url;
      }

      await Post.create({
        content: newPost,
        author_name: user.full_name?.split(' ')[0] || 'Anonymous',
        image_url: imageUrl,
        likes: 0,
        liked_by: []
      });
      
      setNewPost('');
      setPostImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      await fetchData();
    } catch (error) {
      console.error('Error creating post:', error);
    }
    setIsLoading(false);
  };
  
  const handleLike = async (post) => {
    if (!user) return; // Guests can't like
    
    const hasLiked = post.liked_by?.includes(user.email);
    const newLikedBy = hasLiked 
      ? post.liked_by.filter(email => email !== user.email)
      : [...(post.liked_by || []), user.email];
      
    await Post.update(post.id, {
      likes: newLikedBy.length,
      liked_by: newLikedBy
    });

    await fetchData();
  };

  return (
    <div className="container px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Community</h1>
            <div className="text-sm text-gray-300">
              <p>Create your community 📝</p>
              <p>Join community discussions</p>
            </div>
          </div>
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search posts or users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/20 border-white/30 pl-10"
            />
          </div>
        </div>

        {user && (
          <Card className="bg-white-opacity text-white mb-8">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Plus className="w-6 h-6" />
                <span className="font-semibold">CREATE POST</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="What's on your mind? Share your thoughts with the community..."
                className="bg-white/20 border-white/30 min-h-24"
              />
              {postImage && (
                <div className="flex items-center justify-between bg-white/10 p-2 rounded">
                  <p className="text-sm text-gray-300">Image selected: {postImage.name}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setPostImage(null)}
                    className="text-red-400 hover:bg-red-500/20"
                  >
                    Remove
                  </Button>
                </div>
              )}
              <div className="flex justify-between items-center">
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={(e) => setPostImage(e.target.files?.[0] || null)}
                  className="hidden"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-white hover:bg-white/20"
                >
                  <Image className="w-4 h-4 mr-2" />
                  Add Photo
                </Button>
                <Button
                  onClick={handleCreatePost}
                  disabled={!newPost.trim() || isLoading}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  {isLoading ? 'Posting...' : 'Post'}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-6">
          {posts.length === 0 ? (
            <Card className="bg-white-opacity text-white">
              <CardContent className="text-center py-12">
                <p className="text-lg">
                  {searchQuery ? 'No posts found matching your search.' : 'No posts yet. Be the first to share something!'}
                </p>
              </CardContent>
            </Card>
          ) : (
            posts.map((post) => (
              <Card key={post.id} className="bg-white-opacity text-white">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="font-bold text-lg">{post.author_name[0]?.toUpperCase()}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{post.author_name}</p>
                      <p className="text-sm text-gray-400">
                        {new Date(post.created_date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-100">{post.content}</p>

                  {post.image_url && (
                    <img
                      src={post.image_url}
                      alt="Post content"
                      className="rounded-lg max-w-full h-auto border border-white/20"
                    />
                  )}

                  <div className="flex items-center space-x-6 pt-2 border-t border-white/20">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(post)}
                      className={`text-white hover:bg-white/20 ${post.liked_by?.includes(user?.email) ? 'text-pink-400' : ''}`}
                      disabled={!user}
                    >
                      <Heart className={`w-4 h-4 mr-2 ${post.liked_by?.includes(user?.email) ? 'fill-current' : ''}`} />
                      {post.likes || 0} Likes
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Comments
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <Share className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Community Stats/Info */}
        <div className="mt-12 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            {communityStats.map(stat => (
              <div key={stat.label} className={`w-8 h-8 ${stat.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                {stat.label}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            Join thousands of students sharing their mental health journey
          </p>
        </div>
      </div>
    </div>
  );
}