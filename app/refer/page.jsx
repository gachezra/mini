"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Share2, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/layout/navigation'

const referralStats = {
  totalReferrals: 12,
  activeReferrals: 8,
  starsPerReferral: 500,
  referralLink: 'https://tonstars.app/ref/user123'
}

const referredFriends = [
  { id: 1, name: 'Alice', status: 'active', earned: 1200 },
  { id: 2, name: 'Bob', status: 'active', earned: 800 },
  { id: 3, name: 'Charlie', status: 'pending', earned: 0 }
]

export default function ReferPage() {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Join TonStars',
        text: 'Earn rewards by watching ads and completing tasks!',
        url: referralStats.referralLink
      })
    } catch (err) {
      // Fallback to clipboard copy
      navigator.clipboard.writeText(referralStats.referralLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <main className="min-h-screen gradient-bg pb-20">
      <div className="container px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold mb-2">Refer Friends</h1>
          <p className="text-muted-foreground">Earn stars for each friend you invite</p>
        </motion.div>

        <div className="grid gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-secondary/50 rounded-2xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Total Referrals</span>
            </div>
            <p className="text-2xl font-bold">{referralStats.totalReferrals}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-secondary/50 rounded-2xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">Per Referral</span>
            </div>
            <p className="text-2xl font-bold">{referralStats.starsPerReferral} ★</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Button 
            size="lg"
            className="w-full rounded-xl h-14 text-lg"
            onClick={handleShare}
          >
            {copied ? 'Copied!' : 'Share Referral Link'}
            <Share2 className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-semibold mb-4">Referred Friends</h3>
          <div className="space-y-4">
            {referredFriends.map((friend) => (
              <div
                key={friend.id}
                className="bg-secondary/50 rounded-2xl p-4 flex items-center justify-between"
              >
                <div>
                  <p className="font-medium">{friend.name}</p>
                  <span className="text-sm text-muted-foreground capitalize">
                    {friend.status}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span>{friend.earned}</span>
                  <Star className="w-4 h-4 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Navigation />
    </main>
  )
}