import Head from "next/head";

const SITE_TITLE = "My Blog";

export default function SEO({ title, description, image }) {
  const pageTitle = title ? `${title} • ${SITE_TITLE}` : SITE_TITLE;
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description || "My blog built with Next.js"} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description || ""} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
