import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppWrapper } from '@/context/product'
import { AppContextCarrinho } from "@/context/contextCarrinho";

const poppins = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "IStore",
  description: "Projeto IStore",
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
      <body className={`${poppins.className} bg-[#0B0B0B] scrollbar-hide`}>
        <AppWrapper>
          <AppContextCarrinho>
            {children}
          </AppContextCarrinho>
        </AppWrapper>
      </body>
    </html>
  );
}
