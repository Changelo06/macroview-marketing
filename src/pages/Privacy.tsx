import { LegalLayout } from "@/components/LegalLayout";

const Privacy = () => (
  <LegalLayout eyebrow="Legal - Privacy" title="Privacy Policy" effectiveDate="May 2026">
    <p>
      Macro View Marketing ("MVM", "we", "us") respects your privacy and is committed to protecting
      personal data in accordance with the Republic Act No. 10173, the <strong>Data Privacy Act of
      2012</strong>, its Implementing Rules and Regulations, and issuances of the National Privacy
      Commission (NPC).
    </p>

    <h2>1. Personal Data We Collect</h2>
    <p>We collect only the data necessary to deliver our services:</p>
    <ul>
      <li><strong>Contact details</strong> - name, email, phone number, company / brand name.</li>
      <li><strong>Purchase and booking data</strong> - selected package tier, calendar slot, payment-link transaction reference, and billing status (handled by Xendit; we do not store full card details).</li>
      <li><strong>Project assets</strong> - raw footage, scripts, brand guidelines, or any material you upload to us for production.</li>
      <li><strong>Usage data</strong> - basic, aggregated analytics from this website (page views, referrer, country, device class) only if you consent to optional analytics.</li>
    </ul>

    <h2>2. How We Use Your Data</h2>
    <ul>
      <li>Deliver, manage, and improve our content-production services;</li>
      <li>Schedule discovery calls and onboarding sessions;</li>
      <li>Process package purchases, bookings, and payments via our payment processor;</li>
      <li>Communicate with you about your engagement;</li>
      <li>Issue invoices, BIR-compliant receipts, and other tax / regulatory documents;</li>
      <li>Comply with legal obligations.</li>
    </ul>

    <h2>3. Sharing With Third Parties</h2>
    <p>We share personal data only with service providers necessary to operate our business:</p>
    <ul>
      <li><strong>Xendit</strong> - hosted payment links and payment processing for package purchases or booking deposits. Subject to <a href="https://www.xendit.co/en/privacy/" target="_blank" rel="noopener noreferrer">Xendit's Privacy Policy</a>.</li>
      <li><strong>Google (Gmail / Drive)</strong> - email correspondence and project asset storage.</li>
      <li><strong>GitHub Pages</strong> - static hosting for this website.</li>
      <li><strong>LinkedIn</strong> - public-facing brand presence; we do not export user data to LinkedIn.</li>
    </ul>
    <p>We do not sell, rent, or trade personal data to any third party for advertising purposes.</p>

    <h2>4. Data Retention</h2>
    <p>
      Personal data is retained only for as long as necessary to fulfil the purposes outlined in
      this Policy, or as required by Philippine law (e.g., BIR requires retention of accounting
      records for ten (10) years). Inactive client records are anonymised or deleted within
      twenty-four (24) months of last engagement.
    </p>

    <h2>5. Your Rights as a Data Subject</h2>
    <p>Under the Data Privacy Act of 2012, you have the right to:</p>
    <ul>
      <li>Be informed of the processing of your personal data;</li>
      <li>Access, correct, or update your personal data;</li>
      <li>Object to processing, including for direct marketing;</li>
      <li>Request erasure or blocking of your personal data;</li>
      <li>Data portability;</li>
      <li>File a complaint with the National Privacy Commission.</li>
    </ul>
    <p>
      To exercise any of these rights, email our Data Protection Officer at{" "}
      <a href="mailto:macroviewdigital@gmail.com">macroviewdigital@gmail.com</a> with the subject
      line <em>"Data Subject Request"</em>. We will respond within ten (10) business days.
    </p>

    <h2>6. Cookies & Analytics</h2>
    <p>
      This website stores one essential preference cookie so we can remember whether you clicked
      Accept or Reject on the cookie banner. Optional analytics is disabled by default and is only
      enabled after you explicitly accept. We do not deploy advertising cookies or cross-site
      fingerprinting tools at this time.
    </p>
    <p>
      If analytics is enabled in the future, it will only run after consent and will be limited to
      aggregate website performance reporting.
    </p>

    <h2>7. Security</h2>
    <p>
      We implement reasonable organisational, technical, and physical safeguards to protect
      personal data from accidental loss, unauthorised access, alteration, or disclosure. No system
      is 100% secure; in the event of a breach involving sensitive personal data, we will notify
      affected individuals and the National Privacy Commission within 72 hours as required by law.
    </p>

    <h2>8. Children's Privacy</h2>
    <p>
      Our services are not directed to children under 18. We do not knowingly collect personal data
      from minors. If we become aware that data has been collected from a minor without parental
      consent, we will delete it.
    </p>

    <h2>9. International Transfers</h2>
    <p>
      Some of our service providers (e.g., Google, GitHub) process data outside the Philippines.
      We rely on those providers' contractual safeguards and certifications to ensure equivalent
      data protection standards.
    </p>

    <h2>10. Updates to This Policy</h2>
    <p>
      We may update this Policy from time to time. Changes take effect on the date stated at the
      top of this page. We encourage you to review this Policy periodically.
    </p>

    <h2>11. Contact</h2>
    <p>
      Data Protection Officer<br />
      Macro View Marketing<br />
      Metro Manila, Philippines<br />
      Email: <a href="mailto:macroviewdigital@gmail.com">macroviewdigital@gmail.com</a><br />
      Phone: +63 949 463 4459
    </p>
  </LegalLayout>
);

export default Privacy;
