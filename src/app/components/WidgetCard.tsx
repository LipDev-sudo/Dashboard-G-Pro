import React, { memo, useCallback, useState } from "react";
import { GripVertical, X } from "lucide-react";
import { useDashboard } from "../context/DashboardContext";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  id: string;
  title: string;
  index: number;
  children: React.ReactNode;
  className?: string;
}

// ─── Drag data key ───────────────────────────────────────────────────────────

const DRAG_MIME = "text/x-widget-index";

// ─── Component ────────────────────────────────────────────────────────────────

export const WidgetCard = memo(function WidgetCard({
  id,
  title,
  index,
  children,
  className = "",
}: Props) {
  const { removeWidget, reorderWidgets } = useDashboard();
  const [isDragOver, setIsDragOver] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // ── Drag source ────────────────────────────────────────────────────────────
  const handleDragStart = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData(DRAG_MIME, String(index));
      e.dataTransfer.effectAllowed = "move";
      // Need a small delay so the browser captures the element before we ghost it
      requestAnimationFrame(() => setIsDragging(true));
    },
    [index],
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setIsDragOver(false);
  }, []);

  // ── Drop target ────────────────────────────────────────────────────────────
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    // Only clear if we actually left this element (not a child)
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragOver(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragOver(false);

      const fromIndexStr = e.dataTransfer.getData(DRAG_MIME);
      if (!fromIndexStr) return;

      const fromIndex = Number(fromIndexStr);
      if (Number.isNaN(fromIndex) || fromIndex === index) return;

      reorderWidgets(fromIndex, index);
    },
    [index, reorderWidgets],
  );

  const handleRemove = useCallback(() => removeWidget(id), [id, removeWidget]);

  return (
    <div
      role="region"
      aria-label={title}
      aria-roledescription="Widget arrastável"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={[
        "group bg-card border rounded-xl",
        "shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]",
        "transition-all duration-200 flex flex-col",
        isDragging
          ? "opacity-30 scale-[0.96] border-border/50"
          : "",
        isDragOver && !isDragging
          ? "border-foreground/30 bg-accent/20 ring-2 ring-foreground/10 scale-[1.01]"
          : !isDragging ? "border-border" : "",
        className,
      ].join(" ")}
    >
      {/* ── Card header ── */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60">
        <div className="flex items-center gap-2 cursor-grab active:cursor-grabbing select-none">
          <GripVertical
            size={12}
            aria-hidden="true"
            className="text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-foreground text-[0.8125rem] font-medium">
            {title}
          </span>
        </div>

        <button
          type="button"
          aria-label={`Remover widget ${title}`}
          title={`Remover ${title}`}
          onClick={handleRemove}
          className="p-0.5 rounded opacity-0 group-hover:opacity-100 hover:bg-accent text-muted-foreground transition-all focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X size={12} aria-hidden="true" />
        </button>
      </div>

      {/* ── Card body ── */}
      <div className="flex-1 p-4 overflow-auto">{children}</div>
    </div>
  );
});
