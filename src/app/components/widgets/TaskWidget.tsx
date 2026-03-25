import { memo, useState, useCallback } from "react";
import { Plus, CheckSquare } from "lucide-react";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

export const TaskWidget = memo(function TaskWidget() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const toggle = useCallback((id: number) => {
    setTasks((t) => t.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));
  }, []);

  const add = useCallback(() => {
    if (!input.trim()) return;
    setTasks((t) => [...t, { id: Date.now(), text: input.trim(), done: false }]);
    setInput("");
  }, [input]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") add();
    },
    [add],
  );

  return (
    <div className="space-y-2.5">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a task..."
          aria-label="New task text"
          className="flex-1 px-2.5 py-1.5 rounded-lg bg-muted/60 border border-border text-foreground text-[0.75rem] placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        />
        <button
          type="button"
          aria-label="Add task"
          title="Add task"
          onClick={add}
          className="p-1.5 rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <Plus size={14} aria-hidden="true" />
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-6 text-muted-foreground/50 gap-2">
          <CheckSquare size={20} strokeWidth={1.2} aria-hidden="true" />
          <span className="text-[0.6875rem]">No tasks yet</span>
        </div>
      ) : (
        <ul className="space-y-0.5" aria-label="Task list">
          {tasks.map((t) => (
            <li
              key={t.id}
              role="checkbox"
              aria-checked={t.done}
              aria-label={t.text}
              tabIndex={0}
              onClick={() => toggle(t.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(t.id);
                }
              }}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-accent/40 cursor-pointer transition-colors"
            >
              <div
                aria-hidden="true"
                className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                  t.done
                    ? "bg-foreground border-foreground"
                    : "border-muted-foreground/50"
                }`}
              >
                {t.done && (
                  <svg width="8" height="8" viewBox="0 0 10 10" aria-hidden="true">
                    <path
                      d="M2 5l2.5 2.5L8 3"
                      stroke="var(--background)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                )}
              </div>
              <span
                className={`text-[0.75rem] ${
                  t.done
                    ? "line-through text-muted-foreground"
                    : "text-foreground"
                }`}
              >
                {t.text}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
