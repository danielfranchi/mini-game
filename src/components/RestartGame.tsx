import Button from "./Button";

interface RestartGameProps {
  onLoad: () => void;
  onRestart: () => void;
  onLoadText: string;
  restartText: string;
  style: string;
}

const RestartGame = ({
  onLoad,
  onRestart,
  onLoadText,
  restartText,
  style,
}: RestartGameProps) => (
  <div className="flex justify-center space-x-2">
    <Button onClick={onRestart} text={restartText} style={style} />
    <Button onClick={onLoad} text={onLoadText} style={style} />
  </div>
);

export default RestartGame;
