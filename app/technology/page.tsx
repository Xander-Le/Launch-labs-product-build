import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleGauge,
  Crosshair,
  Gauge,
  LineChart,
  MapPin,
  Radar,
  RotateCw,
  Route,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FaqAccordion } from "@/src/components/faq-accordion";
import { BreadcrumbSchema } from "@/src/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/src/components/seo/faq-schema";
import { RelatedPageLinks } from "@/src/components/related-page-links";
import { pageCtas } from "@/src/data/nav";
import { seoIntros } from "@/src/data/seo";
import { siteConfig } from "@/src/data/site";
import { buildMetadata, seoPages } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata(seoPages.technology);

const trustItems = [
  {
    title: "Tour-Level Tracking",
    description:
      "Trackman captures precise ball flight and club delivery data used by serious players and coaches.",
    icon: Radar,
  },
  {
    title: "Ball + Club Data",
    description:
      "See what the club did through impact and what the ball did after contact on every shot.",
    icon: CircleGauge,
  },
  {
    title: "Private Indoor Bays",
    description:
      "Train in a clean, reservation-only studio without walk-in traffic or shared hitting space.",
    icon: ShieldCheck,
  },
  {
    title: "Garland, TX",
    description:
      "A focused indoor golf lab serving Garland, Rowlett, Sachse, Firewheel, and east Dallas.",
    icon: MapPin,
  },
];

const whyTrackman = [
  {
    title: "Practice with proof, not guesswork",
    description:
      "Trackman shows whether a change actually moved ball speed, launch, spin, or carry. That makes every rep more useful.",
    icon: BarChart3,
  },
  {
    title: "Connect feel to feedback",
    description:
      "Pair shot data with visual ball flight so you can understand what changed between swings, clubs, and sessions.",
    icon: Crosshair,
  },
  {
    title: "Train with a plan",
    description:
      "Use measurable targets for wedges, driver work, dispersion control, or course preparation instead of hitting balls blindly.",
    icon: Target,
  },
  {
    title: "Built for repeat sessions",
    description:
      "Launch Labs is designed for golfers who want consistent access to the same data environment every time they book.",
    icon: LineChart,
  },
];

const measuredMetrics: { label: string; icon: LucideIcon }[] = [
  { label: "Ball Speed", icon: Gauge },
  { label: "Launch Angle", icon: TrendingUp },
  { label: "Spin Rate", icon: RotateCw },
  { label: "Carry Distance", icon: Target },
  { label: "Total Distance", icon: MapPin },
  { label: "Club Path", icon: Route },
  { label: "Face Angle", icon: Crosshair },
  { label: "Attack Angle", icon: TrendingUp },
  { label: "Smash Factor", icon: CircleGauge },
  { label: "Landing Angle", icon: BarChart3 },
  { label: "Apex Height", icon: TrendingUp },
  { label: "Shot Dispersion", icon: Radar },
];

const practiceModes = [
  {
    title: "Range Practice",
    description:
      "Work through focused rep blocks with clear feedback on every shot. Ideal for wedge gapping, start-line work, and strike quality.",
  },
  {
    title: "Virtual Course Play",
    description:
      "Play world-class courses indoors and use shot data to understand how your ball behaves under course-like conditions.",
  },
  {
    title: "Skills & Challenges",
    description:
      "Use structured drills and challenge formats to test consistency, dispersion, and scoring under pressure.",
  },
  {
    title: "Lesson & Coaching Blocks",
    description:
      "Coaches and instructors can use the bay for quiet, data-driven lessons without the noise of a crowded lounge.",
  },
  {
    title: "Club Testing & Gapping",
    description:
      "Compare carry, spin, and dispersion across clubs to build a more reliable setup and distance control.",
  },
  {
    title: "Pre-Round Preparation",
    description:
      "Dial in your numbers before a tournament, league round, or important weekend tee time.",
  },
];

const ioFeatures = [
  "Built for indoor simulator environments with reliable tracking in a controlled bay setup.",
  "Captures club and ball data through impact for immediate feedback on every shot.",
  "Supports range sessions, virtual course play, skills work, and focused training blocks.",
  "Helps golfers and coaches review trends across a session instead of relying on memory alone.",
];

