type PageAnswerBlockProps = {
  heading: string;
  copy: string;
  className?: string;
};

/** Inline Q&A lead — embed inside an existing section, not as its own block. */
export function PageAnswerBlock({
  heading,
  copy,
  className = "",
}: PageAnswerBlockProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <h2 className="font-[var(--font-outfit)] text-xl font-semibold tracking-[-0.02em] text-white md:text-2xl">
        {heading}
      </h2>
      <p className="mt-3 text-base leading-7 text-[var(--text-body)]">
        {copy}
      </p>
    </div>
  );
}
