import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BreadcrumbSchema } from "@/src/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/src/components/seo/faq-schema";
import { ServiceAreaMention } from "@/src/components/service-area-mention";
import { SiteNap } from "@/src/components/site-nap";
import { buildMetadata, seoPages } from "@/src/lib/seo";
import { siteConfig } from "@/src/data/site";

export const metadata: Metadata = buildMetadata(seoPages.faq);

const faqSections = [
  {
    title: "General",
    description: "What Launch Labs is, who it is for, and how it works.",
    items: [
      {
        question: "What is Launch Labs?",
        answer:
          "Launch Labs is a private, Trackman-powered indoor golf studio in Garland, TX. It is built for focused practice, simulator rounds, small groups, coaches, and players who want a clean golf environment without the bar or crowd.",
      },
      {
        question: "Where is Launch Labs located?",
        answer: `Launch Labs is at 565 W Oates Rd #100, Garland, TX 75043. Contact ${siteConfig.email} or ${siteConfig.phone} with questions. Full arrival and access instructions are provided through your booking confirmation.`,
      },
      {
        question: "Is Launch Labs open to the public?",
        answer:
          "Yes. Launch Labs is reservation-only and open 24/7 for both members and public bookings, based on availability.",
      },
      {
        question: "Do I need to be a member to book?",
        answer:
          "No. Non-members can book available time slots 24/7. Membership is designed for players who want recurring access, better monthly value, and member benefits.",
      },
      {
        question: "What makes Launch Labs different from other simulator places?",
        answer:
          "Launch Labs is a private golf lab, not a bar-style simulator lounge. Every session is built around privacy, Trackman data, clean design, and predictable access.",
      },
    ],
  },
  {
    title: "Booking and access",
    description: "How to reserve your bay and enter the facility.",
    items: [
      {
        question: "How do I book a session?",
        answer:
          "Book online, choose your available time, and follow the confirmation instructions. Your reservation gives you access to the bay during your selected session window.",
      },
      {
        question: "How do I get into the facility?",
        answer:
          "Launch Labs uses automated access. After booking, you will receive entry instructions for your reservation. Access is tied to your scheduled session.",
      },
      {
        question: "Is the facility staffed?",
        answer:
          "Launch Labs is designed as a self-service studio. The facility uses online booking, controlled entry, and security cameras to keep the experience consistent and reliable.",
      },
      {
        question: "Can I arrive early?",
        answer:
          "Your access window is tied to your reservation. Please arrive close to your scheduled time so the previous player can finish and the bay stays on schedule.",
      },
      {
        question: "What happens if I need help during my session?",
        answer:
          "Use the support instructions provided in your booking confirmation. For non-urgent questions, contact Launch Labs through the website or email xander@launchlabstx.com.",
      },
    ],
  },
  {
    title: "Memberships and pricing",
    description:
      "How memberships, founding offers, and non-member bookings work.",
    items: [
      {
        question: "What are the membership options?",
        answer:
          "Launch Labs offers membership options for players who want consistent access, better monthly value, and member benefits. Current membership details are listed on the pricing page.",
      },
      {
        question: "What is a Founding Membership?",
        answer:
          "A Founding Membership is a limited-time promotion for early members before opening. It gives early supporters access to founder pricing and membership benefits while availability lasts.",
      },
      {
        question:
          "If I buy a Founding Membership before opening, when does billing start?",
        answer:
          "Your first payment secures your founder spot and is applied to your first month once Launch Labs opens. You will not be charged for unused months before the facility is available.",
      },
      {
        question: "Can non-members still book a bay?",
        answer:
          "Yes. Non-members can reserve available public time slots 24/7, based on availability.",
      },
      {
        question: "How do I cancel or ask a billing question?",
        answer:
          "For cancellation or billing questions, email xander@launchlabstx.com. Membership and booking terms may also be listed during checkout or on the terms page.",
      },
    ],
  },
  {
    title: "Your session",
    description: "What to bring, how long to book, and what to expect.",
    items: [
      {
        question: "What should I bring?",
        answer:
          "Bring your clubs, clean golf balls, and golf shoes or athletic shoes. Do not use damaged balls, dirty clubs, or anything that could mark the screen or turf.",
      },
      {
        question: "Do I need my own clubs?",
        answer:
          "Yes. Players should bring their own clubs unless a rental or demo option is specifically listed for your booking.",
      },
      {
        question: "How long should I book?",
        answer:
          "For solo practice, 60 minutes is a strong starting point. For two or more players, 90 to 120 minutes gives everyone more time to warm up, play, and review Trackman data.",
      },
      {
        question: "Can I play a full simulated round?",
        answer:
          "Yes. You can use your session for practice, data work, or simulated golf depending on your goals and available booking time.",
      },
      {
        question: "Can beginners use Launch Labs?",
        answer:
          "Yes. Launch Labs is built for serious practice, but you do not need to be a low-handicap player. Beginners, families, and casual golfers are welcome as long as they follow facility rules.",
      },
      {
        question: "Can left-handed golfers use the bay?",
        answer:
          "Most simulator sessions can support both right-handed and left-handed golfers. Check the booking details for any bay-specific notes before reserving.",
      },
    ],
  },
  {
    title: "Guests, coaches, and groups",
    description:
      "Rules for guests, lessons, instructors, and private blocks.",
    items: [
      {
        question: "Can I bring guests?",
        answer:
          "Yes. You may bring guests within the bay capacity listed at booking. The person who books the session is responsible for their guests, facility rules, and any damage caused during the reservation.",
      },
      {
        question: "Can kids use the facility?",
        answer:
          "Yes, but minors must be supervised by an adult. Launch Labs is a golf training environment, and safety rules apply to every player and guest.",
      },
      {
        question: "Can coaches or instructors book Launch Labs?",
        answer:
          "Yes. Coaches and instructors can use Launch Labs for private lessons, recurring sessions, or player development. Contact Launch Labs for recurring coach access or larger scheduling needs.",
      },
      {
        question: "Do you offer lessons?",
        answer:
          "Launch Labs provides the facility and Trackman-powered environment. Lesson availability may depend on partner instructors or independent coaches who book the studio.",
      },
      {
        question: "Can I host a team event or private group session?",
        answer:
          "Yes. Launch Labs can support small group sessions, team practice, and private blocks. Contact Launch Labs with your preferred date, group size, and session goals.",
      },
    ],
  },
  {
    title: "Facility rules",
    description:
      "How to keep the bay clean, safe, and ready for the next player.",
    items: [
      {
        question: "What are the main facility rules?",
        answer:
          "Respect your reservation time, use clean equipment, keep guests within the bay area, avoid unsafe swings, and leave the space ready for the next player.",
      },
      {
        question: "Are food and drinks allowed?",
        answer:
          "Launch Labs is a golf-focused studio, not a bar. Covered water bottles are fine, but food, alcohol, and anything that can damage the turf, technology, or furniture should stay out of the hitting area.",
      },
      {
        question: "Are there security cameras?",
        answer:
          "Yes. Security cameras are used to support safety, access control, and facility protection in the self-service environment.",
      },
      {
        question: "What if I damage something?",
        answer:
          "Report it right away using the contact information in your booking confirmation. The booking customer may be responsible for damage caused by misuse, unsafe swings, guests, or failure to follow posted rules.",
      },
      {
        question: "Do I need to sign a waiver?",
        answer:
          "Yes. All players and guests must follow Launch Labs rules, terms, and waiver requirements before using the facility.",
      },
    ],
  },
];

