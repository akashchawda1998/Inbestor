import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Complete the Screening Round',
    desc1: '• A short evaluation of your mindset, responsibility, and willingness to grow.',
    desc2: '• We want committed, focused traders — not just anyone.',
    align: 'left',
  },
  {
    number: '02',
    title: 'Pay the Joining Fee',
    desc1: '',
    desc2: '',
    align: 'right',
  },
  {
    number: '03',
    title: 'ONBOARDING:',
    desc1: '• Build a strong foundation',
    desc2: '• Align with the mindset and language of the tribe',
    align: 'left',
  },
  {
    number: '04',
    title: 'WEEKLY REBALANCING:',
    desc1: '• Welcome kit, community access, sessions, and more',
    desc2: '',
    align: 'right',
  },
];

const HowToJoinPath = () => {
  return (
    <section className="howto-section">
      <div className="howto-heading">
        <h2>
          <span className="howto-subtitle">How to join the</span>{' '}
          <span className="howto-highlight">Inbestors Community</span>
        </h2>
        <div className="howto-divider" />
      </div>

      <div className="howto-steps">
        {steps.map(({ number, title, desc1, desc2, align }, i) => {
          const isLeft = align === 'left';
          return (
            <div key={i} className={`step ${isLeft ? 'left' : 'right'}`}>
              <div className="step-number">{number}</div>
              <div className="step-text">
                <h3>{title}</h3>
                <p>{desc1}</p>
                <p>{desc2}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="howto-footer">
        <p>
          This isn’t about exclusion — it’s about ensuring every member enters with equal seriousness
          and intent so we can grow together, faster and stronger.
        </p>
      </div>
    </section>
  );
};

export default HowToJoinPath;
