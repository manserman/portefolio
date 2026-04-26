import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://manserman.github.io/portefolio/";
const OG_IMAGE = "https://manserman.github.io/portefolio/og-cover.png";

const TITLE =
  "Mohamadou Mansour Habibou Hamani — Ingénieur Logiciel & Fondateur d'Ascelyo";
const DESCRIPTION =
  "Ingénieur logiciel spécialisé Backend Java, systèmes distribués et IA générative. Fondateur d'Ascelyo, coach de vie IA mobile (iOS · Android).";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Mohamadou Mansour Habibou Hamani", url: SITE_URL }],
  creator: "Mohamadou Mansour Habibou Hamani",
  publisher: "Mohamadou Mansour Habibou Hamani",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "profile",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Mohamadou Mansour Habibou Hamani — Portfolio",
    title: TITLE,
    description: DESCRIPTION,
    firstName: "Mohamadou",
    lastName: "Habibou Hamani",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Mohamadou Mansour Habibou Hamani — Ingénieur Logiciel & Fondateur d'Ascelyo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohamadou Mansour Habibou Hamani",
  alternateName: "M. Mansour",
  givenName: "Mohamadou Mansour",
  familyName: "Habibou Hamani",
  jobTitle: "Ingénieur Logiciel · Fondateur d'Ascelyo",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}img/photo_profil.JPG`,
  email: "mailto:mansourh923@gmail.com",
  worksFor: {
    "@type": "Organization",
    name: "Ascelyo",
    url: "https://ascelyo.app",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Université de Picardie Jules Verne — Master MIAGE",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  knowsAbout: [
    "Java",
    "Spring Boot",
    "NestJS",
    "PostgreSQL",
    "React Native",
    "Expo",
    "TypeScript",
    "OpenAI",
    "Anthropic Claude",
    "Whisper",
    "Architecture middleware",
    "Systèmes distribués",
    "AMQP",
    "REST",
    "Stripe",
    "Docker",
    "CI/CD",
  ],
  knowsLanguage: ["fr", "en"],
  sameAs: [
    "https://github.com/manserman",
    "https://ascelyo.app",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
