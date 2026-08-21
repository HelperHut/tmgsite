import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import Nav from "./component/Nav" 
const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
});

export const metadata: Metadata = {
  title: "Third Man Gaming",
  description:
    "Third Man Gaming — Horror, Action, Indie, Puzzle and Open World gameplay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${arimo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-arimo">
        <Nav/>
        {children}
      </body>
    </html>
  );
}