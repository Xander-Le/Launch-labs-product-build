"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0A0E14]/95 p-4 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-lg gap-3">
        <Link
          href="#memberships"
          data-event="cta_founder_membership"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4FB9DB_0%,#0E8DA8_100%)] px-4 py-3 text-sm font-semibold text-[#071018] shadow-[0_0_20px_rgba(79,185,219,0.3)]"
        >
          Founder Memberships
        </Link>

        <Link
          href="/how-it-works/"
          data-event="cta_how_it_works"
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white"
        >
          How It Works
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
