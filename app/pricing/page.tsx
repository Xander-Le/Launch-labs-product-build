import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  CreditCard,
  ShieldCheck,
  Users,
} from "lucide-react";
import { FoundingMembershipCarousel } from "@/src/components/founding-membership-carousel";
import { FounderSlotsProgress } from "@/src/components/founder-slots-progress";
import { JsonLd } from "@/src/components/json-ld";
import { BreadcrumbSchema } from "@/src/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/src/components/seo/faq-schema";
import { PricingFeatureMatrix } from "@/src/components/pricing-feature-matrix";
import { PricingFaqSection } from "@/src/components/pricing-faq-section";
import { ServiceAreaMention } from "@/src/components/service-area-mention";
import {
  billingNotes,
  hourlyBookingHighlights,
  membershipIncludes,
  planFitCards,
  pricingFaqs,
} from "@/src/data/pricing";
import { pageCtas } from "@/src/data/nav";
import { seoIntros } from "@/src/data/seo";
import { siteConfig } from "@/src/data/site";
import { buildMetadata, seoPages } from "@/src/lib/seo";
import { pricingOfferCatalogSchema } from "@/src/lib/schema";

export const metadata: Metadata = buildMetadata(seoPages.pricing);

const heroHighlights = [
  { label: "$0 initiation", value: "Founder offer", icon: ShieldCheck },
  { label: "Billed monthly", value: "Every term", icon: CreditCard },
  { label: "24/7 access", value: "Members", icon: Clock },
  { label: "Private bay", value: "Small groups", icon: Users },
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--sky-blue)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-[var(--font-outfit)] text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[var(--text-body)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <JsonLd data={pricingOfferCatalogSchema()} />
      <BreadcrumbSchema
        id="pricing-breadcrumb-schema"
        items={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]}
      />
      <FAQSchema
        id="pricing-faq-schema"
        faqs={pricingFaqs.map(({ question, answer }) => ({ question, answer }))}
      />

      <main className="relative min-h-screen overflow-hidden bg-[var(--background)] pb-24 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(79,185,219,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(79,185,219,0.06)_1px,transparent_1px)] bg-[size:120px_120px]" />
      <div className="pointer-events-none fixed left-1/2 top-20 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[var(--sky-blue)]/12 blur-[140px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,14,20,0.28)_45%,rgba(10,14,20,0.92)_100%)]" />

      {/* Hero */}
      <section className="relative px-4 pb-10 pt-32 md:px-6 md:pb-14 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--sky-blue)]">
              Founding Membership Pricing
            </p>

            <h1 className="font-[var(--font-outfit)] text-5xl font-bold tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
              Golf Simulator Memberships and Pricing in Garland, TX
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--text-body)] md:text-xl">
              {seoIntros.pricing}
            </p>

            <ServiceAreaMention className="mx-auto mt-4 max-w-2xl text-center" prefix="Serving" />

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={siteConfig.bookingUrl}
                data-event="cta_founder_membership"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-[var(--background)] shadow-[0_0_30px_rgba(79,185,219,0.3)] transition hover:scale-[1.02] motion-reduce:hover:scale-100"
                style={{ background: "var(--gradient-primary)" }}
              >
                Reserve Founder Spot
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#plans"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-base font-semibold text-white transition hover:border-[var(--sky-blue)]/50 hover:bg-[var(--sky-blue)]/10"
              >
                Compare plans
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-white/10">
            {heroHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="xl:px-6 xl:first:pl-0">
                  <Icon className="mb-3 h-5 w-5 text-[var(--sky-blue)]" />
                  <h3 className="font-[var(--font-outfit)] text-lg font-semibold text-white">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder promotion strip */}
      <section className="relative px-4 md:px-6">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-8">
          <FounderSlotsProgress variant="banner" />
        </div>
      </section>

      {/* Membership cards */}
      <section id="plans" className="relative px-4 py-14 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Pricing"
            title="How much does Launch Labs cost?"
            description="Launch Labs offers membership and hourly play options for golfers who want private Trackman simulator access in Garland. Compare founder memberships below, then review booking windows, guest access, and hourly play."
          />

          <div className="mt-10">
            <FoundingMembershipCarousel
              variant="pricing"
              showIntro={false}
              hideDisabledPlans
            />
          </div>
        </div>
      </section>

      {/* Buy hours */}
      <section className="relative px-4 pb-14 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SectionIntro
              eyebrow="Hourly Booking"
              title="Not ready for a membership yet?"
              description="Public users can reserve private Trackman time by the hour when availability allows. Same private bay. Same Trackman data. No membership required."
            />

            <div className="grid gap-4">
              {hourlyBookingHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-[var(--surface)]/50 p-5"
                >
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}

              <Link
                href={siteConfig.bookingUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--sky-blue)]/50 hover:bg-[var(--sky-blue)]/10"
              >
                Book Hourly Sessions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <PricingFeatureMatrix />

      {/* Plan fit */}
      <section className="relative px-4 pb-14 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Which Plan Fits"
            title="Start with the level of access you will actually use."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {planFitCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.5rem] border border-white/10 bg-[var(--surface)]/60 p-6 transition motion-reduce:transition-none hover:border-[var(--sky-blue)]/30"
              >
                <h3 className="font-[var(--font-outfit)] text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  {card.description}
                </p>
                <ul className="mt-5 space-y-3">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm text-[var(--text-body)]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sky-blue)]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership includes */}
      <section className="relative px-4 pb-14 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Every Founder Membership Includes"
            title="Private Trackman access built for repeat practice."
          />

          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {membershipIncludes.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-[var(--surface)]/50 px-5 py-4 text-sm leading-6 text-[var(--text-body)]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sky-blue)]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link
              href={pageCtas.technology.href}
              className="inline-flex items-center gap-2 font-semibold text-[var(--sky-blue)] transition hover:text-white"
            >
              {pageCtas.technology.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={pageCtas.howItWorks.href}
              className="inline-flex items-center gap-2 text-[var(--text-muted)] transition hover:text-white"
            >
              {pageCtas.howItWorks.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={pageCtas.faq.href}
              className="inline-flex items-center gap-2 text-[var(--text-muted)] transition hover:text-white"
            >
              {pageCtas.faq.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-[var(--text-muted)]">
            Guest limits, membership cancellation, and facility rules are
            outlined in our{" "}
            <Link
              href={siteConfig.termsUrl}
              className="font-medium text-[var(--sky-blue)] transition hover:text-white"
            >
              {pageCtas.terms.label}
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Billing notes */}
      <section className="relative px-4 pb-14 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <SectionIntro
            eyebrow="Billing Notes"
            title="Clear terms before you join."
          />

          <ul className="mt-8 space-y-3">
            {billingNotes.map((note) => (
              <li
                key={note}
                className="flex gap-3 text-sm leading-6 text-[var(--text-body)]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sky-blue)]" />
                {note}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-[var(--text-muted)]">
            Membership cancellations:{" "}
            <a
              href="mailto:xander@launchlabstx.com"
              className="font-medium text-[var(--sky-blue)] transition hover:text-white"
            >
              xander@launchlabstx.com
            </a>
            . See{" "}
            <Link
              href={siteConfig.termsUrl}
              className="font-medium text-[var(--sky-blue)] transition hover:text-white"
            >
              {pageCtas.terms.label}
            </Link>{" "}
            for full membership terms.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <PricingFaqSection />

      {/* Final CTA */}
      <section className="relative px-4 pb-20 md:px-6">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-14">
          <div className="rounded-[1.75rem] border border-[var(--sky-blue)]/20 bg-[var(--surface)]/50 p-8 md:p-10">
            <h2 className="font-[var(--font-outfit)] text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              Start with the plan that fits your practice.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-body)]">
              Player gives you consistent monthly practice time. VIP gives you
              maximum access. Both include $0 initiation during the founder
              release and access to private Trackman bays in Garland, TX.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={siteConfig.bookingUrl}
                data-event="cta_founder_membership"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-[var(--background)] shadow-[0_0_30px_rgba(79,185,219,0.3)] transition hover:scale-[1.02] motion-reduce:hover:scale-100"
                style={{ background: "var(--gradient-primary)" }}
              >
                Reserve Founder Spot
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={pageCtas.howItWorks.href}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-base font-semibold text-white transition hover:border-[var(--sky-blue)]/50 hover:bg-[var(--sky-blue)]/10"
              >
                {pageCtas.howItWorks.label}
              </Link>

              <Link
                href={pageCtas.technology.href}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-base font-semibold text-white transition hover:border-[var(--sky-blue)]/50 hover:bg-[var(--sky-blue)]/10"
              >
                {pageCtas.technology.label}
              </Link>

              <Link
                href={pageCtas.faq.href}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-base font-semibold text-white transition hover:border-[var(--sky-blue)]/50 hover:bg-[var(--sky-blue)]/10"
              >
                {pageCtas.faq.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
