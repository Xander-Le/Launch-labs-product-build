import {
  founderMembershipSlots,
  getFounderSlotsPercentClaimed,
  getFounderSlotsRemaining,
} from "@/src/data/pricing";

type FounderSlotsProgressProps = {
  variant?: "default" | "compact" | "banner";
  className?: string;
};

export function FounderSlotsProgress({
  variant = "default",
  className = "",
}: FounderSlotsProgressProps) {
  const { total, claimed } = founderMembershipSlots;
  const remaining = getFounderSlotsRemaining();
  const percent = getFounderSlotsPercentClaimed();
  const soldOut = remaining === 0;

  if (variant === "compact") {
    return (
      <div
        className={`inline-flex w-fit max-w-full flex-col gap-2 rounded-2xl border border-[var(--sky-blue)]/30 bg-[var(--sky-blue)]/10 px-4 py-3 ${className}`}
      >
        <div className="flex items-center gap-2 text-sm font-semibold leading-none text-[var(--pale-aqua)]">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--sky-blue)] shadow-[0_0_10px_rgba(79,185,219,0.8)]" />
          {soldOut
            ? "All founder spots claimed"
            : `${remaining} of ${total} founder spots remaining`}
        </div>
        <div className="h-1.5 w-full min-w-[12rem] overflow-hidden rounded-full bg-white/10 sm:min-w-[16rem]">
          <div
            className="h-full rounded-full bg-[var(--sky-blue)] transition-[width] duration-700 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="text-xs text-[var(--text-muted)]">
          {soldOut
            ? "Founder pricing is closed."
            : `${claimed} claimed · limited before opening`}
        </p>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div
        className={`rounded-[1.25rem] border border-[var(--sky-blue)]/25 bg-[var(--sky-blue)]/10 px-5 py-4 md:px-6 ${className}`}
      >
        <FounderSlotsProgress />
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-[var(--pale-aqua)]">
            {soldOut ? "Founder memberships sold out" : "Founder spot availability"}
          </p>
          <p className="mt-1 text-sm leading-6 text-[var(--text-body)]">
            {soldOut
              ? "All 25 founder memberships have been claimed. Founder pricing is no longer available."
              : `${claimed} of ${total} founder spots claimed · ${remaining} remaining before closing`}
          </p>
        </div>

        {!soldOut && remaining <= 10 ? (
          <p className="shrink-0 text-sm font-semibold text-white">
            {remaining === 1 ? "1 spot left" : `${remaining} spots left`}
          </p>
        ) : null}
      </div>

      <div
        className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={claimed}
        aria-label={`${claimed} of ${total} founder membership spots claimed`}
      >
        <div
          className="h-full rounded-full bg-[var(--sky-blue)] shadow-[0_0_16px_rgba(79,185,219,0.35)] transition-[width] duration-700 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
