"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

export function Background() {
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

  return (
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
  )
}