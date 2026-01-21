import type { Metadata } from "next";
import Sidebar from "./components/Sidebar";
import CommandPalette from "./components/Cmd";
import { GoogleAnalytics } from "@next/third-parties/google";
import "prismjs/themes/prism-twilight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-typescript"; 
import "prismjs/components/prism-python";
import "prismjs/components/prism-json";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-bash";
import "./globals.css";

export const metadataBase = new URL("https://jame.li");

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

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
    description:
      "portfolio of james li — computer science at the university of waterloo.",
    url: "https://jame.li",
    siteName: "jame.li",
    images: [{ url: "https://jame.li/banner.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "james li",
    description:
      "portfolio of james li — computer science at the university of waterloo.",
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://jame.li" />
      </head>
      <body className="font-playfair bg-black text-darkBeige2">
        <div className="flex w-full lg:flex-row flex-col min-h-screen">
          <div className="lg:w-2/3 w-full transition-all duration-300">
            {children}
            <CommandPalette />
          </div>
          <div className="lg:w-1/3 w-full lg:h-screen h-auto lg:overflow-auto overflow-visible lg:border-l">
            <Sidebar />
          </div>
        </div>
        <GoogleAnalytics gaId="G-T54T8RQLW5" />
      </body>
    </html>
  );
}
