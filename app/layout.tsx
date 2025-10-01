import type { Metadata } from "next";
import CommandPalette from "./components/Cmd";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "james li",
  description: "james li — computer science at the university of waterloo",
  keywords: [
    "james li",
    "james li uw",
    "james li cs",
    "james li portfolio",
    "james li university of waterloo",
    "uw cs portfolio",
  ],

  openGraph: {
    title: "james li",
    description: "james li's portfolio, computer science at the university of waterloo",
    url: "https://jame.li",
    siteName: "james li portfolio",
    images: [
      {
        url: "https://jame.li/banner.png",
        width: 1200,
        height: 630,
        alt: "james li — uw cs Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "james li",
    description: "james li's portfolio, computer science at the university of waterloo",
    images: ["https://jame.li/banner.png"],
    creator: "@james_siyuan_li",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/jsl.png" />
      <body className={"font-playfair"}>
        <div>{children}</div>
        <CommandPalette />
        <GoogleAnalytics gaId="G-T54T8RQLW5" />
      </body>
    </html>
  );
}
