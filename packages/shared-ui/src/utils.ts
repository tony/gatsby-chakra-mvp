import React from "react";

export function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value !== null && value !== undefined;
}

// Thank you https://stackoverflow.com/a/49725198
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

export const isBrowser = (): boolean => typeof window !== "undefined";

export const useFocus = (): [React.RefObject<HTMLInputElement>, () => void] => {
  const htmlElRef = React.useRef<HTMLInputElement>(null);
  const setFocus = (): void => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

// Thank you: https://github.com/jaredpalmer/the-platform/blob/e66c72d/src/utils.tsx
// License MIT
export function throttle<T extends (...args: any[]) => void>(
  func: T,
  threshold = 250,
  scope?: unknown
): T {
  let last: number, deferTimer: number;
  return function (this: any, ...args: any) {
    const context: unknown = scope || this;

    const now = Date.now();
    if (last && now < last + threshold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = window.setTimeout(function () {
        last = now;
        func.apply(context, args);
      }, threshold);
    } else {
      last = now;
      func.apply(context, args);
    }
  } as T;
}
