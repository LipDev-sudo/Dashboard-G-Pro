// ─── Widget Types ────────────────────────────────────────────────────────────

export type WidgetType =
  | "tasks"
  | "calendar"
  | "notes"
  | "timer"
  | "weather"
  | "music"
  | "stats"
  | "quickactions";

export interface PlacedWidget {
  id: string;
  type: WidgetType;
  title: string;
  col: number;
  row: number;
  colSpan: number;
  rowSpan: number;
}

export interface WidgetTemplate {
  type: WidgetType;
  title: string;
  icon: string;
  description: string;
  defaultColSpan: number;
  defaultRowSpan: number;
}

// ─── Theme ───────────────────────────────────────────────────────────────────

export type ThemeMode = "light" | "dark";

// ─── Plan System ─────────────────────────────────────────────────────────────

export type UserPlan = "free" | "pro";

export const PLAN_LIMITS: Readonly<Record<UserPlan, number>> = {
  free: 3,
  pro: Infinity,
} as const;

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  plan: UserPlan;
  createdAt: number;
}

/** Shape of the Firestore document at users/{uid} */
export interface UserDocument {
  plan: UserPlan;
  createdAt: number;
  layout: PlacedWidget[];
}

// ─── Auth Context ────────────────────────────────────────────────────────────

export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export interface AuthContextType {
  user: UserProfile | null;
  status: AuthStatus;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  widgetLimit: number;
  canAddWidget: (currentCount: number) => boolean;
}

// ─── Dashboard Context ──────────────────────────────────────────────────────

export interface DashboardContextType {
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
  placedWidgets: PlacedWidget[];
  setPlacedWidgets: React.Dispatch<React.SetStateAction<PlacedWidget[]>>;
  addWidget: (type: WidgetType) => void;
  removeWidget: (id: string) => void;
  reorderWidgets: (fromIndex: number, toIndex: number) => void;
  showAddPanel: boolean;
  setShowAddPanel: (v: boolean) => void;
  showSettings: boolean;
  setShowSettings: (v: boolean) => void;
  showGrid: boolean;
  setShowGrid: (v: boolean) => void;
  showUpgradeModal: boolean;
  setShowUpgradeModal: (v: boolean) => void;
}

// ─── Firebase / Layout (backwards compat alias) ─────────────────────────────

export interface UserLayoutDocument {
  layout: PlacedWidget[];
}
