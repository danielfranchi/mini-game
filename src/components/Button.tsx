interface ButtonProps {
  onClick?: () => void;
  style?: string;
  text: string;
}

const Button = ({ onClick, style = "primary", text }: ButtonProps) => {
  const NewGameButton =
    "bg-yellow-500 hover:bg-yellow-600 text-white rounded w-32 h-10";
  const startButton =
    "bg-yellow-500 hover:bg-yellow-600 text-white text-xs rounded w-40 h-8";
  const exitButton =
    "font-normal bg-transparent hover:bg-black text-white text-opacity-50 text-xs border-0.01 border-white border-opacity-50 rounded w-40 h-8";

  const buttonStyle =
    style === "NewGameButton"
      ? NewGameButton
      : style === "startButton"
      ? startButton
      : exitButton;

  return (
    <button onClick={onClick} className={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;
