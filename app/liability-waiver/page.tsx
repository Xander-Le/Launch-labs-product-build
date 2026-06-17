import Link from "next/link";
import type { Metadata } from "next";
import {
  AlertTriangle,
  ArrowLeft,
  Camera,
  CheckCircle2,
  Clock,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { BreadcrumbSchema } from "@/src/components/seo/breadcrumb-schema";
import { buildMetadata, seoPages } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata(seoPages.liabilityWaiver);

const riskItems = [
  "Being struck by a golf ball, golf club, tee, training aid, or other object.",
  "Golf balls ricocheting from screens, walls, ceilings, turf, frames, mats, or equipment.",
  "Injuries caused by another person’s swing, backswing, follow-through, mishit, or unsafe conduct.",
  "Slips, trips, or falls on turf, mats, flooring, cables, thresholds, transitions, or wet surfaces.",
  "Muscle strain, joint strain, back injury, shoulder injury, wrist injury, elbow injury, knee injury, or aggravation of a prior condition.",
  "Contact with walls, ceilings, screens, frames, poles, dividers, monitors, computers, projectors, furniture, fixtures, or other facility components.",
  "Equipment malfunction, simulator malfunction, sensor error, power interruption, internet outage, software issue, or lighting issue.",
  "Delayed assistance due to the facility being unmanned or accessed after hours.",
  "Medical events, including dizziness, fainting, shortness of breath, chest pain, dehydration, allergic reaction, or other health conditions.",
  "Theft, loss, or damage to personal property.",
  "Acts or omissions of other members, customers, guests, invitees, instructors, trespassers, or third parties.",
];

const releaseClaims = [
  "Personal injury.",
  "Bodily injury.",
  "Death.",
  "Property damage.",
  "Loss of personal property.",
  "Premises liability.",
  "Equipment-related injury.",
  "Simulator-related injury.",
  "Negligent maintenance.",
  "Negligent supervision.",
  "Negligent instruction.",
  "Negligent failure to warn.",
  "Negligent facility design or layout.",
  "Negligent operation of a self-service facility.",
  "Negligent access control.",
  "Negligent security.",
  "Negligent acts or omissions of Launch Labs or the Released Parties.",
];

const facilityRules = [
  "Only one person may swing a club in a bay at a time.",
  "No one may stand in front of, beside, behind, or within the swing path of another person.",
  "No one may enter the hitting area while another person is swinging.",
  "No reckless swings, running, horseplay, throwing objects, or unsafe conduct is allowed.",
  "Clubs may only be swung in the designated hitting area.",
  "Damaged clubs, damaged balls, cracked balls, marked balls, range balls, or any item that may damage the screen or equipment are not allowed.",
  "You may not move, adjust, unplug, tamper with, damage, or interfere with Trackman equipment, computers, cameras, monitors, projectors, screens, cables, mounts, lighting, access systems, or other facility equipment.",
  "Unauthorized coaching, commercial instruction, events, filming, or business activity is not allowed without written permission from Launch Labs.",
  "Smoking, vaping, illegal drugs, weapons, and disorderly conduct are not allowed.",
  "You may not use the simulator bays while impaired by alcohol, drugs, or medication.",
  "Pets and animals are not allowed, except service animals as required by law.",
  "Doors may not be propped open.",
  "Door codes, digital keys, access links, and booking credentials may not be shared.",
  "Unauthorized persons may not be allowed into the facility.",
  "The facility must be left clean, secure, and in the same condition as you found it.",
];

const damageItems = [
  "Impact screens",
  "Trackman units",
  "Computers",
  "Monitors",
  "Projectors",
  "Cameras",
  "Lighting",
  "Turf",
  "Mats",
  "Tees",
  "Walls",
  "Ceilings",
  "Furniture",
  "Doors",
  "Locks",
  "Access systems",
  "Restrooms",
  "Any other Launch Labs property",
];

const noWarrantyItems = [
  "Uninterrupted access",
  "Uninterrupted power",
  "Internet connectivity",
  "Software availability",
  "Equipment availability",
  "Simulator accuracy during every session",
  "Specific Trackman features, courses, data, or functionality",
  "That the facility will be free from all risks, hazards, or technical issues",
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
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

export default function LiabilityWaiverPage() {
  return (
    <>
      <BreadcrumbSchema
        id="liability-breadcrumb-schema"
        items={[
          { name: "Home", path: "/" },
          { name: "Liability Waiver", path: "/liability-waiver" },
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
              Required before facility use
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Liability Waiver
            </h1>

            <p className="mt-4 max-w-3xl text-lg font-medium leading-8 text-slate-200 md:text-xl">
              Liability Waiver, Release, and Assumption of Risk Agreement
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Launch Labs is a private, self-service indoor golf simulator
              studio located in Garland, Texas. Before entering, booking,
              observing, or using the facility, every customer, member, guest,
              coach, instructor, and participant must read and agree to this
              agreement.
            </p>

            <p className="mt-5 text-sm text-slate-500">
              Last updated: June 15, 2026
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <Clock className="mb-4 h-6 w-6 text-sky-300" />
              <h3 className="font-semibold text-white">Self-service access</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Staff may not be present during your session.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <ShieldCheck className="mb-4 h-6 w-6 text-sky-300" />
              <h3 className="font-semibold text-white">Assumption of risk</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Indoor golf involves clubs, balls, screens, turf, and movement.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <Camera className="mb-4 h-6 w-6 text-sky-300" />
              <h3 className="font-semibold text-white">Monitored facility</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Cameras and access logs may be used for safety and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[240px_1fr] md:px-8 md:py-16">
        <aside className="hidden md:block">
          <div className="sticky top-28 rounded-2xl border border-white/10 bg-[#111820]/80 p-5 backdrop-blur">
            <p className="mb-4 text-sm font-semibold text-white">On this page</p>
            <nav className="grid gap-3 text-sm text-slate-400">
              <a href="#agreement" className="hover:text-sky-300">
                Agreement to Participate
              </a>
              <a href="#risk" className="hover:text-sky-300">
                Assumption of Risk
              </a>
              <a href="#release" className="hover:text-sky-300">
                Release of Liability
              </a>
              <a href="#self-service" className="hover:text-sky-300">
                Self-Service Facility
              </a>
              <a href="#rules" className="hover:text-sky-300">
                Facility Rules
              </a>
              <a href="#guests" className="hover:text-sky-300">
                Guests
              </a>
              <a href="#minors" className="hover:text-sky-300">
                Minors
              </a>
              <a href="#medical" className="hover:text-sky-300">
                Medical Acknowledgment
              </a>
              <a href="#property" className="hover:text-sky-300">
                Property Damage
              </a>
              <a href="#security" className="hover:text-sky-300">
                Security
              </a>
              <a href="#acknowledgment" className="hover:text-sky-300">
                Acknowledgment
              </a>
            </nav>
          </div>
        </aside>

        <article className="min-w-0">
          <div className="rounded-3xl border border-white/10 bg-[#111820] p-6 shadow-2xl shadow-sky-950/20 md:p-10">
            <Section id="agreement" title="1. Agreement to Participate">
              <p>
                By entering or using Launch Labs, you understand that indoor
                golf simulator activity involves physical movement, golf clubs,
                golf balls, simulator equipment, technology, turf, mats,
                screens, walls, and other participants.
              </p>
              <p>
                You agree that your participation is voluntary. You also
                understand that Launch Labs may be a self-service facility.
                Staff may not be present during your session. You are
                responsible for using the facility safely, following all posted
                rules, and stopping immediately if anything appears unsafe.
              </p>
            </Section>

            <Section id="risk" title="2. Assumption of Risk">
              <p>
                You understand and agree that using an indoor golf simulator
                facility involves inherent risks. These risks may exist even
                when you, other participants, and Launch Labs are acting
                carefully.
              </p>
              <BulletList items={riskItems} />
              <p>
                You voluntarily assume all risks, known and unknown, related to
                entering, observing, participating in, or using Launch Labs.
              </p>
            </Section>

            <Section id="release" title="3. Release of Liability">
              <div className="rounded-2xl border border-sky-300/30 bg-sky-300/10 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 shrink-0 text-sky-200" />
                  <p className="font-semibold text-white">
                    Please read this section carefully. This section affects
                    important legal rights.
                  </p>
                </div>
                <p className="font-semibold uppercase leading-8 text-white">
                  To the fullest extent permitted by Texas law, you knowingly
                  and voluntarily release, waive, discharge, and agree not to
                  sue Launch Labs, its owners, members, managers, officers,
                  employees, contractors, agents, landlords, vendors, technology
                  providers, successors, and assigns from any claims, demands,
                  damages, losses, liabilities, causes of action, costs, or
                  expenses arising out of or related to your entry into,
                  presence at, use of, observation of, or participation in
                  activities at Launch Labs, including claims arising from the
                  ordinary negligence of Launch Labs or the Released Parties.
                </p>
              </div>

              <p>This release includes, but is not limited to, claims involving:</p>
              <BulletList items={releaseClaims} />

              <p>
                Nothing in this Agreement is intended to release claims that
                cannot legally be released under Texas law, including claims for
                gross negligence, willful misconduct, or intentional misconduct
                to the extent such claims cannot be waived.
              </p>
            </Section>

            <Section id="self-service" title="4. Self-Service Facility Acknowledgment">
              <p>Launch Labs may operate without staff on site.</p>
              <BulletList
                items={[
                  "You may enter the facility using a digital key, door code, app-based access, or other access-control method.",
                  "Staff may not be present during your session.",
                  "You are responsible for inspecting the simulator bay and surrounding area before use.",
                  "You must stop using the facility immediately if anything appears unsafe, damaged, loose, unstable, wet, malfunctioning, or out of place.",
                  "You must report hazards, damage, unsafe conditions, or malfunctioning equipment to Launch Labs immediately.",
                  "You must call 911 in the event of a medical emergency, fire, injury, threat, or urgent safety concern.",
                  "Launch Labs is not responsible for providing immediate supervision, instruction, medical assistance, or emergency response during your session.",
                ]}
              />
              <p>
                You understand that after-hours and 24/7 access may involve
                additional risks, including reduced public visibility, delayed
                assistance, and no staff present.
              </p>
            </Section>

            <Section id="rules" title="5. Facility Rules">
              <p>
                You agree to follow all posted rules, booking rules, membership
                rules, safety instructions, and written policies provided by
                Launch Labs.
              </p>
              <BulletList items={facilityRules} />
              <p>
                Launch Labs may suspend, restrict, or terminate access for
                unsafe conduct, property damage, unauthorized access, rule
                violations, or misuse of the facility.
              </p>
            </Section>

            <Section id="guests" title="6. Guests">
              <p>
                Every person who enters Launch Labs must agree to this waiver
                before participating or observing.
              </p>
              <BulletList
                items={[
                  "Each guest must be registered, authorized, and covered by this waiver before entering or using the facility.",
                  "You are responsible for your guests’ conduct.",
                  "You are responsible for ensuring your guests follow all facility rules.",
                  "You may not allow unauthorized entry, tailgating, or access by anyone not included in your reservation.",
                  "You are financially responsible for damage caused by you or your guests.",
                ]}
              />
            </Section>

            <Section id="minors" title="7. Minors">
              <p>A minor is any person under 18 years old.</p>
              <p>
                Minors may only use Launch Labs if permitted by Launch Labs
                policy and supervised by a parent, legal guardian, or authorized
                responsible adult. Minors may not be left unattended.
              </p>
              <BulletList
                items={[
                  "Supervise the minor at all times.",
                  "Ensure the minor follows all facility rules.",
                  "Accept responsibility for the minor’s conduct.",
                  "Pay for property damage caused by the minor.",
                  "Defend, indemnify, and hold harmless Launch Labs and the Released Parties from claims arising from the minor’s participation, to the fullest extent permitted by law.",
                ]}
              />
            </Section>

            <Section id="medical" title="8. Physical Condition and Medical Acknowledgment">
              <p>
                You represent that you are physically able to participate in
                indoor golf simulator activities.
              </p>
              <p>You agree not to participate if you are:</p>
              <BulletList
                items={[
                  "Injured.",
                  "Ill.",
                  "Under the influence of alcohol, drugs, or impairing medication.",
                  "Experiencing dizziness, chest pain, shortness of breath, faintness, or any medical condition that could make participation unsafe.",
                ]}
              />
              <p>
                Launch Labs does not provide medical screening, medical advice,
                athletic training, or emergency medical care. You are
                responsible for determining whether participation is safe for
                you.
              </p>
            </Section>

            <Section id="property" title="9. Property Damage">
              <p>
                You agree to pay for damage caused by you, your guests, or any
                minor under your supervision.
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
                Launch Labs may charge you for reasonable repair, replacement,
                cleaning, service, or recovery costs resulting from misuse, rule
                violations, intentional acts, negligence, or failure to secure
                the facility.
              </p>
            </Section>

            <Section id="personal-property" title="10. Personal Property">
              <p>
                You are responsible for all personal property you bring to
                Launch Labs.
              </p>
              <p>
                Launch Labs is not responsible for lost, stolen, damaged, or
                abandoned property, including golf clubs, bags, phones, wallets,
                keys, apparel, electronics, vehicles, or items left inside the
                facility or parking area.
              </p>
            </Section>

            <Section id="security" title="11. Security Cameras and Access Logs">
              <p>
                Launch Labs may use video surveillance, access logs, booking
                records, door-entry records, and other security systems for
                safety, security, operations, and rule enforcement.
              </p>
              <p>
                Cameras may record activity in entry areas, common areas, and
                simulator bay areas. Cameras are not used in private restroom
                areas.
              </p>
              <p>
                You may not disable, block, cover, unplug, damage, or interfere
                with any camera, access-control device, sensor, or security
                equipment.
              </p>
            </Section>

            <Section id="indemnification" title="12. Indemnification">
              <p>
                To the fullest extent permitted by Texas law, you agree to
                defend, indemnify, and hold harmless Launch Labs and the
                Released Parties from and against any claims, demands, damages,
                liabilities, losses, costs, attorney’s fees, or expenses arising
                out of or related to your use of the facility, violation of
                facility rules, negligence or misconduct, guests, minors brought
                by you, property damage, unauthorized access, or third-party
                claims arising from your conduct.
              </p>
              <p>
                This indemnity does not require you to indemnify Launch Labs for
                Launch Labs’ gross negligence, willful misconduct, or intentional
                misconduct to the extent such indemnity is prohibited by Texas
                law.
              </p>
            </Section>

            <Section id="no-warranty" title="13. No Warranty">
              <p>
                Launch Labs provides access to the facility and simulator
                equipment on an “as available” basis. Launch Labs does not
                guarantee:
              </p>
              <BulletList items={noWarrantyItems} />
              <p>
                If any equipment or facility condition appears unsafe or not
                functioning properly, you must stop use immediately and notify
                Launch Labs.
              </p>
            </Section>

            <Section id="terms" title="14. Membership and Booking Terms">
              <p>
                This Agreement applies to every Launch Labs visit, reservation,
                membership session, guest visit, event, practice session,
                lesson, simulator use, or facility entry unless replaced by a
                later written agreement.
              </p>
              <p>
                Violation of this Agreement may result in cancellation of
                booking privileges, suspension of membership, termination of
                access, removal from the facility, or other action permitted by
                Launch Labs policies.
              </p>
            </Section>

            <Section id="law" title="15. Governing Law and Venue">
              <p>
                This Agreement is governed by the laws of the State of Texas.
              </p>
              <p>
                Any dispute arising out of or related to this Agreement, your use
                of Launch Labs, or your presence at the facility shall be
                brought in the state or federal courts located in the county
                where the Launch Labs facility is located, unless otherwise
                required by law.
              </p>
            </Section>

            <Section id="severability" title="16. Severability">
              <p>
                If any part of this Agreement is found to be invalid,
                unenforceable, or prohibited by law, the remaining provisions
                will remain in effect.
              </p>
              <p>
                Any invalid or unenforceable provision shall be modified to the
                minimum extent necessary to make it enforceable while preserving
                the intent of the Agreement as much as permitted by law.
              </p>
            </Section>

            <Section id="acknowledgment" title="17. Acknowledgment">
              <p>
                By booking, entering, observing, participating in, or using
                Launch Labs, you acknowledge and agree that:
              </p>
              <BulletList
                items={[
                  "You have read this Agreement.",
                  "You understand this Agreement.",
                  "You understand that golf simulator activity involves risk.",
                  "You understand that Launch Labs may be unmanned and self-service.",
                  "You understand that staff may not be present.",
                  "You understand that this Agreement releases legal claims, including claims based on ordinary negligence.",
                  "You agree to follow all Launch Labs rules.",
                  "You accept responsibility for your conduct and the conduct of your guests.",
                  "You agree to this Agreement voluntarily.",
                ]}
              />
            </Section>
          </div>
        </article>
      </div>
    </main>
    </>
  );
}
