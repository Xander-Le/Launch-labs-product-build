import type { ReactNode } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CalendarCheck,
  CircleGauge,
  Clock,
  Gauge,
  KeyRound,
  Mail,
  MapPin,
  Radar,
  RotateCw,
  Route,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FaqAccordion } from "@/src/components/faq-accordion";
import { FoundingMembershipCarousel } from "@/src/components/founding-membership-carousel";
import { FAQSchema } from "@/src/components/seo/faq-schema";
import { HomeMobileCta } from "@/src/components/home-mobile-cta";
import { JsonLd } from "@/src/components/json-ld";
import { PageAnswerBlock } from "@/src/components/page-answer-block";
import { ServiceAreaMention } from "@/src/components/service-area-mention";
import { SiteNap } from "@/src/components/site-nap";
import { hourlyBookingHighlights } from "@/src/data/pricing";
import { pageCtas } from "@/src/data/nav";
import { seoIntros } from "@/src/data/seo";
import { siteConfig } from "@/src/data/site";
import { organizationSchema, websiteSchema } from "@/src/lib/schema";

const trustItems = [
  {
    title: "Opening soon",
    description: "Garland, TX studio launching after build-out.",
    icon: Sparkles,
  },
  {
    title: "Trackman-powered",
    description: "Tour-level ball flight and club data in every bay.",
    icon: Radar,
  },
  {
    title: "24/7 member access",
    description: "Self-service booking and digital entry after opening.",
    icon: Clock,
  },
  {
    title: "Private bays",
    description: "Reservation-only studio built for focused golf.",
    icon: ShieldCheck,
  },
];

const howItWorks = [
  {
    title: "Reserve Your Bay",
    description:
      "Choose your time online and book a private Trackman session when booking opens.",
    icon: CalendarCheck,
  },
  {
    title: "Get Your Digital Key",
    description:
      "Receive secure access instructions after booking. No front desk. No waiting.",
    icon: KeyRound,
  },
  {
    title: "Train With Purpose",
    description:
      "Practice, play, and review your numbers in a clean studio built for focused golf.",
    icon: Radar,
  },
];

const whyLaunchLabs = [
  {
    title: "Private, not a sports bar",
    description:
      "Launch Labs is a performance-first golf studio — not a crowded simulator lounge with walk-in traffic and bar noise.",
    icon: Shield,
  },
  {
    title: "Self-service and predictable",
    description:
      "Book online, enter with your digital key, and use your reserved bay without waiting on staff.",
    icon: KeyRound,
  },
  {
    title: "Built around Trackman",
    description:
      "Every bay is powered by Trackman so your practice reps come with credible ball flight and club data.",
    icon: CircleGauge,
  },
  {
    title: "Designed for east DFW golfers",
    description:
      "A clean indoor option for Garland, Rowlett, Sachse, Firewheel, East Richardson, Mesquite, and East DFW players.",
    icon: MapPin,
  },
];

const trackmanMetrics: { label: string; icon: LucideIcon }[] = [
  { label: "Ball speed", icon: Gauge },
  { label: "Launch angle", icon: TrendingUp },
  { label: "Spin rate", icon: RotateCw },
  { label: "Carry distance", icon: Target },
  { label: "Club path", icon: Route },
  { label: "Face angle", icon: Radar },
];

const audienceCards = [
  {
    title: "Solo practice",
    description:
      "Dial in wedges, work through a swing change, or track your numbers without distractions.",
    icon: Target,
  },
  {
    title: "Friends and small groups",
    description:
      "Reserve a private bay for course play, skills games, or a focused session with guests.",
    icon: Users,
  },
  {
    title: "Coaches and instructors",
    description:
      "Use a quiet Trackman bay for lessons, swing analysis, and recurring student blocks.",
    icon: Activity,
  },
  {
    title: "Competitive golfers",
    description:
      "Train with verified data and stay ready for league play, tournaments, and serious reps.",
    icon: Trophy,
  },
];

