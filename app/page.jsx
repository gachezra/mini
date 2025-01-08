"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Video, Users, Gift } from 'lucide-react'
import { Button } from '@/components/ui/button'




const features = [
  {
    icon: Video,
    title: "Watch Ads",
    description: "Earn stars by watching engaging video advertisements"
  },
  {
    icon: Gift,
    title: "Complete Tasks",
    description: "Get rewarded for completing simple tasks and missions"
  },
  {
    icon: Users,
    title: "Refer Friends",
    description: "Invite friends and earn bonus stars for each referral"
  }
]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentFeature, setCurrentFeature] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const handleGetStarted = () => {
    router.push('/home')
  }

  return (
    <main className="min-h-screen gradient-bg" id="content">
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Star className="w-16 h-16 mx-auto mb-8 text-primary" />
          <h1 className="text-4xl font-bold mb-4">Welcome to Vetracoin</h1>
          <p className="text-muted-foreground mb-12">Earn rewards by watching ads and completing tasks</p>
        </motion.div>

        <div ref={ref} className="max-w-md mx-auto mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: currentFeature === index ? 1 : 0.5, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="p-4 rounded-2xl bg-secondary">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button size="lg" className="rounded-full" onClick={handleGetStarted}>
            Get Started
          </Button>
        </motion.div>
      </div>
    </main>
  )
}