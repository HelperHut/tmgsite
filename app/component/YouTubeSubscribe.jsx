"use client";

import Script from "next/script";

export default function YouTubeSubscribe({ CHANNEL_ID }) {
  if (!CHANNEL_ID) {
    return null;
  }

  return (
    <>
      <Script
        src="https://apis.google.com/js/platform.js"
        strategy="afterInteractive"
      />

      <div suppressHydrationWarning>
        <div
          className="g-ytsubscribe"
          data-channelid={CHANNEL_ID}
          data-layout="default"
          data-count="default"
        />
      </div>
    </>
  );
}