const SITE_URL = "https://manserman.github.io/portefolio/";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}sitemap.xml`,
    host: SITE_URL,
  };
}
