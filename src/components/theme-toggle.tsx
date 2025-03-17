"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return <div className="w-12 h-6 rounded-full bg-purple-800/30 animate-pulse"></div>
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative flex items-center justify-between w-12 h-6 rounded-full px-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
        theme === "dark" ? "bg-purple-900 border border-purple-700" : "bg-purple-200 border border-purple-300"
      }`}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.15 }}
          className="absolute left-1"
        >
          <Moon className={`h-4 w-4 ${theme === "light" ? "text-purple-700" : "text-purple-500/0"}`} />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className="absolute right-1"
        >
          <Sun className={`h-4 w-4 ${theme === "dark" ? "text-yellow-300" : "text-yellow-500/0"}`} />
        </motion.div>
      </AnimatePresence>

      <motion.div
        className={`absolute w-4 h-4 rounded-full transition-colors ${theme === "dark" ? "bg-purple-400" : "bg-white"}`}
        animate={{
          x: theme === "dark" ? 0 : 24,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </motion.button>
  )
}

