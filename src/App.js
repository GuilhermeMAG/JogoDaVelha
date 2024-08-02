import React from 'react';
import { GameProvider } from './contexts/GameContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Game from './pages/Game/Game';

const App = () => {
  return (
    <ThemeProvider>
      <GameProvider>
        <Game />
      </GameProvider>
    </ThemeProvider>
  );
};

export default App;