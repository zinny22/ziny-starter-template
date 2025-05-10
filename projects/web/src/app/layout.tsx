import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { pretendard } from "../theme/font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>{children}</body>
    </html>
  );
}
