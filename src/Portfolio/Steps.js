import React from 'react';

const steps = [
  {
    number: '01',
    title: 'SUBSCRIBE TO A PLAN:',
    desc: 'Choose between our Quarterly or Annual plan to get started. Once subscribed, you unlock access to our model portfolio and support system.',
    align: 'left',
  },
  {
    number: '02',
    title: 'KYC COMPLETION:',
    desc: 'If not already done, our team will assist you in completing a quick KYC process. It’s simple, digital, and takes just a few minutes.',
    align: 'right',
  },
  {
    number: '03',
    title: 'ONBOARDING:',
    desc: 'After KYC, you will receive stock names and allocation details for the current Velocity 3D portfolio. You’ll then invest directly from your own demat account. No funds are transferred to us.',
    align: 'left',
  },
  {
    number: '04',
    title: 'WEEKLY REBALANCING:',
    desc: 'Every Monday (or the next trading day in case of a holiday), you receive:\n• Updated buy/sell instructions via Telegram\n• A detailed research report via email',
    align: 'right',
  },
];

const StepsSection = () => {
  return (
    <section className="steps-wrapper">
      <div className="steps-heading">
        <h2>
          <span >Seamless Experience:</span>{' '}
          <span className="text-highlight">How It Works</span>
        </h2>
      </div>

      <div className="steps-container">
        {steps.map(({ number, title, desc, align }, i) => (
          <div
            key={i}
            className={`step-box ${align === 'left' ? 'left' : 'right'}`}
          >
            <div className="step-number">{number}</div>
            <div className="step-text">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
