"use client"

import { Users2, LocateFixed, Eye } from "lucide-react"
import { useCountUp } from "@/hooks/useCountUp"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ServerStats {
  users: number;
  requests: number;
  visitors: number;
}

export default function DashMainStats() {
  const [stats, setStats] = useState<ServerStats | null>(null)

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

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={cn(
            "flex-1 sm:min-w-[180px]",
            "bg-zinc-50 dark:bg-zinc-900/70",
            "border border-zinc-100 dark:border-zinc-800",
            "rounded-xl shadow-sm",
            "p-4 sm:p-6 text-center",
            "transition-all duration-200",
            "hover:shadow-md hover:border-zinc-200 dark:hover:border-zinc-700",
          )}
        >
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 rounded-full bg-zinc-300 dark:bg-zinc-800">
              <Users2 className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-600 dark:text-zinc-300" />
            </div>
          </div>
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-gray-900 dark:text-white">{usersCount.toLocaleString()}</div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">Users</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className={cn(
            "flex-1 sm:min-w-[180px]",
            "bg-zinc-50 dark:bg-zinc-900/70",
            "border border-zinc-100 dark:border-zinc-800",
            "rounded-xl shadow-sm",
            "p-4 sm:p-6 text-center",
            "transition-all duration-200",
            "hover:shadow-md hover:border-zinc-200 dark:hover:border-zinc-700",
          )}
        >
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 rounded-full bg-zinc-300 dark:bg-zinc-800">
              <LocateFixed className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-600 dark:text-zinc-300" />
            </div>
          </div>
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-gray-900 dark:text-white">{requestsCount.toLocaleString()}</div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">Requests</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={cn(
            "flex-1 sm:min-w-[180px]",
            "bg-zinc-50 dark:bg-zinc-900/70",
            "border border-zinc-100 dark:border-zinc-800",
            "rounded-xl shadow-sm",
            "p-4 sm:p-6 text-center",
            "transition-all duration-200",
            "hover:shadow-md hover:border-zinc-200 dark:hover:border-zinc-700",
          )}
        >
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 rounded-full bg-zinc-300 dark:bg-zinc-800">
              <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-600 dark:text-zinc-300" />
            </div>
          </div>
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-gray-900 dark:text-white">{visitorsCount.toLocaleString()}</div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">Visitors</p>
        </motion.div>
      </div>
    </div>
  )
}