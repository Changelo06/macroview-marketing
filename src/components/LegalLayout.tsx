import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { GrainOverlay } from "@/components/GrainOverlay";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}

export const LegalLayout = ({ eyebrow, title, effectiveDate, children }: LegalLayoutProps) => (
  <>
    <GrainOverlay />
    <CustomCursor />
    <Navbar scrolled={false} />

    <main className="legal-page">
      <div className="container-edge legal-container">
        <header className="legal-header">
          <span className="tag">{eyebrow}</span>
          <h1 className="legal-title">{title}</h1>
          <p className="legal-meta">
            Effective {effectiveDate} · Metro Manila, Philippines
          </p>
          <p className="legal-notice">
            <strong>Notice:</strong> This document is a template draft published in the test/demo
            stage. Final legally-binding terms will be issued by Macro View Marketing before public
            launch. For questions, contact{" "}
            <a href="mailto:macroviewdigital@gmail.com">macroviewdigital@gmail.com</a>.
          </p>
        </header>

        <article className="legal-body">{children}</article>

        <div className="legal-back">
          <Link to="/" className="btn btn-outline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>

    <Footer />
  </>
);
