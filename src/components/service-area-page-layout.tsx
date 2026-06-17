import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaqAccordion } from "@/src/components/faq-accordion";
import { ServiceAreaMention } from "@/src/components/service-area-mention";
import type { ServiceAreaPageContent } from "@/src/data/service-area-pages";
import { pageCtas } from "@/src/data/nav";
import { siteConfig } from "@/src/data/site";

type ServiceAreaPageLayoutProps = {
  content: ServiceAreaPageContent;
};

export function ServiceAreaPageLayout({ content }: ServiceAreaPageLayoutProps) {
  return (
    <main className="min-h-screen bg-lab-grid px-6 pb-24 pt-32">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--sky-blue)]">
            {content.eyebrow}
          </p>

          <h1 className="mt-4 font-[var(--font-outfit)] text-5xl font-bold tracking-[-0.04em] text-white md:text-7xl">
            {content.title}{" "}
            <span className="text-gradient">{content.titleAccent}</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--text-body)]">
            {content.intro}
          </p>

          <ServiceAreaMention className="mt-4" />

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href={pageCtas.memberships.href}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(79,185,219,0.22)] transition hover:scale-[1.02]"
              style={{ background: "var(--gradient-primary)" }}
            >
              {pageCtas.memberships.label}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href={pageCtas.howItWorks.href}
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--sky-blue)]"
            >
              {pageCtas.howItWorks.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
            <h2 className="font-[var(--font-outfit)] text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              {content.driveTime.title}
            </h2>
            <p className="mt-4 leading-7 text-[var(--text-muted)]">
              {content.driveTime.summary}
            </p>
            <ul className="mt-6 space-y-3">
              {content.driveTime.details.map((detail) => (
                <li
                  key={detail}
                  className="flex gap-3 text-sm leading-6 text-[var(--text-body)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--sky-blue)]" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
            <h2 className="font-[var(--font-outfit)] text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              {content.localDemand.title}
            </h2>
            <p className="mt-4 leading-7 text-[var(--text-muted)]">
              {content.localDemand.summary}
            </p>
            <ul className="mt-6 space-y-3">
              {content.localDemand.details.map((detail) => (
                <li
                  key={detail}
                  className="flex gap-3 text-sm leading-6 text-[var(--text-body)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--sky-blue)]" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="font-[var(--font-outfit)] text-4xl font-semibold tracking-[-0.03em] text-white">
            {content.whyLocal.title}
          </h2>
          <p className="mt-4 leading-7 text-[var(--text-muted)]">
            {content.whyLocal.summary}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {content.whyLocal.points.map((point) => (
            <article
              key={point.title}
              className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-7"
            >
              <h3 className="font-[var(--font-outfit)] text-xl font-semibold text-white">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="font-[var(--font-outfit)] text-4xl font-semibold tracking-[-0.03em] text-white">
              {content.useCases.title}
            </h2>
            <p className="mt-4 leading-7 text-[var(--text-muted)]">
              {content.useCases.summary}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.useCases.examples.map((example) => (
              <div
                key={example.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6"
              >
                <h3 className="font-[var(--font-outfit)] text-xl font-semibold text-white">
                  {example.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  {example.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={pageCtas.memberships.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--sky-blue)]"
            >
              {pageCtas.memberships.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={pageCtas.howItWorks.href}
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--sky-blue)]"
            >
              {pageCtas.howItWorks.label}
            </Link>
            <Link
              href={siteConfig.directionsUrl}
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--sky-blue)]"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-4xl">
        <FaqAccordion
          eyebrow="Local FAQ"
          title="Questions from nearby golfers"
          faqs={content.faqs}
        />
      </section>
    </main>
  );
}
