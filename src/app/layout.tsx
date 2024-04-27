//React
import type { Metadata } from "next";

//Fonts
import { Poppins } from "next/font/google";

//Css
import "./globals.css";

//Imports Contextos
import { AppWrapper } from '@/context/product'
import { AppContextCarrinho } from "@/context/contextCarrinho";
import { AppAuth } from "@/context/auth";

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
        <AppAuth>
          <AppWrapper>
            <AppContextCarrinho>
              {children}
            </AppContextCarrinho>
          </AppWrapper>
        </AppAuth>
      </body>
    </html>
  );
}
