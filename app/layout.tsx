import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taqreebgah — Event Venues & Planners in Karachi",
  description: "Discover banquet halls, marquees, restaurants, farmhouses and event planners across Karachi for every celebration.",
  openGraph: {
    title: "Taqreebgah — Event Venues & Planners in Karachi",
    description: "Discover banquet halls, marquees, restaurants, farmhouses and event planners across Karachi for every celebration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  // Favicons come from app/icon.png and app/apple-icon.png (generated from the logo).
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@400;500&display=swap"
        />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
