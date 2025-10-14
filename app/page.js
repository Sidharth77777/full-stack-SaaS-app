"use client"

import { useWebContext } from "./context/WebContext"

export default function Home() {
  const { theme, toggleTheme, mounted } = useWebContext();
  if (!mounted) {
    return (
      <div>
        <h1>NEXTJS APP</h1>
        {/* neutral placeholder until client mount to avoid mismatch */}
        <button aria-busy="true" disabled>
          Loading…
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>NEXTJS APP</h1>
      <button onClick={toggleTheme} aria-pressed={theme === "dark"}>
        {theme == "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
}