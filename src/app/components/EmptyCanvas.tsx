import { memo } from "react";
import { Plus, Layers } from "lucide-react";
import { useDashboard } from "../context/DashboardContext";

// ─── Grid overlay (memoised, purely visual) ───────────────────────────────────

const GridOverlay = memo(function GridOverlay() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none opacity-25"
      style={{
        backgroundImage: [
          "linear-gradient(to right, var(--border) 1px, transparent 1px)",
          "linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
        ].join(","),
        backgroundSize: "60px 60px",
      }}
    />
  );
});

// ─── Radial edge fade (memoised, purely visual) ───────────────────────────────

const RadialFade = memo(function RadialFade() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 30%, var(--background) 80%)",
      }}
    />
  );
});

// ─── Placeholder cell ─────────────────────────────────────────────────────────

interface PlaceholderCellProps {
  onAdd: () => void;
  index: number;
}

const PlaceholderCell = memo(function PlaceholderCell({ onAdd, index }: PlaceholderCellProps) {
  return (
    <button
      type="button"
      aria-label={`Adicionar widget na posição ${index + 1}`}
      title={`Adicionar widget na posição ${index + 1}`}
      onClick={onAdd}
      className="aspect-[4/3] rounded-xl border border-dashed border-border/70 hover:border-muted-foreground/40 hover:bg-accent/20 transition-all flex flex-col items-center justify-center gap-1.5 group cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <Plus
        size={14}
        aria-hidden="true"
        className="text-muted-foreground/25 group-hover:text-muted-foreground/60 transition-colors"
      />
      <span className="text-muted-foreground/25 group-hover:text-muted-foreground/60 transition-colors text-[0.5625rem]">
        Add widget
      </span>
    </button>
  );
});

// ─── EmptyCanvas ──────────────────────────────────────────────────────────────

export const EmptyCanvas = memo(function EmptyCanvas() {
  const { setShowAddPanel, showGrid } = useDashboard();

  const handleAdd = () => setShowAddPanel(true);

  return (
    <section
      aria-label="Dashboard vazio – adicione seu primeiro widget"
      className="flex-1 flex flex-col items-center justify-center px-6 relative"
    >
      {showGrid && <GridOverlay />}
      <RadialFade />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg space-y-8">
        {/* Icon */}
        <div
          aria-hidden="true"
          className="p-5 rounded-2xl bg-muted/40 border border-border/50"
        >
          <Layers size={24} strokeWidth={1.2} className="text-muted-foreground/60" />
        </div>

        {/* Copy */}
        <div className="space-y-2.5">
          <h2 className="text-foreground/80 text-[1.375rem]">
            Start building your workspace
          </h2>
          <p className="text-muted-foreground/60 max-w-sm mx-auto text-[0.8125rem] leading-relaxed">
            Your workspace is empty. Add widgets to personalise your dashboard
            and build the layout that works for you.
          </p>
        </div>

        {/* Primary CTA */}
        <button
          type="button"
          aria-label="Adicionar primeiro widget ao dashboard"
          title="Add your first widget"
          onClick={handleAdd}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background hover:opacity-90 transition-opacity text-[0.8125rem] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <Plus size={15} aria-hidden="true" />
          <span>Add your first widget</span>
        </button>

        {/* Ghost grid */}
        <div
          role="list"
          aria-label="Células de widget disponíveis"
          className="grid grid-cols-3 gap-3 w-full max-w-md pt-2"
        >
          {Array.from({ length: 6 }, (_, i) => (
            <div role="listitem" key={i}>
              <PlaceholderCell onAdd={handleAdd} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
