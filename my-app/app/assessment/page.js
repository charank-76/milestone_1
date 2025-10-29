"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [progress, setProgress] = useState(0);

  const questions = [
    {
      id: 1,
      text: "Over the last 2 weeks, how often have you been bothered by little interest or pleasure in doing things?",
      options: ["Not at all", "Several days", "Nearly Everyday"]
    },
    {
      id: 2, 
      text: "Over the last 2 weeks, how often have you been bothered by feeling down, depressed or hopeless?",
      options: ["Not at all", "Several days", "Nearly Everyday"]
    },
    {
      id: 3,
      text: "Over the last 2 weeks, how often have you been bothered by feeling nervous, anxious or on edge?",
      options: ["Not at all", "Several days", "Nearly Everyday"]
    }
  ];

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    setProgress(((currentQuestion + 1) / questions.length) * 100);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score and show result
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    Object.values(answers).forEach(answer => {
      if (answer === "Several days") score += 1;
      if (answer === "Nearly Everyday") score += 2;
    });
    return score;
  };

  const getResultMessage = () => {
    const score = calculateScore();
    if (score <= 2) return "You're doing well! Continue with self-care practices.";
    if (score <= 4) return "You may benefit from talking to someone. Consider reaching out.";
    return "It might be helpful to speak with a counselor or mental health professional.";
  };

  if (showResult) {
    return (
      <div className="container px-6 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-white-opacity text-white">
            <CardHeader>
              <CardTitle className="text-3xl">Assessment Complete</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-6xl">🎯</div>
              <div>
                <p className="text-xl mb-4">You scored {calculateScore()} out of {questions.length * 2}</p>
                <p className="text-lg">{getResultMessage()}</p>
              </div>
              <p className="text-sm opacity-80">
                Utilize the resources and AI bot for further solution
              </p>
              <Link href='/dashboard'>
                <Button className="bg-green-500 hover:bg-green-600">
                  Back to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Link href='/library'>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>

        <Card className="bg-white-opacity text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">Mental Health Assessment</CardTitle>
            <p className="text-lg opacity-80">Answer honestly to get personalized insights</p>
            <p className="text-sm opacity-60 mt-2">
              This is a standardized questionnaire
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <p className="text-sm mb-2">Question {currentQuestion + 1} of {questions.length}</p>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold">
                {questions[currentQuestion].text}
              </h2>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    variant="outline"
                    className="w-full max-w-md py-4 text-lg bg-white/20 hover:bg-white/30 border-white/30"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}