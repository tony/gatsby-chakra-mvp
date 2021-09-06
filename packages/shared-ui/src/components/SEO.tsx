/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { getSrc, getImage } from "gatsby-plugin-image";
import { LayoutContext } from "@website/shared-ui";

export interface SEOProps extends React.ComponentProps<typeof GatsbySeo> {
  description?: string;
  lang?: string;
  meta?: HTMLMetaElement;
  title?: string;
  image?: string;
  imageData?: any;
  site?: {
    siteMetadata?: Partial<GatsbyTypes.SiteSiteMetadata>;
  };
}

const SEO: React.FC<SEOProps> = ({
  description,
  lang = "en",
  title,
  imageData,
  site,
  ...rest
}) => {
  const metaDescription = description || site?.siteMetadata?.description;
  const titlePostfix = site?.siteMetadata?.title
    ? ` - ${site?.siteMetadata?.title}`
    : "";
  const layoutContext = React.useContext(LayoutContext);

  const siteUrl =
    layoutContext?.state?.siteMetadata?.siteUrl ??
    site?.siteMetadata?.siteUrl ??
    "https://www.website.org";

  let ogImageUrl;
  const image = getImage(imageData);
  if (image && siteUrl) {
    const src = getSrc(imageData);
    if (src) {
      ogImageUrl = siteUrl.concat(src);
    }
  }

  return (
    <GatsbySeo
      language={lang}
      title={title}
      titleTemplate={`%s${titlePostfix}`}
      description={metaDescription}
      twitter={{
        handle: site?.siteMetadata?.author,
        cardType: "summary_large_image",
      }}
      openGraph={{
        ...(image && ogImageUrl
          ? {
              images: [
                {
                  url: ogImageUrl,
                  width: imageData.width,
                  height: imageData.height,
                },
              ],
            }
          : {}),
        type: "website",
        locale: "en_US",
        title,
        description,
      }}
      {...rest}
    />
  );
};

export default SEO;
