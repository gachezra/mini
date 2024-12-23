"use client"

import { motion } from 'framer-motion'
import { Coins, Star } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/layout/navigation'

const services = [
  { name: 'Netflix', logo: '/netflix-logo.png' },
  { name: 'Spotify', logo: '/spotify-logo.png' },
  { name: 'Hulu', logo: '/hulu-logo.png' },
  { name: 'Amazon Prime', logo: '/prime-logo.png' }
]

export default function PremiumPage() {
  return (
    <main className="min-h-screen gradient-bg pb-20">
      <div className="container px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold mb-2">Premium</h1>
          <p className="text-muted-foreground">Convert stars to VetroCoin</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-secondary/50 rounded-2xl p-4 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Available Stars</span>
              </div>
              <p className="text-2xl font-bold">5,240</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Coins className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">VetroCoin Value</span>
              </div>
              <p className="text-2xl font-bold">52.4 VTC</p>
            </div>
          </div>
          <Button className="w-full rounded-xl">Convert to VetroCoin</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-semibold mb-4">Coming Soon</h3>
          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-secondary/50 rounded-2xl p-4 flex flex-col items-center opacity-50"
              >
                <div className="w-12 h-12 mb-2 bg-muted rounded-xl flex items-center justify-center">
                  {service.name[0]}
                </div>
                <p className="text-sm font-medium">{service.name}</p>
                <span className="text-xs text-muted-foreground">Coming Soon</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Navigation />
    </main>
  )
}