import { useState } from "react"
import Logo from "../components/Logo"
import { navLinks } from "../constants/content"

type HeaderProps = {
  variant?: "light" | "dark"
}

const Header = ({ variant = "dark" }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const textColor = variant === "dark" ? "text-white" : "text-[#0c1226]"

  return (
    <header className="w-full justify-items-center pt-1">
      <div className={`flex w-full max-w-7xl items-center justify-between px-2 py-6 ${textColor}`}>
        <Logo tone={variant === "dark" ? "light" : "dark"} />
        
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-14 text-sm md:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="hover:opacity-70 text-2xl" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <div className="h-0.5 w-6 bg-current" />
          <div className="h-0.5 w-6 bg-current" />
          <div className="h-0.5 w-6 bg-current" />
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="fixed top-0 left-0 right-0 h-1/2 md:hidden bg-[#0b1020] px-2 py-4 flex flex-col gap-8 text-white z-50 items-center justify-center">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-3xl hover:opacity-70"
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              className="hover:opacity-70 text-3xl" 
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
