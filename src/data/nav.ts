import { siteConfig } from "./site";

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works/" },
  { label: "Technology", href: "/technology/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Leagues", href: "/golf-league-garland-tx/" },
  { label: "FAQ", href: "/faq/" },
];

export const legalNav = [
  { label: "Terms of Service", href: "/terms-of-service/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Liability Waiver", href: "/liability-waiver/" },
];

export const socialNav = [
  { label: "Instagram", href: siteConfig.instagramUrl },
  { label: "Facebook", href: siteConfig.facebookUrl },
];

export const localNav = [
  { label: "Garland", href: "/golf-simulator-garland-tx/" },
  { label: "Indoor Golf Garland", href: "/indoor-golf-garland-tx/" },
  {
    label: "Trackman Golf Simulator",
    href: "/trackman-golf-simulator-garland-tx/",
  },
  { label: "Rowlett", href: "/rowlett/" },
  { label: "Mesquite", href: "/mesquite/" },
];

/** In-page CTA labels for cross-linking between core pages. */
export const pageCtas = {
  howItWorks: { href: "/how-it-works/", label: "See How It Works" },
  technology: { href: "/technology/", label: "Explore Trackman Technology" },
  memberships: { href: "/pricing/", label: "See Memberships" },
  faq: { href: "/faq/", label: "View all FAQs" },
  leagues: { href: "/golf-league-garland-tx/", label: "Golf Leagues Coming Soon" },
  terms: { href: "/terms-of-service/", label: "Terms of Service" },
} as const;