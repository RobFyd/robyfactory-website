import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const basePath = process.env.NODE_ENV === "production" ? "/robyfactory-website" : "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RobyFactory | Custom 3D Printing & CAD Design",
  description:
    "Custom 3D printing, prototypes, small-batch production and CAD design from RobyFactory in Worcester, UK.",
  icons: {
    icon: `${basePath}/RFLogo192.png`,
    shortcut: `${basePath}/RFLogo192.png`,
    apple: `${basePath}/RFLogo192.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
