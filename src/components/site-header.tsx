"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { mainNav } from "@/src/data/nav";
import { siteConfig } from "@/src/data/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(10,14,20,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(79,185,219,0.35)] bg-[rgba(189,237,232,0.08)] p-1.5">
            <Image
              src="/brand/launch-labs-icon-cyan.svg"
              alt="Launch Labs logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          <div>
            <p className="font-[var(--font-outfit)] text-lg font-semibold tracking-[-0.02em] text-white">
              Launch Labs
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Golf Simulator Garland TX
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--text-muted)] transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={siteConfig.bookingUrl}
            data-event="cta_reserve_bay"
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(79,185,219,0.22)] transition hover:scale-[1.02]"
            style={{ background: "var(--gradient-primary)" }}
          >
            Reserve Your Bay
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-white lg:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[var(--border)] bg-[rgba(10,14,20,0.96)] px-6 py-6 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-sm font-medium text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={siteConfig.bookingUrl}
              data-event="cta_reserve_bay"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(79,185,219,0.22)]"
              style={{ background: "var(--gradient-primary)" }}
              onClick={() => setIsOpen(false)}
            >
              Reserve Your Bay
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}