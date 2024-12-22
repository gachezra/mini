"use client"

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function EarningsHeader({ totalEarned }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-lg"
    >
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Total Earned Today</span>
          <div className="flex items-center gap-1 font-semibold">
            {totalEarned}
            <Star className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}