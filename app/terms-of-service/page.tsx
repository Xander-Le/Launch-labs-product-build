import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  FileText,
  KeyRound,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { BreadcrumbSchema } from "@/src/components/seo/breadcrumb-schema";
import { SiteNap } from "@/src/components/site-nap";
import { buildMetadata, seoPages } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata(seoPages.terms);

const facilityRules = [
  "Use the facility only during your reserved time, active membership access period, or other approved access window.",
  "Do not share door codes, digital keys, access links, booking credentials, or account access with anyone who is not authorized under your reservation or membership.",
  "Do not allow unauthorized entry, tailgating, or access by anyone not included in your reservation or authorized Guest list.",
  "Only one person may swing a club in a simulator bay at a time.",
  "Do not stand in another person’s swing path, hitting area, or unsafe proximity to the bay.",
  "No running, horseplay, reckless swings, throwing objects, or unsafe conduct.",
  "Use only clean, approved, unmarked golf balls. Do not use damaged balls, marked balls, range balls, or balls that may damage the screen or equipment.",
  "Do not move, unplug, adjust, tamper with, or interfere with Trackman units, computers, cameras, monitors, projectors, screens, cables, lighting, mounts, locks, or access-control systems.",
  "Do not smoke, vape, use illegal drugs, or use the simulator bays while impaired by alcohol, drugs, or medication.",
  "Outside alcoholic beverages are not allowed.",
  "Pets and animals are not allowed, except service animals as required by law.",
  "Weapons, firearms, and other prohibited items are not allowed except as otherwise required by applicable law and posted signage.",
  "Leave the bay, restroom, entry area, and common areas clean and secure.",
  "Report damage, unsafe conditions, or equipment issues to Launch Labs immediately.",
];

const damageItems = [
  "Impact screens",
  "Trackman units",
  "Hitting mats",
  "Turf",
  "Tees",
  "Computers",
  "Monitors",
  "Projectors",
  "Cameras",
  "Lighting",
  "Walls",
  "Ceilings",
  "Doors",
  "Locks",
  "Access systems",
  "Furniture",
  "Restrooms",
  "Any other Launch Labs property",
];

const prohibitedUses = [
  "Unauthorized commercial instruction, coaching, club fitting, clinics, events, or business activity.",
  "Filming, photography, or content production for commercial use without written permission.",
  "Damaging, disabling, covering, blocking, or interfering with cameras or access systems.",
  "Attempting to bypass booking, payment, membership, or access-control systems.",
  "Using another person’s account, membership, booking, door code, digital key, or payment method without authorization.",
  "Harassment, threats, abusive conduct, discrimination, disorderly conduct, or behavior that creates a safety risk.",
  "Any unlawful activity or violation of posted facility rules.",
];

const cancellationItems = [
  "Public User hourly bookings must be canceled at least 24 hours before the scheduled start time to be eligible for a refund or booking credit, unless a different policy is stated at checkout.",
  "Late cancellations, no-shows, unused time, and early departures are not guaranteed a refund or credit.",
  "If you arrive late, your reservation still ends at the original scheduled end time.",
  "Launch Labs may cancel, move, or modify a booking due to equipment issues, facility maintenance, power outages, emergencies, safety concerns, or circumstances outside our control.",
  "If Launch Labs cancels your booking, we may provide a refund, credit, or reasonable rescheduling option.",
];

const membershipItems = [
  "Memberships are billed on a recurring basis according to the plan selected at checkout.",
  "By purchasing a membership, you authorize Launch Labs or its payment processor to charge your payment method for recurring membership dues, applicable taxes, fees, and approved charges.",
  "Memberships continue until canceled, expired, suspended, or terminated under these Terms or the applicable membership terms.",
  "Membership benefits, booking limits, guest privileges, hours, rates, and included simulator time may vary by plan.",
  "Memberships are personal to the Member and may not be sold, transferred, shared, or assigned without written permission from Launch Labs.",
  "Unused membership time, booking credits, discounts, or benefits do not convert to cash and may not roll over unless expressly stated in your membership plan.",
  "Launch Labs may change membership plans, pricing, features, or availability with reasonable notice, subject to applicable law and any separate written promotional terms.",
];

