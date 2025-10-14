"use client";

import React, { createContext, useContext, useMemo, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const WebContext = createContext(null);

export const WebProvider = ({ children }) => {
  const { theme, resolvedTheme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const current = resolvedTheme || theme || systemTheme || "light";
    setTheme(current == "light" ? "dark" : "light");
  };

  const value = useMemo(
    () => ({
      theme: resolvedTheme ?? theme ?? "light",
      setTheme,
      systemTheme,
      toggleTheme,
      mounted,
    }),
    [resolvedTheme, theme, setTheme, systemTheme, toggleTheme, mounted]
  );

  return <WebContext.Provider value={value}>{children}</WebContext.Provider>;
};

export const useWebContext = () => {
  return useContext(WebContext);
};
