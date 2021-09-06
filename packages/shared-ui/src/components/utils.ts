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
