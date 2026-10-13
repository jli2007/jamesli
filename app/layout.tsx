import type { Metadata } from "next";
import Sidebar from "./components/Sidebar";
import CommandPalette from "./components/Cmd";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next"
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jame.li"),
  title: {
    default: "james li",
    template: "%s · james li",
  },
  description:
    "james li studies computer science at the university of waterloo, specializing in backend, infra, and applied ai.",
  keywords: [
    "james li",
    "james li uw cs",
    "james li university of waterloo",
    "james li portfolio",
    "uw cs portfolio",
    "uwaterloo computer science",
    "waterloo cs",
    "james waterloo cs",
  ],
  openGraph: {
    title: "james li",
    description:
      "james li studies computer science at the university of waterloo, specializing in backend, infra, and applied ai.",
    url: "https://jame.li",
    siteName: "jame.li",
    images: [{ url: "https://jame.li/banner.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "james li",
    description:
      "james li studies computer science at the university of waterloo, specializing in backend, infra, and applied ai.",
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
        <Analytics />
      </body>
    </html>
  );
}
