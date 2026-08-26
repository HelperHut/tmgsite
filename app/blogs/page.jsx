"use client";

import React from "react";

const blogs = [
  {
    _id: 1,
    title: "How I Escaped Granny",
    shortDescription:
      "My experience escaping Granny's house and finding a way to survive.",
    imgs: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfbH-gqso7mi41BdWTyvf-KKulJ0rTe-PltinPY34yQ&s=10",
      "https://example.com/image2.jpg",
    ],
    description:
      "I had to explore Granny's house, find the necessary items, avoid Granny, and finally escape using the train.",
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
  },

  {
    _id: 2,
    title: "Evil Nun Sewer Escape",
    shortDescription:
      "Can I escape the terrifying school through the underground sewer?",
    imgs: [
      "https://example.com/evil-nun.jpg",
    ],
    description:
      "I entered the terrifying school and tried to find a way into the underground sewer while avoiding the Evil Nun.",
    specification: [
      {
        title: "Game",
        description: "Evil Nun: The Horror Game",
      },
      {
        title: "Platform",
        description: "PC",
      },
    ],
    faq: [
      {
        question: "What is the objective?",
        answer: "Escape the school through the sewer.",
      },
    ],
  },

  {
    _id: 3,
    title: "Cry of Fear Gameplay",
    shortDescription:
      "A terrifying journey through a dark and abandoned city.",
    imgs: [
      "https://example.com/cry-of-fear.jpg",
    ],
    description:
      "I explore a mysterious city while facing terrifying enemies and trying to discover what is happening.",
    specification: [
      {
        title: "Game",
        description: "Cry of Fear",
      },
      {
        title: "Genre",
        description: "Horror",
      },
    ],
    faq: [
      {
        question: "Is Cry of Fear a horror game?",
        answer: "Yes, it is a psychological horror game.",
      },
    ],
  },

  {
    _id: 4,
    title: "Squid Game: Unleashed",
    shortDescription:
      "I entered the deadly games and tried to survive every challenge.",
    imgs: [
      "https://example.com/squid-game.jpg",
    ],
    description:
      "I played different challenges inspired by Squid Game and tried my best to survive until the end.",
    specification: [
      {
        title: "Game",
        description: "Squid Game: Unleashed",
      },
      {
        title: "Platform",
        description: "PC / Mobile",
      },
    ],
    faq: [
      {
        question: "How many players can play?",
        answer: "The game supports large multiplayer matches.",
      },
    ],
  },

  {
    _id: 5,
    title: "Granny 3 Train Escape",
    shortDescription:
      "I discovered a train escape route inside Granny's terrifying house.",
    imgs: [
      "https://example.com/granny-train.jpg",
    ],
    description:
      "I searched the house for the items needed to activate the train and escape from Granny.",
    specification: [
      {
        title: "Game",
        description: "Granny 3",
      },
      {
        title: "Escape",
        description: "Train",
      },
    ],
    faq: [
      {
        question: "Can Granny stop the escape?",
        answer: "Yes, you need to be careful while preparing the train.",
      },
    ],
  },

  {
    _id: 6,
    title: "Eyes: The Horror Game",
    shortDescription:
      "Exploring a haunted building while trying to survive the monster.",
    imgs: [
      "https://example.com/eyes-horror.jpg",
    ],
    description:
      "I entered the haunted building to collect valuable items while trying to avoid the terrifying creature.",
    specification: [
      {
        title: "Game",
        description: "Eyes: The Horror Game",
      },
      {
        title: "Genre",
        description: "Horror",
      },
    ],
    faq: [
      {
        question: "Is the game scary?",
        answer: "Yes, the game contains horror and jump scares.",
      },
    ],
  },
];

const Page = () => {
  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-white sm:px-8 lg:px-12">
      
      {/* Header */}
      <section className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
            Third Man Gaming
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Gaming Blog
          </h1>

          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Gaming stories, horror experiences, escape challenges,
            walkthroughs and more from Third Man Gaming.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto mt-12 max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((item) => (
            <article
              key={item._id}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-zinc-900"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={item.imgs[0]}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-xl font-bold tracking-tight">
                  {item.title}
                </h2>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {item.shortDescription}
                </p>

                <button className="mt-5 text-sm font-bold text-red-500 transition hover:text-red-600">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;