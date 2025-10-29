"use client";

import React, { useState, useEffect } from 'react';

const BreathingExercise = () => {
  const [phase, setPhase] = useState('inhale');
  const [count, setCount] = useState(4);
  const [isActive, setIsActive] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setCount(prev => {
          if (prev === 1) {
            setPhase(current => {
              if (current === 'inhale') return 'hold';
              if (current === 'hold') return 'exhale';
              if (current === 'exhale') {
                setCycle(c => c + 1);
                return 'inhale';
              }
              return current;
            });
            return phase === 'inhale' ? 7 : phase === 'hold' ? 4 : 4;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, phase]);

  const startExercise = () => {
    setIsActive(true);
    setPhase('inhale');
    setCount(4);
    setCycle(0);
  };

  const stopExercise = () => {
    setIsActive(false);
    setPhase('inhale');
    setCount(4);
    setCycle(0);
  };

  const getCircleSize = () => {
    if (phase === 'inhale') return 'scale-150';
    if (phase === 'hold') return 'scale-150';
    return 'scale-100';
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Breathing Exercise</h2>
      <div className="mb-8">
        <div className={`w-32 h-32 bg-blue-500 rounded-full mx-auto transition-transform duration-1000 ${getCircleSize()}`}></div>
      </div>
      <div className="text-xl mb-4">
        {phase === 'inhale' && 'Breathe In'}
        {phase === 'hold' && 'Hold'}
        {phase === 'exhale' && 'Breathe Out'}
      </div>
      <div className="text-4xl font-bold mb-4">{count}</div>
      <div className="mb-4">Cycles: {cycle}</div>
      {!isActive ? (
        <button onClick={startExercise} className="bg-green-500 text-white px-6 py-2 rounded">Start</button>
      ) : (
        <button onClick={stopExercise} className="bg-red-500 text-white px-6 py-2 rounded">Stop</button>
      )}
    </div>
  );
};

export default BreathingExercise;
