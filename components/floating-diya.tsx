"use client"

import { motion } from "framer-motion"

interface FloatingDiyaProps {
  delay?: number
}

export default function FloatingDiya({ delay = 0 }: FloatingDiyaProps) {
  return (
    <motion.div
      className="absolute w-6 h-6 opacity-30"
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 3 + delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <div className="w-full h-full bg-gradient-to-t from-amber-600 to-yellow-400 rounded-full shadow-lg border border-amber-300"></div>
    </motion.div>
  )
}
