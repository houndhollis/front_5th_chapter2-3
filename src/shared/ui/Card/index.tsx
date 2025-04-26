import { CardContentProps, CardHeaderProps, CardProps, CardTitleProps } from "./type"

const Card = ({ className, ...props }: CardProps) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
)

const CardHeader = ({ className, ...props }: CardHeaderProps) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
)

const CardTitle = ({ className, ...props }: CardTitleProps) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
)

const CardContent = ({ className, ...props }: CardContentProps) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
)

Card.displayName = "Card"
CardHeader.displayName = "CardHeader"
CardTitle.displayName = "CardTitle"
CardContent.displayName = "CardContent"

Card.Header = CardHeader
Card.Title = CardTitle
Card.Content = CardContent

export { Card }
