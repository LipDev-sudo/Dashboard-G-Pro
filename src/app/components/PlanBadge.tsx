import { memo } from "react";
import { Crown } from "lucide-react";
import type { UserPlan } from "../types";

interface PlanBadgeProps {
  plan: UserPlan;
  collapsed?: boolean;
}

export const PlanBadge = memo(function PlanBadge({ plan, collapsed = false }: PlanBadgeProps) {
  const isPro = plan === "pro";

  if (collapsed) {
    return (
      <div
        title={isPro ? "Plano PRO" : "Plano gratuito"}
        aria-label={isPro ? "Plano PRO" : "Plano gratuito"}
        className={[
          "w-6 h-6 rounded-full flex items-center justify-center text-[0.5rem] font-bold",
          isPro
            ? "bg-amber-500/15 text-amber-500"
            : "bg-muted text-muted-foreground",
        ].join(" ")}
      >
        {isPro ? <Crown size={10} aria-hidden="true" /> : "F"}
      </div>
    );
  }

  return (
    <span
      title={isPro ? "Plano PRO" : "Plano gratuito"}
      aria-label={isPro ? "Plano PRO" : "Plano gratuito"}
      className={[
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.625rem] font-semibold uppercase tracking-wider",
        isPro
          ? "bg-amber-500/15 text-amber-500"
          : "bg-muted text-muted-foreground",
      ].join(" ")}
    >
      {isPro && <Crown size={10} aria-hidden="true" />}
      {plan}
    </span>
  );
});
