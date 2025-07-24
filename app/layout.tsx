import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOCUS, LDA - Consultoria Ambiental e Social",
  description: "LOCUS é uma empresa moçambicana especializada em Consultoria Ambiental e Social, Gestão de Negócios, Sistemas de Emergência e Extintores, normas ISO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}