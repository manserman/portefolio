const SITE_URL = "https://manserman.github.io/portefolio/";
const EN_URL = `${SITE_URL}en/`;
const OG_IMAGE = `${SITE_URL}og-cover.png`;

const TITLE =
  "Mohamadou Mansour Habibou Hamani — Software Engineer";
const DESCRIPTION =
  "Software engineer specialized in Java backend, distributed systems and generative AI. End-to-end design of mobile products and cloud platforms.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: EN_URL,
    languages: {
      "fr-FR": SITE_URL,
      "en-US": EN_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    alternateLocale: "fr_FR",
    url: EN_URL,
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
        alt: "Mohamadou Mansour Habibou Hamani — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function EnLayout({ children }) {
  return children;
}
