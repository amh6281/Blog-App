"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { ThemeContextType } from "@/types/types";
import React, { useContext } from "react";

const ThemeProvider = ({ children }: any) => {
  const theme = useContext<ThemeContextType | undefined>(ThemeContext);

  return <div className={theme?.theme}>{children}</div>;
};

export default ThemeProvider;
