"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Send, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const tasks = [
  {
    id: 1,
    icon: Instagram,
    title: "Follow VetroCoin on Instagram",
    reward: 100,
    status: 'available',
    action: 'https://instagram.com/vetrocoin'
  },
  {
    id: 2,
    icon: Send,
    title: "Join VetroCoin Telegram Channel",
    reward: 150,
    status: 'available',
    action: 'https://t.me/vetrocoin'
  },
  {
    id: 3,
    icon: Send,
    title: "Share TonStars with Friends",
    reward: 200,
    status: 'available',
    action: 'share'
  }
]

export function TasksList() {
  const [completedTasks, setCompletedTasks] = useState([])

  const handleTaskAction = async (taskId, action) => {
    if (action.startsWith('http')) {
      window.open(action, '_blank')
    } else if (action === 'share') {
      // Implement Telegram sharing
    }

    setTimeout(() => {
      setCompletedTasks(prev => [...prev, taskId])
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="space-y-4"
    >
      {tasks.map((task) => {
        const isCompleted = completedTasks.includes(task.id)
        
        return (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-secondary/50 rounded-2xl p-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-secondary rounded-xl">
                  <task.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{task.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <span>Reward:</span>
                    <span className="text-primary font-medium">{task.reward}</span>
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
              
              <Button
                variant={isCompleted ? "secondary" : "default"}
                className="rounded-xl"
                onClick={() => handleTaskAction(task.id, task.action)}
                disabled={isCompleted}
              >
                {isCompleted ? 'Completed' : 'Start Task'}
              </Button>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}