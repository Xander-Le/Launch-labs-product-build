import type { Metadata } from "next";
import { seoConfig } from "@/src/data/seo";
import { siteConfig } from "@/src/data/site";

export { siteConfig, seoConfig };

export type SeoPage = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export const seoPages = {
  home: {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    path: "/",
    keywords: [
      "golf simulator Garland TX",
      "Trackman Garland TX",
      "indoor golf Garland",
      "24/7 golf simulator Garland",
      "private golf simulator",
      "self-service golf studio",
      "golf simulator near Rowlett",
      "golf simulator near Sachse",
      "Firewheel golf practice",
    ],
  },
  howItWorks: {
    title: "How Launch Labs Works | 24/7 Golf Simulator Garland TX",
    description:
      "Book a private Trackman bay online, receive digital access, and train in a clean self-service golf simulator studio in Garland, TX.",
    path: "/how-it-works/",
    keywords: [
      "how golf simulator booking works",
      "24/7 golf simulator access",
      "self-service golf simulator Garland",
      "digital key golf studio",
      "book indoor golf Garland",
    ],
  },
  technology: {
    title: "Trackman Golf Simulator Technology Garland TX | Launch Labs",
    description:
      "Train with Trackman data at Launch Labs in Garland, TX. Measure ball speed, launch angle, spin rate, carry distance, club path, and more.",
    path: "/technology/",
    keywords: [
      "Trackman iO Garland",
      "Trackman golf simulator",
      "golf launch monitor Garland",
      "golf swing data",
      "ball speed spin rate launch angle",
      "indoor golf technology",
    ],
  },
  pricing: {
    title: "Golf Simulator Memberships Garland TX | Launch Labs Pricing",
    description:
      "Compare Launch Labs memberships and hourly golf simulator access in Garland, TX. Private Trackman bays, 24/7 access, founder pricing, and $0 initiation.",
    path: "/pricing/",
    keywords: [
      "golf simulator pricing Garland",
      "Trackman membership Garland",
      "indoor golf memberships",
      "private golf simulator membership",
      "golf simulator hourly rates Garland",
    ],
  },
  leagues: {
    title: "Golf League Garland TX | Trackman Indoor Golf League",
    description:
      "The Grind League is coming to Launch Labs in Garland, TX. Join the interest list for Trackman-powered indoor golf league updates.",
    path: "/golf-league-garland-tx/",
    keywords: [
      "golf league Garland TX",
      "indoor golf league Garland",
      "Trackman golf league",
      "simulator golf league",
      "Garland golf competition",
    ],
  },
  faq: {
    title: "FAQ | 24/7 Golf Simulator Garland TX | Launch Labs",
    description:
      "Answers to common questions about Launch Labs, including 24/7 access, booking, Trackman technology, guests, food, memberships, and support.",
    path: "/faq/",
    keywords: [
      "Launch Labs FAQ",
      "golf simulator questions",
      "24/7 golf simulator FAQ",
      "Trackman bay access",
      "Garland indoor golf questions",
    ],
  },
  terms: {
    title: "Terms of Service | Launch Labs Golf Simulator Garland TX",
    description:
      "Read the Launch Labs terms of service for 24/7 self-service golf simulator access, memberships, reservations, guest rules, and facility use.",
    path: "/terms-of-service/",
    keywords: ["Launch Labs terms", "golf simulator terms of service"],
  },
  privacy: {
    title: "Privacy Policy | Launch Labs Golf Simulator Garland TX",
    description:
      "Read the Launch Labs privacy policy to understand how information is collected, used, and protected for our website and self-service golf studio.",
    path: "/privacy-policy/",
    keywords: ["Launch Labs privacy policy"],
  },
  liabilityWaiver: {
    title: "Liability Waiver | Launch Labs Golf Simulator Garland TX",
    description:
      "Review the Launch Labs liability waiver for 24/7 self-service golf simulator use, guest participation, equipment safety, and facility access.",
    path: "/liability-waiver/",
    keywords: ["Launch Labs liability waiver", "golf simulator waiver"],
  },
  golfSimulatorGarland: {
    title: "Golf Simulator Garland TX | Private Trackman Indoor Golf",
    description:
      "Launch Labs is a private Trackman-powered golf simulator studio in Garland, TX with 24/7 member access, digital entry, and focused indoor golf practice.",
    path: "/golf-simulator-garland-tx/",
    keywords: [
      "golf simulator Garland TX",
      "indoor golf Garland",
      "Trackman golf simulator Garland",
      "private golf simulator Garland",
    ],
  },
  indoorGolfGarland: {
    title: "Indoor Golf Garland TX | Trackman Simulator Studio",
    description:
      "Practice indoor golf in Garland, TX at Launch Labs with Trackman ball flight data, private simulator bays, and 24/7 member access.",
    path: "/indoor-golf-garland-tx/",
    keywords: [
      "indoor golf Garland TX",
      "indoor golf practice Garland",
      "Trackman indoor golf",
    ],
  },
  trackmanGarland: {
    title: "Trackman Golf Simulator Garland TX | Launch Labs",
    description:
      "Train with Trackman golf simulator technology in Garland, TX. Launch Labs offers private bays, ball speed data, spin rate, launch angle, and carry distance.",
    path: "/trackman-golf-simulator-garland-tx/",
    keywords: [
      "Trackman golf simulator Garland TX",
      "Trackman iO Garland",
      "launch monitor Garland",
    ],
  },
  rowlett: {
    title: "Golf Simulator Near Rowlett TX | Launch Labs Garland",
    description:
      "Launch Labs gives Rowlett golfers private Trackman simulator access minutes away in Garland, TX. Reserve focused practice time without the bar or crowd.",
    path: "/rowlett/",
    keywords: [
      "golf simulator Rowlett TX",
      "indoor golf near Rowlett",
      "Trackman golf near Rowlett",
    ],
  },
  mesquite: {
    title: "Golf Simulator Near Mesquite TX | Launch Labs Garland",
    description:
      "Launch Labs gives Mesquite golfers private Trackman simulator access in nearby Garland, TX. Book focused indoor golf practice on your schedule.",
    path: "/mesquite/",
    keywords: [
      "golf simulator Mesquite TX",
      "indoor golf near Mesquite",
      "Trackman golf near Mesquite",
    ],
  },
} satisfies Record<string, SeoPage>;

