import { memo, useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

const MODES = [
  { label: "Focus", duration: 25 * 60 },
  { label: "Short Break", duration: 5 * 60 },
  { label: "Long Break", duration: 15 * 60 },
] as const;

export const PomodoroWidget = memo(function PomodoroWidget() {
  const [modeIdx, setModeIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(MODES[0].duration);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            setRunning(false);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const switchMode = (idx: number) => {
    setModeIdx(idx);
    setTimeLeft(MODES[idx].duration);
    setRunning(false);
  };

  const reset = () => {
    setTimeLeft(MODES[modeIdx].duration);
    setRunning(false);
  };

  const mins = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const secs = (timeLeft % 60).toString().padStart(2, "0");
  const progress = 1 - timeLeft / MODES[modeIdx].duration;
  const circumference = 2 * Math.PI * 54;

  return (
    <div className="flex flex-col items-center gap-3" role="timer" aria-label="Pomodoro timer">
      <div className="flex gap-1" role="tablist" aria-label="Timer modes">
        {MODES.map((m, i) => (
          <button
            key={m.label}
            type="button"
            role="tab"
            aria-selected={i === modeIdx}
            aria-label={`${m.label} mode`}
            title={m.label}
            onClick={() => switchMode(i)}
            className={`px-3 py-1 text-xs rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${
              i === modeIdx
                ? "bg-foreground text-card"
                : "text-muted-foreground hover:bg-accent"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120" aria-hidden="true">
          <circle
            cx="60" cy="60" r="54" fill="none" stroke="currentColor"
            className="text-accent" strokeWidth="4"
          />
          <circle
            cx="60" cy="60" r="54" fill="none" stroke="currentColor"
            className="text-muted-foreground/50"
            strokeWidth="4" strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
            style={{ transition: "stroke-dashoffset 0.5s" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-2xl text-foreground tabular-nums tracking-wider"
            aria-live="polite"
            aria-atomic="true"
          >
            {mins}:{secs}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          aria-label={running ? "Pause timer" : "Start timer"}
          title={running ? "Pause" : "Start"}
          onClick={() => setRunning(!running)}
          className="p-2.5 rounded-full bg-foreground text-card hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {running ? <Pause className="w-4 h-4" aria-hidden="true" /> : <Play className="w-4 h-4" aria-hidden="true" />}
        </button>
        <button
          type="button"
          aria-label="Reset timer"
          title="Reset"
          onClick={reset}
          className="p-2.5 rounded-full bg-accent text-muted-foreground hover:bg-accent/80 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <RotateCcw className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
});
