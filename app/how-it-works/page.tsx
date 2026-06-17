import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Gauge,
  KeyRound,
  MapPin,
  Radar,
  Route,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
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

export const metadata: Metadata = buildMetadata(seoPages.howItWorks);

const trustItems = [
  {
    title: "24/7 Access",
    description:
      "Practice before work, after dinner, or whenever your schedule opens.",
    icon: Clock,
  },
  {
    title: "Trackman Technology",
    description:
      "Every bay is built around tour-level ball flight and club data.",
    icon: Radar,
  },
  {
    title: "Private Bay Experience",
    description: "One reservation gives you the bay for your booked time.",
    icon: ShieldCheck,
  },
  {
    title: "Garland, TX",
    description:
      "Located at 565 W Oates Rd #100 for easy access across Garland, Rowlett, Sachse, Firewheel, East Richardson, Mesquite, and East DFW.",
    icon: MapPin,
  },
];

const processSteps = [
  {
    title: "Reserve Your Bay Online",
    description:
      "Choose your date, time, and session length through the booking portal. Book a solo practice block, a round with friends, or recurring time for lessons and training.",
    microcopy: "Best for: practice, course play, lessons, small groups",
    icon: CalendarDays,
  },
  {
    title: "Get Your Digital Access Code",
    description:
      "Before your session, you will receive a secure access code by email or text. Use it to enter the facility during your reserved time.",
    microcopy: "Your code is tied to your booking window.",
    icon: KeyRound,
  },
  {
    title: "Walk In and Start with Trackman",
    description:
      "Enter the studio, settle into your bay, and start your session. Practice on the range, play a world-class course, or track key numbers like ball speed, launch angle, carry distance, and spin rate.",
    microcopy: "Clean bay. Tour-level data. Total focus.",
    icon: Activity,
  },
];

const studioFeatures = [
  {
    title: "Clean, Private Bays",
    description:
      "Your reservation gives you dedicated bay time without walk-in traffic or shared hitting space.",
  },
  {
    title: "Trackman Performance Data",
    description:
      "See the numbers behind every shot: ball speed, launch angle, spin rate, carry, club path, and more.",
  },
  {
    title: "Practice or Play",
    description:
      "Work through a focused range session, play virtual courses, run skills challenges, or prepare for your next round.",
  },
  {
    title: "Self-Service Convenience",
    description:
      "Book online, enter with your digital key, and use your reserved time without waiting on staff.",
  },
  {
    title: "Room for Small Groups",
    description:
      "Bring guests based on your booking or membership access. One bay can support practice, course play, and group sessions.",
  },
  {
    title: "Built for Coaches",
    description:
      "Instructors can use the space for quiet, data-driven lessons without the noise of a bar or entertainment venue.",
  },
];

const firstVisitItems = [
  {
    title: "Bring your own clubs.",
    description: "You will get the best experience using your normal set.",
  },
  {
    title: "Use clean clubs.",
    description:
      "Dirt and debris can affect the turf, screen, and overall bay condition.",
  },
  {
    title: "Use the provided golf balls.",
    description:
      "Use the balls supplied in the bay for reliable simulator performance and equipment protection.",
  },
  {
    title: "Arrive on time.",
    description: "Your access code is connected to your booking window.",
  },
  {
    title: "Keep food and drinks off the turf.",
    description: "Use the seating/table area only.",
  },
  {
    title: "Leave the bay ready for the next golfer.",
    description:
      "Return balls, tees, and accessories to their place before you leave.",
  },
];

const audienceCards = [
  {
    title: "Solo Practice",
    description:
      "Dial in wedges, work through a swing change, or track your numbers without distractions.",
    icon: Target,
  },
  {
    title: "Friends and Small Groups",
    description:
      "Reserve a private bay for course play, skills games, or a focused session with a few guests.",
    icon: Users,
  },
  {
    title: "Coaches and Instructors",
    description:
      "Use a quiet Trackman-powered bay for lessons, swing analysis, and recurring student blocks.",
    icon: Activity,
  },
  {
    title: "Members",
    description:
      "Get predictable access, member-friendly booking, and a cleaner alternative to crowded simulator lounges.",
    icon: KeyRound,
  },
];

const trackmanMetrics: { label: string; icon: LucideIcon }[] = [
  { label: "Ball Speed", icon: Gauge },
  { label: "Carry Distance", icon: Target },
  { label: "Launch Angle", icon: TrendingUp },
  { label: "Spin Rate", icon: Activity },
  { label: "Club Path", icon: Route },
  { label: "Face Angle", icon: Radar },
  { label: "Smash Factor", icon: ShieldCheck },
  { label: "Total Distance", icon: MapPin },
];

