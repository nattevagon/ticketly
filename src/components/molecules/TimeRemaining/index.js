import React, { useEffect, useState } from 'react'

const TimeRemaining = () => {
  const [timeLeft, setTimeLeft] = useState(60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div className="bg-orange-300 dark:bg-secondary-black p-4 rounded-xl">
      <div className="flex flex-col gap-2 text-primary-black">
        <div className="flex items-center justify-between gap-2">
          <div className="text-md text-primary-gray font-semibold">
            Time Limit Remaining
          </div>
          <div className="text-lg text-primary-black font-bold">
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeRemaining