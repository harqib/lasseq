import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../lib/fontawesome.js"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lasseq",
  description: "Created with <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Marhey:wght@300..700&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>{children}</body>
      <footer>
        <p>&copy; 2024 Lasseq Tech. All rights reserved.</p>
      </footer>

    </html>
  );
}
