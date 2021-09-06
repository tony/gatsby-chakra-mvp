import { chakra } from "@chakra-ui/react";
import { Box, BoxProps, Link as ChakraLink } from "@chakra-ui/layout";
import { Link as GatsbyLink } from "gatsby";
import React from "react";

import { notEmpty } from "../utils";

import type { RequireOnlyOne } from "../utils";

type ChakraLinkProps = React.ComponentProps<typeof ChakraLink>;
export type ISiteLinkProps = ChakraLinkProps & BoxProps;

export const SiteLink = React.forwardRef<HTMLAnchorElement, ISiteLinkProps>(
  ({ ...props }, ref) => {
    props.color = props.color ?? "gray.500";
    props._hover = props._hover ?? {};
    props._hover.color = props._hover.color ?? "gray.800"; // eslint-disable-line

    const internal = /^\.?\/(?!\/)/.test(props.href || "");

    if ((props.href || "").startsWith("#")) {
      return <chakra.a {...props} />;
    }
    const asProps: Pick<ChakraLinkProps, "ref"> & {
      as: typeof GatsbyLink;
      to?: string;
    } = { as: GatsbyLink, to: props.href, ref };
    return <ChakraLink {...asProps} {...props} />;
  }
);

interface ILinkObject {
  readonly slug: GatsbyTypes.Scalars["String"];
  readonly title: GatsbyTypes.Maybe<GatsbyTypes.Scalars["String"]>;
  readonly handle: GatsbyTypes.Maybe<GatsbyTypes.Scalars["String"]>;
}
type MyLinkObject = RequireOnlyOne<ILinkObject, "title" | "handle">;

type ILinkListType =
  | readonly GatsbyTypes.Maybe<MyLinkObject>[]
  | GatsbyTypes.Maybe<readonly GatsbyTypes.Maybe<MyLinkObject>[]>
  | undefined
  | null;

interface ILinkListProps {
  links: ILinkListType;
  Component?: React.FC;
  componentProps?: React.ComponentProps<typeof SiteLink>;
}

export const LinkList: React.FC<ILinkListProps> = ({
  links,
  Component = SiteLink,
  componentProps,
}) => {
  if (!links || links.length < 1) {
    return <></>;
  }
  return (
    <>
      {links.filter(notEmpty).map((obj, idx: number) => [
        idx > 0 && ", ",
        <Component href={obj.slug} key={idx} {...componentProps}>
          {obj.title || obj.handle}
        </Component>,
      ])}
    </>
  );
};

interface ILinkBoxProps {
  href: string;
  linkProps?: React.ComponentProps<typeof SiteLink>;
  boxProps?: BoxProps;
}

export const LinkBox: React.FC<ILinkBoxProps> = ({
  children,
  href,
  linkProps = {},
  boxProps = {},
}) => (
  <SiteLink
    href={href}
    width="100%"
    flexDirection={["initial", "initial", "initial", "initial"]}
    textAlign={["center", "initial", "initial", "initial"]}
    fontSize="0.8rem"
    {...linkProps}
  >
    <Box
      borderWidth="1px"
      display="flex"
      mb={[5, 1, 1, 1]}
      paddingTop={[2, 3, 3, 3]}
      paddingLeft={[2, 3, 3, 3]}
      paddingBottom={[2, 3, 3, 3]}
      paddingRight={[2, 3, 3, 3]}
      borderRadius="md"
      _hover={{ bg: "gray.200", cursor: "pointer" }}
      _active={{ bg: "gray.200" }}
      _focus={{ bg: "gray.100" }}
      _first={{
        mt: [2, 3, 3, 3],
      }}
      _last={{
        mb: 0,
      }}
      {...boxProps}
    >
      {children}
    </Box>
  </SiteLink>
);
