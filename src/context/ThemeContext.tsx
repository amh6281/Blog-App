"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: string;
  toggle: () => void;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light";
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<string>(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
