import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CircleGauge,
  ClipboardList,
  Flag,
  Gauge,
  ListChecks,
  Mail,
  MapPin,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FaqAccordion } from "@/src/components/faq-accordion";
import { BreadcrumbSchema } from "@/src/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/src/components/seo/faq-schema";
import { LeagueInterestForm } from "@/src/components/league-interest-form";
import { RelatedPageLinks } from "@/src/components/related-page-links";
import { pageCtas } from "@/src/data/nav";
import { seoIntros } from "@/src/data/seo";
import { siteConfig } from "@/src/data/site";
import { buildMetadata, seoPages } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata(seoPages.leagues);

const statusItems = [
  {
    label: "League status",
    value: "Coming soon",
    icon: Sparkles,
  },
  {
    label: "Interest list",
    value: "Open now",
    icon: ClipboardList,
  },
  {
    label: "Registration",
    value: "After opening",
    icon: CalendarDays,
  },
  {
    label: "Scoring platform",
    value: "Trackman",
    icon: Radar,
  },
];

const conceptPillars = [
  {
    title: "Built for competitive reps",
    description:
      "The Grind League is designed for golfers who want weekly structure, real accountability, and a reason to keep improving between outdoor rounds.",
    icon: Target,
  },
  {
    title: "Trackman-verified scoring",
    description:
      "Planned league rounds use simulator data and consistent indoor conditions so standings reflect performance — not guesswork.",
    icon: CircleGauge,
  },
  {
    title: "Private performance environment",
    description:
      "No crowded sports bar bays. League play happens in clean, reservation-only Trackman studios built for focused golf.",
    icon: ShieldCheck,
  },
  {
    title: "Local golf community",
    description:
      "Connect with competitive golfers across Garland, Rowlett, Sachse, Mesquite, and east Dallas who want more than casual range time.",
    icon: Users,
  },
];

const futureLeagueSteps = [
  {
    title: "Join the interest list",
    description:
      "Tell us you want in. We will use the list to share format previews, season timing, and registration details as they are finalized.",
    icon: ClipboardList,
  },
  {
    title: "Review the planned format",
    description:
      "Before registration opens, we will publish the season structure, scoring rules, and booking expectations for league rounds.",
    icon: ListChecks,
  },
  {
    title: "Register when seasons open",
    description:
      "Once Launch Labs is open and league details are confirmed, interest list members will be invited to claim spots for the first season.",
    icon: Flag,
  },
  {
    title: "Play, post, and climb standings",
    description:
      "Reserve league windows, play your round in a private bay, and track results through a structured indoor season built around Trackman.",
    icon: Trophy,
  },
];

const plannedSeasonPreview = [
  "Weekly round windows inside private Trackman bays",
  "Individual standings with optional team formats under consideration",
  "Net and gross scoring options for different skill levels",
  "Season-long leaderboard with a planned playoff structure",
  "Virtual course play and skills-based tiebreak options",
  "Consistent simulator conditions for fair indoor competition",
];

const trackmanBenefits = [
  {
    title: "Verified ball and club data",
    description:
      "Every shot can be measured with tour-level feedback — ball speed, launch, spin, carry, and more — so league rounds feel credible.",
    icon: Gauge,
  },
  {
    title: "Consistent indoor conditions",
    description:
      "Wind, rain, and daylight do not change the setup. Planned league play stays fair week to week inside the studio.",
    icon: ShieldCheck,
  },
  {
    title: "World-class virtual courses",
    description:
      "Compete on premium Trackman course libraries instead of guessing at outdoor tee-time availability during the season.",
    icon: Flag,
  },
  {
    title: "Performance tracking over time",
    description:
      "Use league reps to monitor trends in your game — not just one-off simulator sessions without context.",
    icon: BarChart3,
  },
  {
    title: "Skills challenges for tiebreaks",
    description:
      "Planned formats can include structured skills events when standings need a clean tiebreaker.",
    icon: Target,
  },
  {
    title: "Private bay focus",
    description:
      "League rounds happen in a clean, reservation-only environment — not a loud entertainment venue.",
    icon: Radar,
  },
];

const audienceCards = [
  {
    title: "Competitive amateurs",
    description:
      "Golfers who want weekly structure, standings, and a reason to keep dialing in their game between outdoor rounds.",
    icon: Trophy,
  },
  {
    title: "Launch Labs members",
    description:
      "Members who already train in the studio and want a competitive layer on top of solo practice and course play.",
    icon: ShieldCheck,
  },
  {
    title: "Men's league and tournament players",
    description:
      "Players preparing for club leagues, local events, or a more consistent competitive rhythm during the year.",
    icon: Flag,
  },
  {
    title: "Small groups and teams",
    description:
      "Friends, coworkers, or regular foursomes who want a team-oriented format in a private indoor setting.",
    icon: Users,
  },
];

