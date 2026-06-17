import { siteConfig } from "@/src/data/site";

const phoneHref = `tel:${siteConfig.phone.replace(/\D/g, "")}`;

type SiteNapProps = {
  className?: string;
  showDirectionsLink?: boolean;
};

export function SiteNap({
  className = "",
  showDirectionsLink = true,
}: SiteNapProps) {
  return (
    <address
      className={`space-y-1 text-sm not-italic leading-6 text-[var(--text-body)] ${className}`}
    >
      <p className="font-semibold text-white">{siteConfig.name}</p>
      {showDirectionsLink ? (
        <a
          href={siteConfig.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block transition hover:text-white"
        >
          {siteConfig.address.street}
          <br />
          {siteConfig.address.city}, {siteConfig.address.state}{" "}
          {siteConfig.address.zip}
        </a>
      ) : (
        <p>
          {siteConfig.address.street}
          <br />
          {siteConfig.address.city}, {siteConfig.address.state}{" "}
          {siteConfig.address.zip}
        </p>
      )}
      <a
        href={`mailto:${siteConfig.email}`}
        className="block transition hover:text-white"
      >
        {siteConfig.email}
      </a>
      <a href={phoneHref} className="block transition hover:text-white">
        {siteConfig.phone}
      </a>
    </address>
  );
}
