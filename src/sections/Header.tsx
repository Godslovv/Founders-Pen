import Logo from "../components/Logo"
import { navLinks } from "../constants/content"

type HeaderProps = {
  variant?: "light" | "dark"
}

const Header = ({ variant = "dark" }: HeaderProps) => {
  const textColor = variant === "dark" ? "text-white" : "text-[#070c23]"

  return (
    <header className="w-full justify-items-center pt-2">
      <div className={`flex w-full max-w-7xl flex-col items-center gap-4 px-2 py-4 md:flex-row md:justify-between ${textColor}`}>
        <Logo tone={variant === "dark" ? "light" : "dark"} />
        
        <nav className="flex items-center gap-4 text-[14px] md:gap-14 md:text-[16px]">
          {navLinks.map((link) => (
            <a key={link.href} className="hover:opacity-70" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