const homeFaqs = [
  {
    id: "opening",
    question: "Is Launch Labs open yet?",
    answer:
      "Launch Labs is opening soon in Garland, TX. Founding memberships are available now to secure your spot before the studio opens. Public hourly booking and full bay access will roll out after opening.",
  },
  {
    id: "founder-pricing",
    question: "What is founder membership pricing?",
    answer:
      "Player Founder starts at $210/mo on monthly billing ($191/mo quarterly equivalent, $170/mo annual equivalent) with 10 hours per month, 3 guests per visit, and $0 initiation. VIP Founder starts at $270/mo ($246/mo quarterly, $217/mo annual) with unlimited hours, 4 guests per visit, and $0 initiation. See the pricing page for the full comparison.",
  },
  {
    id: "member-required",
    question: "Do I need a membership to use Launch Labs?",
    answer:
      "Not necessarily. After opening, Launch Labs will support both founding memberships and public hourly booking based on availability. Founding memberships are the best fit for golfers who want recurring access and stronger monthly value.",
  },
  {
    id: "technology",
    question: "What technology does Launch Labs use?",
    answer:
      "Every bay uses Trackman for accurate ball flight, club data, range practice, skills work, and virtual course play.",
  },
  {
    id: "access",
    question: "How will I get into the facility?",
    answer:
      "Launch Labs uses reservation-only digital access. After booking or activating membership, you will receive secure entry instructions tied to your session window.",
  },
  {
    id: "location",
    question: "Where is Launch Labs located?",
    answer:
      "Launch Labs is at 565 W Oates Rd #100 in Garland, TX 75043, serving golfers across Garland, Rowlett, Sachse, Firewheel, East Richardson, Mesquite, and East DFW.",
  },
];

