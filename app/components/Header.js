"use client"

import { useWebContext } from "../context/WebContext"
import { Toggle } from "@/components/ui/toggle"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const { theme, toggleTheme, mounted } = useWebContext()

  if (!mounted) {
    return (
      <header className="flex items-center justify-between p-2 border-b border-border">
        <h1 className="text-lg font-semibold tracking-tight">NEXTJS APP</h1>
        <button
          aria-busy="true"
          disabled
          className="w-10 h-10 rounded-full bg-muted animate-pulse"
        />
      </header>
    )
  }

  const isDark = theme === "dark"

  return (
    <header className="flex items-center justify-between p-2 border-b border-border backdrop-blur-lg">
      <h1 className="text-lg font-semibold tracking-tight">NEXTJS APP</h1>

      <Toggle
        title="Toogle light and dark modes"
        onClick={toggleTheme}
        aria-pressed={isDark}
        className="relative cursor-pointer flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 
                   bg-muted hover:bg-accent border border-border shadow-sm group"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute flex items-center justify-center"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-yellow-400 transition-transform group-hover:rotate-12" />
            ) : (
              <Moon className="h-5 w-5 text-blue-500 transition-transform group-hover:-rotate-12" />
            )}
          </motion.div>
        </AnimatePresence>
      </Toggle>
    </header>
  )
}
