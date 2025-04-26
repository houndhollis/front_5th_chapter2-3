import { VariantProps } from "class-variance-authority"
import { buttonVariants } from "./style"

/**
 * ButtonProps 타입
 */
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string
  }
