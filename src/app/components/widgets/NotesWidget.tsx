import { memo, useState } from "react";

export const NotesWidget = memo(function NotesWidget() {
  const [text, setText] = useState("");

  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Start typing..."
      aria-label="Quick notes"
      className="w-full h-full min-h-[120px] bg-transparent text-foreground text-[0.8125rem] leading-[1.7] placeholder:text-muted-foreground/50 outline-none resize-none"
    />
  );
});