const mapEmbedUrl =
  "https://maps.google.com/maps?q=565+W+Oates+Rd+%23100+Garland+TX+75043&z=15&output=embed";

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

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      <FAQSchema
        id="homepage-faq-schema"
        faqs={homeFaqs.map(({ question, answer }) => ({ question, answer }))}
      />

      <main className="relative min-h-screen overflow-hidden bg-[var(--background)] pb-24 text-white md:pb-0">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(79,185,219,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(79,185,219,0.06)_1px,transparent_1px)] bg-[size:120px_120px]" />
      <div className="pointer-events-none fixed left-1/2 top-20 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[var(--sky-blue)]/12 blur-[140px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,14,20,0.28)_45%,rgba(10,14,20,0.92)_100%)]" />

      <HomeMobileCta />

      {/* Hero */}
      <section className="relative px-4 pb-10 pt-32 md:px-6 md:pb-14 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[var(--sky-blue)]/30 bg-[var(--sky-blue)]/10 px-4 py-2 text-sm font-semibold leading-none text-[var(--pale-aqua)] shadow-[0_0_24px_rgba(79,185,219,0.18)]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--sky-blue)] shadow-[0_0_10px_rgba(79,185,219,0.8)]" />
                  Opening soon in Garland
                </div>

                <p className="inline-flex items-center gap-2 text-sm leading-none text-[var(--text-muted)]">
                  <MapPin className="h-4 w-4 shrink-0 text-[var(--sky-blue)]" />
                  Garland · Rowlett · Sachse · Firewheel · East Richardson ·
                  Mesquite · East DFW
                </p>
              </div>

              <h1 className="font-[var(--font-outfit)] text-5xl font-bold tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                Your Private Golf Lounge. Open 24/7.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-body)]">
                {seoIntros.home}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="#memberships"
                  data-event="cta_founder_membership"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-[var(--background)] shadow-[0_0_30px_rgba(79,185,219,0.3)] transition hover:scale-[1.02] motion-reduce:hover:scale-100"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  See Founder Memberships
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <FlowPanel>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pale-aqua)]">
                At a glance
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Trackman-powered private simulator bays",
                  "Self-service booking and digital entry",
                  "Founder pricing with $0 initiation",
                  "Opening soon at 565 W Oates Rd, Garland",
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
            </FlowPanel>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="relative px-4 md:px-6">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
          <PageAnswerBlock
            heading="What is Launch Labs?"
            copy="Launch Labs is a private, Trackman-powered golf simulator studio in Garland, Texas. You reserve a bay online, receive a digital access code, and practice or play 24/7 in a clean self-service environment."
            className="mb-10"
          />

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

      {/* How It Works preview */}
      <section className="relative px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="How It Works"
            title="Book. Enter. Train."
            description="A simple self-service flow designed for private Trackman sessions — ready when Launch Labs opens in Garland."
          />

          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute left-[8%] right-[8%] top-10 hidden h-px bg-white/10 md:block"
            />

            <div className="grid gap-5 md:grid-cols-3">
              {howItWorks.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="group relative rounded-[1.5rem] border border-white/10 bg-[var(--surface)]/60 p-7 transition hover:border-[var(--sky-blue)]/30 hover:bg-[var(--surface)]"
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--sky-blue)]/30 bg-[var(--sky-blue)]/10">
                        <Icon className="h-6 w-6 text-[var(--sky-blue)]" />
                      </div>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[var(--background)] font-[var(--font-mono)] text-sm text-[var(--text-muted)]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-[var(--font-outfit)] text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-8">
            <Link
              href={pageCtas.howItWorks.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--sky-blue)] transition hover:text-white"
            >
              {pageCtas.howItWorks.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Launch Labs */}
      <section className="relative px-4 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Why Launch Labs"
            title="A private golf lab built around performance."
            description="Most simulator venues optimize for entertainment. Launch Labs optimizes for privacy, data, and predictable access — the environment serious golfers actually want."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whyLaunchLabs.map((item) => (
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

      {/* Trackman technology preview */}
      <section className="relative px-4 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionIntro
              eyebrow="Trackman Technology"
              title="Tour-level feedback in every bay."
              description="Trackman measures the data that matters for practice, lessons, and competitive reps — ball flight, club delivery, and consistent indoor performance."
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {trackmanMetrics.map((point) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.label}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[var(--surface)]/60 px-5 py-4 transition hover:border-[var(--sky-blue)]/25"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--sky-blue)]/30 bg-[var(--sky-blue)]/10">
                      <Icon className="h-5 w-5 text-[var(--sky-blue)]" />
                    </div>
                    <span className="text-sm font-medium text-[var(--text-body)]">
                      {point.label}
                    </span>
                  </div>
                );
              })}
            </div>
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

      {/* Founder membership preview */}
      <section
        id="memberships"
        className="relative scroll-mt-28 px-4 md:px-6 md:pb-20"
      >
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Founder Memberships"
            title="Lock in founder pricing before opening."
            description="Player Founder and VIP Founder plans include $0 initiation, monthly billing on every term, and 24/7 access after Launch Labs opens. Compare full details on the pricing page."
          />

          <div className="mt-10">
            <FoundingMembershipCarousel
              variant="home"
              showIntro={false}
              showFooterNote
              hideDisabledPlans
              showCompareLink
            />
          </div>

          <div className="mt-8">
            <Link
              href={pageCtas.memberships.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--sky-blue)] transition hover:text-white"
            >
              {pageCtas.memberships.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hourly booking / public access preview */}
      <section className="relative px-4 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SectionIntro
              eyebrow="Public Access Preview"
              title="Hourly booking after opening."
              description="Launch Labs will support public bay reservations in addition to memberships once the studio is live. Until then, founding memberships are the best way to secure access before launch."
            />

            <div className="grid gap-4">
              {hourlyBookingHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[var(--surface)]/60 p-5"
                >
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}

              <p className="rounded-2xl border border-white/10 bg-[var(--background)]/50 px-4 py-4 text-sm leading-7 text-[var(--text-muted)]">
                Public hourly booking is not live yet. Join a founder membership
                now or check back after opening for non-member reservations.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={pageCtas.memberships.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--sky-blue)]/50 hover:bg-[var(--sky-blue)]/10"
            >
              {pageCtas.memberships.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="relative px-4 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Who It's For"
            title="Built for golfers who want a better indoor experience."
            description="Whether you train solo, coach students, play with friends, or prep for competition, Launch Labs gives you a private Trackman environment on your schedule."
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

      {/* Location / opening */}
      <section className="relative px-4 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionIntro
                eyebrow="Location & Opening"
                title="Opening soon in Garland, TX."
                description="Launch Labs is built for golfers across east DFW who want a clean, private place to practice without the bar scene."
              />

              <ServiceAreaMention className="mt-4" prefix="Convenient for golfers in" />

              <SiteNap className="mt-6 rounded-[1.25rem] border border-white/10 bg-[var(--surface)]/50 p-5" />

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={siteConfig.directionsUrl}
                  className="inline-flex w-fit items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--sky-blue)]/50 hover:bg-[var(--sky-blue)]/10"
                >
                  Get Directions
                </Link>
                <Link
                  href="/golf-simulator-garland-tx/"
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--sky-blue)] transition hover:text-white"
                >
                  Golf simulator Garland TX
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[var(--surface)]/60">
              <div className="aspect-[16/10] w-full">
                <iframe
                  title="Launch Labs indoor golf studio location map in Garland, Texas"
                  src={mapEmbedUrl}
                  className="h-full w-full border-0 grayscale-[30%] invert-[90%] contrast-[90%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="border-t border-white/10 p-6 md:p-8">
                <MapPin className="h-6 w-6 text-[var(--sky-blue)]" />

                <h3 className="mt-4 font-[var(--font-outfit)] text-xl font-semibold text-white">
                  {siteConfig.address.street}
                </h3>

                <p className="mt-1 text-[var(--text-muted)]">
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-[var(--background)]/50 p-4">
                    <Sparkles className="mb-3 h-5 w-5 text-[var(--sky-blue)]" />
                    <p className="text-sm font-semibold text-white">
                      Opening soon
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      Founder memberships available before launch.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[var(--background)]/50 p-4">
                    <CircleGauge className="mb-3 h-5 w-5 text-[var(--sky-blue)]" />
                    <p className="text-sm font-semibold text-white">
                      Performance-first
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      Private Trackman bays for focused golf.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* League coming-soon preview */}
      <section className="relative px-4 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <SectionIntro
              eyebrow="The Grind League"
              title="Competitive indoor golf is coming soon."
              description="The Grind League is Launch Labs' planned Trackman league for competitive golfers in Garland. Registration is not open yet — join the interest list for early updates on format, timing, and sign-ups."
            />

            <div className="rounded-[1.75rem] border border-white/10 bg-[var(--surface)]/60 p-7 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pale-aqua)]">
                League preview
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--text-body)]">
                <li>Trackman-verified league scoring in private bays</li>
                <li>Weekly competitive structure after studio opening</li>
                <li>Built for serious golfers — not bar-style leagues</li>
                <li>Interest list open now; registration coming later</li>
              </ul>

              <Link
                href={pageCtas.leagues.href}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--sky-blue)]/50 hover:bg-[var(--sky-blue)]/10"
              >
                {pageCtas.leagues.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-4 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <FaqAccordion
            eyebrow="FAQ"
            title="Common questions before opening"
            description="Quick answers about Launch Labs, founder memberships, and what to expect when the Garland studio opens."
            faqs={homeFaqs}
          />

          <div className="mt-8">
            <Link
              href={pageCtas.faq.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--sky-blue)] transition hover:text-white"
            >
              {pageCtas.faq.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 pb-24 md:px-6 md:pb-28">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <div className="rounded-[2rem] border border-white/10 bg-[var(--surface)]/70 px-6 py-10 md:px-10 md:py-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--sky-blue)]">
                Opening Soon in Garland
              </p>
              <h2 className="mt-3 font-[var(--font-outfit)] text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                Secure your spot before Launch Labs opens.
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--text-body)]">
                Founding memberships are available now with $0 initiation and
                monthly billing on every term. Be ready for private Trackman
                access at {siteConfig.address.street}, {siteConfig.address.city},{" "}
                {siteConfig.address.state}.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-center">
              <Link
                href="#memberships"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-[var(--background)] shadow-[0_0_30px_rgba(79,185,219,0.3)] transition hover:scale-[1.02] motion-reduce:hover:scale-100"
                style={{ background: "var(--gradient-primary)" }}
              >
                See Founder Memberships
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={pageCtas.howItWorks.href}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-base font-semibold text-white transition hover:border-[var(--sky-blue)]/50 hover:bg-[var(--sky-blue)]/10"
              >
                {pageCtas.howItWorks.label}
              </Link>

              <Link
                href={pageCtas.leagues.href}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-base font-semibold text-white transition hover:border-[var(--sky-blue)]/50 hover:bg-[var(--sky-blue)]/10"
              >
                {pageCtas.leagues.label}
              </Link>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--sky-blue)] transition hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
