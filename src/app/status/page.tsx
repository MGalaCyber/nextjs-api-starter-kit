"use client"

import {
  Cpu,
  HardDrive,
  Network,
  Users2,
  Eye,
  LocateFixed,
  Activity,
  MemoryStickIcon as Memory
} from "lucide-react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Progress } from "@/components/ui/progress"
import { useCountUp } from "@/hooks/useCountUp"
import { cn } from "@/lib/utils"
import type React from "react"

interface ServerStats {
  users: number;
  requests: number;
  visitors: number;
}

// Simulated data fetching function
function getRandomValue(min: number, max: number, precision = 0) {
  const value = Math.random() * (max - min) + min
  return Number(value.toFixed(precision))
}

export default function StatusDashboard() {
  const targetRef = useRef<HTMLDivElement>(null)
  const [stats, setStats] = useState<ServerStats | null>(null)
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

  // Server metrics
  const [cpuUsage, setCpuUsage] = useState(getRandomValue(10, 80, 1))
  const [ramUsage, setRamUsage] = useState(getRandomValue(20, 70, 1))
  const [diskUsage, setDiskUsage] = useState(getRandomValue(30, 90, 1))
  const [networkUsage, setNetworkUsage] = useState(getRandomValue(5, 50, 1))

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

  // Animated counters
  const usersCount = useCountUp(stats?.users ?? 0)
  const requestsCount = useCountUp(stats?.requests ?? 0)
  const visitorsCount = useCountUp(stats?.visitors ?? 0)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage((prev) => {
        const change = getRandomValue(-5, 5, 1)
        return Math.min(Math.max(prev + change, 0), 100)
      })

      setRamUsage((prev) => {
        const change = getRandomValue(-3, 3, 1)
        return Math.min(Math.max(prev + change, 0), 100)
      })

      setDiskUsage((prev) => {
        const change = getRandomValue(-1, 1, 1)
        return Math.min(Math.max(prev + change, 0), 100)
      })

      setNetworkUsage((prev) => {
        const change = getRandomValue(-8, 8, 1)
        return Math.min(Math.max(prev + change, 0), 100)
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={targetRef} className="min-h-screen relative">
      {/* Animated Grid Background */}
      <motion.div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black dark:bg-black" />
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

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">System Status</h1>
          <p className="text-gray-400">Real-time server and website statistics</p>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center gap-2 text-emerald-400">
              <Activity className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-medium">Live Updates</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <ServerMetricCard
            title="CPU Usage"
            value={cpuUsage}
            icon={Cpu}
            unit="%"
            colorClass={cpuUsage > 80 ? "text-red-400" : cpuUsage > 60 ? "text-amber-400" : "text-emerald-400"}
            progressColor={cpuUsage > 80 ? "bg-red-600" : cpuUsage > 60 ? "bg-amber-600" : "bg-emerald-600"}
          />

          <ServerMetricCard
            title="RAM Usage"
            value={ramUsage}
            icon={Memory}
            unit="%"
            colorClass={ramUsage > 80 ? "text-red-400" : ramUsage > 60 ? "text-amber-400" : "text-emerald-400"}
            progressColor={ramUsage > 80 ? "bg-red-600" : ramUsage > 60 ? "bg-amber-600" : "bg-emerald-600"}
          />

          <ServerMetricCard
            title="Disk Usage"
            value={diskUsage}
            icon={HardDrive}
            unit="%"
            colorClass={diskUsage > 80 ? "text-red-400" : diskUsage > 60 ? "text-amber-400" : "text-emerald-400"}
            progressColor={diskUsage > 80 ? "bg-red-600" : diskUsage > 60 ? "bg-amber-600" : "bg-emerald-600"}
          />

          <ServerMetricCard
            title="Network"
            value={networkUsage}
            icon={Network}
            unit="Mbps"
            colorClass="text-blue-400"
            progressColor="bg-blue-600"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <WebsiteMetricCard title="Users" value={usersCount} icon={Users2} colorClass="text-purple-400" />

          <WebsiteMetricCard title="Requests" value={requestsCount} icon={LocateFixed} colorClass="text-blue-400" />

          <WebsiteMetricCard title="Visitors" value={visitorsCount} icon={Eye} colorClass="text-emerald-400" />
        </div>
      </div>
    </div>
  )
}

interface ServerMetricCardProps {
  title: string
  value: number
  icon: React.ElementType
  unit: string
  colorClass: string
  progressColor: string
}

function ServerMetricCard({ title, value, icon: Icon, unit, colorClass, progressColor }: ServerMetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-zinc-900/70",
        "border border-zinc-800",
        "backdrop-blur-sm",
        "rounded-xl shadow-sm",
        "p-6",
        "transition-all duration-200",
        "hover:shadow-md hover:border-zinc-700",
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-white">{title}</h3>
        <div className="p-2 rounded-full bg-zinc-800">
          <Icon className="w-4 h-4 text-zinc-300" />
        </div>
      </div>

      <div className="flex items-end gap-2 mb-3">
        <span className={cn("text-2xl font-bold truncate", colorClass)}>{value.toFixed(1)}</span>
        <span className="text-sm text-zinc-400 mb-1 flex-shrink-0">{unit}</span>
      </div>

      <Progress className="h-2 bg-zinc-800">
        <div className={cn("h-full rounded-full", progressColor)} style={{ width: `${value}%` }} />
      </Progress>
    </motion.div>
  )
}

interface WebsiteMetricCardProps {
  title: string
  value: number
  icon: React.ElementType
  colorClass: string
}

function WebsiteMetricCard({ title, value, icon: Icon, colorClass }: WebsiteMetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-zinc-900/70",
        "border border-zinc-800",
        "backdrop-blur-sm",
        "rounded-xl shadow-sm",
        "p-6 text-center",
        "transition-all duration-200",
        "hover:shadow-md hover:border-zinc-700",
      )}
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-zinc-800">
          <Icon className="w-6 h-6 text-zinc-300" />
        </div>
      </div>

      <h3 className="font-medium text-white mb-2">{title}</h3>
      <div className={cn("text-2xl sm:text-3xl font-bold truncate", colorClass)}>{value.toLocaleString()}</div>
    </motion.div>
  )
}