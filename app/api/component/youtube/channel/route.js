import { NextResponse } from "next/server";
import { getChannel } from "@/app/component/program/youtube-api";

export async function GET() {
  try {
    const channel = await getChannel();

    if (!channel) {
      return NextResponse.json(
        { error: "Channel not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(channel);
  } catch (error) {
    console.error("Failed to fetch channel:", error);

    return NextResponse.json(
      { error: "Failed to fetch channel" },
      { status: 500 }
    );
  }
}