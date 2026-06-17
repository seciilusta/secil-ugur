import type { Metadata } from "next";
import { fontVariables, sans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seçil & Uğur — Nişan Daveti",
  description:
    "Seçil ve Uğur'un nişan davetine hoş geldiniz. Kutlama detaylarını burada bulabilirsiniz.",
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
