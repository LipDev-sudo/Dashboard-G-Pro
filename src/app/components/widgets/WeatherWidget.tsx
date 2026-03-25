import { memo } from "react";
import { Cloud, MapPin } from "lucide-react";

export const WeatherWidget = memo(function WeatherWidget() {
  return (
    <div className="flex flex-col items-center justify-center py-6 gap-3 text-muted-foreground/50">
      <Cloud size={28} strokeWidth={1.2} aria-hidden="true" />
      <div className="text-center space-y-1">
        <p className="text-[0.8125rem]">No location set</p>
        <p className="text-[0.6875rem] text-muted-foreground/40">
          Connect a weather service to see conditions
        </p>
      </div>
      <button
        type="button"
        aria-label="Set weather location"
        title="Set location"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dashed border-border text-muted-foreground/60 hover:text-muted-foreground hover:border-muted-foreground/50 transition-colors text-[0.6875rem] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <MapPin size={12} aria-hidden="true" />
        <span>Set location</span>
      </button>
    </div>
  );
});
