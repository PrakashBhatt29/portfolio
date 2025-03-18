"use client"

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail'; // Add missing Mail icon
import XIcon from '@mui/icons-material/X';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { useTheme } from "next-themes"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Link from "next/link"

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-white dark:from-black dark:via-purple-950/70 dark:to-black text-foreground relative overflow-hidden transition-colors duration-500">
      {/* Radiant background elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-600/5 dark:bg-purple-600/10 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-fuchsia-600/5 dark:bg-fuchsia-600/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-3xl"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        ></motion.div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 dark:opacity-10"></div>
      </motion.div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="container relative mx-auto px-6 py-24 lg:px-8 z-10">
        <motion.div
          className="flex flex-col items-start gap-8 lg:flex-row lg:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-purple-400/50 lg:h-40 lg:w-40 shadow-[0_0_25px_rgba(168,85,247,0.3)] dark:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-500"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image src="/profile.jpg" alt="Profile" fill className="object-cover" priority />
          </motion.div>
          <div className="flex-1 space-y-6">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1
                className={`text-4xl font-bold tracking-tight lg:text-3xl ${
                  theme === "dark"
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-fuchsia-200"
                    : "bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-purple-700 to-fuchsia-700"
                } transition-all duration-500`}
              >
                Prakash Bhatt
              </h1>
              <motion.div
                className="h-1 w-20 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              ></motion.div>
            </motion.div>
            <motion.p
              className="text-lg text-purple-800 dark:text-purple-200 max-w-2xl leading-relaxed transition-colors duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A self-taught developer passionate about building innovative solutions and creating impactful user
              experiences through clean, efficient code.
            </motion.p>
            <motion.div className="flex gap-4" variants={container} initial="hidden" animate="show">
              <motion.div variants={item}>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open('https://github.com/PrakashBhatt29', "_blank")}
                    className = {`rounded-full transition-all duration-300 ${
                        theme === "dark"
                          ? "border-purple-400/30 bg-purple-950/30 backdrop-blur-sm hover:bg-purple-800/30 hover:text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                          : "border-purple-300 bg-white/80 backdrop-blur-sm hover:bg-purple-100 hover:text-purple-800 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                      }`}
                    >
                    <GitHubIcon className="h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div variants={item}>
                  <Button
                    variant="outline"
                    onClick={() => window.open('https://www.linkedin.com/in/prakashdevs/', "_blank")}
                    size="icon"
                    className = {`rounded-full transition-all duration-300 ${
                        theme === "dark"
                          ? "border-purple-400/30 bg-purple-950/30 backdrop-blur-sm hover:bg-purple-800/30 hover:text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                          : "border-purple-300 bg-white/80 backdrop-blur-sm hover:bg-purple-100 hover:text-purple-800 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                      }`}
                    >
                    <LinkedInIcon className="h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div variants={item}>
                  <Button
                    variant="outline"
                    onClick={() => window.open('https://x.com/_prakashbhatt', "_blank")}
                    size="icon"
                    className = {`rounded-full transition-all duration-300 ${
                        theme === "dark"
                          ? "border-purple-400/30 bg-purple-950/30 backdrop-blur-sm hover:bg-purple-800/30 hover:text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                          : "border-purple-300 bg-white/80 backdrop-blur-sm hover:bg-purple-100 hover:text-purple-800 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                      }`}
                    >
                    <XIcon className="h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div variants={item}>
                  <Button
                    variant="outline"
                    onClick={()=> window.open('mailto:prakashxdev@gmail.com', "_blank")}
                    size="icon"
                    className = {`rounded-full transition-all duration-300 ${
                        theme === "dark"
                          ? "border-purple-400/30 bg-purple-950/30 backdrop-blur-sm hover:bg-purple-800/30 hover:text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                          : "border-purple-300 bg-white/80 backdrop-blur-sm hover:bg-purple-100 hover:text-purple-800 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                      }`}
                    >
                    <MailIcon className="h-5 w-5" />
                  </Button>
                </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.section
        id='experience'
          className="mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <motion.h2
              className="text-2xl font-semibold lg:text-3xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Work Experience
            </motion.h2>
            <motion.div
              className={`h-px flex-1 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-400/30 to-transparent"
                  : "bg-gradient-to-r from-purple-400/50 to-transparent"
              } transition-colors duration-500`}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            ></motion.div>
          </div>
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            animate={isLoading ? "hidden" : "show"}
          >
            {projects.map((project) => (
              <motion.div key={project.org} variants={item}>
                <Card
                  className={`group overflow-hidden border-0 backdrop-blur-md text-foreground hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500 ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-purple-950/60 to-black/80"
                      : "bg-gradient-to-br from-white/90 to-purple-50/90 border border-purple-100"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div
                        className={`relative h-14 w-14 overflow-hidden rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-500 ${
                          theme === "dark" ? "border border-purple-400/10" : "border border-purple-200"
                        }`}
                      >
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.org}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className={`font-semibold text-lg ${
                            theme === "dark"
                              ? "bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-fuchsia-200"
                              : "bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-purple-700 to-fuchsia-700"
                          }`}>{project.org}</h3>
                        <p
                          className={`text-sm transition-colors duration-500 ${
                            theme === "dark" ? "text-purple-300" : "text-slate-800"
                          }`}
                        >
                          {project.role}
                        </p>
                        <p
                          className={`text-xs transition-colors duration-500 ${
                            theme === "dark" ? "text-purple-300" : "text-slate-500"
                          }`}
                        >
                          {project.timeperiod}
                        </p>
                      </div>
                    </div>
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-500 ${
                        theme === "dark" ? "text-purple-300" : "text-purple-700"
                      }`}
                    >
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Skeleton loaders for work experience */}
          {isLoading && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card
                  key={i}
                  className={`overflow-hidden border-0 backdrop-blur-md transition-all duration-500 ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-purple-950/60 to-black/80"
                      : "bg-gradient-to-br from-white/90 to-purple-50/90 border border-purple-100"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div
                        className={`h-14 w-14 rounded-xl animate-pulse ${
                          theme === "dark" ? "bg-purple-800/30" : "bg-purple-200/70"
                        }`}
                      ></div>
                      <div className="space-y-2">
                        <div
                          className={`h-5 w-32 rounded animate-pulse ${
                            theme === "dark" ? "bg-purple-800/30" : "bg-purple-200/70"
                          }`}
                        ></div>
                        <div
                          className={`h-4 w-24 rounded animate-pulse ${
                            theme === "dark" ? "bg-purple-800/20" : "bg-purple-200/50"
                          }`}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div
                        className={`h-4 w-full rounded animate-pulse ${
                          theme === "dark" ? "bg-purple-800/20" : "bg-purple-200/50"
                        }`}
                      ></div>
                      <div
                        className={`h-4 w-5/6 rounded animate-pulse ${
                          theme === "dark" ? "bg-purple-800/20" : "bg-purple-200/50"
                        }`}
                      ></div>
                      <div
                        className={`h-4 w-4/6 rounded animate-pulse ${
                          theme === "dark" ? "bg-purple-800/20" : "bg-purple-200/50"
                        }`}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </motion.section>

        {/* Latest Projects Section */}
        <motion.section
          className="mt-24 mb-16"
          id='projects'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <motion.h2
              className="text-2xl font-semibold lg:text-3xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Latest Projects
            </motion.h2>
            <motion.div
              className={`h-px flex-1 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-400/30 to-transparent"
                  : "bg-gradient-to-r from-purple-400/50 to-transparent"
              } transition-colors duration-500`}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            ></motion.div>
          </div>
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            variants={container}
            initial="hidden"
            animate={isLoading ? "hidden" : "show"}
          >
            {latestProjects.map((project) => (
              <motion.div key={project.title} variants={item}>
                <CardContainer className="inter-var">
                  <CardBody
                    className={`relative transition-all duration-300 group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border 
                      ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-purple-950/60 to-black/80"
                          : "bg-gradient-to-br from-white/90 to-purple-50/90 border border-purple-100"
                      }
                      dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]`}
                  >
                    <CardItem translateZ="50" className={`text-xl transition-all duration-300 font-bold ${
                          theme === "dark"
                            ? "bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-fuchsia-200"
                            : "bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-purple-700 to-fuchsia-700"
                        }`}>
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className={`mt-2 text-sm transition-all duration-300 max-w-sm dark:text-neutral-300 ${
                        theme === "dark" ? "text-purple-200" : "text-purple-600"
                      }`}
                    >
                      {project.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src={project.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={project.url}
                        target="__blank"
                        className={`px-4 py-2 transition-all duration-300 rounded-xl text-xs font-normal ${
                          theme === "dark" ? "text-purple-200" : "text-purple-800"
                        }`}
                      >
                        Try now →
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </motion.div>

          {/* Skeleton loaders for projects */}
          {isLoading && (
            <div className="grid gap-8 md:grid-cols-2">
              {[1, 2].map((i) => (
                <Card
                  key={i}
                  className={`overflow-hidden border-0 backdrop-blur-md transition-all duration-500 ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-purple-950/60 to-black/80"
                      : "bg-gradient-to-br from-white/90 to-purple-50/90 border border-purple-100"
                  }`}
                >
                  <CardContent className="p-0">
                    <div
                      className={`relative h-60 w-full overflow-hidden animate-pulse ${
                        theme === "dark" ? "bg-purple-800/20" : "bg-purple-200/50"
                      }`}
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <div
                          className={`h-6 w-48 rounded mb-2 animate-pulse ${
                            theme === "dark" ? "bg-purple-800/30" : "bg-purple-200/70"
                          }`}
                        ></div>
                        <div
                          className={`h-4 w-full rounded animate-pulse mb-1 ${
                            theme === "dark" ? "bg-purple-800/20" : "bg-purple-200/50"
                          }`}
                        ></div>
                        <div
                          className={`h-4 w-5/6 rounded animate-pulse ${
                            theme === "dark" ? "bg-purple-800/20" : "bg-purple-200/50"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </motion.section>
      </main>
    </div>
  )
}

const projects = [
  {
    org: "Qilo",
    role: "Junior SDE Intern",
    timeperiod: "Jan '25 - Mar '25",
    description: "Enhanced Shopify apps, built FARM stack applications and crafted dynamic UI/UX using React & modern libraries to improve scalability and user experience.",
    image: "/qilo.png?height=500&width=500",
  },
]

const latestProjects = [
  {
    title: "Nutri AI",
    description: "AI-powered nutritionist providing personalized meal plans based on user preferences and goals.",
    image: "/nutriai.png?height=400&width=600",
    url: "https://nutriai-fit.vercel.app",
  },
  {
    title: "CodeCrush",
    description: "A Collaborative platform where developers connect to discuss challenges, share knowledge, and seek solutions.",
    image: "/codecrush.png?height=400&width=600",
    url: "https://codecrushcmt.vercel.app"
  },
]

