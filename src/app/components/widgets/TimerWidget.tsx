import { memo, useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

const MODES = [
  { label: "Focus", seconds: 25 * 60 },
  { label: "Short Break", seconds: 5 * 60 },
  { label: "Long Break", seconds: 15 * 60 },
] as const;

export const TimerWidget = memo(function TimerWidget() {
  const [mode, setMode] = useState(0);
  const [remaining, setRemaining] = useState(MODES[0].seconds);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setRemaining((r) => {
          if (r <= 1) {
            setRunning(false);
            return 0;
          }
          return r - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const switchMode = (i: number) => {
    setMode(i);
    setRemaining(MODES[i].seconds);
    setRunning(false);
  };

  const reset = () => {
    setRemaining(MODES[mode].seconds);
    setRunning(false);
  };

  const mins = String(Math.floor(remaining / 60)).padStart(2, "0");
  const secs = String(remaining % 60).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-4" role="timer" aria-label="Focus timer">
      <div className="flex gap-1 bg-muted/60 rounded-lg p-0.5" role="tablist" aria-label="Timer modes">
        {MODES.map((m, i) => (
          <button
            key={m.label}
            type="button"
            role="tab"
            aria-selected={i === mode}
            aria-label={`${m.label} mode`}
            title={m.label}
            onClick={() => switchMode(i)}
            className={`px-3 py-1 rounded-md transition-colors text-[0.75rem] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${
              i === mode
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="44" fill="none" stroke="var(--border)" strokeWidth="3" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="text-foreground tabular-nums text-2xl"
            aria-live="polite"
            aria-atomic="true"
          >
            {mins}:{secs}
          </span>
          <span className="text-muted-foreground/50 text-[0.6875rem]">
            {running ? "Running" : "Ready"}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Reset timer"
          title="Reset"
          onClick={reset}
          className="p-2 rounded-full hover:bg-accent text-muted-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <RotateCcw size={14} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label={running ? "Pause timer" : "Start timer"}
          title={running ? "Pause" : "Start"}
          onClick={() => setRunning(!running)}
          className="p-2.5 rounded-full border border-border hover:bg-accent text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {running
            ? <Pause size={16} aria-hidden="true" />
            : <Play size={16} aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
});
