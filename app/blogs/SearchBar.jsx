"use client";

import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    console.log("Searching:", search);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="mx-auto w-full max-w-3xl px-4 sm:px-0"
    >
      <div
        className="
          group relative flex items-center
          overflow-hidden rounded-2xl
          border border-zinc-200/80
          bg-white/90
          p-1.5
          shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)]
          backdrop-blur-xl
          transition-all duration-300

          hover:border-zinc-300
          hover:shadow-[0_15px_50px_-15px_rgba(0,0,0,0.2)]

          focus-within:border-red-500
          focus-within:shadow-[0_15px_50px_-15px_rgba(239,68,68,0.25)]

          dark:border-white/10
          dark:bg-zinc-900/90
          dark:hover:border-white/20
        "
      >
        {/* Search Icon */}
        <div
          className="
            flex h-12 w-12 shrink-0
            items-center justify-center
            text-zinc-400
            transition-colors
            group-focus-within:text-red-500
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
            />
          </svg>
        </div>

        {/* Input */}
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search blogs..."
          className="
            h-12 min-w-0 flex-1
            bg-transparent
            px-2
            text-sm font-medium
            text-zinc-900
            outline-none
            placeholder:text-zinc-400

            dark:text-white
            dark:placeholder:text-zinc-500
          "
        />

        {/* Search Button */}
        <button
          type="submit"
          className="
            flex h-12 shrink-0
            items-center gap-2
            rounded-xl
            bg-red-500
            px-5
            text-sm font-bold
            text-white
            shadow-lg shadow-red-500/20
            transition-all duration-200

            hover:bg-red-600
            hover:shadow-red-500/30
            active:scale-[0.97]

            sm:px-6
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
            />
          </svg>

          <span className="hidden sm:inline">
            Search
          </span>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;