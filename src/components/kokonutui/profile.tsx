"use client"

import { CreditCard } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

interface ProfileData {
  name: string
  role: string
  subscription?: string
}

export default function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch("/api/data/user")
        const { data } = await response.json()

        setAvatarUrl(data.avatar)
        setProfile({
          name: data.full_name || "Username",
          role: data.role || "Member",
          subscription: `${data.subscription.tier}`,
        })
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch user data:", error)
        setProfile({
          name: "Username",
          role: "Member",
          subscription: "Free",
        })
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <div className="relative px-6 pt-12 pb-6">
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <p className="text-center text-gray-500">Loading...</p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-4 mb-8">
                <div className="relative shrink-0">
                  {avatarUrl ? (
                    <Image
                      src={avatarUrl}
                      alt={profile?.name || "Username"}
                      width={72}
                      height={72}
                      className="rounded-full ring-4 ring-gray-500 dark:ring-zinc-900 object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 sm:w-16 sm:h-16 flex items-center justify-center rounded-full ring-4 ring-gray-500 dark:ring-zinc-900 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg">
                      {(profile?.name.match(/\b\w/g) || []).slice(0, 3).join("")}
                    </div>
                  )}
                  <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{profile?.name}</h2>
                  <p className="text-zinc-600 dark:text-zinc-400">{profile?.role}</p>
                </div>
              </div>
              <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-6" />
              <div className="space-y-2">
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors duration-200"
                >
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Subscription</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400 mr-2">{profile?.subscription}</span>
                  </div>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}