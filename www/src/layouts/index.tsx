import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Box, LayoutProvider, Paper, SiteLink } from "@website/shared-ui";
import { TopBar } from "../components/Layout/TopBar";

export const Layout: React.FC = ({ children, ...props }) => {
  const { site } = useStaticQuery<GatsbyTypes.RootLayoutQuery>(
    graphql`
      query RootLayout {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  return (
    <LayoutProvider siteMetadata={site.siteMetadata}>
      <TopBar siteTitle={site?.siteMetadata?.title} />
      <Paper
        as="main"
        margin="0 auto"
        maxW="1000px"
        padding={{ base: ".5rem", lg: 0 }}
      >
        {children}
      </Paper>
      <Box
        display="flex"
        flexDirection="row"
        fontSize="0.8rem"
        margin="0 auto"
        maxW="1000px"
        padding={{ base: ".5rem", lg: 0 }}
        justifyContent="space-around"
      >
        <Box
          display="inline-flex"
          cursor="pointer"
          ml={{
            base: 3,
            lg: 5,
          }}
          fontSize={{ base: "0.8rem", md: "0.95em" }}
          height="100%"
          placeItems="center"
        >
          <SiteLink
            href="/about/"
            color="gray.300"
            _hover={{ color: "gray.500" }}
            _active={{ color: "gray.800" }}
            mr={{
              base: 3,
              lg: 5,
            }}
          >
            About
          </SiteLink>
          <SiteLink
            href="#"
            color="gray.300"
            _hover={{ color: "gray.500" }}
            _active={{ color: "gray.800" }}
          >
            Footer link
          </SiteLink>
        </Box>
      </Box>
    </LayoutProvider>
  );
};

export default Layout;
