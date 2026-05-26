import { LegalLayout } from "@/components/LegalLayout";

const Refund = () => (
  <LegalLayout eyebrow="Legal - Refund" title="Refund & Cancellation Policy" effectiveDate="May 2026">
    <p>
      Macro View Marketing ("MVM") values clear, predictable commercial terms. This Refund Policy
      explains when deposits and service fees are refundable and how to request a refund.
    </p>

    <h2>1. What This Policy Covers</h2>
    <p>
      This policy applies to <strong>service package payments</strong>, <strong>booking deposits</strong>,
      and any other service fees collected through our designated payment processor (currently
      Xendit) or paid directly to MVM. Free consultations and uncharged inquiries are out of
      scope.
    </p>

    <h2>2. Fixed-Scope Package Payments</h2>
    <p>
      Sample packages such as our Basic Tier, Content Tier, and Premium Tier are sold as
      fixed-scope digital services. Refund eligibility depends on whether production work has
      started.
    </p>
    <ul>
      <li><strong>Within 48 hours of payment</strong> and before kickoff or asset handoff: <strong>full refund</strong>.</li>
      <li><strong>After kickoff but before first delivery</strong>: partial refund may be issued less any non-recoverable labour or third-party costs already incurred.</li>
      <li><strong>After first delivery or strategic work has commenced</strong>: no refund, but we will complete the agreed scope or remedy issues under our revision process.</li>
    </ul>

    <h2>3. Booking Deposits</h2>
    <p>
      A booking deposit reserves your discovery-call or onboarding slot. The deposit is credited
      against the first invoice once an engagement begins.
    </p>
    <h3>Refundable</h3>
    <ul>
      <li>Cancellation requested at least <strong>48 hours before</strong> the scheduled call: <strong>full refund</strong>.</li>
      <li>We cancel or fail to attend the scheduled call: <strong>full refund</strong>.</li>
      <li>We cannot accommodate your project after the call (e.g., scope mismatch, capacity): <strong>full refund</strong>.</li>
    </ul>
    <h3>Non-Refundable</h3>
    <ul>
      <li>Cancellation within 48 hours of the scheduled call;</li>
      <li>No-show by the Client without prior notice;</li>
      <li>Once production work has commenced on a paid engagement.</li>
    </ul>

    <h2>4. Service Engagements</h2>
    <p>
      For paid retainers and project-based engagements, refund eligibility depends on the stage of
      work delivered:
    </p>
    <ul>
      <li>
        <strong>Before kickoff</strong> (no work performed): full refund of fees paid, less any
        non-recoverable third-party costs (e.g., stock licenses, talent fees).
      </li>
      <li>
        <strong>Mid-engagement</strong>: pro-rated refund for the portion of scope not yet
        delivered. Already-completed deliverables remain billable.
      </li>
      <li>
        <strong>After delivery</strong> of all agreed scope: no refund. Quality concerns are
        resolved through our revision process (see <a href="/service-policy">Service Policy</a>).
      </li>
    </ul>

    <h2>5. Service-Failure Refunds</h2>
    <p>
      If, after one (1) structured revision round, the delivered work materially fails to meet the
      written brief, we will either (a) re-make the deliverable at our cost, or (b) refund the
      portion of the fee attributable to that deliverable. Choice is at our discretion.
    </p>

    <h2>6. How to Request a Refund</h2>
    <p>Email <a href="mailto:macroviewdigital@gmail.com">macroviewdigital@gmail.com</a> with:</p>
    <ul>
      <li>Subject line: <em>"Refund Request - [Your Name]"</em>;</li>
      <li>Date of original payment;</li>
      <li>Xendit transaction ID, payment-link reference, or invoice number;</li>
      <li>Reason for the request.</li>
    </ul>
    <p>
      We acknowledge requests within two (2) business days and resolve them within seven (7)
      business days. Approved refunds are returned through the original payment method within an
      additional five to ten (5-10) business days, depending on Xendit and your bank's processing
      time.
    </p>

    <h2>7. Chargebacks</h2>
    <p>
      Please reach out to us before initiating a chargeback. We treat unwarranted chargebacks as a
      material breach of these Terms and reserve the right to recover associated costs.
    </p>

    <h2>8. Changes to This Policy</h2>
    <p>
      We may update this Policy from time to time. Changes apply prospectively from the effective
      date at the top of this page and do not affect refunds already granted under the prior
      version.
    </p>

    <h2>9. Contact</h2>
    <p>
      Billing & Refunds<br />
      Macro View Marketing<br />
      Email: <a href="mailto:macroviewdigital@gmail.com">macroviewdigital@gmail.com</a><br />
      Phone: +63 949 463 4459
    </p>
  </LegalLayout>
);

export default Refund;
