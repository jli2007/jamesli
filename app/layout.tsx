import type { Metadata } from "next";
// import CommandPalette from "./components/Cmd";
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
        {/* <CommandPalette /> */}
      </body>
    </html>
  );
}
