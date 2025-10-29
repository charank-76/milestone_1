"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';

const COLUMNS = 4;
const FALL_SPEED = 3000; // milliseconds for a tile to fall
const SPAWN_RATE = 1000; // milliseconds between new tiles
const COLORS = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500'];

export default function PianoTiles() {
  const [tiles, setTiles] = useState([]);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [speed, setSpeed] = useState(FALL_SPEED);

  // Generate a new tile
  const generateTile = useCallback(() => {
    if (!isPlaying || gameOver) return;
    
    const newTile = {
      id: Date.now() + Math.random(),
      column: Math.floor(Math.random() * COLUMNS),
      position: 0,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      clicked: false
    };
    
    setTiles(prev => [...prev, newTile]);
  }, [isPlaying, gameOver]);

  // Move tiles down
  const moveTiles = useCallback(() => {
    if (!isPlaying || gameOver) return;

    setTiles(prev => {
      const updated = prev.map(tile => ({
        ...tile,
        position: tile.position + 25
      }));

      // Check for missed tiles (reached bottom without being clicked)
      const missedTile = updated.find(tile => tile.position >= 400 && !tile.clicked);
      if (missedTile) {
        setGameOver(true);
        setIsPlaying(false);
      }

      // Remove tiles that are off screen
      return updated.filter(tile => tile.position < 500);
    });
  }, [isPlaying, gameOver]);

  // Handle tile click
  const handleTileClick = (tileId) => {
    setTiles(prev => 
      prev.map(tile => 
        tile.id === tileId ? { ...tile, clicked: true } : tile
      )
    );
    setScore(prev => prev + 10);
    
    // Increase speed every 50 points
    if ((score + 10) % 50 === 0) {
      setSpeed(prev => Math.max(prev - 200, 1000));
    }
  };

  // Start game
  const startGame = () => {
    setTiles([]);
    setScore(0);
    setIsPlaying(true);
    setGameOver(false);
    setSpeed(FALL_SPEED);
  };

  // Stop game
  const stopGame = () => {
    setIsPlaying(false);
    setTiles([]);
  };

  // Game loops
  useEffect(() => {
    let tileSpawner;
    if (isPlaying && !gameOver) {
      tileSpawner = setInterval(generateTile, SPAWN_RATE);
    }
    return () => clearInterval(tileSpawner);
  }, [isPlaying, gameOver, generateTile]);

  useEffect(() => {
    let tileMover;
    if (isPlaying && !gameOver) {
      tileMover = setInterval(moveTiles, 100);
    }
    return () => clearInterval(tileMover);
  }, [isPlaying, gameOver, moveTiles]);

  return (
    <div className="text-center space-y-4">
      {/* Score and Controls */}
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Score: {score}</div>
        <div className="text-sm">Speed: {Math.floor((FALL_SPEED - speed) / 200) + 1}</div>
      </div>

      {/* Game Area */}
      <div className="relative w-80 h-96 mx-auto bg-gray-800 rounded-lg overflow-hidden border-2 border-white/20">
        {/* Column dividers */}
        {Array.from({ length: COLUMNS - 1 }, (_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-white/20"
            style={{ left: `${((i + 1) * 100) / COLUMNS}%` }}
          />
        ))}

        {/* Tiles */}
        {tiles.map(tile => (
          <div
            key={tile.id}
            className={`absolute w-20 h-20 rounded transition-all duration-100 cursor-pointer transform hover:scale-105 ${
              tile.clicked ? 'bg-white/20' : tile.color
            }`}
            style={{
              left: `${(tile.column * 100) / COLUMNS}%`,
              top: `${tile.position}px`,
              opacity: tile.clicked ? 0.3 : 1
            }}
            onClick={() => !tile.clicked && handleTileClick(tile.id)}
          />
        ))}

        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Game Over!</h3>
              <p className="text-lg mb-4">Final Score: {score}</p>
              <Button onClick={startGame} className="bg-green-600 hover:bg-green-700">
                Play Again
              </Button>
            </div>
          </div>
        )}

        {/* Start Screen */}
        {!isPlaying && !gameOver && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-xl font-bold mb-4">Piano Tiles</h3>
              <p className="mb-4 text-sm">Tap the falling tiles before they reach the bottom!</p>
              <Button onClick={startGame} className="bg-blue-600 hover:bg-blue-700">
                Start Game
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Game Instructions */}
      <div className="text-xs text-gray-400 max-w-sm mx-auto">
        <p>• Tap the colored tiles as they fall</p>
        <p>• Don't let any tile reach the bottom</p>
        <p>• Game speeds up as your score increases</p>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center space-x-4">
        {isPlaying ? (
          <Button onClick={stopGame} className="bg-red-600 hover:bg-red-700">
            Stop Game
          </Button>
        ) : !gameOver && (
          <Button onClick={startGame} className="bg-blue-600 hover:bg-blue-700">
            {tiles.length > 0 ? 'Resume' : 'Start Game'}
          </Button>
        )}
      </div>
    </div>
  );
}