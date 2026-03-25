import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useAuthContext } from "./AuthContext";
import type {
  ThemeMode,
  PlacedWidget,
  WidgetTemplate,
  WidgetType,
  DashboardContextType,
} from "../types";

// ─── Constants ────────────────────────────────────────────────────────────────

export const widgetTemplates: WidgetTemplate[] = [
  { type: "tasks",        title: "Tasks",         icon: "check-square", description: "Track your to-do list",       defaultColSpan: 1, defaultRowSpan: 1 },
  { type: "notes",        title: "Notes",         icon: "file-text",    description: "Quick notes and thoughts",    defaultColSpan: 1, defaultRowSpan: 1 },
  { type: "calendar",     title: "Calendar",      icon: "calendar",     description: "Weekly schedule view",        defaultColSpan: 2, defaultRowSpan: 1 },
  { type: "timer",        title: "Pomodoro",      icon: "timer",        description: "Focus timer",                 defaultColSpan: 1, defaultRowSpan: 1 },
  { type: "weather",      title: "Weather",       icon: "cloud",        description: "Current conditions",          defaultColSpan: 1, defaultRowSpan: 1 },
  { type: "music",        title: "Music",         icon: "music",        description: "Background player",           defaultColSpan: 1, defaultRowSpan: 1 },
  { type: "stats",        title: "Progress",      icon: "bar-chart",    description: "Stats & goals",               defaultColSpan: 1, defaultRowSpan: 1 },
  { type: "quickactions", title: "Quick Actions", icon: "zap",          description: "Shortcuts panel",             defaultColSpan: 1, defaultRowSpan: 1 },
];

// ─── Context ──────────────────────────────────────────────────────────────────

const DashboardContext = createContext<DashboardContextType | null>(null);

export function useDashboard(): DashboardContextType {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard must be used within DashboardProvider");
  return ctx;
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const { canAddWidget } = useAuthContext();

  const [theme, setThemeState] = useState<ThemeMode>("light");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [placedWidgets, setPlacedWidgets] = useState<PlacedWidget[]>([]);
  const [showAddPanel, setShowAddPanel] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  // Sync theme class on mount and on change
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const setTheme = useCallback((t: ThemeMode) => {
    setThemeState(t);
  }, []);

  const addWidget = useCallback((type: WidgetType) => {
    const template = widgetTemplates.find((t) => t.type === type);
    if (!template) return;

    setPlacedWidgets((prev) => {
      if (!canAddWidget(prev.length)) {
        setTimeout(() => setShowUpgradeModal(true), 0);
        return prev;
      }

      return [
        ...prev,
        {
          id: `${type}-${Date.now()}`,
          type,
          title: template.title,
          col: 0,
          row: 0,
          colSpan: template.defaultColSpan,
          rowSpan: template.defaultRowSpan,
        },
      ];
    });
  }, [canAddWidget]);

  const removeWidget = useCallback((id: string) => {
    setPlacedWidgets((prev) => prev.filter((w) => w.id !== id));
  }, []);

  /**
   * Swaps two widgets by their array indices.
   * The CSS grid renders in array order, so swapping indices = swapping visual positions.
   */
  const reorderWidgets = useCallback((fromIndex: number, toIndex: number) => {
    setPlacedWidgets((prev) => {
      if (
        fromIndex < 0 || fromIndex >= prev.length ||
        toIndex < 0 || toIndex >= prev.length ||
        fromIndex === toIndex
      ) {
        return prev;
      }

      const next = [...prev];
      const temp = next[fromIndex];
      next[fromIndex] = next[toIndex];
      next[toIndex] = temp;
      return next;
    });
  }, []);

  const value = useMemo<DashboardContextType>(
    () => ({
      theme,
      setTheme,
      sidebarOpen,
      setSidebarOpen,
      placedWidgets,
      setPlacedWidgets,
      addWidget,
      removeWidget,
      reorderWidgets,
      showAddPanel,
      setShowAddPanel,
      showSettings,
      setShowSettings,
      showGrid,
      setShowGrid,
      showUpgradeModal,
      setShowUpgradeModal,
    }),
    [
      theme, setTheme,
      sidebarOpen,
      placedWidgets,
      addWidget, removeWidget, reorderWidgets,
      showAddPanel,
      showSettings,
      showGrid,
      showUpgradeModal,
    ],
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
