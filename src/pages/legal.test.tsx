import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Terms from "./Terms";
import Privacy from "./Privacy";
import Refund from "./Refund";
import ServicePolicy from "./ServicePolicy";

const renderPage = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe("legal pages — shared shape", () => {
  const pages: { name: string; element: React.ReactElement; title: RegExp }[] = [
    { name: "Terms",          element: <Terms />,          title: /Terms & Conditions/i },
    { name: "Privacy",        element: <Privacy />,        title: /Privacy Policy/i },
    { name: "Refund",         element: <Refund />,         title: /Refund & Cancellation Policy/i },
    { name: "ServicePolicy",  element: <ServicePolicy />,  title: /Service Delivery Policy/i },
  ];

  pages.forEach(({ name, element, title }) => {
    describe(`<${name}>`, () => {
      it("renders the page title", () => {
        renderPage(element);
        expect(screen.getByRole("heading", { level: 1, name: title })).toBeInTheDocument();
      });

      it("shows the effective date in the meta line", () => {
        renderPage(element);
        const container = screen.getByText(/Effective May 2026/i);
        expect(container).toBeInTheDocument();
        expect(container.textContent).toMatch(/Metro Manila, Philippines/i);
      });

      it("includes the template-draft notice", () => {
        renderPage(element);
        expect(screen.getByText(/template draft published in the test\/demo stage/i)).toBeInTheDocument();
      });

      it("renders a 'Back to Home' button linking to /", () => {
        renderPage(element);
        const back = screen.getByRole("link", { name: /back to home/i });
        expect(back).toHaveAttribute("href", "/");
      });

      it("renders the site Footer with the legal links column", () => {
        const { container } = renderPage(element);
        expect(container.querySelector("footer.footer")).not.toBeNull();
        // sanity: at least one of the legal nav links must be in the footer
        expect(screen.getAllByRole("link", { name: /^terms$/i }).length).toBeGreaterThan(0);
      });
    });
  });
});

describe("<Terms> content", () => {
  it("references Philippines governing law", () => {
    const { container } = renderPage(<Terms />);
    expect(container.textContent).toMatch(/laws of the Republic of the Philippines/i);
  });

  it("links to the Refund policy from the payments section", () => {
    renderPage(<Terms />);
    const refundLink = screen.getByRole("link", { name: /refund policy/i });
    expect(refundLink).toHaveAttribute("href", "/refund");
  });

  it("describes hosted Xendit checkout for packages or deposits", () => {
    const { container } = renderPage(<Terms />);
    expect(container.textContent).toMatch(/hosted payment links/i);
    expect(container.textContent).toMatch(/Xendit/i);
  });
});

describe("<Privacy> content", () => {
  it("cites the Data Privacy Act of 2012", () => {
    const { container } = renderPage(<Privacy />);
    expect(container.textContent).toMatch(/Data Privacy Act of 2012/i);
  });

  it("names Xendit as a third-party data processor", () => {
    const { container } = renderPage(<Privacy />);
    expect(container.textContent).toMatch(/Xendit/);
  });

  it("mentions accept or reject consent choices for analytics", () => {
    const { container } = renderPage(<Privacy />);
    expect(container.textContent).toMatch(/Accept or Reject/i);
    expect(container.textContent).toMatch(/Optional analytics is disabled by default/i);
  });
});

describe("<Refund> content", () => {
  it("declares the 48-hour cancellation window for package or deposit refunds", () => {
    const { container } = renderPage(<Refund />);
    expect(container.textContent).toMatch(/Within 48 hours of payment/i);
    expect(container.textContent).toMatch(/48 hours before/i);
  });
});

describe("<ServicePolicy> content", () => {
  it("declares short-form turnaround of 48–72 hours", () => {
    const { container } = renderPage(<ServicePolicy />);
    expect(container.textContent).toMatch(/48–72 hours/i);
  });
});
