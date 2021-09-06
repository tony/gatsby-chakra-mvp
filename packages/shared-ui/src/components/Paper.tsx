import React from "react";
import { SystemStyleObject, useStyleConfig } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import { mode } from "@chakra-ui/theme-tools";

const theme: SystemStyleObject = {
  baseStyle: {
    borderRadius: "4px",
    borderLeftRadius: "4px",
    borderWidth: "0px",
    boxShadow: "0px",
  },
  variants: {
    raised: {
      boxShadow: mode(
        "0 1.6px 3.6px 0 rgba(255, 255, 255, 0.132), 0 0.3px 0.9px 0 rgba(255, 255, 255, 0.108);",
        "0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)"
      ),
      background: mode("#fff", "#fff"),
    },
  },
};

export const Paper = ({
  variant = "raised",
  ...props
}: {
  variant?: "raised";
} & React.ComponentProps<typeof Box>): React.ReactElement => {
  const styles = useStyleConfig("Paper", {
    variant,
    styleConfig: theme,
  });

  return <Box sx={styles} {...props} />;
};

export default Paper;
