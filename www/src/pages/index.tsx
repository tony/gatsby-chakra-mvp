import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import {
  Avatar,
  Box,
  Card,
  chakra,
  notEmpty,
  SEO,
  SimpleGrid,
  SiteLink,
} from "@website/shared-ui";

const TheoryItem: React.FC<{ name: string; theoryName: string }> = ({
  name,
  theoryName,
}) => {
  return (
    <Card
      flexWrap={"initial"}
      marginBottom={2}
      display="flex"
      textAlign="left"
      role="listitem"
      variant="elevated"
    >
      <Avatar title={name} mr={10} borderRadius=".25rem" alt={name} />
      <chakra.span>
        <SiteLink
          href={"#"}
          fontSize={{ base: ".9rem", md: ".95rem", lg: "1rem" }}
          justifyContent="space-between"
        >
          {theoryName}
        </SiteLink>
        <div>{name} </div>
      </chakra.span>
    </Card>
  );
};

const TheoryView: React.FC<ITheoryViewProps> = () => {
  const theories = [
    { fullName: "John Doe", name: "My theory" },
    { fullName: "John Apple Seed", name: "Quantum physics" },
    { fullName: "Abraham Lincoln", name: "Another theory" },
  ];

  return (
    <>
      <SEO title="No Title" description="Description" />

      <SimpleGrid
        minChildWidth={["100%", "330px"]}
        spacing={[0, 6]}
        maxW="1000px"
        margin="0 auto"
        paddingX={{ base: 0, sm: "1rem" }}
        paddingBottom={{ base: "0.5rem", sm: "1rem" }}
        _last={{ paddingBottom: 0 }}
      >
        {theories.map((theory, index2: number) => (
          <TheoryItem
            name={theory.name}
            fullName={theory.fullName}
            key={index2}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default TheoryView;
