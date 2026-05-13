import { Helmet } from "react-helmet";
import siteData from "../data/site.json";

const SEO = ({
  title,
  description,
  keywords,
  image = "/images/logo/logo.png",
  url = "",
  type = "website",
}) => {
  const siteUrl = siteData.seo.siteUri;

  return (
    <Helmet>
      <title>{title || siteData.seo.siteTitle}</title>
      <meta
        name="description"
        content={description || siteData.seo.description}
      />
      <meta
        name="keywords"
        content={keywords || siteData.seo.keywords.join(", ")}
      />
      <meta name="author" content={siteData.seo.author} />

      <meta property="og:title" content={title || siteData.seo.siteTitle} />
      <meta
        property="og:description"
        content={description || siteData.seo.description}
      />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`${siteUrl}${url}`} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content="CORVEX" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteData.seo.siteTitle} />
      <meta
        name="twitter:description"
        content={description || siteData.seo.description}
      />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      <link rel="canonical" href={`${siteUrl}${url}`} />

      <html lang="fa" dir="rtl" />
      <meta charSet="utf-8" />
    </Helmet>
  );
};

export default SEO;
