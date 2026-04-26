import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohamadou Mansour Habibou Hamani — Ingénieur Logiciel & Fondateur d'Ascelyo",
  description:
    "Ingénieur logiciel spécialisé Backend Java, systèmes distribués et IA générative. Fondateur d'Ascelyo, coach de vie IA mobile.",
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