const allFaqItems = faqSections.flatMap((section) => section.items);

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        id="faq-breadcrumb-schema"
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
      <FAQSchema id="faq-page-schema" faqs={allFaqItems} />

      <main className="min-h-screen bg-[#0A0E14] text-white">
      <section className="relative overflow-hidden border-b border-[#2A3644]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,185,219,0.18),transparent_36%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:100%_100%,48px_48px,48px_48px]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-32 md:px-8 md:pb-20 md:pt-36">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Launch Labs
          </Link>

          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-[#2A3644] bg-[#111820]/80 px-4 py-2 text-sm font-medium text-[#BDEDE8]">
              Launch Labs FAQ
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Launch Labs FAQ
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#D6DCE5]">
              Questions, answered cleanly. Everything you need to know before
              reserving your bay at Launch Labs — 24/7 public booking, private
              Trackman access, automated entry, memberships, guest rules, and
              what to expect when you arrive.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/pricing/"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#4FB9DB_0%,#0E8DA8_100%)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                See Memberships
              </Link>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center rounded-full border border-[#2A3644] bg-[#111820] px-6 py-3 text-sm font-semibold text-[#D6DCE5] transition hover:border-[#4FB9DB] hover:text-white"
              >
                Ask a Question
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10">
          {faqSections.map((section) => (
            <div
              key={section.title}
              className="grid gap-6 lg:grid-cols-[280px_1fr]"
            >
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#8A95A5]">
                  {section.description}
                </p>
              </div>

              <div className="space-y-4">
                {section.items.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-[#2A3644] bg-[#111820] p-5 transition hover:border-[#4FB9DB]/70 hover:bg-[#1A2330]"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base font-semibold leading-7 text-white">
                        {item.question}
                      </h3>

                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#2A3644] text-[#4FB9DB] transition group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-[#D6DCE5]">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10 lg:px-8">
        <div className="rounded-3xl border border-[#2A3644] bg-[#111820] p-8 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Launch Labs contact
          </h2>
          <SiteNap className="mt-5 text-[#D6DCE5]" />
          <ServiceAreaMention className="mt-4" prefix="Serving golfers in" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-[#2A3644] bg-[#111820]">
          <div className="relative p-8 sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,185,219,0.16),transparent_34%)]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-medium text-[#BDEDE8]">
                  Still need help?
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Reserve your bay with confidence.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#D6DCE5]">
                  For membership, billing, coach access, or private group
                  questions, contact Launch Labs before booking.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/pricing/"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#4FB9DB_0%,#0E8DA8_100%)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  See Memberships
                </Link>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-[#2A3644] px-6 py-3 text-sm font-semibold text-[#D6DCE5] transition hover:border-[#4FB9DB] hover:text-white"
                >
                  Email Launch Labs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
