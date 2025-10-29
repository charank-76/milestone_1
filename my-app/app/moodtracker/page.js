"use client";

import React, { useState, useEffect } from 'react';
const MoodLog = {
  filter: async (filter, order, limit) => {
    // Mock filter mood logs
    console.log('Filtering mood logs:', filter, order, limit);
    return [];
  },
  create: async (data) => {
    // Mock create mood log
    console.log('Creating mood log:', data);
    return data;
  }
};
import { User } from '@/entities/User';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
const moods = [
  { name: 'Happy', emoji: '😄' },
  { name: 'Calm', emoji: '😌' },
  { name: 'Neutral', emoji: '😐' },
  { name: 'Anxious', emoji: '😟' },
  { name: 'Sad', emoji: '😢' },
];

const moodToValue = { 'Happy': 5, 'Calm': 4, 'Neutral': 3, 'Anxious': 2, 'Sad': 1 };

export default function MoodTracker() {
  const [user, setUser] = useState(null);
  const [selectedMood, setSelectedMood] = useState(null);
  const [notes, setNotes] = useState('');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = await User.me();
        setUser(currentUser);
        if (currentUser) {
          const moodLogs = await MoodLog.filter({ created_by: currentUser.email }, '-date', 50);
          setLogs(moodLogs);
        }
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };
    fetchData();
  }, []);

  const handleSaveLog = async () => {
    if (!selectedMood || !user) return;
    await MoodLog.create({
      mood: selectedMood.name,
      notes,
      date: new Date().toISOString(),
    });
    const moodLogs = await MoodLog.filter({ created_by: user.email }, '-date', 50);
    setLogs(moodLogs);
    setSelectedMood(null);
    setNotes('');
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Mood Tracker</h1>
      
      <Card className="bg-white/10 text-white max-w-2xl mx-auto mb-8">
        <CardHeader><CardTitle className="text-center">How are you feeling today?</CardTitle></CardHeader>
        <CardContent>
          <div className="flex justify-around mb-6">
            {moods.map(mood => (
              <button 
                key={mood.name} 
                onClick={() => setSelectedMood(mood)} 
                className={`text-4xl p-3 rounded-full transition-all ${selectedMood?.name === mood.name ? 'bg-purple-600 scale-110' : 'hover:bg-white/20'}`}
              >
                {mood.emoji}
              </button>
            ))}
          </div>
          <Textarea 
            placeholder="Add any notes about your day... (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="bg-white/20 border-white/30"
          />
          <Button onClick={handleSaveLog} disabled={!selectedMood} className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
            Save Today's Mood
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-white/10 text-white">
        <CardHeader><CardTitle className="text-center">Your Mood History</CardTitle></CardHeader>
        <CardContent>
          {logs.length === 0 ? (
            <p className="text-center text-gray-300">No mood logs yet. Start tracking your moods!</p>
          ) : (
            <div className="space-y-4 max-h-72 overflow-y-auto">
              {logs.slice(0, 10).map((log, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{moods.find(m => m.name === log.mood)?.emoji || '😊'}</span>
                    <div>
                      <p className="font-semibold">{log.mood}</p>
                      <p className="text-sm text-gray-300">{log.notes || 'No notes'}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    {new Date(log.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}