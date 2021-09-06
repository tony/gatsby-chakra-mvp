import React from "react";

import { Box, SEO, Stack, Text } from "@website/shared-ui";

const IndexPage = (): React.ReactNode => (
  <>
    <SEO title="About website" />

    <Stack
      p={[3, 0, 0, 0]}
      textAlign="center"
      color="rgba(0, 0, 0, .8)"
      role="main"
    >
      <Text fontSize="4xl" w="100%">
        A page title
      </Text>
      <Box
        maxWidth="40rem"
        textAlign="justify"
        alignSelf="center"
        fontSize="1.2rem"
        fontWeight="normal"
      >
        <Text mt={4}>Some text</Text>
      </Box>
    </Stack>
  </>
);

export default IndexPage;
