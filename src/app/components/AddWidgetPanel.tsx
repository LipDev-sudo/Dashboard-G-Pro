import { memo, useCallback, useEffect, useRef } from "react";
import {
  X, CheckSquare, FileText, Calendar,
  Timer, Cloud, Music, BarChart3, Zap, Crown, Lock,
} from "lucide-react";
import { useDashboard, widgetTemplates } from "../context/DashboardContext";
import { useAuthContext } from "../context/AuthContext";
import type { WidgetTemplate, WidgetType } from "../types";

// ─── Icon map ─────────────────────────────────────────────────────────────────

type IconComponent = React.FC<{ size?: number; className?: string; "aria-hidden"?: boolean | "true" | "false" }>;

const iconMap: Readonly<Record<string, IconComponent>> = {
  "check-square": CheckSquare,
  "file-text":    FileText,
  calendar:       Calendar,
  timer:          Timer,
  cloud:          Cloud,
  music:          Music,
  "bar-chart":    BarChart3,
  zap:            Zap,
} as const;

// ─── Widget row (memoised) ────────────────────────────────────────────────────

interface WidgetRowProps {
  template: WidgetTemplate;
  isPlaced: boolean;
  isLocked: boolean;
  onAdd: (type: WidgetType) => void;
}

const WidgetRow = memo(function WidgetRow({ template, isPlaced, isLocked, onAdd }: WidgetRowProps) {
  const Icon = iconMap[template.icon];
  const disabled = isPlaced || isLocked;

  const handleClick = useCallback(() => {
    if (!disabled) onAdd(template.type);
  }, [disabled, onAdd, template.type]);

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={
        isPlaced
          ? `${template.title} já adicionado`
          : isLocked
            ? `${template.title} – disponível no plano PRO`
            : `Adicionar widget ${template.title}`
      }
      title={
        isPlaced
          ? `${template.title} já adicionado`
          : isLocked
            ? `Upgrade para PRO para adicionar ${template.title}`
            : `Adicionar ${template.title}`
      }
      className={[
        "w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all",
        disabled
          ? "border-border opacity-40 cursor-not-allowed"
          : "border-border hover:border-muted-foreground hover:bg-accent/40 cursor-pointer",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
      ].join(" ")}
    >
      <div className="p-2 rounded-lg bg-muted shrink-0" aria-hidden="true">
        {Icon && <Icon size={16} aria-hidden={true} className="text-foreground" />}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-foreground text-[0.8125rem]">{template.title}</p>
        <p className="text-muted-foreground text-[0.6875rem]">{template.description}</p>
      </div>

      {isPlaced && (
        <span className="ml-auto text-muted-foreground text-[0.6875rem] shrink-0" aria-hidden="true">
          Added
        </span>
      )}

      {isLocked && !isPlaced && (
        <Lock size={14} className="ml-auto text-amber-500 shrink-0" aria-hidden="true" />
      )}
    </button>
  );
});

// ─── Panel ────────────────────────────────────────────────────────────────────

export const AddWidgetPanel = memo(function AddWidgetPanel() {
  const { showAddPanel, setShowAddPanel, addWidget, placedWidgets, setShowUpgradeModal } = useDashboard();
  const { canAddWidget, user } = useAuthContext();
  const closeRef = useRef<HTMLButtonElement>(null);

  const isFreePlan = user?.plan === "free";
  const atLimit = !canAddWidget(placedWidgets.length);

  // Focus close button when panel opens
  useEffect(() => {
    if (showAddPanel) closeRef.current?.focus();
  }, [showAddPanel]);

  // Close on Escape
  useEffect(() => {
    if (!showAddPanel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowAddPanel(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showAddPanel, setShowAddPanel]);

  const handleAdd = useCallback(
    (type: WidgetType) => {
      addWidget(type);
      setShowAddPanel(false);
    },
    [addWidget, setShowAddPanel],
  );

  if (!showAddPanel) return null;

  const placedTypes = new Set(placedWidgets.map((w) => w.type));

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/15 z-50 backdrop-blur-[2px]"
        aria-hidden="true"
        onClick={() => setShowAddPanel(false)}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-widget-title"
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-card border-l border-border z-50 flex flex-col shadow-lg"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="text-foreground text-[0.9375rem]" id="add-widget-title">
            Add Widget
          </h2>
          <button
            ref={closeRef}
            type="button"
            aria-label="Fechar painel de widgets"
            title="Fechar"
            onClick={() => setShowAddPanel(false)}
            className="p-1 rounded-md hover:bg-accent text-muted-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>

        {/* Plan limit banner */}
        {isFreePlan && (
          <div className="px-4 pt-4">
            <div
              className={[
                "flex items-center gap-2.5 p-3 rounded-xl border text-[0.75rem]",
                atLimit
                  ? "bg-amber-500/5 border-amber-500/20 text-amber-600"
                  : "bg-muted/50 border-border text-muted-foreground",
              ].join(" ")}
            >
              {atLimit ? (
                <Lock size={14} className="shrink-0" aria-hidden="true" />
              ) : (
                <Crown size={14} className="shrink-0" aria-hidden="true" />
              )}
              <span>
                {atLimit
                  ? "Limite atingido – faça upgrade para adicionar mais"
                  : `${placedWidgets.length}/3 widgets usados`}
              </span>
              {atLimit && (
                <button
                  type="button"
                  aria-label="Fazer upgrade para plano PRO"
                  title="Upgrade"
                  onClick={() => {
                    setShowAddPanel(false);
                    setShowUpgradeModal(true);
                  }}
                  className="ml-auto text-amber-600 font-semibold hover:underline shrink-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none rounded"
                >
                  Upgrade
                </button>
              )}
            </div>
          </div>
        )}

        {/* List */}
        <div
          role="list"
          aria-labelledby="add-widget-title"
          className="flex-1 overflow-y-auto p-4 space-y-2"
        >
          {widgetTemplates.map((t) => {
            const placed = placedTypes.has(t.type);
            const locked = atLimit && !placed;

            return (
              <div role="listitem" key={t.type}>
                <WidgetRow
                  template={t}
                  isPlaced={placed}
                  isLocked={locked}
                  onAdd={handleAdd}
                />
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
});
