import React from "react";

import { Box } from "@website/shared-ui";
import { Link } from "gatsby";
import { GatsbyImage as Img, getImage } from "gatsby-plugin-image";
import type { IGatsbyImageData } from "gatsby-plugin-image";

const MenuItem: React.FC<React.ComponentProps<typeof Box>> = ({
  children,
  ...props
}) => (
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
    color="white"
    _hover={{ color: "white" }}
    {...props}
  >
    {children}
  </Box>
);

interface IProps {
  siteTitle?: string;
}

export const TopBar: React.FC<IProps> = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      bg="blue.700"
      px={{ base: 0, md: 5 }}
      mb={{ base: 0, lg: 5 }}
      h="50px"
      position="sticky"
      top={0}
      as="header"
      role="navigation"
      alignItems="center"
      placeItems="center"
      zIndex="5"
    >
      <Box
        maxW="1000px"
        margin="0 auto"
        display="flex"
        flex="auto"
        height="100%"
        alignItems="center"
      >
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about/">About</Link>
        </MenuItem>
      </Box>
    </Box>
  );
};

export default TopBar;
