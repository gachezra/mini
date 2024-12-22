"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export function VideoReel({ id, videoUrl, reward }) {
  const [progress, setProgress] = useState(0)
  const [canClaim, setCanClaim] = useState(false)
  const duration = 30

  useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (100 / duration)
          if (newProgress >= 100) {
            clearInterval(timer)
            setCanClaim(true)
            return 100
          }
          return newProgress
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [])

  const handleClaim = () => {
    // Handle claiming reward
    console.log(`Claimed ${reward} stars for video ${id}`)
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full w-full bg-black"
    >
      <video
        className="h-full w-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />
      
      <div className="absolute top-4 left-4 right-4">
        {!canClaim ? (
          <div className="bg-background/20 backdrop-blur-lg rounded-full p-2">
            <Progress value={progress} className="h-2" />
          </div>
        ) : (
          <Button 
            onClick={handleClaim}
            className="w-full rounded-full bg-primary/90 hover:bg-primary"
          >
            Claim {reward} <Star className="w-4 h-4 ml-1" />
          </Button>
        )}
      </div>
    </motion.div>
  )
}