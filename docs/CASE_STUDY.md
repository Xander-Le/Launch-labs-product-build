# Launch Labs — Product & Website Case Study

Indoor golf performance facility concept for the Garland / Rowlett / Sachse / Firewheel area.

**Live site:** [launchlabstx.com](https://launchlabstx.com)

**Public portfolio:** [github.com/Xander-Le/Launch-labs-product-build](https://github.com/Xander-Le/Launch-labs-product-build)

This document is the source for the public GitHub case study (`main` branch README). The full application source lives on the local `website` branch and is not published on GitHub.

---

## Project Overview

I led the product, brand, website, membership structure, and go-to-market execution for Launch Labs — a private, Trackman-powered indoor golf studio in Garland, TX.

## My Role

- Product strategy
- Website rebuild planning and implementation
- Membership and pricing structure
- SEO and content positioning
- CRM and lead funnel planning
- Social media launch strategy
- Customer terms and policy development

## Tech & Tools

- **Built with:** Next.js, React, TypeScript, Tailwind CSS
- **SEO:** Structured data, sitemap, local landing pages, FAQ schema
- **Broader launch stack:** CRM automation, brand design, content calendar, email/SMS campaigns

## Key Outcomes

- Founding membership campaign with conversion-focused CTA flow
- Membership and pricing structure with tier comparison UX
- Multi-page marketing site with local SEO landing pages
- Legal and policy pages (terms, privacy, liability waiver)
- Launch-ready content architecture for search and AI discovery

## Screenshots

### Home (desktop)

![Launch Labs home page](screenshots/home-desktop.png)

### Home (mobile)

![Launch Labs mobile home](screenshots/home-mobile.png)

### Pricing / founding memberships

![Launch Labs pricing page](screenshots/pricing.png)

### How it works

![Launch Labs how it works page](screenshots/how-it-works.png)

### Local SEO landing page

![Indoor golf Garland TX landing page](screenshots/indoor-golf-seo.png)

### Trackman technology

![Launch Labs technology page](screenshots/technology.png)

## What the Public Repo Includes

- Case study README (copy of this document)
- Website screenshots (`docs/screenshots/`)

## What Is Not Published

Customer emails, phone numbers, leads, CRM exports, financial models, lender quotes, contracts, private pricing strategy, personal conversations, private docs, API keys, environment files, or full source code.

## Notes

Sensitive business data, customer information, and internal financial details are excluded by design. Screenshots reflect public-facing marketing work only.

## Syncing to GitHub

When you update this file or screenshots, publish to the public repo:

```bash
git checkout main
cp docs/CASE_STUDY.md README.md
sed -i '' 's|(screenshots/|(docs/screenshots/|g' README.md
git add README.md docs/screenshots
git commit -m "Update case study"
git push origin main
git checkout website
```
