import Script from "next/script";
import { seoConfig } from "@/src/data/seo";

export function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    "@id": `${seoConfig.siteUrl}/#business`,
    name: seoConfig.businessName,
    url: seoConfig.siteUrl,
    telephone: seoConfig.phone,
    email: seoConfig.email,
    description:
      "Launch Labs is a private Trackman-powered indoor golf simulator studio in Garland, TX, built for focused practice, coaching, and small-group play.",
    image: `${seoConfig.siteUrl}${seoConfig.defaultOgImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: seoConfig.address.streetAddress,
      addressLocality: seoConfig.address.addressLocality,
      addressRegion: seoConfig.address.addressRegion,
      postalCode: seoConfig.address.postalCode,
      addressCountry: seoConfig.address.addressCountry,
    },
    areaServed: seoConfig.areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    sameAs: seoConfig.sameAs,
    priceRange: "$$",
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
    makesOffer: [
      {
        "@type": "Offer",
        name: "Private Trackman golf simulator bay rental",
        category: "Indoor golf simulator",
      },
      {
        "@type": "Offer",
        name: "Golf simulator memberships",
        category: "Membership",
      },
    ],
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
