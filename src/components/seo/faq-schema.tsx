import Script from "next/script";

type FAQ = {
  question: string;
  answer: string;
};

export function FAQSchema({
  faqs,
  id = "faq-schema",
}: {
  faqs: FAQ[];
  id?: string;
}) {
  if (!faqs?.length) return null;

  const jsonLd = {
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

  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
