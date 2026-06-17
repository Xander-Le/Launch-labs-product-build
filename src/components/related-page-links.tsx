import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageCtas } from "@/src/data/nav";

type RelatedPageLinksProps = {
  links: Array<keyof typeof pageCtas>;
  className?: string;
};

export function RelatedPageLinks({
  links,
  className = "mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm",
}: RelatedPageLinksProps) {
  return (
    <div className={className}>
      {links.map((key) => {
        const { href, label } = pageCtas[key];

        return (
          <Link
            key={key}
            href={href}
            className="inline-flex items-center gap-2 font-semibold text-[var(--sky-blue)] transition hover:text-white"
          >
            {label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        );
      })}
    </div>
  );
}
