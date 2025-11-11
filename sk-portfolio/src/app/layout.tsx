import Image from "next/image";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shelby Kauth | Software Engineer",
  description:
    "Profile site for Shelby Kauth, created with Next.js just to show I can write Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <base href={process.env.PAGES_BASE_PATH + "/"} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <a
          className="github-fork-ribbon right-top before:bg-orange-400"
          data-ribbon="Under Construction"
        >
          Under Construction
        </a>
        <Header />

        <div className="flex-grow font-sans grid grid-rows-[20px_1fr_20px] justify-items-center p-8 py-10 sm:p-20 sm:py-4">
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            {children}
          </main>
        </div>

        <footer className="flex gap-1 flex-wrap items-center justify-center sticky bottom-0 p-6 bg-black">
          &copy; 2025 Shelby Kauth | Built with
          <Image
            className="dark:invert"
            src="images/next.svg"
            alt="Next.js logo"
            width={54}
            height={16}
          />
          |<Link href="/about/attributions">Attributions</Link>
        </footer>
      </body>
    </html>
  );
}
