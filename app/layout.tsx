import type { Metadata } from "next";
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
      <body
        className={"font-playfair"}
      >
        {children}
      </body>
    </html>
  );
}
