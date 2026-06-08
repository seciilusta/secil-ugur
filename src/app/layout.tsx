import type { Metadata } from "next";
import { fontVariables, sans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seçil & Uğur — Nişan & Düğün",
  description:
    "Seçil ve Uğur'un nişan ve düğün davetine hoş geldiniz. Kutlamalarımızın detayları burada.",
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
