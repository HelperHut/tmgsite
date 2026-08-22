"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is Third Man Gaming?",
    answer:
      "Third Man Gaming is a gaming channel focused on gameplay, horror games, challenges, and entertaining gaming content.",
  },
  {
    question: "What type of games do you play?",
    answer:
      "We mainly play horror, adventure, indie, and other interesting PC games.",
  },
  {
    question: "Where can I watch the videos?",
    answer:
      "You can watch all of our latest gaming videos on our YouTube channel.",
  },
  {
    question: "Can I suggest a game?",
    answer:
      "Yes! You can contact us or leave a comment on our YouTube videos with your game suggestion.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact us through the Contact page of this website.",
  },
  {
    question: "Do you upload regularly?",
    answer:
      "We try to upload new gaming content regularly. Subscribe to the channel so you don't miss new videos.",
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-16 text-zinc-950 dark:bg-[#08090d] dark:text-white">
      <div className="mx-auto w-full max-w-4xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red-500">
            Help Center
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            Find answers to the most common questions about Third Man Gaming,
            our content, games, and website.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/70 backdrop-blur-xl transition-colors dark:border-white/[0.08] dark:bg-white/[0.03]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200 text-lg transition-transform dark:border-white/[0.08] ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-2xl border border-zinc-200/80 bg-white/60 p-6 text-center dark:border-white/[0.08] dark:bg-white/[0.03]">
          <h2 className="text-lg font-bold">
            Still have a question?
          </h2>

          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Can't find what you're looking for? Get in touch with us.
          </p>

          <a
            href="/contact"
            className="mt-5 inline-flex rounded-xl bg-red-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Contact Us
          </a>
        </div>

      </div>
    </main>
  );
};

export default Page;