const membershipPerks = [
  "Members may receive early registration access when the first season opens.",
  "League round windows may align with member booking benefits and studio access.",
  "Founding memberships include 24/7 bay access for practice between league rounds.",
  "Guest access depends on your membership plan and final league rules.",
];

const faqs = [
  {
    id: "what-is-grind-league",
    question: "What is The Grind League?",
    answer:
      "The Grind League is Launch Labs' planned competitive indoor golf league in Garland, TX. It is built around Trackman scoring, weekly structure, and private simulator bays — without the crowded sports bar atmosphere.",
  },
  {
    id: "registration-open",
    question: "Is league registration open yet?",
    answer:
      "Not yet. The Grind League is coming soon. Join the interest list to receive updates when the first season format, schedule, and registration details are ready after Launch Labs opens.",
  },
  {
    id: "membership-required",
    question: "Do I need a Launch Labs membership to join the league?",
    answer:
      "Final league requirements will be announced before registration opens. Membership may provide preferred access or booking benefits, but the interest list is open to members and non-members alike.",
  },
  {
    id: "scoring",
    question: "How will league scoring work?",
    answer:
      "The Grind League is planned around Trackman simulator scoring with consistent indoor conditions. Exact scoring formats — including net, gross, and skills tiebreak options — will be published before registration opens.",
  },
  {
    id: "teams",
    question: "Will there be team formats?",
    answer:
      "Team options are under consideration alongside individual standings. Final formats will be shared with the interest list before the first season launches.",
  },
  {
    id: "pricing",
    question: "How much will the league cost?",
    answer:
      "League pricing has not been finalized. We are not publishing exact fees, prize pools, or roster limits until registration details are confirmed. Interest list members will receive pricing before sign-ups open.",
  },
  {
    id: "location",
    question: "Where will The Grind League be played?",
    answer:
      "League rounds are planned for Launch Labs at 565 W Oates Rd #100 in Garland, TX 75043 — serving golfers across Garland, Rowlett, Sachse, Firewheel, East Richardson, Mesquite, and East DFW.",
  },
  {
    id: "difference",
    question: "How is this different from a bar-style simulator league?",
    answer:
      "Launch Labs is a private, performance-first Trackman studio — not a sports bar. The Grind League is designed for focused competition, verified data, and clean bay time rather than walk-in entertainment traffic.",
  },
];

function SectionIntro({
  eyebrow,
  title,
  description,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--sky-blue)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-[var(--font-outfit)] text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-body)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function IconTile({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-[var(--surface)]/60 p-6 transition motion-reduce:transition-none hover:border-[var(--sky-blue)]/30 hover:bg-[var(--surface)]">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--sky-blue)]/30 bg-[var(--sky-blue)]/10">
        <Icon className="h-5 w-5 text-[var(--sky-blue)]" />
      </div>
      <h3 className="font-[var(--font-outfit)] text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
        {description}
      </p>
    </div>
  );
}

function FlowPanel({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-[var(--surface)]/70 p-6 shadow-[0_0_40px_rgba(79,185,219,0.08)] md:p-8">
      {children}
    </div>
  );
}

