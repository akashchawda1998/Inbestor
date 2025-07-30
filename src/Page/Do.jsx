import React from 'react';

const DosAndDonts = () => {
  return (
   <section  className='extrapage'>
     <div className="max-w-5xl mx-auto px-4 py-8 text-gray-800">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Do’s And Don’ts for Investors
      </h2>

      <p className="text-lg font-semibold mb-4">
        Expectations from the investors (Responsibilities of investors)
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* DOs */}
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">Do’s</h2>
          <ul className="list-decimal list-inside space-y-2 text-sm md:text-base">
            <li>Always deal with SEBI registered Research Analyst.</li>
            <li>Ensure that the Research Analyst has a valid registration certificate.</li>
            <li>Check for SEBI registration number.</li>
            <li>
              Refer to the SEBI registered Research Analyst list here: <br />
              <a
                href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                SEBI Registered Analyst List
              </a>
            </li>
            <li>
              Always pay attention towards disclosures made in the research reports before investing.
            </li>
            <li>
              Pay through banking channels only and maintain duly signed receipts. You may use
              Centralized Fee Collection Mechanism (CeFCoM) if available.
            </li>
            <li>
              Before buying/selling securities or applying in public offer, check the research
              recommendation.
            </li>
            <li>
              Ask all relevant questions and clear doubts with your Research Analyst before acting on
              recommendation.
            </li>
            <li>
              Seek clarifications and guidance especially for complex and high-risk financial products.
            </li>
            <li>
              You have the right to stop availing service anytime as per agreed terms.
            </li>
            <li>You can provide feedback on the services received.</li>
            <li>
              You are not bound by any clause that violates regulatory provisions.
            </li>
            <li>
              Report to SEBI if any Research Analyst offers assured or guaranteed returns.
            </li>
          </ul>
        </div>

        {/* DONTs */}
        <div>
          <h2 className="text-xl font-semibold text-red-700 mb-2">Don’ts</h2>
          <ul className="list-decimal list-inside space-y-2 text-sm md:text-base">
            <li>Do not provide funds for investment to the Research Analyst.</li>
            <li>Don’t fall prey to luring advertisements or market rumors.</li>
            <li>
              Do not get attracted to limited period discounts or incentives offered by the Research
              Analyst.
            </li>
            <li>
              Do not share login credentials and passwords of your trading, demat, or bank accounts.
            </li>
          </ul>
        </div>
      </div>
    </div>
   </section>
  );
};

export default DosAndDonts;
