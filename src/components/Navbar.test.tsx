import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "./Navbar";
import { NAV_LINKS } from "@/data/sections";
import { PACKAGE_TIERS_PATH } from "@/data/config";

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <Navbar scrolled={false} />
    </MemoryRouter>,
  );

describe("<Navbar>", () => {
  it("renders the MacroView wordmark with brand-mark icon", () => {
    const { container } = renderNavbar();
    expect(screen.getByText(/MACRO/)).toBeInTheDocument();
    expect(screen.getByText("VIEW")).toBeInTheDocument();
    const mark = container.querySelector(".nav-logo-mark");
    expect(mark).not.toBeNull();
    expect(mark?.tagName).toBe("IMG");
    expect(mark).toHaveAttribute("src", expect.stringContaining("Logo.svg"));
  });

  it("renders all configured nav links", () => {
    renderNavbar();
    NAV_LINKS.forEach((l) => {
      const link = screen.getByRole("link", { name: l.label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", l.kind === "section" ? `#${l.id}` : l.to);
    });
  });

  it("primary CTA points at the packages page", () => {
    renderNavbar();
    const cta = screen.getByRole("link", { name: /see package tiers/i });
    expect(cta).toHaveAttribute("href", PACKAGE_TIERS_PATH);
  });

  it("toggles the .scrolled class based on the prop", () => {
    const { container, rerender } = render(
      <MemoryRouter>
        <Navbar scrolled={false} />
      </MemoryRouter>,
    );
    const nav = container.querySelector(".navbar");
    expect(nav).not.toHaveClass("scrolled");
    rerender(
      <MemoryRouter>
        <Navbar scrolled={true} />
      </MemoryRouter>,
    );
    expect(nav).toHaveClass("scrolled");
  });
});
