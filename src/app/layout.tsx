import type { Metadata } from "next";

import "@fontsource/bricolage-grotesque/500.css";
import "@fontsource/bricolage-grotesque/600.css";
import "@fontsource/bricolage-grotesque/700.css";
import "@fontsource/bricolage-grotesque/800.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";

import "./globals.css";

import Nav from "./components/Nav/Nav";

export const metadata: Metadata = {
  title: "Studio Kestrel | Architecture & Interiors",
  description:
    "Studio Kestrel is an independent architecture and interior design practice working on considered, materials-led spaces.",
  openGraph: {
    title: "Studio Kestrel | Architecture & Interiors",
    description:
      "Studio Kestrel is an independent architecture and interior design practice working on considered, materials-led spaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
