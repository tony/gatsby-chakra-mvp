import React from "react";
import { Box } from "@chakra-ui/layout";
import {
  SystemStyleObject,
  useBreakpointValue,
  useStyleConfig,
} from "@chakra-ui/react";

const theme: SystemStyleObject = {
  baseStyle: {
    _hover: { bg: "gray.100" },
    _active: { bg: "gray.200" },
    _focus: { bg: "gray.200" },
    borderRadius: "4px",
    borderLeftRadius: "4px",
    borderWidth: "0px",
    boxShadow: "0px",
  },
  variants: {
    elevated: {
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
    outlined: {
      borderColor: "rgba(0, 0, 0, 0.12)",
      borderWidth: "1px",
      transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
    full: {
      borderX: 0,
      borderBottom: "1px rgba(0, 0, 0, 0.12) solid",
      _first: {
        borderTop: "1px rgba(0, 0, 0, 0.12) solid",
      },
      _last: {
        borderBottom: 0,
      },
      borderRadius: 0,
      borderLeftRadius: 0,
      paddingY: "1rem",
      margin: 0,
      transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
    fullFlush: {
      borderX: 0,
      borderBottom: "1px rgba(0, 0, 0, 0.35) solid",
      _last: {
        borderBottom: 0,
      },
      borderRadius: 0,
      borderLeftRadius: 0,
      paddingY: 0,
      margin: 0,
      transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
    searchResult: {
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      "&.selected": {
        backgroundColor: "var(--chakra-colors-gray-100)",
      },
      _focusVisible: {
        outline: "none",
      },
      mark: {
        backgroundColor: "initial",
        textColor: "var(--chakra-colors-blue-300)",
      },
      "&:hover": {
        mark: {
          textDecoration: "underline",
        },
      },
    },
  },
};

export type CardVariants =
  | "outlined"
  | "full"
  | "fullFlush"
  | "elevated"
  | "searchResult";

export const Card = ({
  variant = "elevated",
  ...props
}: {
  variant?: CardVariants;
} & React.ComponentProps<typeof Box>): React.ReactElement => {
  const styles = useStyleConfig("Card", {
    variant,
    styleConfig: theme,
  });

  return <Box sx={styles} {...props} />;
};

export const ResponsiveCard = (
  props: React.ComponentProps<typeof Card>
): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const responsiveVariant = useBreakpointValue({
    base: "full",
    sm: "elevated",
    md: "elevated",
    lg: "elevated",
    xl: "elevated",
  }) as CardVariants;

  return <Card {...props} variant={responsiveVariant} />;
};

export default Card;
