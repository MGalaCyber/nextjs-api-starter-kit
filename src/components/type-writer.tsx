"use client"

import { useEffect, useState } from "react"

interface TypeWriterProps {
  text: string
  delay?: number
  className?: string
  startDelay?: number
}

export default function TypeWriter({ text, delay = 75, className = "", startDelay = 0 }: TypeWriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const startTyping = () => {
      let currentIndex = 0
      const typeChar = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          currentIndex++
          timeoutId = setTimeout(typeChar, delay)
        } else {
          setIsFinished(true)
        }
      }
      timeoutId = setTimeout(typeChar, delay)
    }

    const initialDelay = setTimeout(startTyping, startDelay)

    return () => {
      clearTimeout(initialDelay)
      clearTimeout(timeoutId)
    }
  }, [text, delay, startDelay])

  return displayText
}