import type { Theme as BaseTheme, RecursiveObject } from "@website/shared-ui";
import { extendTheme, theme as sharedTheme } from "@website/shared-ui";

export default extendTheme({
  ...sharedTheme,
  fonts: {
    ...(sharedTheme as BaseTheme).fonts,
  } as RecursiveObject<string>,
});
