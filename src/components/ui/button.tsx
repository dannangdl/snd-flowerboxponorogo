import React from "react"

// Definisi jenis varian tombol yang dapat digunakan
type ButtonVariant = "default" | "outline" | "link" | "ghost"

// Definisi jenis ukuran tombol yang dapat digunakan
type ButtonSize = "sm" | "md" | "lg"

// Properti untuk komponen Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "md", isLoading = false, fullWidth = false, className, children, ...props }, ref) => {
    // Menentukan kelas berdasarkan varian tombol
    let buttonClass = "inline-flex items-center justify-center rounded-lg font-medium focus:outline-none transition-colors duration-300"

    // Menambahkan kelas berdasarkan varian
    if (variant === "default") {
      buttonClass += " bg-pink-500 text-white hover:bg-pink-600"
    } else if (variant === "outline") {
      buttonClass += " border border-pink-500 text-pink-500 hover:bg-pink-100 hover:border-pink-500"
    } else if (variant === "link") {
      buttonClass += " text-pink-500 hover:text-pink-600"
    } else if (variant === "ghost") {
      buttonClass += " text-pink-500 hover:bg-pink-100"
    }

    // Menambahkan kelas berdasarkan ukuran
    if (size === "sm") {
      buttonClass += " px-4 py-2 text-sm"
    } else if (size === "md") {
      buttonClass += " px-6 py-3 text-md"
    } else if (size === "lg") {
      buttonClass += " px-8 py-4 text-lg"
    }

    // Menambahkan kelas untuk fullWidth
    if (fullWidth) {
      buttonClass += " w-full"
    }

    // Menambahkan kelas untuk keadaan loading
    if (isLoading) {
      buttonClass += " opacity-50 cursor-not-allowed"
    }

    return (
      <button
        ref={ref}
        className={`${buttonClass} ${className}`}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="animate-spin">🔄</span>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
