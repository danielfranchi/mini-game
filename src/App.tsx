import { useState } from "react";

import Game from "./components/Game";
import Modal from "./components/Modal";
import GameCard from "./components/GameCard";

import { playNextMusic, stopMusic, playLastMusic } from "./utils/musicPlayer";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstGame, setFirstGame] = useState(true);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    if (firstGame) {
      playNextMusic();
      setFirstGame(false);
    } else {
      playLastMusic();
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    stopMusic();
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <GameCard onOpenModal={handleOpenModal} />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Game />
      </Modal>
    </div>
  );
};

export default App;
