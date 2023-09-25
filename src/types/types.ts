import { ReactNode } from "react";

export type ThemeContextType = {
  theme: string;
  toggle: () => void;
};

export type ThemeContextProviderProps = {
  children: ReactNode;
};

export type ImageProps = {
  withImage: boolean;
};

export type CatType = {
  _id: string;
  slug: string;
  title: string;
  img: string;
  posts: [];
}[];
