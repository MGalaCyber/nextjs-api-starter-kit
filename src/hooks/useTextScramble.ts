"use client"

import { useState, useEffect } from "react"

// Characters to use for scrambling effect
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

export function useTextScramble(finalText: string, duration = 2000) {
    const [text, setText] = useState("")

    useEffect(() => {
        let iteration = 0
        const totalIterations = 10 // Number of scramble iterations before settling
        const intervalDuration = duration / totalIterations

        // Reset the text
        setText(generateScrambledText(finalText))

        const intervalId = setInterval(() => {
        iteration++

        if (iteration < totalIterations) {
            // Generate partially scrambled text with more correct characters as we progress
            const progress = iteration / totalIterations
            setText(generatePartiallyScrambledText(finalText, progress))
        } else {
            // Final iteration - show the complete text
            setText(finalText)
            clearInterval(intervalId)
        }
        }, intervalDuration)

        return () => clearInterval(intervalId)
    }, [finalText, duration])

    return text
}

// Generate completely scrambled text of the same length
function generateScrambledText(text: string): string {
    return Array.from({ length: text.length })
        .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
        .join("")
}

// Generate partially scrambled text with some correct characters
function generatePartiallyScrambledText(finalText: string, progress: number): string {
    return finalText
        .split("")
        .map((char, index) => {
        // The higher the progress, the more likely we show the correct character
        const shouldShowCorrect = Math.random() < progress || index < finalText.length * progress

        if (shouldShowCorrect || char === " " || !chars.includes(char)) {
            return char
        }

        return chars.charAt(Math.floor(Math.random() * chars.length))
        })
        .join("")
}