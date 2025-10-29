"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Plus } from 'lucide-react';
import { User } from '@/entities/User';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! 👋 How are you feeling?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await User.me();
        setUser(currentUser);
      } catch (e) {
        console.error('User not authenticated');
      }
    };
    fetchUser();
  }, []);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = { sender: 'user', text: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('https://rithikkc.app.n8n.cloud/webhook/e4d9f76d-fcdf-43d0-aea6-18de922f094d/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          userId: user?.id || 'guest',
          userName: user?.full_name || 'Guest'
        })
      });

      const data = await response.json();
      const aiResponse = { sender: 'ai', text: data.response || 'I understand. How can I help you further?' };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorResponse = { sender: 'ai', text: 'I apologize, but I\'m having trouble connecting right now. Please try again in a moment.' };
      setMessages(prev => [...prev, errorResponse]);
    }

    setInputMessage('');
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const startNewChat = () => {
    setMessages([{ sender: 'ai', text: 'Hello! 👋 How are you feeling?' }]);
  };

  const chatHistory = [
    { id: 1, title: 'Previous Chat 1' },
    { id: 2, title: 'Previous Chat 2' }
  ];

  return (
    <div className="flex h-full">
      {/* Chat History Sidebar */}
      <div className="w-64 bg-black-opacity p-4">
        <Button onClick={startNewChat} className="w-full mb-4 bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Chat
        </Button>
        <div>
          <h3 className="font-semibold mb-2">Chat History</h3>
          <div className="text-sm text-gray-300">
            {chatHistory.map(chat => (
              <div key={chat.id} className="mb-1">{chat.title}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white ml-auto'
                    : 'bg-purple-600 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-white/20">
          <div className="flex space-x-4">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Place Your Question Here"
              className="flex-1 bg-white/20 border-white/30 text-white placeholder-gray-300"
              disabled={isLoading}
            />
            <Button
              onClick={sendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}