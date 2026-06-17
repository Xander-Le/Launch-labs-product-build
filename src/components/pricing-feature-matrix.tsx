"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { peakHoursNote } from "@/src/data/pricing";

type FeatureValue = string | "check" | "muted-check" | "dash";
type PlanId = "starter" | "player" | "vip";

type FeatureRow = {
  label: string;
  starter: FeatureValue;
  player: FeatureValue;
  vip: FeatureValue;
};

type FeatureSection = {
  eyebrow: string;
  title: string;
  note?: string;
  rows: FeatureRow[];
};

const plans: {
  id: PlanId;
  name: string;
  tagline: string;
  featured?: boolean;
}[] = [
  { id: "starter", name: "Starter", tagline: "Comparison only" },
  { id: "player", name: "Player", tagline: "Most popular", featured: true },
  { id: "vip", name: "VIP", tagline: "Maximum access" },
];

const featureSections: FeatureSection[] = [
  {
    eyebrow: "Access",
    title: "Reservations",
    rows: [
      {
        label: "Reservations / Month",
        starter: "4 Sessions",
        player: "10 Sessions",
        vip: "Unlimited",
      },
      {
        label: "Booking Window",
        starter: "48 Hours",
        player: "7 Days",
        vip: "14 Days",
      },
      {
        label: "Multi-Reservation",
        starter: "01",
        player: "02",
        vip: "02",
      },
    ],
  },
  {
    eyebrow: "Schedule",
    title: "Bay Reservation Times",
    note: "Weekend peak hours differ from weekday windows. Starter memberships may only book non-peak times, so weekend access can be more limited.",
    rows: [
      {
        label: "Morning: 12am - 9am",
        starter: "muted-check",
        player: "check",
        vip: "check",
      },
      {
        label: "Midday: 9am - 5pm",
        starter: "check",
        player: "check",
        vip: "check",
      },
      {
        label: "Evening: 5pm - 7pm",
        starter: "muted-check",
        player: "muted-check",
        vip: "check",
      },
      {
        label: "Night: 7pm - 12am",
        starter: "check",
        player: "check",
        vip: "check",
      },
    ],
  },
  {
    eyebrow: "Benefits",
    title: "Additional Benefits",
    note: "Peak hour rules apply by plan. Starter does not include peak-hour access.",
    rows: [
      {
        label: "Guest Passes",
        starter: "2 Passes",
        player: "3 Passes",
        vip: "4 Passes",
      },
      {
        label: "Peak Hour Access",
        starter: "muted-check",
        player: "Limited",
        vip: "check",
      },
    ],
  },
];

function FeatureCell({
  value,
  accent = false,
  centered = false,
}: {
  value: FeatureValue;
  accent?: boolean;
  centered?: boolean;
}) {
  const wrapperClass = centered
    ? "flex justify-center"
    : "flex justify-start md:justify-center";

  if (value === "check") {
    return (
      <span className={wrapperClass}>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#4FB9DB] text-[#071018] shadow-[0_0_16px_rgba(79,185,219,0.35)]">
          <Check className="h-3.5 w-3.5 stroke-[3]" />
        </span>
      </span>
    );
  }

  if (value === "muted-check") {
    return (
      <span className={wrapperClass}>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#8A95A5]">
          <Check className="h-3.5 w-3.5 stroke-[2.5]" />
        </span>
      </span>
    );
  }

  if (value === "dash") {
    return (
      <span className={`${wrapperClass} text-[#8A95A5]`}>—</span>
    );
  }

  return (
    <span
      className={`${wrapperClass} text-sm font-semibold md:text-base ${
        accent ? "text-[#75D5FF]" : "text-[#E6E9EF]"
      }`}
    >
      {value}
    </span>
  );
}

function getRowValue(row: FeatureRow, plan: PlanId) {
  return row[plan];
}

