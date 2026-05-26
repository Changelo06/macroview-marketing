import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CtaBand } from "./CtaBand";
import { CTA_BANDS, type CtaBandVariant } from "@/data/sections";
import { PACKAGE_TIERS_PATH } from "@/data/config";

const variants: CtaBandVariant[] = ["intro", "pivot", "portfolio", "why", "faq"];
const renderBand = (variant: CtaBandVariant) =>
  render(
    <MemoryRouter>
      <CtaBand variant={variant} />
    </MemoryRouter>,
  );

describe("<CtaBand>", () => {
  variants.forEach((variant) => {
    it(`renders the ${variant} variant headline + CTA copy`, () => {
      renderBand(variant);
      const cfg = CTA_BANDS[variant];
      expect(screen.getByText(cfg.headline)).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: cfg.cta }),
      ).toBeInTheDocument();
    });
  });

  it("route variants point to the packages page", () => {
    renderBand("portfolio");
    const link = screen.getByRole("link", { name: CTA_BANDS.portfolio.cta });
    expect(link).toHaveAttribute("href", PACKAGE_TIERS_PATH);
  });

  it("section variants use anchor hrefs", () => {
    renderBand("intro");
    const link = screen.getByRole("link", { name: CTA_BANDS.intro.cta });
    expect(link.getAttribute("href")).toMatch(/^#/);
  });

  it("attaches the data-variant attribute for styling hooks", () => {
    const { container } = render(
      <MemoryRouter>
        <CtaBand variant="why" />
      </MemoryRouter>,
    );
    const band = container.querySelector(".cta-band");
    expect(band).toHaveAttribute("data-variant", "why");
  });
});
