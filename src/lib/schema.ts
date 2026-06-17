import { absoluteUrl, siteConfig } from "@/src/lib/seo";
import { foundingPlans } from "@/src/data/pricing";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": `${siteConfig.url}/#local-business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.defaultOgImage),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    description:
      "Launch Labs is a private, Trackman-powered, 24/7 self-service indoor golf simulator studio in Garland, Texas.",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    openingHoursSpecification: [
      {
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
    ],
    areaServed: [
      "Garland TX",
      "Rowlett TX",
      "Sachse TX",
      "Firewheel Garland TX",
      "East Richardson TX",
      "Mesquite TX",
      "East DFW",
    ],
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Trackman iO golf simulator technology",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24/7 self-service access",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Private indoor golf simulator bay",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Online reservations and digital key access",
        value: true,
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}/#local-business`,
    },
    inLanguage: "en-US",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl("/logo.png"),
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer support",
      areaServed: "US-TX",
      availableLanguage: "English",
    },
  };
}

export function breadcrumbSchema(
  items: Array<{
    name: string;
    path: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(
  faqs: Array<{
    question: string;
    answer: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function pricingOfferCatalogSchema() {
  const membershipOffers = foundingPlans
    .filter((plan) => !plan.disabled)
    .map((plan) => ({
      "@type": "Offer" as const,
      name: plan.name,
      category: "Golf simulator membership",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/pricing/"),
    }));

  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${siteConfig.url}/pricing/#offers`,
    name: "Launch Labs memberships and hourly golf simulator access",
    url: absoluteUrl("/pricing/"),
    itemListElement: [
      {
        "@type": "Offer",
        name: "Hourly golf simulator access",
        category: "Indoor golf simulator reservation",
        availability: "https://schema.org/InStock",
        url: absoluteUrl("/pricing/"),
      },
      ...membershipOffers,
    ],
  };
}
