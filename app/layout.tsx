import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pamper U Pretty | Mobile Parties in Atlanta",
  description: "Mobile spa parties, sleepovers, picnics and creative celebrations brought to you in the Atlanta area.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
