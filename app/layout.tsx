import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LAX to Disneyland Transport Guide (2026) – ParkBase",
  description:
    "Compare the best ways to get from LAX to Disneyland. Shuttles, Uber, private transfers, train options, prices, travel time, and family-friendly recommendations.",
  keywords: [
    "LAX to Disneyland",
    "LAX to Anaheim",
    "Disneyland shuttle from LAX",
    "Uber from LAX to Disneyland",
    "Best way to get from LAX to Disneyland",
  ],
  openGraph: {
    title: "LAX to Disneyland Transport Guide – ParkBase",
    description:
      "Find the easiest, cheapest, and least stressful way to get from LAX to Disneyland. Compare shuttles, Uber, and private transfers.",
    url: "https://parkbase.vercel.app",
    siteName: "ParkBase",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}