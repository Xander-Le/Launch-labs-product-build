import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/src/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/src/components/seo/faq-schema";
import { ServiceAreaPageLayout } from "@/src/components/service-area-page-layout";
import { serviceAreaPages } from "@/src/data/service-area-pages";
import { buildMetadata, seoPages } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata(seoPages.indoorGolfGarland);

export default function IndoorGolfGarlandPage() {
  const content = serviceAreaPages.indoorGolfGarland;

  return (
    <>
      <BreadcrumbSchema
        id="indoor-golf-garland-breadcrumb-schema"
        items={[
          { name: "Home", path: "/" },
          { name: content.breadcrumbLabel, path: seoPages.indoorGolfGarland.path },
        ]}
      />
      <FAQSchema
        id="indoor-golf-garland-faq-schema"
        faqs={content.faqs.map(({ question, answer }) => ({ question, answer }))}
      />
      <ServiceAreaPageLayout content={content} />
    </>
  );
}
