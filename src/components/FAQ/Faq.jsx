import React, { useState } from "react";

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      q: "What is GameHub?",
      a: "GameHub is an online platform where you can browse, play, and manage games, track your progress, and compete on leaderboards."
    },
    {
      q: "How do I create an account?",
      a: 'Click the "Sign Up" button in the top right corner and follow the registration process.'
    },
    {
      q: "Is GameHub free to use?",
      a: "Yes! You can play most games for free. Some premium features may require a subscription."
    },
    {
      q: "How can I play games on GameHub?",
      a: 'Browse the games on the homepage or dashboard and click "Play Now" on any game you like.'
    },
    {
      q: "Can I track my scores and achievements?",
      a: "GameHub provides a personalized dashboard to track your game scores, achievements, and progress."
    },
    {
      q: "Are there leaderboards?",
      a: "Yes, you can see top players and compare your scores with others on the leaderboard section."
    },
    {
      q: "Can I play on mobile devices?",
      a: "Yes, GameHub is fully responsive and works on desktops, tablets, and smartphones."
    }
  ];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <div className="max-w-[1150px] mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

      {visibleFaqs.map((faq, index) => (
        <div key={index} className="collapse collapse-plus bg-base-100 border border-base-300 rounded-box mb-3">
          <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
          <div className="collapse-title font-semibold text-lg">{faq.q}</div>
          <div className="collapse-content text-sm">{faq.a}</div>
        </div>
      ))}

      {/* See More / See Less Button */}
      <div className="text-center mt-4">
        <button
          className="hover:scale-105 transition ease-in-out btn bg-[#2a82ff] text-[#ffff] py-5 px-6"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default FAQ;
