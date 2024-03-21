import "./globals.css";
import type { Metadata } from "next";
import { ValuesProvider } from "./context/ValuesContext";
import { Inter } from "next/font/google";
import { BgBox } from "./mainpage/HomePageStyle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skillwill Quiz",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ValuesProvider>
        <head>
          <meta name="robots" content="index" />
        </head>
        <body className={inter.className}>
          <BgBox>{children}</BgBox>
        </body>
      </ValuesProvider>
    </html>
  );
}