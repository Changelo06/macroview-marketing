import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Index from "./Index";

const renderIndex = () =>
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>,
  );

describe("<Index> page assembly", () => {
  it("renders the snap-root scroll container", () => {
    const { container } = renderIndex();
    expect(container.querySelector("main#snap-root")).not.toBeNull();
  });

  it("does NOT render the loading intro overlay", () => {
    const { container } = renderIndex();
    expect(container.querySelector(".loader")).toBeNull();
  });

  it("renders the navbar, scroll dots, custom cursor, and grain overlay", () => {
    const { container } = renderIndex();
    expect(container.querySelector(".navbar")).not.toBeNull();
    expect(container.querySelector(".scroll-dots")).not.toBeNull();
    expect(container.querySelector("#cursor-dot")).not.toBeNull();
    expect(container.querySelector("#cursor-ring")).not.toBeNull();
    expect(container.querySelector(".grain-overlay")).not.toBeNull();
  });

  it("renders all 9 home section ids in stable order", () => {
    const { container } = renderIndex();
    const ids = Array.from(container.querySelectorAll<HTMLElement>("section"))
      .map((s) => s.id)
      .filter(Boolean);
    expect(ids).toEqual([
      "hero",
      "problem",
      "solution",
      "portfolio",
      "results",
      "why",
      "who",
      "faq",
      "book",
    ]);
  });

  it("renders all 5 CTA bands by variant", () => {
    const { container } = renderIndex();
    const bands = Array.from(container.querySelectorAll<HTMLElement>(".cta-band"))
      .map((b) => b.dataset.variant)
      .filter(Boolean);
    expect(bands).toEqual(["intro", "pivot", "portfolio", "why", "faq"]);
  });

  it("renders the footer once at the bottom", () => {
    const { container } = renderIndex();
    expect(container.querySelectorAll("footer.footer")).toHaveLength(1);
  });

  it("renders the section dot count to match the SECTIONS registry (9 dots)", () => {
    const { container } = renderIndex();
    expect(container.querySelectorAll(".scroll-dots .nav-dot")).toHaveLength(9);
  });
});