const sessionDataPoints = [
  {
    title: "Review every shot",
    description:
      "Look back at individual shots to understand what changed when contact, path, or face control improved or slipped.",
  },
  {
    title: "Compare trends across a session",
    description:
      "Use the session arc to see whether your numbers stayed stable or drifted as the block went on.",
  },
  {
    title: "Train with clearer targets",
    description:
      "Set measurable goals for ball speed, spin, carry, or dispersion instead of guessing whether progress happened.",
  },
  {
    title: "Make the next session smarter",
    description:
      "Leave with specific numbers to chase next time instead of a vague sense that some swings felt better.",
  },
];

const audienceCards = [
  {
    title: "Competitive Players",
    description:
      "Use measurable feedback to sharpen distance control, dispersion, and repeatability before important rounds.",
    icon: Target,
  },
  {
    title: "Coaches & Instructors",
    description:
      "Teach with data in a private bay built for lessons, swing analysis, and recurring student blocks.",
    icon: Users,
  },
  {
    title: "Serious Practicers",
    description:
      "Turn range time into structured training with numbers that show whether your changes are working.",
    icon: BarChart3,
  },
  {
    title: "Curious Beginners",
    description:
      "Learn faster with immediate feedback on contact, launch, and ball flight in a clean, focused environment.",
    icon: Video,
  },
];

const comparisonRows = [
  {
    label: "Environment",
    launchLabs: "Private, reservation-only Trackman bay",
    typical: "Shared lounge traffic or outdoor variability",
  },
  {
    label: "Feedback",
    launchLabs: "Tour-level ball and club data every shot",
    typical: "Limited data or entertainment-first experience",
  },
  {
    label: "Access",
    launchLabs: "Book online and enter with a digital code",
    typical: "Staff-dependent or walk-in availability",
  },
  {
    label: "Focus",
    launchLabs: "Built for measurable practice and improvement",
    typical: "Social atmosphere or casual hitting",
  },
];