export function PricingFeatureMatrix() {
  const [activePlan, setActivePlan] = useState<PlanId>("player");

  return (
    <section className="relative px-4 py-20 text-white md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl border-t border-white/10 pt-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#4FB9DB]">
            Full comparison
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            Membership Features
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#D6DCE5]">
            Compare access, reservation windows, and guest benefits across every
            plan in one view.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111820]/60">
          <div className="hidden md:block">
            <div className="grid grid-cols-[1.4fr_repeat(3,minmax(0,1fr))] border-b border-white/10 bg-[#0A0E14]/80">
              <div className="px-6 py-5 text-sm font-medium text-[#8A95A5]">
                Feature
              </div>

              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`px-4 py-5 text-center ${
                    plan.featured
                      ? "border-x border-[#4FB9DB]/25 bg-[#4FB9DB]/[0.08]"
                      : ""
                  }`}
                >
                  <p
                    className={`text-sm font-semibold ${
                      plan.featured ? "text-[#75D5FF]" : "text-white"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <p className="mt-1 text-xs text-[#8A95A5]">{plan.tagline}</p>
                </div>
              ))}
            </div>

            {featureSections.map((section, sectionIndex) => (
              <div key={section.title}>
                <div
                  className={`grid grid-cols-[1.4fr_repeat(3,minmax(0,1fr))] border-b border-white/10 bg-white/[0.03] ${
                    sectionIndex === 0 ? "" : "border-t border-white/10"
                  }`}
                >
                  <div className="col-span-4 px-6 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4FB9DB]">
                      {section.eyebrow}
                    </p>
                    <p className="mt-1 text-base font-semibold text-white">
                      {section.title}
                    </p>
                    {section.note ? (
                      <p className="mt-2 max-w-3xl text-sm leading-6 text-[#8A95A5]">
                        {section.note}
                      </p>
                    ) : null}
                  </div>
                </div>

                {section.rows.map((row, rowIndex) => (
                  <div
                    key={row.label}
                    className={`group grid grid-cols-[1.4fr_repeat(3,minmax(0,1fr))] border-b border-white/10 transition hover:bg-white/[0.02] ${
                      rowIndex === section.rows.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <div className="px-6 py-4 text-sm font-medium text-[#D6DCE5] transition group-hover:text-white md:text-base">
                      {row.label}
                    </div>

                    {plans.map((plan) => (
                      <div
                        key={plan.id}
                        className={`flex items-center px-4 py-4 ${
                          plan.featured
                            ? "border-x border-[#4FB9DB]/20 bg-[#4FB9DB]/[0.05] group-hover:bg-[#4FB9DB]/[0.08]"
                            : ""
                        }`}
                      >
                        <FeatureCell
                          value={getRowValue(row, plan.id)}
                          accent={plan.featured}
                          centered
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <div className="border-b border-white/10 p-4">
              <div className="grid grid-cols-3 gap-2 rounded-full border border-white/10 bg-[#0A0E14]/80 p-1">
                {plans.map((plan) => {
                  const isActive = activePlan === plan.id;

                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setActivePlan(plan.id)}
                      className={`rounded-full px-3 py-2.5 text-center transition ${
                        isActive
                          ? "bg-[#4FB9DB] text-[#071018] shadow-[0_0_20px_rgba(79,185,219,0.35)]"
                          : "text-white/80 hover:bg-white/5"
                      }`}
                    >
                      <span className="block text-sm font-semibold">
                        {plan.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="mt-3 text-center text-xs text-[#8A95A5]">
                {plans.find((plan) => plan.id === activePlan)?.tagline}
              </p>
            </div>

            {featureSections.map((section) => (
              <div key={section.title} className="border-b border-white/10 last:border-b-0">
                <div className="border-b border-white/10 bg-white/[0.03] px-5 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4FB9DB]">
                    {section.eyebrow}
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    {section.title}
                  </p>
                  {section.note ? (
                    <p className="mt-2 text-sm leading-6 text-[#8A95A5]">
                      {section.note}
                    </p>
                  ) : null}
                </div>

                <div className="divide-y divide-white/10">
                  {section.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-4 px-5 py-4"
                    >
                      <span className="text-sm font-medium text-[#D6DCE5]">
                        {row.label}
                      </span>
                      <FeatureCell
                        value={getRowValue(row, activePlan)}
                        accent={activePlan === "player"}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-5 py-4">
          <p className="text-sm leading-6 text-[#D6DCE5]">{peakHoursNote}</p>
        </div>

        <p className="mt-4 max-w-3xl text-sm leading-6 text-[#8A95A5]">
          Starter is shown for plan comparison only and is not part of the
          founding membership release.
        </p>
      </div>
    </section>
  );
}
