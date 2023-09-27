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

export type PostType = {
  _id: string;
  createdAt: string;
  slug: string;
  title: string;
  desc: string;
  img: string;
  views: number;
  catSlug: string;
  userEmail: string;
};
