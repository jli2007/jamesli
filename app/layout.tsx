import type { Metadata } from "next";
import CommandPalette from "./components/Cmd";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadataBase = new URL("https://jame.li");

export const metadata: Metadata = {
  title: "james li",
  description:
    "james li — computer science at the university of waterloo. full-stack and ai engineer. building cool software and posting on social media.",
  keywords: [
    "james li",
    "james li uw",
    "james li uw cs",
    "james li university of waterloo",
    "james li portfolio",
    "uw cs portfolio",
    "uwaterloo computer science",
  ],
  alternates: {
    canonical: "https://jame.li",
  },
  openGraph: {
    title: "james li",
    description: "portfolio of james li — computer science at the university of waterloo.",
    url: "https://jame.li",
    siteName: "jame.li",
    images: [{ url: "https://jame.li/banner.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "james li",
    description: "portfolio of james li — computer science at the university of waterloo.",
    images: ["https://jame.li/banner.png"],
  },
  icons: {
    icon: "/jsl.png",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://jame.li" />
      </head>

      <body className={"font-playfair"}>
        <div>{children}</div>
        <CommandPalette />
        <GoogleAnalytics gaId="G-T54T8RQLW5" />
      </body>
    </html>
  );
}