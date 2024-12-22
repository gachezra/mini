"use client"

import { motion } from 'framer-motion'
import { Medal, Crown, Star } from 'lucide-react'
import Image from 'next/image'

const topUsers = [
  { 
    rank: 1, 
    name: 'Alex', 
    stars: 12500,
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop'
  },
  { 
    rank: 2, 
    name: 'Maria', 
    stars: 10200,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  { 
    rank: 3, 
    name: 'John', 
    stars: 9800,
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop'
  }
]

const top100Users = Array.from({ length: 100 }, (_, i) => ({
  rank: i + 1,
  name: `User${i + 1}`,
  stars: Math.floor(Math.random() * 9000) + 1000,
  image: `https://images.unsplash.com/photo-${1580000000000 + i}?w=50&h=50&fit=crop`
}))

export function Leaderboard() {
  return (
    <div className="mb-6 space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative pt-16 pb-4"
      >
        <div className="flex justify-between items-end px-8">
          {/* 2nd Place */}
          <div className="flex flex-col items-center">
            <div className="relative mb-2">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={topUsers[1].image}
                  alt={topUsers[1].name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
            </div>
            <span className="text-sm font-medium">{topUsers[1].name}</span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              {topUsers[1].stars.toLocaleString()} <Star className="w-3 h-3 text-primary" />
            </span>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center -mt-8">
            <Crown className="w-8 h-8 text-primary mb-2" />
            <div className="relative mb-2">
              <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary">
                <Image
                  src={topUsers[0].image}
                  alt={topUsers[0].name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </div>
            <span className="text-lg font-bold">{topUsers[0].name}</span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              {topUsers[0].stars.toLocaleString()} <Star className="w-4 h-4 text-primary" />
            </span>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center">
            <div className="relative mb-2">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={topUsers[2].image}
                  alt={topUsers[2].name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
            </div>
            <span className="text-sm font-medium">{topUsers[2].name}</span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              {topUsers[2].stars.toLocaleString()} <Star className="w-3 h-3 text-primary" />
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-secondary/50 rounded-2xl p-4 max-h-[300px] overflow-y-auto"
      >
        <h3 className="font-semibold mb-4 flex items-center gap-2 sticky top-0 bg-secondary/50 backdrop-blur-lg p-2 rounded-lg">
          <Medal className="w-5 h-5 text-primary" />
          Top 100 Earners
        </h3>
        <div className="space-y-4">
          {top100Users.map((user) => (
            <div key={user.rank} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-medium text-sm text-primary min-w-[24px]">#{user.rank}</span>
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">{user.name}</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span>{user.stars.toLocaleString()}</span>
                <Star className="w-4 h-4 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}