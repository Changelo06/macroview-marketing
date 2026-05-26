import { Link } from "react-router-dom";
import { PACKAGE_TIERS_PATH } from "@/data/config";
import { scrollToSection } from "@/hooks/useScrollDots";
import { Footer } from "@/components/Footer";

export const BookSection = () => (
  <section
    id="book"
    className="bg-radial-blue"
    style={{ background: "var(--black)" }}
  >
    <div
      className="container-edge"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        className="snap-content"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "80px 0",
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--dim)",
          }}
        >
          Ready when you are
        </span>

        <h2
          className="font-display"
          style={{
            fontSize: "clamp(48px, 9vw, 120px)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            color: "var(--white-c)",
            margin: "32px 0 36px",
          }}
        >
          LET'S BUILD<br />
          YOUR CONTENT<br />
          <span style={{ color: "var(--blue)" }}>MACHINE.</span>
        </h2>

        <p
          className="body-l"
          style={{ maxWidth: "60ch", margin: "0 auto 40px" }}
        >
          Compare the three sample tiers, pick the right starting lane, and use a hosted Xendit
          checkout when you are ready to move.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link to={PACKAGE_TIERS_PATH} className="btn btn-primary">
            See Package Tiers
          </Link>
          <a
            href="#portfolio"
            className="btn btn-outline"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("portfolio");
            }}
          >
            See Portfolio
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </section>
);
