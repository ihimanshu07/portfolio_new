import * as React from "react"
import { cn } from "@/lib/utils"

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <div className={cn("relative inline-flex h-11 overflow-hidden rounded-lg p-[1px] focus-within:ring-2 focus-within:ring-gray-400 focus-within:ring-offset-2 focus-within:ring-offset-gray-50 dark:focus-within:ring-gray-800 dark:focus-within:ring-offset-gray-950", className)}>
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#1a1a2e_0%,#16213e_50%,#1a1a2e_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gray-50 px-8 py-3 text-sm font-medium text-gray-900 backdrop-blur-3xl transition-colors hover:bg-gray-100 dark:bg-black dark:text-gray-50 dark:hover:bg-black">
            {children}
          </span>
        </div>
      )
    }

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex h-11 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-gray-800 dark:focus:ring-offset-gray-950",
          className
        )}
        {...props}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#1a1a2e_0%,#16213e_50%,#1a1a2e_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gray-50 px-8 py-3 text-sm font-medium text-gray-900 backdrop-blur-3xl transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-900">
          {children}
        </span>
      </button>
    )
  }
)

ShinyButton.displayName = "ShinyButton"

export { ShinyButton }

