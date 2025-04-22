import * as React from "react"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative h-4 w-full overflow-hidden rounded-full", className)} {...props}>
        {children}
      </div>
    )
  },
)
Progress.displayName = "Progress"

export { Progress }