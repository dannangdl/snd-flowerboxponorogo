import React from "react"

// Definisi properti untuk komponen Card
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }, ref) => {
  // Kelas dasar untuk card
  const cardClass = "bg-white dark:bg-gray-700 border rounded-lg shadow-sm transition-all duration-300"

  return (
    <div ref={ref} className={`${cardClass} ${className}`} {...props}>
      {children}
    </div>
  )
})

Card.displayName = "Card"

// Definisi properti untuk komponen CardContent
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className, children, ...props }, ref) => {
  // Kelas dasar untuk card content
  const contentClass = "p-4 sm:p-6"

  return (
    <div ref={ref} className={`${contentClass} ${className}`} {...props}>
      {children}
    </div>
  )
})

CardContent.displayName = "CardContent"

// Ekspor kedua komponen
export { Card, CardContent }
