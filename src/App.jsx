import { useState } from "react";
import "./App.css";

function App() {

  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");

  function checkGuess() {

    const number = Number(guess);

    setAttempts(attempts + 1);

    if (number === secretNumber) {
      setMessage("🎉 Correct! You won!");
    }
    else if (number < secretNumber) {
      setMessage("📈 Too low! Try again.");
    }
    else {
      setMessage("📉 Too high! Try again.");
    }
  }

  function restartGame() {

    setSecretNumber(Math.floor(Math.random() * 100) + 1);

    setGuess("");
    setAttempts(0);
    setMessage("");
  }

  return (
    <div className="game">

      <h1>🎯 Guess the Number</h1>

      <p>
        I'm thinking of a number between 1 and 100.
      </p>

      <input
        type="number"
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />

      <button onClick={checkGuess}>
        Guess
      </button>

      <p className="message">
        {message}
      </p>

      <p>
        Attempts: {attempts}
      </p>

      <button onClick={restartGame}>
        New Game
      </button>

    </div>
  );
}

export default App;