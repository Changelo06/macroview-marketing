import { Link } from "react-router-dom";
import { CTA_BANDS, type CtaBandVariant } from "@/data/sections";
import { scrollToSection } from "@/hooks/useScrollDots";

interface CtaBandProps {
  variant: CtaBandVariant;
}

export const CtaBand = ({ variant }: CtaBandProps) => {
  const cfg = CTA_BANDS[variant];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (cfg.kind !== "section") return;
    e.preventDefault();
    const id = cfg.href.replace("#", "");
    scrollToSection(id);
  };

  return (
    <div className="cta-band" data-variant={variant}>
      <div className="cta-band-inner snap-content">
        <h3 className="cta-band-headline">{cfg.headline}</h3>
        {cfg.kind === "route" ? (
          <Link to={cfg.href} className="btn btn-primary">
            {cfg.cta}
          </Link>
        ) : (
          <a
            href={cfg.href}
            className="btn btn-primary"
            onClick={handleClick}
          >
            {cfg.cta}
          </a>
        )}
      </div>
    </div>
  );
};
