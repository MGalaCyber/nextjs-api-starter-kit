"use client"

import { AreaChartIcon as ChartArea, BookMarked } from "lucide-react"
import ProjectsList from "./project-list"
import MainStats from "./stats/global"

export default function Content() {
  return (
    <div className="space-y-4">
      <div className="bg-zinc-300 dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col items-start justify-start border border-gray-200 dark:border-[#1F1F23]">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2">
          <ChartArea className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-50" />
          Statistics
        </h2>
        <MainStats />
      </div>
      <div className="bg-zinc-300 dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col border border-gray-200 dark:border-[#1F1F23]">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2">
          <BookMarked className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-50" />
          Other Projects
        </h2>
        <div className="flex-1">
          <ProjectsList className="h-full" />
        </div>
      </div>
    </div>
  )
}