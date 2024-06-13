import { useEffect, useState } from "react";

import Button from "./Button";
import ProgressBar from "./ProgressBar";
import { GameTitle, GameTip } from "./Titles";

import {
  playNextMusic,
  playCorrectSound,
  playWrongSound,
} from "../utils/musicPlayer";

const getRandomKeySequence = (length: number): string[] => {
  const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return Array.from({ length }, () =>
    keys.charAt(Math.floor(Math.random() * keys.length))
  );
};

const Game = () => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [currentKeyIndex, setCurrentKeyIndex] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [lastKeyPressed, setLastKeyPressed] = useState<string>("");

  useEffect(() => {
    setSequence(getRandomKeySequence(6));
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
      setGameWon(false);
      playWrongSound();
    } else if (!gameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, gameOver]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (gameOver || currentKeyIndex >= sequence.length) return;

      const keyPressed = event.key.toUpperCase();
      const currentKey = sequence[currentKeyIndex].toUpperCase();

      if (keyPressed === currentKey) {
        setLastKeyPressed(keyPressed);
        if (currentKeyIndex + 1 === sequence.length) {
          setCurrentKeyIndex((prevIndex) => prevIndex + 1);
          setGameWon(true);
          setGameOver(true);
        } else {
          setCurrentKeyIndex((prevIndex) => prevIndex + 1);
        }
        playCorrectSound();
      } else {
        setGameWon(false);
        setGameOver(true);
        playWrongSound();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [sequence, currentKeyIndex, gameOver]);

  const resetGame = () => {
    setSequence(getRandomKeySequence(6));
    setCurrentKeyIndex(0);
    setTimeLeft(30);
    setGameOver(false);
    setGameWon(false);
    setLastKeyPressed("");
    playNextMusic();
  };

  return (
    <div className="text-center p-8 bg-[#1A202C] rounded-lg shadow-lg">
      <GameTitle as="h2" />
      {!gameOver ? (
        <>
          <GameTip />
          <div className="flex justify-center mb-4">
            {sequence.map((key, index) => (
              <span
                key={index}
                className={`mx-1 px-4 py-2 rounded text-xl font-bold ${
                  index < currentKeyIndex
                    ? "bg-green-500 text-white"
                    : index === currentKeyIndex
                    ? gameOver &&
                      lastKeyPressed === sequence[currentKeyIndex].toUpperCase()
                      ? "bg-green-500 text-white"
                      : "bg-[#FBBF24] text-black"
                    : "bg-gray-700 text-white text-opacity-80 border border-white border-opacity-50"
                }`}
              >
                {key}
              </span>
            ))}
          </div>
          <ProgressBar timeLeft={timeLeft} totalTime={30} />
        </>
      ) : (
        <div>
          <p
            className={`text-lg font-bold mb-4 ${
              gameWon ? "text-green-500" : "text-red-500"
            }`}
          >
            {gameWon
              ? "Sucesso!"
              : timeLeft <= 0
              ? "Tempo esgotado! Você perdeu!"
              : "Você perdeu!"}
          </p>
          <div className="flex justify-center space-x-2">
            <Button
              onClick={() => window.location.reload()}
              text="Sair"
              style="exitButton"
            />
            <Button
              onClick={resetGame}
              text={gameWon ? "Jogar Novamente" : "Tentar Novamente"}
              style="startButton"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
