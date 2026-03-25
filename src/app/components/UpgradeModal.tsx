import { memo, useEffect, useRef } from "react";
import { X, Crown, Check } from "lucide-react";
import { useDashboard } from "../context/DashboardContext";

const PRO_FEATURES = [
  "Widgets ilimitados",
  "Temas personalizados",
  "Suporte prioritário",
  "Exportação de dados",
  "Integrações avançadas",
] as const;

export const UpgradeModal = memo(function UpgradeModal() {
  const { showUpgradeModal, setShowUpgradeModal } = useDashboard();
  const closeRef = useRef<HTMLButtonElement>(null);

  // Focus close button on open
  useEffect(() => {
    if (showUpgradeModal) closeRef.current?.focus();
  }, [showUpgradeModal]);

  // Close on Escape
  useEffect(() => {
    if (!showUpgradeModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowUpgradeModal(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showUpgradeModal, setShowUpgradeModal]);

  if (!showUpgradeModal) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-[60] backdrop-blur-[3px]"
        aria-hidden="true"
        onClick={() => setShowUpgradeModal(false)}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="upgrade-title"
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      >
        <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-500/10">
                <Crown size={18} className="text-amber-500" aria-hidden="true" />
              </div>
              <h2 id="upgrade-title" className="text-foreground text-[1rem] font-medium">
                Upgrade para PRO
              </h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              aria-label="Fechar modal de upgrade"
              title="Fechar"
              onClick={() => setShowUpgradeModal(false)}
              className="p-1 rounded-md hover:bg-accent text-muted-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-4 space-y-4">
            {/* Limit message */}
            <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <p className="text-foreground text-[0.8125rem]">
                Você atingiu o limite do plano gratuito
              </p>
              <p className="text-muted-foreground text-[0.75rem] mt-1">
                O plano Free permite até 3 widgets. Faça upgrade para desbloquear widgets ilimitados.
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-2" aria-label="Benefícios do plano PRO">
              {PRO_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5">
                  <div className="p-0.5 rounded-full bg-emerald-500/10">
                    <Check size={12} className="text-emerald-500" aria-hidden="true" />
                  </div>
                  <span className="text-foreground text-[0.8125rem]">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Pricing */}
            <div className="text-center py-2">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-foreground text-2xl font-semibold">R$ 19</span>
                <span className="text-muted-foreground text-[0.75rem]">/mês</span>
              </div>
              <p className="text-muted-foreground/60 text-[0.6875rem] mt-1">
                Cancele quando quiser
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6 space-y-2">
            <button
              type="button"
              aria-label="Fazer upgrade para plano PRO"
              title="Fazer upgrade para PRO"
              onClick={() => {
                // Placeholder – wire up Stripe/payment here
                setShowUpgradeModal(false);
              }}
              className={[
                "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl",
                "bg-foreground text-background font-medium text-[0.875rem]",
                "hover:opacity-90 transition-opacity",
                "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              ].join(" ")}
            >
              <Crown size={15} aria-hidden="true" />
              <span>Assinar PRO</span>
            </button>

            <button
              type="button"
              aria-label="Continuar com plano gratuito"
              title="Continuar com plano gratuito"
              onClick={() => setShowUpgradeModal(false)}
              className="w-full px-4 py-2.5 rounded-xl text-muted-foreground text-[0.8125rem] hover:bg-accent/50 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Continuar no plano Free
            </button>
          </div>
        </div>
      </div>
    </>
  );
});
