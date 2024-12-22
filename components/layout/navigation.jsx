"use client"

import { Home, Play, CheckSquare, Users, Gift } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/home', icon: Home },
  { name: 'Earn', href: '/earn', icon: Play },
  { name: 'Tasks', href: '/tasks', icon: CheckSquare },
  { name: 'Refer', href: '/refer', icon: Users },
  { name: 'Premium', href: '/premium', icon: Gift }
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-background/80 backdrop-blur-lg">
      <div className="flex justify-around py-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'flex flex-col items-center px-3 py-2 text-xs rounded-lg transition-colors',
              pathname === item.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}