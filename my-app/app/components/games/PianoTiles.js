"use client";

import React, { useState, useEffect, useRef } from 'react';

const PianoTiles = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [tiles, setTiles] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const gameRef = useRef(null);
  const tileSpeed = useRef(2);
  const gameHeight = 400;

  useEffect(() => {
    if (gameStarted && !gameOver) {
      const interval = setInterval(() => {
        setTiles(prev => {
          const newTiles = [...prev];
          // Add new tile less frequently
          if (Math.random() < 0.15) {
            const lane = Math.floor(Math.random() * 4); // 4 lanes
            // Check if there's already a tile in this lane near the top
            const hasTileInLane = newTiles.some(tile => tile.lane === lane && tile.position < 50);
            if (!hasTileInLane) {
              newTiles.push({
                id: Date.now(),
                position: 0,
                lane: lane
              });
            }
          }

          const updatedTiles = newTiles.map(tile => ({
            ...tile,
            position: tile.position + tileSpeed.current
          }));

          // Check for missed tiles (tiles that reached the bottom)
          const missed = updatedTiles.some(tile => tile.position > gameHeight);
          if (missed) {
            setGameOver(true);
            return [];
          }

          return updatedTiles.filter(tile => tile.position < gameHeight);
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [gameStarted, gameOver]);

  const handleKeyPress = (e) => {
    if (!gameStarted || gameOver) return;

    const keyMap = {
      'a': 0,
      's': 1,
      'd': 2,
      'f': 3
    };

    const lane = keyMap[e.key.toLowerCase()];
    if (lane !== undefined) {
      setTiles(prev => {
        // Find tile in the correct lane and hit zone
        const hitIndex = prev.findIndex(tile => 
          tile.lane === lane && 
          tile.position > gameHeight - 80 && 
          tile.position < gameHeight + 20
        );

        if (hitIndex !== -1) {
          setScore(s => s + 1);
          tileSpeed.current += 0.05;
          // Remove the hit tile
          return prev.filter((_, index) => index !== hitIndex);
        }

        return prev;
      });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, gameOver]);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTiles([]);
    setGameOver(false);
    tileSpeed.current = 2;
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setTiles([]);
  };

  if (gameOver) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
        <p className="text-xl mb-4">Score: {score}</p>
        <button
          onClick={resetGame}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Score: {score}</div>
        <div className="text-sm text-gray-300">
          {!gameStarted ? (
            <button
              onClick={startGame}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Start Game
            </button>
          ) : (
            <span>Press SPACE to hit tiles!</span>
          )}
        </div>
      </div>

      <div
        ref={gameRef}
        className="w-full h-96 bg-gray-900 relative overflow-hidden border-2 border-gray-700 rounded-lg"
        style={{ height: `${gameHeight}px` }}
      >
        {/* Lane dividers */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute left-1/4 top-0 w-0.5 h-full bg-gray-600"></div>
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gray-600"></div>
          <div className="absolute left-3/4 top-0 w-0.5 h-full bg-gray-600"></div>
        </div>

        {/* Hit zone indicator */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-red-500 bg-opacity-20 border-t-2 border-red-500"></div>

        {tiles.map(tile => (
          <div
            key={tile.id}
            className="absolute w-1/4 h-16 bg-white rounded-b-lg shadow-lg border-2 border-gray-300 animate-pulse"
            style={{
              left: `${tile.lane * 25}%`,
              top: `${tile.position}px`
            }}
          />
        ))}
      </div>

      <div className="text-center mt-4 text-sm text-gray-400">
        Hit the white tiles when they reach the red zone!
      </div>
    </div>
  );
};

export default PianoTiles;
