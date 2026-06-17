import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/src/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/src/components/seo/faq-schema";
import { ServiceAreaPageLayout } from "@/src/components/service-area-page-layout";
import { serviceAreaPages } from "@/src/data/service-area-pages";
import { buildMetadata, seoPages } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata(seoPages.mesquite);

export default function MesquitePage() {
  const content = serviceAreaPages.mesquite;

  return (
    <>
      <BreadcrumbSchema
        id="mesquite-breadcrumb-schema"
        items={[
          { name: "Home", path: "/" },
          { name: content.breadcrumbLabel, path: "/mesquite" },
        ]}
      />
      <FAQSchema
        id="mesquite-faq-schema"
        faqs={content.faqs.map(({ question, answer }) => ({ question, answer }))}
      />
      <ServiceAreaPageLayout content={content} />
    </>
  );
}
