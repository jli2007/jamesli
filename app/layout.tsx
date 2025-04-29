import type { Metadata } from "next";
import CommandPalette from "./components/Cmd";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "jame.li",
  description: "portfolio.",
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
