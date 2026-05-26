import { packageInquiryLinks, servicePackages, hasLivePaymentLink } from "@/data/packages";

interface PackagesSectionProps {
  eyebrow?: string;
  title?: string;
  lead?: string;
}

const renderPrimaryAction = (paymentLink: string) => {
  if (hasLivePaymentLink(paymentLink)) {
    return (
      <a
        href={paymentLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Pay via Xendit
      </a>
    );
  }

  return (
    <button type="button" className="btn btn-primary" disabled>
      Pay via Xendit
    </button>
  );
};

export const PackagesSection = ({
  eyebrow = "Package Tiers",
  title = "THREE WAYS TO START.",
  lead = "Pick a sample package, compare the key differences at a glance, then send clients to a hosted Xendit payment link. No custom checkout, no database, and no card handling on this website.",
}: PackagesSectionProps) => (
  <section id="packages" style={{ background: "linear-gradient(180deg, #060608 0%, #0b0c10 100%)" }}>
    <div className="container-edge section-pad">
      <div className="snap-content visible">
        <div className="packages-header">
          <div>
            <span className="section-label">{eyebrow}</span>
            <h2 className="display-m packages-title">{title}</h2>
          </div>

          <p className="body-l packages-lead">{lead}</p>
        </div>

        <div className="packages-grid">
          {servicePackages.map((pkg) => (
            <article
              key={pkg.id}
              className={`surface-card package-card${pkg.featured ? " featured" : ""}`}
            >
              <div className="package-card__top">
                <span className="tag">{pkg.badge}</span>
                <span className="package-card__timeline">{pkg.timeline}</span>
              </div>

              <div className="package-card__headline">
                <h3>{pkg.name}</h3>
                <p className="package-card__timeline package-card__timeline--headline">{pkg.timeline}</p>
              </div>

              <p className="body-m" style={{ margin: 0 }}>{pkg.summary}</p>
              <dl className="package-compare-list">
                {pkg.highlights.map((item) => (
                  <div key={item.label} className="package-compare-list__row">
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="package-card__ideal">{pkg.idealFor}</p>

              <div className="package-card__price-block">
                <span>Sample one-time rate</span>
                <p>{pkg.priceLabel}</p>
              </div>

              <div className="package-card__actions">
                {renderPrimaryAction(pkg.paymentLink)}
                <a
                  href={packageInquiryLinks[pkg.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Ask About This Tier
                </a>
              </div>

              {!hasLivePaymentLink(pkg.paymentLink) ? (
                <p className="package-card__note">
                  Paste your live Xendit payment link into <code>src/data/packages.ts</code> to
                  activate this checkout button.
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <p className="package-section__footnote">
          Sample packages only. Final scope, revisions, and turnaround are confirmed before
          kickoff. Hosted checkout is handled by Xendit.
        </p>
      </div>
    </div>
  </section>
);