const acknowledgmentItems = [
  "You have read these Terms.",
  "You agree to follow all Launch Labs rules and policies.",
  "You understand Launch Labs may operate as a self-service facility without staff present.",
  "You are responsible for your conduct and the conduct of your Guests.",
  "You are responsible for damage caused by you, your Guests, or minors under your supervision.",
  "You agree that your use of Launch Labs as a Member, Non-Member, Public User, or Guest is also subject to the Launch Labs Liability Waiver.",
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-white/10 py-10">
      <h2 className="mb-5 text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
      <div className="space-y-5 text-base leading-8 text-slate-300">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="mb-4 text-sky-300">{icon}</div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}

export default function TermsOfServicePage() {
  return (
    <>
      <BreadcrumbSchema
        id="terms-breadcrumb-schema"
        items={[
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms-of-service" },
        ]}
      />

      <main className="min-h-screen bg-[#0A0E14] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,185,219,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,141,168,0.18),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Launch Labs
          </Link>

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-sm font-medium text-sky-200">
              <FileText className="h-4 w-4" />
              Website, booking, membership, and facility terms
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Terms of Service
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              These Terms govern use of the Launch Labs website, bookings,
              memberships, communications, and facility access by Members,
              Non-Members, Public Users, and other Users. By using Launch Labs,
              you agree to follow these Terms and all posted facility rules.
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              These Terms apply equally to Members, Non-Members, Public Users,
              guests, observers, instructors, coaches, minors, and anyone else
              who enters or uses Launch Labs.
            </p>

            <p className="mt-5 text-sm text-slate-500">
              Last updated: June 15, 2026
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <InfoCard
              icon={<KeyRound className="h-6 w-6" />}
              title="Self-service access"
              text="Members and Non-Members may access the studio using digital entry, door codes, or booking credentials."
            />
            <InfoCard
              icon={<CreditCard className="h-6 w-6" />}
              title="Clear billing terms"
              text="Member plans, Public User bookings, cancellations, payment authorization, and promotions are covered below."
            />
            <InfoCard
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Facility responsibility"
              text="Every User is responsible for safe conduct, Guests, access credentials, and damage they cause."
            />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[240px_1fr] md:px-8 md:py-16">
        <aside className="hidden md:block">
          <div className="sticky top-28 rounded-2xl border border-white/10 bg-[#111820]/80 p-5 backdrop-blur">
            <p className="mb-4 text-sm font-semibold text-white">
              On this page
            </p>
            <nav className="grid gap-3 text-sm text-slate-400">
              <a href="#acceptance" className="hover:text-sky-300">
                Acceptance
              </a>
              <a href="#services" className="hover:text-sky-300">
                Services
              </a>
              <a href="#accounts" className="hover:text-sky-300">
                Accounts & Access
              </a>
              <a href="#bookings" className="hover:text-sky-300">
                Bookings
              </a>
              <a href="#memberships" className="hover:text-sky-300">
                Memberships
              </a>
              <a href="#rules" className="hover:text-sky-300">
                Facility Rules
              </a>
              <a href="#guests" className="hover:text-sky-300">
                Guests & Minors
              </a>
              <a href="#damage" className="hover:text-sky-300">
                Damage
              </a>
              <a href="#waiver" className="hover:text-sky-300">
                Liability Waiver
              </a>
              <a href="#sms" className="hover:text-sky-300">
                SMS Terms
              </a>
              <a href="#contact" className="hover:text-sky-300">
                Contact
              </a>
            </nav>
          </div>
        </aside>

        <article className="min-w-0">
          <div className="rounded-3xl border border-white/10 bg-[#111820] p-6 shadow-2xl shadow-sky-950/20 md:p-10">
            <Section id="acceptance" title="1. Acceptance of These Terms">
              <p>
                Welcome to Launch Labs LLC, doing business as Launch Labs. These
                Terms of Service apply when a User accesses our website, creates
                an account, books a simulator bay, purchases a membership, joins
                a waitlist, communicates with us, enters our facility, or
                otherwise uses Launch Labs.
              </p>
              <p>
                By using Launch Labs as a Member, Non-Member, Public User, or
                Guest, you agree to these Terms, our posted facility rules, our
                Privacy Policy, and our Liability Waiver, Release, and
                Assumption of Risk Agreement.
              </p>
              <p>
                If you do not agree to these Terms, do not book, enter, observe,
                participate in, or use Launch Labs.
              </p>

              <p>
                <strong className="text-white">“User”</strong> means any person
                who uses, books, enters, observes, participates in, or accesses
                Launch Labs. This includes Members, Non-Members, Public Users,
                guests, observers, minors, instructors, coaches, invitees, and
                any other person who enters the facility.
              </p>
              <p>
                <strong className="text-white">“Member”</strong> means a person
                with an active Launch Labs membership plan.
              </p>
              <p>
                <strong className="text-white">“Non-Member”</strong> or{" "}
                <strong className="text-white">“Public User”</strong> means a
                person who does not have an active Launch Labs membership but
                books, enters, observes, participates in, or uses Launch Labs
                through a public reservation, guest access, event, promotion,
                or other approved access method.
              </p>
            </Section>

            <Section id="eligibility" title="2. Eligibility">
              <p>
                Users must be at least 18 years old to create an account,
                purchase a membership, book a session as a Public User, opt in
                to SMS messages, or accept these Terms on their own behalf.
              </p>
              <p>
                Minors may only use Launch Labs if permitted by Launch Labs
                policy and supervised by a parent, legal guardian, or authorized
                responsible adult. A parent or legal guardian is responsible for
                the minor’s conduct, safety, rule compliance, and any damage
                caused by the minor.
              </p>
            </Section>

            <Section id="services" title="3. Our Services">
              <p>
                Launch Labs provides access to a private indoor golf simulator
                studio, including simulator bays, Trackman technology, hitting
                mats, turf, impact screens, computers, monitors, cameras, access
                systems, and related facility features.
              </p>
              <p>
                Launch Labs is a reservation-based, self-service facility. Staff
                may not be present during your session. Members may have access
                during extended or 24/7 hours depending on their membership
                plan. Public Users may book during public reservation hours.
                Membership access, public booking availability, and facility
                availability may change.
              </p>
              <p>
                Launch Labs may modify, suspend, limit, or discontinue services,
                hours, equipment, membership benefits, booking availability, or
                facility access at any time for maintenance, safety, operational
                needs, emergencies, or business reasons.
              </p>
            </Section>

            <Section id="accounts" title="4. Accounts, Booking Credentials, and Access">
              <p>
                Members and Non-Members who create accounts or make bookings are
                responsible for the accuracy of the information they provide to
                Launch Labs, including name, phone number, email address,
                payment information, and Guest information.
              </p>
              <p>
                Users are responsible for maintaining the confidentiality of
                their account, door code, digital key, access link, booking
                credentials, and payment credentials.
              </p>
              <BulletList
                items={[
                  "Do not share your account, door code, digital key, access link, or booking credentials.",
                  "Do not allow unauthorized persons to enter the facility.",
                  "Do not prop doors open or bypass access-control systems.",
                  "Notify Launch Labs immediately if you believe your account or access credentials have been compromised.",
                  "You are responsible for activity that occurs under your account, booking, membership, or access credentials, whether you are a Member or Public User.",
                ]}
              />
              <p>
                Launch Labs may suspend, restrict, or terminate access if we
                believe your account, credentials, booking, or membership has
                been misused.
              </p>
            </Section>

            <Section id="bookings" title="5. Bookings, Cancellations, and No-Shows">
              <p>
                Simulator bays must be reserved by Members and Public Users
                through the Launch Labs website, booking platform, app, or
                approved booking method. A booking gives the reserving Member or
                Public User access only for the reserved date, time, bay, and
                purpose.
              </p>
              <BulletList items={cancellationItems} />
              <p>
                Member and Public User bookings may not be resold, transferred,
                assigned, or used for unauthorized commercial purposes without
                written permission from Launch Labs.
              </p>
            </Section>

            <Section id="memberships" title="6. Memberships, Recurring Billing, and Plan Terms">
              <p>
                This Section applies to Members. Launch Labs may offer
                memberships, founding memberships, promotional memberships,
                booking packages, credits, discounts, or other paid plans.
                Specific plan terms may vary and may be shown at checkout, in
                your account, on the pricing page, or in a separate membership
                agreement.
              </p>

              <BulletList items={membershipItems} />

              <div className="rounded-2xl border border-sky-300/25 bg-sky-300/10 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <CalendarClock className="h-6 w-6 shrink-0 text-sky-200" />
                  <p className="font-semibold text-white">
                    Pre-opening and promotional memberships
                  </p>
                </div>
                <p className="leading-8 text-slate-300">
                  If Launch Labs sells a pre-opening membership, founding
                  membership, or other promotional membership before the
                  facility is available for use, the payment and activation
                  terms stated at checkout or in the promotion will control. If
                  no separate terms are stated, Launch Labs may apply the first
                  payment to the first eligible membership period after the
                  facility opens for Member use.
                </p>
              </div>

              <p>
                To cancel a membership, Members should email{" "}
                <a
                  href="mailto:xander@launchlabstx.com"
                  className="font-medium text-sky-300 hover:text-white"
                >
                  xander@launchlabstx.com
                </a>{" "}
                or use any cancellation method made available in your account.
                Cancellations are effective at the end of the current paid
                billing period unless a different policy is required by law or
                stated in your membership terms. Membership fees are not
                prorated unless required by law or expressly stated in writing
                by Launch Labs.
              </p>

              <p>
                You should cancel before your next billing date to avoid the
                next recurring charge. Launch Labs may require reasonable
                information to locate and verify your account before processing a
                cancellation request.
              </p>
            </Section>

            <Section id="payments" title="7. Payments, Taxes, Fees, and Chargebacks">
              <p>
                By making a purchase, booking a bay as a Public User, or
                starting a membership as a Member, you authorize Launch Labs
                and its payment processors to charge your selected payment
                method for the amount shown at checkout, applicable taxes,
                fees, recurring membership dues, damage charges, late charges,
                no-show charges, and other approved amounts.
              </p>
              <p>
                Members and Non-Members are responsible for keeping payment
                information current. If a payment fails, Launch Labs may retry
                the charge, request an updated payment method, suspend access,
                cancel bookings, or terminate membership privileges.
              </p>
              <p>
                If you dispute a valid charge or initiate an improper chargeback,
                Launch Labs may suspend a Member’s or Public User’s account while
                the issue is reviewed. You remain responsible for valid amounts
                owed.
              </p>
            </Section>

            <Section id="self-service" title="8. Self-Service Facility Access">
              <p>
                Launch Labs may operate without staff on site. Members and
                Non-Members may enter using a digital key, door code, app-based
                access, or other access-control method.
              </p>
              <BulletList
                items={[
                  "Staff may not be present during your session.",
                  "Users are responsible for inspecting the bay and surrounding area before use.",
                  "Users must stop using the facility immediately if anything appears unsafe, damaged, loose, unstable, wet, malfunctioning, or out of place.",
                  "Users must report hazards, damage, unsafe conditions, or malfunctioning equipment to Launch Labs immediately.",
                  "Users must call 911 in the event of a medical emergency, fire, injury, threat, or urgent safety concern.",
                  "Launch Labs is not responsible for providing immediate supervision, instruction, medical assistance, or emergency response during your session.",
                ]}
              />
              <p>
                After-hours and 24/7 Member access may involve additional risks,
                including reduced public visibility, delayed assistance, and no
                staff present.
              </p>
            </Section>

            <Section id="rules" title="9. Facility Rules and Conduct">
              <p>
                All Users agree to follow all posted rules, booking rules,
                membership rules, safety instructions, and written policies
                provided by Launch Labs.
              </p>
              <BulletList items={facilityRules} />
              <p>
                Launch Labs may suspend, restrict, terminate, or refuse access
                for unsafe conduct, property damage, unauthorized access,
                harassment, misuse of the facility, or violation of these Terms.
              </p>
            </Section>

            <Section id="prohibited" title="10. Prohibited Uses">
              <p>
                Users may not use Launch Labs, the website, booking tools,
                access systems, or facility for prohibited activity.
              </p>
              <BulletList items={prohibitedUses} />
            </Section>

            <Section id="guests" title="11. Guests, Instructors, and Minors">
              <p>
                If you are a Member or Public User, you are responsible for
                every Guest, minor, observer, instructor, coach, or invitee who
                enters under your booking, account, access credentials, or
                membership.
              </p>
              <BulletList
                items={[
                  "Each Guest must be registered, authorized, and covered by the Launch Labs Liability Waiver before entering or using the facility.",
                  "Members and Public Users must remain with their Guests unless Launch Labs gives written permission otherwise.",
                  "You are responsible for your Guests’ conduct, safety, rule compliance, and property damage.",
                  "Independent instructors, coaches, fitters, and commercial users must receive written permission from Launch Labs before conducting business in the facility.",
                  "Minors may not be left unattended.",
                ]}
              />
            </Section>

            <Section id="damage" title="12. Equipment Damage and Cleaning Charges">
              <p>
                Users agree to pay for damage caused by them, their Guests,
                their invitees, or any minor under their supervision. This
                includes damage caused by negligence, misuse, failure to follow
                rules, intentional acts, unauthorized activity, or failure to
                secure the facility.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {damageItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p>
                Launch Labs may charge your payment method for reasonable
                repair, replacement, cleaning, service, labor, administrative,
                or recovery costs resulting from damage, misuse, excessive mess,
                unauthorized access, or violation of these Terms.
              </p>
            </Section>

            <Section id="personal-property" title="13. Personal Property">
              <p>
                Each User is responsible for their personal property at all
                times. Launch Labs is not responsible for lost, stolen, damaged,
                or abandoned property, including golf clubs, bags, phones,
                wallets, keys, apparel, electronics, vehicles, or items left
                inside the facility or parking area.
              </p>
            </Section>

            <Section id="security" title="14. Security Cameras, Access Logs, and Monitoring">
              <p>
                Launch Labs may use video surveillance, access logs, booking
                records, door-entry records, account activity records, and other
                security systems for safety, security, operations, damage
                review, rule enforcement, and facility management.
              </p>
              <p>
                Cameras may record entry areas, common areas, simulator bay
                areas, and other non-private areas. Cameras are not used in
                private restroom areas.
              </p>
              <p>
                Users may not disable, block, cover, unplug, damage, or interfere
                with any camera, access-control device, sensor, lock, or
                security equipment.
              </p>
            </Section>

            <Section id="technology" title="15. Website, Booking Tools, and Third-Party Services">
              <p>
                Launch Labs may use third-party providers for booking, payments,
                access control, email, SMS, analytics, facility technology,
                Trackman-related services, and other operations.
              </p>
              <p>
                Third-party services may be subject to their own terms and
                privacy policies. Launch Labs is not responsible for outages,
                interruptions, delays, errors, data loss, or service failures
                caused by third-party platforms, internet providers, payment
                processors, software vendors, hardware vendors, or utility
                providers.
              </p>
              <p>
                Users may not attempt to interfere with, reverse engineer, scrape,
                attack, overload, bypass, or gain unauthorized access to the
                Launch Labs website, booking systems, access systems, payment
                systems, or facility technology.
              </p>
            </Section>

            <Section id="waiver" title="16. Liability Waiver and Assumption of Risk">
              <div className="rounded-2xl border border-sky-300/30 bg-sky-300/10 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 shrink-0 text-sky-200" />
                  <p className="font-semibold text-white">
                    The Liability Waiver is part of these Terms.
                  </p>
                </div>
                <p className="leading-8 text-slate-300">
                  Use of Launch Labs by Members, Non-Members, Public Users, and
                  Guests involves inherent risks, including risks from golf
                  clubs, golf balls, ricochets, simulator equipment, turf,
                  mats, screens, physical exertion, other Users, self-service
                  access, and delayed assistance.
                </p>
              </div>

              <p>
                Before using Launch Labs, every User must read and agree to the{" "}
                <Link
                  href="/liability-waiver/"
                  className="font-medium text-sky-300 hover:text-white"
                >
                  Launch Labs Liability Waiver, Release, and Assumption of Risk
                  Agreement
                </Link>
                . That waiver is incorporated into these Terms by reference.
              </p>
              <p>
                If there is a conflict between these Terms and the Liability
                Waiver regarding risk, release of liability, assumption of risk,
                or indemnification, the Liability Waiver will control to the
                fullest extent permitted by law.
              </p>
            </Section>

            <Section id="indemnification" title="17. Indemnification">
              <p>
                To the fullest extent permitted by law, Users agree to defend,
                indemnify, and hold harmless Launch Labs LLC, its owners,
                members, managers, officers, employees, contractors, agents,
                landlords, vendors, technology providers, successors, and
                assigns from and against claims, demands, damages, liabilities,
                losses, costs, attorney’s fees, and expenses arising out of or
                related to your use of Launch Labs, your violation of these
                Terms, your Guests, your minors, your negligence or misconduct,
                your property damage, your unauthorized access, or your
                violation of law.
              </p>
            </Section>

            <Section id="no-warranty" title="18. No Warranty and Availability">
              <p>
                Launch Labs provides the website, bookings, facility access, and
                simulator equipment on an “as available” and “as is” basis.
              </p>
              <p>
                Launch Labs does not guarantee uninterrupted access, power,
                internet connectivity, software availability, equipment
                availability, simulator accuracy during every session, specific
                Trackman features, specific courses, specific data outputs, or
                that the facility will be free from all risks, hazards, or
                technical issues.
              </p>
              <p>
                If any equipment or facility condition appears unsafe or not
                functioning properly, Users must stop use immediately and notify
                Launch Labs.
              </p>
            </Section>

            <Section id="sms" title="19. SMS Terms">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-3 flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 shrink-0 text-sky-300" />
                  <p className="font-semibold text-white">
                    Text message communications
                  </p>
                </div>
                <div className="space-y-4 leading-8 text-slate-300">
                  <p>
                    By providing your phone number and opting in, you agree to
                    receive SMS messages from Launch Labs LLC. Messages may
                    include waitlist updates, booking confirmations, booking
                    reminders, access instructions, booking changes,
                    cancellations, membership-related notifications, special
                    offers, events, promotions, and business updates.
                  </p>
                  <p>
                    Message frequency may vary. Message and data rates may
                    apply. You can opt out of SMS communications at any time by
                    replying STOP. For assistance, reply HELP or contact us
                    using the support information below.
                  </p>
                  <p>
                    Wireless carriers are not liable for delayed or undelivered
                    messages. You must be at least 18 years old to opt in to SMS
                    messages from Launch Labs LLC.
                  </p>
                  <p>
                    Consent to receive promotional SMS messages is not required
                    as a condition of purchase. Transactional messages related
                    to bookings, access, account activity, or membership may be
                    necessary to provide certain services.
                  </p>
                  <p>
                    Your use of SMS communications is also subject to our{" "}
                    <Link
                      href="/privacy-policy/"
                      className="font-medium text-sky-300 hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </Section>

            <Section id="privacy" title="20. Privacy">
              <p>
                Our collection, use, and handling of personal information is
                described in our{" "}
                <Link
                  href="/privacy-policy/"
                  className="font-medium text-sky-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <p>
                By using Launch Labs as a Member, Non-Member, or Public User,
                you agree that we may collect and use information as described
                in the Privacy Policy, including information related to
                bookings, accounts, payments, SMS communications, website
                activity, access logs, and facility security.
              </p>
            </Section>

            <Section id="changes" title="21. Changes to These Terms">
              <p>
                Launch Labs may update these Terms from time to time. The “Last
                updated” date shows when these Terms were most recently revised.
              </p>
              <p>
                Updated Terms are effective when posted unless a later effective
                date is stated. Continued use of Launch Labs by any User after
                updated Terms are posted means you accept the updated Terms.
              </p>
            </Section>

            <Section id="law" title="22. Governing Law and Venue">
              <p>
                These Terms are governed by the laws of the State of Texas,
                without regard to conflict-of-law principles.
              </p>
              <p>
                Any dispute arising out of or related to these Terms, your use
                of Launch Labs as a Member, Non-Member, Public User, or Guest,
                your booking, your membership, or your presence at the facility
                shall be brought in the state or federal courts located in the
                county where the Launch Labs facility is located, unless
                otherwise required by law.
              </p>
            </Section>

            <Section id="severability" title="23. Severability">
              <p>
                If any part of these Terms is found to be invalid,
                unenforceable, or prohibited by law, the remaining provisions
                will remain in effect.
              </p>
              <p>
                Any invalid or unenforceable provision shall be modified to the
                minimum extent necessary to make it enforceable while preserving
                the intent of these Terms as much as permitted by law.
              </p>
            </Section>

            <Section id="acknowledgment" title="24. User Acknowledgment">
              <p>
                By booking, entering, observing, participating in, purchasing a
                membership, receiving communications, or using Launch Labs as a
                Member, Non-Member, Public User, or Guest, you acknowledge and
                agree that:
              </p>
              <BulletList items={acknowledgmentItems} />
            </Section>

            <Section id="contact" title="25. Contact Support">
              <p>
                Questions about these Terms, Member and Public User bookings,
                memberships, facility access, or billing may be directed to
                Launch Labs.
              </p>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <SiteNap className="text-slate-300" />
                <p className="mt-4 text-slate-300">
                  Membership cancellations:{" "}
                  <a
                    href="mailto:xander@launchlabstx.com"
                    className="font-medium text-sky-300 hover:text-white"
                  >
                    xander@launchlabstx.com
                  </a>
                </p>
              </div>
            </Section>
          </div>
        </article>
      </div>
    </main>
    </>
  );
}
