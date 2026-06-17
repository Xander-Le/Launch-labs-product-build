export type BillingCycle = "monthly" | "quarterly" | "annual";

/** Update `claimed` when a new founder membership is sold. */
export const founderMembershipSlots = {
  total: 25,
  claimed: 7,
} as const;

export function getFounderSlotsRemaining() {
  return Math.max(0, founderMembershipSlots.total - founderMembershipSlots.claimed);
}

export function getFounderSlotsPercentClaimed() {
  return Math.min(
    100,
    (founderMembershipSlots.claimed / founderMembershipSlots.total) * 100
  );
}

export type FoundingPlan = {
  name: string;
  badge?: string;
  monthlyPrice: number | null;
  quarterlyPrice: number | null;
  annualPrice: number | null;
  billingNote: Record<BillingCycle, string>;
  features: string[];
  featured?: boolean;
  disabled?: boolean;
};

export const billingCycles: {
  id: BillingCycle;
  label: string;
}[] = [
  { id: "monthly", label: "Monthly" },
  { id: "quarterly", label: "Quarterly" },
  { id: "annual", label: "Annual" },
];

export const foundingPlans: FoundingPlan[] = [
  {
    name: "Starter - Not Offered",
    badge: "Not offered",
    monthlyPrice: null,
    quarterlyPrice: null,
    annualPrice: null,
    billingNote: {
      monthly: "Not available for founders",
      quarterly: "Not available for founders",
      annual: "Not available for founders",
    },
    features: ["4 hours / per month", "24/7 Access", "2 Guest Per visit"],
    disabled: true,
  },
  {
    name: "Player - Founder",
    badge: "Most popular",
    monthlyPrice: 210,
    quarterlyPrice: 191,
    annualPrice: 170,
    billingNote: {
      monthly: "Month-to-month · billed monthly",
      quarterly: "3-month term · billed monthly",
      annual: "12-month term · billed monthly",
    },
    features: ["10 hours / per month", "24/7 Access", "3 Guest Per visit"],
    featured: true,
  },
  {
    name: "VIP - Founder",
    badge: "Maximum access",
    monthlyPrice: 270,
    quarterlyPrice: 246,
    annualPrice: 217,
    billingNote: {
      monthly: "Month-to-month · billed monthly",
      quarterly: "3-month term · billed monthly",
      annual: "12-month term · billed monthly",
    },
    features: ["Unlimited Hours", "24/7 Access", "4 Guest Per visit"],
  },
];

export const pricingFaqs = [
  {
    id: "billed-monthly",
    question: "Are memberships billed monthly?",
    answer:
      "Yes. Monthly, quarterly, and annual options are all billed monthly. Quarterly and annual options refer to the membership term, not an upfront payment.",
  },
  {
    id: "initiation",
    question: "Is there an initiation fee?",
    answer: "Founding memberships include a $0 initiation fee.",
  },
  {
    id: "upgrade",
    question: "Can I upgrade later?",
    answer:
      "Yes. You can start with Player and upgrade to VIP when you are ready, based on availability.",
  },
  {
    id: "hours-247",
    question: "Is Launch Labs open 24/7?",
    answer:
      "Members receive 24/7 access through the reservation and digital access system.",
  },
  {
    id: "public-booking",
    question: "Do I need a membership to book?",
    answer:
      "No. Public users can book available hourly time online. Memberships are built for golfers who want recurring access, better monthly value, and member benefits.",
  },
  {
    id: "pre-opening",
    question: "If I join before opening, when does billing apply?",
    answer:
      "Your first founder payment secures your spot and is applied to your first eligible membership period after Launch Labs opens. You are not charged for unused months before the facility is available.",
  },
  {
    id: "cancel",
    question: "How do I cancel?",
    answer:
      "Email xander@launchlabstx.com or use the cancellation method provided in your account. Cancellations are effective at the end of the current paid billing period unless otherwise stated.",
  },
  {
    id: "guests",
    question: "How many guests can I bring?",
    answer:
      "Player Founder includes up to 3 guests per visit. VIP Founder includes up to 4 guests per visit. Guests must follow all facility rules and waiver requirements.",
  },
  {
    id: "peak-hours",
    question: "Do peak hours affect membership booking?",
    answer:
      "Yes. Peak hours differ on weekends. Starter memberships are limited to non-peak reservation windows, so weekend availability may be more restricted for Starter members. Player and VIP plans may also have peak-hour limits depending on plan level.",
  },
];

export const planFitCards = [
  {
    title: "Choose Player Founder",
    description:
      "Best for golfers who want consistent monthly practice time without needing unlimited bay access.",
    bullets: [
      "About 10 hours of monthly bay time",
      "Regular solo practice or small-group sessions",
      "Strong fit for 2–3 focused sessions per week",
    ],
  },
  {
    title: "Choose VIP Founder",
    description:
      "Best for golfers who train often, host recurring guest sessions, or want maximum flexibility.",
    bullets: [
      "Unlimited monthly bay time",
      "Frequent practice, course play, or coaching blocks",
      "More guest capacity per visit",
    ],
  },
];

export const membershipIncludes = [
  "Private Trackman-powered simulator bay access",
  "24/7 member booking and digital entry",
  "Tour-level ball flight and club data",
  "Guest access based on plan level",
  "Self-service studio built for focused practice",
  "$0 initiation during the founding release",
];

export const billingNotes = [
  "Monthly, quarterly, and annual founder terms are all billed monthly.",
  "Quarterly and annual pricing reflects the membership term, not a single upfront payment.",
  "Founder pricing is limited and available before opening.",
  "Membership benefits, guest limits, and included hours vary by plan.",
  "Peak hours differ on weekends and may limit Starter memberships to non-peak reservation windows only.",
  "Cancellation requests should be sent before your next billing date when possible.",
];

export const peakHoursNote =
  "Peak hours differ on weekends. Starter memberships are limited to non-peak reservation windows, so weekend availability may be more restricted for Starter members than for Player or VIP plans.";

export const hourlyBookingHighlights = [
  {
    title: "Book by the hour",
    description:
      "Reserve private Trackman time online without a membership when availability allows.",
  },
  {
    title: "Same private bay",
    description:
      "Get the same clean studio experience, Trackman data, and self-service entry model.",
  },
  {
    title: "Upgrade when ready",
    description:
      "Move into a founding membership when recurring access makes more sense for your practice.",
  },
];