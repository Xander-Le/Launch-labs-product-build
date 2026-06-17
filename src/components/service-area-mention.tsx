import { serviceAreas } from "@/src/data/site";

type ServiceAreaMentionProps = {
  className?: string;
  prefix?: string;
};

export function ServiceAreaMention({
  className = "",
  prefix = "Serving",
}: ServiceAreaMentionProps) {
  const areas = [...serviceAreas];
  const lastArea = areas.pop();

  return (
    <p className={`text-sm leading-6 text-[var(--text-muted)] ${className}`}>
      {prefix}{" "}
      {areas.join(", ")}
      {lastArea ? `, and ${lastArea}` : ""}.
    </p>
  );
}
