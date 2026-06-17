import { seoConfig } from "@/src/data/seo";

export const dynamic = "force-static";

export function GET() {
  const body = `# Launch Labs

Launch Labs is a private Trackman-powered indoor golf simulator studio in Garland, Texas.

Website: ${seoConfig.siteUrl}
Location: ${seoConfig.address.streetAddress}, ${seoConfig.address.addressLocality}, ${seoConfig.address.addressRegion} ${seoConfig.address.postalCode}

## Summary

Launch Labs gives golfers, coaches, and small groups private access to Trackman-powered indoor golf simulator bays in a clean, self-service studio environment. The facility is designed for focused practice, data-driven training, and convenient booking without the noise or crowd of a sports bar.

## Core Services

- Private indoor golf simulator bay rental
- Trackman-powered practice sessions
- Golf simulator memberships
- Self-service digital access
- Indoor golf league interest list
- Practice space for golfers, coaches, and small groups

## Primary Service Areas

- Garland, TX
- Rowlett, TX
- Sachse, TX
- Mesquite, TX
- Firewheel
- East Richardson
- East Dallas
- DFW

## Key Pages

- Homepage: ${seoConfig.siteUrl}/
- Pricing: ${seoConfig.siteUrl}/pricing/
- How It Works: ${seoConfig.siteUrl}/how-it-works/
- Technology: ${seoConfig.siteUrl}/technology/
- Leagues: ${seoConfig.siteUrl}/golf-league-garland-tx/
- Rowlett: ${seoConfig.siteUrl}/rowlett/
- Mesquite: ${seoConfig.siteUrl}/mesquite/

## Brand Positioning

Private Trackman access without the bar scene.
Tour-level practice on your schedule.
Clean, focused, data-driven indoor golf in Garland, TX.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
