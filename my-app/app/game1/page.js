"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('ready'); // ready, inhale, hold, exhale
  const [countdown, setCountdown] = useState(0);
  const [cycles, setCycles] = useState(0);

  const phases = [
    { key: 'ready', text: 'Ready to Begin', scale: 'scale-100' },
    { key: 'inhale', text: 'Breathe In...', scale: 'scale-110' },
    { key: 'hold', text: 'Hold...', scale: 'scale-110' },
    { key: 'exhale', text: 'Breathe Out...', scale: 'scale-75' }
  ];

  useEffect(() => {
    let interval;
    
    if (isActive) {
      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            // Move to next phase
            setPhase((currentPhase) => {
              switch (currentPhase) {
                case 'ready':
                case 'exhale':
                  return 'inhale';
                case 'inhale':
                  return 'hold';
                case 'hold':
                  return 'exhale';
                default:
                  return 'inhale';
              }
            });
            
            // Update cycle count when completing exhale
            if (phase === 'exhale') {
              setCycles(c => c + 1);
            }
            
            // Return duration for next phase
            switch (phase) {
              case 'ready':
              case 'exhale':
                return 4; // inhale for 4 seconds
              case 'inhale':
                return 4; // hold for 4 seconds
              case 'hold':
                return 4; // exhale for 4 seconds
              default:
                return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setPhase('ready');
      setCountdown(0);
    }

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const startExercise = () => {
    setIsActive(true);
    setPhase('inhale');
    setCountdown(4);
    setCycles(0);
  };

  const stopExercise = () => {
    setIsActive(false);
    setPhase('ready');
    setCountdown(0);
  };

  const getPhaseText = () => {
    const currentPhase = phases.find(p => p.key === phase);
    return currentPhase ? currentPhase.text : 'Ready';
  };

  const getCircleClass = () => {
    const currentPhase = phases.find(p => p.key === phase);
    return currentPhase ? currentPhase.scale : 'scale-100';
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-8">
      <div className="relative">
        <div
          className={`w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center transition-transform duration-[4000ms] ease-in-out ${getCircleClass()}`}
        >
          <div className="text-center text-white">
            <div className="text-lg font-bold">{getPhaseText()}</div>
            {isActive && <div className="text-2xl font-mono">{countdown}</div>}
          </div>
        </div>
      </div>

      <div className="text-center space-y-2">
        {isActive && (
          <div className="text-sm text-gray-300">
            Breathing cycles completed: {cycles}
          </div>
        )}
        <div className="text-xs text-gray-400">
          4 seconds inhale → 4 seconds hold → 4 seconds exhale
        </div>
      </div>

      <div className="flex space-x-4">
        {!isActive ? (
          <Button onClick={startExercise} className="bg-green-600 hover:bg-green-700">
            Start Breathing Exercise
          </Button>
        ) : (
          <Button onClick={stopExercise} className="bg-red-600 hover:bg-red-700">
            Stop Exercise
          </Button>
        )}
      </div>
    </div>
  );
}