export default function GolfLeaguePage() {
  return (
    <>
      <BreadcrumbSchema
        id="leagues-breadcrumb-schema"
        items={[
          { name: "Home", path: "/" },
          { name: "Golf League Garland TX", path: "/golf-league-garland-tx" },
        ]}
      />
      <FAQSchema
        id="leagues-faq-schema"
        faqs={faqs.map(({ question, answer }) => ({ question, answer }))}
      />

      <main className="relative min-h-screen overflow-hidden bg-[var(--background)] pb-24 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(79,185,219,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(79,185,219,0.06)_1px,transparent_1px)] bg-[size:120px_120px]" />
      <div className="pointer-events-none fixed left-1/2 top-20 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[var(--sky-blue)]/12 blur-[140px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,14,20,0.28)_45%,rgba(10,14,20,0.92)_100%)]" />

      {/* Hero */}
      <section className="relative px-4 pb-12 pt-32 md:px-6 md:pb-16 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--sky-blue)]">
                The Grind League
              </p>

              <h1 className="mt-4 font-[var(--font-outfit)] text-5xl font-bold tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                Golf League Garland TX
              </h1>

              <p className="mt-6 text-lg leading-8 text-[var(--text-body)]">
                {seoIntros.leagues}
              </p>

              <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">
                Built for golfers who want structured competition, verified
                simulator scoring, and a clean private studio — not a crowded
                sports bar league.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#interest-list"
                  data-event="cta_join_league_interest"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-[var(--background)] shadow-[0_0_30px_rgba(79,185,219,0.3)] transition hover:scale-[1.02] motion-reduce:hover:scale-100"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Join League Interest List
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href={pageCtas.memberships.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-base font-semibold text-white transition hover:border-[var(--sky-blue)]/50 hover:bg-[var(--sky-blue)]/10"
                >
                  {pageCtas.memberships.label}
                </Link>
              </div>
            </div>

            <FlowPanel>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pale-aqua)]">
                The Grind League Preview
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Trackman scoring in private bays",
                  "Weekly competitive structure",
                  "Garland, TX indoor studio",
                  "Interest list open now",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[var(--background)]/50 px-4 py-3 text-sm text-[var(--text-body)]"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--sky-blue)]" />
                    {item}
                  </div>
                ))}
              </div>

              <div
                className="mt-6 rounded-2xl border border-[var(--sky-blue)]/25 bg-[var(--background)]/80 p-5"
                aria-label="The Grind League coming soon status"
              >
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  League status
                </p>
                <p className="mt-3 font-[var(--font-mono)] text-sm text-[var(--pale-aqua)]">
                  STATUS: COMING SOON
                </p>
                <p className="mt-1 font-[var(--font-mono)] text-sm text-[var(--text-body)]">
                  REGISTRATION: AFTER OPENING
                </p>
                <p className="mt-3 text-xs text-[var(--text-muted)]">
                  Final dates, pricing, and roster details will be announced
                  before sign-ups open.
                </p>
              </div>
            </FlowPanel>
          </div>
        </div>
      </section>

      {/* Coming-soon status bar */}
      <section className="relative px-4 md:px-6">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-white/10">
            {statusItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="xl:px-6 xl:first:pl-0">
                  <Icon className="mb-3 h-5 w-5 text-[var(--sky-blue)]" />
                  <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    {item.label}
                  </p>
                  <p className="mt-2 font-[var(--font-outfit)] text-lg font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* League concept */}
      <section className="relative px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Leagues"
            title="Does Launch Labs offer golf leagues?"
            description="Launch Labs plans to offer Trackman-powered indoor golf leagues in Garland. The format is built for flexible simulator play, so golfers can compete without being locked into a crowded fixed league night."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {conceptPillars.map((item) => (
              <IconTile
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How the future league will work */}
      <section className="relative px-4 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="How It Will Work"
            title="From interest list to league standings."
            description="Registration is not open yet. This is the planned path from early interest to your first Grind League season once Launch Labs opens and final details are confirmed."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {futureLeagueSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative rounded-[1.5rem] border border-white/10 bg-[var(--surface)]/50 p-6 md:p-7"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--sky-blue)]/30 bg-[var(--sky-blue)]/10 font-[var(--font-mono)] text-sm text-[var(--sky-blue)]">
                      0{index + 1}
                    </span>
                    <Icon className="h-5 w-5 text-[var(--sky-blue)]" />
                  </div>
                  <h3 className="font-[var(--font-outfit)] text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Planned season preview */}
      <section className="relative px-4 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SectionIntro
              eyebrow="Planned Season Preview"
              title="What the first season may look like."
              description="The structure below is a preview — not a final commitment. Exact schedules, pricing, prize details, and roster limits will be published before registration opens."
            />

            <div className="rounded-[1.75rem] border border-white/10 bg-[var(--surface)]/60 p-7 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pale-aqua)]">
                Future-state format preview
              </p>

              <ul className="mt-6 space-y-4">
                {plannedSeasonPreview.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-[var(--text-body)]"
                  >
                    <ListChecks className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sky-blue)]" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 rounded-2xl border border-white/10 bg-[var(--background)]/50 px-4 py-4 text-sm leading-7 text-[var(--text-muted)]">
                This preview helps you understand the direction for The Grind
                League. Final rules, fees, and season dates will be shared with
                the interest list before sign-ups begin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trackman league benefits */}
      <section className="relative px-4 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Trackman League Benefits"
            title="Why simulator data changes league play."
            description="The Grind League is planned around Trackman technology — the same platform trusted on tour ranges and in serious training environments."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {trackmanBenefits.map((item) => (
              <IconTile
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={pageCtas.technology.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--sky-blue)] transition hover:text-white"
            >
              {pageCtas.technology.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who should join */}
      <section className="relative px-4 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Who Should Join"
            title="Built for golfers who want more than casual simulator time."
            description="If you care about competition, consistency, and clean indoor conditions, The Grind League interest list is for you."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {audienceCards.map((item) => (
              <IconTile
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interest list form */}
      <section
        id="interest-list"
        className="relative scroll-mt-28 px-4 md:px-6 md:pb-20"
      >
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionIntro
                eyebrow="Interest List"
                title="Get early access to The Grind League."
                description="Join the list now and we will reach out with format previews, registration timing, and season details as they are finalized after Launch Labs opens."
              />

              <div className="mt-8 space-y-4 text-sm leading-7 text-[var(--text-muted)]">
                <p>
                  No payment required. No roster spot reserved yet. This list
                  helps us plan the first season for competitive golfers across
                  Garland and the surrounding east Dallas corridor.
                </p>
                <p>
                  Prefer to reach out directly? Email{" "}
                  <a
                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("The Grind League Interest List")}`}
                    className="font-semibold text-[var(--sky-blue)] transition hover:text-white"
                  >
                    {siteConfig.email}
                  </a>{" "}
                  or call{" "}
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                    className="font-semibold text-[var(--sky-blue)] transition hover:text-white"
                  >
                    {siteConfig.phone}
                  </a>
                  .
                </p>
              </div>
            </div>

            <LeagueInterestForm />
          </div>
        </div>
      </section>

      {/* Membership tie-in */}
      <section className="relative px-4 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <SectionIntro
              eyebrow="Membership Tie-In"
              title="Train between league rounds with member access."
              description="Launch Labs memberships are separate from league registration, but members may receive advantages when The Grind League opens — especially for practice time between competitive rounds."
            />

            <div className="rounded-[1.75rem] border border-white/10 bg-[var(--surface)]/60 p-7 md:p-8">
              <ul className="space-y-4">
                {membershipPerks.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-[var(--text-body)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--sky-blue)]" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={pageCtas.memberships.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[var(--background)] transition hover:scale-[1.02] motion-reduce:hover:scale-100"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {pageCtas.memberships.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={pageCtas.howItWorks.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--sky-blue)]/50"
                >
                  {pageCtas.howItWorks.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-4 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <FaqAccordion
            eyebrow="League FAQ"
            title="Questions about The Grind League"
            description="Answers about the coming-soon league at Launch Labs in Garland, TX. Registration details will be updated before the first season opens."
            faqs={faqs}
          />

          <RelatedPageLinks links={["memberships", "technology", "faq"]} />

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link
              href="/indoor-golf-garland-tx/"
              className="text-[var(--sky-blue)] transition hover:text-white"
            >
              Indoor golf in Garland
            </Link>
            <Link
              href="/trackman-golf-simulator-garland-tx/"
              className="text-[var(--sky-blue)] transition hover:text-white"
            >
              Trackman simulator Garland
            </Link>
            <Link
              href="/golf-simulator-garland-tx/"
              className="text-[var(--sky-blue)] transition hover:text-white"
            >
              Golf simulator Garland TX
            </Link>
            <Link
              href="/rowlett/"
              className="text-[var(--sky-blue)] transition hover:text-white"
            >
              Golf near Rowlett
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 md:px-6">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <div className="rounded-[2rem] border border-white/10 bg-[var(--surface)]/70 px-6 py-10 md:px-10 md:py-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--sky-blue)]">
                Coming Soon to Garland
              </p>
              <h2 className="mt-3 font-[var(--font-outfit)] text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                Be first in line for The Grind League.
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--text-body)]">
                Join the interest list for early updates on league format,
                registration, and the first indoor season at Launch Labs — a
                private Trackman studio at{" "}
                <span className="text-white">{siteConfig.address.street}</span>,{" "}
                {siteConfig.address.city}, {siteConfig.address.state}.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#interest-list"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-[var(--background)] shadow-[0_0_30px_rgba(79,185,219,0.3)] transition hover:scale-[1.02] motion-reduce:hover:scale-100"
                style={{ background: "var(--gradient-primary)" }}
              >
                Join League Interest List
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href={pageCtas.memberships.href}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-base font-semibold text-white transition hover:border-[var(--sky-blue)]/50 hover:bg-[var(--sky-blue)]/10"
              >
                {pageCtas.memberships.label}
              </Link>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--sky-blue)] transition hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>

            <div className="mt-8 flex items-start gap-3 text-sm text-[var(--text-muted)]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sky-blue)]" />
              <p>
                Launch Labs · {siteConfig.address.street}, {siteConfig.address.city},{" "}
                {siteConfig.address.state} {siteConfig.address.zip}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
