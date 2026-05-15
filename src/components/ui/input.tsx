import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-14 w-full min-w-0 rounded-2xl border border-border/50 bg-background/5 px-8 py-4 text-lg font-bold tracking-tight transition-all duration-500 outline-none placeholder:text-muted-foreground/30 focus:border-primary/50 focus:bg-background/10 focus:shadow-[0_0_40px_oklch(var(--primary)/0.1)] disabled:pointer-events-none disabled:opacity-50 md:text-base dark:bg-foreground/[0.02]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
