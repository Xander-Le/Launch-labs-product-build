import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
} from "lucide-react";
import { legalNav, localNav, mainNav, socialNav } from "@/src/data/nav";
import { ServiceAreaMention } from "@/src/components/service-area-mention";
import { SiteNap } from "@/src/components/site-nap";
import { siteConfig } from "@/src/data/site";

function FooterNavSection({
  title,
  ariaLabel,
  children,
}: {
  title: string;
  ariaLabel: string;
  children: ReactNode;
}) {
  return (
    <nav aria-label={ariaLabel}>
      <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--sky-blue)]">
        {title}
      </p>
      <ul className="flex flex-col gap-1.5">{children}</ul>
    </nav>
  );
}

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-1.5 text-sm leading-6 text-[var(--text-muted)] transition hover:text-white"
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span>{children}</span>
      {external ? (
        <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
      ) : null}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-12 overflow-hidden border-t border-white/10 bg-[#080b10] shadow-[inset_0_1px_0_rgba(79,185,219,0.14),0_-16px_32px_rgba(0,0,0,0.28)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/35 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,185,219,0.1),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-300/30 bg-sky-300/10 p-1.5">
                <Image
                  src="/brand/launch-labs-icon-cyan.svg"
                  alt="Launch Labs logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-[var(--font-outfit)] text-lg font-semibold tracking-[-0.02em] text-white">
                  Launch Labs
                </p>
                <p className="text-[11px] text-[var(--text-muted)]">
                  Golf Simulator · Garland, TX
                </p>
              </div>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--text-muted)]">
              Private Trackman indoor golf for focused practice and digital
              access.
            </p>

            <SiteNap className="mt-4" />
            <ServiceAreaMention className="mt-4" />
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:col-span-8 lg:gap-5">
            <FooterNavSection title="Core Pages" ariaLabel="Core pages">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </FooterNavSection>

            <FooterNavSection title="Local Areas" ariaLabel="Local service areas">
              {localNav.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </FooterNavSection>

            <FooterNavSection title="Legal" ariaLabel="Legal pages">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </FooterNavSection>

            <FooterNavSection title="Social" ariaLabel="Social media">
              {socialNav.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href} external>
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </FooterNavSection>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-[#06080c]/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <p className="text-[var(--text-body)]">
            Your Private Golf Lounge. Open 24/7.
          </p>
        </div>
      </div>
    </footer>
  );
}
