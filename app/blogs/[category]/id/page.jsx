"use client"
import React, { useState } from "react";

const blog = {
  _id: 1,
  title: "How I Escaped Granny",
  shortDescription: "My experience escaping Granny's house.",
  imgs: [
    "https://static.wikia.nocookie.net/granny/images/e/ee/Grannyicon.png/revision/latest?cb=20190315152127",
    "https://example.com/image2.jpg",
  ],
  description:
    "This is the complete blog description. I had to explore Granny's house, find the necessary items, avoid Granny, and finally escape using the train.",
  specification: [
    {
      title: "Game",
      description: "Granny 3",
    },
    {
      title: "Platform",
      description: "PC",
    },
  ],
  faq: [
    {
      question: "What game is this?",
      answer: "Granny 3.",
    },
    {
      question: "How did you escape?",
      answer: "I escaped using the train.",
    },
  ],
};

const Page = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            Gaming Blog
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {blog.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {blog.shortDescription}
          </p>
        </div>
      </section>

      {/* Images */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {blog.imgs.map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-900"
            >
              <img
                src={img}
                alt={`${blog.title} ${index + 1}`}
                className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        {/* Main Description */}
        <article>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-red-500">
            Story
          </p>

          <h2 className="text-3xl font-bold tracking-tight">
            About This Gameplay
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
            {blog.description}
          </p>
        </article>

        {/* Specification */}
        <aside className="h-fit rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-900">
          <h2 className="text-lg font-bold">Specification</h2>

          <div className="mt-5 divide-y divide-zinc-200 dark:divide-white/10">
            {blog.specification.map((item, index) => (
              <div
                key={index}
                className="flex justify-between gap-5 py-4"
              >
                <span className="text-sm font-medium text-zinc-500">
                  {item.title}
                </span>

                <span className="text-right text-sm font-semibold">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-200 dark:border-white/10">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {blog.faq.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-900"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                  >
                    <span className="font-semibold">
                      {item.question}
                    </span>

                    <span
                      className={`text-xl transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-zinc-200 px-5 py-5 dark:border-white/10">
                      <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;