"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { ThemeToggle } from "../theme-toggle"
import Profile from "./profile"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface ProfileData {
  name: string
  role: string
}

export default function TopNav() {
  const pathname = usePathname()
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch("/api/data/user")
        const data = await response.json()
        
        if (data?.status && data?.data?.avatar) {
          setAvatarUrl(data.data.avatar)
          setProfile({
            name: data.full_name || "Username",
            role: data.role || "Member",
          })
        } else {
          setAvatarUrl(null)
          setProfile({
            name: "Username",
            role: "Member",
          })
        }
      } catch (error) {
        console.error("Failed to fetch user data", error)
      }
    }

    fetchUserData()
  }, [])

  const breadcrumbs = useMemo(() => {
    const items: BreadcrumbItem[] = [{ label: "Dashboard", href: "/dashboard" }]

    if (pathname === "/dashboard") {
      items.push({ label: "Home", href: "#" })
      return items
    }

    const segments = pathname.split("/").filter(Boolean)
    if (segments.length > 1) {
      const lastSegment = segments[segments.length - 1]
      const label = lastSegment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
      items.push({ label, href: "#" })
    }
    return items
  }, [pathname])

  return (
    <nav className="px-3 sm:px-6 flex items-center justify-between bg-white dark:bg-[#0F0F12] border-b border-gray-200 dark:border-[#1F1F23] h-full">
      <div className="font-medium text-sm hidden sm:flex items-center space-x-1 truncate max-w-[300px]">
        {breadcrumbs.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400 mx-1" />}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 dark:text-gray-100">{item.label}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ThemeToggle />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none flex items-center">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt="User avatar"
                  width={28}
                  height={28}
                  className="rounded-full ring-2 ring-gray-500 dark:ring-[#2B2B30] sm:w-8 sm:h-8 cursor-pointer"
                />
              ) : (
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full ring-4 ring-gray-500 dark:ring-zinc-900 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg">
                  {(profile?.name.match(/\b\w/g) || []).slice(0, 3).join("")}
                </div>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="w-[280px] sm:w-80 bg-background border-border rounded-lg shadow-lg"
            >
              <Profile />
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>
      </div>
    </nav>
  )
}