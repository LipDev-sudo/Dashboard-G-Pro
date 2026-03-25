import { useEffect, useRef, useCallback, memo } from "react";
import { Menu, Plus, Loader2 } from "lucide-react";

// Hooks
import { useDebounce } from "./hooks/useDebounce";

// Services
import { saveLayout, loadLayout } from "./services/layoutService";

// Context
import { AuthProvider, useAuthContext } from "./context/AuthContext";
import { DashboardProvider, useDashboard } from "./context/DashboardContext";

// Types
import type { PlacedWidget, WidgetType } from "./types";

// Components
import { Sidebar }        from "./components/Sidebar";
import { WidgetCard }     from "./components/WidgetCard";
import { SettingsPanel }  from "./components/SettingsPanel";
import { AddWidgetPanel } from "./components/AddWidgetPanel";
import { EmptyCanvas }    from "./components/EmptyCanvas";
import { LoginScreen }    from "./components/LoginScreen";
import { UpgradeModal }   from "./components/UpgradeModal";

// Widget components
import { TaskWidget }         from "./components/widgets/TaskWidget";
import { CalendarWidget }     from "./components/widgets/CalendarWidget";
import { NotesWidget }        from "./components/widgets/NotesWidget";
import { TimerWidget }        from "./components/widgets/TimerWidget";
import { WeatherWidget }      from "./components/widgets/WeatherWidget";
import { MusicWidget }        from "./components/widgets/MusicWidget";
import { StatsWidget }        from "./components/widgets/StatsWidget";
import { QuickActionsWidget } from "./components/widgets/QuickActionsWidget";

// ─── Constants ────────────────────────────────────────────────────────────────

const widgetComponents: Readonly<Record<WidgetType, React.FC>> = {
  tasks:        TaskWidget,
  calendar:     CalendarWidget,
  notes:        NotesWidget,
  timer:        TimerWidget,
  weather:      WeatherWidget,
  music:        MusicWidget,
  stats:        StatsWidget,
  quickactions: QuickActionsWidget,
};

const colSpanClass: Readonly<Record<number, string>> = {
  1: "col-span-1",
  2: "col-span-1 md:col-span-2",
  3: "col-span-1 md:col-span-3",
};

const DEBOUNCE_MS = 1_000;

// ─── Grid background (memoised, pure visual) ─────────────────────────────────

const GridOverlay = memo(function GridOverlay() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none opacity-20"
      style={{
        backgroundImage: [
          "linear-gradient(to right, var(--border) 1px, transparent 1px)",
          "linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
        ].join(","),
        backgroundSize: "80px 80px",
      }}
    />
  );
});

// ─── Loading screen ──────────────────────────────────────────────────────────

const LoadingScreen = memo(function LoadingScreen() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Loader2
          size={24}
          className="animate-spin text-muted-foreground"
          aria-hidden="true"
        />
        <p className="text-muted-foreground text-[0.8125rem]">Carregando...</p>
      </div>
    </div>
  );
});

// ─── Dashboard (authenticated view) ──────────────────────────────────────────

function Dashboard() {
  const {
    placedWidgets,
    setPlacedWidgets,
    sidebarOpen,
    setSidebarOpen,
    setShowAddPanel,
    showGrid,
  } = useDashboard();

  const { user } = useAuthContext();
  const isFirstLoad = useRef(true);

  // ── Load layout once user is known ─────────────────────────────────────────
  useEffect(() => {
    if (!user) return;

    let cancelled = false;

    async function fetchLayout() {
      try {
        const layout = await loadLayout(user!.uid);
        if (!cancelled && layout.length > 0) {
          setPlacedWidgets(layout);
        }
      } catch (err) {
        console.error("[Dashboard] Failed to load layout:", err);
      }
    }

    fetchLayout();

    return () => {
      cancelled = true;
    };
  }, [user, setPlacedWidgets]);

  // ── Debounced persist ─────────────────────────────────────────────────────
  const persist = useCallback(
    async (uid: string, widgets: PlacedWidget[]) => {
      try {
        await saveLayout(uid, widgets);
      } catch (err) {
        console.error("[Dashboard] Failed to save layout:", err);
      }
    },
    [],
  );

  const debouncedPersist = useDebounce(persist, DEBOUNCE_MS);

  useEffect(() => {
    if (!user) return;

    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    debouncedPersist(user.uid, placedWidgets);
  }, [placedWidgets, user, debouncedPersist]);

  // ── Render ─────────────────────────────────────────────────────────────────
  const hasWidgets = placedWidgets.length > 0;

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden" role="main">
        {/* ── Header ── */}
        <header className="flex items-center justify-between px-4 lg:px-6 py-3 border-b border-border/60 shrink-0">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label={sidebarOpen ? "Fechar menu lateral" : "Abrir menu lateral"}
              title={sidebarOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={sidebarOpen}
              aria-controls="sidebar"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-1 rounded-md hover:bg-accent text-muted-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <Menu size={16} aria-hidden="true" />
            </button>

            <h1 className="text-foreground text-sm font-medium">Dashboard</h1>
          </div>

          {hasWidgets && (
            <button
              type="button"
              aria-label="Adicionar widget ao dashboard"
              title="Add Widget"
              onClick={() => setShowAddPanel(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dashed border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors text-xs focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <Plus size={13} aria-hidden="true" />
              <span className="hidden sm:inline">Add Widget</span>
            </button>
          )}
        </header>

        {/* ── Canvas ── */}
        {!hasWidgets ? (
          <EmptyCanvas />
        ) : (
          <div className="flex-1 overflow-y-auto p-4 lg:p-6 relative">
            {showGrid && <GridOverlay />}

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
              {placedWidgets.map((w, i) => {
                const Comp = widgetComponents[w.type];
                if (!Comp) return null;

                return (
                  <WidgetCard
                    key={w.id}
                    id={w.id}
                    title={w.title}
                    index={i}
                    className={colSpanClass[w.colSpan] ?? "col-span-1"}
                  >
                    <Comp />
                  </WidgetCard>
                );
              })}

              {/* Add-widget ghost cell */}
              <button
                type="button"
                aria-label="Adicionar novo widget ao dashboard"
                title="Add widget"
                onClick={() => setShowAddPanel(true)}
                className="min-h-[140px] rounded-xl border border-dashed border-border hover:border-muted-foreground/50 hover:bg-accent/20 transition-all flex flex-col items-center justify-center gap-2 cursor-pointer group focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <Plus
                  size={16}
                  aria-hidden="true"
                  className="text-border group-hover:text-muted-foreground transition-colors"
                />
                <span className="text-border group-hover:text-muted-foreground text-[11px]">
                  Add widget
                </span>
              </button>
            </div>
          </div>
        )}
      </main>

      <AddWidgetPanel />
      <SettingsPanel />
      <UpgradeModal />
    </div>
  );
}

// ─── Auth Gate ────────────────────────────────────────────────────────────────

function AuthGate() {
  const { status } = useAuthContext();

  if (status === "loading") {
    return <LoadingScreen />;
  }

  if (status === "unauthenticated") {
    return <LoginScreen />;
  }

  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <AuthProvider>
      <AuthGate />
    </AuthProvider>
  );
}
