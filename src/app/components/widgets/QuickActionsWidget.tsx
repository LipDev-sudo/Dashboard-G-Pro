import { memo } from "react";
import {
  Plus, FileText, CalendarPlus, Timer,
  Link, Upload, MessageSquare, Bookmark,
} from "lucide-react";

const actions = [
  { icon: Plus,          label: "New Task" },
  { icon: FileText,      label: "New Note" },
  { icon: CalendarPlus,  label: "Add Event" },
  { icon: Timer,         label: "Start Timer" },
  { icon: Link,          label: "Save Link" },
  { icon: Upload,        label: "Upload" },
  { icon: MessageSquare, label: "Message" },
  { icon: Bookmark,      label: "Bookmark" },
] as const;

export const QuickActionsWidget = memo(function QuickActionsWidget() {
  return (
    <div className="grid grid-cols-4 gap-2" role="toolbar" aria-label="Quick actions">
      {actions.map(({ icon: Icon, label }) => (
        <button
          key={label}
          type="button"
          aria-label={label}
          title={label}
          className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-dashed border-border hover:border-muted-foreground/40 hover:bg-accent/30 transition-all group focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <div className="p-2 rounded-lg bg-muted/40 group-hover:bg-muted transition-colors" aria-hidden="true">
            <Icon size={14} className="text-muted-foreground/50 group-hover:text-foreground transition-colors" />
          </div>
          <span className="text-muted-foreground/50 group-hover:text-foreground transition-colors text-[0.6875rem]">
            {label}
          </span>
        </button>
      ))}
    </div>
  );
});
