"use client"

import BedtimeIcon from '@mui/icons-material/Bedtime';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="rounded-full border-purple-400/30 bg-black/30 backdrop-blur-sm hover:bg-purple-950/50 hover:text-white transition-all duration-300"
      >
        <span className="h-[1.2rem] w-[1.2rem]"></span>
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full border-purple-400/30 bg-black/30 backdrop-blur-sm hover:bg-purple-950/50 hover:text-white transition-all duration-300"
    >
      {theme === "dark" ? <WbSunnyIcon className="h-[1.2rem] w-[1.2rem]" /> : <BedtimeIcon className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}