import { siteConfig } from "./site";

export const seoConfig = {
  siteName: siteConfig.name,
  siteUrl: siteConfig.url,
  defaultTitle:
    "Golf Simulator Garland TX | Launch Labs Private Trackman Studio",
  defaultDescription:
    "Launch Labs is a private Trackman-powered golf simulator studio in Garland, TX. Reserve a bay, enter with digital access, and practice on your schedule.",
  businessName: siteConfig.name,
  phone: siteConfig.phone,
  email: siteConfig.email,
  address: siteConfig.address,
  areaServed: [
    "Garland",
    "Rowlett",
    "Sachse",
    "Mesquite",
    "East Richardson",
    "Firewheel",
    "East Dallas",
    "DFW",
  ],
  sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl],
  defaultOgImage: siteConfig.defaultOgImage,
} as const;

export const seoIntros = {
  home: "Launch Labs is a private Trackman golf simulator studio in Garland, TX, serving Garland, Rowlett, Sachse, Mesquite, Firewheel, East Richardson, and East DFW. Reserve focused bay time, enter with digital access, and train with tour-level data on your schedule.",
  pricing:
    "Choose the Launch Labs membership or bay rental option that fits how you practice. Every session gives you private Trackman access in a clean, self-service Garland golf studio built for focused reps.",
  howItWorks:
    "Reserve online. Enter with digital access. Start your Trackman session. Launch Labs is built to make indoor golf practice simple, private, and predictable.",
  technology:
    "Every Launch Labs bay is powered by Trackman technology, giving you precise data on ball flight, club delivery, distance, spin, and shot shape.",
  leagues:
    "The Grind League will bring Trackman-powered indoor golf competition to Garland after Launch Labs opens. Join the interest list for format, schedule, and registration updates.",
} as const;
