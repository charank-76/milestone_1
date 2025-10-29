"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Calendar, Clock, User, MessageSquare, Upload, Video, MapPin } from "lucide-react";

export default function AppointmentPage() {
  const router = useRouter();

  const [counselor, setCounselor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [mode, setMode] = useState("");
  const [reason, setReason] = useState("");
  const [file, setFile] = useState(null);

  const counselors = [
    { value: "counselor1", label: "Dr. Sarah Smith - Anxiety Specialist" },
    { value: "counselor2", label: "Dr. Michael Johnson - Relationship Counselor" },
    { value: "counselor3", label: "Dr. Emily Williams - Stress Management" }
  ];

  const sessionModes = [
    { value: "In-person", icon: MapPin, label: "In-Person" },
    { value: "Online", icon: Video, label: "Online (Video Call)" }
  ];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ counselor, date, time, mode, reason, file });
    router.push("/confirmation"); // redirect after booking
  };

  return (
    <div className="min-h-screen bg-gradient-primary text-white">
      <div className="container px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center mb-8">
            <Link href="/dashboard">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>

          <Card className="bg-white-opacity rounded-lg shadow-md">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-2">Book an Appointment</CardTitle>
              <p className="text-gray-300">Schedule a session with our certified counselors</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Counselor Selection */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-semibold">
                    <User className="w-4 h-4" />
                    Select Counselor
                  </label>
                  <select
                    value={counselor}
                    onChange={(e) => setCounselor(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    required
                  >
                    <option value="" className="text-gray-500">Choose a counselor</option>
                    {counselors.map(c => (
                      <option key={c.value} value={c.value} className="bg-gray-800">{c.label}</option>
                    ))}
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-semibold">
                      <Calendar className="w-4 h-4" />
                      Date
                    </label>
                    <Input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="px-4 py-3 rounded-lg bg-white/10 border-white/20 text-white focus:ring-2 focus:ring-purple-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-semibold">
                      <Clock className="w-4 h-4" />
                      Time
                    </label>
                    <Input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="px-4 py-3 rounded-lg bg-white/10 border-white/20 text-white focus:ring-2 focus:ring-purple-400"
                      required
                    />
                  </div>
                </div>

                {/* Mode of Session */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 font-semibold">
                    <MessageSquare className="w-4 h-4" />
                    Session Mode
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {sessionModes.map(m => (
                      <label key={m.value} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                        <input
                          type="radio"
                          name="mode"
                          value={m.value}
                          checked={mode === m.value}
                          onChange={(e) => setMode(e.target.value)}
                          className="text-purple-500"
                          required
                        />
                        <m.icon className="w-5 h-5 text-gray-300" />
                        <span className="text-sm">{m.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Reason for Appointment */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-semibold">
                    <MessageSquare className="w-4 h-4" />
                    Reason for Appointment
                  </label>
                  <Textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Please describe what brings you here today..."
                    className="min-h-[100px] px-4 py-3 rounded-lg bg-white/10 border-white/20 text-white focus:ring-2 focus:ring-purple-400 placeholder-gray-300"
                    required
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-semibold">
                    <Upload className="w-4 h-4" />
                    Attach Documents (Optional)
                  </label>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <Input
                      type="file"
                      onChange={handleFileChange}
                      className="flex-1 bg-transparent border-none text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700"
                    />
                    {file && (
                      <span className="text-sm text-gray-300 truncate max-w-[200px]">
                        {file.name}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Confirm Booking
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center text-gray-300">
            <p className="text-sm">
              Need help? Contact our support team at <span className="font-semibold">support@mindease.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
