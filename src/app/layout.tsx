import type React from "react";
import type { Metadata } from "next";
import { Creepster, Geist } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creepster",
});

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One Klick - A Horror Experience",
  description:
    "One Klick can unleash unspeakable horror. Coming soon to theaters.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${creepster.variable} antialiased`}>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
