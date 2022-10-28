import './StartScreen.css';
import React from 'react';

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>
        Palavra
        <span>
          <em>M</em>isteriosa
        </span>
      </h1>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
