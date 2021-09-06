import { extendTheme } from "@chakra-ui/react";
import { default as defaultTheme } from "@chakra-ui/theme";
import type { RecursiveObject } from "@chakra-ui/theme";
import { GlobalStyleProps } from "@chakra-ui/theme-tools";
import { SystemStyleObject } from "@chakra-ui/styled-system";
import { mergeWith, runIfFn } from "@chakra-ui/utils";
import { createBreakpoints } from "@chakra-ui/theme-tools";
/**
 * @example usage, e.g. gatsby-site/src/gatsby-plugin-chakra-ui/theme.ts
 *
 * import { theme as sharedTheme } from "@website/shared-ui";
 * import { mdxStyleObject } from "@website/gatsby-chakra-mdx";
 *
 * const theme = {
 *   ...sharedTheme,
 *   mdx: mdxStyleObject,
 * };
 */
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
});

export default extendTheme({
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
    body: `BlinkMacSystemFont,-apple-system,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
    heading: `"Merriweather","Georgia","Cambria","Times New Roman","Times",serif`,
    mono: `Inconsolata,JetBrains Mono,Menlo,Monaco,Consolas,Courier New,monospace;`,
  } as RecursiveObject<string>,
  styles: {
    global: (props: GlobalStyleProps): SystemStyleObject =>
      mergeWith({}, runIfFn(defaultTheme.styles.global, props), {
        "@media screen and (max-width: 60em)": {
          "html, body, #___gatsby, #gatsby-focus-wrapper": {
            height: "100%",
          },
          "#gatsby-focus-wrapper > div.css-0": {
            height: "calc(100% - 50px)",
          },
        },
      }) as SystemStyleObject,
  },
  textStyles: {
    heading: {
      textAlign: "center",
      fontWeight: "bold",
      letterSpacing: "-0.015em",
      lineHeight: "1.24",
      fontSize: { base: "2.75rem", md: "3.5rem" },
    },
    caps: {
      textTransform: "uppercase",
      fontSize: "sm",
      letterSpacing: "widest",
      fontWeight: "bold",
    },
  },
  breakpoints,
});
