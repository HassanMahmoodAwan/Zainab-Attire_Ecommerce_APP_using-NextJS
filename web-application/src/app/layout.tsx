import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {NextUIProvider} from "@nextui-org/react";
import "./globals.css";
import Navbar from "@/components/Header-Footer/Header";
import Footer from "@/components/Header-Footer/Footer";


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zainab-Attire.pk",
  description: "Developed using Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider >
        <Navbar />
        {children}
        <Footer />
        </NextUIProvider>
        
      </body>
    </html>
  );
}
