import { ComponentProps } from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CommonProps } from "../type"

/**
 * Select 타입
 */
export type SelectProps = SelectPrimitive.SelectProps & CommonProps

/**
 * SelectTrigger 타입
 */
export type SelectTriggerProps = ComponentProps<typeof SelectPrimitive.SelectTrigger> & CommonProps

/**
 * SelectContent 타입
 */
export type SelectContentProps = ComponentProps<typeof SelectPrimitive.SelectContent> & CommonProps

/**
 * SelectItem 타입
 */
export type SelectItemProps = ComponentProps<typeof SelectPrimitive.SelectItem> & CommonProps
