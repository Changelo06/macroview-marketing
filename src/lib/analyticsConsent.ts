export const ANALYTICS_CONSENT_STORAGE_KEY = "mvm-analytics-consent";
export const ANALYTICS_CONSENT_COOKIE_NAME = "mvm_analytics_consent";
export const ANALYTICS_CONSENT_EVENT = "mvm:analytics-consent-change";

export type AnalyticsConsentChoice = "accepted" | "rejected";

const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

const isConsentChoice = (value: string | null): value is AnalyticsConsentChoice =>
  value === "accepted" || value === "rejected";

const readConsentCookie = () => {
  if (typeof document === "undefined") return null;

  const entry = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${ANALYTICS_CONSENT_COOKIE_NAME}=`));

  if (!entry) return null;

  const value = entry.split("=")[1] ?? null;
  return isConsentChoice(value) ? value : null;
};

export const readAnalyticsConsent = (): AnalyticsConsentChoice | null => {
  if (typeof window === "undefined") return null;

  const cookieValue = readConsentCookie();
  if (cookieValue) return cookieValue;

  const storedValue = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
  return isConsentChoice(storedValue) ? storedValue : null;
};

export const applyAnalyticsConsent = (choice: AnalyticsConsentChoice | null) => {
  if (typeof document === "undefined") return;

  if (choice) {
    document.documentElement.dataset.analyticsConsent = choice;
    return;
  }

  delete document.documentElement.dataset.analyticsConsent;
};

export const persistAnalyticsConsent = (choice: AnalyticsConsentChoice) => {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, choice);
  document.cookie =
    `${ANALYTICS_CONSENT_COOKIE_NAME}=${choice}; path=/; max-age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax`;
  applyAnalyticsConsent(choice);

  window.dispatchEvent(
    new CustomEvent(ANALYTICS_CONSENT_EVENT, {
      detail: {
        choice,
        analyticsAllowed: choice === "accepted",
      },
    }),
  );
};
