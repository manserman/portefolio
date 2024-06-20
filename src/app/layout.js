import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portefolio Mohamadou Mansour",
  description: "Portefolio Mohamadou Mansour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
       <Head>
      
       <link rel="icon" href="favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
