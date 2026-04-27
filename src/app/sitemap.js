const SITE_URL = "https://manserman.github.io/portefolio/";
const EN_URL = `${SITE_URL}en/`;

export default function sitemap() {
  const lastModified = new Date();
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          fr: SITE_URL,
          en: EN_URL,
          "x-default": SITE_URL,
        },
      },
    },
    {
      url: EN_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          fr: SITE_URL,
          en: EN_URL,
          "x-default": SITE_URL,
        },
      },
    },
  ];
}
