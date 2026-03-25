import { memo } from "react";
import { Calendar } from "lucide-react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
const hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"] as const;

export const CalendarWidget = memo(function CalendarWidget() {
  const today = new Date().getDay();
  const todayIdx = today === 0 ? 6 : today - 1;

  return (
    <div className="overflow-x-auto" role="region" aria-label="Weekly calendar view">
      <div className="min-w-[400px]">
        <div className="grid grid-cols-8 gap-px mb-1">
          <div />
          {days.map((d, i) => (
            <div
              key={d}
              className={`text-center py-1 rounded text-[0.625rem] ${
                i === todayIdx
                  ? "bg-foreground text-background"
                  : "text-muted-foreground"
              }`}
            >
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-8 gap-px">
          {hours.map((h) => (
            <div key={h} className="contents">
              <div className="text-muted-foreground/60 py-2 pr-2 text-right text-[0.5625rem]">
                {h}
              </div>
              {days.map((_, di) => (
                <div
                  key={di}
                  className="border-t border-border/40 py-2 min-h-[24px]"
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center py-3 text-muted-foreground/40 gap-1">
          <Calendar size={14} strokeWidth={1.2} aria-hidden="true" />
          <span className="text-[0.5625rem]">No events scheduled</span>
        </div>
      </div>
    </div>
  );
});
