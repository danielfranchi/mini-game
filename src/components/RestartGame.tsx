import Button from "./Button";

interface RestartGameProps {
  onRestart: () => void;
  onLoad: () => void;
  restartText: string;
  onLoadText: string;
  style: string;
}

const RestartGame = ({
  onRestart,
  onLoad,
  restartText,
  onLoadText,
  style,
}: RestartGameProps) => (
  <div className="flex justify-center space-x-2">
    <Button onClick={onRestart} text={restartText} style={style} />
    <Button onClick={onLoad} text={onLoadText} style={style} />
  </div>
);

export default RestartGame;
