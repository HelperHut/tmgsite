"use client";

import React, { useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_MAIL_SCRIPT_URL,
        {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Failed to send message.");
      }

      setStatus("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-12 text-zinc-900 dark:bg-[#08090d] dark:text-white">
      <div className="mx-auto w-full max-w-5xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red-500">
            Get In Touch
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Contact Me
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            Have a question, game suggestion, collaboration idea, or
            business inquiry? Feel free to get in touch.
          </p>
        </div>

  <div className="w-full">
  {/* Message Form */}
  <div
    className="
      w-full
      rounded-3xl
      border border-zinc-200/80
      bg-white/70
      p-6
      shadow-sm
      backdrop-blur-xl
      dark:border-white/[0.08]
      dark:bg-white/[0.03]
      md:w-[75%]
      mx-auto
    "
  >
    <h2 className="text-xl font-extrabold">
      Send a Message
    </h2>

    <form onSubmit={handleSubmit} className="mt-6 space-y-4">

      {/* Name */}
      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">
          Name
        </label>

        <input
          name="name"
          type="text"
          placeholder="Your name"
          required
          disabled={loading}
          className="
            w-full rounded-xl
            border border-zinc-200
            bg-white/70
            px-4 py-3
            text-sm outline-none
            transition
            placeholder:text-zinc-400
            focus:border-red-500
            disabled:cursor-not-allowed
            disabled:opacity-60
            dark:border-white/[0.08]
            dark:bg-white/[0.03]
          "
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">
          Email
        </label>

        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          disabled={loading}
          className="
            w-full rounded-xl
            border border-zinc-200
            bg-white/70
            px-4 py-3
            text-sm outline-none
            transition
            placeholder:text-zinc-400
            focus:border-red-500
            disabled:cursor-not-allowed
            disabled:opacity-60
            dark:border-white/[0.08]
            dark:bg-white/[0.03]
          "
        />
      </div>

      {/* Message */}
      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">
          Message
        </label>

        <textarea
          name="message"
          rows={6}
          placeholder="Write your message..."
          required
          disabled={loading}
          className="
            w-full resize-none rounded-xl
            border border-zinc-200
            bg-white/70
            px-4 py-3
            text-sm outline-none
            transition
            placeholder:text-zinc-400
            focus:border-red-500
            disabled:cursor-not-allowed
            disabled:opacity-60
            dark:border-white/[0.08]
            dark:bg-white/[0.03]
          "
        />
      </div>

      {/* Status */}
      {status && (
        <p
          className={`rounded-xl px-4 py-3 text-sm font-medium ${
            status.includes("successfully")
              ? "bg-green-500/10 text-green-600 dark:text-green-400"
              : "bg-red-500/10 text-red-600 dark:text-red-400"
          }`}
        >
          {status}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="
          w-full rounded-xl
          bg-red-600
          px-5 py-3
          text-sm font-bold text-white
          transition
          hover:bg-red-700
          hover:shadow-lg
          hover:shadow-red-600/20
          active:scale-[0.98]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading ? "Sending..." : "Send Message →"}
      </button>

    </form>
  </div>
</div>

        {/* Bottom */}
        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            For business inquiries, please use the email above.
          </p>
        </div>

      </div>
    </main>
  );
};

export default Page;