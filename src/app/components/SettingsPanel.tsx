import { memo, useCallback, useEffect, useRef } from "react";
import { X, Sun, Moon } from "lucide-react";
import { useDashboard } from "../context/DashboardContext";
import type { ThemeMode } from "../types";

// ─── Toggle switch (memoised) ─────────────────────────────────────────────────

interface ToggleProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  id: string;
}

const Toggle = memo(function Toggle({ checked, onChange, label, id }: ToggleProps) {
  return (
    <div className="flex items-center justify-between px-1">
      <label htmlFor={id} className="text-foreground text-[0.8125rem] cursor-pointer">
        {label}
      </label>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        title={label}
        onClick={() => onChange(!checked)}
        className={[
          "w-9 h-5 rounded-full transition-colors relative",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
          checked ? "bg-foreground" : "bg-muted",
        ].join(" ")}
      >
        <div
          aria-hidden="true"
          className={[
            "absolute top-0.5 w-4 h-4 rounded-full transition-transform",
            checked ? "translate-x-4 bg-background" : "translate-x-0.5 bg-muted-foreground",
          ].join(" ")}
        />
      </button>
    </div>
  );
});

// ─── Panel ────────────────────────────────────────────────────────────────────

export const SettingsPanel = memo(function SettingsPanel() {
  const {
    showSettings, setShowSettings,
    theme, setTheme,
    showGrid, setShowGrid,
    placedWidgets, removeWidget,
  } = useDashboard();

  const closeRef = useRef<HTMLButtonElement>(null);

  // Focus the close button when panel opens
  useEffect(() => {
    if (showSettings) closeRef.current?.focus();
  }, [showSettings]);

  // Close on Escape
  useEffect(() => {
    if (!showSettings) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowSettings(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showSettings, setShowSettings]);

  const handleTheme = useCallback(
    (t: ThemeMode) => setTheme(t),
    [setTheme],
  );

  const handleGridToggle = useCallback(
    (v: boolean) => setShowGrid(v),
    [setShowGrid],
  );

  if (!showSettings) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-black/15 z-50 backdrop-blur-[2px]"
        onClick={() => setShowSettings(false)}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Configurações do dashboard"
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-card border-l border-border z-50 flex flex-col shadow-lg"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="text-foreground text-[0.9375rem]">Settings</h2>
          <button
            ref={closeRef}
            type="button"
            aria-label="Fechar configurações"
            title="Fechar"
            onClick={() => setShowSettings(false)}
            className="p-1 rounded-md hover:bg-accent text-muted-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">

          {/* ── Appearance ── */}
          <section aria-labelledby="settings-appearance" className="space-y-3">
            <p
              id="settings-appearance"
              className="text-muted-foreground text-[0.6875rem] uppercase tracking-[0.05em]"
            >
              Appearance
            </p>
            <div className="flex gap-2" role="radiogroup" aria-label="Tema de cores">
              {(["light", "dark"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  role="radio"
                  aria-checked={theme === t}
                  aria-label={t === "light" ? "Tema claro" : "Tema escuro"}
                  title={t === "light" ? "Light theme" : "Dark theme"}
                  onClick={() => handleTheme(t)}
                  className={[
                    "flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border transition-all text-[0.8125rem]",
                    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    theme === t
                      ? "border-foreground/30 bg-accent"
                      : "border-border hover:border-muted-foreground",
                  ].join(" ")}
                >
                  {t === "light"
                    ? <Sun  size={14} aria-hidden="true" />
                    : <Moon size={14} aria-hidden="true" />}
                  <span className="text-foreground capitalize">{t}</span>
                </button>
              ))}
            </div>
          </section>

          {/* ── Canvas ── */}
          <section aria-labelledby="settings-canvas" className="space-y-3">
            <p
              id="settings-canvas"
              className="text-muted-foreground text-[0.6875rem] uppercase tracking-[0.05em]"
            >
              Canvas
            </p>
            <Toggle
              id="grid-guides-toggle"
              label="Show grid guides"
              checked={showGrid}
              onChange={handleGridToggle}
            />
          </section>

          {/* ── Active widgets ── */}
          {placedWidgets.length > 0 && (
            <section aria-labelledby="settings-widgets" className="space-y-3">
              <p
                id="settings-widgets"
                className="text-muted-foreground text-[0.6875rem] uppercase tracking-[0.05em]"
              >
                Active Widgets
              </p>
              <ul className="space-y-1" aria-label="Widgets ativos">
                {placedWidgets.map((w) => (
                  <li
                    key={w.id}
                    className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <span className="text-foreground text-[0.8125rem]">{w.title}</span>
                    <button
                      type="button"
                      aria-label={`Remover widget ${w.title}`}
                      title={`Remover ${w.title}`}
                      onClick={() => removeWidget(w.id)}
                      className="text-muted-foreground text-[0.6875rem] hover:text-destructive transition-colors focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </aside>
    </>
  );
});
