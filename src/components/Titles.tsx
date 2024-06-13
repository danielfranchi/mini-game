interface GameTitleProps {
  as?: "p" | "h2";
}

const styles = {
  p: "text-white text-opacity-50 text-2xl mb-4",
  h2: "text-2xl font-bold mb-4 text-[#FBBF24]",
};

export const MainTitle = () => {
  return <h1 className="text-4xl font-bold mb-4 text-yellow-500">MINI-GAME</h1>;
};

export const GameTitle = ({ as: Tag = "p" }: GameTitleProps) => {
  return <Tag className={styles[Tag]}>Press The Letters</Tag>;
};

export const GameTip = () => {
  return (
    <p className="text-lg text-white text-opacity-50 mb-2">
      Pressione as letras na ordem correta
    </p>
  );
};
