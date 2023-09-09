import { ReactNode } from "react";

export type ThemeContextType = {
  theme: string;
  toggle: () => void;
};

export type ThemeContextProviderProps = {
  children: ReactNode;
};
