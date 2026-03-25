import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-mono text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-foreground text-background hover:bg-background hover:text-foreground border border-foreground": variant === "default",
            "border border-border bg-transparent hover:bg-foreground hover:text-background": variant === "outline",
            "hover:bg-muted": variant === "ghost",
            "underline-offset-4 hover:underline": variant === "link",
            "h-12 px-6 py-3": size === "default",
            "h-9 px-4 py-2 text-[10px]": size === "sm",
            "h-14 px-8 py-4 text-sm": size === "lg",
            "h-12 w-12": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
