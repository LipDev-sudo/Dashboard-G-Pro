import { memo, useState, useCallback, type FormEvent } from "react";
import { Layers, Loader2, Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useAuthContext } from "../context/AuthContext";

// ─── Google icon (inline SVG) ─────────────────────────────────────────────────

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

// ─── Firebase error translator ────────────────────────────────────────────────

function translateFirebaseError(code: string): string {
  const map: Record<string, string> = {
    "auth/email-already-in-use": "Este email já está em uso.",
    "auth/invalid-email": "Email inválido.",
    "auth/weak-password": "A senha deve ter pelo menos 6 caracteres.",
    "auth/user-not-found": "Nenhuma conta encontrada com este email.",
    "auth/wrong-password": "Senha incorreta.",
    "auth/invalid-credential": "Email ou senha incorretos.",
    "auth/too-many-requests": "Muitas tentativas. Tente novamente mais tarde.",
    "auth/popup-closed-by-user": "Login cancelado.",
    "auth/network-request-failed": "Erro de conexão. Verifique sua internet.",
  };
  return map[code] ?? "Ocorreu um erro. Tente novamente.";
}

// ─── Tab type ─────────────────────────────────────────────────────────────────

type AuthTab = "login" | "register";

// ─── LoginScreen ──────────────────────────────────────────────────────────────

