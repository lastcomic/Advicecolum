import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Old Age University — The Perfect Gift for Anyone Turning 50, 55, or 60",
  description: "Funnier than a card. More honest than a bottle of wine. Something they'll actually keep. The official welcome packet for everyone who kept having birthdays.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
