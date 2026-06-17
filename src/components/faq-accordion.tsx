"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  faqs: FaqItem[];
  className?: string;
};

export function FaqAccordion({
  eyebrow,
  title,
  description,
  faqs,
  className = "",
}: FaqAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  function toggleItem(id: string) {
    setOpenItems((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <div className={className}>
      <div>
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#4FB9DB]">
            {eyebrow}
          </p>
        ) : null}

        <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
          {title}
        </h2>

        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#D6DCE5]">
            {description}
          </p>
        ) : null}
      </div>

      <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111820]/60">
        {faqs.map((faq, index) => {
          const isOpen = openItems.includes(faq.id);
          const panelId = `faq-panel-${faq.id}`;
          const buttonId = `faq-button-${faq.id}`;

          return (
            <div
              key={faq.id}
              className={`border-white/10 ${
                index === faqs.length - 1 ? "" : "border-b"
              } ${isOpen ? "bg-[#4FB9DB]/[0.04]" : "hover:bg-white/[0.02]"}`}
            >
              <h3 className="m-0">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(faq.id)}
                  className="flex w-full items-start justify-between gap-5 px-5 py-5 text-left transition md:px-6 md:py-6"
                >
                  <span
                    className={`text-base font-semibold transition md:text-lg ${
                      isOpen ? "text-white" : "text-[#E6E9EF]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    aria-hidden="true"
                    className={`mt-0.5 h-5 w-5 shrink-0 text-[#4FB9DB] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-7 text-[#D6DCE5] md:px-6 md:pb-6">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
