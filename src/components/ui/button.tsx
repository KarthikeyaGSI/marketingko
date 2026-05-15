import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-2xl border border-transparent bg-clip-padding text-sm font-black uppercase tracking-widest whitespace-nowrap transition-all duration-700 outline-none select-none disabled:pointer-events-none disabled:opacity-50 overflow-hidden relative active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:shadow-[0_0_40px_oklch(var(--primary)/0.4)]",
        outline:
          "border-border bg-background/5 hover:bg-muted hover:text-foreground backdrop-blur-xl dark:border-white/10 dark:hover:bg-white/10",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-lg",
        ghost:
          "hover:bg-muted hover:text-foreground dark:hover:bg-white/5",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-primary underline-offset-4 hover:underline font-bold",
      },
      size: {
        default: "h-12 px-6 gap-2",
        xs: "h-8 px-4 text-[10px]",
        sm: "h-10 px-5 text-xs",
        lg: "h-16 px-10 text-base",
        xl: "h-20 px-12 text-lg",
        icon: "size-10",
        "icon-sm": "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
