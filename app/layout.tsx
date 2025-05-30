import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Company } from "./components/globals";
import "./globals.css";
import "./styles/popup.scss";
import "./styles/button.scss";
import "./fonts/font-proxima-nova/font-proxima-nova.css";
import "./fonts/font-aspira/font-aspira.css";
import "./styles/fonts.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cozywalls.com"),
  title:
    "Energy-Efficient Spray Foam for Homes & Businesses - Cozy Wall Foam Insulation",
  description:
    "Upgrade your home or commercial space with Cozy Wall Foam Insulation — providing high-performance injection foam insulation that boosts comfort, cuts energy bills, and adds long-lasting value.",
  openGraph: {
    title:
      "Energy-Efficient Spray Foam for Homes & Businesses - Cozy Wall Foam Insulation",
    description:
      "Upgrade your home or commercial space with Cozy Wall Foam Insulation — providing high-performance injection foam insulation that boosts comfort, cuts energy bills, and adds long-lasting value.",
    url: `${Company}/`, // Replace with actual URL
    images: [
      {
        url: `${Company}/photos/Cozy-Wall-Foam-Insulation.jpg`,
        width: 1200,
        height: 630,
        alt: "Energy-Efficient Spray Foam for Homes & Businesses - Cozy Wall Foam Insulation",
      },
    ],
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
