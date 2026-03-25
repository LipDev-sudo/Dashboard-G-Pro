import { memo } from "react";
import { Music, Play } from "lucide-react";

export const MusicWidget = memo(function MusicWidget() {
  return (
    <div className="flex flex-col items-center justify-center py-6 gap-3 text-muted-foreground/50">
      <div
        className="w-14 h-14 rounded-xl bg-muted/60 border border-border flex items-center justify-center"
        aria-hidden="true"
      >
        <Music size={20} strokeWidth={1.2} />
      </div>
      <div className="text-center space-y-1">
        <p className="text-[0.8125rem]">No music playing</p>
        <p className="text-[0.6875rem] text-muted-foreground/40">
          Add tracks or connect a service
        </p>
      </div>
      <div
        className="w-full max-w-[200px] h-1 bg-muted rounded-full"
        role="progressbar"
        aria-valuenow={0}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Music playback progress"
      />
      <button
        type="button"
        aria-label="Play music"
        title="Play music"
        className="p-2.5 rounded-full border border-dashed border-border text-muted-foreground/40 hover:text-muted-foreground hover:border-muted-foreground/50 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <Play size={14} aria-hidden="true" />
      </button>
    </div>
  );
});
