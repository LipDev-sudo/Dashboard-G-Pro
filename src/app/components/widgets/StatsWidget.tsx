import { memo } from "react";
import { BarChart3 } from "lucide-react";

const emptyBars = [
  { label: "Tasks", pct: 0 },
  { label: "Focus Time", pct: 0 },
  { label: "Notes", pct: 0 },
  { label: "Weekly Goal", pct: 0 },
] as const;

export const StatsWidget = memo(function StatsWidget() {
  return (
    <div className="space-y-4" role="region" aria-label="Progress statistics">
      {emptyBars.map((s) => (
        <div key={s.label} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-[0.8125rem]">{s.label}</span>
            <span className="text-muted-foreground/40 text-[0.75rem]">--</span>
          </div>
          <div
            className="h-2 bg-muted rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={s.pct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${s.label} progress`}
          />
        </div>
      ))}
      <div className="flex flex-col items-center pt-2 text-muted-foreground/40 gap-1.5">
        <BarChart3 size={16} strokeWidth={1.2} aria-hidden="true" />
        <span className="text-[0.6875rem]">No data yet</span>
      </div>
    </div>
  );
});
