import React from "react";
import { isBrowser, throttle } from "../utils";

export const useWindowScrollPosition = ({
  throttleMs = 100,
}: { throttleMs?: number } = {}): { x: number; y: number } => {
  if (!isBrowser()) {
    return { x: 0, y: 0 };
  }

  const [scroll, setScroll] = React.useState({
    x: window.pageXOffset,
    y: window.pageYOffset,
  });

  const handle = throttle(() => {
    setScroll({
      x: window.pageXOffset,
      y: window.pageYOffset,
    });
  }, throttleMs);

  React.useEffect(() => {
    window.addEventListener("scroll", handle);

    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, []);

  return scroll;
};
