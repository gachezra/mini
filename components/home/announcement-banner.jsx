"use client"

import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'

export function AnnouncementBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl p-4 mb-6"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/20 rounded-xl">
          <Crown className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold mb-1">Premium Coming Soon!</h3>
          <p className="text-sm text-muted-foreground">
            Convert stars to subscriptions for Netflix, Spotify, and more
          </p>
        </div>
      </div>
    </motion.div>
  )
}