import React from "react";

const RefundPolicy = () => {
  return (
    <section className=" extrapage px-4 py-8 max-w-5xl mx-auto text-gray-800 leading-relaxed text-sm sm:text-base">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-8">
        Refund Policy
      </h1>

      <p className="font-semibold mb-2">Investedge Research Advisory Private Limited</p>
      <p className="mb-4">SEBI-Registered Research Analyst (Registration No: INH000018212, BSE Enlistment No. 6363)</p>
      <p className="italic mb-6">Last Updated: July 15, 2025</p>

      <p className="mb-4">
        At Investedge Research Advisory Pvt Ltd, we are committed to delivering high-quality
        research recommendation services with transparency and fairness, in compliance
        with the Securities and Exchange Board of India (SEBI) (Research Analysts)
        Regulations, 2014, and related guidelines, including the SEBI Circular dated February
        17, 2025. This refund policy outlines the conditions under which refunds may be
        requested for our paid services, ensuring clarity for our clients and alignment with
        regulatory standards.
      </p>

      <h2 className="font-semibold text-lg mt-8 mb-2">1. Scope of the Refund Policy</h2>
      <p className="mb-4">
        This policy applies to all paid services provided by Investedge Research Advisory Pvt
        Ltd, including but not limited to research reports, research recommendation
        subscriptions, and related services. It does not cover investment outcomes, as all
        investments are subject to market risks, and we do not guarantee returns or profits.
        Clients are advised to review our Terms and Conditions and SEBI regulations before
        subscribing.
      </p>

      <h2 className="font-semibold text-lg mt-8 mb-2">2. Eligibility for Refunds</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Non-Delivery of Services:</strong> If we fail to deliver the agreed-upon service due to reasons within our control.</li>
        <li><strong>Cancellation Within Cooling-Off Period:</strong> Within 7 working days if service not accessed.</li>
        <li><strong>Premature Termination:</strong> Pro-rata refund for unutilized full months with notice.</li>
        <li><strong>Persistent Technical Issues:</strong> Unresolved issues within 7 days may qualify for refund.</li>
        <li><strong>Regulatory Actions:</strong> SEBI registration suspension or cancellation leads to pro-rata refund.</li>
        <li><strong>Double Payment or Overcharging:</strong> Excess amount refunded.</li>
        <li><strong>CeFCoM Clients:</strong> Refunds handled via SEBI platform as per guidelines.</li>
      </ul>

      <h2 className="font-semibold text-lg mt-8 mb-2">3. Non-Refundable Scenarios</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Dissatisfaction with investment performance.</li>
        <li>Accessed, downloaded, or used services.</li>
        <li>Partially used months (e.g., canceling mid-month).</li>
        <li>Expired cooling-off period unless meeting other criteria.</li>
        <li>Client breach of Terms and Conditions.</li>
        <li>Force majeure disruptions (e.g., natural disasters).</li>
        <li>Non-refundable administrative or onboarding fees.</li>
        <li>Issues beyond our control (e.g., third-party platform failure).</li>
      </ul>

      <h2 className="font-semibold text-lg mt-8 mb-2">4. Refund Process</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Email info@inbestors.in or use our website contact form with full details.</li>
        <li>We review requests in 5 working days.</li>
        <li>If approved, refund processed within 10 working days (30 days for CeFCoM).</li>
        <li>Confirmation email sent once refund is completed.</li>
      </ol>
      <p className="mt-2">* Pro-rata refund calculated for full unutilized months only.</p>

      <h2 className="font-semibold text-lg mt-8 mb-2">5. Grievance Redressal</h2>
      <p>
        Contact: <strong>Investedge Research Advisory Private Limited</strong><br />
        Email: info@inbestors.in<br />
        Phone: +91 62684 26713
      </p>
      <p className="mt-2">
        If unresolved, escalate via SCORES (<a href="https://scores.sebi.gov.in" className="text-blue-600 underline">scores.sebi.gov.in</a>)
        or SEBI helpline: 1800 266 7575 / 1800 22 7575.
      </p>

      <h2 className="font-semibold text-lg mt-8 mb-2">6. Centralized Fee Collection Mechanism (CeFCoM)</h2>
      <p className="mb-4">
        All fee transactions and refunds for CeFCoM clients are processed via the SEBI platform. Refunds for discontinued services follow SEBI guidelines.
      </p>

      <h2 className="font-semibold text-lg mt-8 mb-2">7. Policy Updates</h2>
      <p className="mb-4">
        We reserve the right to update this policy anytime. Latest version will be on our website with date of revision.
      </p>

      <h2 className="font-semibold text-lg mt-8 mb-2">8. Contact Us</h2>
      <p>
        Email: info@inbestors.in<br />
        Phone: +91 62684 26713<br />
        Address: Plot No. 126-127, Scheme No. 113, Vijay Nagar, Indore 452010
      </p>

      <h2 className="font-semibold text-lg mt-8 mb-2">Disclaimer</h2>
      <p className="mb-4">
        This policy is subject to our full Terms and Conditions and SEBI regulations. Market investments carry risk. Past performance is not indicative of future results.
      </p>
    </section>
  );
};

export default RefundPolicy;