import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppWrapper } from '@/context/page'

const poppins = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "I-Store",
  description: "Projeto I-Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href='/icon.png' />
      </head>
      <body className={`${poppins.className} bg-[#0B0B0B]`}>
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
