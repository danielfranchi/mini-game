import React, { useState } from "react";

import Game from "./Game";
import RestartGame from "./RestartGame";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [showRestartGame, setShowRestartGame] = useState(false);
  const [restartGame, setRestartGame] = useState(false);

  const handleRestartGame = () => {
    window.location.reload();
    onClose();
  };

  const handleRestartMatch = () => {
    setRestartGame(true);
    setShowRestartGame(false);
  };

  const handleShowButtons = () => {
    setShowRestartGame(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-[#242424] p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        {!showRestartGame ? (
          <>
            <button
              className="absolute top-2 right-2 text-white"
              onClick={handleShowButtons}
            >
              &times;
            </button>
            {restartGame ? <Game /> : children}
          </>
        ) : (
          <RestartGame
            onRestart={handleRestartGame}
            onLoad={handleRestartMatch}
            restartText="Reiniciar Jogo"
            onLoadText="Reiniciar Partida"
            style="exitButton"
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
