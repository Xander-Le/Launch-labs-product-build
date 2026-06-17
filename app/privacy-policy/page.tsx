import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Camera,
  CheckCircle2,
  Cookie,
  CreditCard,
  Database,
  Eye,
  FileText,
  Lock,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { BreadcrumbSchema } from "@/src/components/seo/breadcrumb-schema";
import { SiteNap } from "@/src/components/site-nap";
import { buildMetadata, seoPages } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata(seoPages.privacy);

const informationCollected = [
  "Contact information, including name, email address, phone number, mailing address, and communication preferences.",
  "Account information, including login details, membership status, booking history, guest information, and account activity.",
  "Booking information, including reservation date, time, bay, duration, package, membership plan, cancellation history, no-show records, and related notes.",
  "Payment information, including transaction details, billing address, payment status, membership charges, refunds, credits, and chargeback information. Full card details are processed by third-party payment processors and are not stored by Launch Labs.",
  "Facility access data, including door-entry records, digital key activity, access-code activity, entry and exit timestamps, and access-system logs.",
  "Security footage and facility monitoring data from cameras located in entry areas, common areas, simulator bay areas, and other non-private areas.",
  "Simulator and technology usage data, which may include session activity, Trackman-related usage, device status, troubleshooting information, and equipment performance information.",
  "Website and device data, including IP address, browser type, device type, operating system, pages visited, referring URLs, access times, cookie identifiers, analytics data, and general location derived from IP address.",
  "SMS and email communication data, including opt-in status, message history, delivery status, unsubscribe requests, and support communications.",
  "Information you voluntarily provide, including survey responses, reviews, inquiries, support requests, event registrations, waitlist submissions, promotion entries, and feedback.",
];

const useCases = [
  "Create, manage, and support accounts, bookings, memberships, packages, promotions, and customer relationships.",
  "Process payments, recurring membership charges, refunds, credits, taxes, fees, and approved damage or cleaning charges.",
  "Provide facility access, door-entry credentials, access instructions, booking reminders, and operational communications.",
  "Operate, maintain, secure, and improve the Launch Labs facility, website, booking tools, access systems, and simulator technology.",
  "Monitor safety, protect customers and property, investigate damage, enforce rules, prevent unauthorized access, and support self-service operations.",
  "Send transactional messages, including booking confirmations, booking reminders, access instructions, membership notices, cancellation notices, account updates, and support messages.",
  "Send marketing communications, promotions, events, membership updates, and business announcements when permitted by law or with your consent where required.",
  "Analyze website performance, booking trends, customer demand, marketing effectiveness, and facility usage.",
  "Respond to inquiries, support requests, complaints, billing questions, cancellation requests, and legal or safety issues.",
  "Comply with applicable laws, enforce our Terms of Service and Liability Waiver, protect legal rights, and cooperate with lawful requests.",
];

const sharingCategories = [
  "Booking, scheduling, customer-management, and membership platforms.",
  "Payment processors, banks, card networks, fraud-prevention providers, and billing vendors.",
  "Access-control, smart-lock, security, alarm, camera, and facility-monitoring providers.",
  "Email, SMS, phone, customer-support, and communication providers.",
  "Website hosting, analytics, cookie, advertising, and performance-measurement providers.",
  "Technology vendors, simulator-related vendors, maintenance providers, and troubleshooting partners.",
  "Professional advisors, including attorneys, accountants, insurers, consultants, and business advisors.",
  "Government authorities, law enforcement, courts, regulators, or other parties when required by law or necessary to protect rights, safety, property, or security.",
  "A buyer, successor, or other party in connection with a business transaction, merger, financing, sale, restructuring, or transfer of assets.",
];

const privacyChoices = [
  "You may request access to certain personal information we maintain about you.",
  "You may request that we correct inaccurate personal information.",
  "You may request that we delete certain personal information, subject to legal, security, billing, operational, and recordkeeping exceptions.",
  "You may opt out of promotional emails by using the unsubscribe link in the email or contacting us.",
  "You may opt out of SMS messages by replying STOP.",
  "You may control cookies through your browser settings, although disabling cookies may affect website or booking functionality.",
  "You may contact us to update your account, phone number, email address, communication preferences, or membership information.",
];

