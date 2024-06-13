interface ProgressBarProps {
  timeLeft: number;
  totalTime: number;
}

const ProgressBar = ({ timeLeft, totalTime }: ProgressBarProps) => {
  return (
    <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
      <div
        className="bg-yellow-500 h-2 rounded-full transition-all duration-1000 ease-linear"
        style={{ width: `${(timeLeft / totalTime) * 100}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
