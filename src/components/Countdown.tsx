import { useState, useEffect } from "react";

// ✏️ EDIT THIS DATE to when you met
const SINCE_DATE = new Date("2025-08-01T00:00:00");

interface TimeUnit {
  value: number;
  label: string;
}

const Countdown = () => {
  const [elapsed, setElapsed] = useState<TimeUnit[]>([]);

  useEffect(() => {
    const calculate = () => {
      const now = new Date();
      const diff = now.getTime() - SINCE_DATE.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setElapsed([
        { value: days, label: "Days" },
        { value: hours, label: "Hours" },
        { value: minutes, label: "Minutes" },
        { value: seconds, label: "Seconds" },
      ]);
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {elapsed.map((unit) => (
        <div
          key={unit.label}
          className="glass-card glow-rose px-5 py-4 sm:px-8 sm:py-6 text-center min-w-[80px] sm:min-w-[100px]"
        >
          <div className="font-display text-3xl sm:text-4xl font-light text-rose-accent tabular-nums">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
