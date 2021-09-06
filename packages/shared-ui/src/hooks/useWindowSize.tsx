import React from "react";
import { isBrowser, throttle } from "../utils";

const events = new Set<() => void>();
const onResize = () => events.forEach((fn) => fn());

export const useWindowSize = (
  options: { throttleMs?: number } = {}
): { width: number; height: number } => {
  if (!isBrowser()) {
    return { width: 0, height: 0 };
  }

  const { throttleMs = 100 } = options;
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  if (!isBrowser) {
    return { width: 0, height: 0 };
  }

  const handle = throttle(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, throttleMs);

  React.useEffect(() => {
    if (events.size === 0) {
      window.addEventListener("resize", onResize, true);
    }

    events.add(handle);

    return () => {
      events.delete(handle);

      if (events.size === 0) {
        window.removeEventListener("resize", onResize, true);
      }
    };
  }, []);

  return size;
};
