import type { Metadata } from "next";
import inter from "./ui/fonts/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARKA Shop | Welcome",
  description: "Proyecto tienda de ropa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
