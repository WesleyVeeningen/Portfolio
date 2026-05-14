import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wesley Veeningen — Software Engineering Student",
  description: "Portfolio of Wesley Veeningen, 1st-year Informatica student at Hogeschool Rotterdam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
