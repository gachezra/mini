"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef((props, ref) => {
  const { value = 0, className, ...otherProps } = props
  const progress = value || 0
  
  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
        className
      )}
      {...otherProps}
    >
      <div
        className="h-full w-full flex-1 bg-primary transition-all duration-200 ease-in-out"
        style={{
          transform: `translateX(-${100 - progress}%)`
        }}
      />
    </div>
  )
})

Progress.displayName = "Progress"

export { Progress }