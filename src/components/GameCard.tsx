import Button from "./Button";
import GameCardImage from "./GameCardImage";
import { MainTitle, GameTitle } from "./Titles";

interface GameCardProps {
  onOpenModal: () => void;
}

const GameCard = ({ onOpenModal }: GameCardProps) => {
  return (
    <div className="bg-gray-700 p-10 rounded-lg shadow-md text-center">
      <MainTitle />
      <GameCardImage />
      <GameTitle />
      <Button onClick={onOpenModal} text="Iniciar Jogo" style="NewGameButton" />
    </div>
  );
};

export default GameCard;
