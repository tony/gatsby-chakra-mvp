import React from "react";
import { isBrowser } from "../utils";

export const useIsomorphicLayoutEffect = isBrowser()
  ? React.useLayoutEffect
  : React.useEffect;