const faqs = [
  {
    id: "what-is-trackman",
    question: "What is Trackman?",
    answer:
      "Trackman is a launch monitor and simulator technology that tracks club delivery and ball flight data. It gives golfers measurable feedback on every shot instead of relying on feel alone.",
  },
  {
    id: "what-is-trackman-io",
    question: "What is Trackman iO?",
    answer:
      "Trackman iO is Trackman's indoor-optimized system designed for simulator bays. At Launch Labs, it powers the private bay experience with reliable tracking in a controlled indoor environment.",
  },
  {
    id: "what-can-i-measure",
    question: "What data can I see during a session?",
    answer:
      "Depending on the shot and session setup, you can review metrics such as ball speed, launch angle, spin rate, carry distance, club path, face angle, smash factor, and shot dispersion.",
  },
  {
    id: "need-coach",
    question: "Do I need a coach to use Trackman?",
    answer:
      "No. Many golfers use Trackman for solo practice, course play, and personal training blocks. Coaches can also book the bay for lessons when a data-driven teaching environment is useful.",
  },
  {
    id: "better-than-range",
    question: "Is Trackman better than a normal driving range?",
    answer:
      "A driving range is useful for volume, but Trackman adds precise feedback on every shot in a controlled indoor environment. That makes it especially valuable for focused practice, gapping, and measuring improvement.",
  },
  {
    id: "membership-required",
    question: "Do I need a membership to use the technology?",
    answer:
      "No. Launch Labs supports public bay reservations and membership access. Public users can book available times online, while members receive additional access benefits based on their plan.",
  },
  {
    id: "left-handed",
    question: "Can left-handed golfers use the bay?",
    answer:
      "Yes. Launch Labs bays are set up to support both right-handed and left-handed golfers. Check booking details if you need a specific bay configuration.",
  },
  {
    id: "location",
    question: "Where is Launch Labs located?",
    answer:
      "Launch Labs is at 565 W Oates Rd #100 in Garland, TX 75043, serving golfers across Garland, Rowlett, Sachse, Firewheel, East Richardson, Mesquite, and East DFW.",
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

function DataPanel({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-[var(--surface)]/70 p-6 shadow-[0_0_40px_rgba(79,185,219,0.08)] md:p-8">
      {children}
    </div>
  );
}

export default function TechnologyPage() {
  return (
    <>
      <BreadcrumbSchema
        id="technology-breadcrumb-schema"
        items={[
          { name: "Home", path: "/" },
          { name: "Technology", path: "/technology" },
        ]}
      />
      <FAQSchema
        id="technology-faq-schema"
        faqs={faqs.map(({ question, answer }) => ({ question, answer }))}
      />

      <main className="relative min-h-screen overflow-hidden bg-[var(--background)] pb-24 text-white">
      <div className="pointer-events-none fixed left-1/2 top-20 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[var(--sky-blue)]/12 blur-[140px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,14,20,0.28)_45%,rgba(10,14,20,0.92)_100%)]" />

      {/* Hero */}
      <section className="relative px-4 pb-12 pt-32 md:px-6 md:pb-16 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--sky-blue)]">
                Trackman Technology
              </p>

              <h1 className="mt-4 font-[var(--font-outfit)] text-5xl font-bold tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                The Gold Standard: Trackman Technology
              </h1>

              <p className="mt-6 text-lg leading-8 text-[var(--text-body)]">
                {seoIntros.technology}
              </p>

              <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">
                Ball speed. Launch angle. Spin rate. Carry. Club path. The
                numbers that turn practice into progress.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={siteConfig.bookingUrl}
                  data-event="cta_reserve_bay"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-[var(--background)] shadow-[0_0_30px_rgba(79,185,219,0.3)] transition hover:scale-[1.02] motion-reduce:hover:scale-100"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {siteConfig.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={pageCtas.howItWorks.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-base font-semibold text-white transition hover:border-[var(--sky-blue)]/50 hover:bg-[var(--sky-blue)]/10"
                >
                  {pageCtas.howItWorks.label}
                </Link>
              </div>
            </div>

            <DataPanel>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pale-aqua)]">
                Sample Shot Readout
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Example data display for illustration only.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["Ball Speed", "142.8 mph"],
                  ["Launch Angle", "12.4°"],
                  ["Spin Rate", "2,480 rpm"],
                  ["Carry", "248 yds"],
                  ["Club Path", "-1.8°"],
                  ["Smash Factor", "1.48"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-[var(--background)]/60 px-4 py-3"
                  >
                    <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                      {label}
                    </p>
                    <p className="mt-1 font-[var(--font-mono)] text-lg text-[var(--pale-aqua)]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </DataPanel>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="relative px-4 md:px-6">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-white/10">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="xl:px-6 xl:first:pl-0">
                  <Icon className="mb-3 h-5 w-5 text-[var(--sky-blue)]" />
                  <h3 className="font-[var(--font-outfit)] text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Trackman */}
      <section className="relative px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Technology"
            title="What technology does Launch Labs use?"
            description="Every Launch Labs bay is powered by Trackman iO. Golfers can measure launch angle, spin rate, ball speed, carry distance, club delivery, and other performance data during practice or simulated course play."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {whyTrackman.map((item) => (
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

      {/* What Trackman measures */}
      <section className="relative px-4 pb-16 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="What Trackman Measures"
            title="Numbers that make practice specific."
            description="A focused session should tell you more than whether the shot looked good. These are the kinds of metrics golfers use to sharpen contact, flight, and distance control."
          />

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {measuredMetrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[var(--surface)]/50 px-4 py-3 transition motion-reduce:transition-none hover:border-[var(--sky-blue)]/30"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[var(--sky-blue)]" />
                  <span className="text-sm font-medium text-[var(--text-body)]">
                    {metric.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Practice modes */}
      <section className="relative px-4 pb-16 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Practice Modes"
            title="Train the way your game needs."
            description="Trackman supports more than one type of session. Use your bay time for structured practice, simulated rounds, coaching, or preparation."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {practiceModes.map((mode) => (
              <div
                key={mode.title}
                className="rounded-[1.5rem] border border-white/10 bg-[var(--surface)]/50 p-6 transition motion-reduce:transition-none hover:border-[var(--sky-blue)]/25"
              >
                <h3 className="font-[var(--font-outfit)] text-xl font-semibold text-white">
                  {mode.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  {mode.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trackman iO */}
      <section className="relative px-4 pb-16 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SectionIntro
              eyebrow="Trackman iO Inside the Bay"
              title="Indoor tracking built for simulator practice."
              description="Launch Labs bays are powered by Trackman iO, Trackman's indoor-optimized system for simulator environments. It is designed to deliver reliable club and ball data in a controlled private bay."
            />

            <div className="space-y-4">
              {ioFeatures.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-[var(--surface)]/50 p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sky-blue)]" />
                  <p className="text-sm leading-6 text-[var(--text-body)]">
                    {item}
                  </p>
                </div>
              ))}

              <div className="rounded-[1.5rem] border border-[var(--sky-blue)]/25 bg-[var(--sky-blue)]/10 p-6">
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--pale-aqua)]">
                  Launch Labs · Trackman iO Bay
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">
                  Private bay. Immediate feedback. A clean environment built for
                  repeat sessions, not entertainment-first hitting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data after session */}
      <section className="relative px-4 pb-16 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Data After the Session"
            title="Leave with more than a bucket of swings."
            description="The value of Trackman is not just the next shot. It is the ability to review what happened, spot trends, and come back with a clearer plan."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {sessionDataPoints.map((item) => (
              <IconTile
                key={item.title}
                icon={LineChart}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="relative px-4 pb-16 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Who Uses Trackman Here"
            title="Built for golfers who want measurable improvement."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {audienceCards.map((card) => (
              <IconTile
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="relative px-4 pb-16 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Why Launch Labs"
            title="A private performance lab, not a crowded simulator lounge."
            description="Launch Labs is designed for golfers who want clean access, reliable data, and a focused place to train."
          />

          <div className="mt-8 overflow-x-auto rounded-[1.5rem] border border-white/10">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-white/10 bg-[var(--surface)]/80 text-sm">
              <div className="px-5 py-4 font-semibold text-[var(--text-muted)]">
                Category
              </div>
              <div className="border-l border-white/10 px-5 py-4 font-semibold text-[var(--sky-blue)]">
                Launch Labs
              </div>
              <div className="border-l border-white/10 px-5 py-4 font-semibold text-[var(--text-muted)]">
                Typical alternative
              </div>
            </div>

            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-white/10 last:border-b-0"
              >
                <div className="px-5 py-4 text-sm font-medium text-white">
                  {row.label}
                </div>
                <div className="border-l border-white/10 px-5 py-4 text-sm leading-6 text-[var(--text-body)]">
                  {row.launchLabs}
                </div>
                <div className="border-l border-white/10 px-5 py-4 text-sm leading-6 text-[var(--text-muted)]">
                  {row.typical}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-4 pb-16 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <FaqAccordion
            eyebrow="Technology FAQ"
            title="Common questions about Trackman at Launch Labs."
            description="Direct answers on data, Trackman iO, booking access, and what to expect in the bay."
            faqs={faqs}
          />

          <RelatedPageLinks links={["memberships", "howItWorks", "faq"]} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 pb-20 md:px-6">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <div className="rounded-[1.75rem] border border-[var(--sky-blue)]/20 bg-[var(--surface)]/50 p-8 md:p-10">
            <h2 className="font-[var(--font-outfit)] text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              Train with data on your schedule.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-body)]">
              Reserve a private Trackman bay in Garland and practice with the
              feedback serious golfers, coaches, and competitive players rely
              on. Book one session or choose a membership built for consistent
              access.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={siteConfig.bookingUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-[var(--background)] shadow-[0_0_30px_rgba(79,185,219,0.3)] transition hover:scale-[1.02] motion-reduce:hover:scale-100"
                style={{ background: "var(--gradient-primary)" }}
              >
                {siteConfig.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={pageCtas.memberships.href}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-base font-semibold text-white transition hover:border-[var(--sky-blue)]/50 hover:bg-[var(--sky-blue)]/10"
              >
                {pageCtas.memberships.label}
              </Link>
            </div>

            <p className="mt-6 text-sm text-[var(--text-muted)]">
              New to Launch Labs?{" "}
              <Link
                href={pageCtas.howItWorks.href}
                className="font-medium text-[var(--sky-blue)] transition hover:text-white"
              >
                {pageCtas.howItWorks.label}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
