"use client";

export default function YouTubeSubscribe({ id }) {
console.log(id);

  return (
    <a
      href={`https://www.youtube.com/channel/${id}?sub_confirmation=1`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white"
    >
      Subscribe
    </a>
  );
}