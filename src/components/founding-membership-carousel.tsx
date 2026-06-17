"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { foundingPlans } from "@/src/data/pricing";
import { siteConfig } from "@/src/data/site";
import { FounderSlotsProgress } from "@/src/components/founder-slots-progress";

type BillingCycle = "monthly" | "quarterly" | "annual";

type FoundingMembershipCarouselProps = {
  variant?: "home" | "pricing";
  showIntro?: boolean;
  showFooterNote?: boolean;
  hideDisabledPlans?: boolean;
  showCompareLink?: boolean;
  showSlotsProgress?: boolean;
};

const billingOptions: { id: BillingCycle; label: string; note: string }[] = [
  {
    id: "monthly",
    label: "Monthly",
    note: "Month-to-month · billed monthly",
  },
  {
    id: "quarterly",
    label: "Quarterly",
    note: "3-month term · billed monthly",
  },
  {
    id: "annual",
    label: "Annual",
    note: "12-month term · billed monthly",
  },
];

function getPlanPrice(plan: (typeof foundingPlans)[number], cycle: BillingCycle) {
  if (cycle === "monthly") return plan.monthlyPrice;
  if (cycle === "quarterly") return plan.quarterlyPrice;
  return plan.annualPrice;
}

export function FoundingMembershipCarousel({
  variant = "pricing",
  showIntro = true,
  showFooterNote = true,
  hideDisabledPlans = false,
  showCompareLink = false,
  showSlotsProgress = true,
}: FoundingMembershipCarouselProps) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const activeBilling = billingOptions.find(
    (option) => option.id === billingCycle
  );

  const visiblePlans = hideDisabledPlans
    ? foundingPlans.filter((plan) => !plan.disabled)
    : foundingPlans;

  return (
    <div className="relative text-white">
      <div className="relative mx-auto max-w-7xl">
        {showIntro ? (
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
              Founders Membership
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#D6DCE5] md:text-xl">
              Start now, upgrade when you&apos;re ready. No hidden fees.
              <br className="hidden md:block" />
              15% off General Membership &amp; No Initiation.
            </p>
          </div>
        ) : null}

        {showSlotsProgress ? (
          <div className="mx-auto mt-8 max-w-2xl">
            <FounderSlotsProgress />
          </div>
        ) : null}

        <div
          className={`mx-auto flex max-w-xl rounded-full border p-1.5 ${
            variant === "home"
              ? "border-white/10 bg-[var(--surface)]"
              : "border-[#4FB9DB]/60 bg-[#111820] shadow-[0_0_35px_rgba(79,185,219,0.28)]"
          } ${showIntro || showSlotsProgress ? "mt-8" : "mt-0"}`}
        >
          {billingOptions.map((option) => {
            const isActive = billingCycle === option.id;

            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setBillingCycle(option.id)}
                className={`flex-1 rounded-full border-0 px-4 py-3 text-sm font-semibold transition md:text-base ${
                  isActive
                    ? "shadow-[0_0_20px_rgba(79,185,219,0.35)]"
                    : "bg-transparent text-[var(--text-body)] hover:bg-white/10 hover:text-white"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: "var(--sky-blue)",
                        color: "var(--background)",
                      }
                    : undefined
                }
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <p
          className={`mt-4 text-center text-sm ${
            variant === "home" ? "text-[var(--text-muted)]" : "text-[#8A95A5]"
          }`}
        >
          {activeBilling?.note}. All terms are billed monthly.
        </p>

        <div
          className={`mt-10 grid grid-cols-1 gap-6 ${
            visiblePlans.length === 2
              ? "md:mx-auto md:max-w-4xl md:grid-cols-2"
              : "md:grid-cols-3"
          }`}
        >
          {visiblePlans.map((plan) => {
            const price = getPlanPrice(plan, billingCycle);

            return (
              <article
                key={plan.name}
                className={`group rounded-[1.35rem] border bg-[#171717] transition duration-300 ease-out hover:-translate-y-2 hover:border-[#67D6FF] hover:shadow-[0_0_34px_rgba(79,185,219,0.55)] focus-within:-translate-y-2 focus-within:border-[#67D6FF] focus-within:shadow-[0_0_34px_rgba(79,185,219,0.55)] ${
                  plan.featured
                    ? "border-[#67D6FF] shadow-[0_0_34px_rgba(79,185,219,0.35)]"
                    : "border-white/10"
                } ${plan.disabled ? "opacity-80" : ""}`}
              >
                <div className="p-6 md:p-7">
                  <div className="flex min-h-[40px] items-start justify-between gap-4">
                    <h3 className="text-2xl font-medium tracking-[0.04em] text-[#75D5FF]">
                      {plan.name}
                    </h3>

                    {plan.badge && !plan.disabled ? (
                      <span className="rounded-full border border-[#4FB9DB]/40 bg-[#4FB9DB]/10 px-3 py-1 text-xs font-semibold text-[#BDEDE8]">
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-8 min-h-[88px]">
                    {price === null ? (
                      <div className="text-4xl font-semibold tracking-[-0.04em] text-white/70">
                        —
                      </div>
                    ) : (
                      <div className="flex items-end gap-4">
                        <div className="text-6xl font-semibold tracking-[-0.06em] text-[#75D5FF]">
                          ${price}
                        </div>

                        <div className="pb-2">
                          <div className="text-lg font-semibold text-[#C8CDD6]">
                            per month
                          </div>
                          <div className="mt-1 text-sm text-[#75D5FF]">
                            Initiation fees $0
                          </div>
                        </div>
                      </div>
                    )}

                    <p className="mt-3 text-sm text-[#8A95A5]">
                      {price === null
                        ? "Not available for founding memberships"
                        : activeBilling?.note}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/15 p-6 md:p-7">
                  <h4 className="text-xl font-semibold text-white">
                    What&apos;s included
                  </h4>

                  <ul className="mt-5 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-[#B7BDC7]"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#75D5FF] text-[#75D5FF] transition group-hover:scale-110">
                          <Check className="h-4 w-4" />
                        </span>
                        <span className="text-base font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {!plan.disabled ? (
                    <Link
                      href={siteConfig.bookingUrl}
                      data-event="cta_founder_membership"
                      className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition ${
                        plan.featured
                          ? "shadow-[0_0_18px_rgba(79,185,219,0.35)] hover:opacity-90"
                          : "border-2 border-[var(--sky-blue)] bg-transparent text-white hover:bg-[var(--sky-blue)]/15"
                      }`}
                      style={
                        plan.featured
                          ? {
                              backgroundColor: "var(--sky-blue)",
                              color: "var(--background)",
                            }
                          : undefined
                      }
                    >
                      Join {plan.name.replace(" - Founder", "")}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <div className="mt-8 rounded-full border border-white/15 bg-[#071018]/30 px-5 py-3.5 text-center text-sm font-semibold text-[#C8CDD6]">
                      Not offered for founders
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {showCompareLink ? (
          <div className="mt-8 text-center">
            <Link
              href="/pricing/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4FB9DB] transition hover:text-white"
            >
              Compare full membership details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : null}

        {variant === "home" && showFooterNote ? (
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-[#8A95A5]">
            Founder pricing is limited to 25 spots before opening. Once they
            are gone, these rates are gone.
          </p>
        ) : null}
      </div>
    </div>
  );
}
