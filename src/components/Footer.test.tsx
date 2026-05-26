import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Footer } from "./Footer";
import {
  BOOKING_EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  LINKEDIN_URL,
  LOCATION,
  UTC_OFFSET,
} from "@/data/config";

const renderFooter = () =>
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );

describe("<Footer>", () => {
  it("links the booking email via mailto:", () => {
    renderFooter();
    const email = screen.getByRole("link", { name: BOOKING_EMAIL });
    expect(email).toHaveAttribute("href", `mailto:${BOOKING_EMAIL}`);
  });

  it("links the phone via tel: and shows the formatted display", () => {
    renderFooter();
    const phone = screen.getByRole("link", { name: PHONE_DISPLAY });
    expect(phone).toHaveAttribute("href", `tel:${PHONE_TEL}`);
  });

  it("links LinkedIn and opens in a new tab", () => {
    renderFooter();
    const link = screen.getByRole("link", { name: /linkedin/i });
    expect(link).toHaveAttribute("href", LINKEDIN_URL);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("shows studio location and UTC offset", () => {
    const { container } = renderFooter();
    expect(screen.getByText(LOCATION)).toBeInTheDocument();
    expect(container.textContent).toContain(UTC_OFFSET);
  });

  it("renders the live Manila clock as HH:MM next to the UTC offset", () => {
    const { container } = renderFooter();
    const escapedOffset = UTC_OFFSET.replace(/[+]/g, "\\+");
    expect(container.textContent).toMatch(
      new RegExp(`${escapedOffset} · \\d{2}:\\d{2}`),
    );
  });

  it("displays the current year in the copyright line", () => {
    renderFooter();
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`© ${year} Macro View Marketing`)),
    ).toBeInTheDocument();
  });

  it("links to all four legal pages", () => {
    renderFooter();
    const expected = [
      { name: "Terms", href: "/terms" },
      { name: "Privacy", href: "/privacy" },
      { name: "Refund", href: "/refund" },
      { name: "Service Policy", href: "/service-policy" },
    ];
    expected.forEach(({ name, href }) => {
      const link = screen.getByRole("link", { name });
      expect(link).toHaveAttribute("href", href);
    });
  });
});
