import Script from "next/script";
import { seoConfig } from "@/src/data/seo";
import { normalizePath } from "@/src/lib/seo";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function BreadcrumbSchema({
  items,
  id = "breadcrumb-schema",
}: {
  items: BreadcrumbItem[];
  id?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${seoConfig.siteUrl}${normalizePath(item.path)}`,
    })),
  };

  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
