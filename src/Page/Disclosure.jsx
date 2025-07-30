import React from "react";

const Disclosure = () => {
  return (
   <section className="extrapage">

    <div className="min-h-screen text-gray-800 px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl  p-6 sm:p-8 md:p-10 lg:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">
          Disclosure
        </h1>

        <section className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
          <div>
            <h2 className="font-semibold text-xl mb-2">As Per SEBI (Research Analysts) Regulations, 2014</h2>
            <p>
              <strong>About My Business Activity:</strong> SEBI Registered Research Analyst since August 2024, providing research recommendation in Equity (Short Term as well as Long Term), Futures and Options, and Model portfolio.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Disciplinary History</h2>
            <p>
              There is no disciplinary history in my name, and there are no pending orders or outstanding litigations.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Terms and Conditions for Research Report</h2>
            <p><strong>Details of associates:</strong> Investedge Research Advisory Private Limited does not have association with other RA or Entity.</p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Disclosure Regarding Ownership & Material Conflicts of Interest</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>The Research Analyst or his relatives or associates do not have financial interest in the subject Company.</li>
              <li>The Research Analyst or his relatives or associates do not have actual/beneficial ownership of 1% or more securities of the subject Company.</li>
              <li>The Research Analyst or his relatives or associates do not have any other material conflict of interest at the time of publication of the report.</li>
            </ol>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Disclosure Regarding Receipt of Compensation</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>No compensation received from the subject Company in the past twelve months.</li>
              <li>No involvement in public offering of securities of the subject Company.</li>
              <li>No compensation for investment banking, merchant banking, or brokerage services.</li>
              <li>No compensation for products/services other than financial services.</li>
              <li>No compensation or benefits from the subject Company or third party for the research report.</li>
            </ol>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Disclosure Regarding Compensation for Public Appearance</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>No compensation from the subject Company in past twelve months.</li>
              <li>The subject company is not a client in the last 12 months and no services were provided.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">General Disclosure</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Research Analyst has not served as an officer, director, or employee of the subject Company.</li>
              <li>The Research Analyst has not engaged in market making activity for the subject Company.</li>
              <li>
                <strong>AI Disclosure:</strong> No Artificial Intelligence (AI) tools are used in generating, preparing, or distributing our research reports. If that changes, appropriate disclosure will be made.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Definitions of Terms Used</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Buy:</strong> Recommendation to buy at market price or within the price band specified.
              </li>
              <li>
                <strong>Sell / Target:</strong> Price at which the stock should be sold.
              </li>
              <li>
                <strong>Hold:</strong> No action required if target not achieved or stop loss not hit. Could continue holding based on updated analysis.
              </li>
              <li>
                <strong>Stop Loss:</strong> Price at which investor should exit due to unfavorable market move. If the price recovers near close, stock may be held.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Additional Disclosures</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Brand Name:</strong> Investedge Research Advisory Private Limited</li>
              <li><strong>Address:</strong> Plot No. 126-127, Scheme No. 113, Vijay Nagar, Indore 452010</li>
              <li><strong>Phone:</strong> +91 62684 26713</li>
              <li><strong>Grievance Officer:</strong> Vinay Verma – +91 62684 26713 – info@inbestors.in</li>
            </ul>
          </div>

          <div className="pt-6">
            <p className="text-red-600 font-semibold">Warning:</p>
            <p>“Investments in the securities market are subject to market risks. Read all the related documents carefully before investing.”</p>
          </div>

          <div className="pt-4">
            <p className="text-red-600 font-semibold">Disclaimer:</p>
            <p>“Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any), Enlistment with RAASB/BSE and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.”</p>
          </div>
        </section>
      </div>
    </div>
    </section>
  );
};

export default Disclosure;
