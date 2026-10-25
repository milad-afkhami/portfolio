"use client";

import { useEffect, useState } from "react";

export default function usePageDarkMode(): boolean {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    function update() {
      const root = document.documentElement;
      const body = document.body;
      const theme = body.dataset.theme ?? root.dataset.theme;
      if (theme === "dark" || theme === "light") {
        setDark(theme === "dark");
      } else if (root.classList.contains("dark") || body.classList.contains("dark")) {
        setDark(true);
      } else {
        const scheme = getComputedStyle(body).colorScheme;
        setDark(scheme === "dark" || (scheme !== "light" && preference.matches));
      }
    }
    update();
    const observer = new MutationObserver(update);
    for (const element of [document.documentElement, document.body]) {
      observer.observe(element, { attributes: true, attributeFilter: ["class", "data-theme", "style"] });
    }
    preference.addEventListener("change", update);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", update);
    };
  }, []);

  return dark;
}