const retainedExamples = [
  "Account, booking, membership, billing, and transaction records.",
  "Records needed to provide services, process payments, support customers, resolve disputes, or enforce agreements.",
  "Security footage, access logs, incident reports, damage records, and safety-related records.",
  "SMS consent records, email preferences, opt-out records, and communication history.",
  "Records required or permitted for tax, accounting, legal, insurance, fraud-prevention, security, and compliance purposes.",
];

const childrenItems = [
  "Launch Labs is not directed to children under 13.",
  "Users must be at least 18 years old to create an account, book a session, purchase a membership, or opt in to SMS messages.",
  "Minors may only use Launch Labs if permitted by Launch Labs policy and supervised by a parent, legal guardian, or authorized responsible adult.",
  "A parent or legal guardian is responsible for the minor’s conduct, safety, rule compliance, and any personal information submitted in connection with the minor’s use of Launch Labs.",
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema
        id="privacy-breadcrumb-schema"
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
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
              Website, booking, membership, SMS, and facility privacy
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              This Privacy Policy explains how Launch Labs LLC collects, uses,
              shares, and protects information when you visit our website, book
              a simulator bay, purchase a membership, receive communications, or
              use our self-service golf simulator studio.
            </p>

            <p className="mt-5 text-sm text-slate-500">
              Last updated: June 15, 2026
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <InfoCard
              icon={<Database className="h-6 w-6" />}
              title="Booking and account data"
              text="We collect information needed to manage bookings, memberships, payments, and customer support."
            />
            <InfoCard
              icon={<Camera className="h-6 w-6" />}
              title="Facility security"
              text="Cameras, access logs, and entry records help protect customers, equipment, and the self-service studio."
            />
            <InfoCard
              icon={<MessageSquare className="h-6 w-6" />}
              title="SMS and email controls"
              text="You can opt out of promotional communications. SMS opt-out is available by replying STOP."
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
              <a href="#scope" className="hover:text-sky-300">
                Scope
              </a>
              <a href="#definitions" className="hover:text-sky-300">
                Who This Applies To
              </a>
              <a href="#collect" className="hover:text-sky-300">
                Information We Collect
              </a>
              <a href="#use" className="hover:text-sky-300">
                How We Use It
              </a>
              <a href="#cameras" className="hover:text-sky-300">
                Cameras & Access Logs
              </a>
              <a href="#sms" className="hover:text-sky-300">
                SMS & Email
              </a>
              <a href="#cookies" className="hover:text-sky-300">
                Cookies
              </a>
              <a href="#sharing" className="hover:text-sky-300">
                Sharing
              </a>
              <a href="#choices" className="hover:text-sky-300">
                Your Choices
              </a>
              <a href="#contact" className="hover:text-sky-300">
                Contact
              </a>
            </nav>
          </div>
        </aside>

        <article className="min-w-0">
          <div className="rounded-3xl border border-white/10 bg-[#111820] p-6 shadow-2xl shadow-sky-950/20 md:p-10">
            <Section id="scope" title="1. Scope of This Privacy Policy">
              <p>
                This Privacy Policy applies to Launch Labs LLC, doing business
                as Launch Labs, and explains how we collect, use, disclose, and
                protect information when you use our website, booking tools,
                membership services, facility access systems, SMS and email
                communications, customer support, promotions, and self-service
                golf simulator studio.
              </p>
              <p>
                This Policy applies together with our{" "}
                <Link
                  href="/terms-of-service/"
                  className="font-medium text-sky-300 hover:text-white"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/liability-waiver/"
                  className="font-medium text-sky-300 hover:text-white"
                >
                  Liability Waiver, Release, and Assumption of Risk Agreement
                </Link>
                .
              </p>
              <p>
                If you do not agree with this Privacy Policy, do not use the
                website, book a session, purchase a membership, opt in to
                communications, enter the facility, or use Launch Labs.
              </p>
            </Section>

            <Section id="definitions" title="2. Who This Policy Applies To">
              <p>
                <strong className="text-white">“User”</strong> means any person
                who uses, books, enters, observes, participates in, or accesses
                Launch Labs. This includes Members, Non-Members, Public Users,
                guests, observers, minors, instructors, coaches, invitees, and
                any other person who enters or uses the facility.
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
              <p>
                <strong className="text-white">“Guest”</strong> means a person
                brought by a Member, Non-Member, Public User, instructor, coach,
                or other booking party.
              </p>
            </Section>

            <Section id="collect" title="3. Information We Collect">
              <p>
                We collect information directly from you, automatically through
                our website and technology systems, and from service providers
                that help us operate Launch Labs.
              </p>
              <BulletList items={informationCollected} />
            </Section>

            <Section id="payment" title="4. Payment Information">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-3 flex items-center gap-3">
                  <CreditCard className="h-6 w-6 shrink-0 text-sky-300" />
                  <p className="font-semibold text-white">
                    Card payments are handled by third-party processors.
                  </p>
                </div>
                <p className="leading-8 text-slate-300">
                  Launch Labs may receive limited payment-related information,
                  such as transaction amount, payment status, billing details,
                  last four digits of a card, card brand, refund status, and
                  subscription status. Full card numbers and sensitive payment
                  credentials are processed by third-party payment processors
                  and are not stored by Launch Labs.
                </p>
              </div>
            </Section>

            <Section id="use" title="5. How We Use Information">
              <p>
                We use the information we collect to operate Launch Labs, manage
                customer relationships, protect the facility, and improve the
                experience.
              </p>
              <BulletList items={useCases} />
            </Section>

            <Section id="cameras" title="6. Security Cameras, Access Logs, and Facility Monitoring">
              <div className="rounded-2xl border border-sky-300/30 bg-sky-300/10 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <Eye className="h-6 w-6 shrink-0 text-sky-200" />
                  <p className="font-semibold text-white">
                    Launch Labs is a self-service facility and may be monitored.
                  </p>
                </div>
                <p className="leading-8 text-slate-300">
                  We may use video surveillance, access logs, booking records,
                  door-entry records, account activity records, and other
                  security systems for safety, security, damage review, rule
                  enforcement, customer support, incident investigation, and
                  facility management.
                </p>
              </div>

              <p>
                Cameras may record entry areas, common areas, simulator bay
                areas, and other non-private areas. Cameras are not used in
                private restroom areas.
              </p>
              <p>
                We may review security footage or access logs if there is a
                safety issue, damage report, unauthorized access concern,
                billing dispute, rule violation, customer support need, legal
                request, or operational issue.
              </p>
            </Section>

            <Section id="sms" title="7. SMS and Email Communications">
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
                    offers, memberships, events, promotions, and business
                    updates.
                  </p>
                  <p>
                    Message frequency may vary. Message and data rates may
                    apply. You can opt out of SMS communications at any time by
                    replying STOP. For assistance, reply HELP or contact us
                    using the information below.
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
                </div>
              </div>

              <p>
                We may also send email communications related to bookings,
                memberships, receipts, account updates, facility updates,
                customer support, promotions, and business announcements. You
                may unsubscribe from promotional emails using the unsubscribe
                link in the message or by contacting us.
              </p>
            </Section>

            <Section id="cookies" title="8. Cookies, Analytics, and Advertising Technologies">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-3 flex items-center gap-3">
                  <Cookie className="h-6 w-6 shrink-0 text-sky-300" />
                  <p className="font-semibold text-white">
                    Website tracking and performance tools
                  </p>
                </div>
                <p className="leading-8 text-slate-300">
                  We may use cookies, pixels, analytics tools, advertising
                  technologies, and similar tools to operate the website,
                  remember preferences, measure traffic, understand visitor
                  behavior, improve performance, troubleshoot issues, and
                  measure marketing effectiveness.
                </p>
              </div>
              <p>
                You may control cookies through your browser settings. Some
                parts of the website, booking flow, account tools, or checkout
                experience may not work properly if cookies are disabled.
              </p>
            </Section>

            <Section id="sharing" title="9. How We Share Information">
              <p>
                We do not sell your personal information. We share information
                only as needed to operate Launch Labs, provide services, protect
                the facility, communicate with you, comply with law, and support
                business operations.
              </p>
              <BulletList items={sharingCategories} />

              <div className="rounded-2xl border border-sky-300/25 bg-sky-300/10 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 shrink-0 text-sky-200" />
                  <p className="font-semibold text-white">
                    SMS opt-in data is not sold or shared for third-party
                    marketing.
                  </p>
                </div>
                <p className="leading-8 text-slate-300">
                  No mobile information will be shared with third parties or
                  affiliates for marketing or promotional purposes. Information
                  sharing to subcontractors in support services, such as
                  customer service, payment processing, booking software, access
                  control, and messaging providers, is permitted. All other use
                  case categories exclude text messaging originator opt-in data
                  and consent; this information will not be shared with any
                  third parties.
                </p>
              </div>
            </Section>

            <Section id="third-party" title="10. Third-Party Services">
              <p>
                Launch Labs may use third-party providers for booking, payments,
                access control, SMS, email, website hosting, analytics,
                advertising, facility security, simulator technology, customer
                support, and business operations.
              </p>
              <p>
                Third-party services may collect, use, store, or process
                information according to their own terms and privacy policies.
                We encourage you to review those policies when using third-party
                tools connected to Launch Labs.
              </p>
              <p>
                Launch Labs is not responsible for the privacy practices,
                security practices, outages, errors, or policies of third-party
                websites, apps, platforms, or service providers.
              </p>
            </Section>

            <Section id="retention" title="11. Data Retention">
              <p>
                We retain information for as long as reasonably necessary to
                provide services, operate the facility, maintain records,
                protect safety and security, resolve disputes, enforce
                agreements, process payments, comply with law, and support
                legitimate business purposes.
              </p>
              <BulletList items={retainedExamples} />
              <p>
                Retention periods may vary depending on the type of information,
                the purpose for collection, operational needs, legal
                requirements, security needs, and dispute-resolution needs.
              </p>
            </Section>

            <Section id="security" title="12. Security">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-3 flex items-center gap-3">
                  <Lock className="h-6 w-6 shrink-0 text-sky-300" />
                  <p className="font-semibold text-white">
                    We use reasonable safeguards to protect information.
                  </p>
                </div>
                <p className="leading-8 text-slate-300">
                  We use reasonable administrative, technical, and physical
                  safeguards designed to protect personal information from
                  unauthorized access, use, loss, misuse, disclosure, alteration,
                  or destruction.
                </p>
              </div>
              <p>
                No website, electronic transmission, payment system, access
                system, camera system, or physical storage method is completely
                secure. You are responsible for protecting your account
                credentials, door codes, digital keys, devices, and payment
                information.
              </p>
              <p>
                If you believe your account, access credentials, or personal
                information has been compromised, contact us immediately.
              </p>
            </Section>

            <Section id="choices" title="13. Your Choices and Privacy Rights">
              <p>
                Depending on where you live and the laws that apply, you may
                have certain rights regarding your personal information. These
                rights may include access, correction, deletion, portability,
                opt-out, appeal, or other rights provided by applicable law.
              </p>
              <BulletList items={privacyChoices} />
              <p>
                To make a privacy request, contact us using the information
                below. We may need to verify your identity before processing the
                request. Some requests may be limited by legal, security,
                billing, fraud-prevention, operational, tax, accounting,
                insurance, or recordkeeping obligations.
              </p>
            </Section>

            <Section id="texas" title="14. Texas Privacy Notice">
              <p>
                Launch Labs is located in Texas and primarily serves customers
                using our Garland, Texas facility. Texas residents may have
                privacy rights under applicable Texas privacy laws where those
                laws apply to Launch Labs and the relevant information.
              </p>
              <p>
                We do not knowingly sell personal information. We do not share
                mobile opt-in data or SMS consent information with third parties
                or affiliates for marketing or promotional purposes.
              </p>
              <p>
                To exercise privacy rights available under applicable Texas law,
                contact us at{" "}
                <a
                  href="mailto:hello@launchlabstx.com"
                  className="font-medium text-sky-300 hover:text-white"
                >
                  hello@launchlabstx.com
                </a>
                .
              </p>
            </Section>

            <Section id="children" title="15. Children and Minors">
              <BulletList items={childrenItems} />
              <p>
                If you believe a child has provided personal information to
                Launch Labs without appropriate parent or guardian involvement,
                contact us so we can review the request.
              </p>
            </Section>

            <Section id="links" title="16. Links to Other Websites">
              <p>
                Our website, emails, SMS messages, booking tools, or social
                media pages may contain links to third-party websites or
                services. We are not responsible for the privacy practices,
                content, security, or policies of third-party websites or
                services.
              </p>
            </Section>

            <Section id="updates" title="17. Changes to This Privacy Policy">
              <p>
                We may update this Privacy Policy from time to time. The “Last
                updated” date shows when this Policy was most recently revised.
              </p>
              <p>
                Updated versions are effective when posted unless a later
                effective date is stated. Your continued use of Launch Labs
                after an updated Privacy Policy is posted means you acknowledge
                the updated Policy.
              </p>
            </Section>

            <Section id="contact" title="18. Contact Us">
              <p>
                Questions about this Privacy Policy, privacy requests, SMS
                preferences, account information, or data practices may be
                directed to Launch Labs.
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
