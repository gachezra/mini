"use client"

import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/layout/navigation'
import { AnnouncementBanner } from '@/components/home/announcement-banner'
import { Leaderboard } from '@/components/home/leaderboard'
import { UserStats } from '@/components/home/user-stats'

export default function HomePage() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="min-h-screen gradient-bg pb-20">
      <div className="container px-4 py-6">
        <div className="flex justify-end mb-6">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonStar className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        <AnnouncementBanner />
        <UserStats />
        <Leaderboard />
        
      </div>
      <Navigation />
    </main>
  )
}