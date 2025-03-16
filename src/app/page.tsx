"use client"

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail'; // Add missing Mail icon
import XIcon from '@mui/icons-material/X';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useSpring } from "framer-motion"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { useState, useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"

declare global {
  interface Window {
    scrollToSection?: (section: string) => void;
  }
}

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)
  
  // Add refs for scrolling
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  
  // Enhanced smooth scroll function with more animation control
  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const yOffset = -100; // Offset for navbar
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
      
      // Add subtle highlight animation to the section
      if (ref.current) {
        const element = ref.current;
        element.style.transition = "background-color 0.5s ease";
        const originalBackground = element.style.backgroundColor;
        element.style.backgroundColor = "rgba(168, 85, 247, 0.05)";
        
        setTimeout(() => {
          element.style.backgroundColor = originalBackground;
        }, 800);
      }
    }
  };
  
  // Make scrollTo function available globally
  useEffect(() => {
    window.scrollToSection = (section: string) => {
      if (section === 'experience') scrollTo(experienceRef)
      if (section === 'projects') scrollTo(projectsRef)
    }
    
    return () => {
      delete window.scrollToSection
    }
  }, [])

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Improved scroll progress with smoother animation
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
    mass: 0.5
  })

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
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black dark:from-black dark:via-purple-950/70 dark:to-black text-white relative overflow-hidden">
      {/* Enhanced progress bar with prettier animation */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 z-50 shadow-sm shadow-purple-500/20"
        style={{ scaleX, transformOrigin: "0%" }}
        layoutId="scrollProgress"
      />
      
      {/* Radiant background elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-600/10 dark:bg-purple-600/10 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-fuchsia-600/10 dark:bg-fuchsia-600/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-violet-500/10 dark:bg-violet-500/10 blur-3xl"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        ></motion.div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 dark:opacity-10"></div>
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
            className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-purple-400/50 lg:h-40 lg:w-40 shadow-[0_0_25px_rgba(168,85,247,0.3)]"
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
              <h1 className="text-4xl font-bold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 dark:from-white dark:via-purple-200 dark:to-fuchsia-200">
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
              className="text-lg text-purple-100 dark:text-purple-200 max-w-2xl leading-relaxed"
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
                  className="rounded-full border-purple-400/50 bg-purple-950/50 backdrop-blur-sm hover:bg-purple-800/50 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:border-purple-400/30 dark:bg-purple-950/30 dark:hover:bg-purple-800/30"
                >
                  <GitHubIcon className="h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div variants={item}>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://www.linkedin.com/in/prakashdevs/', "_blank")}
                  size="icon"
                  className="rounded-full border-purple-400/50 bg-purple-950/50 backdrop-blur-sm hover:bg-purple-800/50 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:border-purple-400/30 dark:bg-purple-950/30 dark:hover:bg-purple-800/30"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div variants={item}>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://x.com/_prakashbhatt', "_blank")}
                  size="icon"
                  className="rounded-full border-purple-400/50 bg-purple-950/50 backdrop-blur-sm hover:bg-purple-800/50 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:border-purple-400/30 dark:bg-purple-950/30 dark:hover:bg-purple-800/30"
                >
                  <XIcon className="h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div variants={item}>
                <Button
                  variant="outline"
                  onClick={()=> window.open('mailto:prakashxdev@gmail.com', "_blank")}
                  size="icon"
                  className="rounded-full border-purple-400/50 bg-purple-950/50 backdrop-blur-sm hover:bg-purple-800/50 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:border-purple-400/30 dark:bg-purple-950/30 dark:hover:bg-purple-800/30"
                >
                  <MailIcon className="h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <div 
          ref={experienceRef} 
          className="scroll-mt-28 pt-2 pb-2 rounded-lg transition-all duration-500"
        >
          <motion.section
            id="experience"
            className="mt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileInView={{ y: [10, 0], opacity: [0.8, 1] }}
            viewport={{ once: true, margin: "-100px" }}
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
                className="h-px flex-1 bg-gradient-to-r from-purple-400/50 to-transparent dark:from-purple-400/30"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              ></motion.div>
            </div>
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch"
              variants={container}
              initial="hidden"
              animate={isLoading ? "hidden" : "show"}
            >
              {projects.map((project) => (
                <motion.div key={project.title} variants={item} className="h-full">
                  <Card className="group h-full overflow-hidden border-0 bg-gradient-to-br from-purple-950/80 to-black/90 backdrop-blur-md text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500 dark:from-purple-950/60 dark:to-black/80">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-purple-400/20 shadow-[0_0_15px_rgba(168,85,247,0.15)] dark:border-purple-400/10">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{project.title}</h3>
                          <p className="text-sm text-purple-200 dark:text-purple-300">{project.role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-purple-200 dark:text-purple-300 leading-relaxed">
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
                    className="overflow-hidden border-0 bg-gradient-to-br from-purple-950/80 to-black/90 backdrop-blur-md text-white dark:from-purple-950/60 dark:to-black/80"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="h-14 w-14 rounded-xl bg-purple-800/30 animate-pulse"></div>
                        <div className="space-y-2">
                          <div className="h-5 w-32 bg-purple-800/30 rounded animate-pulse"></div>
                          <div className="h-4 w-24 bg-purple-800/20 rounded animate-pulse"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-full bg-purple-800/20 rounded animate-pulse"></div>
                        <div className="h-4 w-5/6 bg-purple-800/20 rounded animate-pulse"></div>
                        <div className="h-4 w-4/6 bg-purple-800/20 rounded animate-pulse"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </motion.section>
        </div>

        {/* Latest Projects Section */}
        <div 
          ref={projectsRef} 
          className="scroll-mt-28 pt-2 pb-2 rounded-lg transition-all duration-500"
        >
          <motion.section
            id="projects"
            className="mt-24 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileInView={{ y: [10, 0], opacity: [0.8, 1] }}
            viewport={{ once: true, margin: "-100px" }}
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
                className="h-px flex-1 bg-gradient-to-r from-purple-400/50 to-transparent dark:from-purple-400/30"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              ></motion.div>
            </div>
            <motion.div
              className="grid gap-2 md:grid-cols-2"
              variants={container}
              initial="hidden"
              animate={isLoading ? "hidden" : "show"}
            >
              {latestProjects.map((project) => (
                <motion.div key={project.title} variants={item}>
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-gradient-to-br from-purple-950/80 to-black/90 backdrop-blur-md dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        {project.title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        {project.description}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src= {project.image}
                          width="1000"
                          height={project.image.includes(project.title) ? "600" : "400"}
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <div className="flex mt-20">
                        <CardItem
                          translateZ={20}
                          as={Link}
                          href={project.url}
                          target="_blank"
                          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
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
                    className="overflow-hidden border-0 bg-gradient-to-br from-purple-950/80 to-black/90 backdrop-blur-md text-white dark:from-purple-950/60 dark:to-black/80"
                  >
                    <CardContent className="p-0">
                      <div className="relative h-60 w-full overflow-hidden bg-purple-800/20 animate-pulse">
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                          <div className="h-6 w-48 bg-purple-800/30 rounded mb-2 animate-pulse"></div>
                          <div className="h-4 w-full bg-purple-800/20 rounded animate-pulse mb-1"></div>
                          <div className="h-4 w-5/6 bg-purple-800/20 rounded animate-pulse"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </motion.section>
        </div>
      </main>
    </div>
  )
}

const projects = [
  {
    title: "Junior Software Engineer Intern",
    role: "Jan '25 - Mar '25",
    description: "Contributed to web development, Shopify app enhancements, and UI improvements. Implemented Web Pixels for analytics and optimized Shopify theme extensions using Webpack for better performance.",
    image: "/qilo.png?height=200&width=200",
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

