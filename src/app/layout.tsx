import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="antialiased max-w-2xl mb-40 flex flex-col md:flex-col mx-4 mt-8 lg:mx-auto">
        <Nav />
        {children}
        </div>
        </body>
    </html>
  );
}