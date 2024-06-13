import coverMiniGame from "../assets/images/cover-mini-game.jpeg"; // Importando a imagem

const GameCardImage = () => {
  return (
    <img
      src={coverMiniGame}
      alt="Cover Mini-Game"
      className="mb-4 mx-auto max-w-xs"
    />
  );
};

export default GameCardImage;
