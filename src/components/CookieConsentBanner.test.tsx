import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CookieConsentBanner } from "./CookieConsentBanner";
import {
  ANALYTICS_CONSENT_COOKIE_NAME,
  ANALYTICS_CONSENT_EVENT,
  ANALYTICS_CONSENT_STORAGE_KEY,
} from "@/lib/analyticsConsent";

const renderBanner = () =>
  render(
    <MemoryRouter>
      <CookieConsentBanner />
    </MemoryRouter>,
  );

describe("<CookieConsentBanner>", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.cookie = `${ANALYTICS_CONSENT_COOKIE_NAME}=; path=/; max-age=0`;
    delete document.documentElement.dataset.analyticsConsent;
  });

  it("renders when no consent choice has been stored yet", () => {
    renderBanner();
    expect(screen.getByRole("dialog", { name: /cookie consent/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /accept/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reject/i })).toBeInTheDocument();
  });

  it("persists acceptance and emits an analytics-ready event", () => {
    const listener = vi.fn();
    window.addEventListener(ANALYTICS_CONSENT_EVENT, listener as EventListener);

    renderBanner();
    fireEvent.click(screen.getByRole("button", { name: /accept/i }));

    expect(screen.queryByRole("dialog", { name: /cookie consent/i })).not.toBeInTheDocument();
    expect(window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY)).toBe("accepted");
    expect(document.cookie).toContain(`${ANALYTICS_CONSENT_COOKIE_NAME}=accepted`);
    expect(document.documentElement.dataset.analyticsConsent).toBe("accepted");
    expect(listener).toHaveBeenCalledTimes(1);

    window.removeEventListener(ANALYTICS_CONSENT_EVENT, listener as EventListener);
  });

  it("persists rejection and hides the banner on future renders", () => {
    renderBanner();
    fireEvent.click(screen.getByRole("button", { name: /reject/i }));

    expect(window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY)).toBe("rejected");
    expect(document.documentElement.dataset.analyticsConsent).toBe("rejected");

    const { unmount } = renderBanner();
    expect(screen.queryByRole("dialog", { name: /cookie consent/i })).not.toBeInTheDocument();
    unmount();
  });
});
