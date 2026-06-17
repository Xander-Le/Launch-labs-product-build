"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaqAccordion } from "@/src/components/faq-accordion";
import { pageCtas } from "@/src/data/nav";

const faqs = [
  {
    id: "access",
    question: "How do I get into the facility?",
    answer:
      "Launch Labs is built for self-service access. After booking, you will receive the access details needed to enter the facility for your reserved time.",
  },
  {
    id: "food",
    question: "Can I bring my own food and non-alcoholic drinks?",
    answer:
      "Yes. You are welcome to bring your own food and non-alcoholic beverages. We ask that you keep food and drinks at the seating area and away from the turf and simulator equipment.",
  },
  {
    id: "booking",
    question: "Do I need to book in advance, or do you accept walk-ins?",
    answer:
      "Launch Labs is reservation-only. Members and guests should book ahead so the bay is ready when they arrive.",
  },
  {
    id: "people",
    question: "How many people are allowed in a bay at one time?",
    answer:
      "Guest limits depend on your membership. Player includes up to 3 guests per visit. VIP includes up to 4 guests per visit.",
  },
  {
    id: "technology",
    question: "What kind of simulator technology do you use?",
    answer:
      "Every bay is powered by Trackman technology, giving players access to tour-level ball and club data in a private indoor environment.",
  },
  {
    id: "support",
    question: "What if I need help or experience a technical issue while I'm there?",
    answer:
      "If you experience an issue during your session, contact Launch Labs support directly. We will help troubleshoot access, booking, or simulator-related issues as quickly as possible.",
  },
  {
    id: "billing",
    question: "Are quarterly and annual memberships billed upfront?",
    answer:
      "No. Monthly, quarterly, and annual options are all billed monthly. Quarterly and annual refer to the membership term, not an upfront payment.",
  },
  {
    id: "upgrade",
    question: "Can I upgrade my membership later?",
    answer:
      "Yes. You can start with Player and upgrade to VIP when you are ready, based on membership availability.",
  },
  {
    id: "peak-hours",
    question: "Do peak hours affect membership booking?",
    answer:
      "Yes. Peak hours differ on weekends. Starter memberships are limited to non-peak reservation windows, so weekend availability may be more restricted for Starter members. Player and VIP plans may also have peak-hour limits depending on plan level.",
  },
];

export function PricingFaqSection() {
  return (
    <section className="relative px-4 pb-20 pt-8 text-white md:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="border-t border-white/10 pt-16">
          <FaqAccordion
            eyebrow="Support"
            title="Frequently Asked Questions"
            description="Got questions? We've got answers."
            faqs={faqs}
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
      </div>
    </section>
  );
}
