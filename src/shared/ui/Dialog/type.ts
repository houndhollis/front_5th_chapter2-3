import { ComponentProps, HTMLAttributes } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { CommonProps } from "../type"

/**
 * Dialog 타입
 */
export type DialogProps = DialogPrimitive.DialogProps

/**
 * Header 타입
 */
export type DialogHeaderProps = HTMLAttributes<HTMLDivElement>

/**
 * Title 타입
 */
export type DialogTitleProps = ComponentProps<typeof DialogPrimitive.Title> & CommonProps

/**
 * Content 타입
 */
export type DialogContentProps = ComponentProps<typeof DialogPrimitive.Content> & CommonProps