export const LoginScreen = memo(function LoginScreen() {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuthContext();

  const [tab, setTab] = useState<AuthTab>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetForm = useCallback(() => {
    setEmail("");
    setPassword("");
    setName("");
    setError(null);
    setShowPassword(false);
  }, []);

  const switchTab = useCallback((t: AuthTab) => {
    setTab(t);
    resetForm();
  }, [resetForm]);

  // ── Email/password submit ─────────────────────────────────────────────────
  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (tab === "login") {
        await signInWithEmail(email, password);
      } else {
        if (!name.trim()) {
          setError("Preencha seu nome.");
          setLoading(false);
          return;
        }
        await signUpWithEmail(email, password, name.trim());
      }
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code ?? "";
      setError(translateFirebaseError(code));
      setLoading(false);
    }
  }, [tab, email, password, name, signInWithEmail, signUpWithEmail]);

  // ── Google sign-in ────────────────────────────────────────────────────────
  const handleGoogle = useCallback(async () => {
    setError(null);
    setGoogleLoading(true);
    try {
      await signInWithGoogle();
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code ?? "";
      setError(translateFirebaseError(code));
      setGoogleLoading(false);
    }
  }, [signInWithGoogle]);

  const isAnyLoading = loading || googleLoading;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      {/* ── Grid background (matches dashboard) ── */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: [
            "linear-gradient(to right, var(--border) 1px, transparent 1px)",
            "linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-[420px] flex flex-col items-center">
        {/* ── Logo ── */}
        <div className="p-4 rounded-2xl bg-card border border-border/50 shadow-[0_1px_3px_rgba(0,0,0,0.04)] mb-8">
          <Layers size={28} strokeWidth={1.2} className="text-foreground/70" aria-hidden="true" />
        </div>

        {/* ── Card ── */}
        <div className="w-full bg-card border border-border rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Header */}
          <div className="px-6 pt-6 pb-4 text-center">
            <h1 className="text-foreground text-[1.125rem] font-medium tracking-tight">
              Dashboard G-Pro
            </h1>
            <p className="text-muted-foreground text-[0.8125rem] mt-1.5">
              {tab === "login"
                ? "Acesse seu workspace personalizado"
                : "Crie sua conta gratuitamente"}
            </p>
          </div>

          {/* Tab switcher */}
          <div className="px-6 pb-4">
            <div className="flex bg-muted/60 rounded-xl p-1">
              {(["login", "register"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={tab === t}
                  aria-label={t === "login" ? "Aba de login" : "Aba de cadastro"}
                  title={t === "login" ? "Entrar" : "Criar conta"}
                  onClick={() => switchTab(t)}
                  disabled={isAnyLoading}
                  className={[
                    "flex-1 py-2 rounded-lg text-[0.8125rem] transition-all",
                    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    tab === t
                      ? "bg-card text-foreground shadow-sm font-medium"
                      : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  {t === "login" ? "Entrar" : "Criar conta"}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 pb-2 space-y-3">
            {/* Name (register only) */}
            {tab === "register" && (
              <div className="relative">
                <User
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  aria-label="Nome"
                  autoComplete="name"
                  disabled={isAnyLoading}
                  className={[
                    "w-full pl-10 pr-4 py-2.5 rounded-xl",
                    "bg-muted/40 border border-border",
                    "text-foreground text-[0.8125rem]",
                    "placeholder:text-muted-foreground/50",
                    "focus:border-foreground/30 focus:bg-card",
                    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    "transition-all disabled:opacity-50",
                  ].join(" ")}
                />
              </div>
            )}

            {/* Email */}
            <div className="relative">
              <Mail
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                aria-label="Email"
                autoComplete="email"
                required
                disabled={isAnyLoading}
                className={[
                  "w-full pl-10 pr-4 py-2.5 rounded-xl",
                  "bg-muted/40 border border-border",
                  "text-foreground text-[0.8125rem]",
                  "placeholder:text-muted-foreground/50",
                  "focus:border-foreground/30 focus:bg-card",
                  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  "transition-all disabled:opacity-50",
                ].join(" ")}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={tab === "register" ? "Senha (mín. 6 caracteres)" : "Senha"}
                aria-label="Senha"
                autoComplete={tab === "login" ? "current-password" : "new-password"}
                required
                minLength={6}
                disabled={isAnyLoading}
                className={[
                  "w-full pl-10 pr-11 py-2.5 rounded-xl",
                  "bg-muted/40 border border-border",
                  "text-foreground text-[0.8125rem]",
                  "placeholder:text-muted-foreground/50",
                  "focus:border-foreground/30 focus:bg-card",
                  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  "transition-all disabled:opacity-50",
                ].join(" ")}
              />
              <button
                type="button"
                tabIndex={-1}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                title={showPassword ? "Ocultar senha" : "Mostrar senha"}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/40 hover:text-muted-foreground transition-colors"
              >
                {showPassword
                  ? <EyeOff size={15} aria-hidden="true" />
                  : <Eye size={15} aria-hidden="true" />}
              </button>
            </div>

            {/* Error message */}
            {error && (
              <div className="px-3 py-2.5 rounded-xl bg-red-500/5 border border-red-500/15" role="alert">
                <p className="text-red-500 text-[0.75rem]">{error}</p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isAnyLoading}
              aria-label={tab === "login" ? "Entrar com email" : "Criar conta"}
              title={tab === "login" ? "Entrar" : "Criar conta"}
              className={[
                "w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl",
                "bg-foreground text-background font-medium text-[0.8125rem]",
                "hover:opacity-90 transition-all",
                "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                "disabled:opacity-50 disabled:cursor-not-allowed",
              ].join(" ")}
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              ) : (
                <ArrowRight size={16} aria-hidden="true" />
              )}
              <span>
                {loading
                  ? "Aguarde..."
                  : tab === "login"
                    ? "Entrar"
                    : "Criar conta"}
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="px-6 py-3">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-card px-3 text-muted-foreground/50 text-[0.6875rem]">
                  ou continue com
                </span>
              </div>
            </div>
          </div>

          {/* Google button */}
          <div className="px-6 pb-6">
            <button
              type="button"
              disabled={isAnyLoading}
              aria-label="Entrar com Google"
              title="Entrar com Google"
              onClick={handleGoogle}
              className={[
                "w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl",
                "border border-border bg-card hover:bg-accent/40",
                "text-foreground text-[0.8125rem]",
                "transition-all",
                "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                "disabled:opacity-50 disabled:cursor-not-allowed",
              ].join(" ")}
            >
              {googleLoading ? (
                <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              ) : (
                <GoogleIcon />
              )}
              <span>Google</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-muted-foreground/40 text-[0.6875rem] mt-6 text-center">
          Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade.
        </p>
      </div>
    </div>
  );
});
