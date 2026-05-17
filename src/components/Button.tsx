import type { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: "primary" | "ghost" | "light"
}

const base =
  "inline-flex items-center justify-center rounded-full px-8 py-4 text-lg tracking-wide transition"

const variants = {
  primary:
    "bg-black text-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:bg-[#1b2034]",
  ghost: "border border-white/30 text-white hover:bg-white/10",
  light:
    "bg-white text-[#0c1226] shadow-[0_12px_24px_rgba(0,0,0,0.18)] hover:bg-[#f3f4f6]",
}

const Button = ({ children, href, variant = "primary" }: ButtonProps) => {
  const className = `${base} ${variants[variant]}`

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} type="button">
      {children}
    </button>
  )
}

export default Button
