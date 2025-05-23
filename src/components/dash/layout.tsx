"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import type { ReactNode } from "react"

import Sidebar from "./sidebar"
import TopNav from "./top-nav"
import pkg from "@root/package.json"
import { Main } from "@/config/site"
const version = pkg.version;

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`flex h-screen ${theme === "dark" ? "dark" : ""}`}>
      <Sidebar />
      <div className="w-full flex flex-1 flex-col">
        <header className="h-16 border-b border-gray-200 dark:border-[#1F1F23]">
          <TopNav />
        </header>
        <main className="flex-1 overflow-auto p-6 bg-gray-200 dark:bg-[#0F0F12]">{children}</main>
        <footer className="py-3 px-6 border-t border-gray-200 dark:border-[#1F1F23]">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <div className="mb-2 sm:mb-0">&copy; 2025 ‒ {new Date().getFullYear()} {Main.Name}</div>
            <div className="mb-2 sm:mb-0 text-xs">v{version} | Made with ❤️ by <a href="https://galaxd.com" className="text-black dark:text-white">GXD Dev</a></div>
            <div className="flex items-center">
              <a href="/p/tos" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-xs">Terms of Service</a>
              <span className="mx-2 text-xs">•</span>
              <a href="/p/privacy" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-xs">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}