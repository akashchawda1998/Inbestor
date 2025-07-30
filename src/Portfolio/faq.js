import React, { useState } from 'react';

const faqData = [
  {
    question: 'What is a model portfolio?',
    answer: 'A ready-made basket of researched stocks with allocations and rebalance updates.',
  },
  {
    question: 'What is rebalancing?',
    answer: 'It’s like tuning your car. Weekly updates help align your holdings with current momentum signals.',
  },
  {
    question: 'Do I need to give access to my funds or account?',
    answer: 'Not at all. You manage your own account. We only share research.',
  },
  {
    question: 'What happens if markets are falling?',
    answer: 'Velocity 30 transitions into liquid debt ETFs for capital protection. While all investing carries risk, we aim to minimize drawdowns.',
  },
  {
    question: 'Can I exit or adjust anytime?',
    answer: 'Yes. You’re always in control. You can size-up, size-down, or exit anytime.',
  },
  {
    question: 'What does size-up or size-down mean?',
    answer: 'Increase or reduce your invested capital. For example: Going from ₹1 lakh to ₹1.5 lakh = size-up.',
  },
  {
    question: 'Is this SEBI-compliant?',
    answer: 'Yes. We’re a SEBI-registered Research Analyst (Reg. No: INH00001xxx).',
  },
  {
    question: 'How much time does it take?',
    answer: 'Onboarding takes 15–20 minutes once. Weekly rebalancing usually takes 5–10 minutes.',
  },
  {
    question: 'What is the KYC process?',
    answer: 'You’ll receive a PDF disclaimer and a Google Form. That’s it.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-wrapper">
      <h2 className="faq-heading">Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggle(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <span className="faq-toggle">{openIndex === index ? '▾' : '▸'}</span>
            </div>
            {openIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="faq-cta">
        <div className="cta-text">
          IF YOU'RE READY TO GROW, EVOLVE, AND TRADE WITH STRUCTURE AND SOUL.
        </div>
        <button className="cta-button">JOIN US</button>
      </div>
    </div>
  );
};

export default FAQSection;
