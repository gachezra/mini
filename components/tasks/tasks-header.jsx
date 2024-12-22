"use client"

import { motion } from 'framer-motion'
import { Star, Trophy } from 'lucide-react'

export function TasksHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <h1 className="text-2xl font-bold mb-2">Complete Tasks</h1>
      <p className="text-muted-foreground">Earn stars by completing simple tasks</p>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-secondary/50 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Available</span>
          </div>
          <p className="text-2xl font-bold">5 Tasks</p>
        </div>

        <div className="bg-secondary/50 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Completed</span>
          </div>
          <p className="text-2xl font-bold">3/8</p>
        </div>
      </div>
    </motion.div>
  )
}