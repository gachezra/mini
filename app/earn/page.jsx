"use client"

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/layout/navigation'
import { VideoReel } from '@/components/earn/video-reel'
import { EarningsHeader } from '@/components/earn/earnings-header'

// Mock data - replace with actual API data
const mockVideos = [
  {
    id: '1',
    videoUrl: 'https://cdn.pixabay.com/video/2024/08/20/227567_tiny.mp4',
    reward: 50
  },
  {
    id: '2',
    videoUrl: 'https://cdn.pixabay.com/video/2024/08/30/228847_tiny.mp4',
    reward: 75
  },
  {
    id: '3',
    videoUrl: 'https://cdn.pixabay.com/video/2024/03/31/206294_tiny.mp4',
    reward: 100
  }
]

export default function EarnPage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [totalEarned, setTotalEarned] = useState(320)

  const handleScroll = (e) => {
    if (e.deltaY > 0 && currentVideoIndex < mockVideos.length - 1) {
      setCurrentVideoIndex(prev => prev + 1)
    } else if (e.deltaY < 0 && currentVideoIndex > 0) {
      setCurrentVideoIndex(prev => prev - 1)
    }
  }

  return (
    <main 
      className="h-screen w-screen overflow-hidden bg-black"
      onWheel={handleScroll}
    >
      <EarningsHeader totalEarned={totalEarned} />
      
      <div className="h-full w-full pt-14 pb-16">
        <AnimatePresence mode="wait">
          <VideoReel key={mockVideos[currentVideoIndex].id} {...mockVideos[currentVideoIndex]} />
        </AnimatePresence>
      </div>

      <Navigation />
    </main>
  )
}