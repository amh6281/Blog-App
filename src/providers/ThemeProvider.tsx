"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { ThemeContextProviderProps, ThemeContextType } from "@/types/types";
import React, { useContext } from "react";

const ThemeProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const theme = useContext<ThemeContextType | undefined>(ThemeContext);

  return <div className={theme?.theme}>{children}</div>;
};

export default ThemeProvider;
