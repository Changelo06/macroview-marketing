import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  applyAnalyticsConsent,
  persistAnalyticsConsent,
  readAnalyticsConsent,
  type AnalyticsConsentChoice,
} from "@/lib/analyticsConsent";

export const CookieConsentBanner = () => {
  const [choice, setChoice] = useState<AnalyticsConsentChoice | null>(() => readAnalyticsConsent());

  useEffect(() => {
    applyAnalyticsConsent(choice);
  }, [choice]);

  if (choice) return null;

  const handleChoice = (nextChoice: AnalyticsConsentChoice) => {
    persistAnalyticsConsent(nextChoice);
    setChoice(nextChoice);
  };

  return (
    <aside className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-banner__copy">
        <span className="tag">Cookies</span>
        <p className="cookie-banner__title">Choose how this site remembers your visit.</p>
        <p className="body-s" style={{ margin: 0 }}>
          We always keep one essential preference cookie so your choice persists. Optional
          analytics stays off unless you accept. See our <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </div>

      <div className="cookie-banner__actions">
        <button type="button" className="btn btn-outline" onClick={() => handleChoice("rejected")}>
          Reject
        </button>
        <button type="button" className="btn btn-primary" onClick={() => handleChoice("accepted")}>
          Accept
        </button>
      </div>
    </aside>
  );
};
