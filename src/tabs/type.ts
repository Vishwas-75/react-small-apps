import { PropsWithChildren } from "react";

interface TabContextStore<T> {
  active: T;
  dispatch: (value: T) => void;
}

interface TabsProps<T> extends PropsWithChildren {
  defaultindex: T;
  orientation?: "horizontal" | "vertical";
}

export type { TabContextStore, TabsProps };
