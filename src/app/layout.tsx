import type { Metadata } from "next";
import { site } from "@/data/content";
import { fontVariables, sans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${fontVariables} h-full antialiased`}>
      <body className={`${sans.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
