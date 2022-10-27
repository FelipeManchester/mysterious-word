import './StartScreen.css';

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>
        Palavra <span>Misteriosa</span>
      </h1>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
