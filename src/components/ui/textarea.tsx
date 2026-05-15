import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[160px] w-full rounded-2xl border border-border/50 bg-background/5 px-8 py-6 text-lg font-bold tracking-tight transition-all duration-500 outline-none placeholder:text-muted-foreground/30 focus:border-primary/50 focus:bg-background/10 focus:shadow-[0_0_40px_oklch(var(--primary)/0.1)] disabled:pointer-events-none disabled:opacity-50 md:text-base resize-none dark:bg-foreground/[0.02] leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
