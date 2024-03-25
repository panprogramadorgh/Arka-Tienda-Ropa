import type { Metadata } from "next";
import poppins from "./ui/fonts/poppins";
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
