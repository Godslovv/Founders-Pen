import type { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: "primary" | "ghost" | "light"
}

const base =
  "inline-flex items-center justify-center tracking-wide transition-transform transition-shadow duration-300 shadow-[0_0_12px_rgba(80,120,255,0.45),0_0_30px_rgba(80,120,255,0.28),0_0_60px_rgba(80,120,255,0.18)] hover:shadow-[0_0_16px_rgba(80,120,255,0.55),0_0_36px_rgba(80,120,255,0.34),0_0_72px_rgba(80,120,255,0.22)] hover:-translate-y-0.5"

const variants = {
  primary:
    "bg-black text-white hover:bg-[#1b2034] rounded-[26px] px-7 py-3 text-lg",
  ghost: "border border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg",
  light:
    "bg-white text-[#0c1226] hover:bg-[#f3f4f6] rounded-full px-6 py-2 text-md",
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
