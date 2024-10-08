import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import ToastProvider from "@/components/UI/ToastContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cross Country Sneakers",
  description: "Your ultimate Sneaker destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider>
          <ShoppingCartProvider>
            <Navbar />
            {children}
          </ShoppingCartProvider>
          </ToastProvider>
        </body>
      </html>
    </>
  );
}
