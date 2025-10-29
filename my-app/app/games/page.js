import React from 'react';
import PianoTiles from '../components/games/PianoTiles';
import BreathingExercise from '../components/games/BreathingExercise';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Games() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Relaxation Games</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="bg-white/10 text-white">
          <CardHeader><CardTitle>Piano Tiles</CardTitle></CardHeader>
          <CardContent><PianoTiles /></CardContent>
        </Card>
        <Card className="bg-white/10 text-white">
          <CardHeader><CardTitle>Breathing Exercise</CardTitle></CardHeader>
          <CardContent><BreathingExercise /></CardContent>
        </Card>
      </div>
    </div>
  );
}