import { Link, useLocation } from "react-router-dom";
import { PACKAGE_TIERS_PATH } from "@/data/config";
import { NAV_LINKS } from "@/data/sections";
import { scrollToSection } from "@/hooks/useScrollDots";

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar = ({ scrolled }: NavbarProps) => {
  const { pathname } = useLocation();

  const handleClick = (e: React.MouseEvent, id: string) => {
    if (pathname !== "/") return;
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} aria-label="Primary">
      <a
        href={pathname === "/" ? "#hero" : "/#hero"}
        className="nav-logo"
        onClick={(e) => handleClick(e, "hero")}
      >
        <img
          src="/Macroview%20-%20Logo.svg"
          alt=""
          aria-hidden
          className="nav-logo-mark"
        />
        <span>MACRO<span className="accent">VIEW</span></span>
      </a>

      <div className="nav-links">
        {NAV_LINKS.map((l) => (
          l.kind === "section" ? (
            <a
              key={l.id}
              href={pathname === "/" ? `#${l.id}` : `/#${l.id}`}
              className="nav-link"
              onClick={(e) => handleClick(e, l.id)}
            >
              {l.label}
            </a>
          ) : (
            <Link key={l.to} to={l.to} className="nav-link">
              {l.label}
            </Link>
          )
        ))}
      </div>

      <Link
        to={PACKAGE_TIERS_PATH}
        className="btn btn-primary"
        style={{ padding: "10px 20px", fontSize: "10px" }}
      >
        See Package Tiers
      </Link>
    </nav>
  );
};
