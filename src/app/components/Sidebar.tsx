import { memo, useCallback } from "react";
import {
  LayoutDashboard, Plus, Settings, Sun, Moon,
  PanelLeftClose, PanelLeft, LogOut, Crown,
} from "lucide-react";
import { useDashboard } from "../context/DashboardContext";
import { useAuthContext } from "../context/AuthContext";
import { PlanBadge } from "./PlanBadge";

// ─── Nav item (memoised) ──────────────────────────────────────────────────────

interface NavItemProps {
  icon: React.FC<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
  label: string;
  collapsed: boolean;
  onClick: () => void;
}

const NavItem = memo(function NavItem({ icon: Icon, label, collapsed, onClick }: NavItemProps) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      className={[
        "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg",
        "text-muted-foreground hover:bg-accent hover:text-foreground",
        "transition-colors text-[0.8125rem]",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        collapsed ? "justify-center" : "",
      ].join(" ")}
    >
      <Icon size={16} aria-hidden={true} className="shrink-0" />
      {!collapsed && <span>{label}</span>}
    </button>
  );
});

// ─── Sidebar ──────────────────────────────────────────────────────────────────

export const Sidebar = memo(function Sidebar() {
  const {
    theme, setTheme,
    sidebarOpen, setSidebarOpen,
    setShowAddPanel, setShowSettings,
    setShowUpgradeModal,
  } = useDashboard();

  const { user, logout } = useAuthContext();

  const collapsed = !sidebarOpen;

  const toggleSidebar = useCallback(() => setSidebarOpen(!sidebarOpen), [sidebarOpen, setSidebarOpen]);
  const toggleTheme   = useCallback(() => setTheme(theme === "light" ? "dark" : "light"), [theme, setTheme]);
  const openAddPanel  = useCallback(() => setShowAddPanel(true),  [setShowAddPanel]);
  const openSettings  = useCallback(() => setShowSettings(true),  [setShowSettings]);

  const handleLogout = useCallback(async () => {
    try {
      await logout();
    } catch {
      // Error already logged in context
    }
  }, [logout]);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard",   action: () => {} },
    { icon: Plus,            label: "Add Widget",  action: openAddPanel },
    { icon: Settings,        label: "Settings",    action: openSettings },
  ] as const;

  // Compute initials or first letter for avatar
  const initials = user?.displayName
    ? user.displayName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
    : user?.email?.[0]?.toUpperCase() ?? "?";

  return (
    <>
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        id="sidebar"
        role="navigation"
        aria-label="Menu lateral"
        className={[
          "fixed lg:relative z-40 h-screen flex flex-col bg-card border-r border-border",
          "transition-all duration-300 ease-in-out",
          sidebarOpen ? "w-56" : "w-0 lg:w-14",
          "overflow-hidden",
        ].join(" ")}
      >
        {/* ── Logo / toggle ── */}
        <div className="flex items-center justify-between px-3 py-4 min-h-[52px]">
          {sidebarOpen && (
            <span className="text-foreground text-[0.875rem] tracking-tight font-medium">
              Workspace
            </span>
          )}
          <button
            type="button"
            aria-label={sidebarOpen ? "Recolher menu" : "Expandir menu"}
            title={sidebarOpen ? "Recolher menu" : "Expandir menu"}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-accent text-muted-foreground transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-ring"
          >
            {sidebarOpen
              ? <PanelLeftClose size={16} aria-hidden="true" />
              : <PanelLeft      size={16} aria-hidden="true" />}
          </button>
        </div>

        {/* ── User profile ── */}
        <div className={`px-3 pb-4 ${collapsed ? "flex justify-center" : ""}`}>
          <div className={`flex items-center gap-2.5 ${collapsed ? "justify-center" : ""}`}>
            {/* Avatar */}
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName ?? "User avatar"}
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full border border-border shrink-0 object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                <span className="text-muted-foreground text-[0.6875rem] font-medium">
                  {initials}
                </span>
              </div>
            )}

            {sidebarOpen && (
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-foreground text-[0.8125rem] truncate">
                    {user?.displayName ?? "User"}
                  </p>
                  {user && <PlanBadge plan={user.plan} />}
                </div>
                <p className="text-muted-foreground/60 text-[0.6875rem] truncate">
                  {user?.email ?? "No email"}
                </p>
              </div>
            )}

            {collapsed && user && (
              <div className="hidden lg:block">
                <PlanBadge plan={user.plan} collapsed />
              </div>
            )}
          </div>
        </div>

        <div aria-hidden="true" className="h-px bg-border mx-3" />

        {/* ── Navigation ── */}
        <nav aria-label="Navegação principal" className="flex-1 py-3 px-2 space-y-0.5">
          {navItems.map(({ icon, label, action }) => (
            <NavItem
              key={label}
              icon={icon}
              label={label}
              collapsed={collapsed}
              onClick={action}
            />
          ))}
        </nav>

        {/* ── Upgrade CTA (Free plan, expanded only) ── */}
        {sidebarOpen && user?.plan === "free" && (
          <div className="px-3 pb-2">
            <button
              type="button"
              aria-label="Fazer upgrade para plano PRO"
              title="Upgrade para PRO"
              onClick={() => setShowUpgradeModal(true)}
              className={[
                "w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg",
                "bg-amber-500/10 border border-amber-500/20",
                "text-amber-600 hover:bg-amber-500/15",
                "transition-colors text-[0.8125rem] font-medium",
                "focus-visible:ring-2 focus-visible:ring-ring",
              ].join(" ")}
            >
              <Crown size={14} aria-hidden="true" />
              <span>Upgrade PRO</span>
            </button>
          </div>
        )}

        {/* ── Add widget CTA (expanded only) ── */}
        {sidebarOpen && (
          <div className="px-3 pb-3">
            <button
              type="button"
              aria-label="Adicionar widget ao dashboard"
              title="Adicionar widget"
              onClick={openAddPanel}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-dashed border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors text-[0.8125rem] focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Plus size={14} aria-hidden="true" />
              <span>Add Widget</span>
            </button>
          </div>
        )}

        {/* ── Footer (theme + logout) ── */}
        <div className="px-2 pb-3 border-t border-border pt-3 space-y-0.5">
          {/* Theme toggle */}
          <button
            type="button"
            aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
            title={theme === "light" ? "Dark mode" : "Light mode"}
            onClick={toggleTheme}
            className={[
              "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg",
              "text-muted-foreground hover:bg-accent hover:text-foreground",
              "transition-colors text-[0.8125rem]",
              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              collapsed ? "justify-center" : "",
            ].join(" ")}
          >
            {theme === "light"
              ? <Moon size={16} aria-hidden="true" />
              : <Sun  size={16} aria-hidden="true" />}
            {sidebarOpen && (
              <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
            )}
          </button>

          {/* Logout */}
          <button
            type="button"
            aria-label="Sair da conta"
            title="Sair"
            onClick={handleLogout}
            className={[
              "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg",
              "text-muted-foreground hover:bg-red-500/10 hover:text-red-500",
              "transition-colors text-[0.8125rem]",
              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              collapsed ? "justify-center" : "",
            ].join(" ")}
          >
            <LogOut size={16} aria-hidden="true" />
            {sidebarOpen && <span>Sair</span>}
          </button>
        </div>
      </aside>
    </>
  );
});
