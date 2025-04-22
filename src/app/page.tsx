"use client"

import {
  ArrowRight,
  Users2,
  LocateFixed,
  Eye,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Preloader } from "@/components/preloader"
import TypeWriter from "@/components/type-writer"
import { useCountUp } from "@/hooks/useCountUp"
import { Button } from "@/components/ui/button"
import { Features, Main } from "@config/site"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation"

interface ServerStats {
  users: number;
  requests: number;
  visitors: number;
}

export default function Home() {
  const [stats, setStats] = useState<ServerStats | null>(null)
  const router = useRouter()
  const targetRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const gridX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  })
  const gridY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      mouseX.set(((e.clientX - centerX) / centerX) * 20)
      mouseY.set(((e.clientY - centerY) / centerY) * 20)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch("/api/data/stats")
        const { data } = await response.json()

        setStats({
          users: data?.users,
          requests: data?.requests,
          visitors: data?.visitors
        })
      } catch (error) {
        console.error("Failed to fetch user data:", error)
        setStats({
          users: 0,
          requests: 0,
          visitors: 0
        })
      }
    }
  
    fetchUserData()
    // const interval = setInterval(fetchUserData, 5000)
    // return () => clearInterval(interval)
  }, [])

  const usersCount = useCountUp(stats?.users ?? 0)
  const requestsCount = useCountUp(stats?.requests ?? 0)
  const visitorsCount = useCountUp(stats?.visitors ?? 0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div ref={targetRef} className="min-h-screen bg-transparent text-white overflow-hidden select-none">
      <Preloader />
      <motion.div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px)",
            x: gridX,
            y: gridY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10">
        <motion.section className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-12 sm:py-16 lg:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-[90%] sm:max-w-3xl mx-auto space-y-6 sm:space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight flex flex-wrap items-center justify-center gap-2"
            >
              <span className="bg-white text-black px-2">{Main.Name}</span>
              <span className="flex items-center">
                <TypeWriter text={Main.SubName} delay={150} />
                <span className="w-[2px] h-[1em] bg-white animate-[blink_1s_ease-in-out_infinite]" />
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4"
            >
              {Main.Description}
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto mt-4 sm:mt-8 bg-white text-black border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 ease-in-out text-base px-6 py-4 h-auto"
                onClick={() => router.push("/dashboard")}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mx-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto space-y-12"
          >
            <div className="text-center px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
              >
                Statistics
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat.
              </motion.p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 text-center"
              >
                <Users2 className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mb-4 mx-auto" />
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{usersCount.toLocaleString()}</div>
                <p className="text-gray-400 text-sm sm:text-base">Users</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 text-center"
              >
                <LocateFixed className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mb-4 mx-auto" />
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{requestsCount.toLocaleString()}</div>
                <p className="text-gray-400 text-sm sm:text-base">Requests</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 text-center"
              >
                <Eye className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mb-4 mx-auto" />
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{visitorsCount.toLocaleString()}</div>
                <p className="text-gray-400 text-sm sm:text-base">Visitors</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <motion.section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 px-4">
                Features
              </motion.h2>
              <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {Features.map((feature, index) => (
                <motion.div key={feature.title} variants={itemVariants} custom={index}>
                  <Card
                    role="button"
                    tabIndex={0}
                    className="p-4 sm:p-6 bg-transparent backdrop-blur-2xl border-gray-500 text-white blur-[0.4px] transition-transform duration-300 hover:scale-105 cursor-pointer h-full"
                  >
                    <feature.icon className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <Footer />
      </div>
    </div>
  )
}