export function normalizePath(path = "/") {
  if (!path || path === "/") {
    return "/";
  }

  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  return withLeadingSlash.endsWith("/")
    ? withLeadingSlash
    : `${withLeadingSlash}/`;
}

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${normalizePath(path)}`;
}

export function buildMetadata(page: SeoPage): Metadata {
  const title = page.title;
  const description = page.description;
  const canonical = absoluteUrl(page.path);
  const image = absoluteUrl(page.image ?? siteConfig.defaultOgImage);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      absolute: title,
    },
    description,
    keywords: page.keywords,
    alternates: {
      canonical,
    },
    robots: page.noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Launch Labs private Trackman golf simulator studio in Garland, Texas",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** @deprecated Use buildMetadata with seoPages instead. */
export function createMetadata({
  title,
  description,
  path = "/",
  keywords,
  image,
  noIndex,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}): Metadata {
  return buildMetadata({
    title,
    description,
    path,
    keywords,
    image,
    noIndex,
  });
}

export function getPostalAddressSchema() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: siteConfig.address.country,
  };
}

export function getLocalBusinessSchema(overrides?: {
  url?: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: overrides?.url ?? siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description: overrides?.description ?? siteConfig.description,
    priceRange: "$$",
    image: absoluteUrl(siteConfig.defaultOgImage),
    address: getPostalAddressSchema(),
    sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl],
    areaServed: [
      "Garland TX",
      "Rowlett TX",
      "Sachse TX",
      "Firewheel TX",
      "East Richardson TX",
      "Mesquite TX",
      "East DFW TX",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Trackman golf simulator bays",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24/7 self-service digital access",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Private indoor golf practice studio",
        value: true,
      },
    ],
  };
}

export function getWebPageSchema(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: absoluteUrl(page.path),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: getLocalBusinessSchema(),
  };
}

export function getFaqPageSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.locale,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
  };
}
