import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Packages from "./Packages";

const renderPackages = () =>
  render(
    <MemoryRouter>
      <Packages />
    </MemoryRouter>,
  );

describe("<Packages> page", () => {
  it("renders the packages page hero and comparison title", () => {
    renderPackages();
    expect(screen.getByText(/PICK THE LANE THAT FITS YOUR CONTENT VOLUME\./i)).toBeInTheDocument();
    expect(screen.getByText(/A simplified pricing wall for quick comparison\./i)).toBeInTheDocument();
  });

  it("renders the packages nav link and no footer", () => {
    const { container } = renderPackages();
    expect(screen.getAllByRole("link", { name: "Packages" }).length).toBeGreaterThan(0);
    expect(container.querySelectorAll("footer.footer")).toHaveLength(0);
  });

  it("shows three package cards", () => {
    const { container } = renderPackages();
    expect(container.querySelectorAll(".package-card")).toHaveLength(3);
  });
});
