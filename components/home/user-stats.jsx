"use client"

import { motion } from 'framer-motion'
import { Star, Trophy, ArrowRight, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function UserStats() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-secondary/50 rounded-2xl p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Balance</span>
          </div>
          <p className="text-2xl font-bold">5,240 ★</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-secondary/50 rounded-2xl p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Rank</span>
          </div>
          <p className="text-2xl font-bold">#42</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-3"
      >
        <div className="relative">
          <Button className="w-full rounded-xl h-14 text-lg bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90" size="lg">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Level up rank
          </Button>
          <span className="absolute -top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">Limited</span>
        </div>

        <Button className="w-full rounded-xl h-14 text-lg" size="lg">
          Start Earning
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </div>
  )
}