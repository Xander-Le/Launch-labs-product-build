"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/src/data/site";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skillLevel: string;
  memberStatus: string;
  notes: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  skillLevel: "",
  memberStatus: "",
  notes: "",
};

export function LeagueInterestForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent("The Grind League Interest List");
    const body = encodeURIComponent(
      [
        "The Grind League interest list submission",
        "",
        `Name: ${form.firstName} ${form.lastName}`.trim(),
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Skill level: ${form.skillLevel || "Not provided"}`,
        `Launch Labs member: ${form.memberStatus || "Not provided"}`,
        "",
        form.notes ? `Notes:\n${form.notes}` : "Notes: None",
      ].join("\n")
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[1.75rem] border border-[var(--sky-blue)]/30 bg-[var(--sky-blue)]/[0.06] p-8 md:p-10">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--sky-blue)]/30 bg-[var(--sky-blue)]/10">
            <CheckCircle2 className="h-5 w-5 text-[var(--sky-blue)]" />
          </div>

          <div>
            <h3 className="font-[var(--font-outfit)] text-2xl font-semibold text-white">
              You&apos;re on the list.
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">
              Your email app should open with your interest details. Send the
              message to complete your signup, and we&apos;ll reach out when The
              Grind League schedule and registration details are ready.
            </p>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              Prefer email directly?{" "}
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("The Grind League Interest List")}`}
                className="font-semibold text-[var(--sky-blue)] transition hover:text-white"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-white/10 bg-[var(--surface)]/70 p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white">
            First name
          </span>
          <input
            required
            type="text"
            autoComplete="given-name"
            value={form.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[var(--background)]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--sky-blue)]/50"
            placeholder="Alex"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white">
            Last name
          </span>
          <input
            required
            type="text"
            autoComplete="family-name"
            value={form.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[var(--background)]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--sky-blue)]/50"
            placeholder="Jordan"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white">
            Email
          </span>
          <input
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[var(--background)]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--sky-blue)]/50"
            placeholder="you@email.com"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white">
            Phone
          </span>
          <input
            required
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[var(--background)]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--sky-blue)]/50"
            placeholder="(469) 555-0100"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white">
            Skill level <span className="text-[var(--text-muted)]">(optional)</span>
          </span>
          <select
            value={form.skillLevel}
            onChange={(event) => updateField("skillLevel", event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-[var(--background)]/70 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--sky-blue)]/50"
          >
            <option value="">Select one</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Low handicap">Low handicap</option>
            <option value="Competitive amateur">Competitive amateur</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-white">
            Launch Labs member?{" "}
            <span className="text-[var(--text-muted)]">(optional)</span>
          </span>
          <select
            value={form.memberStatus}
            onChange={(event) =>
              updateField("memberStatus", event.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-[var(--background)]/70 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--sky-blue)]/50"
          >
            <option value="">Select one</option>
            <option value="Yes, current member">Yes, current member</option>
            <option value="Planning to join">Planning to join</option>
            <option value="Not yet">Not yet</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-white">
          Anything we should know?{" "}
          <span className="text-[var(--text-muted)]">(optional)</span>
        </span>
        <textarea
          rows={4}
          value={form.notes}
          onChange={(event) => updateField("notes", event.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-[var(--background)]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--sky-blue)]/50"
          placeholder="Preferred day, team interest, handicap range, etc."
        />
      </label>

      <p className="mt-5 text-xs leading-6 text-[var(--text-muted)]">
        By joining the interest list, you agree to receive league updates from
        Launch Labs. See our{" "}
        <a
          href={siteConfig.privacyUrl}
          className="text-[var(--sky-blue)] transition hover:text-white"
        >
          Privacy Policy
        </a>
        .
      </p>

      <button
        type="submit"
        data-event="cta_join_league_interest"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-[var(--background)] shadow-[0_0_30px_rgba(79,185,219,0.3)] transition hover:scale-[1.02] motion-reduce:hover:scale-100 sm:w-auto"
        style={{ background: "var(--gradient-primary)" }}
      >
        Join League Interest List
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