const bayEtiquette = [
  "Use only clean clubs and provided golf balls.",
  "Keep food and drinks away from turf, hitting areas, computers, and simulator equipment.",
  "Respect your booking window and exit on time.",
  "Return balls, tees, and accessories before leaving.",
  "Report technical issues through the posted support process.",
  "Follow all posted safety rules inside the bay.",
];

const faqs = [
  {
    id: "member-required",
    question: "Do I need to be a member to book?",
    answer:
      "No. Launch Labs supports public bay reservations and membership access. Public users can book available times online, while members receive additional access and booking benefits based on their plan.",
  },
  {
    id: "facility-entry",
    question: "How do I get into the facility?",
    answer:
      "After booking, you will receive a secure digital access code by email or text. Use that code to enter during your reserved booking window.",
  },
  {
    id: "walk-ins",
    question: "Are walk-ins allowed?",
    answer:
      "No. Launch Labs is reservation-only. Book online before arriving so your access code and bay time are ready.",
  },
  {
    id: "technology",
    question: "What technology does Launch Labs use?",
    answer:
      "Launch Labs uses Trackman technology for accurate ball flight, club data, range practice, skills work, and virtual course play.",
  },
  {
    id: "guests",
    question: "Can I bring guests?",
    answer:
      "Yes. Guest access depends on your booking type or membership plan. One reservation covers the bay for the reserved time, and guests must follow all facility rules.",
  },
  {
    id: "what-to-bring",
    question: "What should I bring?",
    answer:
      "Bring your clubs and use the golf balls provided in the bay. Clean clubs are required to protect the turf, impact screen, and simulator equipment.",
  },
  {
    id: "help-during-session",
    question: "What if I need help during my session?",
    answer:
      "Each bay should include clear support instructions. If you run into a technical issue, follow the posted troubleshooting steps or contact the support number listed inside the studio.",
  },
  {
    id: "location",
    question: "Where is Launch Labs located?",
    answer:
      "Launch Labs is located at 565 W Oates Rd #100 in Garland, TX 75043, serving golfers across Garland, Rowlett, Sachse, Firewheel, East Richardson, Mesquite, and East DFW.",
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

export default function HowItWorksPage() {
  return (
    <>
      <BreadcrumbSchema
        id="how-it-works-breadcrumb-schema"
        items={[
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works" },
        ]}
      />
      <FAQSchema
        id="how-it-works-faq-schema"
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
                How It Works
              </p>

              <h1 className="mt-4 font-[var(--font-outfit)] text-5xl font-bold tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                How Our 24/7 Golf Simulator Works in Garland, TX
              </h1>

              <p className="mt-6 text-lg leading-8 text-[var(--text-body)]">
                {seoIntros.howItWorks}
              </p>

              <div className="mt-6 space-y-1 text-base leading-7 text-[var(--text-body)]">
                <p>No front desk.</p>
                <p>No waiting around.</p>
                <p>Just your session, your data, and your time.</p>
              </div>

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
                  href={pageCtas.memberships.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-base font-semibold text-white transition hover:border-[var(--sky-blue)]/50 hover:bg-[var(--sky-blue)]/10"
                >
                  {pageCtas.memberships.label}
                </Link>
              </div>
            </div>

            <FlowPanel>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pale-aqua)]">
                Booking & Access Flow
              </p>

              <ol className="mt-6 space-y-4">
                {[
                  "Book online",
                  "Receive code",
                  "Start session",
                ].map((step, index) => (
                  <li
                    key={step}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[var(--background)]/50 px-4 py-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--sky-blue)]/30 bg-[var(--sky-blue)]/10 font-[var(--font-mono)] text-sm text-[var(--sky-blue)]">
                      0{index + 1}
                    </span>
                    <span className="font-medium text-white">{step}</span>
                  </li>
                ))}
              </ol>

              <div
                className="mt-6 rounded-2xl border border-[var(--sky-blue)]/25 bg-[var(--background)]/80 p-5"
                aria-label="Example digital access code display"
              >
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Example access card
                </p>
                <p className="mt-3 font-[var(--font-mono)] text-sm text-[var(--pale-aqua)]">
                  ACCESS CODE: 482913
                </p>
                <p className="mt-1 font-[var(--font-mono)] text-sm text-[var(--text-body)]">
                  STATUS: ACTIVE AT START TIME
                </p>
                <p className="mt-3 text-xs text-[var(--text-muted)]">
                  Sample code for illustration only.
                </p>
              </div>
            </FlowPanel>
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
                <div
                  key={item.title}
                  className="xl:px-6 xl:first:pl-0"
                >
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

      {/* Process */}
      <section className="relative px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="How It Works"
            title="How does Launch Labs work?"
            description="Book your simulator bay online. Get your digital key before your session. Walk in, start your Trackman session, and train on your schedule. No front desk. No wait."
          />

          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute left-[8%] right-[8%] top-10 hidden h-px bg-white/10 md:block"
            />

            <div className="grid gap-5 md:grid-cols-3">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="relative rounded-[1.5rem] border border-white/10 bg-[var(--surface)]/60 p-7 transition motion-reduce:transition-none hover:border-[var(--sky-blue)]/30 hover:bg-[var(--surface)]"
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
                    <p className="mt-4 text-sm font-medium text-[var(--sky-blue)]">
                      {step.microcopy}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <RelatedPageLinks links={["memberships", "technology", "faq"]} />
        </div>
      </section>

      {/* Studio experience */}
      <section className="relative px-4 pb-16 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="The Studio Experience"
            title="A Private Golf Lab. Not a Crowded Lounge."
            description="Launch Labs is built for golfers who want a clean, focused place to train. The studio is unmanned, camera-monitored, and reservation-only, giving you a predictable environment every time you book."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {studioFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[1.5rem] border border-white/10 bg-[var(--surface)]/50 p-6 transition motion-reduce:transition-none hover:border-[var(--sky-blue)]/25"
              >
                <h3 className="font-[var(--font-outfit)] text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First visit */}
      <section className="relative px-4 pb-16 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SectionIntro
              eyebrow="First Visit"
              title="What to Bring. What to Know."
            />

            <div className="space-y-4">
              {firstVisitItems.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-[var(--surface)]/50 p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sky-blue)]" />
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="rounded-[1.5rem] border border-[var(--sky-blue)]/25 bg-[var(--sky-blue)]/10 p-6">
                <h3 className="font-[var(--font-outfit)] text-xl font-semibold text-white">
                  First time at Launch Labs?
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">
                  Give yourself a few extra minutes to enter, get settled, and
                  connect to the Trackman experience before starting your first
                  full session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="relative px-4 pb-16 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Who Uses Launch Labs"
            title="Built for Serious Practice, Flexible Play, and Better Sessions"
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

      {/* Trackman preview */}
      <section className="relative px-4 pb-16 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Powered by Trackman"
            title="Know Your Numbers. Train With Purpose."
            description="Every Launch Labs bay is powered by Trackman technology, giving you precise feedback on the shots that shape your game. Use the data to practice smarter, compare sessions, and build a more reliable swing."
          />

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {trackmanMetrics.map((metric) => {
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

          <Link
            href={pageCtas.technology.href}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--sky-blue)] transition hover:text-white"
          >
            {pageCtas.technology.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Bay etiquette */}
      <section className="relative px-4 pb-16 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Bay Etiquette"
            title="Keep the Lab Ready for the Next Player"
            description="Launch Labs is self-service by design. Every golfer helps protect the equipment, the turf, and the private experience."
          />

          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {bayEtiquette.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-[var(--surface)]/50 px-5 py-4 text-sm leading-6 text-[var(--text-body)]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sky-blue)]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.waiverUrl}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--sky-blue)] transition hover:text-white"
            >
              Review Facility Rules
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={siteConfig.termsUrl}
              className="text-sm text-[var(--text-muted)] transition hover:text-white"
            >
              {pageCtas.terms.label}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-4 pb-16 md:px-6 md:pb-20">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <FaqAccordion
            eyebrow="FAQ"
            title="Common questions before your first session."
            description="Direct answers for public bookings, members, coaches, and first-time visitors."
            faqs={faqs}
          />

          <RelatedPageLinks links={["faq"]} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 pb-20 md:px-6">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <div className="rounded-[1.75rem] border border-[var(--sky-blue)]/20 bg-[var(--surface)]/50 p-8 md:p-10">
            <h2 className="font-[var(--font-outfit)] text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              Your Bay Is Ready When You Are
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-body)]">
              Reserve private Trackman time in Garland and train on your
              schedule. Book a single session, bring a small group, or choose a
              membership built around consistent practice.
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
              Have a question?{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-[var(--sky-blue)] transition hover:text-white"
              >
                Contact Launch Labs
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
