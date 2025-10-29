"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart } from 'lucide-react';

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    { name: "AI Chat Bot", role: "24/7 Support", avatar: "🤖" },
    { name: "Dr. Smith", role: "Lead Counselor", avatar: "👨‍⚕️" },
    { name: "Sarah Johnson", role: "Community Manager", avatar: "👩‍💼" },
    { name: "Mike Chen", role: "Wellness Coach", avatar: "🧑‍🏫" }
  ];

  const missionVision = [
    { icon: Target, title: "Our Mission", description: "To provide accessible, stigma-free mental health support for students and counselors through innovative digital solutions.", color: "text-blue-300" },
    { icon: Heart, title: "Our Vision", description: "A world where every student has access to mental health resources and feels supported in their journey toward well-being.", color: "text-red-300" }
  ];

  return (
    <div className="container px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-300 mb-4">
            Empowering Student Mental Health and Growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {missionVision.map((item, index) => (
            <Card key={index} className="bg-white-opacity text-white">
              <CardContent className="p-6">
                <item.icon className={`w-12 h-12 mb-4 ${item.color}`} />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white-opacity text-white" onClick={() => setSelectedMember(index)}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{member.avatar}</div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                  {selectedMember === index && <p className="text-sm mt-2">Selected!</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white-opacity rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Why Choose MindEase?</h2>
          <p className="text-lg">
            We are not alone. Thousands of students are taking their first
            step towards better mental health with our platform.
          </p>
          <div className="mt-6 p-4 bg-white/20 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop"
              alt="Students supporting each other"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
