import React from 'react';
import { GameProvider } from './contexts/GameContext';
import Game from './pages/Game/Game';

const App = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
};

export default App;